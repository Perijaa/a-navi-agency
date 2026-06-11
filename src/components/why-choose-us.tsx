"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Heart,
  Compass,
  Banknote,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Counter } from "@/components/ui/counter";

const proofPoints = [
  {
    icon: MapPin,
    title: "Born in Omi\u0161",
    description:
      "We\u2019re not a booking platform \u2014 we\u2019re the crew on the boat. Our team was raised on the Cetina River. We know every cave, every current, and every hidden beach by heart.",
  },
  {
    icon: Compass,
    title: "River and Sea, One Agency",
    description:
      "Glass boats, submarines, canyon rafting, self-drive rentals, and private transfers \u2014 five distinct ways to experience the water, all departing from one place.",
  },
  {
    icon: Heart,
    title: "Every Age, Every Family",
    description:
      "From toddlers on the glass boat to grandparents on the taxi cruise. Our tours are designed so nobody gets left on shore. Pets are welcome too.",
  },
  {
    icon: ShieldCheck,
    title: "Guided, Equipped, Looked After",
    description:
      "Professional guides on every group tour. Life jackets, helmets, waterproof bags \u2014 all provided. We brief every guest before departure so you feel confident on the water.",
  },
  {
    icon: Banknote,
    title: "Honest, Published Pricing",
    description:
      "Every price is on this website. No hidden fees, no upsells at the dock. Children under 5 ride free on most tours. What you see is what you pay.",
  },
  {
    icon: Users,
    title: "Trusted by 50,000+ Guests",
    description:
      "Fifteen seasons on the water. Families from over 40 countries. A 4.9 rating built one five-star review at a time \u2014 not by algorithm, but by care.",
  },
];

const statCards = [
  { value: 15, suffix: "+", label: "Seasons on the water", decimals: 0 },
  { value: 4.9, suffix: "", label: "Average guest rating", decimals: 1 },
  { value: 40, suffix: "+", label: "Countries represented", decimals: 0 },
  { value: 5, suffix: "", label: "Unique experiences", decimals: 0 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[600px] w-[600px] rounded-full bg-turquoise-500/[0.025] blur-[180px]" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-blue-400/[0.02] blur-[150px]" />
      </div>

      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label="Our Promise"
          title="Why Guests Choose Us"
          subtitle="We don\u2019t just offer tours. We offer fifteen years of knowing these waters \u2014 every tide, every canyon turn, every perfect moment."
        />

        {/* ── Stat cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        >
          {statCards.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-colors duration-500 hover:border-turquoise-400/15 hover:bg-white/[0.04]"
            >
              <div className="text-4xl font-bold text-turquoise-400 lg:text-5xl">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="mt-2 text-[13px] font-medium text-white/30">
                {stat.label}
              </div>

              {/* Subtle top glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-turquoise-400/0 to-transparent transition-all duration-500 group-hover:via-turquoise-400/30" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Proof point grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.015] p-8 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.03] hover:shadow-xl hover:shadow-black/20"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] transition-colors duration-500 group-hover:border-turquoise-400/20 group-hover:bg-turquoise-500/[0.08]">
                <point.icon className="h-5 w-5 text-white/40 transition-colors duration-500 group-hover:text-turquoise-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {point.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-relaxed text-white/35">
                {point.description}
              </p>

              {/* Corner accent on hover */}
              <div className="pointer-events-none absolute top-0 right-0 h-16 w-16 rounded-tr-2xl">
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-turquoise-400/0 transition-all duration-500 group-hover:from-turquoise-400/30" />
                <div className="absolute top-0 right-0 h-8 w-px bg-gradient-to-b from-turquoise-400/0 transition-all duration-500 group-hover:from-turquoise-400/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom confidence line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/20">
            A-Navi Agency, d.o.o. &mdash; Licensed touring agency, Omi&#353;,
            Croatia. Registered and insured for all water-based activities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
