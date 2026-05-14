import { Container, Title, Text, Box } from "@mantine/core";
import {
  IconCheck,
  IconCrown,
  IconLeaf,
  IconSparkles,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";

import styles from "./PackageCards.module.css";

interface Tier {
  name: string;
  nights: string;
  description: string;
  features: string[];
  badge?: string;
}

const TIER_KEYS = ["essential", "premium", "vip"] as const;
const TIER_ICONS = [IconLeaf, IconSparkles, IconCrown] as const;

export async function PackageCards() {
  const t = await getTranslations("packages");

  return (
    <SectionReveal>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="packages-tiers-heading"
      >
        <Container size="xl">
          <div className={styles.header}>
            <Title order={2} id="packages-tiers-heading" mb="sm" ta="center">
              {t("tiersSection.title")}
            </Title>
            <Text c="dimmed" ta="center" size="md">
              {t("tiersSection.subtitle")}
            </Text>
          </div>
          <StaggerContainer staggerChildren={0.08} delayChildren={0.05}>
            <div className={styles.grid}>
              {TIER_KEYS.map((key, index) => {
                const tier = t.raw(`tiers.${key}`) as Tier;
                const recommended = key === "premium";
                const Icon = TIER_ICONS[index];

                return (
                  <StaggerItem key={key}>
                    <article
                      className={`${styles.card} ${recommended ? styles.cardRecommended : ""}`}
                    >
                      <div className={styles.cardGlow} aria-hidden />

                      <div className={styles.cardTopRow}>
                        <div className={styles.iconWrap}>
                          <Icon size={20} stroke={2} />
                        </div>
                        {tier.badge ? (
                          <span className={styles.badge}>{tier.badge}</span>
                        ) : null}
                      </div>

                      <div className={styles.titleRow}>
                        <h3 className={styles.cardTitle}>{tier.name}</h3>
                        <div className={styles.nights}>{tier.nights}</div>
                      </div>

                      <p className={styles.desc}>{tier.description}</p>

                      <ul className={styles.list}>
                        {tier.features.map((f, i) => (
                          <li key={i}>
                            <span className={styles.checkIcon} aria-hidden>
                              <IconCheck size={14} stroke={2.5} />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={styles.footer}>
                        <Link href="/contact" className={styles.cardAction}>
                          {t("cta.buttonContact")}
                        </Link>
                      </div>
                    </article>
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
