"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

/** Generous viewport so images reliably paint (clip-path wipes were hiding content in some cases). */
const viewport = {
  once: true,
  amount: 0.06,
  margin: "12% 0px 45% 0px",
} as const;

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "up";
};

/**
 * Soft media entrance — opacity + slight motion only (no clip-path).
 * `direction` kept for API compatibility; motion axis follows it slightly.
 */
export function LuxuryMediaReveal({
  children,
  className,
  direction = "left",
}: Props) {
  const yFrom = direction === "up" ? 20 : 14;
  const xFrom = direction === "left" ? 18 : 0;

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0, x: xFrom, y: direction === "up" ? yFrom : 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.85, ease: easeLuxury }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-px origin-left bg-[#AF944E]/55"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.9, delay: 0.2, ease: easeLuxury }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[3] h-8 w-px origin-top bg-[#AF944E]/30"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewport}
        transition={{ duration: 0.75, delay: 0.28, ease: easeLuxury }}
      />
    </motion.div>
  );
}
