"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  PORTFOLIO_CATEGORY_FILTERS,
  PORTFOLIO_PIECES,
  type PortfolioCategoryId,
} from "@/data/portfolio";
import { whatsappWithMessage } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

function commissionHref(title: string) {
  return whatsappWithMessage(
    `Hello Selena — I saw “${title}” in your Portfolio and would like to discuss commissioning something in a similar spirit.`,
  );
}

export function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategoryId>("all");

  const visible = useMemo(() => {
    if (active === "all") return PORTFOLIO_PIECES;
    return PORTFOLIO_PIECES.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
      <div className="flex flex-wrap gap-2 border-b border-[#1A1A1A]/10 pb-10">
        {PORTFOLIO_CATEGORY_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`rounded-full border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.26em] transition-colors md:px-5 ${
              active === f.id
                ? "border-[#AF944E] bg-[#AF944E]/10 text-[#1A1A1A]"
                : "border-[#1A1A1A]/12 bg-transparent text-[#1A1A1A]/50 hover:border-[#1A1A1A]/22 hover:text-[#1A1A1A]/72"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:gap-x-10">
        {visible.map((piece, i) => (
          <SectionReveal key={piece.slug} delay={i * 0.04}>
            <article className="group flex h-full flex-col overflow-hidden border border-[#1A1A1A]/8 bg-[#FFFFFF] transition-[box-shadow,transform] duration-700 hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-32px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={piece.imageSrc}
                  alt=""
                  fill
                  className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.02]"
                  sizes="(max-width:768px)100vw,50vw"
                  unoptimized={piece.imageSrc.startsWith("/")}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/45 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  <span className="bg-[#FAFAFA]/92 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/75 backdrop-blur-sm">
                    {PORTFOLIO_CATEGORY_FILTERS.find((c) => c.id === piece.category)?.label}
                  </span>
                  <span className="bg-[#050505]/55 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.24em] text-[#FAFAFA]/88 backdrop-blur-sm">
                    {piece.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h2 className="font-serif text-2xl tracking-tight text-[#1A1A1A] md:text-[clamp(1.4rem,2vw,1.85rem)]">
                  {piece.title}
                </h2>
                <p className="mt-2 font-sans text-xs leading-relaxed text-[#AF944E]/95">
                  {piece.subtitle}
                </p>

                <dl className="mt-6 grid gap-4 border-y border-[#1A1A1A]/8 py-6 font-sans text-[11px] leading-relaxed text-[#1A1A1A]/62 sm:grid-cols-3">
                  <div>
                    <dt className="text-[9px] uppercase tracking-[0.22em] text-[#1A1A1A]/38">
                      Carats
                    </dt>
                    <dd className="mt-1.5 text-[#1A1A1A]/78">{piece.carats}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] uppercase tracking-[0.22em] text-[#1A1A1A]/38">
                      Metal
                    </dt>
                    <dd className="mt-1.5 text-[#1A1A1A]/78">{piece.metal}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-[9px] uppercase tracking-[0.22em] text-[#1A1A1A]/38">
                      Cert.
                    </dt>
                    <dd className="mt-1.5 text-[#1A1A1A]/78">{piece.cert}</dd>
                  </div>
                </dl>

                <p className="flex-1 font-sans text-sm leading-[1.85] text-[#1A1A1A]/65">
                  {piece.story}
                </p>

                <Link
                  href={commissionHref(piece.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center font-sans text-[10px] uppercase tracking-[0.3em] text-[#AF944E] underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
                >
                  Commission a similar piece
                </Link>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
