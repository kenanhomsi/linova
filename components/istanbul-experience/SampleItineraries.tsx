"use client";

import { Container, Title, Text, Box, Accordion } from "@mantine/core";
import { useTranslations } from "next-intl";

import { FadeInUp } from "@/components/ui/Animate";

import styles from "./SampleItineraries.module.css";

interface DayPlan {
  label: string;
  morning: string;
  afternoon: string;
  evening: string;
}

interface Itinerary {
  name: string;
  days: DayPlan[];
}

export function SampleItineraries() {
  const t = useTranslations("istanbulExperience");
  const items = t.raw("itineraries.items") as Itinerary[];
  const timeLabels = t.raw("itineraries.timeLabels") as {
    morning: string;
    afternoon: string;
    evening: string;
  };

  return (
    <Box
      component="section"
      className={styles.section}
      aria-labelledby="itineraries-heading"
    >
      <Container size="lg">
        <FadeInUp>
          <div className={styles.header}>
            <Title
              order={2}
              id="itineraries-heading"
              className={styles.title}
              ta="center"
            >
              {t("itineraries.title")}
            </Title>
            <Text c="dimmed" ta="center" size="md" className={styles.subtitle}>
              {t("itineraries.subtitle")}
            </Text>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.06}>
          <Accordion
            variant="separated"
            radius="md"
            className={styles.accordion}
          >
            {items.map((it) => (
              <Accordion.Item key={it.name} value={it.name}>
                <Accordion.Control>{it.name}</Accordion.Control>
                <Accordion.Panel>
                  {it.days.map((d) => (
                    <div key={d.label} className={styles.day}>
                      <div className={styles.dayLabel}>{d.label}</div>
                      <div className={styles.row}>
                        <strong>{timeLabels.morning}</strong>
                        {d.morning}
                      </div>
                      <div className={styles.row}>
                        <strong>{timeLabels.afternoon}</strong>
                        {d.afternoon}
                      </div>
                      <div className={styles.row}>
                        <strong>{timeLabels.evening}</strong>
                        {d.evening}
                      </div>
                    </div>
                  ))}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </FadeInUp>
      </Container>
    </Box>
  );
}
