"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { detectIntent, getResponse, detectLanguage } from "@/lib/chatKnowledge";
import { WHATSAPP_LINK } from "@/lib/constants";
import styles from "./ChatWidget.module.css";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export function ChatWidget() {
  const locale = useLocale();
  const t = useTranslations("chat");

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          text: t("welcomeMessage"),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const addBotResponse = useCallback(
    (userMessage: string) => {
      setIsTyping(true);

      const detectedLang = detectLanguage(userMessage);
      const responseLocale = detectedLang !== "en" ? detectedLang : locale;
      const intent = detectIntent(userMessage);
      const response = getResponse(intent, responseLocale);

      const delay = Math.min(600 + response.length * 1.5, 1800);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            text: response,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, delay);
    },
    [locale]
  );

  const handleSend = useCallback(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setShowQuickActions(false);
    if (!hasInteracted) setHasInteracted(true);

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        text: trimmed,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    setInputValue("");
    addBotResponse(trimmed);
  }, [inputValue, hasInteracted, addBotResponse]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleQuickAction = useCallback(
    (action: string) => {
      if (!hasInteracted) setHasInteracted(true);

      if (action === "whatsapp") {
        window.open(WHATSAPP_LINK, "_blank");
        return;
      }

      const actionMap: Record<string, string> = {
        treatments: "services",
        pricing: "pricing",
        consultation: "consultation",
      };

      const intent = actionMap[action];
      if (!intent) return;

      const userText = t(`quickActions.${action}` as Parameters<typeof t>[0]);

      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          text: userText,
          sender: "user",
          timestamp: new Date(),
        },
      ]);

      setIsTyping(true);
      const response = getResponse(
        intent as Parameters<typeof getResponse>[0],
        locale
      );
      const delay = Math.min(600 + response.length * 1.5, 1800);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            text: response,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, delay);
    },
    [hasInteracted, locale, t]
  );

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(
        /(https?:\/\/[^\s\n]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;opacity:0.85">$1</a>'
      );
  };

  return (
    <>
      {/* ── Floating Toggle ── */}
      <button
        className={styles.chatToggle}
        onClick={toggleChat}
        data-open={isOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {!isOpen && !hasInteracted && <span className={styles.pulse} />}
        <svg
          className={styles.chatToggleIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          )}
        </svg>
      </button>

      {/* ── Chat Window ── */}
      <div
        className={`${styles.chatWindow} ${isOpen ? styles.chatWindowOpen : ""}`}
        role="dialog"
        aria-label={t("title")}
      >
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderAvatar}>🦷</div>
          <div className={styles.chatHeaderInfo}>
            <p className={styles.chatHeaderTitle}>{t("title")}</p>
            <p className={styles.chatHeaderSubtitle}>
              <span className={styles.onlineDot} />
              {t("subtitle")}
            </p>
          </div>
          <button
            className={styles.chatCloseBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.chatMessages}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.message} ${
                msg.sender === "bot" ? styles.botMessage : styles.userMessage
              }`}
              {...(msg.sender === "bot"
                ? { dangerouslySetInnerHTML: { __html: formatMessage(msg.text) } }
                : { children: msg.text })}
            />
          ))}

          {/* Quick Actions — shown after welcome */}
          {showQuickActions && messages.length > 0 && (
            <div className={styles.quickActions}>
              <button
                className={styles.quickActionBtn}
                onClick={() => handleQuickAction("treatments")}
              >
                {t("quickActions.treatments")}
              </button>
              <button
                className={styles.quickActionBtn}
                onClick={() => handleQuickAction("pricing")}
              >
                {t("quickActions.pricing")}
              </button>
              <button
                className={styles.quickActionBtn}
                onClick={() => handleQuickAction("consultation")}
              >
                {t("quickActions.consultation")}
              </button>
              <button
                className={`${styles.quickActionBtn} ${styles.quickActionWhatsapp}`}
                onClick={() => handleQuickAction("whatsapp")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("quickActions.whatsapp")}
                </span>
              </button>
            </div>
          )}

          {/* Typing dots */}
          {isTyping && (
            <div className={styles.typingIndicator}>
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.chatInputArea}>
          <input
            ref={inputRef}
            className={styles.chatInput}
            type="text"
            placeholder={t("placeholder")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            dir="auto"
            autoComplete="off"
          />
          <button
            className={styles.chatSendBtn}
            onClick={handleSend}
            disabled={!inputValue.trim()}
            aria-label={t("send")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* Powered by */}
        <div className={styles.chatFooter}>{t("poweredBy")}</div>
      </div>
    </>
  );
}
