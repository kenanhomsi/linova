import { Container, Title, Text, Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./PackageCards.module.css";

type Tier = {
  name: string;
  nights: string;
  description: string;
  features: string[];
  badge?: string;
};

const TIER_KEYS = ["essential", "premium", "vip"] as const;

export async function PackageCards() {
  const t = await getTranslations("packages");

  return (
    <SectionReveal>
      <Box component="section" className={styles.section} aria-labelledby="packages-tiers-heading">
        <Container size="lg">
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
              {TIER_KEYS.map((key) => {
                const tier = t.raw(`tiers.${key}`) as Tier;
                const recommended = key === "premium";
                return (
                  <StaggerItem key={key}>
                    <article
                      className={`${styles.card} ${recommended ? styles.cardRecommended : ""}`}
                    >
                      {tier.badge ? <span className={styles.badge}>{tier.badge}</span> : null}
                      <h3 className={styles.cardTitle}>{tier.name}</h3>
                      <div className={styles.nights}>{tier.nights}</div>
                      <p className={styles.desc}>{tier.description}</p>
                      <ul className={styles.list}>
                        {tier.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
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
