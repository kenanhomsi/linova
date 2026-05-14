import Image from "next/image";
import { Container, Title, Text, Box, Badge } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/Animate";
import { istanbulImageSrc } from "@/lib/istanbul-experience-images";

import styles from "./AreasToStay.module.css";

interface Area {
  imageKey?: string;
  name: string;
  distance: string;
  vibe: string;
  bestFor?: string;
  price: string;
}

export async function AreasToStay() {
  const t = await getTranslations("istanbulExperience");
  const items = t.raw("areas.items") as Area[];

  return (
    <SectionReveal>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="areas-heading"
      >
        <Container size="xl">
          <div className={styles.layout}>
            <div className={styles.header}>
              <Text className={styles.eyebrow}>{t("hero.eyebrow")}</Text>
              <Title order={2} id="areas-heading" className={styles.title}>
                {t("areas.title")}
              </Title>
              <Text size="md" className={styles.subtitle}>
                {t("areas.subtitle")}
              </Text>
            </div>

            <StaggerContainer staggerChildren={0.06}>
              <div className={styles.grid}>
                {items.map((area) => {
                  const src = istanbulImageSrc(area.imageKey);
                  return (
                    <StaggerItem key={area.name}>
                      <article className={styles.card}>
                        <div className={styles.imageWrap}>
                          {src ? (
                            <Image
                              src={src}
                              alt={area.name}
                              fill
                              className={styles.image}
                              sizes="(max-width: 48em) 100vw, 50vw"
                            />
                          ) : (
                            <div className={styles.imageFallback} aria-hidden />
                          )}
                          <div className={styles.imageOverlay} aria-hidden />
                          <Badge
                            className={styles.priceBadge}
                            variant="filled"
                            radius="md"
                          >
                            {area.price}
                          </Badge>
                        </div>
                        <div className={styles.body}>
                          <div className={styles.topRow}>
                            <h3 className={styles.name}>
                              <IconMapPin
                                size={20}
                                className={styles.pinIcon}
                                aria-hidden
                              />
                              {area.name}
                            </h3>
                            <span className={styles.meta} dir="auto">
                              {area.distance}
                            </span>
                          </div>
                          {area.bestFor ? (
                            <Text className={styles.bestFor}>
                              {area.bestFor}
                            </Text>
                          ) : null}
                          <p className={styles.vibe}>{area.vibe}</p>
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
