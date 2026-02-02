"use client";

import { useTranslations } from "next-intl";
import { Stack, Title, Text } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./ContactPageHeader.module.css";

export function ContactPageHeader() {
  const t = useTranslations("home");

  return (
    <FadeInUp>
      <Stack gap="xs" ta="center" maw={640} mx="auto">
        <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
          Get in Touch
        </Text>
        <Title order={1} size="2.5rem" fw={700} className={styles.title}>
          {t("footerForm.title")}
        </Title>
        <Text size="lg" lh={1.6} className={styles.subtitle}>
          {t("footerForm.subtitle")}
        </Text>
      </Stack>
    </FadeInUp>
  );
}
