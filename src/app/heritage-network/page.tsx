import { HeritageNetworkBody } from "@/components/heritage/HeritageNetworkBody";
import { PageIntro, WhatsAppCtaBand } from "@/components/layout/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heritage & Network",
  description:
    "Selena Taylor — Beverly Hills advisory at the intersection of geological intelligence and atelier restraint; founder story, Lucien Vale creative direction, gemological practice, and private sourcing network.",
};

export default function HeritageNetworkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Heritage & Network"
        title="A maison shaped through private introductions, long memory, and collector trust."
        description="Selena Taylor operates at the intersection of geological intelligence and atelier restraint — a Beverly Hills advisory house supported by an international network of cutters, archivists, estate specialists, and private stone holders."
      />
      <HeritageNetworkBody />
      <WhatsAppCtaBand />
    </>
  );
}
