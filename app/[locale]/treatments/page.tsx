import { Box, Container } from "@mantine/core";
import { TreatmentsPageHeader } from "@/components/treatments/TreatmentsPageHeader";
import { TreatmentsContent } from "@/components/treatments/TreatmentsContent";
import { TreatmentsCTA } from "@/components/treatments/TreatmentsCTA";
import { BackToTop } from "@/components/layout/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments | Linova Clinic",
  description:
    "Comprehensive dental treatments: cosmetic, restorative, implants, veneers, full mouth restoration, and medical tourism support in Istanbul.",
};

export default function TreatmentsPage() {
  return (
    <Box component="main">
      <TreatmentsPageHeader />
      <TreatmentsContent />
      <TreatmentsCTA />
      <BackToTop />
    </Box>
  );
}
