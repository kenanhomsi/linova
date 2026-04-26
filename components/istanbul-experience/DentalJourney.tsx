"use client";

import { useTranslations } from "next-intl";
import { Container, Title, Text, Box } from "@mantine/core";
import { IconCheck, IconCalendarCheck } from "@tabler/icons-react";
import { FadeInUp, SectionReveal } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import styles from "./DentalJourney.module.css";

type Step = {
  title: string;
  desc: string;
  list: string[];
  tags: string[];
};

const STEP_IMAGES = [
  "https://images.pexels.com/photos/3845752/pexels-photo-3845752.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/3845913/pexels-photo-3845913.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
];

export function DentalJourney() {
  const t = useTranslations("istanbulExperience");
  const journey = t.raw("journey") as {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaLink: string;
    steps: Step[];
  };

  return (
    <SectionReveal>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="dental-journey-heading"
      >
        <Container size="xl">
          <div className={styles.header}>
            <FadeInUp>
              <Text className={styles.eyebrow} component="span">
                {journey.eyebrow}
              </Text>
              <Title
                order={2}
                id="dental-journey-heading"
                className={styles.title}
              >
                {journey.title}
              </Title>
              <div className={styles.divider} aria-hidden />
              <Text className={styles.subtitle}>{journey.subtitle}</Text>
            </FadeInUp>
          </div>

          <div className={styles.timeline}>
            {journey.steps.map((step, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <FadeInUp key={idx} delay={idx * 0.08}>
                  <div className={styles.step}>
                    <span className={styles.dot} aria-hidden />

                    {/* Image column */}
                    <div className={styles.imageCol}>
                      <div className={styles.imageWrap}>
                        <div className={styles.imageOverlay} aria-hidden />
                        <img
                          src={STEP_IMAGES[idx] || STEP_IMAGES[0]}
                          alt={step.title}
                          loading="lazy"
                          width={800}
                          height={600}
                        />
                        <span className={styles.stepBadge}>
                          <span
                            className={styles.stepBadgeDot}
                            aria-hidden
                          />
                          {t("journey.stepLabel")} {num}
                        </span>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className={styles.contentCol}>
                      <div className={styles.card}>
                        <div className={styles.cardHeader}>
                          <span className={styles.stepNumber}>{num}</span>
                          <span
                            className={styles.headerDivider}
                            aria-hidden
                          />
                          <div className={styles.tags}>
                            {step.tags.map((tag, i) => (
                              <span key={i} className={styles.tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.cardDesc}>{step.desc}</p>
                        <ul className={styles.checkList}>
                          {step.list.map((item, i) => (
                            <li key={i} className={styles.checkItem}>
                              <span className={styles.checkIcon}>
                                <IconCheck size={12} stroke={3} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>

          {/* Bottom CTA pill */}
          <FadeInUp delay={0.3}>
            <div className={styles.bottomCta}>
              <div className={styles.ctaPill}>
                <IconCalendarCheck size={18} />
                <span>{journey.ctaLabel}</span>
                <Link href="/contact">{journey.ctaLink} →</Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </Box>
    </SectionReveal>
  );
}
