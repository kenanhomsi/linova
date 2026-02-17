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
import { ChatWidget } from "@/components/chat/ChatWidget";
import { routing } from "@/i18n/routing";

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

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MantineProvider direction={direction}>
        <ThemeProvider>
          <SyncColorScheme />
          <SyncDir />
          <div
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
            <ChatWidget />
          </div>
        </ThemeProvider>
      </MantineProvider>
    </NextIntlClientProvider>
  );
}
