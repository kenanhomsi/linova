import { Container, Box, Stack } from "@mantine/core";
import { ContactBlock } from "@/components/shared/ContactBlock";
import { ContactPageHeader } from "@/components/contact/ContactPageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free consultation. Contact Linova Clinic in Istanbul for dental treatments, WhatsApp, or send a message.",
};

export default function ContactPage() {
  return (
    <Box id="contact" py="xl" style={{ background: "#f8fafb", minHeight: "70vh" }}>
      <Container size="xl">
        <Stack gap="xl">
          <ContactPageHeader />
          <ContactBlock />
        </Stack>
      </Container>
    </Box>
  );
}
