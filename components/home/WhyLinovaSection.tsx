"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container, Title, Text, Stack, SimpleGrid, Card, Box } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconUserStar,
  IconTag,
  IconWorld,
  IconClock,
  IconHeadset,
} from "@tabler/icons-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyLinovaSection.module.css";

const ICONS = [
  IconShieldCheck,
  IconUserStar,
  IconTag,
  IconWorld,
  IconClock,
  IconHeadset,
] as const;

const CARD_TRANSITION = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function WhyLinovaSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("home");
  const cards = t.raw("whyLinova.cards") as Array<{ title: string; description: string; cta: string }>;

  return (
    <Box id="why-us" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap={48}>
          <FadeInUp>
            <Stack gap="md" ta="center" maw={720} mx="auto">
              <Text size="sm" fw={700} tt="uppercase" className={styles.eyebrow}>
                {t("whyLinova.eyebrow")}
              </Text>
              <Title order={2} className={styles.title +
                ' text-gray-900 font-bold'
              }>
                {t("whyLinova.title")}
              </Title>
              <Text size="lg" lh={1.65} className={styles.subtitle}>
                {t("whyLinova.subtitle")}
              </Text>
            </Stack>
          </FadeInUp>

          <StaggerContainer as="div" staggerChildren={0.06}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" className={styles.grid}>
              {cards.map((card, i) => {
                const Icon = ICONS[i];
                const isFeatured = hoveredIndex === i;
                return (
                  <StaggerItem key={card.title}>
                    <motion.div
                      className={styles.cardWrapper}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -6 }}
                      transition={CARD_TRANSITION}
                    >
                      <Card
                        shadow="sm"
                        padding="xl"
                        radius="lg"
                        className={`${styles.card} ${isFeatured ? styles.cardFeatured : ""}`}
                      >
                        <Box className={styles.decorativeCircle} aria-hidden />
                        <Stack gap="md" className={styles.cardInner}>
                          <Box className={styles.iconWrap}>
                            {Icon && <Icon size={26} stroke={2} />}
                          </Box>
                          <Title order={3} size="h4" fw={700} className={styles.cardTitle}>
                            {card.title}
                          </Title>
                          <Text size="sm" lh={1.65} className={styles.cardDesc}>
                            {card.description}
                          </Text>
                          <Link href="/#contact" className={styles.cta}>
                            {card.cta} →
                          </Link>
                        </Stack>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </SimpleGrid>
          </StaggerContainer>
        </Stack>
      </Container>
    </Box>
  );
}
