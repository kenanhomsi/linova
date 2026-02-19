import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import { IconDental, IconStarFilled, IconWorld, IconUsers } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { FadeInUp } from "@/components/ui/Animate";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import heroImage from "@/public/images/hero-patient.jpg";
import styles from "./TreatmentsPageHeader.module.css";

const STAT_KEYS = [
  { icon: IconDental, value: "22+", labelKey: "stats.treatments" as const },
  { icon: IconUsers, value: "10,000+", labelKey: "stats.happyPatients" as const },
  { icon: IconWorld, value: "50+", labelKey: "stats.countriesServed" as const },
  { icon: IconStarFilled, value: "98%", labelKey: "stats.satisfactionRate" as const },
];

export async function TreatmentsPageHeader() {
  const t = await getTranslations("treatments");
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
              {t("pageHeader.eyebrow")}
            </Text>
            <Title order={1} className={styles.title}>
              {t("pageHeader.title")}{" "}
              <span className={styles.titleHighlight}>{t("pageHeader.titleHighlight")}</span>
            </Title>
            <Text size="lg" lh={1.7} className={styles.subtitle}>
              {t("pageHeader.subtitle")}
            </Text>
          </Stack>
        </FadeInUp>

        <StaggerContainer staggerChildren={0.08} delayChildren={0.2}>
          <div className={styles.statsRow}>
            {STAT_KEYS.map((stat) => (
              <StaggerItem key={stat.labelKey}>
                <div className={styles.statCard}>
                  <stat.icon size={22} className={styles.statIcon} />
                  <Text className={styles.statValue}>{stat.value}</Text>
                  <Text className={styles.statLabel}>{t(stat.labelKey)}</Text>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
