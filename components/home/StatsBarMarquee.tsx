"use client";

import { useEffect, useRef, useState } from "react";
import { Text, Box, Container } from "@mantine/core";
import styles from "./StatsBar.module.css";

export type StatItem = { value: string; label: string };

/** Parse stat value string into number + prefix/suffix for count-up (e.g. "98%" → 98 + "%", "10K+" → 10 + "K+", "%98" → 98 + "%") */
function parseStatValue(value: string): { target: number; prefix: string; suffix: string } {
  const numMatch = value.match(/(\d+(?:\.\d+)?)/);
  if (!numMatch) return { target: 0, prefix: "", suffix: value };
  const numStr = numMatch[1];
  const idx = value.indexOf(numStr);
  const prefix = value.slice(0, idx);
  const suffix = value.slice(idx + numStr.length);
  const target = Math.round(parseFloat(numStr));
  return { target, prefix, suffix };
}

const DURATION_MS = 2000;

export function StatsBarMarquee({ stats }: { stats: StatItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsKey = stats.map((s) => s.value).join("|");
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const parsed = stats.map((s) => parseStatValue(s.value));

  // Reset when stats change (e.g. locale switch) so count-up can run again
  useEffect(() => {
    setCounts(stats.map(() => 0));
    setHasAnimated(false);
  }, [statsKey]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setHasAnimated(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = parsed.map((p) => p.target);
    const startTime = Date.now();
    let rafId: number;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      // easeOutQuart for a smooth slowdown at the end
      const eased = 1 - (1 - t) ** 4;

      setCounts(targets.map((target) => Math.round(eased * target)));

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated]);

  return (
    <Box
      ref={containerRef}
      py="xl"
      className={`${styles.steadyWrap} ${hasAnimated ? styles.visible : ""}`}
    >
      <Container size="xl">
        <Box className={styles.grid}>
          {stats.map((stat, i) => (
            <Box key={stat.label} className={styles.statPart}>
              <Text
                component="span"
                className={styles.value}
                fw={800}
                size="clamp(1.5rem, 4vw, 2.5rem)"
                lh={1.1}
                c="white"
              >
                {parsed[i].prefix}
                {counts[i]}
                {parsed[i].suffix}
              </Text>
              <Text size="sm" c="teal.1" fw={500} mt={4} className={styles.label}>
                {stat.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
