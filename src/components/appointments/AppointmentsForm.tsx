"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { WHATSAPP_URL, whatsappWithMessage } from "@/lib/constants";
import { useState } from "react";

export function AppointmentsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [intent, setIntent] = useState("");
  const [timing, setTiming] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      "Hello Selena,",
      "",
      "I would like to request a private appointment.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `City / timezone: ${city}`,
      `Intent: ${intent}`,
      `Preferred timing: ${timing}`,
    ].join("\n");
    window.open(whatsappWithMessage(text), "_blank", "noopener,noreferrer");
  }

  return (
    <SectionReveal>
      <form
        onSubmit={submit}
        className="mx-auto max-w-[820px] space-y-8 border border-[#1A1A1A]/8 bg-[#FFFFFF] p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block space-y-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45">
              Full name
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#1A1A1A]/12 bg-[#FAFAFA] px-4 py-3 font-sans text-sm text-[#1A1A1A] outline-none transition-[border,box-shadow] focus:border-[#AF944E]/55 focus:ring-1 focus:ring-[#AF944E]/25"
            />
          </label>
          <label className="block space-y-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45">
              Email
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#1A1A1A]/12 bg-[#FAFAFA] px-4 py-3 font-sans text-sm text-[#1A1A1A] outline-none transition-[border,box-shadow] focus:border-[#AF944E]/55 focus:ring-1 focus:ring-[#AF944E]/25"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45">
            City / timezone
          </span>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-[#1A1A1A]/12 bg-[#FAFAFA] px-4 py-3 font-sans text-sm text-[#1A1A1A] outline-none transition-[border,box-shadow] focus:border-[#AF944E]/55 focus:ring-1 focus:ring-[#AF944E]/25"
          />
        </label>

        <label className="block space-y-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45">
            Intent
          </span>
          <textarea
            required
            rows={4}
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            className="w-full border border-[#1A1A1A]/12 bg-[#FAFAFA] px-4 py-3 font-sans text-sm leading-relaxed text-[#1A1A1A] outline-none transition-[border,box-shadow] focus:border-[#AF944E]/55 focus:ring-1 focus:ring-[#AF944E]/25"
            placeholder="Stone families, occasion, discretion requirements…"
          />
        </label>

        <label className="block space-y-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45">
            Preferred timing
          </span>
          <textarea
            rows={3}
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            className="w-full border border-[#1A1A1A]/12 bg-[#FAFAFA] px-4 py-3 font-sans text-sm leading-relaxed text-[#1A1A1A] outline-none transition-[border,box-shadow] focus:border-[#AF944E]/55 focus:ring-1 focus:ring-[#AF944E]/25"
            placeholder="Windows that respect travel and privacy…"
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-[#1A1A1A]/8 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-sans text-xs leading-relaxed text-[#1A1A1A]/50">
            Confidentiality: information submitted is treated as private client
            correspondence. Nothing here constitutes a transaction offer — only an
            invitation routing request.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-7 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#FFFFFF] transition-[transform,box-shadow] duration-500 hover:-translate-y-px hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
            >
              Send via WhatsApp
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/14 px-7 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] transition-[background] duration-500 hover:bg-[#FAFAFA]"
            >
              Open direct line
            </a>
          </div>
        </div>
      </form>
    </SectionReveal>
  );
}
