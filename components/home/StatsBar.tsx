import { getTranslations } from "next-intl/server";
import { Box } from "@mantine/core";
import { StatsBarMarquee } from "./StatsBarMarquee";
import styles from "./StatsBar.module.css";

export async function StatsBar() {
  const t = await getTranslations("home");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <Box className={styles.root}>
      <StatsBarMarquee stats={stats} />
    </Box>
  );
}
