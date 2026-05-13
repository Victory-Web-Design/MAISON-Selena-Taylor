import { PageIntro } from "@/components/layout/PageIntro";
import { SITE_ADDRESS, SITE_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Selena Taylor maison — Los Angeles atelier address, phone, and WhatsApp direct line.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Atelier"
        title="Contact — discreet lines for serious inquiries."
        description="Typically replies within the hour. Direct line to Selena."
      />

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <div className="border border-[#1A1A1A]/8 bg-[#FFFFFF] p-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#AF944E]">
            Address
          </p>
          <p className="mt-4 whitespace-pre-line font-serif text-2xl leading-snug text-[#1A1A1A]">
            {SITE_ADDRESS.full}
          </p>
        </div>

        <div className="border border-[#1A1A1A]/8 bg-[#FAFAFA] p-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#AF944E]">
            Phone / WhatsApp
          </p>
          <p className="mt-4 font-serif text-2xl text-[#1A1A1A]">{SITE_PHONE_DISPLAY}</p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#1A1A1A]/58">
            Typically replies within the hour. Direct line to Selena.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#FFFFFF] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
