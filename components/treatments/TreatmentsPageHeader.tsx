"use client";

import { Stack, Title, Text } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./TreatmentsPageHeader.module.css";

export function TreatmentsPageHeader() {
  return (
    <FadeInUp>
      <Stack gap="xs" className={styles.wrapper}>
        <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
          Our Services
        </Text>
        <Title order={1} className={styles.title}>
          Our Treatments
        </Title>
        <Text size="lg" lh={1.6} className={styles.subtitle}>
          Full range of dental care from check-ups to full mouth restoration.
          Expert care in Istanbul with medical tourism support.
        </Text>
      </Stack>
    </FadeInUp>
  );
}
