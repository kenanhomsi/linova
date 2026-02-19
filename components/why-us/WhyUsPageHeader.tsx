import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import {
  IconCertificate,
  IconHeartHandshake,
  IconPigMoney,
  IconShieldCheck,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import heroImage from "@/public/heroSection.jpg";
import styles from "./WhyUsPageHeader.module.css";

const HIGHLIGHT_KEYS = [
  { icon: IconCertificate, key: "iso" as const },
  { icon: IconHeartHandshake, key: "years" as const },
  { icon: IconPigMoney, key: "savings" as const },
  { icon: IconShieldCheck, key: "warranty" as const },
];

export async function WhyUsPageHeader() {
  const t = await getTranslations("whyUs");
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
          <div className={styles.highlightsRow}>
            {HIGHLIGHT_KEYS.map((item) => (
              <StaggerItem key={item.key}>
                <div className={styles.highlightCard}>
                  <item.icon size={28} className={styles.highlightIcon} />
                  <div>
                    <Text className={styles.highlightTitle}>{t(`pageHeader.highlights.${item.key}.title`)}</Text>
                    <Text className={styles.highlightDesc}>{t(`pageHeader.highlights.${item.key}.desc`)}</Text>
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
