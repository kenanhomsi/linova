"use client";

import Link from "next/link";
import { Container, Box, Title, Text, Badge } from "@mantine/core";
import {
  IconSparkles,
  IconTool,
  IconStethoscope,
  IconScissors,
  IconDeviceDesktop,
  IconPlane,
} from "@tabler/icons-react";
import { CATEGORIES, getTreatmentsByCategory } from "@/lib/treatments";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import type { TreatmentCategory } from "@/types";
import styles from "./TreatmentsContent.module.css";

const CATEGORY_ICONS: Record<TreatmentCategory, React.ComponentType<{ size?: number; stroke?: number }>> = {
  cosmetic: IconSparkles,
  restorative: IconTool,
  general: IconStethoscope,
  surgical: IconScissors,
  digital: IconDeviceDesktop,
  tourism: IconPlane,
};

export function TreatmentsContent() {
  return (
    <Container size="xl" py="md" pb="xl">
      {/* Quick-jump category nav */}
      <nav className={styles.navWrapper} aria-label="Treatment categories">
        <div className={styles.navInner}>
          {CATEGORIES.map((category) => {
            const treatments = getTreatmentsByCategory(category.id);
            if (treatments.length === 0) return null;
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className={styles.navLink}
              >
                {Icon && <Icon size={16} stroke={2} />}
                <span>{category.title}</span>
                <Badge size="xs" variant="light" color="teal" className={styles.navBadge}>
                  {treatments.length}
                </Badge>
              </Link>
            );
          })}
        </div>
      </nav>

      {CATEGORIES.map((category, index) => {
        const treatments = getTreatmentsByCategory(category.id);
        if (treatments.length === 0) return null;
        const useAltBg = index % 2 === 1;
        const Icon = CATEGORY_ICONS[category.id];
        return (
          <SectionReveal key={category.id} delay={0.03} amount={0.08}>
            <Box
              id={category.id}
              component="section"
              className={useAltBg ? styles.sectionAlt : styles.section}
              aria-labelledby={`section-${category.id}`}
            >
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrap}>
                  {Icon && <Icon size={24} stroke={2} />}
                </div>
                <div>
                  <Title
                    id={`section-${category.id}`}
                    order={2}
                    className={styles.sectionTitle}
                  >
                    {category.title}
                  </Title>
                  {category.description && (
                    <Text className={styles.sectionDescription}>
                      {category.description}
                    </Text>
                  )}
                </div>
              </div>
              <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
                <div className={styles.grid}>
                  {treatments.map((treatment) => (
                    <StaggerItem key={treatment.id} className={styles.cardWrapper}>
                      <Box id={treatment.slug}>
                        <ServiceCard treatment={treatment} />
                      </Box>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </Box>
          </SectionReveal>
        );
      })}
    </Container>
  );
}
