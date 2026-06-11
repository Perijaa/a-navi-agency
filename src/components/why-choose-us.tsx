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
import { Counter } from "@/components/ui/counter";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";
import type { LucideIcon } from "lucide-react";

const proofPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MapPin,
    title: "Born in Omi\u0161",
    description:
      "We\u2019re the crew on the boat — raised on the Cetina, knowing every cave and hidden beach.",
  },
  {
    icon: Compass,
    title: "River, Canyon, and Sea",
    description:
      "Five distinct ways to experience where the river meets the Adriatic, all from one harbour.",
  },
  {
    icon: Heart,
    title: "Every Age, Every Family",
    description:
      "From toddlers on the glass boat to grandparents on the taxi cruise. Pets welcome too.",
  },
  {
    icon: ShieldCheck,
    title: "Guided, Equipped, Looked After",
    description:
      "Professional guides, life jackets, helmets, waterproof bags — all provided before departure.",
  },
  {
    icon: Banknote,
    title: "Honest, Published Pricing",
    description:
      "Every price on this website. No hidden fees at the dock. Children under 5 ride free on most tours.",
  },
  {
    icon: Users,
    title: "Trusted by 50,000+ Guests",
    description:
      "Fifteen seasons, guests from 40+ countries, 4.9 rating built one review at a time.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Seasons", decimals: 0 },
  { value: 4.9, suffix: "", label: "Rating", decimals: 1 },
  { value: 40, suffix: "+", label: "Countries", decimals: 0 },
  { value: 5, suffix: "", label: "Experiences", decimals: 0 },
];

export function WhyChooseUs() {
  return (
    <SectionShell bg="950">
      <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-10">
        <SectionPanel>
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-turquoise-400">
            Our Promise
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Why guests choose
            <br />
            <span className="italic font-normal text-white/65">Omiš with us</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Fifteen years knowing the Cetina and the Adriatic — every tide,
            every canyon turn, every hidden beach along the Dalmatian coast.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="font-serif text-3xl font-bold text-white">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel accent={false}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {proofPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5"
              >
                <point.icon className="h-5 w-5 text-turquoise-400" />
                <h3 className="mt-3 text-[15px] font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionPanel>
      </div>

      <p className="mt-10 text-[11px] tracking-wide text-white/30 sm:mt-12">
        A-Navi Agency, d.o.o. — Licensed touring agency, Omiš, Croatia
      </p>
    </SectionShell>
  );
}
