"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

/**
 * Syncs document direction (RTL/LTR) and lang with the active locale.
 * Ensures dir/lang update on client-side language change (e.g. navigation to /ar/).
 */
export function SyncDir() {
  const locale = useLocale();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
