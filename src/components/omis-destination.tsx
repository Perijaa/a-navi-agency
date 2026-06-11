"use client";

import { motion } from "framer-motion";
import { MapPin, Anchor, Mountain, Waves } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";

const highlights = [
  {
    icon: MapPin,
    title: "Departure point",
    text: "Cetina promenade, Omi\u0161 harbour — easy to find, no transfers needed.",
  },
  {
    icon: Mountain,
    title: "Cetina canyon",
    text: "Limestone gorge, Radmanove Mlinice, and river adventures minutes from town.",
  },
  {
    icon: Waves,
    title: "Adriatic coast",
    text: "Open sea, hidden beaches, and Dalmatian coastline right off Omi\u0161.",
  },
  {
    icon: Anchor,
    title: "One local crew",
    text: "Five experiences, one harbour — glass boat, submarine, rental, taxi & rafting.",
  },
];

export function OmisDestination() {
  return (
    <SectionShell id="omis" bg="900">
      <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12">
        <SectionPanel>
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-turquoise-400">
            The Destination
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Omi&scaron;, where the river
            <br />
            <span className="italic font-normal text-white/70">meets the sea</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
            A small Dalmatian town at the mouth of the Cetina canyon — pirate
            heritage, white cliffs, and one of Croatia&apos;s most dramatic
            river gorges. Every A-Navi tour starts on the promenade where
            canyon water flows into the Adriatic.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-turquoise-400 transition-colors hover:text-turquoise-300"
          >
            Book from the Omi&scaron; harbour
            <span aria-hidden="true">&rarr;</span>
          </a>
        </SectionPanel>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SectionPanel accent={false} className="h-full">
                <item.icon className="h-5 w-5 text-turquoise-400" />
                <h3 className="mt-3 text-[15px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.text}
                </p>
              </SectionPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
