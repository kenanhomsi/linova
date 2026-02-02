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
import { WHY_LINOVA } from "@/lib/home-data";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsReasonsSection.module.css";

const ICONS = [
  IconShieldCheck,
  IconUserStar,
  IconTag,
  IconWorld,
  IconClock,
  IconHeadset,
] as const;

const CARD_TRANSITION = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function WhyUsReasonsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="reasons-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl">
            <Title id="reasons-heading" order={2} className={styles.sectionTitle}>
              Your Trusted Partner in Istanbul
            </Title>
            <Text className={styles.sectionSubtitle}>
              {WHY_LINOVA.subtitle}
            </Text>
          </Stack>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {WHY_LINOVA.cards.map((card, i) => {
                const Icon = ICONS[i];
                const isFeatured = hoveredIndex === i;
                return (
                  <StaggerItem key={card.title} className={styles.cardWrapper}>
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
                          <div className={styles.iconWrap}>
                            {Icon && <Icon size={26} stroke={2} />}
                          </div>
                          <h3 className={styles.cardTitle}>{card.title}</h3>
                          <Text size="sm" className={styles.cardDesc}>
                            {card.description}
                          </Text>
                          <Link href="/contact" className={styles.cta}>
                            {card.cta} →
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
