"use client";

import { Container, Title, Text, Stack, Box } from "@mantine/core";
import {
  IconPlane,
  IconHotelService,
  IconLanguage,
  IconVideo,
  IconMapPin,
} from "@tabler/icons-react";
import { getTreatmentsByCategory } from "@/lib/treatments";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsSupportSection.module.css";

const TOURISM_ICONS: Record<string, React.ReactNode> = {
  "online-consultation": <IconVideo size={28} />,
  "airport-transfers": <IconPlane size={28} />,
  accommodation: <IconHotelService size={28} />,
  "multilingual-coordinators": <IconLanguage size={28} />,
  "tour-addons": <IconMapPin size={28} />,
};

export function WhyUsSupportSection() {
  const tourismServices = getTreatmentsByCategory("tourism");

  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" id="support" className={styles.section} aria-labelledby="support-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl">
            <Title id="support-heading" order={2} className={styles.sectionTitle}>
              Patient Support Services
            </Title>
            <Text className={styles.sectionSubtitle}>
              From online consultation to airport pickup and accommodation — we handle the details so you can focus on your smile.
            </Text>
          </Stack>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {tourismServices.map((t) => (
                <StaggerItem key={t.id}>
                  <div className={styles.card}>
                    <div className={styles.iconWrap}>
                      {TOURISM_ICONS[t.slug] ?? <IconVideo size={28} />}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{t.title}</h3>
                      <Text size="sm" className={styles.cardDesc}>
                        {t.shortDescription}
                      </Text>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </Box>
    </SectionReveal>
  );
}
