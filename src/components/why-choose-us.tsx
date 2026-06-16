"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import type { LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MapPin,
    title: "Local crew on the Cetina",
    description:
      "We're on the promenade every day — the people on the boat, not a booking platform.",
  },
  {
    icon: ShieldCheck,
    title: "Clear pricing & equipment",
    description:
      "Prices on the site, gear included, free cancellation up to 24 hours before.",
  },
  {
    icon: Heart,
    title: "For families & all ages",
    description:
      "Glass boat, taxi cruise, rafting — pets welcome too.",
  },
];

export function WhyChooseUs() {
  return (
    <SectionShell bg="deep">
      <SectionHeader
        label="Why A-Navi"
        title="Simple booking, local expertise"
        subtitle="Fifteen seasons on the Cetina — one harbour, five ways to explore."
      />

      <div className="section-content section-body grid gap-6 sm:grid-cols-3 sm:gap-8">
        {reasons.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
              <point.icon className="h-5 w-5 text-turquoise-600" />
            </div>
            <h3 className="mt-4 font-semibold text-navy-900">{point.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
