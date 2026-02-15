"use client";

import { useTranslations } from "next-intl";
import { Container, Title, Text, SimpleGrid, Card, Stack, Box } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./SocialProofSection.module.css";

const QUOTE_MAX_LENGTH = 100;

export function SocialProofSection() {
  const t = useTranslations("home");
  const eyebrow = t("socialProof.eyebrow");
  const title = t("socialProof.title");
  const testimonials = t.raw("testimonials") as Array<{
    flag: string;
    quote: string;
    name: string;
    country: string;
  }>;

  const featured = testimonials.slice(0, 2).map((item) => ({
    ...item,
    shortQuote:
      item.quote.length > QUOTE_MAX_LENGTH
        ? item.quote.slice(0, QUOTE_MAX_LENGTH).trim() + "…"
        : item.quote,
  }));

  return (
    <Box className={`section-spacing ${styles.root}`}>
      <Container size="lg">
        <Stack gap="xl">
          <FadeInUp>
            <Stack gap="xs" ta="center" maw={640} mx="auto">
              <Text size="sm" fw={700} tt="uppercase" className={styles.eyebrow}>
                {eyebrow}
              </Text>
              <Title order={2} className={styles.title}>
                {title}
              </Title>
            </Stack>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {featured.map((item) => (
                <Card key={item.country + item.name} className={styles.card} padding="lg" radius="md" withBorder>
                  <Box className={styles.quoteIcon}>
                    <IconQuote size={28} stroke={1.5} />
                  </Box>
                  <Text size="md" lh={1.6} className={styles.quote}>
                    "{item.shortQuote}"
                  </Text>
                  <Stack gap={2} mt="md">
                    <Text fw={600} size="sm">
                      {item.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {item.flag} {item.country}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </FadeInUp>
        </Stack>
      </Container>
    </Box>
  );
}
