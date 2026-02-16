"use client";

import { Container, Box, Text } from "@mantine/core";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsStatsSection.module.css";

const STATS = [
  { value: "10,000+", label: "Patients Treated", detail: "From 50+ countries worldwide" },
  { value: "15+", label: "Years of Experience", detail: "In advanced dental care" },
  { value: "70%", label: "Average Savings", detail: "Compared to UK & US prices" },
  { value: "98%", label: "Satisfaction Rate", detail: "Based on patient reviews" },
  { value: "24/7", label: "Patient Support", detail: "Multilingual coordinators" },
  { value: "5★", label: "Google Rating", detail: "Verified patient reviews" },
];

export function WhyUsStatsSection() {
  return (
    <Box component="section" className={styles.section}>
      <Container size="xl">
        <StaggerContainer staggerChildren={0.06} delayChildren={0.1}>
          <div className={styles.grid}>
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className={styles.card}>
                  <Text className={styles.value}>{stat.value}</Text>
                  <Text className={styles.label}>{stat.label}</Text>
                  <Text className={styles.detail}>{stat.detail}</Text>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
