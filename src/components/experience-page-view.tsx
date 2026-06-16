"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { getExperienceBySlug } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const accents: Record<string, { text: string; bg: string; border: string; light: string }> = {
  "glass-boat": { text: "text-cyan-600", bg: "bg-cyan-500", border: "border-cyan-200", light: "bg-cyan-50" },
  "taxi-boat": { text: "text-amber-600", bg: "bg-amber-500", border: "border-amber-200", light: "bg-amber-50" },
  "rent-a-boat": { text: "text-emerald-600", bg: "bg-emerald-500", border: "border-emerald-200", light: "bg-emerald-50" },
  "semi-submarine": { text: "text-violet-600", bg: "bg-violet-500", border: "border-violet-200", light: "bg-violet-50" },
  rafting: { text: "text-lime-600", bg: "bg-lime-500", border: "border-lime-200", light: "bg-lime-50" },
};

export function ExperiencePageView({ slug }: { slug: string }) {
  const experience = getExperienceBySlug(slug);
  if (!experience) return null;

  const accent = accents[experience.id] ?? accents["glass-boat"];
  const Icon = experience.icon;

  return (
    <>
      <Navbar />
      <main className="surface-deep min-h-screen">
        <section className="relative min-h-[55vh] w-full overflow-hidden sm:min-h-[60vh] lg:min-h-[65vh]">
          <Image
            src={experience.detailImage}
            alt={experience.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />

          <div className="relative z-10 flex min-h-[55vh] flex-col justify-between px-5 pb-10 pt-safe-nav sm:min-h-[60vh] sm:px-8 lg:min-h-[65vh] lg:pb-14">
            <Link
              href="/#experiences"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              All tours
            </Link>

            <div className="mx-auto w-full max-w-3xl pb-4 text-center lg:max-w-4xl lg:pb-8">
              <span
                className={`inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm`}
              >
                <Icon className="h-3.5 w-3.5" />
                {experience.tag}
              </span>

              <h1 className="mt-5 font-serif text-[clamp(2rem,7vw,4rem)] font-bold leading-tight text-white lg:mt-6">
                {experience.title}
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-base text-white/80 lg:text-lg">
                {experience.headline}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 lg:mt-8 lg:text-base">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {experience.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Cetina promenade
                </span>
                <span className="font-bold text-turquoise-300">
                  from &euro;{experience.priceFrom}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="page-container py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-serif text-2xl leading-snug text-navy-900 lg:text-3xl">
                {experience.subheadline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-600 lg:mt-8 lg:text-lg">
                {experience.longDescription}
              </p>

              <div className="mt-12 border-t border-slate-200 pt-10 lg:mt-14 lg:pt-12">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  What&apos;s included
                </h2>
                <ul className="mt-6 space-y-4">
                  {experience.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-4">
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${accent.light}`}>
                        <Check className={`h-4 w-4 ${accent.text}`} />
                      </span>
                      <span className="text-base text-slate-700 lg:text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-slate-200 pt-10 lg:mt-14 lg:pt-12">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Highlights
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.highlights.map((h) => (
                    <span
                      key={h}
                      className={`rounded-full border ${accent.border} ${accent.light} px-4 py-2 text-sm text-slate-700 lg:text-base`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card p-6 sm:p-8 lg:sticky lg:top-24 lg:p-9">
                <h2 className="font-serif text-2xl font-bold text-navy-900 lg:text-3xl">
                  Pricing
                </h2>
                <ul className="mt-6 space-y-4 border-b border-slate-200 pb-6">
                  {experience.pricing.map((tier) => (
                    <li key={tier.label} className="flex justify-between gap-4 text-base lg:text-lg">
                      <span className="text-slate-600">{tier.label}</span>
                      <span className="font-semibold text-navy-900">{tier.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-600 lg:text-base">{experience.trustLine}</p>
                <Link href="/#contact" className={`btn-primary mt-7 w-full`}>
                  {experience.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
