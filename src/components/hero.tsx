"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Star, ChevronDown, Users } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionWave } from "@/components/ui/section-wave";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { fadeUpReduced, fadeUpVariants } from "@/lib/motion";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const fadeUp = reducedMotion ? fadeUpReduced : fadeUpVariants;

  return (
    <section ref={ref} className="relative flex min-h-[100dvh] w-full flex-col">
      <div className="relative flex min-h-[100dvh] flex-1 flex-col overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: reducedMotion ? 0 : imageY,
            scale: reducedMotion ? 1 : imageScale,
          }}
        >
          <Image
            src="/images/hero-rafting.png"
            alt="Rafting on the Cetina river near Omiš, Croatia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-safe-nav sm:px-10 xl:px-12"
        >
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-10 text-center sm:max-w-2xl sm:gap-12 xl:max-w-4xl xl:gap-14">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-5 py-2.5 backdrop-blur-md sm:gap-3 sm:px-6 sm:py-3"
            >
              <MapPin className="h-4 w-4 text-turquoise-300 sm:h-[1.125rem] sm:w-[1.125rem]" />
              <span className="hero-stat-pill text-[13px] font-semibold uppercase text-white/90 sm:text-sm">
                Omi&scaron;, Dalmatia
              </span>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="hero-title font-serif font-semibold text-white">
                Where the canyon
                <br />
                <span className="bg-gradient-to-r from-white via-teal-200 to-turquoise-300 bg-clip-text text-transparent">
                  meets the sea
                </span>
              </h1>
            </motion.div>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-lg text-base leading-[1.75] text-balance text-white/85 sm:text-lg xl:max-w-2xl xl:text-[1.1875rem] xl:leading-[1.8]"
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
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
            >
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-[15px] font-medium text-white/95 backdrop-blur-md sm:px-5 sm:py-3">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-[1.125rem] sm:w-[1.125rem]" />
                4.9 rating
              </span>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-[15px] text-white/85 backdrop-blur-md sm:px-5 sm:py-3">
                <Users className="h-4 w-4 text-turquoise-300 sm:h-[1.125rem] sm:w-[1.125rem]" />
                50k+ guests
              </span>
              <span className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-turquoise-500 to-turquoise-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-turquoise-900/40 sm:px-6 sm:py-3">
                From &euro;{minPrice}
              </span>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex w-full max-w-sm flex-col gap-4 pt-2 xl:max-w-none xl:flex-row xl:justify-center xl:gap-5 xl:pt-4"
            >
              <a
                href="#experiences"
                className="btn-primary min-h-12 w-full text-base shadow-lg shadow-turquoise-900/30 xl:min-w-[12rem] xl:w-auto"
              >
                See all tours
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-on-dark min-h-12 w-full text-base xl:min-w-[12rem] xl:w-auto"
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
              className="group mt-4 flex min-h-11 flex-col items-center justify-center gap-2.5 text-white/50 transition-colors hover:text-white/90"
            >
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 transition-colors group-hover:text-white/80">
                Scroll to discover your adventure
              </span>
              <span className={reducedMotion ? undefined : "hero-scroll-chevron"}>
                <ChevronDown className="h-5 w-5" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <SectionWave fill="#faf8f5" />
    </section>
  );
}
