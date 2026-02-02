"use client";

import { TextInput, Textarea, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { WHATSAPP_LINK } from "@/lib/constants";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: {
      name: (v) => (v.trim() ? null : "Name is required"),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: FormValues) => {
    const text = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Message: ${values.message}`,
    ].join("\n");
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Full Name"
          placeholder="Your name"
          required
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="your@email.com"
          required
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Phone"
          placeholder="+90 5xx xxx xx xx"
          {...form.getInputProps("phone")}
        />
        <Textarea
          label="Message"
          placeholder="Tell us about your treatment needs..."
          minRows={3}
          {...form.getInputProps("message")}
        />
        <Button type="submit" color="teal" size="md">
          Send via WhatsApp
        </Button>
      </Stack>
    </form>
  );
}
