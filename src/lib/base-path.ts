/** Set at build time via next.config (empty in local dev). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix root-relative public asset paths for GitHub Pages. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}

/** Homepage section link that works from any route. */
export function homeHash(section: string): string {
  const id = section.replace(/^#/, "");
  const home = basePath ? `${basePath}/` : "/";
  return `${home}#${id}`;
}
