"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

export function Gallery() {
  const [featured, ...rest] = gallery;

  return (
    <SectionShell id="gallery" bg="mid">
      <div className="section-stack">
        <SectionHeader
          label="Gallery"
          title="Scenes from our tours"
          subtitle="The Cetina canyon and Adriatic coast off Omiš."
        />

        <div className="section-content flex flex-col gap-12 sm:gap-14 xl:gap-16">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]"
            >
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 64rem"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-navy-900/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/25 to-navy-900/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  {featured.location}
                </p>
                <p className="mx-auto mt-3 max-w-xl font-serif text-[clamp(1.125rem,2.5vw,1.625rem)] leading-snug text-balance text-white sm:mt-4">
                  {featured.caption}
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-2 window-grid xl:grid-cols-4 xl:gap-8">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="card group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1280px) 50vw, 16rem"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/15" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
