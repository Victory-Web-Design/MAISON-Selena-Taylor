import { AppointmentsForm } from "@/components/appointments/AppointmentsForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { WHATSAPP_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Appointments",
  description:
    "Invitation-only consultations in Los Angeles — confidentiality-forward intake routed through WhatsApp.",
};

export default function PrivateAppointmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Invitation"
        title="Private appointments — time reserved like a gallery opening, not a sales slot."
        description="Concierge intake for collectors and families commissioning bespoke jewels or sourcing singular stones."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <AppointmentsForm />
      </div>

      <section className="border-t border-[#1A1A1A]/8 bg-[#FAFAFA] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="font-serif text-2xl text-[#1A1A1A]">Concierge messaging</p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#1A1A1A]/58">
            If your inquiry is time-sensitive, WhatsApp remains the fastest secure
            channel — Selena routes serious requests personally when available.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.32em] text-[#FFFFFF] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
          >
            WhatsApp Selena
          </a>
        </div>
      </section>
    </>
  );
}
