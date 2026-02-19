import Image from "next/image";
import { Box, Container, Title, Text, Stack } from "@mantine/core";
import {
  IconVideo,
  IconCalendarCheck,
  IconPlaneTilt,
  IconDental,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem, FadeInUp } from "@/components/ui/Animate";
import heroPatient from "@/public/images/hero-patient-2.jpg";
import styles from "./WhyUsJourneySection.module.css";

const STEP_ICONS = [
  IconVideo,
  IconCalendarCheck,
  IconPlaneTilt,
  IconDental,
  IconHeartHandshake,
];

type StepItem = { label: string; description: string; duration: string };

export async function WhyUsJourneySection() {
  const t = await getTranslations("whyUs");
  const steps = t.raw("journey.steps") as StepItem[];
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section} aria-labelledby="journey-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("journey.eyebrow")}
            </Text>
            <Title id="journey-heading" order={2} className={styles.sectionTitle}>
              {t("journey.sectionTitle")}
            </Title>
            <Text className={styles.sectionSubtitle}>
              {t("journey.sectionSubtitle")}
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
                  <Text className={styles.badgeValue}>{t("journey.badgeValue")}</Text>
                  <Text className={styles.badgeLabel}>{t("journey.badgeLabel")}</Text>
                </div>
              </div>
            </FadeInUp>

            {/* Timeline */}
            <StaggerContainer staggerChildren={0.1} delayChildren={0.1}>
              <div className={styles.timeline}>
                {steps.map((step, i) => {
                  const Icon = STEP_ICONS[i];
                  return (
                    <StaggerItem key={step.label}>
                      <div className={styles.timelineItem}>
                        <div className={styles.timelineLeft}>
                          <div className={styles.stepNumber}>{i + 1}</div>
                          {i < steps.length - 1 && (
                            <div className={styles.connector} aria-hidden />
                          )}
                        </div>
                        <div className={styles.timelineCard}>
                          <div className={styles.cardHeader}>
                            <div className={styles.cardIconWrap}>
                              <Icon size={24} stroke={1.8} />
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
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
