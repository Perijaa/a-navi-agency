"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { gallery } from "@/lib/data";
import type { GalleryItem } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";

function GalleryHero({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-full"
    >
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="relative h-[45vh] min-h-[320px] lg:h-[55vh]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <MapPin className="h-3 w-3" />
              {item.location}
            </div>
            <p className="mt-3 max-w-2xl font-serif text-xl leading-[1.4] text-white/90 sm:text-2xl lg:text-3xl">
              {item.caption}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryTall({ item, delay }: { item: GalleryItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="row-span-2"
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="font-serif text-sm italic text-white/80">{item.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryWide({ item, delay }: { item: GalleryItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="sm:col-span-2"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08]">
        <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-[1.6s] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

function GalleryNormal({ item, delay }: { item: GalleryItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08]">
        <div className="relative h-[220px] sm:h-[240px] lg:h-[260px]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

function GalleryCard({ item, delay }: { item: GalleryItem; delay: number }) {
  switch (item.span) {
    case "hero":
      return <GalleryHero item={item} />;
    case "tall":
      return <GalleryTall item={item} delay={delay} />;
    case "wide":
      return <GalleryWide item={item} delay={delay} />;
    default:
      return <GalleryNormal item={item} delay={delay} />;
  }
}

export function Gallery() {
  const heroItem = gallery.find((g) => g.span === "hero");
  const gridItems = gallery.filter((g) => g.span !== "hero");

  return (
    <SectionShell id="gallery" bg="925">
      <SectionHeader
        label="Dalmatian Moments"
        title="Scenes from the Cetina and the Coast"
        subtitle="Every frame captured on our tours — from the Cetina gorge to the open Adriatic off Omiš."
      />

      <SectionPanel className="mt-14 sm:mt-16" accent={false} padded={false}>
        <div className="space-y-4 p-4 sm:space-y-5 sm:p-5 lg:p-6">
          {heroItem && <GalleryCard item={heroItem} delay={0} />}
          <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[240px] sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3 lg:gap-5">
            {gridItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </SectionPanel>

      <p className="mt-10 text-sm text-white/45 sm:mt-12">
        Every photo was taken on our tours along the Omiš coast and Cetina
        canyon. Your moment is next.
      </p>
    </SectionShell>
  );
}
