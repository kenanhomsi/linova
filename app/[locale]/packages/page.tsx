import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PackagesHero } from "@/components/packages/PackagesHero";
import { PackageCards } from "@/components/packages/PackageCards";
import { SavingsComparison } from "@/components/packages/SavingsComparison";
import { PackageIncludes } from "@/components/packages/PackageIncludes";
import { PackagesCTA } from "@/components/packages/PackagesCTA";
import { BackToTop } from "@/components/layout/BackToTop";
import { BreadcrumbJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string }>;
};

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
      <PackagesCTA />
      <BackToTop />
    </main>
  );
}
