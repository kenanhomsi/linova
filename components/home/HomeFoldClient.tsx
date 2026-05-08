"use client";
import dynamic from "next/dynamic";

import { SectionReveal } from "@/components/ui/Animate";
const BeforeAfterShowcase = dynamic(
  () =>
    import("./BeforeAfterShowcase").then((m) => ({
      default: m.BeforeAfterShowcase,
    })),
  { ssr: false },
);
const WhyLinovaSection = dynamic(
  () =>
    import("./WhyLinovaSection").then((m) => ({ default: m.WhyLinovaSection })),
  { ssr: false },
);
export function HomeFoldClient() {
  return (
    <>
      <SectionReveal delay={0.05}>
        <BeforeAfterShowcase />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <WhyLinovaSection />
      </SectionReveal>
    </>
  );
}
