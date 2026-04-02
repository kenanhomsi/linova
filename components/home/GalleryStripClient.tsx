"use client";

import { Box } from "@mantine/core";
import { LazyVideo } from "@/components/media/LazyVideo";
import styles from "./GallerySection.module.css";

export function GalleryStripClient({ videos }: { videos: string[] }) {
  return (
    <Box className={styles.stripWrapper}>
      <ul className={styles.imageStrip} role="list">
        {videos.map((src, i) => (
          <li key={`${src}-${i}`} className={styles.stripItem}>
            <Box className={styles.videoWrapper}>
              <LazyVideo
                src={src}
                autoPlay
                loop
                muted
                playsInline
                initialPreload="none"
                loadedPreload="metadata"
                rootMargin="600px 0px"
                className={styles.stripVideo}
                aria-label="Patient story video"
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
}

