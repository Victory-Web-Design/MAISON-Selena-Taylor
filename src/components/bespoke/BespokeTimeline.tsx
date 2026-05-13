"use client";

import { LuxuryMediaReveal } from "@/components/ui/LuxuryMediaReveal";
import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { IMG } from "@/lib/site-images";
import { motion } from "framer-motion";
import Image from "next/image";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    title: "The Art of Dialogue: Consultation",
    body: "This is more than a meeting; it is a private exploration of lifestyle, inheritance intent, and the unique chemistry you wish to embody. We delve into your aesthetic preferences and the legacy you wish to build. No inventory theater—we discuss only stones that carry true significance.",
  },
  {
    title: "Global Sourcing: The World's Treasures",
    body: "Utilizing an elite network of master cutters, heritage houses, and specialist dealers, we acquire gems of unparalleled character. Provenance and treatment transparency are our non-negotiable gates. Every stone presented has been vetted for both its poetic beauty and its long-term investment value.",
  },
  {
    title: "The Perfect Blueprint: CAD Design",
    body: "Through high-precision digital twins, we explore the architecture, ergonomics, and light paths of your piece. This stage allows you to witness the balance and movement of the jewel in a three-dimensional space before the metal ever remembers its shape.",
  },
  {
    title: "Mechanical Poise: Hand Forging",
    body: "Rare metals are worked under high magnification, where settings are tuned for \"tactile silence\" and enduring structural integrity. Our artisans don't just set stones; they calibrate a masterpiece, ensuring the final work possesses a mechanical grace that lasts for generations.",
  },
  {
    title: "The Grand Unveiling: Final Presentation",
    body: "The journey concludes in a controlled environment where your masterpiece is revealed alongside its comprehensive documentation binders. This is a concierge closure—a ceremony marking the beginning of a legacy, rather than a mere retail transaction.",
  },
] as const;

const conciergeTitle = "Concierge cadence";
const conciergeBody =
  "Timelines respect stone hunting realities. Some jewels arrive quickly; others wait for the right crystal — patience is treated as a luxury service.";

export function BespokeTimeline() {
  return (
    <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[1.375rem] top-8 w-px bg-gradient-to-b from-[#AF944E]/50 via-[#1A1A1A]/14 to-transparent md:left-[2rem]"
      />

      <ol className="relative space-y-16 md:space-y-[4.5rem]">
        {STEPS.map((step, i) => (
          <motion.li
            key={`bespoke-step-${i}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 26% 0px" }}
            transition={{ duration: 0.82, delay: i * 0.04, ease: easeLuxury }}
            className="flex gap-5 md:gap-10"
          >
            <div className="relative z-[1] flex w-11 shrink-0 flex-col items-center md:w-16">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-[#AF944E]/70 bg-[#FFFFFF] shadow-[0_0_0_4px_rgba(255,255,255,1)]" />
              <span className="mt-4 font-sans text-[10px] uppercase tracking-[0.34em] text-[#1A1A1A]/38 md:hidden">
                Step {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="min-w-0 flex-1 pb-1">
              <div className="hidden items-baseline gap-4 md:flex">
                <span className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#1A1A1A]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#1A1A1A]/8" aria-hidden />
              </div>
              <LuxuryWordReveal
                text={step.title}
                as="div"
                className="mt-1 font-serif text-[clamp(1.65rem,3.2vw,2.25rem)] leading-tight text-[#1A1A1A] md:mt-3"
                stagger={0.045}
                delayChildren={0.04}
              />
              <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,340px)] md:items-start md:gap-10">
                <LuxuryWordReveal
                  text={step.body}
                  className="max-w-[52ch] font-sans text-sm leading-relaxed text-[#1A1A1A]/62 md:text-[15px]"
                  stagger={0.018}
                  delayChildren={0.06}
                />
                <LuxuryMediaReveal
                  direction={i % 2 === 0 ? "left" : "up"}
                  className="relative aspect-[4/3] w-full overflow-hidden border border-[#1A1A1A]/10 bg-[#FAFAFA]"
                >
                  <Image
                    src={IMG.bespoke[i] ?? IMG.bespoke[0]}
                    alt=""
                    fill
                    quality={92}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </LuxuryMediaReveal>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

      <SectionReveal className="mt-20 border border-[#1A1A1A]/8 bg-[#FAFAFA] p-8 md:p-12">
        <LuxuryWordReveal
          text={conciergeTitle}
          as="div"
          className="font-serif text-2xl text-[#1A1A1A]"
          stagger={0.05}
          delayChildren={0.05}
        />
        <LuxuryWordReveal
          text={conciergeBody}
          className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-[#1A1A1A]/58 md:text-[15px]"
          stagger={0.02}
          delayChildren={0.12}
        />
      </SectionReveal>
    </div>
  );
}
