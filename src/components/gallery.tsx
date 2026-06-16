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
      <SectionHeader
        label="Gallery"
        title="Scenes from our tours"
        subtitle="The Cetina canyon and Adriatic coast off Omiš."
      />

      <div className="section-content section-body">
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[16/9] lg:rounded-2xl"
          >
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 64rem"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                {featured.location}
              </p>
              <p className="mt-2 max-w-xl font-serif text-lg leading-snug text-white sm:text-xl">
                {featured.caption}
              </p>
            </div>
          </motion.div>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-5">
          {rest.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg lg:rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 16rem"
                className="object-cover transition-transform duration-400 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
