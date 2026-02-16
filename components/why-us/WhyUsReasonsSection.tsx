"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Title, Text, Stack, Box } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconUserStar,
  IconTag,
  IconWorld,
  IconClock,
  IconHeadset,
} from "@tabler/icons-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsReasonsSection.module.css";

const REASONS = [
  {
    icon: IconShieldCheck,
    title: "International Standards & Certifications",
    description:
      "Our ISO-certified clinic follows strict European quality protocols, state-of-the-art sterilization standards, and uses only FDA-approved materials from leading global brands.",
    highlight: "ISO 9001 Certified",
    cta: "Learn More",
  },
  {
    icon: IconUserStar,
    title: "Expert Dental Team",
    description:
      "Our dentists hold international qualifications with 15+ years of experience in cosmetic and restorative dentistry. Many trained at leading European and American universities.",
    highlight: "15+ Years Experience",
    cta: "Meet the Team",
  },
  {
    icon: IconTag,
    title: "Transparent & Affordable Pricing",
    description:
      "Save up to 70% compared to UK, US, and European prices — with no hidden fees. Every treatment plan includes a detailed, upfront cost breakdown before you commit.",
    highlight: "Up to 70% Savings",
    cta: "See Pricing",
  },
  {
    icon: IconWorld,
    title: "Complete Medical Tourism Package",
    description:
      "From VIP airport transfers and luxury hotel stays to multilingual coordination and Istanbul city tours — we handle every detail so you can focus on your smile.",
    highlight: "All-Inclusive Packages",
    cta: "Plan Your Visit",
  },
  {
    icon: IconClock,
    title: "Lifetime Warranty & Aftercare",
    description:
      "We stand behind our work with extended warranties on all major treatments. Our aftercare program includes follow-up consultations, even after you return home.",
    highlight: "Lifetime Guarantee",
    cta: "Learn More",
  },
  {
    icon: IconHeadset,
    title: "24/7 Multilingual Support",
    description:
      "Dedicated patient coordinators available around the clock in English, Arabic, Turkish, German, and more — from your first inquiry to post-treatment follow-ups.",
    highlight: "Always Available",
    cta: "Contact Us",
  },
];

const CARD_TRANSITION = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function WhyUsReasonsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="reasons-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              Our Difference
            </Text>
            <Title id="reasons-heading" order={2} className={styles.sectionTitle}>
              Your Trusted Dental Partner in Istanbul
            </Title>
            <Text className={styles.sectionSubtitle}>
              Six pillars that set us apart — combining world-class dental expertise with
              an exceptional patient experience that keeps thousands coming back.
            </Text>
          </Stack>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {REASONS.map((reason, i) => {
                const Icon = reason.icon;
                const isFeatured = hoveredIndex === i;
                return (
                  <StaggerItem key={reason.title} className={styles.cardWrapper}>
                    <motion.div
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -6 }}
                      transition={CARD_TRANSITION}
                    >
                      <Box
                        className={`${styles.card} ${isFeatured ? styles.cardFeatured : ""}`}
                      >
                        <span className={styles.decorativeCircle} aria-hidden />
                        <div className={styles.cardInner}>
                          <div className={styles.cardTop}>
                            <div className={styles.iconWrap}>
                              <Icon size={26} stroke={2} />
                            </div>
                            <span className={styles.highlightBadge}>{reason.highlight}</span>
                          </div>
                          <h3 className={styles.cardTitle}>{reason.title}</h3>
                          <Text size="sm" className={styles.cardDesc}>
                            {reason.description}
                          </Text>
                          <Link href="/contact" className={styles.cta}>
                            {reason.cta} <span aria-hidden>→</span>
                          </Link>
                        </div>
                      </Box>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </Container>
      </Box>
    </SectionReveal>
  );
}
