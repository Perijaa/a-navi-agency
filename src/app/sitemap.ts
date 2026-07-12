import type { MetadataRoute } from "next";
import { getExperienceSlugs } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const experienceEntries: MetadataRoute.Sitemap = getExperienceSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/experiences/${slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    }),
  );

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...experienceEntries,
  ];
}
