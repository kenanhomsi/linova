import Image from "next/image";
import { Container, Title, Text, Stack, Box } from "@mantine/core";
import {
  IconPlane,
  IconHotelService,
  IconLanguage,
  IconVideo,
  IconMapPin,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import istanbulImage from "@/public/istanbul.jpg";
import styles from "./WhyUsSupportSection.module.css";

const SERVICE_ICONS = [
  IconVideo,
  IconPlane,
  IconHotelService,
  IconLanguage,
  IconMapPin,
];

type ServiceItem = { title: string; description: string; stat: string; statLabel: string };

export async function WhyUsSupportSection() {
  const t = await getTranslations("whyUs");
  const services = t.raw("support.services") as ServiceItem[];
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" id="support" className={styles.section} aria-labelledby="support-heading">
        <Container size="xl">
          <Stack gap="xs" mb="xl" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("support.eyebrow")}
            </Text>
            <Title id="support-heading" order={2} className={styles.sectionTitle}>
              {t("support.sectionTitle")}
            </Title>
            <Text className={styles.sectionSubtitle}>
              {t("support.sectionSubtitle")}
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
                {t("support.bannerText")}
              </Text>
            </div>
          </div>

          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {services.map((service, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <StaggerItem key={service.title}>
                    <div className={styles.card}>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrap}>
                          <Icon size={28} stroke={1.8} />
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
                );
              })}
            </div>
          </StaggerContainer>
        </Container>
      </Box>
    </SectionReveal>
  );
}
