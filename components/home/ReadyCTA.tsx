"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container, Title, Text, Stack, Group, Button, Box } from "@mantine/core";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconClock, IconAward } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { PHONE, PHONE_TEL, EMAIL, WHATSAPP_LINK, WORKING_HOURS } from "@/lib/constants";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./ReadyCTA.module.css";

export function ReadyCTA() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const ready = t.raw("readyCta") as { eyebrow: string; title: string; subtitle: string; callLabel: string; emailLabel: string; hoursLabel: string; hours: string; ctaButton: string };

  return (
    <Box className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Box className={styles.grid}>
          <FadeInUp>
            <Stack gap="xl">
              <Stack gap="xs">
                <Text size="xs" fw={700} tt="uppercase" className={styles.eyebrow}>
                  {ready.eyebrow}
                </Text>
                <Title order={2} size="2.25rem" fw={700} className={styles.title}>
                  {ready.title}
                </Title>
                <Text size="lg" lh={1.6} maw={520} className={styles.subtitle}>
                  {ready.subtitle}
                </Text>
              </Stack>

              <Stack gap="md">
                <Group gap="md">
                  <Box className={styles.iconWrap}>
                    <IconPhone size={22} stroke={2} />
                  </Box>
                  <Stack gap={2}>
                    <Text size="sm" className={styles.label} fw={500}>
                      {ready.callLabel}
                    </Text>
                    <a href={PHONE_TEL} className={styles.contactLink}>
                      {PHONE}
                    </a>
                  </Stack>
                </Group>
                <Group gap="md">
                  <Box className={styles.iconWrap}>
                    <IconMail size={22} stroke={2} />
                  </Box>
                  <Stack gap={2}>
                    <Text size="sm" className={styles.label} fw={500}>
                      {ready.emailLabel}
                    </Text>
                    <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                      {EMAIL}
                    </a>
                  </Stack>
                </Group>
                <Group gap="md">
                  <Box className={styles.iconWrap}>
                    <IconClock size={22} stroke={2} />
                  </Box>
                  <Stack gap={2}>
                    <Text size="sm" className={styles.label} fw={500}>
                      {ready.hoursLabel}
                    </Text>
                    <Text size="md" fw={700} className={styles.foreground}>
                      {WORKING_HOURS}
                    </Text>
                  </Stack>
                </Group>
              </Stack>

              <Group gap="md">
                <Link href="/contact" className={styles.link}>
                  <Button
                    size="lg"
                    radius="xl"
                    fw={600}
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={styles.ctaPrimary}
                  >
                    {ready.ctaButton}
                  </Button>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <Button
                    size="lg"
                    variant="outline"
                    radius="xl"
                    fw={600}
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    leftSection={<IconBrandWhatsapp size={20} />}
                    className={styles.ctaSecondary}
                  >
                    {tCommon("whatsapp")}
                  </Button>
                </a>
              </Group>
            </Stack>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <Box className={styles.rightGrid}>
              {[1, 2, 3, 4].map((i) => (
                <Box key={i} className={styles.mockCard}>
                  <Group justify="space-between" mb={8}>
                    <Text size="xs" fw={600} className={styles.mockLabel}>
                      Real Transformations
                    </Text>
                    <Group gap={4}>
                      <Box className={styles.mockBadge}>Book Now</Box>
                      <Box className={styles.mockBadge}>Call Us</Box>
                    </Group>
                  </Group>
                  <Box className={styles.mockGrid}>
                    {[1, 2, 3, 4].map((j) => (
                      <Box key={j} className={styles.mockCell} />
                    ))}
                  </Box>
                  <Box className={styles.mockBar} />
                  <Text size="xs" className={styles.mockLabel} fw={500}>
                    Ready for Your Dream Smile?
                  </Text>
                </Box>
              ))}

              <Box className={styles.yearsCard}>
                <Box className={styles.yearsIconWrap} aria-hidden>
                  <IconAward size={40} stroke={1.5} color="white" />
                </Box>
                <Text size="2rem" fw={800} lh={1.1}>
                  15 Years
                </Text>
                <Text size="md" fw={500} className={styles.yearsSubtitle}>
                  of Excellence
                </Text>
              </Box>
            </Box>
          </FadeInUp>
        </Box>
      </Container>
    </Box>
  );
}
