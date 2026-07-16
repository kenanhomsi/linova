import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import {
  IconArrowRight,
  IconBed,
  IconClockHour4,
  IconMapPin,
  IconSparkles,
  IconStarsFilled,
  IconTicket,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { FadeInUp } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import { istanbulImageSrc } from "@/lib/istanbul-experience-images";
import heroImage from "@/public/heroSection.jpg";

import styles from "./IstanbulHero.module.css";

const SUPPORT_ICONS = [IconSparkles, IconBed, IconTicket] as const;

interface Area {
  name: string;
  distance: string;
  price: string;
}

interface Activity {
  title: string;
  time: string;
}

interface SupportService {
  title: string;
  stat: string;
  statLabel: string;
}

export async function IstanbulHero() {
  const t = await getTranslations("istanbulExperience");
  const tWhyUs = await getTranslations("whyUs");
  const areas = (t.raw("areas.items") as Area[]).slice(0, 3);
  const activities = (t.raw("activities.items") as Activity[]).slice(0, 3);
  const support = (tWhyUs.raw("support.services") as SupportService[]).slice(
    0,
    3,
  );
  const heroVisual = istanbulImageSrc("bosphorus") ?? heroImage;

  return (
    <Box className={styles.hero}>
      <Image
        src={heroVisual}
        alt={t("hero.imageAlt")}
        fill
        priority
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
                    <IconStarsFilled size={16} stroke={2} />
                    {t("areas.title")}
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
                  {/* <Link href="/packages" className={styles.secondaryAction}>
                    <span>{t("cta.buttonPackages")}</span>
                  </Link> */}
                </div>

                <div className={styles.statsRow}>
                  {support.map((item, index) => {
                    const Icon = SUPPORT_ICONS[index];
                    return (
                      <div key={item.title} className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                          <Icon
                            size={18}
                            stroke={2}
                            className={styles.statIcon}
                          />
                        </div>
                        <div>
                          <Text className={styles.statValue}>{item.stat}</Text>
                          <Text className={styles.statLabel}>
                            {item.statLabel}
                          </Text>
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
                  {t("itineraries.title")}
                </Text>
                <Title order={2} className={styles.summaryTitle}>
                  {t("title")}
                </Title>
                <Text className={styles.summarySubtitle}>
                  {t("cta.subtitle")}
                </Text>
              </div>

              <div className={styles.summarySection}>
                <Text className={styles.sectionLabel}>{t("areas.title")}</Text>
                <div className={styles.areaList}>
                  {areas.map((area) => (
                    <div key={area.name} className={styles.areaItem}>
                      <div className={styles.areaNameWrap}>
                        <span className={styles.areaIcon}>
                          <IconMapPin size={14} stroke={2.25} />
                        </span>
                        <div>
                          <Text className={styles.areaName}>{area.name}</Text>
                          <Text className={styles.areaMeta}>
                            {area.distance}
                          </Text>
                        </div>
                      </div>
                      <span className={styles.areaPrice}>{area.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.summarySection}>
                <Text className={styles.sectionLabel}>
                  {t("activities.title")}
                </Text>
                <div className={styles.activityList}>
                  {activities.map((activity) => (
                    <div key={activity.title} className={styles.activityItem}>
                      <div>
                        <Text className={styles.activityTitle}>
                          {activity.title}
                        </Text>
                        <Text className={styles.activityMeta}>
                          <IconClockHour4 size={13} stroke={2.2} />
                          <span>{activity.time}</span>
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </FadeInUp>
        </div>
      </Container>
    </Box>
  );
}
