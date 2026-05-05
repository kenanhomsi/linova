import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { MantineProvider } from "@/components/providers/MantineProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SyncColorScheme } from "@/components/providers/SyncColorScheme";
import { SyncDir } from "@/components/providers/SyncDir";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidgetLoader } from "@/components/chat/ChatWidgetLoader";
import { routing } from "@/i18n/routing";
import { getTextDirection } from "@/i18n/locale-direction";

export const metadata: Metadata = {
  title: {
    default: "Linova Clinic | Dental Clinic in Turkey for Implants, Veneers & Hollywood Smile",
    template: "%s | Linova Clinic",
  },
  description:
    "Linova Clinic is a premier dental clinic in Turkey offering dental implants, veneers, Hollywood Smile, and full mouth restoration in Istanbul with patient-friendly medical tourism support.",
  keywords: [
    "linova",
    "linova dental",
    "linova clinic",
    "linova turkey",
    "clinic turkey",
    "dental treatment turkey",
    "medical tourism turkey",
    "best dental clinic istanbul",
    "dental holiday turkey",
    "affordable dental care turkey",
    "dental implants turkey",
    "veneers turkey",
    "hollywood smile turkey"
  ],
  openGraph: {
    title: "Linova Clinic | Dental Clinic in Turkey for Implants, Veneers & Hollywood Smile",
    description:
      "Dental clinic in Turkey for implants, veneers, Hollywood Smile, and smile makeovers. Discover Linova Clinic in Istanbul for your medical tourism needs.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tCommon = await getTranslations("common");

  const direction = getTextDirection(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MantineProvider direction={direction}>
        <ThemeProvider>
          <SyncColorScheme />
          <SyncDir />
          <div
            className="site-shell"
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <a href="#main-content" className="skip-link">
              {tCommon("skipToContent")}
            </a>
            <Header />
            <main id="main-content" style={{ flex: 1 }} tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <ChatWidgetLoader />
          </div>
        </ThemeProvider>
      </MantineProvider>
    </NextIntlClientProvider>
  );
}
