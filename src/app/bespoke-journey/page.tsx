import { BespokeTimeline } from "@/components/bespoke/BespokeTimeline";
import { PageIntro, WhatsAppCtaBand } from "@/components/layout/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Journey",
  description:
    "Five-stage private journey from consultation to final presentation — concierge high jewelry.",
};

export default function BespokeJourneyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Private process"
        title="Bespoke journey — from private dialogue to the grand unveiling."
        description="Five thresholds where global sourcing, digital precision, and forge-level tactility meet the chemistry of your legacy."
      />
      <BespokeTimeline />
      <WhatsAppCtaBand />
    </>
  );
}
