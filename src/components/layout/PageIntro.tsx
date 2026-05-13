import { SectionReveal } from "@/components/ui/SectionReveal";
import { WHATSAPP_URL } from "@/lib/constants";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function PageIntro({ eyebrow, title, description, dark }: Props) {
  return (
    <SectionReveal>
      <header
        className={
          dark
            ? "border-b border-white/10 bg-[#050505] px-6 pb-20 pt-28 text-[#FAFAFA] md:px-10 md:pb-28 md:pt-32"
            : "border-b border-[#1A1A1A]/8 bg-[#FFFFFF] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-32"
        }
      >
        <p
          className={
            dark
              ? "font-sans text-[10px] uppercase tracking-[0.38em] text-[#AF944E]/90"
              : "font-sans text-[10px] uppercase tracking-[0.38em] text-[#AF944E]"
          }
        >
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.02em]">
          {title}
        </h1>
        {description && (
          <p
            className={
              dark
                ? "mt-6 max-w-2xl font-sans text-sm leading-relaxed text-[#D6D6D6]/78 md:text-base"
                : "mt-6 max-w-2xl font-sans text-sm leading-relaxed text-[#1A1A1A]/58 md:text-base"
            }
          >
            {description}
          </p>
        )}
      </header>
    </SectionReveal>
  );
}

export function EditorialBand({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "bg-[#050505] px-6 py-20 text-[#FAFAFA] md:px-10 md:py-24"
          : "bg-[#FFFFFF] px-6 py-20 md:px-10 md:py-24"
      }
    >
      {children}
    </div>
  );
}

export function WhatsAppCtaBand() {
  return (
    <SectionReveal>
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 border-y border-[#1A1A1A]/8 bg-[#FAFAFA] px-6 py-14 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-serif text-2xl text-[#1A1A1A]">Private consultation</p>
          <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-[#1A1A1A]/55">
            Begin on WhatsApp — the maison’s preferred channel for discreet sourcing
            conversations and appointment coordination.
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#FFFFFF] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
        >
          Message Selena
        </a>
      </div>
    </SectionReveal>
  );
}
