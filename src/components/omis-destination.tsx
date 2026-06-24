"use client";

import { motion } from "framer-motion";
import { MapPin, Mountain, Waves, Anchor } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

const stats = [
  { value: 15, suffix: "", decimals: 0, label: "Seasons" },
  { value: 50, suffix: "k+", decimals: 0, label: "Guests" },
  { value: 4.9, suffix: "", decimals: 1, label: "Rating" },
  { value: 40, suffix: "+", decimals: 0, label: "Countries" },
];

const highlights = [
  {
    icon: MapPin,
    title: "One departure point",
    text: "Cetina promenade — find us at the harbour.",
  },
  {
    icon: Mountain,
    title: "Cetina canyon",
    text: "River gorge and Radmanove Mlinice minutes from town.",
  },
  {
    icon: Waves,
    title: "Adriatic coast",
    text: "Open sea and hidden beaches off Omiš.",
  },
  {
    icon: Anchor,
    title: "One local crew",
    text: "Five tours, one team at the harbour.",
  },
];

export function OmisDestination() {
  return (
    <SectionShell id="omis" bg="mid" className="!pt-[2cm]">
      <div className="section-stack">
        <SectionHeader
          label="Omiš"
          title="Where the river meets the sea"
          subtitle="A Dalmatian town at the mouth of the Cetina canyon — pirate heritage, white cliffs, and river gorges."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content grid grid-cols-2 window-grid sm:grid-cols-4 xl:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="stat-card flex flex-col items-center justify-center px-4 py-8 text-center sm:px-5 sm:py-9"
            >
              <div className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-semibold leading-none tracking-tight text-navy-900">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2}
                />
              </div>
              <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="section-content grid grid-cols-1 window-grid xl:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card flex flex-col items-center gap-5 p-7 text-center sm:p-8 xl:flex-row xl:items-start xl:gap-6 xl:p-9 xl:text-left"
            >
              <div className="icon-badge h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                <item.icon className="h-5 w-5 text-turquoise-600 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold leading-snug text-navy-900 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-[15px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
