import { Container, Title, Text, Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { SectionReveal } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";

import styles from "./IstanbulCTA.module.css";

export async function IstanbulCTA() {
  const t = await getTranslations("istanbulExperience");
  const highlights = (t.raw("areas.items") as { name: string }[]).slice(0, 3);

  return (
    <SectionReveal delay={0.06}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="istanbul-cta-heading"
      >
        <Container size="xl">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <Text className={styles.eyebrow}>{t("hero.eyebrow")}</Text>
              <Title
                order={2}
                id="istanbul-cta-heading"
                className={styles.title}
              >
                {t("cta.title")}
              </Title>
              <Text className={styles.subtitle}>{t("cta.subtitle")}</Text>

              <div className={styles.highlightRow}>
                {highlights.map((item) => (
                  <span key={item.name} className={styles.highlightChip}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.actionCard}>
              <Text className={styles.actionLabel}>
                {t("cta.buttonContact")}
              </Text>
              <div className={styles.actions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  <span>{t("cta.buttonContact")}</span>
                  <IconArrowRight size={18} stroke={2} />
                </Link>
                {/* <Link href="/packages" className={styles.btnOutline}>
                  {t("cta.buttonPackages")}
                </Link> */}
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
