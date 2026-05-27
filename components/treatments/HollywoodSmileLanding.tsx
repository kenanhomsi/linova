import Image from "next/image";
import {
  Badge,
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconCalendarEvent,
  IconCheck,
  IconShieldCheck,
  IconSparkles,
  IconStarsFilled,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { ServiceCard } from "@/components/shared/ServiceCard";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";
import { getTreatmentLongArticle } from "@/lib/treatmentData";
import { getTreatmentsByCategory } from "@/lib/treatments";

import { FaqAccordion } from "./FaqAccordion";
import styles from "./HollywoodSmileLanding.module.css";
import { TreatmentLongFormBody } from "./TreatmentLongFormBody";

import type { Treatment } from "@/types";

const HERO_STATS = [
  {
    value: "5-7 Days",
    label: "Typical stay for treatment and final fit",
    icon: IconSparkles,
  },
  {
    value: "50+ Countries",
    label: "International patients trust Linova",
    icon: IconWorld,
  },
  {
    value: "Up to 70%",
    label: "Potential savings vs UK and US clinics",
    icon: IconShieldCheck,
  },
  {
    value: "10K+",
    label: "Smiles supported by our team",
    icon: IconUsersGroup,
  },
] as const;

const TRANSFORMATION_CASES = [
  {
    title: "Natural contour and brighter shade",
    detail:
      "Designed to improve proportion, tooth visibility, and overall smile balance.",
    before: "/images/h-smily-befor-new.jpeg",
    after: "/images/h-smily-after-new.jpeg",
  },
  {
    title: "Full smile harmony",
    detail:
      "A more even smile line with better symmetry and a cleaner, brighter finish.",
    before: "/images/h-smily-befor-new-3.jpeg",
    after: "/images/h-smily-after-new-3.jpeg",
  },
] as const;

const INCLUDED_ITEMS = [
  {
    title: "Smile design planning",
    description:
      "We study facial proportions, lip line, gum display, and tooth shape before treatment starts.",
  },
  {
    title: "Material selection",
    description:
      "Your plan can include zirconia, E-max, porcelain veneers, or crowns depending on your goals and bite.",
  },
  {
    title: "Shade and symmetry refinement",
    description:
      "Color, alignment, and tooth length are adjusted together so the final smile looks balanced, not artificial.",
  },
  {
    title: "Bite and comfort review",
    description:
      "Function matters as much as aesthetics, so we verify fit, bite, speech, and day-to-day comfort.",
  },
] as const;

const BENEFITS = [
  "Brightens stained or dark teeth",
  "Improves tooth shape and edge design",
  "Closes small gaps and evens proportions",
  "Creates a cleaner, more confident smile line",
  "Supports a more youthful overall appearance",
  "Combines cosmetic planning with functional checks",
] as const;

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Online consultation",
    description:
      "Send photos or scans and describe the smile look you want. Our team replies with a preliminary plan and timing.",
  },
  {
    step: "02",
    title: "Digital smile planning",
    description:
      "At the clinic, we analyze your teeth, bite, and face to design a Hollywood Smile that suits you naturally.",
  },
  {
    step: "03",
    title: "Preparation and trial phase",
    description:
      "Your dentist prepares only what is clinically needed, then checks shape, size, and smile balance before finalizing.",
  },
  {
    step: "04",
    title: "Final fit and polish",
    description:
      "Your veneers or crowns are bonded, refined, and reviewed with aftercare instructions before you travel home.",
  },
] as const;

