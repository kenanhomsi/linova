import Image from "next/image";
import {
  Container,
  Stack,
  Title,
  Text,
  Group,
  Button,
  Box,
  Badge,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { getLocale, getTranslations } from "next-intl/server";

import { ServiceCard } from "@/components/shared/ServiceCard";
import { TreatmentLongFormBody } from "@/components/treatments/TreatmentLongFormBody";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";
import { getTreatmentLongArticle } from "@/lib/treatmentData";
import { getTreatmentsByCategory } from "@/lib/treatments";

import styles from "./TreatmentDetailContent.module.css";

import type { Treatment } from "@/types";

interface Benefit {
  title: string;
  desc: string;
}

interface TreatmentDetailContentProps {
  treatment: Treatment;
}

export async function TreatmentDetailContent({
  treatment,
}: TreatmentDetailContentProps) {
  const t = await getTranslations("treatments");
  const locale = await getLocale();

  const title = t(`items.${treatment.slug}.title`);
  const shortDescription = t(`items.${treatment.slug}.shortDescription`);
  const categoryTitle = t(`categories.${treatment.category}.title`);
  const categoryDescription = t(`categories.${treatment.category}.description`);
  const benefits = t.raw("detail.benefits") as Benefit[];

  const related = getTreatmentsByCategory(treatment.category)
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);

  const longArticle = getTreatmentLongArticle(treatment.slug, locale);

  return (
    <div className={styles.pageRoot}>
      <Container size="xl" py="md" pb="xl" className={styles.container}>
        <div className={styles.backRow}>
          <Link href="/treatments" className={styles.backLink}>
            <IconArrowLeft size={18} stroke={2} aria-hidden />
            {t("detail.backToTreatments")}
          </Link>
        </div>

        <div className={styles.heroStack}>
          <Box className={styles.hero} aria-labelledby="treatment-detail-title">
            <div className={styles.heroShine} aria-hidden />
            {treatment.image ? (
              <Image
                src={treatment.image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1160px"
                className={styles.heroImage}
                {...(typeof treatment.image !== "string"
                  ? { placeholder: "blur" as const }
                  : {})}
              />
            ) : (
              <div className={styles.heroPlaceholder} aria-hidden />
            )}
            <div className={styles.heroTint} aria-hidden />
            <div className={styles.heroOverlay} aria-hidden />
            <div className={styles.heroContent}>
              <Badge
                variant="light"
                color="teal"
                size="lg"
                className={styles.heroBadge}
              >
                {categoryTitle}
              </Badge>
              <Title
                order={1}
                id="treatment-detail-title"
                className={styles.heroTitle}
              >
                {title}
              </Title>
              <div className={styles.heroRule} aria-hidden />
            </div>
          </Box>

          <div className={styles.introPanel}>
            <Stack className={styles.bodyStack}>
              <Text className={styles.lead}>{shortDescription}</Text>
              {categoryDescription ? (
                <Text className={styles.categoryDesc} component="p">
                  {categoryDescription}
                </Text>
              ) : null}

              <div className={styles.ctaBar}>
                <Group gap="md" className={styles.actions}>
                  <Link href="/contact" className={styles.actionLink}>
                    <Button
                      size="lg"
                      radius="xl"
                      fw={600}
                      leftSection={<IconCalendarEvent size={20} stroke={2} />}
                      className={styles.ctaPrimary}
                    >
                      {t("detail.bookConsultation")}
                    </Button>
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      radius="xl"
                      fw={600}
                      leftSection={<IconBrandWhatsapp size={20} />}
                      className={styles.ctaSecondary}
                    >
                      {t("detail.whatsapp")}
                    </Button>
                  </a>
                </Group>
                <Text className={styles.ctaHint} component="p">
                  {t("detail.ctaHint")}
                </Text>
              </div>
            </Stack>
          </div>
        </div>

        {longArticle ? (
          <section
            className={styles.articleSection}
            aria-labelledby="treatment-article-heading"
          >
            <header className={styles.articleSectionHeader}>
              <span className={styles.sectionEyebrow}>
                {t("detail.articleGuideEyebrow")}
              </span>
              <Title
                order={2}
                id="treatment-article-heading"
                className={styles.articleSectionTitle}
              >
                {t("detail.articleGuideTitle")}
              </Title>
            </header>
            <div className={styles.articleCard}>
              <TreatmentLongFormBody
                content={longArticle.content}
                contentImages={longArticle.contentImages}
                contextTitle={title}
              />
            </div>

            <Box className={styles.articleCtaBox}>
              <Title order={3} className={styles.articleCtaTitle}>
                Ready to Transform Your Smile?
              </Title>
              <Text size="md" className={styles.articleCtaText}>
                Book a free consultation with our expert team and start your
                journey today.
              </Text>
              <Link href="/contact" className={styles.articleCtaLink}>
                <Button
                  size="lg"
                  radius="md"
                  fw={700}
                  className={styles.articleCtaBtn}
                >
                  Get Free Consultation
                </Button>
              </Link>
            </Box>
          </section>
        ) : null}

        <section
          className={styles.sectionWhy}
          aria-labelledby="why-linova-heading"
        >
          <div className={styles.whyHeader}>
            <Text className={styles.whyEyebrow} component="p">
              {t("detail.whyLinovaEyebrow")}
            </Text>
            <Title
              order={2}
              id="why-linova-heading"
              className={styles.sectionTitle}
            >
              {t("detail.whyLinova")}
            </Title>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <article
                key={`${benefit.title}-${index}`}
                className={styles.benefitCard}
              >
                <span className={styles.benefitIndex} aria-hidden>
                  {index + 1}
                </span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section
            className={styles.relatedSection}
            aria-labelledby="related-treatments-heading"
          >
            <div className={styles.relatedHeader}>
              <Title
                order={2}
                id="related-treatments-heading"
                className={styles.relatedTitle}
              >
                {t("detail.relatedTreatments")}
              </Title>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <ServiceCard key={item.id} treatment={item} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  );
}
