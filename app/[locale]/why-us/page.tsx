import { Box } from "@mantine/core";
import { WhyUsPageHeader } from "@/components/why-us/WhyUsPageHeader";
import { WhyUsStatsSection } from "@/components/why-us/WhyUsStatsSection";
import { WhyUsReasonsSection } from "@/components/why-us/WhyUsReasonsSection";
import { WhyUsSupportSection } from "@/components/why-us/WhyUsSupportSection";
import { WhyUsJourneySection } from "@/components/why-us/WhyUsJourneySection";
import { WhyUsCTASection } from "@/components/why-us/WhyUsCTASection";
import { BackToTop } from "@/components/layout/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Linova Clinic",
  description:
    "ISO-certified dental clinic in Istanbul with 15+ years of experience, up to 70% savings, lifetime warranty, and complete medical tourism support.",
};

export default function WhyUsPage() {
  return (
    <Box component="main">
      <WhyUsPageHeader />
      <WhyUsStatsSection />
      <WhyUsReasonsSection />
      <WhyUsSupportSection />
      <WhyUsJourneySection />
      <WhyUsCTASection />
      <BackToTop />
    </Box>
  );
}
