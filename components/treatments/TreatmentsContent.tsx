"use client";

import Link from "next/link";
import { Container, Box, Title } from "@mantine/core";
import { CATEGORIES, getTreatmentsByCategory } from "@/lib/treatments";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./TreatmentsContent.module.css";

export function TreatmentsContent() {
  return (
    <Container size="xl" py="md" pb="xl">
      {/* Quick-jump category nav */}
      <nav className={styles.navWrapper} aria-label="Treatment categories">
        <div className={styles.navInner}>
          {CATEGORIES.map((category) => {
            const treatments = getTreatmentsByCategory(category.id);
            if (treatments.length === 0) return null;
            return (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className={styles.navLink}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
      </nav>

      {CATEGORIES.map((category, index) => {
        const treatments = getTreatmentsByCategory(category.id);
        if (treatments.length === 0) return null;
        const useAltBg = index % 2 === 1;
        return (
          <SectionReveal key={category.id} delay={0.03} amount={0.08}>
            <Box
              id={category.id}
              component="section"
              className={useAltBg ? styles.sectionAlt : styles.section}
              aria-labelledby={`section-${category.id}`}
            >
              <Title
                id={`section-${category.id}`}
                order={2}
                className={styles.sectionTitle}
              >
                {category.title}
              </Title>
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
