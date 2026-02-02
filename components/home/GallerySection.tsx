"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container, Title, Box } from "@mantine/core";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./GallerySection.module.css";

const PATIENT_IMAGES = [
  "/images/WhatsApp Image 2026-01-27 at 12.47.05 PM.jpeg",
  "/images/WhatsApp Image 2026-01-27 at 12.47.06 PM.jpeg",
  "/images/WhatsApp Image 2026-01-27 at 12.47.08 PM.jpeg",
];

export function GallerySection() {
  const t = useTranslations("home");

  return (
    <Box id="gallery" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <FadeInUp>
          <Title order={2} className={styles.sectionTitle}>
            <span className={styles.titleLine} aria-hidden />
            {t("gallery.sectionTitle")}
          </Title>
        </FadeInUp>
        <Box className={styles.stripWrapper}>
          <ul className={styles.imageStrip} role="list">
            {PATIENT_IMAGES.map((src, i) => (
              <li key={i} className={styles.stripItem}>
                <Box className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`Patient story ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 16.66vw"
                    className={styles.stripImage}
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
