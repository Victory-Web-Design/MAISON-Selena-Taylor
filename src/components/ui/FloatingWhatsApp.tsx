"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Selena Taylor on WhatsApp"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-[#AF944E]/40 bg-[#1A1A1A] text-[#AF944E] shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)] md:bottom-10 md:right-10"
    >
      <span className="sr-only">WhatsApp</span>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.003 3C9.374 3 4 8.269 4 14.796c0 2.43.793 4.683 2.137 6.54L4.03 29l8.013-2.095A11.86 11.86 0 0016.003 27C22.632 27 28 21.731 28 15.204 28 8.677 22.632 3 16.003 3zm0 21.428a9.35 9.35 0 01-4.77-1.3l-.34-.202-4.94 1.29 1.32-4.81-.223-.35a9.37 9.37 0 01-1.44-5.06c0-5.18 4.22-9.395 9.417-9.395 5.197 0 9.417 4.215 9.417 9.395s-4.22 9.395-9.417 9.395zm5.45-6.73c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.53.07-.81.34-.27.27-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </motion.a>
  );
}
