import Link from "next/link";
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
      <Card padding="lg" className={styles.card}>
        <h3 className={styles.cardTitle}>{treatment.title}</h3>
        <Text size="sm" className={styles.cardDescription} lineClamp={3}>
          {treatment.shortDescription}
        </Text>
        <span className={styles.arrow} aria-hidden>
          Learn more <IconArrowRight size={14} stroke={2.5} />
        </span>
      </Card>
    </Link>
  );
}
