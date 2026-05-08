import { setRequestLocale, getTranslations } from "next-intl/server";

import { BackToTop } from "@/components/layout/BackToTop";
import { TreatmentsContent } from "@/components/treatments/TreatmentsContent";
import { TreatmentsCTA } from "@/components/treatments/TreatmentsCTA";
import { TreatmentsPageHeader } from "@/components/treatments/TreatmentsPageHeader";
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
  const t = await getTranslations({ locale, namespace: "treatments" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/treatments`;
  }
  languages["x-default"] = `${BASE_URL}/en/treatments`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("seoKeywords")
      ?.split(",")
      .map((k) => k.trim()),
    alternates: {
      canonical: `${BASE_URL}/${locale}/treatments`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/treatments`,
      images: [{ url: OG_IMAGE, alt: "Linova Clinic Istanbul — Treatments" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      images: [OG_IMAGE],
    },
  };
}

export default async function TreatmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");
  const tTreatments = await getTranslations("treatments");

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          {
            name: tTreatments("title"),
            url: `${BASE_URL}/${locale}/treatments`,
          },
        ]}
      />
      <TreatmentsPageHeader />
      <TreatmentsContent />
      <TreatmentsCTA />
      <BackToTop />
    </main>
  );
}
