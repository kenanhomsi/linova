import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { BackToTop } from "@/components/layout/BackToTop";
import { TreatmentDetailContent } from "@/components/treatments/TreatmentDetailContent";
import { routing } from "@/i18n/routing";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  MedicalProcedureJsonLd,
} from "@/lib/structured-data";
import { TREATMENTS, getTreatmentBySlug } from "@/lib/treatments";

import type { Metadata } from "next";

import { SITE_CANONICAL_ORIGIN } from "@/lib/constants";

const BASE_URL = SITE_CANONICAL_ORIGIN;

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

function toAbsoluteImageUrl(image?: unknown): string | undefined {
  if (!image) return undefined;
  const src =
    typeof image === "string"
      ? image
      : typeof image === "object" && image && "src" in image
        ? (image as { src: string }).src
        : undefined;
  if (!src) return undefined;
  return src.startsWith("http") ? src : `${BASE_URL}${src}`;
}

export function generateStaticParams() {
  return TREATMENTS.flatMap((treatment) =>
    routing.locales.map((locale) => ({
      locale,
      slug: treatment.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Not found",
      robots: { index: false, follow: false },
    };
  }

  const t = await getTranslations({ locale, namespace: "treatments" });
  const title = t(`items.${slug}.title`);
  const description = t(`items.${slug}.shortDescription`);
  const absoluteOgImage = toAbsoluteImageUrl(treatment.image);

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
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title: `${title} | Linova Clinic Istanbul`,
      description,
      url: `${BASE_URL}/${locale}/treatments/${slug}`,
      ...(absoluteOgImage
        ? { images: [{ url: absoluteOgImage, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Linova Clinic Istanbul`,
      description,
      ...(absoluteOgImage ? { images: [absoluteOgImage] } : {}),
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
  const tHome = await getTranslations("home");
  const itemTitle = tTreatments(`items.${slug}.title`);
  const itemDescription = tTreatments(`items.${slug}.shortDescription`);
  const absoluteUrl = `${BASE_URL}/${locale}/treatments/${slug}`;
  const absoluteOgImage = toAbsoluteImageUrl(treatment.image);
  const faqItems = tHome.raw("faq.items") as {
    question: string;
    answer: string;
  }[];

  return (
    <main>
      <MedicalProcedureJsonLd
        url={absoluteUrl}
        name={itemTitle}
        description={itemDescription}
        image={absoluteOgImage}
        inLanguage={locale}
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          {
            name: tTreatments("title"),
            url: `${BASE_URL}/${locale}/treatments`,
          },
          { name: itemTitle, url: `${BASE_URL}/${locale}/treatments/${slug}` },
        ]}
      />
      <TreatmentDetailContent treatment={treatment} />
      <BackToTop />
    </main>
  );
}
