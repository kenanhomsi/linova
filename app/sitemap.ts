import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://linovaclinic.com";

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/treatments", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/why-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of routing.locales) {
      const localePath = `/${locale}${page.path}`;

      const alternates: Record<string, string> = {};
      for (const alt of routing.locales) {
        alternates[alt] = `${BASE_URL}/${alt}${page.path}`;
      }

      entries.push({
        url: `${BASE_URL}${localePath}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
