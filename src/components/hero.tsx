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
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 shadow-lg shadow-black/15 backdrop-blur-md"
            >
              <MapPin className="h-3.5 w-3.5 text-turquoise-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
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
              className="max-w-lg text-base leading-relaxed text-balance text-white/85 sm:text-lg xl:max-w-xl xl:text-[1.125rem] xl:leading-[1.8]"
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
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.9 rating
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm text-white/90 backdrop-blur-sm">
                <Users className="h-4 w-4 text-turquoise-300" />
                50k+ guests
              </span>
              <span className="rounded-full bg-turquoise-500 px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-turquoise-900/35">
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
                className="btn-primary w-full shadow-lg shadow-turquoise-900/30 xl:min-w-[11rem] xl:w-auto"
              >
                See all tours
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-on-dark w-full xl:min-w-[11rem] xl:w-auto"
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
              className="group mt-4 flex flex-col items-center gap-2.5 text-white/50 transition-colors hover:text-white/90"
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
