"use client";

import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import {
  IconCertificate,
  IconHeartHandshake,
  IconPigMoney,
  IconShieldCheck,
} from "@tabler/icons-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import heroImage from "@/public/heroSection.jpg";
import styles from "./WhyUsPageHeader.module.css";

const HIGHLIGHTS = [
  {
    icon: IconCertificate,
    title: "ISO Certified",
    desc: "European quality standards",
  },
  {
    icon: IconHeartHandshake,
    title: "15+ Years",
    desc: "Expert dental care",
  },
  {
    icon: IconPigMoney,
    title: "Up to 70% Savings",
    desc: "Vs. UK & US prices",
  },
  {
    icon: IconShieldCheck,
    title: "Lifetime Warranty",
    desc: "On all treatments",
  },
];

export function WhyUsPageHeader() {
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
              Why Choose Linova Clinic
            </Text>
            <Title order={1} className={styles.title}>
              Where World-Class Dentistry{" "}
              <span className={styles.titleHighlight}>Meets Exceptional Care</span>
            </Title>
            <Text size="lg" lh={1.7} className={styles.subtitle}>
              We combine internationally certified dental expertise with a premium medical tourism
              experience — from your first virtual consultation to VIP transfers, luxury stays,
              and lifelong aftercare. Everything is designed around your comfort, safety, and smile.
            </Text>
          </Stack>
        </FadeInUp>

        <StaggerContainer staggerChildren={0.08} delayChildren={0.2}>
          <div className={styles.highlightsRow}>
            {HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.title}>
                <div className={styles.highlightCard}>
                  <item.icon size={28} className={styles.highlightIcon} />
                  <div>
                    <Text className={styles.highlightTitle}>{item.title}</Text>
                    <Text className={styles.highlightDesc}>{item.desc}</Text>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
