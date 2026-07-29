import {
  Box,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { Link } from "@/i18n/navigation";

interface SeoContentSectionProps {
  locale: string;
}

const linkStyle = {
  color: "#0b5fff",
  fontWeight: 600,
  textDecoration: "none",
};

const pillars = [
  {
    title: "Dental Implants in Turkey",
    description:
      "Linova Clinic offers single implants, full-mouth rehabilitation, and All-on-4 or All-on-6 solutions with digital planning and multilingual support for international patients.",
  },
  {
    title: "Veneers and Hollywood Smile",
    description:
      "Patients choose our Istanbul clinic for natural-looking veneers, smile makeovers, and cosmetic dentistry designed around facial harmony, comfort, and long-term durability.",
  },
  {
    title: "Dental Tourism Made Simple",
    description:
      "From online consultation to VIP transfer, hotel coordination, and aftercare guidance, our team makes a dental trip to Turkey easier and more predictable.",
  },
];

export function SeoContentSection({ locale }: SeoContentSectionProps) {
  if (locale !== "en") {
    return null;
  }

  return (
    <Box
      component="section"
      py={72}
      bg="#f8fafc"
      aria-labelledby="seo-content-title"
    >
      <Container size="lg">
        <Stack gap="xl">
          <Stack gap="sm" maw={840}>
            <Text size="sm" fw={700} tt="uppercase" c="#0f766e">
              Dental Clinic in Turkey
            </Text>
            <Title
              id="seo-content-title"
              order={2}
              style={{ lineHeight: 1.15 }}
            >
              Why patients search for Linova Clinic in Istanbul
            </Title>
            <Text size="lg" c="dimmed" style={{ lineHeight: 1.8 }}>
              Linova Clinic is a modern dental clinic in Turkey focused on
              dental implants, veneers, Hollywood Smile treatments, and complete
              smile restoration. Our team in Istanbul combines digital
              dentistry, transparent planning, and a full dental tourism journey
              for patients who want quality care and a smoother travel
              experience.
            </Text>
            <Text size="md" c="dimmed" style={{ lineHeight: 1.8 }}>
              If you are comparing a{" "}
              <Link href="/dental-clinic-turkey" style={linkStyle}>
                clinic in Turkey
              </Link>{" "}
              and want a focused overview before choosing a provider, this
              landing page can help.
            </Text>
            <Text size="md" c="dimmed" style={{ lineHeight: 1.8 }}>
              If you are comparing a{" "}
              <Link href="/treatments" style={linkStyle}>
                dental clinic in Turkey
              </Link>{" "}
              for implants or cosmetic dentistry, or checking{" "}
              <Link href="/why-us" style={linkStyle}>
                why patients choose Linova
              </Link>
              , this page gives you a clear starting point before you{" "}
              <Link href="/contact" style={linkStyle}>
                request a free consultation
              </Link>
              .
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                radius="lg"
                shadow="sm"
                padding="xl"
                withBorder
              >
                <Stack gap="sm">
                  <Title order={3} size="h4">
                    {pillar.title}
                  </Title>
                  <Text c="dimmed" style={{ lineHeight: 1.75 }}>
                    {pillar.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
