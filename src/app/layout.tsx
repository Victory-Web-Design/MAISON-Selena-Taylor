import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { SITE_OG, SITE_URL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_OG.title,
    template: "%s · Selena Taylor",
  },
  description:
    "Beverly Hills private jewelry maison for investment-grade diamonds, unheated sapphires, Colombian emeralds, and bespoke high jewelry by appointment.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_OG.title,
    description: SITE_OG.description,
    url: "/",
    siteName: "Selena Taylor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_OG.imagePath,
        width: SITE_OG.imageWidth,
        height: SITE_OG.imageHeight,
        alt: SITE_OG.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_OG.title,
    description: SITE_OG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#FFFFFF] font-sans text-[#1A1A1A]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
