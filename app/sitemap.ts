import { routing } from "@/i18n/routing";
import { BLOG_POSTS } from "@/lib/blog-data";
import { TREATMENTS } from "@/lib/treatments";

import type { MetadataRoute } from "next";

const BASE_URL = "https://linovaclinic.com";

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  {
    path: "/dental-clinic-turkey",
    changeFrequency: "weekly" as const,
    priority: 0.95,
  },
  { path: "/treatments", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/blogs", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/packages", changeFrequency: "weekly" as const, priority: 0.9 },
  {
    path: "/istanbul-experience",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  { path: "/why-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const pushLocalizedEntry = (opts: {
    path: string;
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }) => {
    for (const locale of routing.locales) {
      const localePath = `/${locale}${opts.path}`;

      const alternates: Record<string, string> = {};
      for (const alt of routing.locales) {
        alternates[alt] = `${BASE_URL}/${alt}${opts.path}`;
      }

      entries.push({
        url: `${BASE_URL}${localePath}`,
        lastModified: opts.lastModified,
        changeFrequency: opts.changeFrequency,
        priority: opts.priority,
        alternates: { languages: alternates },
      });
    }
  };

  for (const page of pages) {
    pushLocalizedEntry({
      path: page.path,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  for (const post of BLOG_POSTS) {
    const postLastModified = new Date(post.date);
    pushLocalizedEntry({
      path: `/blogs/${post.slug}`,
      lastModified: Number.isNaN(postLastModified.getTime())
        ? new Date()
        : postLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const treatment of TREATMENTS) {
    pushLocalizedEntry({
      path: `/treatments/${treatment.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
