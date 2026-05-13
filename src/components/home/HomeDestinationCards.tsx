"use client";

import { LuxuryMediaReveal } from "@/components/ui/LuxuryMediaReveal";
import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { IMG, VAULT_COVER_IMAGES } from "@/lib/site-images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    title: "The Vault",
    body: "Ten families of rarity — geological dossiers, optics, and certification discipline.",
    href: "/the-vault",
    image: IMG.homeVault,
  },
  {
    title: "Rare Stones Archive",
    body: "Representative placements — rarity, documentation, and collector fit.",
    href: "/rare-stones-archive",
    image: VAULT_COVER_IMAGES[4]!,
  },
  {
    title: "Bespoke Journey",
    body: "A five-stage private process from first conversation to final unveiling.",
    href: "/bespoke-journey",
    image: IMG.homeBespoke,
  },
] as const;

const textBlock = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.42 },
  },
};

const textLine = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeLuxury },
  },
};

export function HomeDestinationCards() {
  return (
    <div className="mx-auto grid max-w-[1400px] gap-0 px-0 md:grid-cols-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.href}
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: "0px 0px 24% 0px" }}
          transition={{
            duration: 0.95,
            delay: i * 0.07,
            ease: easeLuxury,
          }}
        >
          <Link
            href={card.href}
            className="group block border-t border-[#1A1A1A]/8 bg-[#FFFFFF] transition-colors duration-700 hover:bg-[#FAFAFA] md:border-l md:border-t-0 md:first:border-l-0"
          >
            <LuxuryMediaReveal
              direction={i % 2 === 0 ? "left" : "up"}
              className="relative aspect-[16/10] w-full overflow-hidden"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.03]"
                sizes="(max-width:768px)100vw,33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/45 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
            </LuxuryMediaReveal>

            <motion.div
              className="px-8 py-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25, margin: "0px 0px 18% 0px" }}
              variants={textBlock}
            >
              <motion.p
                variants={textLine}
                className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#AF944E]"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.p>
              <motion.h2
                variants={textLine}
                className="mt-4 font-serif text-2xl text-[#1A1A1A]"
              >
                {card.title}
              </motion.h2>
              <motion.div variants={textLine} className="mt-3">
                <LuxuryWordReveal
                  text={card.body}
                  className="font-sans text-sm leading-relaxed text-[#1A1A1A]/55"
                  stagger={0.024}
                  delayChildren={0.04}
                />
              </motion.div>
              <motion.span
                variants={textLine}
                className="mt-6 inline-block font-sans text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40 transition-colors group-hover:text-[#1A1A1A]"
              >
                Enter
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
