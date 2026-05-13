"use client";

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
