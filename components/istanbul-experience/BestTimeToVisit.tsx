import Image from "next/image";
import { Container, Title, Text, Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/Animate";
import { istanbulImageSrc } from "@/lib/istanbul-experience-images";

import styles from "./BestTimeToVisit.module.css";

interface Season {
  imageKey?: string;
  name: string;
  detail: string;
}

export async function BestTimeToVisit() {
  const t = await getTranslations("istanbulExperience");
  const items = t.raw("seasons.items") as Season[];

  return (
    <SectionReveal delay={0.04}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="seasons-heading"
      >
        <Container size="xl">
          <div className={styles.layout}>
            <div className={styles.header}>
              <Text className={styles.eyebrow}>{t("hero.eyebrow")}</Text>
              <Title order={2} id="seasons-heading" className={styles.title}>
                {t("seasons.title")}
              </Title>
              <Text size="md" className={styles.subtitle}>
                {t("seasons.subtitle")}
              </Text>
            </div>
            <StaggerContainer staggerChildren={0.06}>
              <div className={styles.grid}>
                {items.map((s) => {
                  const src = istanbulImageSrc(s.imageKey);
                  return (
                    <StaggerItem key={s.name}>
                      <article className={styles.card}>
                        <div className={styles.thumb}>
                          {src ? (
                            <Image
                              src={src}
                              alt={s.name}
                              fill
                              className={styles.thumbImage}
                              sizes="(max-width: 48em) 100vw, 25vw"
                            />
                          ) : (
                            <div className={styles.thumbFallback} aria-hidden />
                          )}
                          <div className={styles.thumbOverlay} aria-hidden />
                        </div>
                        <div className={styles.cardText}>
                          <h3 className={styles.season}>{s.name}</h3>
                          <p className={styles.detail}>{s.detail}</p>
                        </div>
                      </article>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