const LINOVA_REASONS = [
  "Experienced cosmetic dentists with international patient cases",
  "Digital planning for predictable smile design",
  "Transparent coordination before you fly",
  "VIP transfer and accommodation support available",
  "Multilingual team for smooth communication",
  "Aftercare guidance once you return home",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is included in a Hollywood Smile makeover?",
    answer:
      "It depends on your case, but the makeover usually combines smile design planning with veneers or crowns, whitening, shape correction, and bite refinement. Some patients also need gum contouring or restorative work before the final cosmetic phase.",
  },
  {
    question: "How long does Hollywood Smile treatment take in Istanbul?",
    answer:
      "Most straightforward cases are completed in about 5 to 7 days, although complex cases can need extra appointments or a second visit. The exact schedule depends on how many teeth are treated and which materials are selected.",
  },
  {
    question: "Will my new smile look natural?",
    answer:
      "That is the main goal. We focus on tooth proportions, facial harmony, shade selection, and smile line design so the result feels polished and attractive without looking oversized or overly white.",
  },
  {
    question: "Is Hollywood Smile only for perfect teeth?",
    answer:
      "No. Many patients choose it because of stains, worn edges, small gaps, uneven teeth, or older dental work. During consultation we confirm whether veneers, crowns, whitening, orthodontics, or another approach is best for your case.",
  },
  {
    question: "How do I know if I am a good candidate?",
    answer:
      "If you want a major aesthetic improvement and your gums, bite, and tooth structure can support cosmetic treatment, you may be a good candidate. The dentist confirms this after reviewing photos, scans, and your oral health condition.",
  },
] as const;

interface HollywoodSmileLandingProps {
  treatment: Treatment;
}

