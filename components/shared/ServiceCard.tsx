import Link from "next/link";
import Image from "next/image";
import { Card, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import type { Treatment } from "@/types";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  treatment: Treatment;
}

export function ServiceCard({ treatment }: ServiceCardProps) {
  return (
    <Link
      href={`/treatments#${treatment.slug}`}
      className={styles.link}
    >
      <Card padding={0} className={styles.card}>
        {treatment.image ? (
          <div className={styles.imageWrap}>
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 33vw"
              className={styles.image}
              placeholder="blur"
            />
            <div className={styles.imageOverlay} />
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <IconArrowRight size={20} className={styles.placeholderIcon} />
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>{treatment.title}</h3>
          <Text size="sm" className={styles.cardDescription} lineClamp={3}>
            {treatment.shortDescription}
          </Text>
          <span className={styles.arrow} aria-hidden>
            Learn more <IconArrowRight size={14} stroke={2.5} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
