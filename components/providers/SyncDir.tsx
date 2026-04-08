"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { getTextDirection } from "@/i18n/locale-direction";

/**
 * Syncs document direction (RTL/LTR) and lang with the active locale.
 * Ensures dir/lang update on client-side language change (e.g. navigation to /ar/).
 */
export function SyncDir() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.dir = getTextDirection(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
