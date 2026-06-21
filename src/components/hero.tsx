"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Star, ChevronDown } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionWave } from "@/components/ui/section-wave";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.12 + i * 0.11,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);

  return (
    <section ref={ref} className="relative flex min-h-[100dvh] w-full flex-col">
      <div className="relative flex min-h-[100dvh] flex-1 flex-col overflow-hidden">
        <Image
          src="/images/hero-rafting.png"
          alt="Rafting on the Cetina river near Omiš, Croatia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-navy-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/10 to-navy-900/90" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-24 pt-safe-nav sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center sm:max-w-2xl sm:gap-10 lg:max-w-3xl lg:gap-12">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md"
            >
              <MapPin className="h-3.5 w-3.5 text-turquoise-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Omi&scaron;, Dalmatia
              </span>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="font-serif text-[clamp(2.35rem,7.5vw,4.25rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                Where the canyon
                <br />
                <span className="bg-gradient-to-r from-white via-teal-200 to-turquoise-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
                  meets the sea
                </span>
              </h1>
            </motion.div>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:max-w-xl lg:text-[1.125rem] lg:leading-[1.8]"
            >
              Glass-bottom boats, canyon rafting, hidden Adriatic beaches — five
              ways to explore Omi&scaron;, all starting from the Cetina
              promenade.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.9 guest rating
              </span>
              <span className="hidden text-white/30 sm:inline">|</span>
              <span className="text-sm text-white/75">50k+ happy guests</span>
              <span className="hidden text-white/30 sm:inline">|</span>
              <span className="rounded-full bg-turquoise-500/90 px-3.5 py-1 text-sm font-semibold text-white shadow-md shadow-turquoise-900/30">
                From &euro;{minPrice}
              </span>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex w-full max-w-xs flex-col gap-3 pt-1 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:pt-2"
            >
              <a
                href="#experiences"
                className="btn-primary w-full shadow-lg shadow-turquoise-900/25 sm:min-w-[11rem] sm:w-auto"
              >
                See all tours
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-on-dark w-full sm:min-w-[11rem] sm:w-auto">
                Book your spot
              </a>
            </motion.div>

            <motion.a
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href="#experiences"
              className="group mt-2 flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/90"
            >
              <span className="text-xs font-medium tracking-wide text-white/60 transition-colors group-hover:text-white/90">
                Scroll to discover your adventure
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <SectionWave fill="#ffffff" />
    </section>
  );
}
