"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionWave } from "@/components/ui/section-wave";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

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

        <div className="absolute inset-0 bg-navy-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-safe-nav sm:px-8"
        >
          <div className="mx-auto w-full max-w-2xl text-center lg:max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Omi&scaron;, Croatia
            </p>

            <h1 className="mt-5 font-serif text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-white lg:mt-6">
              Boat tours &amp; canyon adventures
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Five unforgettable tours from the Cetina promenade — from
              &euro;{minPrice}
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <a href="#experiences" className="btn-primary w-full sm:w-auto">
                View tours
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-on-dark w-full sm:w-auto">
                Book now
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <SectionWave fill="#ffffff" />
    </section>
  );
}
