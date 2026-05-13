"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";

const PILLARS = [
  {
    title: "U.S. & international lab reports",
    body:
      "Investment and collector stones are positioned with third-party documentation from recognized laboratories — including GIA and other major U.S. / global graders when the material calls for it. The maison does not issue in-house certificates as substitutes for independent reports.",
  },
  {
    title: "Material verification & disclosure",
    body:
      "Origin memos, treatment history, and enhancement literacy are discussed before commitment. Where ethics or regulations require, chain-of-custody notes and import documentation are organized for qualified placements.",
  },
  {
    title: "Certificate packet at handover",
    body:
      "Clients receive a curated dossier: report copies, relevant appendices, and a private written summary of what each document does — and does not — guarantee. Questions are welcomed; jargon is not.",
  },
] as const;

export function GemCredentialsSection() {
  return (
    <section className="border-y border-[#1A1A1A]/8 bg-[#FFFFFF] px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <SectionReveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.38em] text-[#AF944E]">
            Due diligence
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-snug text-[#1A1A1A]">
            Laboratory reports, provenance memos, and clear disclosure — the way serious collectors expect.
          </h2>
          <LuxuryWordReveal
            text="Selena Taylor is a private jewelry maison, not a gemological laboratory. All technical claims on this site reference independent third-party graders and are reviewed with you in appointment. Specific lab choice depends on stone category, jurisdiction, and your advisory goals."
            className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-[#1A1A1A]/55"
            stagger={0.018}
            delayChildren={0.08}
          />
        </SectionReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {PILLARS.map((p, i) => (
            <SectionReveal key={p.title} delay={0.06 + i * 0.05}>
              <div className="h-full border border-[#1A1A1A]/8 bg-[#FAFAFA] p-8 md:p-9">
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-serif text-xl text-[#1A1A1A]">{p.title}</p>
                <LuxuryWordReveal
                  text={p.body}
                  className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/58"
                  stagger={0.016}
                  delayChildren={0.04}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
