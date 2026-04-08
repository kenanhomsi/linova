"use client";

import dynamic from "next/dynamic";
import { SectionReveal } from "@/components/ui/Animate";


const WhyLinovaSection = dynamic(
  () => import("./WhyLinovaSection").then((m) => ({ default: m.WhyLinovaSection })),
  { ssr: false }
);
const DentalJourneySection = dynamic(
  () => import("./DentalJourneySection").then((m) => ({ default: m.DentalJourneySection })),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import("./TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("./FAQSection").then((m) => ({ default: m.FAQSection })),
  { ssr: false }
);
const GetInTouchSection = dynamic(
  () => import("./GetInTouchSection").then((m) => ({ default: m.GetInTouchSection })),
  { ssr: false }
);

export function HomeBelowFoldClient() {
  return (
    <>


      <SectionReveal delay={0.05}>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <FAQSection />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <GetInTouchSection />
      </SectionReveal>
    </>
  );
}

