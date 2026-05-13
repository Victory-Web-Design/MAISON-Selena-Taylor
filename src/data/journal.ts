import { LOCAL_IMAGES, VAULT_COVER_IMAGES } from "@/lib/site-images";

export type JournalArticle = {
  slug: string;
  title: string;
  dek: string;
  readTime: string;
  coverImage: string;
  /** Short line for index cards — e.g. "The Vault" or "Laboratory practice". */
  pillar: string;
  /** When set, article detail can link to the matching row in The Vault. */
  vaultCategoryId?: string;
  sections: { heading: string; body: string }[];
};

const LAB_COVER = LOCAL_IMAGES.consultation;

const JOURNAL_RAW: JournalArticle[] = [
  {
    slug: "fancy-color-diamonds",
    title: "Fancy color diamonds — hue architecture and auction liquidity",
    dek: "Beyond D–Z: how laboratories describe color, why cutting defends saturation, and how institutional buyers underwrite rarity.",
    readTime: "12 min",
    coverImage: VAULT_COVER_IMAGES[0]!,
    pillar: "The Vault",
    vaultCategoryId: "fancy-color-diamonds",
    sections: [
      {
        heading: "Laboratory vocabulary (GIA Fancy Color and peers)",
        body: "Fancy-color reports isolate hue, tone, and saturation with a different intent than the colorless scale. Evenness of distribution, modifier strength (e.g. purplish pink versus pink), and origin-of-color statements when offered are the scaffolding serious desks use before capital is committed. Treat the grade line as a summary; the narrative lives in comments, diagrams, and any appendix imaging.",
      },
      {
        heading: "Optics and cutting discipline",
        body: "Face-up beauty is often a negotiation between brilliance and color retention. Many masterpiece fancy shapes sacrifice classical light return to keep depth of tone across the crown. Loupe work at controlled angles, paired with face-up moves under daylight-equivalent and warmer sources, reveals whether the architecture is defending the certificate story or fighting it.",
      },
      {
        heading: "Rarity bands and market structure",
        body: "Vivid and deeply saturated hues in larger sizes occupy thin supply curves. Pinks and blues with unbroken provenance and repeat laboratory opinions attract global auction and private-placement competition. Liquidity concentrates at the top; mid-market goods trade on design and wearability rather than pure spectral scarcity.",
      },
      {
        heading: "Collector posture",
        body: "We prefer stones where microscopic character, treatment absence or disclosure, and report language align without contradiction. When opinions diverge between major laboratories, the memorandum is not to average them — it is to understand what each method is sensitive to, then decide whether the risk belongs in a generational sleeve or a discretionary position.",
      },
    ],
  },
  {
    slug: "colombian-emeralds",
    title: "Colombian emeralds — Muzo-type color, jardin, and treatment literacy",
    dek: "Three-phase inclusions, oiling disclosure bands, and why origin science from Gübelin, SSEF, or AGL is paired with imaging rather than read in isolation.",
    readTime: "13 min",
    coverImage: VAULT_COVER_IMAGES[1]!,
    pillar: "The Vault",
    vaultCategoryId: "colombian-emeralds",
    sections: [
      {
        heading: "Geological signature and the ‘garden’",
        body: "Classic Colombian material crystallizes in hydrothermal veins where chromium and vanadium paint the beryl lattice. Visible three-phase inclusions are not merely clarity events — they scatter light in ways that can deepen apparent color when transparency is still high. The institutional question is whether the garden enhances depth or tips into opacity that breaks price continuity.",
      },
      {
        heading: "Enhancement disclosure (oiling, resin, and stability)",
        body: "Minor to moderate traditional oiling remains common; the material point is degree, stability, and honest disclosure relative to price. Resins and other fillers occupy different risk bands and liquidity profiles. A certificate line without context is insufficient — we read degree, methodology where stated, and any stability notes in concert with condition checks.",
      },
      {
        heading: "Origin opinion and multi-lab dialogue",
        body: "Chemistry, inclusion suites, and growth structures allow strong origin probability when laboratories agree on methodology. For stones anchoring portfolios, we often commission complementary opinions or updated imaging when treatment or wear could have shifted since the last report. The goal is a file that survives scrutiny in five and fifteen years, not only at purchase.",
      },
      {
        heading: "Investment framing",
        body: "Fine Colombian emeralds with restrained enhancement and high clarity in larger sizes are genuinely scarce. Value curves reward origin certainty, conservative treatment, and cutting that preserves weight without surrendering even color. We underwrite to the same standard we apply in The Vault: geology, optics, rarity, certification, and provenance as a single sentence.",
      },
    ],
  },
  {
    slug: "royal-blue-sapphires",
    title: "Royal blue sapphire — trade color, heat indication, and unheated scarcity",
    dek: "Why ‘royal blue’ is a face-up trade descriptor, how major labs approach heat and geography, and what unheated scarcity means for long-duration sleeves.",
    readTime: "11 min",
    coverImage: VAULT_COVER_IMAGES[2]!,
    pillar: "The Vault",
    vaultCategoryId: "royal-blue-sapphires",
    sections: [
      {
        heading: "Defining royal blue in institutional language",
        body: "Royal blue denotes a deep, vivid blue without excessive darkness — a trade color anchored in face-up behavior under agreed lighting, not a single wavelength on a plot. Even color distribution, controlled extinction in the cut, and high transparency separate investment-grade examples from commercial saturation that reads well only in narrow environments.",
      },
      {
        heading: "Heat treatment and disclosure ethics",
        body: "Traditional heating can improve color and clarity by modifying rutile silk and zoning. It is an accepted practice across much of the market; disclosure is the ethical floor. Laboratories indicate heat when evidence supports it. Absence of indication is not always proof of no heat historically — which is why repeat opinion from reputable labs, micro-imaging, and stable provenance matter for unheated claims at meaningful size.",
      },
      {
        heading: "Geographic opinion when determinable",
        body: "Gübelin, SSEF, and GIA may comment on geographic origin when inclusion chemistry and growth structures align with reference databases. Origin adds narrative and sometimes liquidity; it should never replace cut quality, stability checks, and treatment clarity. We read geographic lines as conditional probabilities, not talismans.",
      },
      {
        heading: "Collector and allocation posture",
        body: "Unheated royal blue sapphires in strong sizes occupy a different rarity tier than heated goods of similar face-up beauty. That does not make every unheated stone superior — it makes the cohort smaller and the underwriting harder. Maison practice pairs laboratory language with hands-on cinema: silk behavior, color zoning, and fluorescence response under controlled sources.",
      },
    ],
  },
  {
    slug: "burmese-rubies",
    title: "Burmese ruby — marble hosts, silk, fluorescence, and compliance-aware provenance",
    dek: "From Mogok-type geology to ‘pigeon’s blood’ nomenclature: how chromium drives color, why legality and sanctions layers now shape bids, and how laboratories comment on heat.",
    readTime: "12 min",
    coverImage: VAULT_COVER_IMAGES[3]!,
    pillar: "The Vault",
    vaultCategoryId: "burmese-rubies",
    sections: [
      {
        heading: "Geology and optical lift",
        body: "Classic marble-hosted ruby from Myanmar’s belts forms under pressure–temperature paths that concentrate chromium. Rutile needles and crystal inclusions can create ‘silk’ that, in the right density, improves face-up color by scattering light. Strong fluorescence under daylight-equivalent sources can lift apparent saturation — a signature collectors learn to see rather than over-read on paper alone.",
      },
      {
        heading: "Laboratory language (origin and heat)",
        body: "Gübelin and SSEF apply tightly bounded trade color terms such as pigeon’s blood only when hue, tone, and saturation thresholds align. Origin opinions are probability statements grounded in inclusion suites and chemistry. Heat indication follows evidence rules similar to sapphire — unheated goods in fine red at meaningful size are statistically rare and attract premium underwriting when provenance is clean.",
      },
      {
        heading: "Ethical sourcing and institutional compliance",
        body: "Sanctions, import rules, and internal compliance policies materially affect which Burmese-origin goods can trade in which jurisdictions. Auction houses and private banks increasingly require documentary chains that survive legal review, not only gemological opinion. We treat provenance as a first-class risk layer alongside clarity of treatment and cut quality.",
      },
      {
        heading: "Portfolio role",
        body: "Top Burmese rubies with legal chains and matching major-laboratory files remain auction staples. Liquidity is concentrated at masterpiece caliber; mid-market goods require sharper relative-value work. The memorandum standard is simple: if the file cannot travel across borders and counterparties without friction, the stone is not priced for institutional sleep.",
      },
    ],
  },
  {
    slug: "jadeite-jade",
    title: "Jadeite jade — imperial color, texture, Type A disclosure, and hololith discipline",
    dek: "Why ‘water’ and grain matter as much as hue, how HK and regional labs clarify polymer impregnation, and what collectors pay for in hololiths and bangles.",
    readTime: "11 min",
    coverImage: VAULT_COVER_IMAGES[4]!,
    pillar: "The Vault",
    vaultCategoryId: "jadeite-jade",
    sections: [
      {
        heading: "Material science in collector terms",
        body: "Jadeite is a pyroxene aggregate; imperial green arises where chromium sits in tight, fine-grained intergrowths that allow an even, ‘watery’ glow. Texture — the fineness of crystallite packing — is as important as chromophore concentration. Coarse grain can carry strong color yet fail the tactile and optical tests serious jade desks apply.",
      },
      {
        heading: "Type A, B, C and laboratory naming",
        body: "Regional certificates distinguish natural Type A jadeite from polymer-impregnated or dyed materials using FTIR and other methods. The investment boundary is not snobbery about treatment categories — it is transparency, stability over time, and how price was set relative to disclosure. We read polymer lines with the same attention given to oiling degree on emeralds.",
      },
      {
        heading: "Hololiths, bangles, and carving economics",
        body: "Homogeneous imperial color in large hololiths and high-translucency bangles sits at the intersection of geology and carving yield. Waste factors are severe; a single fracture can erase years of sourcing. That is why homogeneous pieces with verified natural status trade at non-linear premiums to loose goods of similar face-up color.",
      },
      {
        heading: "Market liquidity",
        body: "Asian collector markets anchor depth, but global institutional interest has risen as certificates internationalize. Long-duration performance favors conservative disclosure, stable color, and craftsmanship that respects the stone’s natural grain rather than fighting it with excessive surface compensation.",
      },
    ],
  },
  {
    slug: "paraiba-tourmaline",
    title: "Paraíba-type tourmaline — copper chromophore, neon optics, and geographic attribution",
    dek: "Low tone with electric saturation, inclusion tolerance, and how GIA or Gübelin commentary on copper-related features interacts with origin opinions across Brazil and Africa.",
    readTime: "10 min",
    coverImage: VAULT_COVER_IMAGES[5]!,
    pillar: "The Vault",
    vaultCategoryId: "paraiba-tourmaline",
    sections: [
      {
        heading: "Color mechanism",
        body: "Copper (and sometimes manganese) in tourmaline structure produces the neon blue–green hues collectors describe as ‘electric.’ The visual effect is highly tone-sensitive: too much darkness kills the open color; too little saturation reads pastel rather than vivid. Laboratories may confirm copper-related absorption features; that confirmation is material to price even when geographic origin remains debated.",
      },
      {
        heading: "Brazilian versus African deposits",
        body: "Historic Brazilian material set the aesthetic reference, but African pegmatites can yield Paraíba-type goods when chemistry and appearance align with trade definitions. Origin opinions vary by inclusion suites and trace-element profiles. We treat geographic lines as conditional and pair them with copper commentary and face-up behavior under multiple light temperatures.",
      },
      {
        heading: "Clarity expectations and cutting",
        body: "Clean crystals in strong neon hues are scarcer than many fancy colors at equivalent carat thresholds. Cutting often preserves weight while managing open color windows; heavy windows or poor orientation waste copper’s advantage. Loupe work focuses on treatment indicators and stability risks rather than chasing diamond-like clarity norms.",
      },
      {
        heading: "Allocation discipline",
        body: "Collector demand is global, but supply is boutique. We prefer files where copper-related laboratory language, stable enhancement status, and cutting intent align. When origin and copper commentary diverge between updates, the underwriting task is to decide whether the stone still clears the bar for long holding periods.",
      },
    ],
  },
  {
    slug: "alexandrite",
    title: "Alexandrite — color change, pleochroism, and cutting across optical axes",
    dek: "From classic Russian lore to modern Brazil, Sri Lanka, and East Africa: how strong daylight-to-incandescent shift is graded in practice and why brown secondary hues matter.",
    readTime: "10 min",
    coverImage: VAULT_COVER_IMAGES[6]!,
    pillar: "The Vault",
    vaultCategoryId: "alexandrite",
    sections: [
      {
        heading: "Phenomenon and definition",
        body: "Alexandrite is chromium-bearing chrysoberyl exhibiting pronounced color change between daylight-equivalent and incandescent sources. Investment grade demands a clean separation of hues with limited brown or gray secondary components. The phenomenon is axis-sensitive; careless orientation can mute the effect even when rough was promising.",
      },
      {
        heading: "Laboratory descriptions",
        body: "GIA and AGL describe color-change strength, hue pairs, and treatment probability when determinable. Reports are not substitutes for observing the stone under standardized sources in person — fluorescence, transmission windows, and pleochroic bleed can shift apparent behavior relative to still photography.",
      },
      {
        heading: "Origin narratives and rarity",
        body: "Historic Russian material is culturally iconic but rarely traded at scale today. Fine modern goods from select localities can show stronger change than mediocre classic pieces. Rarity is therefore tied to phenomenon quality and clarity at size, not only to postal codes on old invoices.",
      },
      {
        heading: "Collector checklist",
        body: "We prioritize pronounced change, conservative treatment status, and cutting that respects pleochroic axes. For bespoke settings, we also review durability considerations — chrysoberyl is tough, but thin girdles and high crowns require protective design choices.",
      },
    ],
  },
  {
    slug: "spinel",
    title: "Spinel — cobalt blues, vivid reds, marble provenance, and the collector renaissance",
    dek: "Single refraction and high luster, Jedi reds, cobalt blues, and why Gübelin or SSEF origin lines moved market ceilings as science improved.",
    readTime: "10 min",
    coverImage: VAULT_COVER_IMAGES[7]!,
    pillar: "The Vault",
    vaultCategoryId: "spinel",
    sections: [
      {
        heading: "Optics and clarity culture",
        body: "Spinel’s high refractive index and lack of double refraction yield crisp luster that reads ‘clean’ even when inclusions are present under magnification. Clarity expectations differ by hue family: vivid reds and cobalt blues often trade with more tolerance for crystal clouds than colorless diamond desks would permit.",
      },
      {
        heading: "Cobalt commentary and blues",
        body: "For blue spinels, laboratory commentary on cobalt-related absorption can separate premium cobalt blues from iron-gray blues with similar photography. That distinction is price-moving; we read spectral appendices and comments with the same care applied to copper lines on tourmaline.",
      },
      {
        heading: "Marble-hosted provenance",
        body: "Many top reds and some blues derive from marble-related geologies with characteristic inclusion suites. Origin opinions from major European and Asian laboratories carry weight at auction when they align with microscopic character and trace chemistry.",
      },
      {
        heading: "Investment framing",
        body: "Institutional interest has risen as origin science matured. Liquidity remains thinner than for ruby or sapphire, but masterpiece spinels with repeat opinions and transparent treatment status can outperform on a rarity-adjusted basis. We underwrite to conservative clarity of enhancement and stable provenance.",
      },
    ],
  },
  {
    slug: "opal",
    title: "Precious opal — play-of-color, body tone, pattern vocabulary, and humidity discipline",
    dek: "N1 versus N9, harlequin versus pinfire, natural versus assembled, and why long-term ownership is a stewardship problem as much as a gemological one.",
    readTime: "11 min",
    coverImage: VAULT_COVER_IMAGES[8]!,
    pillar: "The Vault",
    vaultCategoryId: "opal",
    sections: [
      {
        heading: "Physics of play-of-color",
        body: "Precious opal consists of silica spheres whose regularity creates diffraction. Brightness, pattern coverage, body tone, and viewing angle behavior define face-up beauty. Laboratories may confirm natural versus assembled opal and note treatments such as sugar–acid or smoking when evidence exists.",
      },
      {
        heading: "Pattern and body-tone language",
        body: "Harlequin and rare broad-flash patterns on dark body tones command apex pricing when brightness is high. Milky potch layers, directional color, and dead zones under tilt break continuity for institutional buyers. We document pattern behavior on video under controlled light, not only stills.",
      },
      {
        heading: "Stability and care",
        body: "Hydration and crazing risk make opal a humidity-aware asset class. Long-term storage and wear protocols differ from corundum or diamond. That stewardship burden belongs in the underwriting memo — especially for large matrix pieces or thin-top shells.",
      },
      {
        heading: "Market depth",
        body: "Liquidity is narrower than for corundum but passionate at the top. We favor conservative cutting, transparent treatment status, and sellers who understand crazing history. Certificates anchor authenticity; condition anchors sleep.",
      },
    ],
  },
  {
    slug: "pearls",
    title: "Pearls — natural versus cultured, strand matching, and advanced laboratory confirmation",
    dek: "Luster, surface, orient, and symmetry; why SSEF or GIA pearl reports matter for naturals; and how treatment disclosure intersects with high-jewelry design.",
    readTime: "11 min",
    coverImage: VAULT_COVER_IMAGES[9]!,
    pillar: "The Vault",
    vaultCategoryId: "pearls",
    sections: [
      {
        heading: "Optical grading in practice",
        body: "Luster depth, surface cleanliness, orient, and shape symmetry drive value across Akoya, South Sea, Tahitian, and freshwater categories. For strands, matching is an art: slight tone drift that photographs as invisible can break continuity at the auction podium. We grade strands as systems, not as loose singles averaged together.",
      },
      {
        heading: "Natural pearls and advanced testing",
        body: "Historic natural strands with documented provenance are auction icons. Single naturals remain apex objects. X-ray and advanced tomography at major laboratories distinguish natural from beaded cultured structures; those lines are foundational to premium multiples.",
      },
      {
        heading: "Treatments (bleaching, dyeing, coating)",
        body: "Disclosure of bleaching, dyeing, or surface coatings is material to durability and value stability. We read pearl report comments for treatment language and pair them with tactile and microscopic checks where coatings are suspected.",
      },
      {
        heading: "Portfolio role",
        body: "Natural pearls with stable files trade as cultural rarity; fine cultured goods trade on design execution and brand. Allocation decisions hinge on whether the sleeve seeks generational scarcity or wearable income-producing inventory — different liquidity and care paths.",
      },
    ],
  },
  {
    slug: "laboratory-memorandum",
    title: "Laboratory memorandum — reading GIA-style grids, Type IIa context, and paired opinions",
    dek: "How to read major reports slowly: comments fields, inclusion plots, Type IIa chemistry as one signal among many, and why maison desks cross-read rather than average.",
    readTime: "12 min",
    coverImage: LAB_COVER,
    pillar: "Laboratory practice",
    sections: [
      {
        heading: "The grid is a snapshot, not a film",
        body: "Proportions, finish, and clarity diagrams on colorless diamond reports summarize geometry and inclusion positions at one moment. They do not replace observation of fluorescence behavior, tilt extinction, or subtle transparency differences under varied lighting. Pair every grid with hands-on cinema and, when warranted, supplemental studies such as advanced imaging or updated scans after recutting.",
      },
      {
        heading: "Comments, not only the headline grade",
        body: "Inscription notes, additional comments, and clarity characteristic sketches often carry disproportionate information relative to a single grade token. For colored stones, origin probability, treatment indications, and stability notes frequently live outside the largest type on the page. Institutional buyers build internal memos from these lines first, then fold in face-up beauty.",
      },
      {
        heading: "Type IIa as scientific classification",
        body: "Type IIa diamonds contain negligible nitrogen in forms that define Type I chemistry. They can be exceptionally transparent colorless performers or host unusual optical behaviors. The designation is not a beauty grade — it is a scientific family label that sometimes correlates with auction storytelling. It becomes dangerous when treated as a standalone investment thesis without cut quality, fluorescence, and provenance context.",
      },
      {
        heading: "Cross-reading and contradiction",
        body: "When major laboratories disagree on origin or treatment probability, the task is to map methodology sensitivity and evidence weight — not to split the difference. Some splits reflect genuine scientific limits; others reveal sample handling or document age. Maison practice archives PDFs, tracks recut events, and revisits opinions when material changes occur. Certificates are contracts of language; we hold them to that standard.",
      },
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = JOURNAL_RAW;

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}
