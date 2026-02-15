"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Container,
  Title,
  Text,
  Stack,
  Box,
  Group,
  Button,
  UnstyledButton,
} from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { TRANSFORMATIONS } from "@/lib/home-data";
import { FadeInUp } from "@/components/ui/Animate";
import { Link } from "@/i18n/navigation";
import styles from "./BeforeAfterShowcase.module.css";

function imagePath(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function BeforeAfterShowcase() {
  const t = useTranslations("home");
  const transformationsText = t.raw("transformations") as Array<{
    title: string;
    detail: string;
    category: string;
  }>;
  const cases = TRANSFORMATIONS.map((item, i) => ({
    ...item,
    ...(transformationsText[i] ?? {}),
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = cases[activeIndex];

  /* ── Slider drag logic ── */
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(3, Math.min(97, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      setIsDragging(true);
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  /* Reset slider to center when switching cases */
  useEffect(() => {
    setSliderPos(50);
  }, [activeIndex]);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % cases.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <Box className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          {/* ── Section heading ── */}
          <FadeInUp>
            <Stack gap="xs" ta="center" maw={620} mx="auto">
              <Text
                size="sm"
                fw={600}
                tt="uppercase"
                className={styles.eyebrow}
              >
                {t("beforeAfterShowcase.eyebrow")}
              </Text>
              <Title
                order={2}
                size="2.25rem"
                fw={800}
                className={styles.heading}
              >
                {t("beforeAfterShowcase.title")}{" "}
                <Box component="span" className={styles.headingAccent}>
                  {t("beforeAfterShowcase.titleAccent")}
                </Box>
              </Title>
              <Text size="md" lh={1.7} className={styles.description}>
                {t("beforeAfterShowcase.subtitle")}
              </Text>
            </Stack>
          </FadeInUp>

          {/* ── Interactive showcase ── */}
          <FadeInUp delay={0.1}>
            <div className={styles.showcaseWrapper}>
              {/* Comparison viewport */}
              <div
                ref={containerRef}
                className={styles.viewport}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                role="slider"
                aria-valuenow={Math.round(sliderPos)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={t("beforeAfterShowcase.dragHint")}
                tabIndex={0}
              >
                {/* After image — sits behind */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`after-${activeIndex}`}
                    className={styles.layer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={imagePath(activeCase.after)}
                      alt={`After: ${activeCase.title}`}
                      fill
                      className={styles.img}
                      sizes="(max-width: 768px) 100vw, 780px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Before image — clipped from the left */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`before-${activeIndex}`}
                    className={styles.layer}
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={imagePath(activeCase.before)}
                      alt={`Before: ${activeCase.title}`}
                      fill
                      className={styles.img}
                      sizes="(max-width: 768px) 100vw, 780px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Corner labels */}
                <span
                  className={styles.labelBefore}
                  style={{ opacity: sliderPos > 12 ? 1 : 0 }}
                >
                  {t("smileTransformations.before")}
                </span>
                <span
                  className={styles.labelAfter}
                  style={{ opacity: sliderPos < 88 ? 1 : 0 }}
                >
                  {t("smileTransformations.after")}
                </span>

                {/* Divider line + handle */}
                <div
                  className={styles.divider}
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className={styles.handle}>
                    <IconChevronLeft size={14} stroke={2.5} />
                    <IconChevronRight size={14} stroke={2.5} />
                  </div>
                </div>

                {/* Drag hint (shows on first load, disappears on interaction) */}
                {!isDragging && sliderPos === 50 && (
                  <motion.div
                    className={styles.dragHint}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <IconChevronLeft size={16} />
                    <Text size="xs" fw={600}>
                      {t("beforeAfterShowcase.dragHint")}
                    </Text>
                    <IconChevronRight size={16} />
                  </motion.div>
                )}
              </div>

              {/* Case details strip below image */}
              <div className={styles.caseBar}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className={styles.caseBarInner}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className={styles.categoryPill}>
                      {activeCase.category}
                    </span>
                    <Text fw={700} size="lg" className={styles.caseTitle}>
                      {activeCase.title}
                    </Text>
                    <Text size="sm" className={styles.caseDetail}>
                      {activeCase.detail}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeInUp>

          {/* ── Thumbnail navigation ── */}
          <FadeInUp delay={0.15}>
            <div className={styles.navRow}>
              <UnstyledButton
                onClick={goPrev}
                className={styles.navArrow}
                aria-label="Previous case"
              >
                <IconChevronLeft size={20} />
              </UnstyledButton>

              <div className={styles.thumbStrip}>
                {cases.map((c, idx) => (
                  <UnstyledButton
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`${styles.thumb} ${
                      idx === activeIndex ? styles.thumbActive : ""
                    }`}
                  >
                    <div className={styles.thumbImg}>
                      <Image
                        src={imagePath(c.after)}
                        alt={c.title}
                        fill
                        className={styles.img}
                        sizes="64px"
                      />
                    </div>
                    <span className={styles.thumbText}>{c.category}</span>
                  </UnstyledButton>
                ))}
              </div>

              <UnstyledButton
                onClick={goNext}
                className={styles.navArrow}
                aria-label="Next case"
              >
                <IconChevronRight size={20} />
              </UnstyledButton>
            </div>
          </FadeInUp>

          {/* ── CTA ── */}
          <FadeInUp delay={0.2}>
            <Group justify="center">
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  radius="xl"
                  rightSection={<IconArrowRight size={18} />}
                  component={motion.button}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={styles.cta}
                >
                  {t("beforeAfterShowcase.cta")}
                </Button>
              </Link>
            </Group>
          </FadeInUp>
        </Stack>
      </Container>
    </Box>
  );
}
