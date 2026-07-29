import { Container, Box, Stack } from "@mantine/core";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { ContactPageHeader } from "@/components/contact/ContactPageHeader";
import { ContactBlock } from "@/components/shared/ContactBlock";
import { routing } from "@/i18n/routing";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

import styles from "./page.module.css";

import type { Metadata } from "next";

import { SITE_CANONICAL_ORIGIN } from "@/lib/constants";

const BASE_URL = SITE_CANONICAL_ORIGIN;

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/contact`;
  }
  languages["x-default"] = `${BASE_URL}/en/contact`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages,
    },
    openGraph: {
      title: `${t("title")} | Linova Clinic Istanbul`,
      description: t("description"),
      url: `${BASE_URL}/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Box id="contact" py="xl" className={styles.root}>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}` },
          { name: "Contact", url: `${BASE_URL}/${locale}/contact` },
        ]}
      />
      <Container size="xl">
        <Stack gap="xl">
          <ContactPageHeader />
          <ContactBlock />
        </Stack>
      </Container>
    </Box>
  );
}
