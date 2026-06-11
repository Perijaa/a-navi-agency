"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 lg:py-40">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-turquoise-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          title="Moments on the Water"
          subtitle="A glimpse into the experiences waiting for you on the Adriatic and Cetina River"
        />

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid auto-rows-[200px] gap-3 sm:auto-rows-[240px] sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3"
        >
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl ${
                item.span === "tall"
                  ? "row-span-2"
                  : item.span === "wide"
                    ? "sm:col-span-2"
                    : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={
                  item.span === "wide"
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 1024px) 100vw, 33vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white/90">{item.alt}</p>
              </div>

              {/* Border ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06] transition-all group-hover:ring-turquoise-400/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
