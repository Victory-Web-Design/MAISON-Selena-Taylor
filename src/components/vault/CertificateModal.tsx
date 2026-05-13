"use client";

import type { VaultCategory } from "@/data/vault-categories";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function CertificateModal({
  open,
  onClose,
  category,
}: {
  open: boolean;
  onClose: () => void;
  category: VaultCategory | null;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && category && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Close certificate"
            className="absolute inset-0 bg-[#050505]/55 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[81] w-full max-w-lg border border-[#1A1A1A]/10 bg-[#FFFFFF] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#1A1A1A]/45">
                  Laboratory Memorandum
                </p>
                <p className="mt-3 font-serif text-2xl text-[#1A1A1A]">
                  {category.title}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 transition-colors hover:text-[#1A1A1A]"
              >
                Close
              </button>
            </div>

            <div className="mt-8 space-y-4 border-t border-[#1A1A1A]/8 pt-8 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
              <p>
                <span className="text-[#1A1A1A]">Certification overview — </span>
                {category.certification}
              </p>
              <p className="rounded-md border border-[#AF944E]/25 bg-[#FAFAF8] px-4 py-3 font-mono text-xs text-[#1A1A1A]/75">
                {category.certificateCode}
              </p>
              <p className="text-xs text-[#1A1A1A]/45">
                Illustrative reference styling. Actual certificates vary by
                laboratory and stone.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
