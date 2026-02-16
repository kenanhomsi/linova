"use client";

import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import { IconDental, IconStarFilled, IconWorld, IconUsers } from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import heroImage from "@/public/images/hero-patient.jpg";
import styles from "./TreatmentsPageHeader.module.css";

const STATS = [
  { icon: IconDental, value: "22+", label: "Treatments" },
  { icon: IconUsers, value: "10,000+", label: "Happy Patients" },
  { icon: IconWorld, value: "50+", label: "Countries Served" },
  { icon: IconStarFilled, value: "98%", label: "Satisfaction Rate" },
];

export function TreatmentsPageHeader() {
  return (
    <Box className={styles.hero}>
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        placeholder="blur"
        className={styles.heroBgImage}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} />
      <Container size="xl" className={styles.heroContent}>
        <FadeInUp>
          <Stack gap="md" className={styles.wrapper}>
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              Comprehensive Dental Solutions
            </Text>
            <Title order={1} className={styles.title}>
              World-Class Treatments,{" "}
              <span className={styles.titleHighlight}>Personalized for You</span>
            </Title>
            <Text size="lg" lh={1.7} className={styles.subtitle}>
              From cosmetic smile makeovers to advanced implant solutions and full mouth restorations
              — our expert team delivers exceptional dental care with cutting-edge technology
              in the heart of Istanbul. Save up to 70% compared to UK and US prices.
            </Text>
          </Stack>
        </FadeInUp>

        <StaggerContainer staggerChildren={0.08} delayChildren={0.2}>
          <div className={styles.statsRow}>
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className={styles.statCard}>
                  <stat.icon size={22} className={styles.statIcon} />
                  <Text className={styles.statValue}>{stat.value}</Text>
                  <Text className={styles.statLabel}>{stat.label}</Text>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
