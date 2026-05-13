import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

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
  title: {
    default: "Selena Taylor — Private Rare Stone Maison",
    template: "%s · Selena Taylor",
  },
  description:
    "Beverly Hills private jewelry maison for investment-grade diamonds, unheated sapphires, Colombian emeralds, and bespoke high jewelry by appointment.",
  openGraph: {
    title: "Selena Taylor — Private Rare Stone Maison",
    description:
      "Rare stones. Private sourcing. Timeless creations. By private appointment.",
    type: "website",
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
