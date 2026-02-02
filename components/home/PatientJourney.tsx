import { Container, Title, Text, Stack, Group, ThemeIcon } from "@mantine/core";
import styles from "./PatientJourney.module.css";

const STEPS = [
  {
    label: "Online Consultation",
    description: "Share your needs and get a personalized treatment plan from home.",
  },
  {
    label: "Book & Plan",
    description: "Confirm your appointment and we help with travel and accommodation.",
  },
  {
    label: "Arrival & Transfer",
    description: "VIP pickup from airport to clinic and hotel.",
  },
  {
    label: "Treatment",
    description: "Your dental care in our Istanbul clinic.",
  },
  {
    label: "Aftercare",
    description: "Follow-up support and guidance when you return home.",
  },
];

export function PatientJourney() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" ta="center">
          <Title id="journey-heading" order={2} className={styles.journeyTitle}>
            Your Patient Journey
          </Title>
          <Text maw={600} mx="auto" size="lg" className={styles.journeySubtitle}>
            From first contact to aftercare — we guide you every step.
          </Text>
        </Stack>
        <Stack gap="lg">
          {STEPS.map((step, i) => (
            <Group key={i} gap="md" wrap="nowrap" align="flex-start">
              <ThemeIcon size={48} radius="xl" variant="light" className={styles.stepIcon}>
                <Text size="lg" fw={700} c="teal.7">
                  {i + 1}
                </Text>
              </ThemeIcon>
              <Stack gap={4} className={styles.stepContent}>
                <Text fw={600} className={styles.stepLabel}>
                  {i + 1}. {step.label}
                </Text>
                <Text size="sm" className={styles.stepDesc}>
                  {step.description}
                </Text>
              </Stack>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
