"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Title, Text, Stack, SimpleGrid, Card, Box, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { IconStar, IconHeart, IconBolt } from "@tabler/icons-react";
import { EXPERTISE, TREATMENT_CARDS } from "@/lib/home-data";
import { HERO_IMAGE } from "@/lib/constants";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./ExpertiseSection.module.css";

const PLACEHOLDER_IMAGES = [
  HERO_IMAGE,
  HERO_IMAGE,
  HERO_IMAGE,
  HERO_IMAGE,
  HERO_IMAGE,
];

export function ExpertiseSection() {
  const featured = TREATMENT_CARDS.filter((c) => c.featured);
  const rest = TREATMENT_CARDS.filter((c) => !c.featured).slice(0, 5);
  const topThree = rest.slice(0, 3);

  return (
    <Box id="services" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>
            <Stack gap="xs" ta="center" maw={700} mx="auto">
              <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
                {EXPERTISE.eyebrow}
              </Text>
              <Title order={2} size="2rem" fw={700} className={styles.title}>
                {EXPERTISE.title}
              </Title>
              <Text size="lg" lh={1.6} className={styles.subtitle}>
                {EXPERTISE.subtitle}
              </Text>
            </Stack>
          </FadeInUp>

          <StaggerContainer staggerChildren={0.1}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              {featured.map((card, i) => (
                <StaggerItem key={card.title}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <Card
                      shadow="md"
                      padding={0}
                      radius="md"
                      className={`card-hover ${styles.card}`}
                    >
                      <Box pos="relative" h={280} className={styles.imageBox}>
                        {HERO_IMAGE && (
                          <Image
                            src={HERO_IMAGE}
                            alt={card.title}
                            fill
                            className={styles.heroImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        <Box pos="absolute" top={12} left={12} px="sm" py={4} className={styles.badge}>
                          {card.badge}
                        </Box>
                        <Box pos="absolute" bottom={12} left={12} className={styles.iconCircle}>
                          {i === 0 ? <IconStar size={20} /> : <IconHeart size={20} />}
                        </Box>
                      </Box>
                      <Stack gap="sm" p="lg">
                        <Group gap="xs">
                          <Box className={styles.categoryIcon}>
                            {i === 0 ? <IconStar size={14} /> : <IconHeart size={14} />}
                          </Box>
                          <Text size="xs" fw={700} tt="uppercase" className={styles.categoryLabel}>
                            {card.category}
                          </Text>
                        </Group>
                        <Title order={3} size="h4" fw={700} className={styles.cardTitle}>
                          {card.title}
                        </Title>
                        <Text size="sm" lh={1.6} className={styles.cardDesc}>
                          {card.description}
                        </Text>
                        <Link href="/contact" className={styles.link}>
                          {card.cta} →
                        </Link>
                      </Stack>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="lg">
              {topThree.map((card, i) => (
                <StaggerItem key={card.title}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <Card
                      shadow="sm"
                      padding={0}
                      radius="md"
                      className={`card-hover ${styles.card}`}
                    >
                      <Box pos="relative" h={200} className={styles.smallImageBox}>
                        {PLACEHOLDER_IMAGES[i] && (
                          <Image
                            src={PLACEHOLDER_IMAGES[i]}
                            alt={card.title}
                            fill
                            className={styles.heroImage}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                        <Box pos="absolute" top={12} left={12} className={styles.smallIcon}>
                          <IconBolt size={18} />
                        </Box>
                        <Box pos="absolute" bottom={0} left={0} right={0} py="xs" px="md" className={styles.bar}>
                          {card.category.toUpperCase()}
                        </Box>
                      </Box>
                      <Stack gap="xs" p="md">
                        <Title order={4} size="h5" fw={700} className={styles.cardTitle}>
                          {card.title}
                        </Title>
                        <Text size="sm" lineClamp={2} className={styles.cardDesc}>
                          {card.description}
                        </Text>
                        <Link href="/treatments" className={styles.link}>
                          Learn More →
                        </Link>
                      </Stack>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>
        </Stack>
      </Container>
    </Box>
  );
}
