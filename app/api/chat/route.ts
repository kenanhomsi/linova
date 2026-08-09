import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { buildSystemPrompt } from "@/lib/chatSystemPrompt";

// Uses Google's Gemini API (free tier) — see https://ai.google.dev/gemini-api/docs/pricing.
// Get a free key at https://aistudio.google.com/apikey and set GEMINI_API_KEY.
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/interactions?alt=sse";
const DEFAULT_MODEL = "gemini-3.6-flash";
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 16;

// --- Lightweight in-memory rate limiting ---------------------------------
// This is a soft guard, not a hard security boundary — it resets whenever
// the server process restarts or a new serverless instance spins up, and
// isn't shared across multiple instances behind a load balancer.
//
// The Gemini free tier is capped at roughly 10 requests/minute and 1,500
// requests/day *shared across the whole project* (i.e. across every visitor
// to the site), so on top of the usual per-IP guard we also track a global
// budget to fail gracefully (with the in-widget fallback message) instead
// of visitors getting silent errors once the shared quota is exhausted.
const PER_IP_WINDOW_MS = 5 * 60 * 1000;
const PER_IP_MAX_REQUESTS = 15;
const perIpLog = new Map<string, number[]>();

const GLOBAL_RPM_WINDOW_MS = 60 * 1000;
const GLOBAL_RPM_MAX_REQUESTS = 8; // stay under Gemini free tier's ~10 RPM
let globalRpmTimestamps: number[] = [];

const GLOBAL_RPD_MAX_REQUESTS = 1400; // stay under Gemini free tier's ~1500 RPD
let globalRpdDateKey = "";
let globalRpdCount = 0;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const recentForIp = (perIpLog.get(ip) ?? []).filter(
    (t) => now - t < PER_IP_WINDOW_MS,
  );
  recentForIp.push(now);
  perIpLog.set(ip, recentForIp);
  if (recentForIp.length > PER_IP_MAX_REQUESTS) return true;

  globalRpmTimestamps = globalRpmTimestamps.filter(
    (t) => now - t < GLOBAL_RPM_WINDOW_MS,
  );
  globalRpmTimestamps.push(now);
  if (globalRpmTimestamps.length > GLOBAL_RPM_MAX_REQUESTS) return true;

  const todayKey = new Date().toISOString().slice(0, 10);
  if (todayKey !== globalRpdDateKey) {
    globalRpdDateKey = todayKey;
    globalRpdCount = 0;
  }
  globalRpdCount += 1;
  if (globalRpdCount > GLOBAL_RPD_MAX_REQUESTS) return true;

  return false;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function sanitizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  const cleaned: ChatMessage[] = [];
  for (const item of input) {
    if (typeof item !== "object" || item === null) continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    cleaned.push({
      role,
      content: content.trim().slice(0, MAX_MESSAGE_LENGTH),
    });
  }

  const firstUserIndex = cleaned.findIndex((m) => m.role === "user");
  if (firstUserIndex === -1) return [];

  return cleaned.slice(firstUserIndex).slice(-MAX_HISTORY_MESSAGES);
}

// The Gemini Interactions API takes a single `input` string per request
// rather than a role-tagged messages array, so the conversation history is
// folded into one plain-text transcript. This sidesteps relying on Gemini's
// server-side session state (previous_interaction_id), keeping the request
// self-contained and easy to reason about.
function buildInputTranscript(messages: ChatMessage[]): string {
  const transcript = messages
    .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
    .join("\n");

  return `${transcript}\n\nWrite only the Assistant's next reply. Do not include a "Assistant:" label or any other prefix.`;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set — chat assistant disabled.");
    return NextResponse.json(
      { error: "The chat assistant isn't configured yet." },
      { status: 503 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: { messages?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const messages = sanitizeMessages(body.messages);
  if (messages.length === 0) {
    return NextResponse.json(
      { error: "No valid message provided." },
      { status: 400 },
    );
  }

  const locale = typeof body.locale === "string" ? body.locale : "en";
  const model = process.env.GEMINI_CHAT_MODEL || DEFAULT_MODEL;

  let upstream: Response;
  try {
    upstream = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        model,
        input: buildInputTranscript(messages),
        system_instruction: buildSystemPrompt(locale),
        stream: true,
        generation_config: {
          thinking_level: "low",
        },
      }),
    });
  } catch (err) {
    console.error("Failed to reach Gemini API", err);
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable." },
      { status: 502 },
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Gemini API error", upstream.status, detail);
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable." },
      { status: 502 },
    );
  }

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = "";
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (!data || data === "[DONE]") continue;

            try {
              const event = JSON.parse(data);
              const text: unknown =
                event?.delta?.type === "text" ? event.delta.text : undefined;
              if (
                (event?.event_type === "step.delta" ||
                  event?.eventType === "step.delta") &&
                typeof text === "string"
              ) {
                controller.enqueue(encoder.encode(text));
              }
            } catch {
              // Ignore malformed / partial SSE chunks.
            }
          }
        }
      } catch (err) {
        console.error("Chat stream error", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
