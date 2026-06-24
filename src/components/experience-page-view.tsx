"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { getExperienceBySlug } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileBookBar } from "@/components/mobile-book-bar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="experience-section-label text-[11px] font-semibold uppercase tracking-[0.28em] text-turquoise-600 sm:text-xs">
      {children}
    </h2>
  );
}

export function ExperiencePageView({ slug }: { slug: string }) {
  const experience = getExperienceBySlug(slug);
  if (!experience) return null;

  const Icon = experience.icon;

  return (
    <>
      <Navbar />
      <main className="experience-page surface-deep min-h-screen pb-safe-book-bar">
        {/* Hero — centar samo za naslov; back lijevo */}
        <section className="relative min-h-[58vh] w-full overflow-hidden sm:min-h-[62vh] xl:min-h-[65vh]">
          <Image
            src={experience.detailImage}
            alt={experience.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/45 via-navy-900/20 to-navy-900/90" />

          <div className="experience-page-hero-inner relative z-10 flex min-h-[58vh] items-center justify-center px-5 sm:min-h-[62vh] sm:px-8 xl:min-h-[65vh]">
            <Link
              href="/#experiences"
              className="experience-page-back-link absolute left-5 top-[max(5.5rem,calc(env(safe-area-inset-top)+4rem))] inline-flex w-fit items-center gap-2.5 rounded-full border border-white/25 bg-white/10 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-8 xl:left-10"
            >
              <ArrowLeft className="experience-page-back-link-icon shrink-0" aria-hidden />
              All tours
            </Link>

            <div className="experience-page-hero-content mx-auto w-full max-w-3xl text-center sm:max-w-4xl xl:max-w-5xl">
              <span className="experience-page-hero-tag inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <Icon className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" />
                {experience.tag}
              </span>

              <h1 className="experience-page-hero-title mt-3 font-serif font-semibold tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)] sm:mt-3.5">
                {experience.title}
              </h1>

              <p className="experience-page-hero-headline mx-auto mt-2.5 max-w-2xl text-balance text-white/88 sm:mt-3">
                {experience.headline}
              </p>

              <div className="experience-page-hero-meta mt-4 flex flex-wrap items-center justify-center sm:mt-4.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm sm:px-5 sm:py-3">
                  <Clock className="h-4 w-4 shrink-0 text-turquoise-300 sm:h-[1.125rem] sm:w-[1.125rem]" />
                  {experience.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-white/92 backdrop-blur-sm sm:px-5 sm:py-3">
                  <MapPin className="h-4 w-4 shrink-0 text-turquoise-300 sm:h-[1.125rem] sm:w-[1.125rem]" />
                  Cetina promenade
                </span>
                <span className="rounded-full bg-turquoise-500 px-4 py-2.5 text-base font-semibold text-white shadow-lg shadow-turquoise-900/30 sm:px-5 sm:py-3">
                  From &euro;{experience.priceFrom}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="experience-page-after-hero" aria-hidden="true" />

        {/* Content — responsive column / sidebar */}
        <div className="page-container experience-page-body">
          <div className="section-content flex flex-col gap-6 sm:gap-7 xl:gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="card relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 1280px) 100vw, 64rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
            </motion.div>

            <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-8 2xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:gap-10">
              <div className="window-stack window-stack--roomy">
                <motion.header
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="text-center sm:text-left"
                >
                  <p className="font-serif text-[clamp(1.375rem,4vw,1.875rem)] font-semibold leading-snug tracking-[-0.02em] text-balance text-navy-900 xl:max-w-[38ch]">
                    {experience.subheadline}
                  </p>
                  <p className="mt-3.5 text-base leading-[1.85] text-slate-600 sm:mt-4 sm:text-[1.0625rem] xl:max-w-prose">
                    {experience.longDescription}
                  </p>
                </motion.header>

                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <SectionLabel>What&apos;s included</SectionLabel>
                  <ul className="window-stack mt-3.5 sm:mt-4">
                    {experience.benefits.map((benefit) => (
                      <li key={benefit} className="experience-benefit-card">
                        <span className="icon-badge h-10 w-10 shrink-0">
                          <Check
                            className="h-4 w-4 text-turquoise-600"
                            strokeWidth={2.5}
                          />
                        </span>
                        <span className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <SectionLabel>Highlights</SectionLabel>
                  <div className="mt-3.5 flex flex-wrap justify-center gap-2 sm:mt-4 sm:justify-start sm:gap-2.5">
                    {experience.highlights.map((highlight) => (
                      <span key={highlight} className="experience-highlight-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Pricing sidebar — ispod sadržaja na mobitelu, desno na xl+ */}
              <motion.aside
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="experience-pricing-panel group mx-auto w-full max-w-md xl:sticky xl:top-24 xl:mx-0 xl:max-w-none"
              >
                <div className="tour-card-booking">
                  <div className="tour-card-booking-inner">
                    <p className="tour-card-booking-eyebrow">Pricing</p>

                    <ul className="mt-1 w-full">
                      {experience.pricing.map((tier) => (
                        <li key={tier.label} className="experience-pricing-row">
                          <span className="text-slate-600">{tier.label}</span>
                          <span>{tier.price}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tour-card-booking-divider" aria-hidden />

                    <p className="text-sm leading-relaxed text-balance text-slate-600 sm:text-[15px]">
                      <Star
                        className="mb-0.5 mr-1 inline h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                      {experience.trustLine}
                    </p>

                    <Link href="/#contact" className="tour-card-cta mt-3">
                      <span>{experience.ctaLabel}</span>
                      <ArrowRight className="tour-card-cta-icon h-4 w-4" />
                    </Link>

                    <p className="tour-card-booking-note">
                      Free cancellation &middot; No payment upfront
                    </p>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </main>
      <Footer className="experience-page-footer" containerClassName="!pt-0" />
      <MobileBookBar />
    </>
  );
}
