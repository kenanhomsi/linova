import { Container, Title, Text, SimpleGrid, Stack } from "@mantine/core";
import { getTreatmentsByCategory } from "@/lib/treatments";
import { ServiceCard } from "@/components/shared/ServiceCard";

const HIGHLIGHT_CATEGORIES = ["cosmetic", "restorative"] as const;

export function ServicesOverview() {
  const highlightTreatments = HIGHLIGHT_CATEGORIES.flatMap((cat) =>
    getTreatmentsByCategory(cat).slice(0, 2)
  );

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" ta="center">
          <Title order={2} c="teal.8">
            Our Dental Services
          </Title>
          <Text maw={600} mx="auto" c="dimmed" size="lg">
            Comprehensive care from cosmetic makeovers to implants and full mouth
            restoration.
          </Text>
        </Stack>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {highlightTreatments.map((treatment) => (
            <ServiceCard key={treatment.id} treatment={treatment} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
