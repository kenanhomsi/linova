import { getTranslations } from "next-intl/server";
import { Container, Title, Box } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./GallerySection.module.css";

const PATIENT_VIDEOS = [
  "/images/video2.mp4",
  "/images/WhatsApp Video 2026-01-27 at 1.29.29 PM.mp4",
  "/images/WhatsApp Video 2026-02-03 at 12.50.04 AM.mp4",
  "/images/WhatsApp Video 2026-02-03 at 12.51.02 AM.mp4",
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
        <Box className={styles.stripWrapper}>
          <ul className={styles.imageStrip} role="list">
            {PATIENT_VIDEOS.map((src, i) => (
              <li key={i} className={styles.stripItem}>
                <Box className={styles.videoWrapper}>
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.stripVideo}
                  />
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Box>
  );
}
