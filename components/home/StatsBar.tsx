import { Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import styles from "./StatsBar.module.css";
import { StatsBarMarquee } from "./StatsBarMarquee";

export async function StatsBar() {
  const t = await getTranslations("home");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <Box className={styles.root}>
      <StatsBarMarquee stats={stats} />
    </Box>
  );
}
