import { routing } from "./routing";

export type TextDirection = "ltr" | "rtl";

type AppLocale = (typeof routing.locales)[number];

export function getTextDirection(locale: string): TextDirection {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isRtlLocale(locale: string): boolean {
  return getTextDirection(locale) === "rtl";
}

export function isAppLocale(locale: string): locale is AppLocale {
  return (routing.locales as readonly string[]).includes(locale);
}
