"use client";

import { Hero } from "@/components/home/Hero";
import { CompleteDentalSolutionsSection } from "@/components/home/CompleteDentalSolutionsSection";
import { WhyLinovaSection } from "@/components/home/WhyLinovaSection";
import { SmileTransformations } from "@/components/home/SmileTransformations";
import { GallerySection } from "@/components/home/GallerySection";
import { DentalJourneySection } from "@/components/home/DentalJourneySection";
import { DigitalDentistrySection } from "@/components/home/DigitalDentistrySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";
import { SectionReveal } from "@/components/ui/Animate";
import { BackToTop } from "@/components/layout/BackToTop";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <Box>
      <Hero />
      <SectionReveal>
        <CompleteDentalSolutionsSection animated />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <WhyLinovaSection />
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <SmileTransformations />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <GallerySection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <DentalJourneySection />
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <DigitalDentistrySection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <FAQSection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <GetInTouchSection />
      </SectionReveal>
      <BackToTop />
    </Box>
  );
}
