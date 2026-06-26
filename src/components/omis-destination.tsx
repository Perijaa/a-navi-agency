"use client";

import { motion } from "framer-motion";
import { MapPin, Mountain, Waves, Anchor, Calendar, Users, Star, Globe } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

const stats = [
  { value: 15, suffix: "", decimals: 0, label: "Seasons", icon: Calendar },
  { value: 50, suffix: "k+", decimals: 0, label: "Guests", icon: Users },
  { value: 4.9, suffix: "", decimals: 1, label: "Rating", icon: Star },
  { value: 40, suffix: "+", decimals: 0, label: "Countries", icon: Globe },
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
    <SectionShell id="omis" bg="mid" className="!pt-[2cm] !pb-0">
      <div className="section-stack">
        <SectionHeader
          label="Omiš"
          title={<>Where the river<br className="sm:hidden" /> meets the sea</>}
          subtitle="A Dalmatian town at the mouth of the Cetina canyon — pirate heritage, white cliffs, and river gorges."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="omis-stats-grid section-content">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="omis-stat-card"
              >
                <span className="omis-stat-card-icon" aria-hidden>
                  <Icon className="h-5 w-5 text-turquoise-600 sm:h-[1.375rem] sm:w-[1.375rem]" />
                </span>
                <div className="omis-stat-card-value font-serif font-semibold tracking-tight text-stone-800">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2}
                  />
                </div>
                <p className="omis-stat-card-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="omis-highlights-grid section-content">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="omis-highlight-card"
            >
              <div className="omis-highlight-card-icon">
                <item.icon className="h-6 w-6 text-turquoise-600 sm:h-7 sm:w-7" />
              </div>
              <div className="omis-highlight-card-body">
                <h3 className="omis-highlight-card-title">{item.title}</h3>
                <p className="omis-highlight-card-text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
