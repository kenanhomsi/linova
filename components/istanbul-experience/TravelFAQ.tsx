"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Title, Text, Box } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./TravelFAQ.module.css";

export function TravelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("istanbulExperience");
  const faq = t.raw("travelFaq") as {
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };

  return (
    <Box className={styles.root}>
      <Container size="xl">
        <Box className={styles.main}>
          <FadeInUp>
            <Box className={styles.header}>
              <Title order={2} className={styles.title}>
                {faq.title}
              </Title>
              <Text className={styles.subtitle}>{faq.subtitle}</Text>
            </Box>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <Box className={styles.accordion}>
              {faq.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <Box
                    key={index}
                    className={styles.item}
                    data-expanded={isOpen}
                  >
                    <button
                      type="button"
                      className={styles.trigger}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`travel-faq-answer-${index}`}
                      id={`travel-faq-question-${index}`}
                    >
                      <span className={styles.icon} aria-hidden>
                        <IconPlus size={20} stroke={2.5} />
                      </span>
                      <span className={styles.question}>{item.question}</span>
                    </button>
                    <Box
                      id={`travel-faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`travel-faq-question-${index}`}
                      hidden={!isOpen}
                    >
                      {item.answer ? (
                        <Box className={styles.content}>{item.answer}</Box>
                      ) : null}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </FadeInUp>
        </Box>
      </Container>
    </Box>
  );
}
