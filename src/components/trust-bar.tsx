"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { SectionShell } from "@/components/ui/section-shell";

const stats = [
  { value: 15, suffix: "", decimals: 0, label: "Seasons on the Cetina" },
  { value: 50, suffix: "k+", decimals: 0, label: "Guests welcomed" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating" },
  { value: 40, suffix: "+", decimals: 0, label: "Countries represented" },
];

export function TrustBar() {
  return (
    <SectionShell bg="mid">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="grid w-full grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-x-10 md:gap-y-0 lg:gap-x-12"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-left md:text-center"
          >
            <div className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <Counter
                target={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                duration={2.5}
              />
            </div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45 sm:text-[12px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
