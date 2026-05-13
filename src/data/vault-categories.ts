import {
  VAULT_CATEGORY_COVER_IMAGE,
  type VaultCategoryCoverId,
} from "@/lib/vault-category-covers";

export type VaultCategory = {
  id: string;
  title: string;
  subtitle: string;
  macroGradient: string;
  coverImage: string;
  geology: string;
  optics: string;
  rarity: string;
  investment: string;
  certification: string;
  certificateCode: string;
};

const VAULT_CATEGORY_CORE: Array<Omit<VaultCategory, "coverImage">> = [
  {
    id: "fancy-color-diamonds",
    title: "Fancy Color Diamonds",
    subtitle: "Spectral rarity, institutional provenance.",
    macroGradient: "from-[#1b0a12] via-[#2a1018] to-[#12060c]",
    geology:
      "Natural fancy color diamonds crystallize in the cubic system with occasional plastic deformation and nitrogen/hydrogen aggregates producing blues, pinks, and violets. Structural anomalies during growth create localized color centers.",
    optics:
      "Face-up appearance is governed by hue, tone, saturation, and cutting architecture. Fancy cuts are often optimized for color retention rather than brilliance alone.",
    rarity:
      "Vivid and deeply saturated hues in larger sizes are extraordinarily scarce. Argyle pinks and certain blues exist at the edge of what the earth yields in a single generation.",
    investment:
      "Top-tier fancy colors have demonstrated long-horizon appreciation when accompanied by unimpeachable laboratory reports and clear provenance. Liquidity concentrates in masterpiece calibers.",
    certification:
      "GIA Fancy Color reports remain the benchmark for hue description and origin of color commentary. Auction houses pair these with independent gemological memos for collector markets.",
    certificateCode: "GIA · FANCY COLOR DIAMOND · 2145XXXXX",
  },
  {
    id: "colombian-emeralds",
    title: "Colombian Emeralds",
    subtitle: "Muzo-type chromophores, oiling disclosure discipline.",
    macroGradient: "from-[#04120d] via-[#0b2419] to-[#020806]",
    geology:
      "Colombian emeralds form in hydrothermal veins within black shale–limestone sequences. Chromium and vanadium substitution in the beryl lattice yields the classic saturated green.",
    optics:
      "Three-phase inclusions (‘jardin’) interact with light to create velvety depth. Top crystals balance transparency with a rich, even green without undue blackness.",
    rarity:
      "Fine Colombian emeralds over five carats with restrained treatment and high clarity are museum-grade objects. The geological window that produces them is narrow.",
    investment:
      "Historic price strength correlates with origin certainty, treatment level, and cutting quality. Colombian goods with transparent enhancement disclosure trade at a premium to ambiguous parcels.",
    certification:
      "SSEF, Gübelin, and AGL origin reports are paired with micro-imaging. Minor to moderate oiling is common; significance lies in disclosure and stability.",
    certificateCode: "SSEF · COLOMBIAN EMERALD · 128XXX",
  },
  {
    id: "royal-blue-sapphires",
    title: "Royal Blue Sapphires",
    subtitle: "Unheated preference, velvet saturation.",
    macroGradient: "from-[#050a1a] via-[#0c1630] to-[#02040b]",
    geology:
      "Corundum from metamorphic basins carries iron–titanium intervalence charge transfer and trace elements that shape blue saturation. Classic locales include Kashmir-type aesthetics from varied deposits.",
    optics:
      "Royal blue is a trade color descriptor denoting deep, vivid blue without excessive darkness. Crystals with even color distribution and high transparency command collector attention.",
    rarity:
      "Unheated royal blue sapphires in significant sizes are statistically rare. Heat-only versus no-heat distinctions materially affect value curves.",
    investment:
      "Unheated goods with stable pricing history and strong lab opinions are treated as long-duration assets. Heated material trades on beauty with different liquidity profiles.",
    certification:
      "Gübelin, SSEF, and GIA reports address heat indication and geographic origin when determinable. Photomicrography supports stability of opinion over time.",
    certificateCode: "GÜBELIN · SAPPHIRE · 2209XXXX",
  },
  {
    id: "burmese-rubies",
    title: "Burmese Rubies",
    subtitle: "Pigeon’s blood mythos, chromium dominance.",
    macroGradient: "from-[#1a0408] via-[#2f0a12] to-[#0a0204]",
    geology:
      "Marble-hosted ruby from Mogok and related belts forms under specific pressure–temperature paths with chromium-rich fluids. Needles and crystals create silk that can improve face-up color.",
    optics:
      "Strong fluorescence under daylight-equivalent sources can lift apparent saturation. Cutting orientation is critical to minimize extinction zones.",
    rarity:
      "Fine unheated Burmese rubies above three carats are legendary objects. Sanctions and ethical sourcing layers add institutional complexity.",
    investment:
      "Top Burmese rubies with legal provenance and matching reports are auction staples. Investment theses hinge on origin strength, treatment absence, and cutting.",
    certification:
      "Laboratories comment on origin probability and heat indication. Gübelin/SSEF nomenclature for ‘pigeon’s blood’ is tightly defined.",
    certificateCode: "SSEF · RUBY · 11XXXX",
  },
  {
    id: "jadeite-jade",
    title: "Jadeite Jade",
    subtitle: "Imperial green, translucency, tactile polish.",
    macroGradient: "from-[#041104] via-[#0f220f] to-[#020602]",
    geology:
      "Jadeite is a pyroxene aggregate; imperial color arises from chromium in microstructurally tight intergrowths. Fine texture enables a watery, even glow.",
    optics:
      "Quality is judged on color, translucency, texture, cut, and sometimes size of hololith objects. Surface polish quality signals craftsmanship.",
    rarity:
      "Imperial jadeite bangles and hololiths of homogeneous color are culturally irreplaceable and geologically constrained.",
    investment:
      "Asian collector markets anchor liquidity. Long-term performance favors verified natural Type A jadeite with stable color.",
    certification:
      "HK laboratories and major auction gem departments issue jadeite testing certificates clarifying polymer impregnation status.",
    certificateCode: "HKJSL · JADEITE JADE · J-XXXXX",
  },
  {
    id: "paraiba-tourmaline",
    title: "Paraiba Tourmaline",
    subtitle: "Copper-induced neon, electric rarity.",
    macroGradient: "from-[#02121a] via-[#052a32] to-[#01080c]",
    geology:
      "Copper-bearing tourmaline from select pegmatites exhibits neon blue–green hues. Brazilian and African sources differ in tone but can reach Paraiba-type trade descriptions when criteria align.",
    optics:
      "Low tone and high saturation create ‘electric’ appearance. Inclusions are common; cutting maximizes open color while preserving weight.",
    rarity:
      "Clean stones in strong neon hues are scarcer than most fancy colors at equivalent carat thresholds.",
    investment:
      "Market leadership follows laboratory confirmation of copper content and geographic opinion where possible. Collector demand is global.",
    certification:
      "GIA and Gübelin reports may note copper-related absorption features. Origin opinions vary by deposit chemistry.",
    certificateCode: "GIA · PARAIBA-TYPE TOURMALINE · 219XXXXX",
  },
  {
    id: "alexandrite",
    title: "Alexandrite",
    subtitle: "Pleochroism and daylight-to-incandescent shift.",
    macroGradient: "from-[#0a1208] via-[#142414] to-[#050805]",
    geology:
      "Chrysoberyl with chromium in specific crystal fields exhibits color change. Classic Russian material is historic; fine modern goods come from Brazil, Sri Lanka, and East Africa.",
    optics:
      "Strong change across daylight and warm light with limited brown secondary hues defines investment grade. Cutting must balance pleochroic axes.",
    rarity:
      "True strong-change alexandrite in clean, sizable cuts is one of gemology’s rarest regularities.",
    investment:
      "Price curves reward pronounced color change and reputable origin narratives. Stability of enhancement status is essential.",
    certification:
      "GIA and AGL describe color-change phenomena and comment on treatment probability when determinable.",
    certificateCode: "GIA · ALEXANDRITE · 110XXXXX",
  },
  {
    id: "spinel",
    title: "Spinel",
    subtitle: "Vivid reds and cobalt blues, collector renaissance.",
    macroGradient: "from-[#120818] via-[#1c1028] to-[#07040c]",
    geology:
      "Spinel forms in marbles and placers. Cobalt-blue spinels and vivid ‘Jedi’ reds from select locales have reframed market ceilings.",
    optics:
      "High refractive index and single refraction yield crisp luster. Clean crystals are uncommon; clarity expectations differ by hue family.",
    rarity:
      "Fine cobalt spinels and large unheated vivid reds are boutique-level objects with thin supply.",
    investment:
      "Institutional interest has risen with improved origin science. Provenance and treatment transparency drive bids.",
    certification:
      "Gübelin and SSEF origin reports for key localities carry weight. Cobalt-related commentary is material for blues.",
    certificateCode: "GÜBELIN · SPINEL · 2301XXXX",
  },
  {
    id: "opal",
    title: "Opal",
    subtitle: "Play-of-color physics, hydration discipline.",
    macroGradient: "from-[#0a0814] via-[#14102a] to-[#04030a]",
    geology:
      "Precious opal consists of silica spheres producing diffraction. Black opal from Lightning Ridge and select fields commands top tiers.",
    optics:
      "Brightness, pattern, body tone, and coverage define face-up beauty. Stability and humidity management matter for long-term ownership.",
    rarity:
      "Harlequin patterns on N1 body tone with broad flash are statistical outliers.",
    investment:
      "Collectors seek stable, untreated goods with conservative cutting. Market depth is narrower than corundum but passionate.",
    certification:
      "Laboratories confirm natural versus assembled opal and note treatments such as sugar/acid or smoking when present.",
    certificateCode: "GIA · OPAL · 219XXXXX",
  },
  {
    id: "pearls",
    title: "Pearls",
    subtitle: "Luster, surface, matching, and provenance.",
    macroGradient: "from-[#101010] via-[#1a1a1a] to-[#080808]",
    geology:
      "Natural and cultured pearls are layered nacre secretions. Saltwater Akoya, South Sea, Tahitian, and natural specimens occupy distinct rarity bands.",
    optics:
      "Luster depth, orient, surface cleanliness, and shape symmetry drive value. Strand matching is an art as much as a science.",
    rarity:
      "Historic natural pearl strands with documented provenance are auction icons. Fine single naturals remain apex objects.",
    investment:
      "Natural pearls with X-ray and advanced lab confirmation sustain premium multiples. Cultured goods trade on design and brand execution.",
    certification:
      "SSEF and GIA pearl reports distinguish natural from cultured and describe treatments such as bleaching or dyeing.",
    certificateCode: "SSEF · PEARL · PE-XXXXX",
  },
];

export const VAULT_CATEGORIES: VaultCategory[] = VAULT_CATEGORY_CORE.map(
  (entry) => ({
    ...entry,
    coverImage:
      VAULT_CATEGORY_COVER_IMAGE[entry.id as VaultCategoryCoverId],
  }),
);
