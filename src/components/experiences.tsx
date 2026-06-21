"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Check, Star, MapPin } from "lucide-react";
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
        className={`group tour-showcase flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_20px_48px_-16px_rgba(15,23,42,0.12)] sm:gap-6 sm:p-5 lg:flex-row lg:items-stretch lg:gap-8 lg:p-6 lg:rounded-3xl ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="relative min-h-[14rem] min-w-0 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:min-h-[16rem] lg:min-h-[22rem] lg:w-[44%] lg:rounded-2xl">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-900 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4">
            <Icon className="h-3.5 w-3.5 text-teal-600" />
            {exp.tag}
          </span>
        </div>

        <div className="flex min-w-0 flex-col justify-center lg:flex-1 lg:py-1 lg:pr-1">
          <header>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tour {num}
              </p>
              {isPopular && (
                <>
                  <span className="text-slate-200" aria-hidden>
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                    <Star className="h-3 w-3 fill-teal-500 text-teal-500" />
                    Guest favourite
                  </span>
                </>
              )}
            </div>

            <h3 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight tracking-tight text-navy-900">
              {exp.title}
            </h3>

            <p className="mt-4 text-[1.0625rem] font-medium leading-snug text-navy-800">
              {exp.headline}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-500">
              {exp.tagline}
            </p>
          </header>

          <ul className="mt-6 space-y-3.5 border-t border-slate-100 pt-6">
            {exp.highlights.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-teal-600"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 flex gap-2.5 border-t border-slate-100 pt-6 text-sm leading-relaxed text-slate-500">
            <Star
              className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400 text-amber-400"
              aria-hidden
            />
            {exp.trustLine}
          </p>

          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="font-serif text-3xl font-bold tracking-tight text-navy-900">
                <span className="text-xl font-semibold text-slate-400">
                  &euro;
                </span>
                {exp.priceFrom}
                <span className="ml-2 text-sm font-sans font-normal text-slate-400">
                  per person
                </span>
              </p>
              <span className="hidden text-slate-200 sm:inline" aria-hidden>
                |
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <Clock className="h-4 w-4 text-slate-400" />
                {exp.duration}
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-navy-850 sm:px-7">
              {exp.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <SectionShell id="experiences" bg="mid">
      <div className="mx-auto w-full max-w-[68rem] px-4 sm:px-6 lg:px-8">
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
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {[
            { icon: Star, text: "4.9 guest rating", highlight: true },
            { icon: MapPin, text: "One departure point", highlight: false },
            { icon: null, text: "Free cancellation 24h", highlight: false },
          ].map(({ icon: Icon, text, highlight }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-600"
            >
              {Icon && (
                <Icon
                  className={`h-3.5 w-3.5 ${
                    highlight
                      ? "fill-amber-400 text-amber-400"
                      : "text-teal-600"
                  }`}
                />
              )}
              {text}
            </span>
          ))}
        </motion.div>

        <div className="section-body flex flex-col gap-12 lg:gap-16">
          {experiences.map((exp, index) => (
            <ExperienceShowcase key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-10 lg:mt-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
            Personal advice
          </p>
          <p className="mt-3 font-serif text-[clamp(1.625rem,3.5vw,2rem)] font-bold text-navy-900">
            Still deciding?
          </p>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-500">
            Tell us who&apos;s coming and we&apos;ll point you to the perfect
            tour — we reply within hours, no payment upfront.
          </p>
          <Link href="/#contact" className="btn-primary mt-7">
            Get a personal recommendation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </SectionShell>
  );
}
