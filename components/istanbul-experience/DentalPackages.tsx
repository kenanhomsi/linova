"use client";

import { useTranslations } from "next-intl";
import { Container, Title, Text, Box } from "@mantine/core";
import { IconCalendarEvent, IconStar, IconBeach } from "@tabler/icons-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import styles from "./DentalPackages.module.css";

type Package = {
  name: string;
  desc: string;
  price: string;
  badge: string;
  featured?: boolean;
};

const ICONS = [IconCalendarEvent, IconStar, IconBeach];

export function DentalPackages() {
  const t = useTranslations("istanbulExperience");
  const packages = t.raw("packages") as {
    title: string;
    subtitle: string;
    footnote: string;
    items: Package[];
  };

  return (
    <Box
      component="section"
      className={styles.section}
      aria-labelledby="packages-heading"
    >
      <Container size="lg">
        <FadeInUp>
          <div className={styles.header}>
            <Title
              order={2}
              id="packages-heading"
              className={styles.title}
            >
              {packages.title}
            </Title>
            <Text className={styles.subtitle}>{packages.subtitle}</Text>
          </div>
        </FadeInUp>

        <StaggerContainer staggerChildren={0.1}>
          <div className={styles.grid}>
            {packages.items.map((pkg, idx) => {
              const Icon = ICONS[idx] || ICONS[0];
              const isFeatured = idx === 1;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`${styles.card} ${isFeatured ? styles.featured : ""}`}
                  >
                    <div className={styles.cardAccent} aria-hidden />
                    <div className={styles.cardBody}>
                      <div className={styles.iconWrap}>
                        <Icon size={26} stroke={1.8} />
                      </div>
                      <span className={styles.badge}>{pkg.badge}</span>
                      <h3 className={styles.cardName}>{pkg.name}</h3>
                      <p className={styles.cardDesc}>{pkg.desc}</p>
                      <div className={styles.price}>{pkg.price}</div>
                      <Link href="/contact" className={styles.btn}>
                        {t("packages.learnMore")} →
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        <FadeInUp delay={0.25}>
          <p className={styles.footnote}>{packages.footnote}</p>
        </FadeInUp>
      </Container>
    </Box>
  );
}
