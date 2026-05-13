import { PageIntro } from "@/components/layout/PageIntro";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getArticleBySlug, JOURNAL_ARTICLES } from "@/data/journal";
import { VAULT_CATEGORIES } from "@/data/vault-categories";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Journal" };
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const vaultCategory = article.vaultCategoryId
    ? VAULT_CATEGORIES.find((c) => c.id === article.vaultCategoryId)
    : undefined;

  return (
    <>
      <PageIntro eyebrow="Education journal" title={article.title} description={article.dek} />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative mt-[-1px] h-56 w-full overflow-hidden border-x border-b border-[#1A1A1A]/8 md:h-72">
          <Image
            src={article.coverImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px)100vw,1400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/85 via-transparent to-transparent md:from-[#FAFAFA]/50" />
        </div>
      </div>

      <article className="mx-auto max-w-[820px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-6 border-b border-[#1A1A1A]/8 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#AF944E]">
              {article.pillar}
            </p>
            <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/45">
              {article.readTime} · Maison memorandum
            </p>
            {vaultCategory ? (
              <p className="mt-4 max-w-md font-sans text-xs leading-relaxed text-[#1A1A1A]/52">
                Mirrors the archive entry for{" "}
                <Link href="/the-vault" className="text-[#AF944E] underline-offset-2 hover:underline">
                  {vaultCategory.title}
                </Link>
                {" — "}
                {vaultCategory.subtitle}
              </p>
            ) : null}
          </div>
          <Link
            href="/education-journal"
            className="shrink-0 self-start font-sans text-[10px] uppercase tracking-[0.28em] text-[#AF944E] hover:opacity-80"
          >
            Index
          </Link>
        </div>

        <div className="mt-14 space-y-16">
          {article.sections.map((s, idx) => (
            <SectionReveal key={s.heading}>
              <div className="flex gap-6">
                <span
                  className="mt-1 hidden shrink-0 font-serif text-2xl leading-none text-[#1A1A1A]/12 sm:block"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-2xl text-[#1A1A1A]">{s.heading}</h2>
                  <p className="mt-5 font-sans text-sm leading-[1.9] text-[#1A1A1A]/68">{s.body}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </article>
    </>
  );
}
