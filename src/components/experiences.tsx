"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Check, Star, MapPin, ShieldCheck } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import type { Experience } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function ExperienceShowcase({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const Icon = exp.icon;
  const num = String(index + 1).padStart(2, "0");
  const isPopular = exp.id === "glass-boat";

  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Link
        href={`/experiences/${exp.id}`}
        className={`group tour-showcase card${
          reversed ? " tour-showcase--reverse" : ""
        }`}
      >
        <div className="tour-showcase-media">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="tour-showcase-media-overlay" aria-hidden />

          <span className="tour-card-tag">
            <Icon className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" />
            {exp.tag}
          </span>

          <span className="tour-showcase-tour-num">Tour {num}</span>
        </div>

        <div className="tour-showcase-body">
          <div className="tour-showcase-main">
            <div className="tour-showcase-badges">
              <span className="tour-card-meta">Tour {num}</span>
              {isPopular && (
                <span className="tour-showcase-favourite">
                  <Star className="h-3.5 w-3.5 fill-teal-500 text-teal-500" />
                  Guest favourite
                </span>
              )}
            </div>

            <header className="tour-showcase-header">
              <h3 className="tour-showcase-title">{exp.title}</h3>
              <p className="tour-showcase-headline">{exp.headline}</p>
              <p className="tour-showcase-tagline">{exp.tagline}</p>
            </header>

            <ul className="tour-showcase-highlights">
              {exp.highlights.slice(0, 3).map((item) => (
                <li key={item} className="tour-showcase-highlight">
                  <span className="tour-showcase-highlight-icon">
                    <Check
                      className="h-3.5 w-3.5 text-teal-600"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="text-balance">{item}</span>
                </li>
              ))}
            </ul>

            <p className="tour-showcase-trust">
              <Star
                className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400 text-amber-400"
                aria-hidden
              />
              {exp.trustLine}
            </p>
          </div>

          <div className="tour-showcase-footer">
            <div className="tour-card-booking">
              <div className="tour-card-booking-inner">
                <p className="tour-card-booking-eyebrow">Starting from</p>

                <div className="tour-card-booking-meta">
                  <p className="tour-card-booking-price">
                    <span className="tour-card-booking-price-currency">
                      &euro;
                    </span>
                    {exp.priceFrom}
                    <span className="tour-card-booking-price-suffix">
                      / person
                    </span>
                  </p>
                  <span className="tour-card-booking-duration">
                    <Clock className="h-4 w-4 shrink-0" aria-hidden />
                    {exp.duration}
                  </span>
                </div>

                <div className="tour-card-booking-divider" aria-hidden />

                <div className="tour-card-cta">
                  <span>{exp.ctaLabel}</span>
                  <ArrowRight className="tour-card-cta-icon h-4 w-4" aria-hidden />
                </div>

                <p className="tour-card-booking-note">
                  Free cancellation &middot; No payment upfront
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <SectionShell id="experiences" bg="mid" className="!pb-0">
      <div className="section-stack">
        <div className="flex flex-col items-center gap-12 sm:gap-14 xl:gap-16">
          <SectionHeader
            label="Tours"
            title={
              <>
                Pick your{" "}
                <span className="bg-gradient-to-r from-turquoise-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  adventure
                </span>
              </>
            }
            subtitle={`River, canyon, or open sea — five unforgettable ways to explore Omiš from the harbour. From €${minPrice}.`}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-content flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-6 sm:gap-y-5 xl:gap-x-8 xl:gap-y-6"
          >
            {[
              {
                icon: Star,
                text: "4.9 guest rating",
                highlight: true,
              },
              {
                icon: MapPin,
                text: "One departure point",
                highlight: false,
              },
              {
                icon: ShieldCheck,
                text: "Free cancellation 24h",
                highlight: false,
              },
            ].map(({ icon: Icon, text, highlight }) => (
              <span
                key={text}
                className={`trust-pill sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base xl:px-7 xl:py-4 xl:text-[1.0625rem] ${
                  highlight ? "trust-pill--highlight" : ""
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9 ${
                    highlight ? "bg-white shadow-sm" : "bg-teal-50"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] ${
                      highlight
                        ? "fill-amber-400 text-amber-400"
                        : "text-teal-600"
                    }`}
                  />
                </span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="section-content card-list">
          {experiences.map((exp, index) => (
            <ExperienceShowcase key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card section-content flex flex-col items-center border-teal-100/60 bg-gradient-to-b from-teal-50/40 to-white p-10 text-center sm:p-12 xl:p-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
            Personal advice
          </p>
          <p className="mt-4 font-serif text-[clamp(1.625rem,3.5vw,2rem)] font-bold text-navy-900">
            Still deciding?
          </p>
          <p className="mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-balance text-slate-500">
            Tell us who&apos;s coming and we&apos;ll point you to the perfect
            tour — we reply within hours, no payment upfront.
          </p>
          <Link href="/#contact" className="btn-primary mt-8">
            Get a personal recommendation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </SectionShell>
  );
}
