"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Container, Text, Button, Stack, Box, Group, SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";
import { IconChevronRight, IconStar } from "@tabler/icons-react";
import heroSection from "@/public/heroSection.jpg";
import styles from "./Hero.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const statsItem = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function Hero() {
  const t = useTranslations("home");
  const heroTitle = t("hero.title");
  const heroTitleHighlight = t("hero.titleHighlight");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <Box pos="relative" className={`${styles.root} hero-bg-pulse`}>
      {heroSection && (
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={styles.bgLayer}
        >
          <motion.div
            className={styles.bgInner}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={heroSection}
              alt="Linova Clinic Istanbul"
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}
      <Container size="lg" className={styles.container}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.content}
        >
          <Stack gap="xl" align="center">
            <motion.div variants={item}>
              <Box px="lg" py="xs" className={`${styles.badge} animate-float`}>
                <IconStar size={16} className={styles.badgeIcon} stroke={2} />
                <Text size="sm" fw={600} component="span">
                  {t("hero.badge")}
                </Text>
              </Box>
            </motion.div>
            <motion.div variants={item}>
              <Text
                component="h1"
                fw={800}
                lh={1.05}
                className={styles.title}
              >
                {heroTitle.replace(heroTitleHighlight, "").trim()}{" "}
                <Box component="span" className={styles.titleHighlight}>
                  {heroTitleHighlight}
                </Box>
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text size="lg" c="rgba(255,255,255,0.9)" lh={1.7} maw={560} className={styles.subtitle}>
                {t("hero.subtitle")}
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Group gap="sm" justify="center" wrap="wrap">
                <Link href="/contact" className={styles.link}>
                  <Button
                    size="lg"
                    radius="md"
                    fw={600}
                    component={motion.button}
                    className={`animate-glow ${styles.ctaPrimary}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    rightSection={<IconChevronRight size={18} stroke={2.5} />}
                  >
                    {t("hero.ctaPrimary")}
                  </Button>
                </Link>
                <Link href="/treatments" className={styles.link}>
                  <Button
                    size="lg"
                    variant="outline"
                    radius="md"
                    fw={600}
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={styles.ctaSecondary}
                  >
                    {t("hero.ctaSecondary")}
                  </Button>
                </Link>
              </Group>
            </motion.div>
          </Stack>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className={styles.footer}
        >
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl" py="xl">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statsItem}
                custom={i}
                className={styles.statsItem}
              >
                <Text fw={800} size="2.25rem" lh={1.1} c="white">
                  {stat.value}
                </Text>
                <Text size="xs" c="rgba(255,255,255,0.85)" fw={600} tt="uppercase" mt={4} className={styles.statsLabel}>
                  {stat.label}
                </Text>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}
