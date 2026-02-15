"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Container, Text, Button, Stack, Box, Group } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronRight, IconStar } from "@tabler/icons-react";
import styles from "./Hero.module.css";

/** Rotating hero images — left: smiling patients, right: Istanbul sea/landmarks */
const PATIENT_IMAGES = [
  "/images/hero-patient-1.jpg",
  "/images/hero-patient-2.jpg",
  "/images/hero-patient-3.jpg",
];

const ISTANBUL_IMAGES = [
  "/images/hero-istanbul-1.jpg",
  "/images/hero-istanbul-2.jpg",
  "/images/hero-istanbul-3.jpg",
];

const SLIDE_INTERVAL = 4000; // ms

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

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Hero() {
  const t = useTranslations("home");
  const heroTitle = t("hero.title");
  const heroTitleHighlight = t("hero.titleHighlight");

  const [patientIdx, setPatientIdx] = useState(0);
  const [istanbulIdx, setIstanbulIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setPatientIdx((prev) => (prev + 1) % PATIENT_IMAGES.length);
    setIstanbulIdx((prev) => (prev + 1) % ISTANBUL_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Box pos="relative" className={`${styles.root} hero-bg-pulse`}>
      {/* Background composite: left patient + right Istanbul, both rotating */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={styles.bgLayer}
      >
        <div className={styles.bgComposite}>
          {/* Left: Smiling patients */}
          <div className={styles.heroLeft}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`patient-${patientIdx}`}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
                className={styles.slideWrapper}
              >
                <Image
                  src={PATIENT_IMAGES[patientIdx]}
                  alt="Confident, happy patient with a beautiful smile"
                  fill
                  priority={patientIdx === 0}
                  className={styles.heroImage}
                  sizes="50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Istanbul sea & landmarks */}
          <div className={styles.heroRight}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`istanbul-${istanbulIdx}`}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
                className={styles.slideWrapper}
              >
                <Image
                  src={ISTANBUL_IMAGES[istanbulIdx]}
                  alt="Istanbul — Bosphorus sea, mosques, and skyline at golden hour"
                  fill
                  priority={istanbulIdx === 0}
                  className={styles.heroImage}
                  sizes="50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Diagonal blend seam */}
          <div className={styles.heroBlend} aria-hidden />
        </div>
      </motion.div>

      {/* Content overlay */}
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
      </Container>
    </Box>
  );
}
