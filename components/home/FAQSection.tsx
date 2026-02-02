"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Title, Text, Box } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./FAQSection.module.css";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("home");
  const faq = t.raw("faq") as { title: string; subtitle: string; items: Array<{ question: string; answer: string }> };

  return (
    <Box id="faq" className={styles.root}>
      <Container size="xl">
        <Box className={styles.main}>
          <FadeInUp>
            <Box className={styles.header}>
              <Title order={2} className={styles.title}>
                {faq.title}
              </Title>
              <Box className={styles.underline}>
                <span className={styles.underlineThick} />
                <span className={styles.underlineThin} />
              </Box>
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
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className={styles.icon} aria-hidden>
                        <IconPlus size={20} stroke={2.5} />
                      </span>
                      <span className={styles.question}>{item.question}</span>
                    </button>
                    <Box
                      className={styles.panel}
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      hidden={!isOpen}
                    >
                      {item.answer && (
                        <Box className={styles.content}>
                          {item.answer}
                        </Box>
                      )}
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
