import { Container, Title, Text, SimpleGrid, Stack, ThemeIcon, Group } from "@mantine/core";
import { IconPlane, IconHotelService, IconLanguage, IconVideo, IconMapPin } from "@tabler/icons-react";
import { getTreatmentsByCategory } from "@/lib/treatments";

const TOURISM_ICONS: Record<string, React.ReactNode> = {
  "online-consultation": <IconVideo size={28} />,
  "airport-transfers": <IconPlane size={28} />,
  accommodation: <IconHotelService size={28} />,
  "multilingual-coordinators": <IconLanguage size={28} />,
  "tour-addons": <IconMapPin size={28} />,
};

export function WhyChooseUs() {
  const tourismServices = getTreatmentsByCategory("tourism");

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" ta="center">
          <Title order={2} c="teal.8">
            Why Choose Linova
          </Title>
          <Text maw={600} mx="auto" c="dimmed" size="lg">
            We make your dental journey smooth from consultation to aftercare.
          </Text>
        </Stack>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {tourismServices.map((t) => (
            <Group key={t.id} gap="md" wrap="nowrap" align="flex-start">
              <ThemeIcon size={56} radius="md" color="teal" variant="light">
                {TOURISM_ICONS[t.slug] ?? <IconVideo size={28} />}
              </ThemeIcon>
              <Stack gap={4}>
                <Text fw={600} c="dark.7">
                  {t.title}
                </Text>
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {t.shortDescription}
                </Text>
              </Stack>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
