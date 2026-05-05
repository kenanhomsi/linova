import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { CompleteDentalSolutionsSection } from "@/components/home/CompleteDentalSolutionsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { DigitalDentistrySection } from "@/components/home/DigitalDentistrySection";
import { SectionReveal } from "@/components/ui/Animate";
import { BackToTop } from "@/components/layout/BackToTop";
import {
  FAQJsonLd,
  BreadcrumbJsonLd,
  OrganizationJsonLd,
  MedicalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/lib/structured-data";
import { HomeBelowFoldClient } from "@/components/home/HomeBelowFoldClient";
import { HomeFoldClient } from "@/components/home/HomeFoldClient";
import { DentalJourneySection } from "@/components/home/DentalJourneySection";
import { SeoContentSection } from "@/components/home/SeoContentSection";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}`;
  }
  languages["x-default"] = `${BASE_URL}/en`;

  return {
    title: `${tCommon("siteFullName")} | ${tCommon("siteTagline")}`,
    description: tHome("seoDescription"),
    keywords: tHome("seoKeywords").split(",").map((k) => k.trim()),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: `${tCommon("siteFullName")} | ${tCommon("siteTagline")}`,
      description: tHome("seoDescription"),
      url: `${BASE_URL}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${tCommon("siteFullName")} | ${tCommon("siteTagline")}`,
      description: tHome("seoDescription"),
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations("home");
  const faqItems = tHome.raw("faq.items") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div>
      <OrganizationJsonLd />
      <MedicalBusinessJsonLd />
      <WebSiteJsonLd />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}` },
        ]}
      />
      <Hero />
      <StatsBar />
      <SectionReveal>
        <CompleteDentalSolutionsSection animated />
      </SectionReveal>
      <HomeFoldClient />
      {/* <SeoContentSection locale={locale} /> */}
      <SectionReveal delay={0.05}>
        <GallerySection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <DentalJourneySection />
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <DigitalDentistrySection />
      </SectionReveal>
      <HomeBelowFoldClient />
      <BackToTop />
    </div>
  );
}
