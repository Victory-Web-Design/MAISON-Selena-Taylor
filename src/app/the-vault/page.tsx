import { PageIntro } from "@/components/layout/PageIntro";
import { VaultExperience } from "@/components/vault/VaultExperience";
import { VAULT_CATEGORIES } from "@/data/vault-categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Vault",
  description:
    "Museum-level archive of rare gemstone families — geology, optics, rarity, investment, and certification discipline.",
};

export default function VaultPage() {
  return (
    <>
      <PageIntro
        eyebrow="Institutional archive"
        title="The Vault — ten families of rarity, each with its own geological grammar."
        description="Macro atmospheres, microscope ethics, and certification languages presented as a private research wall — not a catalog."
      />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <VaultExperience categories={VAULT_CATEGORIES} />
      </div>

      <section className="border-t border-[#1A1A1A]/8 bg-[#050505] px-6 py-20 text-[#FAFAFA] md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#AF944E]/85">
            Black room
          </p>
          <p className="mt-6 max-w-3xl font-serif text-[clamp(1.6rem,3vw,2.3rem)] leading-snug">
            Certificates are not jewelry — they are contracts of language between the
            earth, the laboratory, and the collector. We read them slowly, in pairs.
          </p>
        </div>
      </section>
    </>
  );
}
