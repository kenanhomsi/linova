import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Card, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import type { Treatment } from "@/types";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  treatment: Treatment;
}

export async function ServiceCard({ treatment }: ServiceCardProps) {
  const tTreatments = await getTranslations("treatments");
  const tCommon = await getTranslations("common");
  const title = tTreatments(`items.${treatment.slug}.title`);
  const shortDescription = tTreatments(`items.${treatment.slug}.shortDescription`);

  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className={styles.link}
    >
      <Card padding={0} className={styles.card}>
        {treatment.image ? (
          <div className={styles.imageWrap}>
            <Image
              src={treatment.image}
              alt={title}
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 33vw"
              className={styles.image}
              {...(typeof treatment.image !== "string" ? { placeholder: "blur" as const } : {})}
            />
            <div className={styles.imageOverlay} />
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <IconArrowRight size={20} className={styles.placeholderIcon} />
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <Text size="sm" className={styles.cardDescription} lineClamp={3}>
            {shortDescription}
          </Text>
          <span className={styles.arrow} aria-hidden>
            {tCommon("learnMore")} <IconArrowRight size={14} stroke={2.5} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
