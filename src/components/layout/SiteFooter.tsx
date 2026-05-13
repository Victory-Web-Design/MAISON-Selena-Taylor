import { NAV_LINKS, SITE_ADDRESS, WHATSAPP_URL } from "@/lib/constants";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1A1A1A]/8 bg-[#FFFFFF]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div className="space-y-6">
          <div>
            <p className="font-serif text-2xl text-[#1A1A1A]">Selena Taylor</p>
            <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-[#1A1A1A]/55">
              Beverly Hills private rare stone maison — investment-grade
              diamonds, unheated sapphires, Colombian emeralds, and bespoke fine
              jewelry by private appointment.
            </p>
          </div>
          <div className="space-y-1 font-sans text-xs uppercase tracking-[0.22em] text-[#1A1A1A]/45">
            <p>{SITE_ADDRESS.street}</p>
            <p>{SITE_ADDRESS.cityLine}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
              Maison
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#1A1A1A]/60 transition-colors duration-500 hover:text-[#1A1A1A]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
              Concierge
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.slice(5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#1A1A1A]/60 transition-colors duration-500 hover:text-[#1A1A1A]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#1A1A1A]/40">
              Direct Line
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-serif text-lg text-[#AF944E] transition-opacity duration-500 hover:opacity-80"
            >
              WhatsApp
            </a>
            <p className="mt-3 font-sans text-xs leading-relaxed text-[#1A1A1A]/50">
              Typically replies within the hour. Direct line to Selena.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1A1A1A]/6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 font-sans text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/38 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Selena Taylor. All rights reserved.</p>
          <p>Private advisory. By appointment.</p>
        </div>
      </div>
    </footer>
  );
}
