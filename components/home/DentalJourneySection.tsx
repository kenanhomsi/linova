"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Container, Title, Text, Stack, SimpleGrid, Box } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconMessageCircle,
  IconPlane,
  IconBuilding,
  IconWorld,
  IconArrowRight,
} from "@tabler/icons-react";
import dentalJourneyBg from "@/public/istanbul.jpg";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./DentalJourneySection.module.css";

const JOURNEY_ICONS = [IconMessageCircle, IconPlane, IconBuilding, IconWorld] as const;

export function DentalJourneySection() {
  const t = useTranslations("home");
  const journey = t.raw("dentalJourney") as { title: string; subtitle: string; cta: string; cards: Array<{ title: string; description: string }> };

  return (
    <Box className={styles.root}>
      <Box pos="absolute" inset={0} className={styles.bgLayer}>
        <Image
          src={dentalJourneyBg}
          alt="Istanbul"
          fill
          priority={false}
          className={styles.heroImage}
          sizes="100vw"
        />
        <Box pos="absolute" inset={0} className={styles.overlay} />
        <Box pos="absolute" inset={0} className={styles.textureOverlay} />
      </Box>

      <Container size="lg" className={styles.container}>
        <Stack gap="xl">
          <FadeInUp className="my-16">
            <Box className={styles.journeyHeader}>
              <Title className={styles.title}>{journey.title}</Title>
              <Text className={styles.subtitle}>{journey.subtitle}</Text>
            </Box>
          </FadeInUp>

          <StaggerContainer staggerChildren={0.1}>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
              {journey.cards.map((card, i) => {
                const Icon = JOURNEY_ICONS[i] ?? IconMessageCircle;
                const [firstWord, ...restWords] = card.title.split(" ");
                const restOfTitle = restWords.length > 0 ? ` ${restWords.join(" ")}` : "";
                return (
                  <StaggerItem key={card.title}>
                    <Box className={styles.card}>
                      <Box className={styles.cardIcon}>
                        <Icon size={28} stroke={2} />
                      </Box>
                      <Title order={4} size="h5" c="white" fw={700} mb="xs">
                        {firstWord}
                        {restOfTitle && (
                          <span className={styles.cardTitleAccent}>{restOfTitle}</span>
                        )}
                      </Title>
                      <Text size="sm" c="rgba(255,255,255,0.88)" lh={1.6}>
                        {card.description}
                      </Text>
                      <Box className={styles.cardLine} />
                    </Box>
                  </StaggerItem>
                );
              })}
            </SimpleGrid>
          </StaggerContainer>

          <FadeInUp delay={0.2}>
            <Link href="/contact" className={styles.link}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={styles.ctaButton}
              >
                <Box py="sm" px="lg" fw={600} className={styles.ctaLabel}>
                  {journey.cta}
                </Box>
                <Box className={styles.ctaIconWrap}>
                  <IconArrowRight size={22} stroke={2.5} />
                </Box>
              </motion.div>
            </Link>
          </FadeInUp>
        </Stack>
      </Container>
    </Box>
  );
}
