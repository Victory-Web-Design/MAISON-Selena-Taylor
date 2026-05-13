import { VAULT_COVER_IMAGES_ORDERED } from "@/lib/vault-category-covers";

/** Maison photography — files live under `public/images/` (paths are URL-encoded where noted). */
export const LOCAL_IMAGES = {
  hero: "/images/hero-maison-luxury.png",
  vaultEmeraldMacro: "/images/vault-emerald-macro.png",
  consultation: "/images/editorial-consultation.png",
} as const;

export const HERITAGE_IMAGES = {
  intro: "/images/heritage/heritage-intro.jpg",
  founder: "/images/heritage/heritage-founder.png",
  atelier: "/images/heritage/heritage-atelier.png",
  gemology: "/images/heritage/heritage-gemology.png",
  network: "/images/heritage/heritage-network.png",
  concierge: "/images/heritage/heritage-concierge.png",
} as const;

/** Same order as The Vault categories — see `vault-category-covers.ts`. */
export const VAULT_COVER_IMAGES = VAULT_COVER_IMAGES_ORDERED;

const BESPOKE_STEP_EXT = "png" as const;
export const BESPOKE_STEP_IMAGES = [
  `/images/bespoke-steps/01.${BESPOKE_STEP_EXT}`,
  `/images/bespoke-steps/02.${BESPOKE_STEP_EXT}`,
  `/images/bespoke-steps/03.${BESPOKE_STEP_EXT}`,
  `/images/bespoke-steps/04.${BESPOKE_STEP_EXT}`,
  `/images/bespoke-steps/05.${BESPOKE_STEP_EXT}`,
] as const;

/** Homepage hero cards / bands — each slot uses a **distinct** asset so the page does not repeat one photograph. */
export const IMG = {
  heroFallback: LOCAL_IMAGES.hero,
  homeVault: VAULT_COVER_IMAGES_ORDERED[0]!,
  homeBespoke: BESPOKE_STEP_IMAGES[0]!,
  /** Maison note full-bleed — vault macro mood, not the consultation still used above. */
  homeEditorial: VAULT_COVER_IMAGES_ORDERED[6]!,
  heritageFounder: HERITAGE_IMAGES.founder,
  bespoke: BESPOKE_STEP_IMAGES,
} as const;
