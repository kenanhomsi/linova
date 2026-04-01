import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TREATMENTS, getTreatmentBySlug } from "@/lib/treatments";
import { TreatmentDetailContent } from "@/components/treatments/TreatmentDetailContent";
import { BackToTop } from "@/components/layout/BackToTop";
import { BreadcrumbJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return TREATMENTS.flatMap((treatment) =>
    routing.locales.map((locale) => ({
      locale,
      slug: treatment.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) return {};

  const t = await getTranslations({ locale, namespace: "treatments" });
  const title = t(`items.${slug}.title`);
  const description = t(`items.${slug}.shortDescription`);

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/treatments/${slug}`;
  }
  languages["x-default"] = `${BASE_URL}/en/treatments/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/treatments/${slug}`,
      languages,
    },
    openGraph: {
      title: `${title} | Linova Clinic Istanbul`,
      description,
      url: `${BASE_URL}/${locale}/treatments/${slug}`,
    },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const tCommon = await getTranslations("common");
  const tTreatments = await getTranslations("treatments");
  const itemTitle = tTreatments(`items.${slug}.title`);

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          { name: tTreatments("title"), url: `${BASE_URL}/${locale}/treatments` },
          { name: itemTitle, url: `${BASE_URL}/${locale}/treatments/${slug}` },
        ]}
      />
      <TreatmentDetailContent treatment={treatment} />
      <BackToTop />
    </main>
  );
}
