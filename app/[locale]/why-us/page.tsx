import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { WhyUsPageHeader } from "@/components/why-us/WhyUsPageHeader";
import { WhyUsStatsSection } from "@/components/why-us/WhyUsStatsSection";
import { WhyUsReasonsSection } from "@/components/why-us/WhyUsReasonsSection";
import { WhyUsSupportSection } from "@/components/why-us/WhyUsSupportSection";
import { WhyUsJourneySection } from "@/components/why-us/WhyUsJourneySection";
import { WhyUsCTASection } from "@/components/why-us/WhyUsCTASection";
import { BackToTop } from "@/components/layout/BackToTop";
import { BreadcrumbJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyUs" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/why-us`;
  }
  languages["x-default"] = `${BASE_URL}/en/why-us`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/why-us`,
      languages,
    },
    openGraph: {
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/why-us`,
    },
  };
}

export default async function WhyUsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");
  const tWhyUs = await getTranslations("whyUs");

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          { name: tWhyUs("title"), url: `${BASE_URL}/${locale}/why-us` },
        ]}
      />
      <WhyUsPageHeader />
      <WhyUsStatsSection />
      <WhyUsReasonsSection />
      <WhyUsSupportSection />
      <WhyUsJourneySection />
      <WhyUsCTASection />
      <BackToTop />
    </main>
  );
}
