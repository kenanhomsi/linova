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
import { FAQJsonLd, BreadcrumbJsonLd } from "@/lib/structured-data";
import { HomeBelowFoldClient } from "@/components/home/HomeBelowFoldClient";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}`;
  }
  languages["x-default"] = `${BASE_URL}/en`;

  return {
    title: `${t("siteFullName")} | ${t("siteTagline")}`,
    description:
      "Premium dental care in Istanbul. Hollywood Smile, dental implants, veneers, full mouth restoration. Save up to 70% vs UK & US prices. Free consultation.",
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: `${t("siteFullName")} | ${t("siteTagline")}`,
      description:
        "Premium dental care in Istanbul. Hollywood Smile, dental implants, veneers, full mouth restoration. Save up to 70%.",
      url: `${BASE_URL}/${locale}`,
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
      <SectionReveal delay={0.05}>
        <GallerySection />
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <DigitalDentistrySection />
      </SectionReveal>
      <HomeBelowFoldClient />
      <BackToTop />
    </div>
  );
}
