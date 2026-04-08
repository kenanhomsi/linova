import Image from "next/image";
import { Container, Title, Text, Box, Badge } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { istanbulImageSrc } from "@/lib/istanbul-experience-images";
import styles from "./AreasToStay.module.css";

type Area = {
  imageKey?: string;
  name: string;
  distance: string;
  vibe: string;
  price: string;
};

export async function AreasToStay() {
  const t = await getTranslations("istanbulExperience");
  const items = t.raw("areas.items") as Area[];

  return (
    <SectionReveal>
      <Box component="section" className={styles.section} aria-labelledby="areas-heading">
        <Container size="lg">
          <div className={styles.header}>
            <Title order={2} id="areas-heading" className={styles.title} ta="center">
              {t("areas.title")}
            </Title>
            <Text c="dimmed" ta="center" size="md" maw={560} mx="auto" className={styles.subtitle}>
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
                        <Badge className={styles.priceBadge} variant="filled" size="lg" radius="md">
                          {area.price}
                        </Badge>
                      </div>
                      <div className={styles.body}>
                        <h3 className={styles.name}>
                          <IconMapPin size={22} className={styles.pinIcon} aria-hidden />
                          {area.name}
                        </h3>
                        <div className={styles.meta} dir="auto">
                          {area.distance}
                        </div>
                        <p className={styles.vibe}>{area.vibe}</p>
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
