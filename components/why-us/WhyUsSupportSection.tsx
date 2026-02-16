"use client";

import Image from "next/image";
import { Container, Title, Text, Stack, Box } from "@mantine/core";
import {
  IconPlane,
  IconHotelService,
  IconLanguage,
  IconVideo,
  IconMapPin,
} from "@tabler/icons-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import istanbulImage from "@/public/istanbul.jpg";
import styles from "./WhyUsSupportSection.module.css";

const SERVICES = [
  {
    icon: IconVideo,
    title: "Free Online Consultation",
    description:
      "Start from the comfort of your home. Share photos or X-rays, discuss your goals with our dentists, and receive a detailed treatment plan with transparent pricing — all via video call.",
    stat: "Within 24h",
    statLabel: "response time",
  },
  {
    icon: IconPlane,
    title: "VIP Airport Transfers",
    description:
      "A dedicated driver meets you at Istanbul Airport arrivals with a name sign. Enjoy a private, comfortable ride directly to your hotel or the clinic — included in every package.",
    stat: "Complimentary",
    statLabel: "for all patients",
  },
  {
    icon: IconHotelService,
    title: "Premium Accommodation",
    description:
      "We partner with hand-picked 4 and 5-star hotels near the clinic. Your stay is coordinated around your treatment schedule, with special medical tourism rates.",
    stat: "4-5★",
    statLabel: "partner hotels",
  },
  {
    icon: IconLanguage,
    title: "Multilingual Coordinators",
    description:
      "Dedicated patient coordinators fluent in English, Arabic, Turkish, German, French, and more. They guide you through every step — from booking to aftercare.",
    stat: "6+",
    statLabel: "languages spoken",
  },
  {
    icon: IconMapPin,
    title: "Istanbul Tours & Experiences",
    description:
      "Make the most of your visit with curated experiences — Bosphorus boat tours, Grand Bazaar shopping, historical site visits, and authentic Turkish cuisine experiences.",
    stat: "10+",
    statLabel: "curated experiences",
  },
];

export function WhyUsSupportSection() {
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" id="support" className={styles.section} aria-labelledby="support-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              Medical Tourism Excellence
            </Text>
            <Title id="support-heading" order={2} className={styles.sectionTitle}>
              Your Complete Care Package
            </Title>
            <Text className={styles.sectionSubtitle}>
              We take care of everything beyond your dental treatment — from the moment you book
              until long after you return home. Your only job is to smile.
            </Text>
          </Stack>

          {/* Istanbul image banner */}
          <div className={styles.imageBanner}>
            <Image
              src={istanbulImage}
              alt="Istanbul skyline — Linova Clinic's home city"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className={styles.bannerImage}
              placeholder="blur"
            />
            <div className={styles.bannerOverlay}>
              <Text className={styles.bannerText}>
                Your Dental Destination: Istanbul, Turkey
              </Text>
            </div>
          </div>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {SERVICES.map((service) => (
                <StaggerItem key={service.title}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrap}>
                        <service.icon size={28} stroke={1.8} />
                      </div>
                      <div className={styles.statBadge}>
                        <span className={styles.statValue}>{service.stat}</span>
                        <span className={styles.statLabel}>{service.statLabel}</span>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <Text size="sm" className={styles.cardDesc}>
                        {service.description}
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
