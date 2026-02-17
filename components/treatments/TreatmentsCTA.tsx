import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container, Title, Text, Stack, Group, Button, Box } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./TreatmentsCTA.module.css";

export async function TreatmentsCTA() {
  const tCommon = await getTranslations("common");

  return (
    <Box component="section" className={styles.root} aria-labelledby="treatments-cta-heading">
      <Container size="xl">
        <FadeInUp>
          <Stack gap="md" className={styles.wrapper}>
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              Ready to start?
            </Text>
            <Title order={2} id="treatments-cta-heading" className={styles.title}>
              Book Your Free Consultation
            </Title>
            <Text size="lg" className={styles.subtitle}>
              Discuss your goals with our team and get a personalized treatment plan. We’re here to help you smile with confidence.
            </Text>
            <Group gap="md" className={styles.actions}>
              <Link href="/contact" className={styles.link}>
                <Button size="lg" radius="xl" fw={600} className={styles.ctaPrimary}>
                  {tCommon("getAppointment")}
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Button
                  size="lg"
                  variant="outline"
                  radius="xl"
                  fw={600}
                  leftSection={<IconBrandWhatsapp size={20} />}
                  className={styles.ctaSecondary}
                >
                  {tCommon("whatsapp")}
                </Button>
              </a>
            </Group>
          </Stack>
        </FadeInUp>
      </Container>
    </Box>
  );
}
