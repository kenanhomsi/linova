import { getTranslations } from "next-intl/server";

import { StatsBarMarquee } from "./StatsBarMarquee";

export async function StatsBar() {
  const t = await getTranslations("home");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return <StatsBarMarquee stats={stats} />;
}
