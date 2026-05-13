"use client";

import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ARCHIVE_ENTRIES } from "@/data/rare-stones-archive";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const textViewport = { once: true, amount: 0.14, margin: "0px 0px 24% 0px" } as const;

function ArchiveEntryRow({
  entry,
  index,
}: {
  entry: (typeof ARCHIVE_ENTRIES)[number];
  index: number;
}) {
  const metaLine = `${entry.category} · ${entry.era}`;
  /** Observe the stable clip box — not the translated layer — or `whileInView` never fires. */
  const mediaShellRef = useRef<HTMLDivElement>(null);
  const mediaInView = useInView(mediaShellRef, {
    once: true,
    amount: 0.12,
    margin: "0px 0px 35% 0px",
  });

  return (
    <SectionReveal delay={index * 0.03}>
      <div className="grid gap-0 overflow-hidden border border-[#1A1A1A]/8 bg-[#FFFFFF] md:grid-cols-[minmax(200px,260px)_1fr]">
        {/* Photo: clip shell is observed; inner layer slides in from the left */}
        <div
          ref={mediaShellRef}
          className="relative aspect-[4/3] min-h-[200px] overflow-hidden bg-[#F5F5F5] md:aspect-auto md:min-h-[240px]"
        >
          <motion.div
            className="absolute inset-0 h-full w-full will-change-transform"
            initial={{ x: "-100%" }}
            animate={mediaInView ? { x: 0 } : { x: "-100%" }}
            transition={{ duration: 0.95, ease: easeLuxury }}
          >
            <Image
              src={entry.coverImage}
              alt=""
              fill
              quality={92}
              className="object-cover"
              sizes="(max-width:768px)100vw,280px"
            />
          </motion.div>
        </div>

        {/* Text: slow “written” reveal */}
        <div className="flex flex-col justify-center gap-5 p-8 md:gap-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={textViewport}
            transition={{ duration: 0.75, delay: 0.18, ease: easeLuxury }}
          >
            <LuxuryWordReveal
              text={entry.status}
              className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#AF944E]"
              stagger={0.08}
              delayChildren={0.06}
            />
            <LuxuryWordReveal
              text={entry.name}
              as="div"
              className="mt-3 font-serif text-2xl text-[#1A1A1A]"
              stagger={0.065}
              delayChildren={0.14}
            />
            <LuxuryWordReveal
              text={metaLine}
              className="mt-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45"
              stagger={0.07}
              delayChildren={0.22}
            />
          </motion.div>
          <LuxuryWordReveal
            text={entry.note}
            className="font-sans text-sm leading-relaxed text-[#1A1A1A]/62"
            stagger={0.038}
            delayChildren={0.28}
          />
        </div>
      </div>
    </SectionReveal>
  );
}

export function RareStonesArchiveContent() {
  return (
    <>
      <div className="bg-[#FAFAFA] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px] space-y-6">
          {ARCHIVE_ENTRIES.map((e, i) => (
            <ArchiveEntryRow key={e.id} entry={e} index={i} />
          ))}
        </div>
      </div>

      <section className="border-t border-[#1A1A1A]/8 bg-[#FFFFFF] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <SectionReveal>
            <LuxuryWordReveal
              text="Access is archival, not algorithmic."
              as="div"
              className="font-serif text-2xl text-[#1A1A1A]"
              stagger={0.055}
              delayChildren={0.05}
            />
            <LuxuryWordReveal
              text="Names are abstracted where discretion requires. Real ledgers live in private binders presented at appointment."
              className="mt-4 font-sans text-sm leading-relaxed text-[#1A1A1A]/58"
              stagger={0.028}
              delayChildren={0.2}
            />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
