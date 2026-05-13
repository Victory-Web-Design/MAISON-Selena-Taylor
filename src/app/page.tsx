import { CinematicHero } from "@/components/home/CinematicHero";
import { GemCredentialsSection } from "@/components/home/GemCredentialsSection";
import { HomeDestinationCards } from "@/components/home/HomeDestinationCards";
import { HomeEditorialReveal } from "@/components/home/HomeEditorialReveal";
import { HomeMaisonNote } from "@/components/home/HomeMaisonNote";
import { WhatsAppCtaBand } from "@/components/layout/PageIntro";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { LuxuryMediaReveal } from "@/components/ui/LuxuryMediaReveal";
import { HERITAGE_IMAGES } from "@/lib/site-images";
import { WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <GemCredentialsSection />

      <HomeEditorialReveal />

      <HomeDestinationCards />

      <HomeMaisonNote />

      <WhatsAppCtaBand />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <SectionReveal delay={0.05}>
          <div className="grid gap-0 overflow-hidden border border-[#1A1A1A]/8 bg-[#FAFAFA] md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-10 text-center md:p-12 md:text-left">
              <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#1A1A1A]/45">
                Concierge
              </p>
              <p className="mt-4 font-serif text-3xl text-[#1A1A1A]">Private appointments</p>
              <p className="mx-auto mt-3 max-w-2xl font-sans text-sm leading-relaxed text-[#1A1A1A]/55 md:mx-0">
                Los Angeles atelier — by invitation. Begin your conversation on WhatsApp
                for same-day routing to Selena when available.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-8 inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#FFFFFF] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)] md:mx-0"
              >
                Book Private Consultation
              </a>
            </div>
            <div className="relative min-h-[240px] border-t border-[#1A1A1A]/8 md:min-h-[320px] md:border-l md:border-t-0">
              <LuxuryMediaReveal direction="up" className="absolute inset-0 h-full w-full md:static md:min-h-[320px]">
                <Image
                  src={HERITAGE_IMAGES.concierge}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,40vw"
                />
              </LuxuryMediaReveal>
            </div>
          </div>
        </SectionReveal>
      </div>
    </>
  );
}
