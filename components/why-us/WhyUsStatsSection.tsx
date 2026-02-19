import { Container, Box, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyUsStatsSection.module.css";

export async function WhyUsStatsSection() {
  const t = await getTranslations("whyUs");
  const stats = t.raw("stats") as Array<{ value: string; label: string; detail: string }>;
  return (
    <Box component="section" className={styles.section}>
      <Container size="xl">
        <StaggerContainer staggerChildren={0.06} delayChildren={0.1}>
          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
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
