/**
 * Google Tag Manager
 *
 * Env: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX (optional — defaults to the live container)
 */
export const DEFAULT_GTM_ID = "GTM-5J7V57KD";

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || DEFAULT_GTM_ID;

export function isGtmConfigured(): boolean {
  return Boolean(GTM_ID && GTM_ID.startsWith("GTM-"));
}

