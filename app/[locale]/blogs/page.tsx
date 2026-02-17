import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { BlogsPageHeader } from "@/components/blogs/BlogsPageHeader";
import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { BackToTop } from "@/components/layout/BackToTop";
import { BreadcrumbJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string }>;
};

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
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/blogs`,
    },
  };
}

export default async function BlogsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}` },
          { name: "Blog", url: `${BASE_URL}/${locale}/blogs` },
        ]}
      />
      <BlogsPageHeader />
      <BlogsGrid />
      <BackToTop />
    </main>
  );
}
