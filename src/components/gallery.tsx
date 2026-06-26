"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

export function Gallery() {
  const [featured, ...rest] = gallery;

  return (
    <SectionShell id="gallery" bg="mid" className="!pb-0">
      <div className="section-stack">
        <SectionHeader
          label="Gallery"
          title="Scenes from our tours"
          subtitle="The Cetina canyon and Adriatic coast off Omiš."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content flex flex-col gap-12 sm:gap-14 xl:gap-16">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="gallery-card card group relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]"
            >
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 64rem"
                className="gallery-image object-cover"
              />
              <div className="gallery-featured-overlay" />
              <div className="absolute inset-0 flex flex-col items-end justify-end px-8 pb-10 text-left sm:px-12 sm:pb-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md sm:text-[11px]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise-300" aria-hidden />
                  {featured.location}
                </span>
                <p className="mt-3 max-w-2xl font-serif text-[clamp(1.25rem,2.6vw,1.875rem)] font-medium leading-[1.2] text-balance text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] sm:mt-4">
                  {featured.caption}
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-2 window-grid xl:grid-cols-4 xl:gap-8">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="gallery-card card group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1280px) 50vw, 16rem"
                  className="gallery-image object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="gallery-caption">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
