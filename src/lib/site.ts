import { basePath } from "@/lib/base-path";

export const SITE_NAME = "A-Navi Agency";
export const SITE_EMAIL = "josipsinkovic6@gmail.com";
export const SITE_PHONE = "+385957264937";
export const SITE_PHONE_DISPLAY = "0957264937";

const PRODUCTION_URL = "https://www.omisboat.com";
const GITHUB_PAGES_URL = "https://perijaa.github.io/a-navi-agency";

export const DEFAULT_DESCRIPTION =
  "Six boat tours from Omiš harbour: glass boat, taxi boat, rent a boat, semi submarine, Cetina rafting & night ride. Departures from Cetina promenade — from €8.";

export const DEFAULT_KEYWORDS = [
  "boat tours Omiš",
  "boat rental Omiš",
  "glass boat Cetina",
  "taxi boat Omiš",
  "rafting Cetina",
  "semi submarine Omiš",
  "night boat ride Omiš",
  "Cetina river tours",
  "Dalmatia boat trips",
  "Omiš Croatia",
  "izlet brodom Omiš",
  "najam broda Omiš",
];

export const DEFAULT_OG_IMAGE = "/images/hero-poster.jpg";

/** Canonical site origin (no trailing slash). */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (basePath) return GITHUB_PAGES_URL;
  return PRODUCTION_URL;
}

/** Build an absolute URL for sitemaps, canonical links, and schema.org. */
export function absoluteUrl(path: string): string {
  const origin = getSiteUrl();

  if (!path || path === "/") {
    return basePath ? `${origin}${basePath}/` : `${origin}/`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withBase =
    basePath && !normalized.startsWith(basePath)
      ? `${basePath}${normalized}`
      : normalized;

  const url = `${origin}${withBase}`;
  return basePath && !url.endsWith("/") ? `${url}/` : url;
}

export function businessId(): string {
  return `${getSiteUrl()}#business`;
}

export function websiteId(): string {
  return `${getSiteUrl()}#website`;
}
