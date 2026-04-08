import { Container, Title, Text, Box } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./TourismTestimonials.module.css";

type Item = { quote: string; name: string; country: string; highlight: string };

function initialFromName(name: string): string {
  const t = name.trim();
  if (!t) return "?";
  return t.charAt(0).toUpperCase();
}

export async function TourismTestimonials() {
  const t = await getTranslations("istanbulExperience");
  const block = t.raw("tourismTestimonials") as {
    title: string;
    subtitle: string;
    items: Item[];
  };

  return (
    <SectionReveal delay={0.05}>
      <Box component="section" className={styles.section} aria-labelledby="tourism-testimonials-heading">
        <Container size="lg">
          <div className={styles.header}>
            <Title order={2} id="tourism-testimonials-heading" className={styles.title} ta="center">
              {block.title}
            </Title>
            <Text c="dimmed" ta="center" size="md" maw={520} mx="auto">
              {block.subtitle}
            </Text>
          </div>
          <StaggerContainer staggerChildren={0.08}>
            <div className={styles.grid}>
              {block.items.map((item) => (
                <StaggerItem key={item.name}>
                  <blockquote className={styles.card}>
                    <div className={styles.inner}>
                      <span className={styles.avatar} aria-hidden>
                        {initialFromName(item.name)}
                      </span>
                      <div className={styles.body}>
                        <IconQuote size={22} className={styles.quoteIcon} aria-hidden />
                        <p className={styles.quote}>{item.quote}</p>
                        <footer className={styles.footer}>
                          <div className={styles.name}>{item.name}</div>
                          <div className={styles.country}>{item.country}</div>
                          <span className={styles.badge}>{item.highlight}</span>
                        </footer>
                      </div>
                    </div>
                  </blockquote>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </Box>
    </SectionReveal>
  );
}
