import { Container, Title, Text, Box, Button, Group } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { SectionReveal } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";

import styles from "./IstanbulCTA.module.css";

export async function IstanbulCTA() {
  const t = await getTranslations("istanbulExperience");

  return (
    <SectionReveal delay={0.06}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="istanbul-cta-heading"
      >
        <Container size="lg">
          <div className={styles.inner}>
            <Title order={2} id="istanbul-cta-heading" className={styles.title}>
              {t("cta.title")}
            </Title>
            <Text className={styles.subtitle}>{t("cta.subtitle")}</Text>
            <Group justify="center" className={styles.actions}>
              <Link href="/contact" className={styles.linkPlain}>
                <Button size="lg" radius="md" className={styles.btnPrimary}>
                  {t("cta.buttonContact")}
                </Button>
              </Link>
              <Link href="/packages" className={styles.linkPlain}>
                <Button
                  size="lg"
                  radius="md"
                  variant="outline"
                  className={styles.btnOutline}
                >
                  {t("cta.buttonPackages")}
                </Button>
              </Link>
            </Group>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
