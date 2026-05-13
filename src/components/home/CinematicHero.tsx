"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { HERO_GEM_VIDEO_PRIMARY } from "@/lib/hero-media";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

/** Trim loop this many seconds before EOF — avoids long stall when MP4 `moov` is at file end. */
const HERO_LOOP_TAIL_SEC = 0.06;

const heroVideoSrc =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? HERO_GEM_VIDEO_PRIMARY;

/** Subtle legibility on type — does not cover the video. */
const textDepth =
  "[text-shadow:0_2px_28px_rgba(0,0,0,0.75),0_1px_2px_rgba(0,0,0,0.5)]";

export function CinematicHero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  const fadeUp = reduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      };

  const onHeroTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !Number.isFinite(v.duration) || v.duration < HERO_LOOP_TAIL_SEC * 3) return;
    if (v.currentTime >= v.duration - HERO_LOOP_TAIL_SEC) {
      v.currentTime = 0;
    }
  }, []);

  const onHeroEnded = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    void v.play();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100dvh] overflow-hidden bg-[#050505]"
    >
      <motion.div
        style={{ y: yVisual }}
        className="absolute inset-0 will-change-transform"
      >
        {!reduceMotion ? (
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 h-full w-full object-cover object-center bg-[#050505]"
            autoPlay
            muted
            playsInline
            preload="auto"
            src={heroVideoSrc}
            onTimeUpdate={onHeroTimeUpdate}
            onEnded={onHeroEnded}
            aria-label="Close-up of fine jewelry and gemstones — hero loop"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_30%,#1a1510_0%,#050505_55%)]"
          />
        )}
      </motion.div>

      <div
        className={`relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-40 ${textDepth}`}
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 1.15, delay: reduceMotion ? 0 : 0.08, ease: easeLuxury }}
          className="max-w-4xl"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-[#AF944E]/90">
            Beverly Hills · Private Maison
          </p>
          <h1 className="mt-6 font-serif text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-[#FAFAFA]">
            Rare Stones.
            <br />
            Private Sourcing.
            <br />
            <span className="text-[#ECECEC]/92">Timeless Creations.</span>
          </h1>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 1.0, delay: reduceMotion ? 0 : 0.28, ease: easeLuxury }}
          className="mt-8 max-w-2xl font-sans text-sm leading-relaxed text-[#F0F0F0] md:text-base"
        >
          Beverly Hills private jewelry maison specializing in investment-grade
          diamonds, unheated sapphires, Colombian emeralds, and bespoke fine
          jewelry.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.45, ease: easeLuxury }}
          className="mt-10 font-sans text-[10px] uppercase tracking-[0.36em] text-[#AF944E]/90"
        >
          By Private Appointment Only
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : 0.58, ease: easeLuxury }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#FAFAFA] px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A] shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
          >
            Book Private Consultation
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#FAFAFA]/35 bg-[#050505]/35 px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#FAFAFA] shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-[transform,background] duration-500 hover:-translate-y-px hover:bg-[#050505]/50"
          >
            Explore The Vault
          </a>
        </motion.div>
      </div>
    </section>
  );
}
