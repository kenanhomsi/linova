"use client";

import { Stack, Title, Text } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./WhyUsPageHeader.module.css";

export function WhyUsPageHeader() {
  return (
    <FadeInUp>
      <Stack gap="xs" className={styles.wrapper}>
        <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
          Why Choose Us
        </Text>
        <Title order={1} className={styles.title}>
          Why Choose Linova
        </Title>
        <Text size="lg" lh={1.6} className={styles.subtitle}>
          We make your dental journey smooth from consultation to aftercare —
          world-class care in Istanbul with full medical tourism support.
        </Text>
      </Stack>
    </FadeInUp>
  );
}
