"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

interface CardTheme {
  accentText: string;
  priceText: string;
  hoverBorder: string;
  ctaBg: string;
  ctaText: string;
  ctaHover: string;
}

const cardThemes: Record<string, CardTheme> = {
  "glass-boat": {
    accentText: "text-cyan-300",
    priceText: "text-cyan-300",
    hoverBorder: "hover:border-cyan-400/25",
    ctaBg: "bg-cyan-400",
    ctaText: "text-navy-950",
    ctaHover: "group-hover:bg-cyan-300",
  },
  "taxi-boat": {
    accentText: "text-amber-300",
    priceText: "text-amber-300",
    hoverBorder: "hover:border-amber-400/25",
    ctaBg: "bg-amber-400",
    ctaText: "text-navy-950",
    ctaHover: "group-hover:bg-amber-300",
  },
  "rent-a-boat": {
    accentText: "text-emerald-300",
    priceText: "text-emerald-300",
    hoverBorder: "hover:border-emerald-400/25",
    ctaBg: "bg-emerald-400",
    ctaText: "text-navy-950",
    ctaHover: "group-hover:bg-emerald-300",
  },
  "semi-submarine": {
    accentText: "text-violet-300",
    priceText: "text-violet-300",
    hoverBorder: "hover:border-violet-400/25",
    ctaBg: "bg-violet-400",
    ctaText: "text-navy-950",
    ctaHover: "group-hover:bg-violet-300",
  },
  rafting: {
    accentText: "text-lime-300",
    priceText: "text-lime-300",
    hoverBorder: "hover:border-lime-400/25",
    ctaBg: "bg-lime-400",
    ctaText: "text-navy-950",
    ctaHover: "group-hover:bg-lime-300",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const theme = cardThemes[exp.id];

  return (
    <motion.div variants={cardVariants} className="w-full">
      <a
        href={`#${exp.id}`}
        className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-navy-950/40 transition-all duration-300 sm:flex-row sm:items-stretch lg:flex-col ${theme.hoverBorder}`}
      >
        {/* Image — full width on mobile, side panel on sm–md */}
        <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-[220px] lg:h-48 lg:w-full">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(max-width: 1024px) 220px, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-navy-950/30 lg:bg-gradient-to-t" />
          <span
            className={`absolute top-4 left-4 rounded-lg bg-navy-950/70 px-3 py-1 text-sm font-bold backdrop-blur-sm ${theme.priceText}`}
          >
            from &euro;{exp.priceFrom}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-5 sm:p-6 lg:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                {exp.tag}
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                {exp.title}
              </h3>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <exp.icon className={`h-4 w-4 ${theme.accentText}`} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <Clock className="h-3.5 w-3.5 shrink-0" />
              {exp.duration}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full ${theme.ctaBg} px-4 py-2 text-xs font-semibold ${theme.ctaText} ${theme.ctaHover}`}
            >
              Reserve
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <SectionShell id="experiences" bg="900">
        <SectionHeader
          label="Our Offer in Omi&#353;"
          title="5 Tours from the Harbour"
          subtitle={`All depart from Cetina promenade, Omi\u0161. From \u20ac${minPrice}.`}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-14 flex w-full flex-col gap-5 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3"
        >
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </motion.div>

        <div className="mt-14 flex w-full flex-col gap-4 sm:mt-16 sm:flex-row sm:items-center sm:gap-6 lg:mt-20">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-turquoise-500 px-8 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-turquoise-400 sm:w-auto"
          >
            Book Any Tour
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-sm text-white/50">
            Not sure which tour?{" "}
            <a
              href="#contact"
              className="font-medium text-turquoise-400 hover:text-turquoise-300"
            >
              Ask us for a recommendation
            </a>
          </p>
        </div>
    </SectionShell>
  );
}
