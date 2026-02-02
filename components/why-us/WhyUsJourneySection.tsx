"use client";

import { Box, Container } from "@mantine/core";
import { SectionReveal } from "@/components/ui/Animate";
import { PatientJourney } from "@/components/home/PatientJourney";
import styles from "./WhyUsJourneySection.module.css";

export function WhyUsJourneySection() {
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="journey-heading">
        <Container size="xl">
          <PatientJourney />
        </Container>
      </Box>
    </SectionReveal>
  );
}
