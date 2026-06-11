"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Experiences() {
  const hero = experiences[0];
  const rest = experiences.slice(1);

  return (
    <section id="experiences" className="relative py-32 lg:py-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-turquoise-500/[0.03] blur-[180px]" />
        <div className="absolute bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label="What We Offer"
          title="Our Experiences"
          subtitle="Five ways to discover the Adriatic coast and the Cetina River canyon — each one crafted to leave you speechless"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          {/* ────────────────────────────────────
              HERO CARD — full-width, cinematic
          ──────────────────────────────────── */}
          <motion.div variants={cardVariants}>
            <a
              href={`#${hero.id}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/[0.06]"
            >
              <div className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem]">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20" />

                {/* Content — left-aligned editorial */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 sm:p-12 lg:max-w-2xl lg:justify-center lg:p-16">
                  {/* Tag */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-400/25 bg-turquoise-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-turquoise-300 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" />
                      {hero.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {hero.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-3 font-serif text-xl italic text-turquoise-300/70 sm:text-2xl">
                    {hero.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
                    {hero.description}
                  </p>

                  {/* Standout benefit */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-turquoise-500/20">
                      <hero.icon className="h-3.5 w-3.5 text-turquoise-400" />
                    </div>
                    {hero.highlights[0]}
                  </div>

                  {/* Meta + CTA row */}
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white/50 backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-turquoise-400/70" />
                      {hero.duration}
                    </span>

                    <span className="rounded-full border border-turquoise-400/20 bg-turquoise-500/10 px-4 py-2 text-sm font-semibold text-turquoise-300 backdrop-blur-sm">
                      From &euro;{hero.priceFrom}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-turquoise-500 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all duration-300 group-hover:bg-turquoise-400 group-hover:shadow-turquoise-400/30 group-hover:scale-[1.03]">
                      Book Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                {/* Border ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.06] transition-all duration-500 group-hover:ring-turquoise-400/15" />
              </div>
            </a>
          </motion.div>

          {/* ────────────────────────────────────
              GRID — 4 editorial cards
          ──────────────────────────────────── */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {rest.map((exp) => (
              <motion.div key={exp.id} variants={cardVariants}>
                <a
                  href={`#${exp.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-navy-900/30 transition-all duration-500 hover:border-turquoise-400/15 hover:shadow-2xl hover:shadow-turquoise-500/[0.06]"
                >
                  {/* Image */}
                  <div className="relative h-64 shrink-0 overflow-hidden sm:h-72 lg:h-80">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                    {/* Tag pill — top left */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/75 backdrop-blur-md">
                        {exp.tag}
                      </span>
                    </div>

                    {/* Price badge — top right */}
                    <div className="absolute top-5 right-5 z-10">
                      <span className="rounded-full border border-turquoise-400/20 bg-navy-950/60 px-3 py-1.5 text-xs font-semibold text-turquoise-300 backdrop-blur-md">
                        From &euro;{exp.priceFrom}
                      </span>
                    </div>

                    {/* Icon — floating glass circle */}
                    <div className="absolute bottom-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-turquoise-400/20 group-hover:bg-white/[0.08]">
                      <exp.icon className="h-5 w-5 text-turquoise-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-white lg:text-[1.7rem]">
                      {exp.title}
                    </h3>

                    <p className="mt-1 font-serif text-sm italic text-turquoise-400/60">
                      {exp.tagline}
                    </p>

                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/40">
                      {exp.description}
                    </p>

                    {/* Standout benefit */}
                    <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-turquoise-500/15">
                        <exp.icon className="h-3.5 w-3.5 text-turquoise-400" />
                      </div>
                      <span className="text-sm text-white/50">
                        {exp.highlights[0]}
                      </span>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-5">
                      <span className="flex items-center gap-1.5 text-sm text-white/35">
                        <Clock className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>

                      <span className="flex items-center gap-1.5 text-sm font-semibold text-turquoise-400 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                        Book Experience
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group/link inline-flex items-center gap-2.5 text-sm text-white/30 transition-colors hover:text-turquoise-400"
          >
            Not sure which experience is right for you? We&apos;ll help you
            decide
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
