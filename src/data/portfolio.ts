/** Filter keys — labels use Title Case in UI. */
export type PortfolioCategoryId =
  | "all"
  | "rings"
  | "necklaces"
  | "earrings"
  | "bracelets"
  | "hair-ornaments";

export type PortfolioCategorySlug = Exclude<PortfolioCategoryId, "all">;

export const PORTFOLIO_CATEGORY_FILTERS: Array<{
  id: PortfolioCategoryId;
  label: string;
}> = [
  { id: "all", label: "All" },
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings", label: "Earrings" },
  { id: "bracelets", label: "Bracelets" },
  { id: "hair-ornaments", label: "Hair Ornaments" },
];

export type PortfolioPiece = {
  slug: string;
  title: string;
  category: PortfolioCategorySlug;
  year: string;
  subtitle: string;
  carats: string;
  metal: string;
  cert: string;
  story: string;
  /** Local `/images/portfolio/...` (see `PORTFOLIO_COVER_SRC`). */
  imageSrc: string;
};

/**
 * Photography in `public/images/portfolio/`.
 * Filenames may include spaces — paths use `encodeURIComponent`.
 */
function portfolioFile(filename: string): string {
  return `/images/portfolio/${encodeURIComponent(filename)}`;
}

export const PORTFOLIO_COVER_SRC = {
  "the-rosalia": portfolioFile("The Rosalia.jpg"),
  "muzo-cathedral": portfolioFile("Muzo Cathedral.jpg"),
  "sangre-de-mogok": portfolioFile("Sangre de Mogok.jpg"),
  "ceylon-drops": portfolioFile("Ceylon Drops.jpg"),
  "ribbon-of-light": portfolioFile("Ribbon of Light.jpg"),
  "stella-tiara": portfolioFile("Stella Tiara.jpg"),
  celestine: portfolioFile("Celestine.jpg"),
} as const satisfies Record<PortfolioPiece["slug"], string>;

export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  {
    slug: "the-rosalia",
    title: "The Rosalía",
    category: "rings",
    year: "2025",
    subtitle: "Fancy Vivid Pink Diamond · Pavé White Diamonds",
    carats: "2.18 ct centre · 0.42 ct pavé",
    metal: "Platinum 950",
    cert: "GIA Argyle Pink Diamond Report",
    story:
      "An heirloom engagement ring built around a Fancy Vivid Pink from a closed Argyle parcel — sourced over fourteen months through three brokers in Hong Kong and Geneva.",
    imageSrc: PORTFOLIO_COVER_SRC["the-rosalia"],
  },
  {
    slug: "muzo-cathedral",
    title: "Muzo Cathedral",
    category: "rings",
    year: "2024",
    subtitle: "Old-Mine Muzo Emerald · Diamond Halo",
    carats: "3.41 ct centre · 0.78 ct halo",
    metal: "Platinum & 18k Yellow Gold",
    cert: "Gübelin Origin Report · Insignificant Treatment",
    story:
      "A cathedral-shoulder setting designed to throw maximum light through an exceptional old-mine Muzo. The gold under-gallery is a quiet nod to vintage Cartier pieces of the 1930s.",
    imageSrc: PORTFOLIO_COVER_SRC["muzo-cathedral"],
  },
  {
    slug: "sangre-de-mogok",
    title: "Sangre de Mogok",
    category: "necklaces",
    year: "2025",
    subtitle: "Pigeon Blood Burmese Ruby · Diamond Filigree",
    carats: "4.62 ct ruby · 3.1 ct diamonds",
    metal: "Platinum 950 · Blackened Rhodium",
    cert: "SSEF Pigeon Blood · Unheated · Mogok Origin",
    story:
      "Hand-pierced filigree, set with an unheated Mogok ruby of true Pigeon Blood saturation. Filigree was rebuilt twice to thin the wirework by 0.3mm — the difference between heavy and breath-light on the collarbone.",
    imageSrc: PORTFOLIO_COVER_SRC["sangre-de-mogok"],
  },
  {
    slug: "ceylon-drops",
    title: "Ceylon Drops",
    category: "earrings",
    year: "2024",
    subtitle: "Royal Blue Ceylon Sapphires · Brilliant Diamonds",
    carats: "5.08 ct sapphires · 2.4 ct diamonds",
    metal: "18k Yellow Gold",
    cert: "Gübelin Royal Blue · No Heat",
    story:
      "A pair commissioned for a couture-week front row. Selected from a six-stone Ceylon shortlist for matched velvet saturation across both stones — a rarer thing than the stones themselves.",
    imageSrc: PORTFOLIO_COVER_SRC["ceylon-drops"],
  },
  {
    slug: "ribbon-of-light",
    title: "Ribbon of Light",
    category: "bracelets",
    year: "2024",
    subtitle: "47 × Round Brilliant D-IF Diamonds",
    carats: "12.8 ct total",
    metal: "Platinum 950",
    cert: "GIA · D Color · Internally Flawless",
    story:
      "A tennis bracelet built only from D-IF Type IIa stones — every link individually graded, every prong hand-formed. Three months of stone matching for nine days of hand-setting.",
    imageSrc: PORTFOLIO_COVER_SRC["ribbon-of-light"],
  },
  {
    slug: "stella-tiara",
    title: "Stella Tiara",
    category: "hair-ornaments",
    year: "2023",
    subtitle: "Old-Mine Diamonds · Akoya Pearls",
    carats: "8.6 ct diamonds · 18 pearls",
    metal: "Platinum & 18k Rose Gold",
    cert: "Internally documented",
    story:
      "Inspired by Belle Époque convertible tiaras — converts into two brooches and a centre pendant, hidden mechanism cut from a single block of platinum.",
    imageSrc: PORTFOLIO_COVER_SRC["stella-tiara"],
  },
  {
    slug: "celestine",
    title: "Celestine",
    category: "hair-ornaments",
    year: "2025",
    subtitle: "Diamond & Sapphire Vine Comb",
    carats: "4.2 ct total",
    metal: "Platinum 950",
    cert: "GIA documented",
    story:
      "A diamond vine designed to follow the curvature of a low chignon — articulated across nine micro-hinges so the piece moves naturally with the head.",
    imageSrc: PORTFOLIO_COVER_SRC.celestine,
  },
];

export function portfolioPiecesInCategory(id: PortfolioCategoryId): PortfolioPiece[] {
  if (id === "all") return PORTFOLIO_PIECES;
  return PORTFOLIO_PIECES.filter((p) => p.category === id);
}
