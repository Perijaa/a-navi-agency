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
    <SectionShell id="omis" bg="mid">
      <SectionHeader
        label="Omiš"
        title="Where the river meets the sea"
        subtitle="A Dalmatian town at the mouth of the Cetina canyon — pirate heritage, white cliffs, and river gorges."
      />

      <div className="section-content section-body">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <div className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2}
                />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card flex items-start gap-4 p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                <item.icon className="h-5 w-5 text-turquoise-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
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
