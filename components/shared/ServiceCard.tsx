import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Card, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import type { Treatment } from "@/types";
import styles from "./ServiceCard.module.css";

const TREATMENT_BLOG_MAP: Record<string, string> = {
  "hollywood-smile": "hollywood-smile-complete-guide-2026",
  "dental-veneers": "porcelain-veneers-vs-composite-veneers",
  "teeth-whitening": "teeth-whitening-professional-vs-at-home",
  "dental-implants": "dental-implants-vs-bridges-which-is-right",
  "all-on-4-6": "all-on-4-dental-implants-everything-you-need-to-know",
  "crowns-bridges": "complete-guide-dental-crowns-bridges",
  "digital-smile-design": "digital-smile-design-technology-explained",
  "laser-dentistry": "3d-cbct-imaging-modern-dentistry",
  "xray-cbct": "3d-cbct-imaging-modern-dentistry",
  "full-mouth-restoration": "dental-implants-vs-bridges-which-is-right",
};

interface ServiceCardProps {
  treatment: Treatment;
}

export function ServiceCard({ treatment }: ServiceCardProps) {
  const blogSlug = TREATMENT_BLOG_MAP[treatment.slug] || "hollywood-smile-complete-guide-2026";

  return (
    <Link
      href={`/blogs/${blogSlug}`}
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
