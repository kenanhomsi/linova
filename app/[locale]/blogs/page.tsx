import { setRequestLocale, getTranslations } from "next-intl/server";

import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { BlogsPageHeader } from "@/components/blogs/BlogsPageHeader";
import { BackToTop } from "@/components/layout/BackToTop";
import { routing } from "@/i18n/routing";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";
const OG_IMAGE = `${BASE_URL}/images/hero-patient.jpg`;

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogs" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/blogs`;
  }
  languages["x-default"] = `${BASE_URL}/en/blogs`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/blogs`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/blogs`,
      images: [{ url: OG_IMAGE, alt: "Linova Clinic Istanbul — Blog" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      images: [OG_IMAGE],
    },
  };
}

export default async function BlogsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");
  const tBlogs = await getTranslations("blogs");

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          { name: tBlogs("title"), url: `${BASE_URL}/${locale}/blogs` },
        ]}
      />
      <BlogsPageHeader />
      <BlogsGrid />
      <BackToTop />
    </main>
  );
}
