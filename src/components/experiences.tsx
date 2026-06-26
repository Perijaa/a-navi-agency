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
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
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
        <div className="tour-showcase-media min-h-[10rem] sm:min-h-0">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(max-width: 640px) 100vw, 44vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="tour-showcase-media-overlay" aria-hidden />

          <span className="tour-card-tag">
            <Icon className="h-3.5 w-3.5 shrink-0" />
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
                  <Star className="h-3 w-3 fill-teal-500 text-teal-500" />
                  Guest favourite
                </span>
              )}
            </div>

            <header className="tour-showcase-header">
              <h3 className="tour-showcase-title">{exp.title}</h3>
              <p className="tour-showcase-tagline">{exp.tagline}</p>
            </header>

            <ul className="tour-showcase-highlights">
              {exp.highlights.slice(0, 3).map((item) => (
                <li key={item} className="tour-showcase-highlight">
                  <Check
                    className="h-3 w-3 shrink-0 text-teal-600"
                    strokeWidth={2.5}
                  />
                  <span className="text-balance">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tour-showcase-footer">
            <div className="tour-showcase-bar">
              <div className="tour-showcase-bar-meta">
                <div className="tour-showcase-bar-price">
                  <span className="tour-showcase-bar-label">From</span>
                  <span className="tour-showcase-bar-amount">
                    <span className="tour-showcase-bar-currency">&euro;</span>
                    {exp.priceFrom}
                    <span className="tour-showcase-bar-suffix">/ person</span>
                  </span>
                </div>
                <span className="tour-showcase-bar-duration">
                  <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {exp.duration}
                </span>
              </div>
              <span className="tour-showcase-bar-cta">
                <span>{exp.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </span>
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
        <div>
          <SectionHeader
            label="Tours"
            title={
              <>
                Pick your{" "}
                <span className="bg-gradient-to-r from-turquoise-600 via-teal-500 to-turquoise-500 bg-clip-text text-transparent">
                  adventure
                </span>
              </>
            }
            subtitle={`River, canyon, or open sea — five unforgettable ways to explore Omiš from the harbour. From €${minPrice}.`}
            className="[&_h2]:!mt-7 [&_p]:!mt-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:mt-20 sm:gap-5"
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
                className={`trust-pill sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base ${
                  highlight ? "trust-pill--highlight" : ""
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9 ${
                    highlight ? "bg-[#fffefa]" : "bg-teal-50"
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
          className="section-content flex flex-col items-center justify-center rounded-2xl border border-stone-200/50 bg-[#fffefa] p-10 text-center shadow-[0_1px_2px_rgba(44,38,32,0.03),0_12px_36px_-12px_rgba(44,38,32,0.08)] sm:rounded-3xl sm:p-14 xl:p-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600 sm:text-xs">
            Personal advice
          </p>
          <p className="mt-5 font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-semibold leading-tight text-stone-800">
            Still deciding?
          </p>
          <p className="mx-auto mt-4 max-w-md text-center text-[15px] leading-[1.75] text-balance text-stone-500 sm:text-base">
            Tell us who&apos;s coming and we&apos;ll point you to the perfect
            tour — we reply within hours, no payment upfront.
          </p>
          <Link href="/#contact" className="btn-primary mt-10 sm:mt-12">
            Get a personal recommendation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </SectionShell>
  );
}
