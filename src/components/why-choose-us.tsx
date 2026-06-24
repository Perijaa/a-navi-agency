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
    <SectionShell bg="deep" className="pt-32 pb-32 sm:pt-36 sm:pb-36 xl:pt-44 xl:pb-40">
      <div className="section-stack">
        <SectionHeader
          label="Why A-Navi"
          title="Simple booking, local expertise"
          subtitle="Fifteen seasons on the Cetina — one harbour, five ways to explore."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content grid grid-cols-1 window-grid xl:grid-cols-3 xl:gap-10">
          {reasons.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card flex min-h-[12rem] flex-col items-center border-t-4 border-t-teal-400/80 p-9 text-center sm:min-h-[13rem] sm:p-10 xl:p-12"
            >
              <div className="icon-badge h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
                <point.icon className="h-7 w-7 text-turquoise-600" />
              </div>
              <h3 className="mt-7 text-lg font-semibold leading-snug text-navy-900 sm:mt-8 sm:text-xl">
                {point.title}
              </h3>
              <p className="mt-4 max-w-[30ch] text-[15px] leading-[1.8] text-balance text-slate-600 sm:mt-5 sm:text-base">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
