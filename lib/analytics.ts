"use client";

/**
 * Thin wrapper around gtag.js so conversion tracking works once
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set (see GoogleAnalytics in app/layout.tsx),
 * and is a silent no-op otherwise (e.g. local dev, or before the env var exists).
 *
 * Usage:
 *   import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";
 *   <a onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: "header" })} ...>
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_EVENTS = {
  WHATSAPP_CLICK: "whatsapp_click",
  PHONE_CLICK: "phone_click",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  EMAIL_CLICK: "email_click",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export function trackEvent(
  name: AnalyticsEventName,
  params: Record<string, string | number | boolean | undefined> = {},
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}
