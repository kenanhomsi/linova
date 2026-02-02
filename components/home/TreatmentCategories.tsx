import Link from "next/link";
import { Container, Title, Text, Stack, Button, Card } from "@mantine/core";
import { CATEGORIES, getTreatmentsByCategory } from "@/lib/treatments";
import styles from "./TreatmentCategories.module.css";

export function TreatmentCategories() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" ta="center">
          <Title order={2} c="teal.8">
            Treatment Categories
          </Title>
          <Text maw={600} mx="auto" c="dimmed" size="lg">
            Browse our full range of dental treatments and services.
          </Text>
        </Stack>
        <Stack gap="md">
          {CATEGORIES.map((category) => {
            const treatments = getTreatmentsByCategory(category.id);
            return (
              <Card key={category.id} shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="sm">
                  <Title order={3} c="teal.7" size="h4">
                    {category.title}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {treatments.length} treatment{treatments.length !== 1 ? "s" : ""}
                  </Text>
                  <Link href="/treatments" className={styles.link}>
                    <Button variant="light" color="teal" size="sm" w="fit-content">
                      View all
                    </Button>
                  </Link>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
