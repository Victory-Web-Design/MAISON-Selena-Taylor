/**
 * Vault category covers — PNGs in `public/images/vault-covers/`.
 * Stems match filenames (without extension); spaces are URL-encoded in the path.
 */
const png = (fileStem: string) =>
  `/images/vault-covers/${encodeURIComponent(fileStem)}.png` as const;

export const VAULT_CATEGORY_COVER_IMAGE = {
  "fancy-color-diamonds": png("Fancy Color Diamonds"),
  "colombian-emeralds": png("Colombian Emerald"),
  "royal-blue-sapphires": png("Royal Blue Sapphires"),
  "burmese-rubies": png("Burmese Rubies"),
  "jadeite-jade": png("Jadeite Jade"),
  "paraiba-tourmaline": png("Paraiba Tourmaline"),
  alexandrite: png("Alexandrite"),
  spinel: png("spinel"),
  opal: png("Opal"),
  pearls: png("pearls"),
} as const;

export type VaultCategoryCoverId = keyof typeof VAULT_CATEGORY_COVER_IMAGE;

/** Same order as `VAULT_CATEGORY_CORE` in `vault-categories.ts`. */
export const VAULT_COVER_IMAGES_ORDERED = [
  VAULT_CATEGORY_COVER_IMAGE["fancy-color-diamonds"],
  VAULT_CATEGORY_COVER_IMAGE["colombian-emeralds"],
  VAULT_CATEGORY_COVER_IMAGE["royal-blue-sapphires"],
  VAULT_CATEGORY_COVER_IMAGE["burmese-rubies"],
  VAULT_CATEGORY_COVER_IMAGE["jadeite-jade"],
  VAULT_CATEGORY_COVER_IMAGE["paraiba-tourmaline"],
  VAULT_CATEGORY_COVER_IMAGE.alexandrite,
  VAULT_CATEGORY_COVER_IMAGE.spinel,
  VAULT_CATEGORY_COVER_IMAGE.opal,
  VAULT_CATEGORY_COVER_IMAGE.pearls,
] as const;
