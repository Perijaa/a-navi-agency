"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { experiences } from "@/lib/data";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Video */}
      <motion.div
        className="absolute inset-0 scale-105"
        style={{ y: bgY, scale: bgScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Overlay — lighter top, strong bottom fade for text */}
      <div className="absolute inset-0 bg-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />

      {/* Content — bottom anchored, full width */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-24 pt-28 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 xl:px-20"
      >
        <div className="w-full">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Omi&scaron;, Croatia &middot; Cetina promenade
          </p>

          <h1 className="mt-5 font-serif text-[clamp(3rem,11vw,7rem)] font-bold leading-[0.92] tracking-tight text-white">
            Omi&scaron;
          </h1>
          <p className="mt-3 font-serif text-[clamp(1.5rem,4vw,2.75rem)] font-normal leading-tight text-white/85">
            Boat tours &amp; canyon adventures
          </p>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/60 sm:text-lg">
            5 tours from the harbour &mdash; from &euro;{minPrice}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-navy-950 transition-colors hover:bg-turquoise-300"
            >
              View Tours
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              Book Now
            </a>
          </div>
        </div>

        <a
          href="#experiences"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70"
          aria-label="Scroll to tours"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Tours</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
