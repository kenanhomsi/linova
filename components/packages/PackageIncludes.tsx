import { Container, Title, Text, Box } from "@mantine/core";
import {
  IconClipboardList,
  IconShieldCheck,
  IconLanguage,
  IconDental,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/Animate";

import styles from "./PackageIncludes.module.css";

const ICONS = [IconClipboardList, IconShieldCheck, IconLanguage, IconDental];

interface Item {
  title: string;
  description: string;
}

export async function PackageIncludes() {
  const t = await getTranslations("packages");
  const items = t.raw("includes.items") as Item[];

  return (
    <SectionReveal delay={0.05}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="includes-heading"
      >
        <Container size="xl">
          <div className={styles.layout}>
            <div className={styles.header}>
              <Text className={styles.eyebrow}>{t("hero.eyebrow")}</Text>
              <Title order={2} id="includes-heading" className={styles.title}>
                {t("includes.title")}
              </Title>
              <Text className={styles.subtitle}>{t("includes.subtitle")}</Text>
            </div>

            <StaggerContainer staggerChildren={0.06}>
              <div className={styles.grid}>
                {items.map((item, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <StaggerItem key={item.title}>
                      <div className={styles.item}>
                        <div className={styles.itemHeader}>
                          <div className={styles.iconWrap}>
                            <Icon size={26} stroke={1.75} />
                          </div>
                          <span className={styles.itemNumber}>0{i + 1}</span>
                        </div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDesc}>{item.description}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Box>
    </SectionReveal>
  );
}
