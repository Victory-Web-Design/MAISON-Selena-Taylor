"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px 18% 0px",
} as const;

type Props = {
  text: string;
  className?: string;
  /** Extra delay before first word */
  delayChildren?: number;
  /** Seconds between words */
  stagger?: number;
  as?: "p" | "span" | "div";
};

export function LuxuryWordReveal({
  text,
  className,
  delayChildren = 0.06,
  stagger = 0.032,
  as: Tag = "p",
}: Props) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const MotionTag = Tag === "p" ? motion.p : Tag === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${i}-${word.slice(0, 12)}`}
          className="inline-block will-change-[transform,opacity,filter]"
          style={{ marginRight: i < words.length - 1 ? "0.32em" : undefined }}
          variants={{
            hidden: {
              opacity: 0,
              y: "0.55em",
              filter: "blur(5px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.68, ease: easeLuxury },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
