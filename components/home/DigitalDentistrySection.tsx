import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container, Title, Text, Stack, SimpleGrid, Card, Button, Box } from "@mantine/core";
import { IconScan, IconPrinter, IconStar } from "@tabler/icons-react";
import { DIGITAL_DENTISTRY } from "@/lib/home-data";
import { FadeInUp, StaggerContainer } from "@/components/ui/Animate";
import styles from "./DigitalDentistrySection.module.css";
import digitalSmileDesign from "@/public/Digital Smile Design.jpg";
import Image from "next/image";

export async function DigitalDentistrySection() {
  const t = await getTranslations("home");
  const digital = t.raw("digitalDentistry") as typeof DIGITAL_DENTISTRY;
  const techWithImages = DIGITAL_DENTISTRY.tech.map((meta, i) => ({
    ...meta,
    ...(digital.tech[i] ?? {}),
  }));

  return (
    <Box id="technology" className={`section-spacing   ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>
            <Box className={styles.header}>
              <Title order={2} className={styles.title}>
                <Box component="span" className={styles.titleLine}>Advanced</Box>
                <Box component="span" className={styles.titleLine}>Digital</Box>
                <Box component="span" className={styles.titleLine}>Dentistry</Box>
              </Title>
              <Text size="lg" lh={1.7} className={styles.intro}>
                {t("digitalDentistry.intro")}
              </Text>
            </Box>
          </FadeInUp>

          <StaggerContainer staggerChildren={0.08}>
            <Box className={styles.main}>
              <Card radius="xl" className={styles.highlightCard} withBorder>
                <span className={styles.latestBadge}>
                  <IconStar size={12} stroke={2} className={styles.badgeStar} />
                  Latest Technology
                </span>
                <Box className={styles.highlightImageBox}>
                  <Image
                    src={digitalSmileDesign.src ?? digitalSmileDesign}
                    alt="Digital Smile Design"
                    width={500}
                    height={280}
                    className={styles.highlightImg}
                  />
                </Box>
                <Title order={3} className={styles.highlightTitle}>
                  {t("digitalDentistry.highlight.title")}
                </Title>
                <Text className={styles.highlightDesc}>
                  {t("digitalDentistry.highlight.description")}
                </Text>
                <Link href="/treatments" className={styles.link}>
                  <Button
                    fullWidth
                    size="md"
                    radius="xl"
                    className={styles.highlightButton}
                  >
                    {t("digitalDentistry.highlight.cta")}
                  </Button>
                </Link>
              </Card>

              <Box className={styles.rightCol}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" className={styles.grid2x2}>
                  {techWithImages.map((item) => (
                    <Card key={item.title} padding={0} radius="xl" className={styles.techCard} withBorder>
                      <span className={styles.techBadge}>
                        <IconStar size={12} stroke={2} className={styles.techBadgeStar} />
                        {item.badge}
                      </span>
                      <Box pos="relative" className={styles.techImageBox}>
                        <Image src={item.image} alt={item.title} fill className={styles.techImg} sizes="(max-width: 900px) 100vw, 50vw" />
                      </Box>
                      <Stack gap="xs" className={styles.techContent}>
                        <Title order={4} className={styles.techTitle}>{item.title}</Title>
                        <Text size="sm" lh={1.6} className={styles.techDesc}>{item.description}</Text>
                        <Link href="/treatments" className={styles.link}>
                          <Button fullWidth size="md" radius="xl" className={styles.techButton}>
                            {item.cta}
                          </Button>
                        </Link>
                      </Stack>
                    </Card>
                  ))}
                  {digital.bullets.map((item: { title: string; description: string }, i: number) => (
                    <Card key={item.title} padding="lg" radius="lg" className={styles.bulletCard} withBorder>
                      <Box className={styles.bulletIcon}>
                        {i === 0 ? <IconScan size={22} /> : <IconPrinter size={22} />}
                      </Box>
                      <Title order={4} className={styles.bulletTitle}>{item.title}</Title>
                      <Text size="sm" lh={1.6} className={styles.bulletDesc}>{item.description}</Text>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </StaggerContainer>
        </Stack>
      </Container>
    </Box>
  );
}
