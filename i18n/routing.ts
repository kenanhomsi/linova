import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "tr", "de", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
});
