"use client";

import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu({ overDark }: { overDark: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border lg:hidden",
          overDark ? "border-white/28" : "border-[#1A1A1A]/10",
        )}
      >
        <span className={cn("h-px w-5", overDark ? "bg-[#FAFAFA]" : "bg-[#1A1A1A]")} />
        <span className={cn("h-px w-5", overDark ? "bg-[#FAFAFA]" : "bg-[#1A1A1A]")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[88px] z-40 max-h-[min(70vh,calc(100dvh-88px))] overflow-y-auto border-t border-[#1A1A1A]/6 bg-[#FFFFFF]/96 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-sans text-[11px] uppercase tracking-[0.26em] text-[#1A1A1A]/70"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full border border-[#1A1A1A]/12 bg-[#1A1A1A] px-5 py-3 text-center font-sans text-[10px] uppercase tracking-[0.28em] text-[#FFFFFF]"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  /** Home opens on a full-bleed dark hero; transparent header must use light ink. */
  const overDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-700",
        scrolled
          ? "border-b border-[#1A1A1A]/6 bg-[#FFFFFF]/78 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link
          href="/"
          className="group flex flex-col leading-tight tracking-[0.22em]"
        >
          <span
            className={cn(
              "font-serif text-[11px] uppercase transition-colors duration-500",
              overDarkHero
                ? "text-[#FAFAFA]/55 group-hover:text-[#FAFAFA]/78"
                : "text-[#1A1A1A]/55 group-hover:text-[#1A1A1A]/75",
            )}
          >
            Maison
          </span>
          <span
            className={cn(
              "font-serif text-lg transition-colors duration-500 md:text-xl",
              overDarkHero ? "text-[#FAFAFA]" : "text-[#1A1A1A]",
            )}
          >
            Selena Taylor
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-[11px] uppercase tracking-[0.26em] transition-colors duration-500",
                  overDarkHero
                    ? "text-[#FAFAFA]/60 hover:text-[#FAFAFA]"
                    : "text-[#1A1A1A]/55 hover:text-[#1A1A1A]",
                  active &&
                    (overDarkHero ? "text-[#FAFAFA]" : "text-[#1A1A1A]"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden rounded-full px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.28em] transition-[transform,box-shadow,background,border-color] duration-500 hover:-translate-y-px md:inline-flex",
              overDarkHero
                ? "border border-white/22 bg-[#FAFAFA] text-[#1A1A1A] hover:bg-[#FFFFFF] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
                : "border border-[#1A1A1A]/12 bg-[#1A1A1A] text-[#FFFFFF] hover:bg-[#111111]",
            )}
          >
            Book Consultation
          </a>

          <div className="lg:hidden">
            <MobileMenu key={`${pathname}-${scrolled}`} overDark={overDarkHero} />
          </div>
        </div>
      </div>
    </header>
  );
}
