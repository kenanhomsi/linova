"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  Box,
  Group,
  ActionIcon,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconCircleCheck, IconInfoCircle } from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./TestimonialsSection.module.css";

const STAR = "★";
const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"]; // G-o-o-g-l-e

function GoogleLogo() {
  return (
    <Text component="span" fw={700} size="sm" className={styles.googleLogo}>
      {["G", "o", "o", "g", "l", "e"].map((letter, i) => (
        <span key={i} className={styles.googleLetter} style={{ ["--google-letter-color" as string]: GOOGLE_COLORS[i] }}>
          {letter}
        </span>
      ))}
    </Text>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <Text component="span" className={styles.stars}>
      {STAR.repeat(count)}
    </Text>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("home");
  const reviewsSection = t.raw("reviewsSection") as { title: string; googleRating: string; googleLabel: string; verifiedBadge: string; readMore: string; quoteMaxLength: number };
  const testimonials = t.raw("testimonials") as Array<{ flag: string; quote: string; name: string; country: string; treatment: string; timeAgo: string }>;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScrollState, 300);
  };

  return (
    <Box className={`section-spacing ${styles.root}`} py="xl">
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>
            <Box className={styles.headerRow}>
              <Box className={styles.accentLine} />
              <Title order={2} size="2rem" fw={700} className={styles.titleWithAccent}>
                {reviewsSection.title}
              </Title>
            </Box>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <Group justify="space-between" wrap="wrap" gap="md">
              <Box className={styles.ratingBox}>
                <GoogleLogo />
                <Group gap={6}>
                  <Stars />
                  <Text size="sm" fw={600} className={styles.ratingLabel}>
                    {reviewsSection.googleRating} | {reviewsSection.googleLabel}
                  </Text>
                </Group>
              </Box>
              <Box className={styles.verifiedBadge}>
                <IconCircleCheck size={18} stroke={2.5} />
                {reviewsSection.verifiedBadge}
                <IconInfoCircle size={16} stroke={2} className={styles.verifiedIcon} />
              </Box>
            </Group>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <Box className={styles.carouselWrap}>
              <ActionIcon
                variant="subtle"
                size="lg"
                radius="xl"
                onClick={() => scroll("left")}
                className={`${styles.arrowLeft} ${!canScrollLeft ? styles.arrowLeftDisabled : ""}`}
              >
                <IconChevronLeft size={22} stroke={2} />
              </ActionIcon>

              <Box
                ref={scrollRef}
                className={styles.scrollArea}
                onScroll={updateScrollState}
              >
                {testimonials.map((item) => {
                  const timeAgo = item.timeAgo ?? "Recently";
                  const maxLen = reviewsSection.quoteMaxLength ?? 120;
                  const truncated =
                    item.quote.length > maxLen
                      ? item.quote.slice(0, maxLen).trim() + "..."
                      : item.quote;
                  const hasMore = item.quote.length > maxLen;

                  return (
                    <Card
                      key={item.name}
                      shadow="sm"
                      padding="lg"
                      radius="lg"
                      withBorder
                      className={styles.card}
                    >
                      <Stack gap="md">
                        <Group justify="space-between" align="flex-start">
                          <Group gap="sm">
                            <Box className={styles.avatar}>{item.flag}</Box>
                            <Box>
                              <Text fw={700} size="sm" className={styles.cardName}>
                                {item.name}
                              </Text>
                              <Text size="xs" className={styles.cardTime}>
                                {timeAgo}
                              </Text>
                            </Box>
                          </Group>
                          <Box className={styles.googleBadge} title="Google review">
                            <Text size="xs" fw={700} className={styles.googleBadgeText}>
                              G
                            </Text>
                          </Box>
                        </Group>

                        <Group gap={6}>
                          <Stars />
                          <IconCircleCheck size={16} className={styles.verifiedCheck} stroke={2.5} />
                        </Group>

                        <Text size="sm" lh={1.6} className={styles.quoteText}>
                          {truncated}
                          {hasMore && (
                            <>
                              {" "}
                              <UnstyledButton component="span" className={styles.readMoreBtn}>
                                {reviewsSection.readMore}
                              </UnstyledButton>
                            </>
                          )}
                        </Text>

                        <Text size="xs" fw={600} className={styles.treatmentLabel}>
                          {item.treatment}
                        </Text>
                      </Stack>
                    </Card>
                  );
                })}
              </Box>

              <ActionIcon
                variant="subtle"
                size="lg"
                radius="xl"
                onClick={() => scroll("right")}
                className={`${styles.arrowRight} ${!canScrollRight ? styles.arrowRightDisabled : ""}`}
              >
                <IconChevronRight size={22} stroke={2} />
              </ActionIcon>
            </Box>
          </FadeInUp>
        </Stack>
      </Container>
    </Box>
  );
}
