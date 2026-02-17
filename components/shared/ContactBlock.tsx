import { Group, Text, Stack, Title, SimpleGrid, Box } from "@mantine/core";
import { IconPhone, IconBrandWhatsapp, IconMail, IconMapPin, IconClock } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { PHONE, PHONE_TEL, EMAIL, WHATSAPP_LINK } from "@/lib/constants";
import { FooterForm } from "./FooterForm";
import { FadeInUp } from "@/components/ui/Animate";
import styles from "./ContactBlock.module.css";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797555!2d28.9922!3d41.0542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzE1LjEiTiAyOMKwNTknMzIuMCJF!5e0!3m2!1sen!2str!4v1635000000000!5m2!1sen!2str!4v1635000000000";

export async function ContactBlock() {
  const t = await getTranslations("home");
  const form = t.raw("footerForm") as { address: string; hours: string; quickContact: string; callUs: string; whatsapp: string; emailUs: string; visitTitle: string; addressLabel: string; hoursLabel: string };
  const addressLines = form.address.split("\n");
  const hoursLines = form.hours.split("\n");

  return (
    <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
      <FadeInUp>
        <Box p="xl" className={styles.formBox}>
          <FooterForm />
        </Box>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <Stack gap="xl">
          <Box p="xl" className={styles.contactBox}>
            <Title order={3} size="h3" c="white" fw={700} mb="lg">
              {form.quickContact}
            </Title>
            <Stack gap="md">
              <a href={PHONE_TEL} className={styles.link}>
                <Group gap="md">
                  <IconPhone size={22} stroke={2} />
                  <Stack gap={2}>
                    <Text size="sm" fw={700} c="white">
                      {form.callUs}
                    </Text>
                    <Text size="md" c="rgba(255,255,255,0.95)">
                      {PHONE}
                    </Text>
                  </Stack>
                </Group>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Group gap="md">
                  <IconBrandWhatsapp size={22} stroke={2} />
                  <Stack gap={2}>
                    <Text size="sm" fw={700} c="white">
                      WhatsApp
                    </Text>
                    <Text size="md" c="rgba(255,255,255,0.95)">
                      {form.whatsapp}
                    </Text>
                  </Stack>
                </Group>
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.link}>
                <Group gap="md">
                  <IconMail size={22} stroke={2} />
                  <Stack gap={2}>
                    <Text size="sm" fw={700} c="white">
                      {form.emailUs}
                    </Text>
                    <Text size="md" c="rgba(255,255,255,0.95)">
                      {EMAIL}
                    </Text>
                  </Stack>
                </Group>
              </a>
            </Stack>
          </Box>

          <Box>
            <Title order={3} size="h4" fw={700} mb="md" className={styles.visitTitle}>
              {form.visitTitle}
            </Title>
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <Box className={styles.iconWrap}>
                  <IconMapPin size={20} stroke={2} />
                </Box>
                <Stack gap={2}>
                  <Text size="sm" fw={700} className={styles.label}>
                    {form.addressLabel}
                  </Text>
                  <Text size="sm" className={styles.value}>
                    {addressLines.join("\n")}
                  </Text>
                </Stack>
              </Group>
              <Group gap="sm" align="flex-start">
                <Box className={styles.iconWrap}>
                  <IconClock size={20} stroke={2} />
                </Box>
                <Stack gap={2}>
                  <Text size="sm" fw={700} className={styles.label}>
                    {form.hoursLabel}
                  </Text>
                  <Text size="sm" className={styles.value}>
                    {hoursLines.join("\n")}
                  </Text>
                </Stack>
              </Group>
            </Stack>
          </Box>

          <Box className={styles.mapWrap}>
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Linova Clinic Istanbul"
            />
          </Box>
        </Stack>
      </FadeInUp>
    </SimpleGrid>
  );
}
