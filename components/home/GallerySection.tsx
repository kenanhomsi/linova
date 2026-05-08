import { Container, Title, Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { FadeInUp } from "@/components/ui/Animate";

import styles from "./GallerySection.module.css";
import { GalleryStripClient } from "./GalleryStripClient";

const PATIENT_VIDEOS = [
  "/images/WhatsApp Video 2026-01-27 at 1.29.29 PM.mp4",
  // "/images/user-story2.mp4",
  "/images/video4.mp4",

  "/images/user-story3.mp4",
];

export async function GallerySection() {
  const t = await getTranslations("home");

  return (
    <Box id="gallery" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <FadeInUp>
          <Title order={2} className={styles.sectionTitle}>
            {t("gallery.sectionTitle")}
          </Title>
        </FadeInUp>
        <GalleryStripClient videos={PATIENT_VIDEOS} />
      </Container>
    </Box>
  );
}
