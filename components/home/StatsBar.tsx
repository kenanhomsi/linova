"use client";

import { useTranslations } from "next-intl";
import { Container, SimpleGrid, Text, Box } from "@mantine/core";
import styles from "./StatsBar.module.css";

export function StatsBar() {
  const t = useTranslations("home");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <Box py="xl" className={styles.root}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
          {stats.map((stat) => (
            <Box key={stat.label} ta="center">
              <Text fw={800} size="2.5rem" lh={1.1} c="white">
                {stat.value}
              </Text>
              <Text size="sm" c="teal.1" fw={500} mt={4}>
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
