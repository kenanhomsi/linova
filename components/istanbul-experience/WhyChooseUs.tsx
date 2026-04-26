"use client";

import { useTranslations } from "next-intl";
import { Container, Title, Text, Box } from "@mantine/core";
import {
  IconCertificate,
  IconLanguage,
  IconClock,
  IconHeartHandshake,
  IconSailboat,
  IconBuildingArch,
  IconBuildingStore,
  IconDroplet,
} from "@tabler/icons-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./WhyChooseUs.module.css";

type CardData = {
  title: string;
  items: string[];
};

const CARD_ICONS: Record<string, React.ElementType[]> = {
  expertise: [IconCertificate, IconLanguage, IconClock, IconHeartHandshake],
  istanbul: [IconSailboat, IconBuildingArch, IconBuildingStore, IconDroplet],
};

const CARD_MAIN_ICONS: Record<string, React.ElementType> = {
  expertise: IconCertificate,
  istanbul: IconSailboat,
};

export function WhyChooseUs() {
  const t = useTranslations("istanbulExperience");
  const data = t.raw("whyChoose") as {
    title: string;
    subtitle: string;
    cards: Record<string, CardData>;
  };

  const cardKeys = Object.keys(data.cards);

  return (
    <Box
      component="section"
      className={styles.section}
      aria-labelledby="why-choose-heading"
    >
      <Container size="lg">
        <FadeInUp>
          <div className={styles.header}>
            <Title
              order={2}
              id="why-choose-heading"
              className={styles.title}
            >
              {data.title}
            </Title>
            <Text className={styles.subtitle}>{data.subtitle}</Text>
          </div>
        </FadeInUp>

        <StaggerContainer staggerChildren={0.1}>
          <div className={styles.grid}>
            {cardKeys.map((key) => {
              const card = data.cards[key];
              const icons = CARD_ICONS[key] || [];
              const MainIcon = CARD_MAIN_ICONS[key] || IconCertificate;

              return (
                <StaggerItem key={key}>
                  <div className={styles.card}>
                    <div className={styles.cardInner}>
                      <div className={styles.iconWrap}>
                        <MainIcon size={24} stroke={1.8} />
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <ul className={styles.list}>
                          {card.items.map((item, i) => {
                            const ItemIcon = icons[i] || IconCertificate;
                            return (
                              <li key={i} className={styles.listItem}>
                                <span className={styles.listIcon}>
                                  <ItemIcon size={16} stroke={2} />
                                </span>
                                <span>{item}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
