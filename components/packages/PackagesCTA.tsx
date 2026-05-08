import { Container, Title, Text, Box, Button, Group } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { SectionReveal } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";

import styles from "./PackagesCTA.module.css";

export async function PackagesCTA() {
  const t = await getTranslations("packages");

  return (
    <SectionReveal delay={0.06}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="packages-cta-heading"
      >
        <Container size="lg">
          <div className={styles.inner}>
            <Title order={2} id="packages-cta-heading" className={styles.title}>
              {t("cta.title")}
            </Title>
            <Text className={styles.subtitle}>{t("cta.subtitle")}</Text>
            <Group justify="center" className={styles.actions}>
              <Link href="/contact" className={styles.linkPlain}>
                <Button size="lg" radius="md" className={styles.btnPrimary}>
                  {t("cta.buttonContact")}
                </Button>
              </Link>
              <Button
                component="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius="md"
                variant="outline"
                leftSection={<IconBrandWhatsapp size={20} />}
                className={styles.btnOutline}
              >
                {t("cta.buttonWhatsapp")}
              </Button>
            </Group>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
