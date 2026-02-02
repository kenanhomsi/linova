import { Box, Container } from "@mantine/core";
import { WhyUsPageHeader } from "@/components/why-us/WhyUsPageHeader";
import { WhyUsReasonsSection } from "@/components/why-us/WhyUsReasonsSection";
import { WhyUsSupportSection } from "@/components/why-us/WhyUsSupportSection";
import { WhyUsJourneySection } from "@/components/why-us/WhyUsJourneySection";
import { BackToTop } from "@/components/layout/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Linova Clinic",
  description:
    "Online consultation, VIP airport transfers, luxury accommodation, multilingual coordinators, and cultural tours in Istanbul with your dental treatment.",
};

export default function WhyUsPage() {
  return (
    <Box component="main">
      <Container size="xl">
        <WhyUsPageHeader />
      </Container>
      <WhyUsReasonsSection />
      <WhyUsSupportSection />
      <WhyUsJourneySection />
      <BackToTop />
    </Box>
  );
}