export async function HollywoodSmileLanding({
  treatment,
}: HollywoodSmileLandingProps) {
  const t = await getTranslations("treatments");
  const title = t(`items.${treatment.slug}.title`);
  const shortDescription = t(`items.${treatment.slug}.shortDescription`);

  const related = getTreatmentsByCategory(treatment.category)
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);

  const longArticle = getTreatmentLongArticle(treatment.slug);

  return (
    <div className={styles.pageRoot}>
      <Container size="xl" py="md" pb="xl" className={styles.container}>
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.heroMedia}>
            {treatment.image ? (
              <Image
                src={treatment.image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 62vw"
                className={styles.heroImage}
                {...(typeof treatment.image !== "string"
                  ? { placeholder: "blur" as const }
                  : {})}
              />
            ) : (
              <div className={styles.heroPlaceholder} aria-hidden />
            )}
            <div className={styles.heroOverlay} aria-hidden />
          </div>

          <div className={styles.heroCopy}>
            <Badge
              variant="light"
              color="teal"
              radius="xl"
              size="lg"
              className={styles.heroBadge}
            >
              Most requested cosmetic makeover
            </Badge>
            <Title order={1} id="hero-title" className={styles.heroTitle}>
              {title} in Istanbul, planned for natural-looking confidence
            </Title>
            <Text className={styles.heroLead}>{shortDescription}</Text>
            <Text className={styles.heroText}>
              This page is built as a conversion-focused service landing page
              for patients researching smile design, veneers, whitening, and
              complete aesthetic transformations before they contact the clinic.
            </Text>

            <Group gap="md" className={styles.heroActions}>
              <Link href="/contact" className={styles.actionLink}>
                <Button
                  size="lg"
                  radius="xl"
                  fw={700}
                  leftSection={<IconCalendarEvent size={20} stroke={2} />}
                  className={styles.primaryCta}
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
                  radius="xl"
                  variant="outline"
                  fw={700}
                  leftSection={<IconBrandWhatsapp size={20} />}
                  className={styles.secondaryCta}
                >
                  {t("detail.whatsapp")}
                </Button>
              </a>
            </Group>

            <div className={styles.proofStrip}>
              <span className={styles.proofPill}>
                <IconShieldCheck size={16} stroke={2} />
                Free consultation
              </span>
              <span className={styles.proofPill}>
                <IconStarsFilled size={16} stroke={2} />
                Multilingual support
              </span>
              <span className={styles.proofPill}>
                <IconSparkles size={16} stroke={2} />
                Personalized smile design
              </span>
            </div>
          </div>
        </section>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {HERO_STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label} className={styles.statCard}>
                <ThemeIcon
                  size={48}
                  radius="xl"
                  variant="light"
                  color="teal"
                  className={styles.statIcon}
                >
                  <Icon size={22} stroke={2} />
                </ThemeIcon>
                <Text className={styles.statValue}>{stat.value}</Text>
                <Text className={styles.statLabel}>{stat.label}</Text>
              </article>
            );
          })}
        </SimpleGrid>

        <section
          className={styles.sectionBlock}
          aria-labelledby="overview-title"
        >
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>
              Smile makeover overview
            </Text>
            <Title
              order={2}
              id="overview-title"
              className={styles.sectionTitle}
            >
              Built for patients comparing aesthetics, comfort, and trust
            </Title>
          </div>

          <div className={styles.overviewGrid}>
            <article className={styles.panelCard}>
              <h3 className={styles.panelTitle}>What patients usually want</h3>
              <p className={styles.panelText}>
                Most Hollywood Smile patients want teeth that look brighter,
                more even, and more elegant without looking fake. They often ask
                for a smile that photographs well, suits the face, and still
                feels believable in real life.
              </p>
              <div className={styles.bulletList}>
                {BENEFITS.map((item) => (
                  <div key={item} className={styles.bulletItem}>
                    <span className={styles.checkDot} aria-hidden>
                      <IconCheck size={14} stroke={3} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.panelCardAccent}>
              <span className={styles.miniLabel}>Why this page matters</span>
              <h3 className={styles.panelTitle}>
                A landing page, not only a template
              </h3>
              <p className={styles.panelText}>
                Instead of showing the same generic treatment layout for every
                service, this version positions Hollywood Smile as a dedicated
                entry page for advertising campaigns, search traffic, and
                high-intent visitors who are ready to compare clinics.
              </p>
              <div className={styles.quickFacts}>
                <div className={styles.quickFact}>
                  <span>Audience</span>
                  <strong>Ad traffic + organic visitors</strong>
                </div>
                <div className={styles.quickFact}>
                  <span>Main goal</span>
                  <strong>Generate consultation enquiries</strong>
                </div>
                <div className={styles.quickFact}>
                  <span>Message</span>
                  <strong>Natural luxury smile with clear planning</strong>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className={styles.sectionBlock}
          aria-labelledby="transformation-title"
        >
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>Real visual impact</Text>
            <Title
              order={2}
              id="transformation-title"
              className={styles.sectionTitle}
            >
              Before and after transformation examples
            </Title>
          </div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {TRANSFORMATION_CASES.map((item) => (
              <article key={item.title} className={styles.caseCard}>
                <div className={styles.caseMedia}>
                  <div className={styles.caseHalf}>
                    <Image
                      src={item.before}
                      alt={`Before ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.caseImage}
                    />
                    <span className={styles.caseBadge}>Before</span>
                  </div>
                  <div className={styles.caseHalf}>
                    <Image
                      src={item.after}
                      alt={`After ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.caseImage}
                    />
                    <span className={styles.caseBadgeAccent}>After</span>
                  </div>
                </div>
                <div className={styles.caseBody}>
                  <h3 className={styles.caseTitle}>{item.title}</h3>
                  <p className={styles.caseText}>{item.detail}</p>
                </div>
              </article>
            ))}
          </SimpleGrid>
        </section>

        <section
          className={styles.sectionBlock}
          aria-labelledby="included-title"
        >
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>Treatment scope</Text>
            <Title
              order={2}
              id="included-title"
              className={styles.sectionTitle}
            >
              What can be included in a Hollywood Smile plan
            </Title>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {INCLUDED_ITEMS.map((item) => (
              <article key={item.title} className={styles.featureCard}>
                <ThemeIcon
                  size={42}
                  radius="xl"
                  variant="light"
                  color="teal"
                  className={styles.featureIcon}
                >
                  <IconSparkles size={20} stroke={2} />
                </ThemeIcon>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureText}>{item.description}</p>
              </article>
            ))}
          </SimpleGrid>
        </section>

        <section
          className={styles.sectionBlock}
          aria-labelledby="journey-title"
        >
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>Patient journey</Text>
            <Title order={2} id="journey-title" className={styles.sectionTitle}>
              The typical Hollywood Smile process
            </Title>
          </div>

          <div className={styles.timelineGrid}>
            {JOURNEY_STEPS.map((item) => (
              <article key={item.step} className={styles.timelineCard}>
                <span className={styles.timelineStep}>{item.step}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock} aria-labelledby="fit-title">
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>Who this is for</Text>
            <Title order={2} id="fit-title" className={styles.sectionTitle}>
              Good fit for aesthetic-focused patients who still care about
              function
            </Title>
          </div>

          <div className={styles.overviewGrid}>
            <article className={styles.panelCard}>
              <h3 className={styles.panelTitle}>
                You may be a strong candidate if you want to
              </h3>
              <div className={styles.bulletList}>
                <div className={styles.bulletItem}>
                  <span className={styles.checkDot} aria-hidden>
                    <IconCheck size={14} stroke={3} />
                  </span>
                  <span>
                    upgrade the overall look of your smile, not just one tooth
                  </span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.checkDot} aria-hidden>
                    <IconCheck size={14} stroke={3} />
                  </span>
                  <span>
                    fix stains, uneven edges, small gaps, or worn front teeth
                  </span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.checkDot} aria-hidden>
                    <IconCheck size={14} stroke={3} />
                  </span>
                  <span>
                    see a polished result in a short, planned treatment trip
                  </span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.checkDot} aria-hidden>
                    <IconCheck size={14} stroke={3} />
                  </span>
                  <span>
                    combine cosmetic goals with digital planning and travel
                    support
                  </span>
                </div>
              </div>
            </article>

            <article className={styles.panelCard}>
              <h3 className={styles.panelTitle}>Why patients choose Linova</h3>
              <div className={styles.bulletList}>
                {LINOVA_REASONS.map((item) => (
                  <div key={item} className={styles.bulletItem}>
                    <span className={styles.checkDot} aria-hidden>
                      <IconCheck size={14} stroke={3} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {longArticle ? (
          <section
            className={styles.articleSection}
            aria-labelledby="article-section-title"
          >
            <div className={styles.sectionHeader}>
              <Text className={styles.sectionEyebrow}>
                {t("detail.articleGuideEyebrow")}
              </Text>
              <Title
                order={2}
                id="article-section-title"
                className={styles.sectionTitle}
              >
                {t("detail.articleGuideTitle")}
              </Title>
            </div>
            <div className={styles.articleCard}>
              <TreatmentLongFormBody
                content={longArticle.content}
                contentImages={longArticle.contentImages}
                contextTitle={title}
              />
            </div>
          </section>
        ) : null}

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={styles.sectionHeader}>
            <Text className={styles.sectionEyebrow}>
              Questions patients ask first
            </Text>
            <Title order={2} id="faq-title" className={styles.sectionTitle}>
              Hollywood Smile FAQ
            </Title>
          </div>
          <FaqAccordion items={FAQ_ITEMS} className={styles.accordion} />
        </section>

        {related.length > 0 ? (
          <section
            className={styles.relatedSection}
            aria-labelledby="related-title"
          >
            <div className={styles.sectionHeader}>
              <Text className={styles.sectionEyebrow}>Continue exploring</Text>
              <Title
                order={2}
                id="related-title"
                className={styles.sectionTitle}
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

        <section className={styles.finalCta} aria-labelledby="cta-title">
          <div className={styles.finalCtaContent}>
            <Text className={styles.finalEyebrow}>
              Ready to turn traffic into enquiries?
            </Text>
            <Title order={2} id="cta-title" className={styles.finalTitle}>
              This Hollywood Smile page is now structured like a proper service
              landing page
            </Title>
            <Text className={styles.finalText}>
              It gives ad visitors and organic users a clearer path from first
              impression to consultation request, while keeping your existing
              treatment article content for depth and SEO value.
            </Text>
          </div>

          <Group gap="md" className={styles.heroActions}>
            <Link href="/contact" className={styles.actionLink}>
              <Button
                size="lg"
                radius="xl"
                fw={700}
                leftSection={<IconCalendarEvent size={20} stroke={2} />}
                className={styles.primaryCta}
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
                radius="xl"
                variant="outline"
                fw={700}
                leftSection={<IconBrandWhatsapp size={20} />}
                className={styles.secondaryCta}
              >
                {t("detail.whatsapp")}
              </Button>
            </a>
          </Group>
        </section>
      </Container>
    </div>
  );
}
