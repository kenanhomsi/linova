import { Geist } from "next/font/google";
import { headers } from "next/headers";

import "@mantine/core/styles.css";
import "./globals.css";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { getTextDirection, isAppLocale } from "@/i18n/locale-direction";
import { routing } from "@/i18n/routing";
import { SITE_CANONICAL_ORIGIN } from "@/lib/constants";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseMetadata: Pick<Metadata, "title" | "description"> = {
  title: {
    default:
      "Linova Clinic | Dental Clinic in Turkey for Implants, Veneers & Hollywood Smile",
    template: "%s | Linova Clinic Istanbul",
  },
  description:
    "Linova Clinic is a dental clinic in Turkey offering dental implants, veneers, Hollywood Smile, and full mouth restoration in Istanbul with patient-friendly dental tourism support.",
};

async function getRequestBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return new URL(`${proto}://${host}`);
}

/** Stable absolute URLs for icons and Open Graph (avoids www/http duplicate SERP assets). */
async function getMetadataBaseUrl(): Promise<URL> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    try {
      return new URL(fromEnv);
    } catch {
      /* ignore invalid env */
    }
  }
  if (process.env.VERCEL_ENV === "production") {
    return new URL(SITE_CANONICAL_ORIGIN);
  }
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }
  return getRequestBaseUrl();
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getMetadataBaseUrl();

  return {
    ...baseMetadata,
    metadataBase: baseUrl,
    icons: {
      icon: [
        { url: "/tab-logo.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      ],
      shortcut: "/favicon.ico",
      apple: "/tab-logo.svg",
    },
    keywords: [
      "clinic in turkey",
      "dental clinic in turkey",
      "linova clinic",
      "linova dental clinic",
      "dental implants Turkey",
      "Hollywood smile Istanbul",
      "dental clinic Istanbul",
      "veneers Turkey",
      "teeth whitening Istanbul",
      "dental tourism Turkey",
      "cosmetic dentistry Istanbul",
      "all-on-4 implants Turkey",
      "dental crowns Istanbul",
      "smile makeover Turkey",
      "affordable dental care Turkey",
      "best dentist Istanbul",
    ],
    authors: [{ name: "Linova Clinic", url: baseUrl.toString() }],
    creator: "Linova Clinic Istanbul",
    publisher: "Linova Clinic Istanbul",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (and/or _BING) once you have a
    // real code from Search Console / Bing Webmaster Tools — see
    // https://search.google.com/search-console -> Settings -> Ownership verification -> HTML tag.
    openGraph: {
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title:
        "Linova Clinic | Dental Clinic in Turkey for Implants, Veneers & Hollywood Smile",
      description:
        "Dental clinic in Turkey for implants, veneers, Hollywood Smile, and smile makeovers. Discover Linova Clinic in Istanbul.",
      url: baseUrl,
      images: [
        {
          url: "/images/hero-patient.jpg",
          alt: "Linova Clinic Istanbul — Premium Dental Care",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Linova Clinic | Dental Clinic in Turkey",
      description:
        "Linova Clinic offers dental implants, veneers, Hollywood Smile, and dental tourism support in Istanbul, Turkey.",
      images: ["/images/hero-patient.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}

const LOCALE_HEADER = "x-next-intl-locale";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerLocale = (await headers()).get(LOCALE_HEADER);
  const locale =
    headerLocale && isAppLocale(headerLocale)
      ? headerLocale
      : routing.defaultLocale;
  const dir = getTextDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
