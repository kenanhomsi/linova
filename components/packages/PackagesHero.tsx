import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { FadeInUp } from "@/components/ui/Animate";
import heroImage from "@/public/heroSection.jpg";

import styles from "./PackagesHero.module.css";

export async function PackagesHero() {
  const t = await getTranslations("packages");
  return (
    <Box className={styles.hero}>
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        placeholder="blur"
        className={styles.heroBgImage}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} aria-hidden />
      <Container size="lg" className={styles.heroContent}>
        <FadeInUp>
          <Stack gap="md" className={styles.wrapper}>
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("hero.eyebrow")}
            </Text>
            <Title order={1} className={styles.title}>
              {t("hero.title")}{" "}
              <span className={styles.titleHighlight}>
                {t("hero.titleHighlight")}
              </span>
            </Title>
            <Text size="lg" lh={1.7} className={styles.subtitle}>
              {t("hero.subtitle")}
            </Text>
          </Stack>
        </FadeInUp>
      </Container>
    </Box>
  );
}
