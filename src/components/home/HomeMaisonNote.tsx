"use client";

import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { IMG } from "@/lib/site-images";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const quote =
  "“Luxury is not volume — it is the right photon, in the right crystal, witnessed by the right eye.”";

export function HomeMaisonNote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-[min(52vh,520px)] overflow-hidden border-y border-[#1A1A1A]/8"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imgY, scale: imgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 0 12% 0)", opacity: 0.85 }}
          whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px 15% 0px" }}
          transition={{ duration: 1.15, ease: easeLuxury }}
        >
          <Image
            src={IMG.homeEditorial}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#050505]/78" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="perspective-[900px]">
          <motion.p
            className="font-sans text-[10px] uppercase tracking-[0.38em] text-[#AF944E]/85"
            initial={{ opacity: 0, letterSpacing: "0.52em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.38em" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: easeLuxury }}
          >
            Maison note
          </motion.p>
          <LuxuryWordReveal
            text={quote}
            delayChildren={0.14}
            stagger={0.038}
            className="mt-6 max-w-3xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-snug text-[#F4F4F4]"
          />
          <motion.p
            className="mt-6 font-sans text-xs uppercase tracking-[0.28em] text-[#D6D6D6]/55"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeLuxury }}
          >
            — Selena Taylor
          </motion.p>
        </div>
      </div>
    </section>
  );
}
