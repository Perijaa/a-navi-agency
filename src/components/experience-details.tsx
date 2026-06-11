"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Clock, ArrowRight, Star, Shield } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/lib/data";

function ExperienceBlock({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className="relative" id={experience.id}>
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-turquoise-500/[0.025] blur-[180px] ${
          isReversed ? "-right-40" : "-left-40"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Image ── */}
          <motion.div
            style={{ y: imageY }}
            className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={experience.detailImage}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] lg:rounded-3xl" />
              </div>

              {/* Tag */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/75 backdrop-blur-md">
                  {experience.tag}
                </span>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-950/60 px-3.5 py-1.5 backdrop-blur-md">
                <Clock className="h-3.5 w-3.5 text-turquoise-400" />
                <span className="text-xs font-medium text-white">
                  {experience.duration}
                </span>
              </div>

              {/* Pricing card — bottom right */}
              <div className="absolute bottom-5 right-5 rounded-xl border border-white/[0.08] bg-navy-950/70 px-4 py-3 backdrop-blur-xl">
                <div className="space-y-1">
                  {experience.pricing.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-[11px] text-white/40">
                        {tier.label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={isReversed ? "lg:order-1" : "lg:order-2"}
          >
            {/* Icon + label */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <experience.icon className="h-5 w-5 text-turquoise-400" />
              </div>
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-turquoise-400/80">
                {experience.tagline}
              </span>
            </div>

            {/* Headline */}
            <h3 className="mt-6 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white lg:text-4xl xl:text-[2.75rem]">
              {experience.headline}
            </h3>

            {/* Subheadline */}
            <p className="mt-4 text-base leading-relaxed text-white/50 lg:text-[17px] lg:leading-relaxed">
              {experience.subheadline}
            </p>

            {/* Long description */}
            <p className="mt-5 text-[15px] leading-[1.75] text-white/35">
              {experience.longDescription}
            </p>

            {/* ── Benefits ── */}
            <ul className="mt-8 space-y-3.5">
              {experience.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-[5px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turquoise-500/15 ring-1 ring-turquoise-400/20">
                    <Check className="h-3 w-3 text-turquoise-400" />
                  </div>
                  <span className="text-[15px] leading-relaxed text-white/55">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* ── CTA ── */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group/cta inline-flex items-center gap-2.5 rounded-full bg-turquoise-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all duration-300 hover:bg-turquoise-400 hover:shadow-turquoise-400/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                {experience.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
              </a>

              <span className="text-sm font-semibold text-white">
                {experience.pricing[0].price}
                <span className="ml-1 font-normal text-white/35">
                  / {experience.pricing[0].label.toLowerCase()}
                </span>
              </span>
            </div>

            {/* ── Trust line ── */}
            <div className="mt-6 flex items-center gap-2 text-[13px] text-white/30">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3 w-3 fill-gold-400/80 text-gold-400/80"
                  />
                ))}
              </div>
              <span className="mx-1 text-white/15">|</span>
              <Shield className="h-3 w-3 text-turquoise-400/50" />
              <span>{experience.trustLine}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceDetails() {
  return (
    <section className="relative py-32 lg:py-40">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="space-y-32 lg:space-y-44">
        {experiences.map((exp, i) => (
          <ExperienceBlock key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
