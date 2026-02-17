import Link from "next/link";
import { Container, Title, Text, Stack, Group, Button, Box } from "@mantine/core";
import { IconMessageCircle, IconPhoneCall } from "@tabler/icons-react";
import { SectionReveal } from "@/components/ui/Animate";
import styles from "./WhyUsCTASection.module.css";

export function WhyUsCTASection() {
  return (
    <SectionReveal delay={0.03} amount={0.08}>
      <Box component="section" className={styles.section}>
        <Container size="md">
          <Stack gap="lg" align="center" ta="center">
            <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
              Start Your Journey
            </Text>
            <Title order={2} className={styles.title}>
              Ready to Transform Your Smile?
            </Title>
            <Text size="lg" className={styles.subtitle}>
              Join over 10,000 happy patients from 50+ countries who trusted Linova Clinic
              with their smile. Book your free consultation today and get a personalized
              treatment plan with transparent pricing.
            </Text>
            <Group gap="md" mt="sm">
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  radius="md"
                  className={styles.ctaPrimary}
                  leftSection={<IconMessageCircle size={20} />}
                >
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:+905551234567" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  radius="md"
                  variant="outline"
                  className={styles.ctaSecondary}
                  leftSection={<IconPhoneCall size={20} />}
                >
                  Call Us Now
                </Button>
              </a>
            </Group>
            <Text size="xs" className={styles.note}>
              Free consultation with no obligation. Response within 2 hours.
            </Text>
          </Stack>
        </Container>
      </Box>
    </SectionReveal>
  );
}
