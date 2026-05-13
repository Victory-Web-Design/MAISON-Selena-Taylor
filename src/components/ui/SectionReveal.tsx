"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

type Props = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...motionProps
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px 28% 0px" }}
      transition={{ duration: 0.85, delay, ease: easeLuxury }}
      className={cn(className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
