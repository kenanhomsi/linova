import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { HollywoodSmileLanding } from "@/components/treatments/HollywoodSmileLanding";
import { routing } from "@/i18n/routing";
import { TREATMENTS, getTreatmentBySlug } from "@/lib/treatments";

import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

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
    languages[loc] = `${BASE_URL}/${loc}/landing/${slug}`;
  }
  languages["x-default"] = `${BASE_URL}/en/landing/${slug}`;

  return {
    title: `${title} Offer | Linova Clinic Istanbul`,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/landing/${slug}`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title: `${title} Offer | Linova Clinic Istanbul`,
      description,
      url: `${BASE_URL}/${locale}/landing/${slug}`,
      ...(absoluteOgImage
        ? { images: [{ url: absoluteOgImage, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} Offer | Linova Clinic Istanbul`,
      description,
      ...(absoluteOgImage ? { images: [absoluteOgImage] } : {}),
    },
    // Prevent indexing for ad landing pages (usually good practice)
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  // We only have the Hollywood Smile landing page ready right now
  if (slug === "hollywood-smile") {
    return <HollywoodSmileLanding treatment={treatment} />;
  }

  // If a landing page doesn't exist for this slug yet, show 404
  notFound();
}
