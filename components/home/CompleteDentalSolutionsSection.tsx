"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
  IconSparkles,
  IconDental,
  IconMoodSmile,
  IconSunHigh,
  IconCrown,
  IconScan,
  IconFlame,
  IconCheck,
  IconChevronRight,
} from "@tabler/icons-react";
import { COMPLETE_DENTAL_SOLUTIONS_CARDS } from "@/lib/home-data";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./CompleteDentalSolutionsSection.module.css";

/* ─── Constants ─── */
const AUTO_PLAY_MS = 6000;

/* ─── Icon resolver (matches categoryIcon field in data) ─── */
type IconKey =
  | "sparkles"
  | "implant"
  | "veneer"
  | "whitening"
  | "crown"
  | "digital"
  | "laser";

function renderIcon(type: IconKey, size = 24) {
  switch (type) {
    case "sparkles":
      return <IconSparkles size={size} stroke={1.5} />;
    case "implant":
      return <IconDental size={size} stroke={1.5} />;
    case "veneer":
      return <IconMoodSmile size={size} stroke={1.5} />;
    case "whitening":
      return <IconSunHigh size={size} stroke={1.5} />;
    case "crown":
      return <IconCrown size={size} stroke={1.5} />;
    case "digital":
      return <IconScan size={size} stroke={1.5} />;
    case "laser":
      return <IconFlame size={size} stroke={1.5} />;
    default:
      return <IconDental size={size} stroke={1.5} />;
  }
}

/* ─── Types ─── */
interface Props {
  animated?: boolean;
}

type CardTranslation = {
  category: string;
  title: string;
  description: string;
  cta: string;
  badge?: string;
  highlights?: string[];
};

type MergedCard = (typeof COMPLETE_DENTAL_SOLUTIONS_CARDS)[number] &
  CardTranslation;

/* ─── Conditional animation wrapper ─── */
function MaybeAnimate({
  animated,
  children,
  delay = 0,
}: {
  animated: boolean;
  children: React.ReactNode;
  delay?: number;
}) {
  if (!animated) return <>{children}</>;
  return <FadeInUp delay={delay}>{children}</FadeInUp>;
}

/* ─── Main Component ─── */
export function CompleteDentalSolutionsSection({ animated = true }: Props) {
  const t = useTranslations("home");
  const raw = t.raw("completeDentalSolutionsCards") as CardTranslation[];

  const cards = COMPLETE_DENTAL_SOLUTIONS_CARDS.map((meta, i) => ({
    ...meta,
    ...(raw[i] ?? {}),
  })) as MergedCard[];

  /* State */
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const tabsRef = useRef<HTMLDivElement>(null);

  const card = cards[active];

  /* Auto-play */
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(
      () => setActive((p) => (p + 1) % cards.length),
      AUTO_PLAY_MS
    );
    return () => clearTimeout(timer.current);
  }, [active, paused, cards.length]);

  const go = useCallback(
    (i: number) => {
      if (i === active) return;
      setActive(i);
    },
    [active]
  );


  const counter = `${String(active + 1).padStart(2, "0")} / ${String(
    cards.length
  ).padStart(2, "0")}`;

  return (
    <Box
      id="services"
      className={`section-spacing ${styles.root}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container size="xl">
        <Stack gap="xl">
          {/* ── Header ── */}
          <MaybeAnimate animated={animated}>
            <Stack gap="xs" ta="center" maw={700} mx="auto">
              <Text
                size="sm"
                fw={600}
                tt="uppercase"
                className={styles.eyebrow}
              >
                {t("expertise.eyebrow")}
              </Text>
              <Title
                order={2}
                size="2rem"
                fw={700}
                className={styles.heading}
              >
                {t("expertise.title")}
              </Title>
              <Text size="lg" lh={1.6} className={styles.sub}>
                {t("expertise.subtitle")}
              </Text>
            </Stack>
          </MaybeAnimate>

          {/* ── Treatment Selector Tabs ── */}
          <MaybeAnimate animated={animated} delay={0.08}>
            <Box className={styles.tabsScroll}>
              <div ref={tabsRef} className={styles.tabsRow}>
                {cards.map((c, i) => (
                  <UnstyledButton
                    key={i}
                    onClick={() => go(i)}
                    className={`${styles.tab} ${i === active ? styles.tabOn : ""
                      }`}
                    role="tab"
                    aria-selected={i === active}
                  >
                    <Box className={styles.tabIcon}>
                      {renderIcon(c.categoryIcon, 22)}
                    </Box>
                    <Text size="xs" className={styles.tabLabel}>
                      {c.title}
                    </Text>
                    {/* Animated active indicator */}
                    {i === active && (
                      <motion.div
                        layoutId="tabActiveBar"
                        className={styles.tabBar}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </UnstyledButton>
                ))}
              </div>
            </Box>
          </MaybeAnimate>

          {/* ── Spotlight Card ── */}
          <MaybeAnimate animated={animated} delay={0.14}>
            <Box className={styles.spotlight}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={styles.grid}
                >
                  {/* Image side */}
                  <Box className={styles.imgWrap}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className={styles.img}
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    {card.badge && (
                      <Box className={styles.badge}>{card.badge}</Box>
                    )}
                  </Box>

                  {/* Content side */}
                  <Stack gap="md" className={styles.body}>
                    <Group gap="xs" justify="space-between" align="center">
                      <Text
                        size="xs"
                        fw={700}
                        tt="uppercase"
                        className={styles.cat}
                      >
                        {card.category}
                      </Text>
                      <Text size="xs" fw={600} className={styles.counter}>
                        {counter}
                      </Text>
                    </Group>

                    <Title order={3} className={styles.cardTitle}>
                      {card.title}
                    </Title>

                    <Text size="md" lh={1.7} className={styles.desc}>
                      {card.description}
                    </Text>

                    {card.highlights && card.highlights.length > 0 && (
                      <Stack gap={8} className={styles.highlights}>
                        {card.highlights.map((h: string, idx: number) => (
                          <Group
                            key={idx}
                            gap="xs"
                            wrap="nowrap"
                            align="center"
                          >
                            <Box className={styles.checkCircle}>
                              <IconCheck size={12} stroke={3} />
                            </Box>
                            <Text size="sm" fw={500} className={styles.hl}>
                              {h}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    )}

                    <Box className={styles.ctaWrap}>
                      <Link
                        href={`/blogs/${card.blogSlug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          size="md"
                          radius="md"
                          fw={600}
                          className={styles.cta}
                          rightSection={
                            <IconChevronRight size={16} stroke={2.5} />
                          }
                        >
                          {card.cta}
                        </Button>
                      </Link>
                    </Box>
                  </Stack>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <Group gap={6} justify="center" className={styles.dotsRow}>
                {cards.map((_, i) => (
                  <UnstyledButton
                    key={i}
                    onClick={() => go(i)}
                    className={`${styles.dot} ${i === active ? styles.dotOn : ""
                      }`}
                    aria-label={`Treatment ${i + 1}`}
                  />
                ))}
              </Group>
            </Box>
          </MaybeAnimate>
        </Stack>
      </Container>
    </Box>
  );
}
