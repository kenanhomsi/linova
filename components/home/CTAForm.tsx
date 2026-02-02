import { Container, Title, Text, Stack, Button } from "@mantine/core";
import { ContactForm } from "@/components/shared/ContactForm";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTAForm() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" ta="center">
          <Title order={2} c="teal.8">
            Get a Free Consultation
          </Title>
          <Text maw={500} mx="auto" c="dimmed" size="lg">
            Tell us what you need. We&apos;ll send you a personalized treatment plan.
          </Text>
        </Stack>
        <ContactForm />
        <Text size="sm" ta="center" c="dimmed">
          Or reach us directly on{" "}
          <Button
            component="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            color="teal"
            size="compact-sm"
          >
            WhatsApp
          </Button>
        </Text>
      </Stack>
    </Container>
  );
}
