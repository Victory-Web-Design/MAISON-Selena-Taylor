import { PageIntro } from "@/components/layout/PageIntro";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { VAULT_CATEGORIES } from "@/data/vault-categories";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Education Journal",
  description:
    "Eleven maison memoranda aligned to The Vault: ten gemstone families (fancy color diamond through pearl) plus laboratory report literacy — geology, optics, rarity, and certification discipline.",
};

function vaultTitleForId(id: string | undefined) {
  if (!id) return null;
  return VAULT_CATEGORIES.find((c) => c.id === id)?.title ?? null;
}

export default function EducationJournalPage() {
  const vaultCount = VAULT_CATEGORIES.length;
  const memoCount = JOURNAL_ARTICLES.length;

  return (
    <>
      <PageIntro
        eyebrow="Editorial"
        title="Education journal — slow reading for serious collectors."
        description="Each memorandum mirrors the same institutional pillars as The Vault: geology, optics, rarity, investment context, and certification language — written for desks that underwrite beauty, not blog cadence."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#AF944E]">
              Index
            </p>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-[#1A1A1A]/58">
              {memoCount} memoranda · {vaultCount} stone families in The Vault · cross-linked where each
              article maps to an archive category.
            </p>
          </div>
          <Link
            href="/the-vault"
            className="shrink-0 font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 underline-offset-4 transition-colors hover:text-[#AF944E] hover:underline"
          >
            Open The Vault
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {JOURNAL_ARTICLES.map((a, i) => {
            const vaultTitle = vaultTitleForId(a.vaultCategoryId);
            return (
              <SectionReveal key={a.slug} delay={i * 0.04}>
                <Link
                  href={`/education-journal/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-[#1A1A1A]/8 bg-[#FFFFFF] transition-[background,transform,box-shadow] duration-700 hover:-translate-y-0.5 hover:bg-[#FAFAFA] hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0">
                    <Image
                      src={a.coverImage}
                      alt=""
                      fill
                      className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.02]"
                      sizes="(max-width:768px)100vw,50vw"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505]/12 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#AF944E]">
                        {a.pillar}
                      </span>
                      <span className="font-sans text-[10px] text-[#1A1A1A]/22">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/38">
                        {a.readTime}
                      </span>
                    </div>
                    {vaultTitle ? (
                      <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#1A1A1A]/40">
                        Vault · {vaultTitle}
                      </p>
                    ) : null}
                    <h2 className="mt-4 font-serif text-[clamp(1.25rem,2.4vw,1.65rem)] leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#1A1A1A]">
                      {a.title}
                    </h2>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#1A1A1A]/58">
                      {a.dek}
                    </p>
                    <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/35 transition-colors group-hover:text-[#AF944E]">
                      Continue reading
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
