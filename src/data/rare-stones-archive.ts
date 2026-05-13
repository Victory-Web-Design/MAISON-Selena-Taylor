import { VAULT_COVER_IMAGES } from "@/lib/site-images";

export type ArchiveEntry = {
  id: string;
  name: string;
  category: string;
  era: string;
  note: string;
  status: "Private placement" | "Institutional archive" | "Auction record";
  coverImage: string;
};

/** Ten entries — copy aligned with maison archive voice; covers match Vault order (`VAULT_COVER_IMAGES`). */
const ARCHIVE_RAW: Array<Omit<ArchiveEntry, "coverImage">> = [
  {
    id: "1",
    name: "Argyle Rose Fragment",
    category: "Fancy Intense Pink Diamond",
    era: "2016",
    note: "Fragment-grade Argyle crystal retained with original mine documentation and post-closure provenance continuity. Mounted through a private atelier under restricted collector circulation, emphasizing saturation integrity over spread.",
    status: "Institutional archive",
  },
  {
    id: "2",
    name: "Muzo Cathedral",
    category: "Colombian Emerald",
    era: "2021",
    note: "Eight-carat Colombian crystal displaying pronounced jardin architecture with restrained clarity intervention. Accompanied by dual-laboratory memoranda prioritizing origin confidence and treatment transparency.",
    status: "Private placement",
  },
  {
    id: "3",
    name: "The Meridian Blue",
    category: "Royal Blue Sapphire",
    era: "2019",
    note: "Royal blue sapphire exhibiting velvet dispersion across a balanced tonal field. Selected for a West Coast collector family with emphasis on long-horizon custodianship and low-heat rarity positioning.",
    status: "Private placement",
  },
  {
    id: "4",
    name: "Burmese Ember",
    category: "Burmese Ruby",
    era: "2014",
    note: "Burmese ruby carrying a saturated pigeon’s blood profile with active fluorescence response under controlled illumination. Archival dossier includes ethical chain-of-custody mapping and historic extraction references.",
    status: "Auction record",
  },
  {
    id: "5",
    name: "Imperial River",
    category: "Jadeite Jade",
    era: "2018",
    note: "Imperial green jadeite bangle demonstrating even translucency and compact crystal texture. Type A verification supported by laboratory-backed structural consistency reports for generational preservation.",
    status: "Institutional archive",
  },
  {
    id: "6",
    name: "Paraiba Current",
    category: "Paraiba Tourmaline",
    era: "2022",
    note: "Copper-bearing Paraiba tourmaline exhibiting neon blue-green saturation with elevated internal luminosity. Designed as a restrained solitaire composition prioritizing chromatic projection under evening light environments.",
    status: "Private placement",
  },
  {
    id: "7",
    name: "Twin-Light Chrysoberyl",
    category: "Alexandrite",
    era: "2017",
    note: "Collector-grade alexandrite displaying pronounced daylight-to-incandescent transformation with balanced pleochroic orientation. Cutting strategy calibrated to preserve chromatic migration rather than surface spread.",
    status: "Private placement",
  },
  {
    id: "8",
    name: "Cobalt Meridian",
    category: "Spinel",
    era: "2020",
    note: "Vivid cobalt spinel sourced from select marble-hosted geological suites, exhibiting minimal extinction across rotational viewing angles. Documentation framework emphasizes origin probability ranges and rarity indexing.",
    status: "Institutional archive",
  },
  {
    id: "9",
    name: "Lightning Harlequin",
    category: "Black Opal",
    era: "2015",
    note: "Black opal with N1 body tone and broad spectral flash distribution across a stable host matrix. Conservational memorandum includes environmental guidance calibrated for long-duration custody conditions.",
    status: "Auction record",
  },
  {
    id: "10",
    name: "Saltwater Constellation",
    category: "Natural & South Sea Pearls",
    era: "2013",
    note: "Matched natural and South Sea pearl assemblage exhibiting controlled overtone harmony and advanced nacre consistency. Accompanied by laboratory distinction memoranda and intergenerational provenance documentation.",
    status: "Institutional archive",
  },
];

export const ARCHIVE_ENTRIES: ArchiveEntry[] = ARCHIVE_RAW.map((entry, index) => ({
  ...entry,
  coverImage: VAULT_COVER_IMAGES[index]!,
}));
