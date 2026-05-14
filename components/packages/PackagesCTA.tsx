import { Container, Title, Text, Box } from "@mantine/core";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { SectionReveal } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";

import styles from "./PackagesCTA.module.css";

export async function PackagesCTA() {
  const t = await getTranslations("packages");
  const highlights = (t.raw("includes.items") as { title: string }[]).slice(
    0,
    3,
  );

  return (
    <SectionReveal delay={0.06}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="packages-cta-heading"
      >
        <Container size="xl">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <Text className={styles.eyebrow}>{t("hero.eyebrow")}</Text>
              <Title
                order={2}
                id="packages-cta-heading"
                className={styles.title}
              >
                {t("cta.title")}
              </Title>
              <Text className={styles.subtitle}>{t("cta.subtitle")}</Text>

              <div className={styles.highlightRow}>
                {highlights.map((item) => (
                  <span key={item.title} className={styles.highlightChip}>
                    {item.title}
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
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnOutline}
                >
                  <IconBrandWhatsapp size={18} stroke={2} />
                  <span>{t("cta.buttonWhatsapp")}</span>
                </a>
              </div>
              <Text className={styles.helperText}>{t("savings.footnote")}</Text>
            </div>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
