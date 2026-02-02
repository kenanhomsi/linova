"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Logo.module.css";

type LogoVariant = "default" | "light";

export function Logo({ variant = "default" }: { variant?: LogoVariant }) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={styles.link} aria-label="Linova Dental – Home">
      <motion.span
        className={styles.wrapper}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span className={`${styles.icon} ${isLight ? styles.iconLight : styles.iconDefault}`}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.iconSvg}
            aria-hidden
          >
            <path
              d="M12 2C10 2 8 4 8 6v2c0 2 1 3 2 4v6c0 1 1 2 2 2s2-1 2-2v-6c1-1 2-2 2-4V6c0-2-2-4-4-4z"
              fill="currentColor"
            />
            <path
              d="M10 10h4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className={styles.textWrap}>
          <span className={`${styles.primary} ${isLight ? styles.primaryLight : styles.primaryDefault}`}>
            Linova
          </span>
          <span className={`${styles.secondary} ${isLight ? styles.secondaryLight : styles.secondaryDefault}`}>
            Dental
          </span>
        </span>
      </motion.span>
    </Link>
  );
}
