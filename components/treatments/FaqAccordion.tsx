"use client";

import { Accordion } from "@mantine/core";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion variant="separated" radius="lg" className={className}>
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Control>{item.question}</Accordion.Control>
          <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
