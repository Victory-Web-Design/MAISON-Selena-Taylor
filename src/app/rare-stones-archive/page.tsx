import { PageIntro } from "@/components/layout/PageIntro";
import { RareStonesArchiveContent } from "@/components/archive/RareStonesArchiveContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rare Stones Archive",
  description:
    "Institutional archive of historic gemstones, private placements, and auction records.",
};

export default function RareStonesArchivePage() {
  return (
    <>
      <PageIntro
        eyebrow="Sealed ledgers"
        title="Rare stones archive — whispers of provenance, not a retail inventory."
        description="Representative placements illustrating how the maison thinks about rarity, documentation, and collector fit."
      />
      <RareStonesArchiveContent />
    </>
  );
}
