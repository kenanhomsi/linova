import Image from "next/image";
import { Container, Title, Text, Box, Group } from "@mantine/core";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { istanbulImageSrc } from "@/lib/istanbul-experience-images";
import styles from "./ThingsToDo.module.css";

type Activity = {
  imageKey?: string;
  title: string;
  time: string;
  distance: string;
  description: string;
};

export async function ThingsToDo() {
  const t = await getTranslations("istanbulExperience");
  const items = t.raw("activities.items") as Activity[];

  return (
    <SectionReveal delay={0.03}>
      <Box component="section" className={styles.section} aria-labelledby="activities-heading">
        <Container size="lg">
          <div className={styles.header}>
            <Title order={2} id="activities-heading" className={styles.title} ta="center">
              {t("activities.title")}
            </Title>
            <Text c="dimmed" ta="center" size="md" maw={560} mx="auto" className={styles.subtitle}>
              {t("activities.subtitle")}
            </Text>
          </div>
          <StaggerContainer staggerChildren={0.05}>
            <div className={styles.grid}>
              {items.map((item) => {
                const src = istanbulImageSrc(item.imageKey);
                return (
                  <StaggerItem key={item.title}>
                    <article className={styles.card}>
                      <div className={styles.imageWrap}>
                        {src ? (
                          <Image
                            src={src}
                            alt={item.title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 36em) 100vw, (max-width: 62em) 50vw, 33vw"
                          />
                        ) : (
                          <div className={styles.imageFallback} aria-hidden />
                        )}
                        <div className={styles.imageOverlay} aria-hidden />
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <Group gap="xs" className={styles.meta} wrap="wrap">
                          <span className={styles.metaItem} dir="auto">
                            <IconClock size={16} stroke={2} aria-hidden />
                            <span>{item.time}</span>
                          </span>
                          <span className={styles.metaDot} aria-hidden>
                            ·
                          </span>
                          <span className={styles.metaItem} dir="auto">
                            <IconMapPin size={16} stroke={2} aria-hidden />
                            <span>{item.distance}</span>
                          </span>
                        </Group>
                        <p className={styles.desc}>{item.description}</p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </Container>
      </Box>
    </SectionReveal>
  );
}
