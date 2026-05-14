import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCheck,
  IconShieldCheck,
  IconSparkles,
  IconStarsFilled,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { FadeInUp } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImage from "@/public/heroSection.jpg";

import styles from "./PackagesHero.module.css";

const HERO_STATS = [
  IconUsersGroup,
  IconWorld,
  IconShieldCheck,
  IconStarsFilled,
] as const;

interface StatItem {
  value: string;
  label: string;
}

interface Tier {
  name: string;
  nights: string;
  description: string;
  badge?: string;
}

interface IncludeItem {
  title: string;
  description: string;
}

export async function PackagesHero() {
  const t = await getTranslations("packages");
  const tHome = await getTranslations("home");
  const heroStats = (tHome.raw("stats") as StatItem[]).slice(0, 4);
  const tiers = (["essential", "premium", "vip"] as const).map((key) => ({
    key,
    ...(t.raw(`tiers.${key}`) as Tier),
  }));
  const includeItems = (t.raw("includes.items") as IncludeItem[]).slice(0, 3);
  const heroAlt = `${t("hero.title")} ${t("hero.titleHighlight")} — ${t("description")}`;

  return (
    <Box className={styles.hero}>
      <Image
        src={heroImage}
        alt={heroAlt}
        fill
        priority
        placeholder="blur"
        className={styles.heroBgImage}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} aria-hidden />
      <Container size="xl" className={styles.heroContent}>
        <div className={styles.layout}>
          <FadeInUp>
            <div className={styles.copyCol}>
              <Stack gap="lg" className={styles.wrapper}>
                <div className={styles.eyebrowRow}>
                  <span className={styles.eyebrow}>{t("hero.eyebrow")}</span>
                  <span className={styles.proofPill}>
                    <IconShieldCheck size={16} stroke={2} />
                    {includeItems[1]?.title ?? includeItems[0]?.title}
                  </span>
                </div>

                <div>
                  <Title order={1} className={styles.title}>
                    {t("hero.title")}{" "}
                    <span className={styles.titleHighlight}>
                      {t("hero.titleHighlight")}
                    </span>
                  </Title>
                  <Text size="lg" lh={1.7} className={styles.subtitle}>
                    {t("hero.subtitle")}
                  </Text>
                </div>

                <div className={styles.actions}>
                  <Link href="/contact" className={styles.primaryAction}>
                    <span>{t("cta.buttonContact")}</span>
                    <IconArrowRight size={18} stroke={2} />
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryAction}
                  >
                    <IconBrandWhatsapp size={18} stroke={2} />
                    <span>{t("cta.buttonWhatsapp")}</span>
                  </a>
                </div>

                <div className={styles.statsRow}>
                  {heroStats.map((stat, index) => {
                    const Icon = HERO_STATS[index];

                    return (
                      <div key={stat.label} className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                          <Icon
                            size={18}
                            stroke={2}
                            className={styles.statIcon}
                          />
                        </div>
                        <div>
                          <Text className={styles.statValue}>{stat.value}</Text>
                          <Text className={styles.statLabel}>{stat.label}</Text>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Stack>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <aside className={styles.summaryCard}>
              <div className={styles.summaryHeader}>
                <Text className={styles.summaryEyebrow}>
                  {t("tiersSection.title")}
                </Text>
                <Title order={2} className={styles.summaryTitle}>
                  {t("includes.title")}
                </Title>
                <Text className={styles.summarySubtitle}>
                  {t("tiersSection.subtitle")}
                </Text>
              </div>

              <div className={styles.tierList}>
                {tiers.map((tier) => (
                  <div
                    key={tier.key}
                    className={`${styles.tierItem} ${
                      tier.key === "premium" ? styles.tierItemFeatured : ""
                    }`}
                  >
                    <div className={styles.tierTopRow}>
                      <div className={styles.tierNameRow}>
                        <div className={styles.tierIconWrap}>
                          <IconSparkles size={16} stroke={2} />
                        </div>
                        <div>
                          <Text className={styles.tierName}>{tier.name}</Text>
                          <Text className={styles.tierDescription}>
                            {tier.description}
                          </Text>
                        </div>
                      </div>

                      <div className={styles.tierMeta}>
                        {tier.badge ? (
                          <span className={styles.tierBadge}>{tier.badge}</span>
                        ) : null}
                        <span className={styles.tierNights}>{tier.nights}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.includesPanel}>
                {includeItems.map((item) => (
                  <div key={item.title} className={styles.includeRow}>
                    <span className={styles.includeIcon}>
                      <IconCheck size={14} stroke={2.5} />
                    </span>
                    <div>
                      <Text className={styles.includeTitle}>{item.title}</Text>
                      <Text className={styles.includeDescription}>
                        {item.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </FadeInUp>
        </div>
      </Container>
    </Box>
  );
}
