import { PageIntro } from "@/components/layout/PageIntro";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Recent commissions — a discreet selection of rings, necklaces, earrings, bracelets, and hair ornaments released for public viewing. Many more remain private.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Recent commissions."
        description="A discreet selection of pieces released by our clients for public viewing. Many more remain unseen — a quiet body of work for collectors, executives and cultural figures who prefer their jewels stay private."
      />
      <PortfolioGallery />
    </>
  );
}
