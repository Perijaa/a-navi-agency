import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getExperienceBySlug,
  getExperienceSlugs,
} from "@/lib/data";
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

  return {
    title: `${experience.title} | A-Navi Omiš`,
    description: experience.subheadline,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return <ExperiencePageView slug={slug} />;
}
