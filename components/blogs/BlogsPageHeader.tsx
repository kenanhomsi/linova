import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Container, Stack, Title, Text, Box } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import heroImage from "@/public/images/hero-patient.jpg";
import styles from "./BlogsPageHeader.module.css";

export async function BlogsPageHeader() {
  const t = await getTranslations("blogs");

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
      <div className={styles.heroOverlay} />
      <Container size="xl" className={styles.heroContent}>
        <FadeInUp>
          <Stack gap="md" className={styles.wrapper}>
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              {t("pageHeader.eyebrow")}
            </Text>
            <Title order={1} className={styles.title}>
              {t("pageHeader.title")}{" "}
              <span className={styles.titleHighlight}>
                {t("pageHeader.titleHighlight")}
              </span>
            </Title>
            <Text size="lg" lh={1.7} className={styles.subtitle}>
              {t("pageHeader.subtitle")}
            </Text>
          </Stack>
        </FadeInUp>
      </Container>
    </Box>
  );
}
