"use client";

import { motion } from "framer-motion";
import { MapPin, Mountain, Waves, Anchor } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "", decimals: 0, label: "Seasons on the Cetina" },
  { value: 50, suffix: "k+", decimals: 0, label: "Guests welcomed" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating", accent: "gold" as const },
  { value: 40, suffix: "+", decimals: 0, label: "Countries represented" },
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
          title={
            <>
              Where the river meets{" "}
              <span className="bg-gradient-to-r from-turquoise-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                the sea
              </span>
            </>
          }
          subtitle="A Dalmatian town at the mouth of the Cetina canyon — pirate heritage, white cliffs, and river gorges."
        />

        <div className="section-content flex flex-col gap-10 sm:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="omis-stats-band"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/12 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/8 blur-3xl"
              aria-hidden
            />

            <div className="relative grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-0 xl:gap-x-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={cn(
                    "relative px-2 text-center sm:px-4",
                    i > 0 && "sm:border-l sm:border-white/12 sm:pl-8 xl:pl-10"
                  )}
                >
                  <div
                    className={cn(
                      "omis-stat-value",
                      stat.accent === "gold" && "text-amber-300"
                    )}
                  >
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={2.2}
                    />
                  </div>
                  <p className="omis-stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:gap-8">
            {highlights.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="omis-highlight-card group"
              >
                <span
                  className="pointer-events-none absolute right-5 top-4 font-serif text-[clamp(3rem,8vw,4.5rem)] font-bold leading-none text-slate-100/90 transition-colors duration-300 group-hover:text-teal-50/90 sm:right-6 sm:top-5"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="icon-badge h-14 w-14 shadow-md shadow-teal-900/10 sm:h-16 sm:w-16">
                    <item.icon className="h-6 w-6 text-turquoise-600 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="mt-6 font-serif text-[clamp(1.25rem,2.5vw,1.625rem)] font-semibold leading-tight tracking-[-0.02em] text-navy-900 sm:mt-7">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.8] text-slate-600 sm:mt-4 sm:text-base sm:leading-[1.85]">
                    {item.text}
                  </p>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-turquoise-500 via-teal-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
