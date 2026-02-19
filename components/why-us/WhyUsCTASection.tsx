import Link from "next/link";
import { Container, Title, Text, Stack, Group, Button, Box } from "@mantine/core";
import { IconMessageCircle, IconPhoneCall } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal } from "@/components/ui/Animate";
import styles from "./WhyUsCTASection.module.css";

export async function WhyUsCTASection() {
  const t = await getTranslations("whyUs");
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section}>
        <Container size="md">
          <Stack gap="lg" align="center" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("cta.eyebrow")}
            </Text>
            <Title order={2} className={styles.title}>
              {t("cta.title")}
            </Title>
            <Text size="lg" className={styles.subtitle}>
              {t("cta.subtitle")}
            </Text>
            <Group gap="md" mt="sm">
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  radius="md"
                  className={styles.ctaPrimary}
                  leftSection={<IconMessageCircle size={20} />}
                >
                  {t("cta.buttonConsultation")}
                </Button>
              </Link>
              <a href="tel:+905551234567" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  radius="md"
                  variant="outline"
                  className={styles.ctaSecondary}
                  leftSection={<IconPhoneCall size={20} />}
                >
                  {t("cta.buttonCall")}
                </Button>
              </a>
            </Group>
            <Text size="xs" className={styles.note}>
              {t("cta.note")}
            </Text>
          </Stack>
        </Container>
      </Box>
    </SectionReveal>
  );
}
