/**
 * URLs for the MedAxis CRM web app (separate Next app under /frontend).
 * Set NEXT_PUBLIC_CRM_APP_URL in production, e.g. https://app.medaxis.af
 */
export function getCrmAppBase(): string | null {
  const v = process.env.NEXT_PUBLIC_CRM_APP_URL?.trim().replace(/\/$/, "");
  if (v) return v;
  if (process.env.NODE_ENV === "development") return "http://localhost:3001";
  return null;
}

/** CRM login screen */
export function crmLoginHref(): string {
  const b = getCrmAppBase();
  return b ? `${b}/login` : "/contact";
}

/**
 * Self-serve signup in CRM — set NEXT_PUBLIC_CRM_SIGNUP_URL when that route exists.
 * Otherwise new organizations go through the marketing contact flow.
 */
export function crmSignupHref(): string {
  const custom = process.env.NEXT_PUBLIC_CRM_SIGNUP_URL?.trim();
  if (custom) return custom;
  return "/contact";
}

export function isAbsoluteHttpUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
