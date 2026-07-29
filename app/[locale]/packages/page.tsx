import { setRequestLocale, getTranslations } from "next-intl/server";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BackToTop } from "@/components/layout/BackToTop";
import { PackageCards } from "@/components/packages/PackageCards";
import { PackageIncludes } from "@/components/packages/PackageIncludes";
import { PackagesCTA } from "@/components/packages/PackagesCTA";
import { PackagesHero } from "@/components/packages/PackagesHero";
import { SavingsComparison } from "@/components/packages/SavingsComparison";
import { routing } from "@/i18n/routing";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

import type { Metadata } from "next";

import { SITE_CANONICAL_ORIGIN } from "@/lib/constants";

const BASE_URL = SITE_CANONICAL_ORIGIN;

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "packages" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/packages`;
  }
  languages["x-default"] = `${BASE_URL}/en/packages`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("seoKeywords")
      .split(",")
      .map((k) => k.trim()),
    alternates: {
      canonical: `${BASE_URL}/${locale}/packages`,
      languages,
    },
    openGraph: {
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/packages`,
    },
  };
}

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");
  const tPackages = await getTranslations("packages");

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          { name: tPackages("title"), url: `${BASE_URL}/${locale}/packages` },
        ]}
      />
      <PackagesHero />
      <PackageCards />
      <SavingsComparison />
      <PackageIncludes />
      <TestimonialsSection />
      <PackagesCTA />
      <BackToTop />
    </main>
  );
}
