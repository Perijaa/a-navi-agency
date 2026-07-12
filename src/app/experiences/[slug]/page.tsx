import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  getExperienceBySlug,
  getExperienceSlugs,
} from "@/lib/data";
import {
  buildExperienceBreadcrumbSchema,
  buildExperienceSchema,
  defaultOgImage,
} from "@/lib/structured-data";
import { assetPath } from "@/lib/base-path";
import { ExperiencePageView } from "@/components/experience-page-view";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return { title: "Tour not found" };

  const title = `${experience.title} in Omiš`;
  const description = `${experience.subheadline} From €${experience.priceFrom}. Book at A-Navi on the Cetina promenade.`;
  const canonical = `/experiences/${slug}`;
  const image = assetPath(experience.detailImage || experience.image);

  return {
    title,
    description,
    keywords: [
      experience.title,
      "Omiš",
      "Cetina river",
      "boat tour Croatia",
      `${experience.title} Omiš`,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${title} | A-Navi Agency`,
      description,
      images: [
        {
          url: image,
          alt: `${experience.title} — A-Navi boat tours in Omiš`,
        },
        defaultOgImage(),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | A-Navi Agency`,
      description,
      images: [image],
    },
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          buildExperienceSchema(experience),
          buildExperienceBreadcrumbSchema(slug, experience.title),
        ]}
      />
      <ExperiencePageView slug={slug} />
    </>
  );
}
