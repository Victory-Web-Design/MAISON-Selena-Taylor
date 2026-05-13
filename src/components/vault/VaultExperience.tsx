"use client";

import type { VaultCategory } from "@/data/vault-categories";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export function VaultExperience({ categories }: { categories: VaultCategory[] }) {
  const [active, setActive] = useState<VaultCategory | null>(null);

  const activeId = useMemo(() => active?.id ?? null, [active]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((c, i) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 24% 0px" }}
            transition={{ duration: 0.85, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col overflow-hidden border border-[#1A1A1A]/8 bg-[#FFFFFF]"
          >
            <div className="relative h-56 w-full shrink-0 md:h-64 bg-[#F5F5F5]">
              <Image
                src={c.coverImage}
                alt=""
                fill
                quality={92}
                className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative flex min-h-[220px] flex-1 flex-col justify-between p-8 md:p-10">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#AF944E]">
                  Archive
                </p>
                <h2 className="mt-4 font-serif text-3xl text-[#1A1A1A] md:text-[2.1rem]">
                  {c.title}
                </h2>
                <p className="mt-3 max-w-prose font-sans text-sm leading-relaxed text-[#1A1A1A]/58">
                  {c.subtitle}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="rounded-full border border-[#1A1A1A]/14 px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A] transition-[background,transform] duration-500 hover:-translate-y-px hover:bg-[#1A1A1A] hover:text-[#FFFFFF]"
                >
                  View dossier
                </button>
                <button
                  type="button"
                  onClick={() => setActive({ ...c, id: `${c.id}-cert` })}
                  className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 underline-offset-4 transition-colors hover:text-[#1A1A1A]"
                >
                  Certificate sample
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-[#050505]/55 p-4 backdrop-blur-sm sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="vault-dialog-title"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setActive(null);
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[min(88vh,900px)] w-full max-w-3xl overflow-y-auto border border-[#1A1A1A]/10 bg-[#FFFFFF] shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-[#FFFFFF]/90 font-sans text-xs text-[#1A1A1A]/60 backdrop-blur-sm hover:bg-[#FAFAFA]"
                aria-label="Close"
              >
                ×
              </button>

              <div className="p-8 md:p-12">
                {!activeId?.endsWith("-cert") && (
                  <div className="relative mb-10 h-48 w-full overflow-hidden border border-[#1A1A1A]/8 bg-[#F5F5F5]">
                    <Image
                      src={active.coverImage}
                      alt=""
                      fill
                      quality={92}
                      className="object-cover"
                      sizes="768px"
                    />
                  </div>
                )}

                <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#AF944E]">
                  {activeId?.endsWith("-cert") ? "Laboratory excerpt" : "Geological dossier"}
                </p>
                <h3
                  id="vault-dialog-title"
                  className="mt-4 font-serif text-3xl text-[#1A1A1A] md:text-4xl"
                >
                  {active.title}
                </h3>

                {activeId?.endsWith("-cert") ? (
                  <div className="mt-10 space-y-6 border border-[#1A1A1A]/10 bg-[#FAFAFA] p-8">
                    <p className="font-mono text-xs tracking-[0.18em] text-[#1A1A1A]/70">
                      {active.certificateCode}
                    </p>
                    <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]/65">
                      {active.certification} This is a representative excerpt for
                      maison presentations. Actual certificates vary by stone and
                      laboratory edition.
                    </p>
                  </div>
                ) : (
                  <div className="mt-10 space-y-10">
                    <section>
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                        Geological structure
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                        {active.geology}
                      </p>
                    </section>
                    <section>
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                        Optical characteristics
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                        {active.optics}
                      </p>
                    </section>
                    <section>
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                        Rarity thesis
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                        {active.rarity}
                      </p>
                    </section>
                    <section>
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                        Investment notes
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                        {active.investment}
                      </p>
                    </section>
                    <section>
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
                        Certification discipline
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                        {active.certification}
                      </p>
                    </section>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
