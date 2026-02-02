import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Linova Clinic Istanbul | Dental Implants Turkey | Hollywood Smile Makeover",
    template: "%s | Linova Clinic",
  },
  description:
    "Premium dental care in Istanbul. World-class dental treatments, Hollywood Smile, implants, veneers, full mouth restoration. Free consultation & medical tourism support.",
  openGraph: {
    title: "Linova Clinic Istanbul | Dental Implants Turkey | Hollywood Smile Makeover",
    description:
      "Premium dental care in Istanbul. Hollywood Smile, implants, veneers, and full mouth restoration.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") ?? headersList.get("X-NEXT-INTL-LOCALE") ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
