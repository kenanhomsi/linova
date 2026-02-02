"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Card,
  Box,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconStar,
  IconMoodSmile,
  IconHeart,
  IconBolt,
  IconDeviceDesktop,
  IconSettings,
} from "@tabler/icons-react";
import { COMPLETE_DENTAL_SOLUTIONS_CARDS } from "@/lib/home-data";
import { HERO_IMAGE } from "@/lib/constants";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./CompleteDentalSolutionsSection.module.css";

type CategoryIcon = "star" | "tooth" | "bolt" | "device" | "settings";

function CategoryIcon({ type }: { type: CategoryIcon }) {
  const size = 14;
  switch (type) {
    case "star":
      return <IconStar size={size} />;
    case "tooth":
      return <IconMoodSmile size={size} />;
    case "bolt":
      return <IconBolt size={size} />;
    case "device":
      return <IconDeviceDesktop size={size} />;
    case "settings":
      return <IconSettings size={size} />;
    default:
      return <IconMoodSmile size={size} />;
  }
}

function CategoryIconSmall({ type }: { type: CategoryIcon }) {
  const size = 18;
  switch (type) {
    case "star":
      return <IconStar size={size} />;
    case "tooth":
      return <IconMoodSmile size={size} />;
    case "bolt":
      return <IconBolt size={size} />;
    case "device":
      return <IconDeviceDesktop size={18} />;
    case "settings":
      return <IconSettings size={18} />;
    default:
      return <IconMoodSmile size={18} />;
  }
}

/** Center overlay icon for hover – heart for restorative (tooth), star for cosmetic, etc. */
function HoverOverlayIcon({ type }: { type: CategoryIcon }) {
  const size = 28;
  switch (type) {
    case "star":
      return <IconStar size={size} />;
    case "tooth":
      return <IconHeart size={size} />;
    case "bolt":
      return <IconBolt size={size} />;
    case "device":
      return <IconDeviceDesktop size={size} />;
    case "settings":
      return <IconSettings size={size} />;
    default:
      return <IconHeart size={size} />;
  }
}

interface CompleteDentalSolutionsSectionProps {
  /** When false, section renders with no entrance or hover animations. */
  animated?: boolean;
}

type CardMeta = (typeof COMPLETE_DENTAL_SOLUTIONS_CARDS)[number];
type CardText = { category: string; title: string; description: string; cta: string; badge?: string };

export function CompleteDentalSolutionsSection({
  animated = true,
}: CompleteDentalSolutionsSectionProps) {
  const t = useTranslations("home");
  const cardsText = t.raw("completeDentalSolutionsCards") as CardText[];
  const cards = COMPLETE_DENTAL_SOLUTIONS_CARDS.map((meta, i) => ({
    ...meta,
    ...(cardsText[i] ?? {}),
  })) as Array<CardMeta & CardText>;

  const featured = cards.filter((c) => c.featured);
  const rest = cards.filter((c) => !c.featured);

  const placeholderImage = HERO_IMAGE;

  const header = (
    <Stack gap="xs" ta="center" maw={700} mx="auto">
      <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
        {t("expertise.eyebrow")}
      </Text>
      <Title order={2} size="2rem" fw={700} className={styles.title}>
        {t("expertise.title")}
      </Title>
      <Text size="lg" lh={1.6} className={styles.subtitle}>
        {t("expertise.subtitle")}
      </Text>
    </Stack>
  );

  const cardContent = (
    card: (typeof cards)[number],
    isFeatured: boolean,
    index: number
  ) => (
    <>
      <Box
        pos="relative"
        h={isFeatured ? 280 : 200}
        className={isFeatured ? styles.imageBox : styles.imageBoxSmall}
      >
        <Image
          src={card.image || placeholderImage}
          alt={card.title}
          fill
          className={styles.heroImage}
          sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        {isFeatured && "badge" in card && card.badge ? (
          <Box pos="absolute" top={12} left={12} px="sm" py={4} className={styles.badge}>
            {card.badge}
          </Box>
        ) : (
          <Box pos="absolute" top={12} left={12} className={styles.badgeCircle}>
            <CategoryIconSmall type={card.categoryIcon} />
          </Box>
        )}
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
          className={styles.hoverIconOverlay}
          aria-hidden
        >
          <Box className={styles.hoverIconCircle}>
            <HoverOverlayIcon type={card.categoryIcon} />
          </Box>
        </Box>
      </Box>
      <Stack gap="sm" p={isFeatured ? "lg" : "md"} className={styles.cardBody}>
        <Group gap="xs">
          <Box className={styles.categoryIcon}>
            <CategoryIcon type={card.categoryIcon} />
          </Box>
          <Text size="xs" fw={700} tt="uppercase" className={styles.categoryLabel}>
            {card.category.toUpperCase()}
          </Text>
        </Group>
        <Title
          order={isFeatured ? 3 : 4}
          size={isFeatured ? "h4" : "h5"}
          fw={700}
          className={styles.cardTitle}
        >
          {card.title}
        </Title>
        <Text
          size="sm"
          lh={1.6}
          className={styles.cardDesc}
          lineClamp={isFeatured ? undefined : 2}
        >
          {card.description}
        </Text>
        <Link
          href={isFeatured ? "/contact" : "/treatments"}
          className={styles.link}
        >
          {card.cta} →
        </Link>
      </Stack>
    </>
  );

  const featuredGrid = (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
      {featured.map((card, i) => (
        <Card
          key={card.title}
          shadow="md"
          padding={0}
          radius="md"
          className={`card-hover ${styles.card}`}
        >
          {cardContent(card, true, i)}
        </Card>
      ))}
    </SimpleGrid>
  );

  const restGrid = (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="lg">
      {rest.map((card, i) => (
        <Card
          key={card.title}
          shadow="sm"
          padding={0}
          radius="md"
          className={`card-hover ${styles.card}`}
        >
          {cardContent(card, false, i)}
        </Card>
      ))}
    </SimpleGrid>
  );

  if (!animated) {
    return (
      <Box id="services" className={`section-spacing ${styles.root}`}>
        <Container size="xl">
          <Stack gap="xl">
            {header}
            {featuredGrid}
            {restGrid}
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box id="services" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>{header}</FadeInUp>

          <StaggerContainer staggerChildren={0.1}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              {featured.map((card, i) => (
                <StaggerItem key={card.title}>
                  <motion.div
                    style={{ height: "100%" }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card
                      shadow="md"
                      padding={0}
                      radius="md"
                      className={`card-hover ${styles.card}`}
                    >
                      {cardContent(card, true, i)}
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="lg">
              {rest.map((card, i) => (
                <StaggerItem key={card.title}>
                  <motion.div
                    style={{ height: "100%" }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card
                      shadow="sm"
                      padding={0}
                      radius="md"
                      className={`card-hover ${styles.card}`}
                    >
                      {cardContent(card, false, i)}
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>
        </Stack>
      </Container>
    </Box>
  );
}
