"use client";

import { Container, Text, Button, Stack, Box, Group } from "@mantine/core";
import { IconChevronRight, IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { LazyVideo } from "@/components/media/LazyVideo";
import { Link } from "@/i18n/navigation";

import styles from "./Hero.module.css";

/** Desktop: diagonal split (clinic + Istanbul). Mobile (CSS): right panel hidden — one video only. */
const HERO_VIDEO = "/images/video2.mp4";
const HERO_VIDEO1 = "/images/video1.mp4";
const HERO_POSTER = "/images/video2-poster.webp";
const HERO_POSTER1 = "/images/video1-poster.webp";

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

export function Hero() {
  const t = useTranslations("home");
  const heroTitle = t("hero.title");
  const heroTitleHighlight = t("hero.titleHighlight");

  return (
    <Box pos="relative" className={`${styles.root} hero-bg-pulse`}>
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={styles.bgLayer}
      >
        <div className={styles.bgComposite}>
          <div className={styles.heroLeft}>
            <div className={styles.slideWrapper}>
              <LazyVideo
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                eager
                autoPlay
                loop
                aria-label="Linova Clinic — premium dental care"
                className={styles.heroVideo}
              />
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.slideWrapper}>
              <LazyVideo
                src={HERO_VIDEO1}
                poster={HERO_POSTER1}
                eager={false}
                autoPlay
                loop
                aria-label="Linova Clinic — Istanbul"
                className={styles.heroVideo}
              />
            </div>
          </div>
          <div className={styles.heroBlend} aria-hidden />
        </div>
      </motion.div>

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
              <Text component="h1" fw={800} lh={1.05} className={styles.title}>
                {heroTitle.replace(heroTitleHighlight, "").trim()}{" "}
                <Box component="span" className={styles.titleHighlight}>
                  {heroTitleHighlight}
                </Box>
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text
                size="lg"
                c="rgba(255,255,255,0.9)"
                lh={1.7}
                maw={560}
                className={styles.subtitle}
              >
                {t("hero.subtitle")}
              </Text>
            </motion.div>
            <motion.div variants={item} className={styles.ctaGroup}>
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
                <Link
                  href="/blogs/hollywood-smile-makeover"
                  className={styles.link}
                >
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
      </Container>

      <motion.div
        className={styles.scrollCue}
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className={styles.scrollCueLabel}>{t("hero.scrollCue")}</span>
        <span className={styles.scrollCueDot} />
      </motion.div>
    </Box>
  );
}
