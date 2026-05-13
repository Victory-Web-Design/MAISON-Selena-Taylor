"use client";

import { EditorialBand } from "@/components/layout/PageIntro";
import { LuxuryMediaReveal } from "@/components/ui/LuxuryMediaReveal";
import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { LOCAL_IMAGES } from "@/lib/site-images";
import { motion } from "framer-motion";
import Image from "next/image";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const lead =
  "A maison for collectors who prefer silence to spectacle — where each stone is read like a manuscript.";
const supporting =
  "Selena Taylor advises on rare diamonds, noble chromophores in emerald and corundum, and bespoke high jewelry executed with atelier-level patience. Every relationship begins with chemistry — between gem, skin, and light.";

export function HomeEditorialReveal() {
  return (
    <EditorialBand>
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14">
        <LuxuryMediaReveal
          direction="left"
          className="relative order-2 min-h-[280px] md:order-1 md:min-h-[420px]"
        >
          <Image
            src={LOCAL_IMAGES.consultation}
            alt="Private jewelry consultation"
            fill
            className="object-cover"
            sizes="(max-width:768px)100vw,50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFFFF]/30 via-transparent to-transparent" />
        </LuxuryMediaReveal>

        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14, margin: "0px 0px 22% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.06 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40, skewX: -0.8 },
              visible: {
                opacity: 1,
                x: 0,
                skewX: 0,
                transition: { duration: 0.95, ease: easeLuxury },
              },
            }}
            className="will-change-transform"
          >
            <LuxuryWordReveal
              text={lead}
              className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-snug text-[#1A1A1A]"
              stagger={0.042}
              delayChildren={0.04}
            />
          </motion.div>
          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, x: 28 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.88, ease: easeLuxury },
              },
            }}
          >
            <LuxuryWordReveal
              text={supporting}
              className="font-sans text-sm leading-relaxed text-[#1A1A1A]/58"
              stagger={0.02}
              delayChildren={0.02}
            />
          </motion.div>
        </motion.div>
      </div>
    </EditorialBand>
  );
}
