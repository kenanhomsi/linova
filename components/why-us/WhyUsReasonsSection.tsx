"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
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
import { useTranslations } from "next-intl";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsReasonsSection.module.css";

const REASON_ICONS = [
  IconShieldCheck,
  IconUserStar,
  IconTag,
  IconWorld,
  IconClock,
  IconHeadset,
];

const CARD_TRANSITION = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

type ReasonItem = { title: string; description: string; highlight: string; cta: string; blogSlug: string };

export function WhyUsReasonsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("whyUs");
  const reasons = t.raw("reasons.items") as ReasonItem[];

  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="reasons-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("reasons.eyebrow")}
            </Text>
            <Title id="reasons-heading" order={2} className={styles.sectionTitle}>
              {t("reasons.sectionTitle")}
            </Title>
            <Text className={styles.sectionSubtitle}>
              {t("reasons.sectionSubtitle")}
            </Text>
          </Stack>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {reasons.map((reason, i) => {
                const Icon = REASON_ICONS[i];
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
                          <Link href={`/blogs/${reason.blogSlug}`} className={styles.cta}>
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
