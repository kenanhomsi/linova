import { setRequestLocale, getTranslations } from "next-intl/server";

import { AreasToStay } from "@/components/istanbul-experience/AreasToStay";
import { BestTimeToVisit } from "@/components/istanbul-experience/BestTimeToVisit";
import { IstanbulCTA } from "@/components/istanbul-experience/IstanbulCTA";
import { IstanbulHero } from "@/components/istanbul-experience/IstanbulHero";
import { SampleItineraries } from "@/components/istanbul-experience/SampleItineraries";
import { ThingsToDo } from "@/components/istanbul-experience/ThingsToDo";
import { TourismTestimonials } from "@/components/istanbul-experience/TourismTestimonials";
import { TravelFAQ } from "@/components/istanbul-experience/TravelFAQ";
import { BackToTop } from "@/components/layout/BackToTop";
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
  const t = await getTranslations({ locale, namespace: "istanbulExperience" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/istanbul-experience`;
  }
  languages["x-default"] = `${BASE_URL}/en/istanbul-experience`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/istanbul-experience`,
      languages,
    },
    openGraph: {
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/istanbul-experience`,
    },
  };
}

export default async function IstanbulExperiencePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");
  const tIst = await getTranslations("istanbulExperience");

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          {
            name: tIst("title"),
            url: `${BASE_URL}/${locale}/istanbul-experience`,
          },
        ]}
      />
      <IstanbulHero />
      <AreasToStay />
      <ThingsToDo />
      <BestTimeToVisit />
      <SampleItineraries />
      <TourismTestimonials />
      <TravelFAQ />
      <IstanbulCTA />
      <BackToTop />
    </main>
  );
}
