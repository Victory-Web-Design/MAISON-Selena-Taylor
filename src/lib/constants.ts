/** Canonical origin for Open Graph / Twitter absolute URLs (no trailing slash). */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const withoutTrailingSlash = raw.replace(/\/$/, "");
  if (/^https?:\/\//i.test(withoutTrailingSlash)) {
    return withoutTrailingSlash;
  }
  return `https://${withoutTrailingSlash}`;
}

export const SITE_URL = getSiteUrl();

export const SITE_OG = {
  title: "Selena Taylor — Private Rare Stone Maison",
  description:
    "Rare stones. Private sourcing. Timeless creations. Beverly Hills private jewelry maison — by appointment.",
  imagePath: "/opengraph-image",
  imageAlt: "Selena Taylor — Private Rare Stone Maison",
  imageWidth: 1200,
  imageHeight: 630,
} as const;

/** All primary marketing CTAs open WhatsApp per creative brief. */
export const WHATSAPP_URL =
  "https://wa.me/15186067338?text=Hello%20Selena,%20I%20am%20interested%20in%20a%20private%20bespoke%20jewelry%20consultation.";

export const SITE_PHONE_DISPLAY = "+1 (518) 606-7338";
export const SITE_PHONE_E164 = "+15186067338";

export function whatsappWithMessage(message: string) {
  return `https://wa.me/15186067338?text=${encodeURIComponent(message)}`;
}

export const SITE_ADDRESS = {
  street: "640 S San Vicente Blvd, Ste 226",
  cityLine: "Los Angeles, CA 90048",
  full: "640 S San Vicente Blvd, Ste 226\nLos Angeles, CA 90048",
} as const;

export const NAV_LINKS = [
  { href: "/the-vault", label: "The Vault" },
  { href: "/bespoke-journey", label: "Bespoke Journey" },
  { href: "/rare-stones-archive", label: "Rare Stones Archive" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/education-journal", label: "Education Journal" },
  { href: "/heritage-network", label: "Heritage & Network" },
  { href: "/private-appointments", label: "Private Appointments" },
  { href: "/contact", label: "Contact" },
] as const;
