"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/lib/data";
import { getExperienceDetail } from "@/lib/experience-detail";

export function ExperienceCard({
  experience,
  index = 0,
  className = "",
}: {
  experience: Experience;
  index?: number;
  className?: string;
}) {
  const detail = getExperienceDetail(experience.id);
  const summary = detail?.cardSummary ?? experience.tagline;
  const rating = detail?.rating ?? 4.9;
  const reviewCount = detail?.reviewCount ?? 200;

  return (
    <article className={className}>
      <Link
        href={`/experiences/${experience.id}`}
        className="tour-card group"
      >
        <div className="tour-card__media">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            priority={index < 3}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="tour-card__image object-cover"
          />
          {experience.tag && (
            <span className="tour-card__tag">{experience.tag}</span>
          )}
        </div>

        <div className="tour-card__body">
          <h3 className="tour-card__title">{experience.title}</h3>

          <p className="tour-card__rating">
            <span className="tour-card__stars" aria-hidden>
              ★★★★★
            </span>
            <span>{rating}</span>
            <span className="tour-card__rating-count">({reviewCount})</span>
          </p>

          <p className="tour-card__summary">{summary}</p>

          <p className="tour-card__meta">
            <span className="tour-card__duration">{experience.duration}</span>
            <span className="tour-card__price">From &euro;{experience.priceFrom}</span>
          </p>

          <span className="tour-card__link">
            View tour
            <ArrowRight className="tour-card__arrow h-4 w-4" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}
