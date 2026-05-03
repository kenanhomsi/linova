import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "@mantine/core/styles.css";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { getTextDirection, isAppLocale } from "@/i18n/locale-direction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseMetadata: Pick<Metadata, "title" | "description"> = {
  title: {
    default: "Linova Clinic Istanbul | Dental Implants Turkey | Hollywood Smile Makeover",
    template: "%s | Linova Clinic Istanbul",
  },
  description:
    "Premium dental care in Istanbul. World-class dental treatments, Hollywood Smile, implants, veneers, full mouth restoration. Free consultation & medical tourism support.",
};

async function getRequestBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return new URL(`${proto}://${host}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl();

  return {
    ...baseMetadata,
    metadataBase: baseUrl,
    icons: {
      icon: "/tab-logo3.svg",
      shortcut: "/tab-logo3.svg",
      apple: "/tab-logo3.svg",
    },
    // icons: {
    //   icon: [{ url: "/favicon.ico" }],
    //   shortcut: [{ url: "/favicon.ico" }],
    // },
    keywords: [
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
    openGraph: {
      type: "website",
      siteName: "Linova Clinic Istanbul",
      title: "Linova Clinic Istanbul | Dental Implants Turkey | Hollywood Smile Makeover",
      description:
        "Premium dental care in Istanbul. Hollywood Smile, implants, veneers, and full mouth restoration. Save up to 70% vs UK & US prices.",
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
      title: "Linova Clinic Istanbul | Dental Implants Turkey",
      description:
        "Premium dental care in Istanbul. Hollywood Smile, implants, veneers. Save up to 70%. Free consultation.",
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
    verification: {},
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
    headerLocale && isAppLocale(headerLocale) ? headerLocale : routing.defaultLocale;
  const dir = getTextDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
