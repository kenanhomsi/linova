"use client";

import { useTranslations } from "next-intl";
import { TextInput, Textarea, Button, Stack, Select, SimpleGrid, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { motion } from "framer-motion";
import { IconSend } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import styles from "./FooterForm.module.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

export function FooterForm() {
  const t = useTranslations("home");
  const formLabels = t.raw("footerForm") as { fullName: string; email: string; phone: string; treatmentInterest: string; treatmentOptions: string[]; message: string; messagePlaceholder: string; sendButton: string };
  const treatmentOptions = formLabels.treatmentOptions
    .filter((opt) => opt !== "Select a treatment")
    .map((opt) => ({ value: opt, label: opt }));

  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      treatment: "",
      message: "",
    },
    validate: {
      name: (v) => (v.trim() ? null : "Required"),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  const messageLength = form.values.message.length;

  const handleSubmit = (values: FormValues) => {
    const text = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Treatment: ${values.treatment}`,
      `Message: ${values.message}`,
    ].join("\n");
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="input-focus-ring">
      <Stack gap="md">
        <TextInput
          label={`${formLabels.fullName} *`}
          placeholder="John Doe"
          required
          {...form.getInputProps("name")}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <TextInput
            label={`${formLabels.email} *`}
            type="email"
            placeholder="john@example.com"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            label={formLabels.phone}
            placeholder="+1 (555) 000-0000"
            {...form.getInputProps("phone")}
          />
        </SimpleGrid>
        <Select
          label={formLabels.treatmentInterest}
          data={treatmentOptions}
          placeholder="Select a treatment"
          clearable
          {...form.getInputProps("treatment")}
          styles={{ label: { marginBottom: 4 } }}
        />
        <Textarea
          label={formLabels.message}
          placeholder="Tell us about your dental needs..."
          minRows={4}
          maxLength={500}
          {...form.getInputProps("message")}
        />
        <Box ta="right">
          <Text size="xs" c="dimmed">
            {messageLength}/500 characters
          </Text>
        </Box>
        <Button
          type="submit"
          size="md"
          fw={600}
          component={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          leftSection={<IconSend size={18} />}
          className={styles.submitBtn}
        >
          {formLabels.sendButton}
        </Button>
      </Stack>
    </form>
  );
}
