"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Star, ChevronDown, Users } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/15 to-navy-900/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,18,32,0.35)_100%)]" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-safe-nav sm:px-10 xl:px-12"
        >
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-10 text-center sm:max-w-2xl sm:gap-12 xl:max-w-3xl xl:gap-14">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 shadow-lg shadow-black/15 backdrop-blur-md sm:px-6 sm:py-3"
            >
              <MapPin className="h-4 w-4 text-turquoise-300 sm:h-[1.125rem] sm:w-[1.125rem]" />
              <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
                Omi&scaron;, Dalmatia
              </span>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="font-serif text-[clamp(2.35rem,7.5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
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
              className="max-w-xl text-base leading-relaxed text-balance text-white/88 sm:text-lg sm:leading-[1.75] xl:max-w-2xl xl:text-[1.125rem] xl:leading-[1.8]"
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
              className="flex w-full flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:gap-4 xl:gap-5"
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[0.9375rem] font-medium text-white backdrop-blur-sm sm:px-5 sm:py-3 sm:text-base">
                <Star className="h-[1.125rem] w-[1.125rem] fill-amber-400 text-amber-400 sm:h-5 sm:w-5" />
                4.9 rating
              </span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[0.9375rem] text-white/92 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-base">
                <Users className="h-[1.125rem] w-[1.125rem] text-turquoise-300 sm:h-5 sm:w-5" />
                50k+ guests
              </span>
              <span className="whitespace-nowrap rounded-full bg-turquoise-500 px-4 py-2.5 text-[0.9375rem] font-semibold text-white shadow-lg shadow-turquoise-900/35 sm:px-5 sm:py-3 sm:text-base">
                From &euro;{minPrice}
              </span>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex w-full max-w-md flex-col gap-3.5 pt-1 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4 sm:pt-2 xl:max-w-none xl:gap-5 xl:pt-3"
            >
              <a
                href="#experiences"
                className="btn-primary w-full shadow-lg shadow-turquoise-900/30 sm:min-w-[11.5rem] sm:w-auto xl:min-w-[12.5rem]"
              >
                See all tours
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-on-dark w-full sm:min-w-[11.5rem] sm:w-auto xl:min-w-[12.5rem]"
              >
                Book your spot
              </a>
            </motion.div>

            <motion.a
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href="#experiences"
              className="group mt-2 flex flex-col items-center gap-2.5 text-white/50 transition-colors hover:text-white/90 sm:mt-4"
            >
              <span className="text-[0.8125rem] font-medium tracking-wide text-white/55 transition-colors group-hover:text-white/90 sm:text-sm">
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
