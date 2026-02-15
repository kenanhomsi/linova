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
} from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconStarFilled,
  IconQuote,
  IconShieldCheck,
} from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./TestimonialsSection.module.css";

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];

function GoogleLogo() {
  return (
    <Text component="span" fw={700} size="md" className={styles.googleLogo}>
      {["G", "o", "o", "g", "l", "e"].map((letter, i) => (
        <span
          key={i}
          className={styles.googleLetter}
          style={{ ["--google-letter-color" as string]: GOOGLE_COLORS[i] }}
        >
          {letter}
        </span>
      ))}
    </Text>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <Group gap={2} className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <IconStarFilled key={i} size={16} />
      ))}
    </Group>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("home");
  const reviewsSection = t.raw("reviewsSection") as {
    eyebrow: string;
    title: string;
    subtitle: string;
    googleRating: string;
    googleLabel: string;
    verifiedBadge: string;
    readMore: string;
    quoteMaxLength: number;
  };
  const testimonials = t.raw("testimonials") as Array<{
    flag: string;
    quote: string;
    name: string;
    country: string;
    treatment: string;
    timeAgo: string;
  }>;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Update active dot
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : 1;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, testimonials.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;
    const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth + 24;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <Box className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap={48}>
          {/* Header */}
          <FadeInUp>
            <Box className="section-title-block">
              <Text className="eyebrow">{reviewsSection.eyebrow}</Text>
              <Title order={2} size="2.25rem" fw={800} mt={8} className="title">
                {reviewsSection.title}
              </Title>
              <Text size="lg" mt={12} className="subtitle">
                {reviewsSection.subtitle}
              </Text>
            </Box>
          </FadeInUp>

          {/* Trust bar */}
          <FadeInUp delay={0.05}>
            <Group justify="center" gap="xl" wrap="wrap">
              <Box className={styles.trustBadge}>
                <GoogleLogo />
                <Box className={styles.ratingPill}>
                  <Stars />
                  <Text size="sm" fw={700} className={styles.ratingValue}>
                    {reviewsSection.googleRating}
                  </Text>
                </Box>
                <Text size="sm" fw={500} className={styles.ratingLabel}>
                  {reviewsSection.googleLabel}
                </Text>
              </Box>

              <Box className={styles.verifiedBadge}>
                <IconShieldCheck size={20} stroke={2} />
                <Text size="sm" fw={600}>
                  {reviewsSection.verifiedBadge}
                </Text>
              </Box>
            </Group>
          </FadeInUp>

          {/* Carousel */}
          <FadeInUp delay={0.08}>
            <Box className={styles.carouselWrap}>
              {/* Left arrow */}
              <ActionIcon
                variant="filled"
                size={44}
                radius="xl"
                onClick={() => scroll("left")}
                className={`${styles.arrow} ${styles.arrowLeft} ${
                  !canScrollLeft ? styles.arrowDisabled : ""
                }`}
                aria-label="Previous"
              >
                <IconChevronLeft size={20} stroke={2.5} />
              </ActionIcon>

              {/* Cards */}
              <Box
                ref={scrollRef}
                className={styles.scrollArea}
                onScroll={updateScrollState}
              >
                {testimonials.map((item, idx) => {
                  const maxLen = reviewsSection.quoteMaxLength ?? 140;
                  const truncated =
                    item.quote.length > maxLen
                      ? item.quote.slice(0, maxLen).trim() + "..."
                      : item.quote;
                  const hasMore = item.quote.length > maxLen;

                  return (
                    <Card
                      key={item.name}
                      padding={0}
                      radius="xl"
                      className={styles.card}
                    >
                      <Box className={styles.cardInner}>
                        {/* Quote icon */}
                        <Box className={styles.quoteIcon}>
                          <IconQuote size={24} stroke={1.5} />
                        </Box>

                        {/* Quote text */}
                        <Text size="sm" lh={1.7} className={styles.quoteText}>
                          {truncated}
                          {hasMore && (
                            <Text
                              component="span"
                              size="sm"
                              fw={600}
                              className={styles.readMoreBtn}
                            >
                              {" "}
                              {reviewsSection.readMore}
                            </Text>
                          )}
                        </Text>

                        {/* Divider */}
                        <Box className={styles.cardDivider} />

                        {/* Author */}
                        <Group gap="sm" wrap="nowrap">
                          <Box className={styles.avatar}>
                            <Text size="xl">{item.flag}</Text>
                          </Box>
                          <Box style={{ flex: 1, minWidth: 0 }}>
                            <Group gap={6} wrap="nowrap">
                              <Text fw={700} size="sm" className={styles.cardName}>
                                {item.name}
                              </Text>
                              <Box className={styles.googleDot} title="Google review">
                                <Text
                                  size="xs"
                                  fw={800}
                                  className={styles.googleDotText}
                                >
                                  G
                                </Text>
                              </Box>
                            </Group>
                            <Text size="xs" className={styles.cardCountry}>
                              {item.country}
                            </Text>
                          </Box>
                          <Stars />
                        </Group>

                        {/* Treatment tag */}
                        <Box className={styles.treatmentTag}>
                          <Text size="xs" fw={600}>
                            {item.treatment}
                          </Text>
                        </Box>
                      </Box>
                    </Card>
                  );
                })}
              </Box>

              {/* Right arrow */}
              <ActionIcon
                variant="filled"
                size={44}
                radius="xl"
                onClick={() => scroll("right")}
                className={`${styles.arrow} ${styles.arrowRight} ${
                  !canScrollRight ? styles.arrowDisabled : ""
                }`}
                aria-label="Next"
              >
                <IconChevronRight size={20} stroke={2.5} />
              </ActionIcon>
            </Box>

            {/* Pagination dots */}
            <Group justify="center" gap={8} mt="lg">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </Group>
          </FadeInUp>
        </Stack>
      </Container>
    </Box>
  );
}
