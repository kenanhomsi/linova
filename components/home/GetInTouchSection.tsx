import { getTranslations } from "next-intl/server";
import { Container, Box, Stack, Title, Text } from "@mantine/core";
import { ContactBlock } from "@/components/shared/ContactBlock";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./GetInTouchSection.module.css";

export async function GetInTouchSection() {
  const t = await getTranslations("home");

  return (
    <Box id="get-in-touch" className={`section-spacing ${styles.root}`}>
      <Container size="xl">
        <Stack gap="xl">
          <FadeInUp>
            <Stack gap="xs" ta="center" maw={640} mx="auto">
              <Text size="sm" fw={600} tt="uppercase" className={styles.eyebrow}>
                GET IN TOUCH
              </Text>
              <Title order={2} size="2.25rem" fw={700} className={styles.title}>
                {t("footerForm.title")}
              </Title>
              <Text size="lg" lh={1.6} className={styles.subtitle}>
                {t("footerForm.subtitle")}
              </Text>
            </Stack>
          </FadeInUp>
          <ContactBlock />
        </Stack>
      </Container>
    </Box>
  );
}
