"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container, Title, Text, Stack, SimpleGrid, Card, Box, Button, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { TRANSFORMATIONS } from "@/lib/home-data";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./SmileTransformations.module.css";

function imagePath(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function SmileTransformations() {
  const t = useTranslations("home");
  const section = t.raw("smileTransformations") as { tabs: string[] };
  const TAB_OPTIONS = section.tabs;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = TAB_OPTIONS[activeTabIndex];

  const transformationsText = t.raw("transformations") as Array<{ title: string; detail: string; category: string }>;
  const items = TRANSFORMATIONS.map((item, i) => ({ ...item, ...(transformationsText[i] ?? {}) }));

  const filtered = useMemo(() => {
    if (activeTabIndex === 0) {
      return [...items];
    }
    return items.filter((item) => item.category === activeTab);
  }, [activeTabIndex, activeTab, items]);

  return (
    <Box className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>
            <Stack gap="xs" ta="center" maw={700} mx="auto">
              <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
                {t("smileTransformations.eyebrow")}
              </Text>
              <Title order={2} size="2rem" fw={700} className={styles.title}>
                {t("smileTransformations.title")}
              </Title>
              <Text size="lg" lh={1.6} className={styles.subtitle}>
                {t("smileTransformations.subtitle")}
              </Text>
            </Stack>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <Group justify="center" gap="sm" wrap="wrap">
              {TAB_OPTIONS.map((tabLabel, idx) => (
                <Button
                  key={idx}
                  variant={activeTabIndex === idx ? "filled" : "outline"}
                  size="sm"
                  radius="xl"
                  onClick={() => setActiveTabIndex(idx)}
                  component={motion.button}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={activeTabIndex === idx ? styles.tabActive : styles.tabInactive}
                  suppressHydrationWarning
                >
                  {tabLabel}
                </Button>
              ))}
            </Group>
          </FadeInUp>
          <StaggerContainer key={activeTabIndex} staggerChildren={0.06}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {filtered.map((item, index) => (
                <StaggerItem key={`${activeTabIndex}-${item.title}-${index}`}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <Card
                      shadow="sm"
                      padding={0}
                      radius="md"
                      className={`card-hover ${styles.card}`}
                    >
                      <Box className={styles.splitGrid}>
                        <Box pos="relative" className={styles.halfBefore}>
                          <Image
                            src={imagePath(item.before)}
                            alt={`Before: ${item.title}`}
                            fill
                            className={styles.beforeImage}
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <Box pos="absolute" top={8} left={8} px="xs" py={2} className={styles.badgeBefore}>
                            Before
                          </Box>
                        </Box>
                        <Box pos="relative" className={styles.halfAfter}>
                          <Image
                            src={imagePath(item.after)}
                            alt={`After: ${item.title}`}
                            fill
                            className={styles.afterImage}
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <Box pos="absolute" top={8} left={8} px="xs" py={2} className={styles.badgeAfter}>
                            {t("smileTransformations.after")}
                          </Box>
                        </Box>
                      </Box>
                      <Stack gap="xs" p="md" ta="center">
                        <Title order={4} size="h5" fw={700} className={styles.cardTitle}>
                          {item.title}
                        </Title>
                        <Text size="sm" fw={500} className={styles.cardDetail}>
                          {item.detail}
                        </Text>
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
