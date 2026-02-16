"use client";

import Image from "next/image";
import { Box, Container, Title, Text, Stack } from "@mantine/core";
import {
  IconVideo,
  IconCalendarCheck,
  IconPlaneTilt,
  IconDental,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { SectionReveal, StaggerContainer, StaggerItem, FadeInUp } from "@/components/ui/Animate";
import heroPatient from "@/public/images/hero-patient-2.jpg";
import styles from "./WhyUsJourneySection.module.css";

const STEPS = [
  {
    icon: IconVideo,
    label: "Online Consultation",
    description:
      "Share your dental concerns, photos, and X-rays. Our team creates a detailed, personalized treatment plan with transparent pricing — all from the comfort of your home.",
    duration: "1–2 days",
  },
  {
    icon: IconCalendarCheck,
    label: "Book & Plan Your Trip",
    description:
      "Confirm your treatment schedule, and we handle the rest — flight coordination, hotel booking, and a complete itinerary tailored to your needs and preferences.",
    duration: "1–2 weeks before",
  },
  {
    icon: IconPlaneTilt,
    label: "Arrival & VIP Transfer",
    description:
      "A dedicated driver meets you at Istanbul Airport for a private transfer to your hotel. Your patient coordinator contacts you to confirm next-day appointments.",
    duration: "Day 1",
  },
  {
    icon: IconDental,
    label: "Your Treatment",
    description:
      "Expert dental care in our modern Istanbul clinic using cutting-edge technology. Multiple treatments can be combined efficiently to minimize your visit duration.",
    duration: "Day 2–5",
  },
  {
    icon: IconHeartHandshake,
    label: "Aftercare & Follow-Up",
    description:
      "Return home with a complete aftercare guide. Our team provides ongoing remote follow-ups, answers any questions, and coordinates local check-ups if needed.",
    duration: "Ongoing",
  },
];

export function WhyUsJourneySection() {
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="journey-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              How It Works
            </Text>
            <Title id="journey-heading" order={2} className={styles.sectionTitle}>
              Your Patient Journey in 5 Simple Steps
            </Title>
            <Text className={styles.sectionSubtitle}>
              From first contact to lifelong aftercare — we guide you through every step of
              your dental transformation with dedicated support at each stage.
            </Text>
          </Stack>

          <div className={styles.journeyLayout}>
            {/* Side image (desktop only) */}
            <FadeInUp delay={0.15}>
              <div className={styles.sideImageWrap}>
                <Image
                  src={heroPatient}
                  alt="Happy patient at Linova Clinic"
                  fill
                  sizes="(max-width: 768px) 0px, 380px"
                  className={styles.sideImage}
                  placeholder="blur"
                />
                <div className={styles.sideImageOverlay} />
                <div className={styles.sideImageBadge}>
                  <Text className={styles.badgeValue}>10,000+</Text>
                  <Text className={styles.badgeLabel}>Happy patients worldwide</Text>
                </div>
              </div>
            </FadeInUp>

            {/* Timeline */}
            <StaggerContainer staggerChildren={0.1} delayChildren={0.1}>
              <div className={styles.timeline}>
                {STEPS.map((step, i) => (
                  <StaggerItem key={step.label}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineLeft}>
                        <div className={styles.stepNumber}>{i + 1}</div>
                        {i < STEPS.length - 1 && (
                          <div className={styles.connector} aria-hidden />
                        )}
                      </div>
                      <div className={styles.timelineCard}>
                        <div className={styles.cardHeader}>
                          <div className={styles.cardIconWrap}>
                            <step.icon size={24} stroke={1.8} />
                          </div>
                          <span className={styles.durationBadge}>{step.duration}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{step.label}</h3>
                        <Text size="sm" className={styles.cardDesc}>
                          {step.description}
                        </Text>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
