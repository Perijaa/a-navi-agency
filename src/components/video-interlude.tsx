"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionPanel } from "@/components/ui/section-panel";

export function VideoInterlude() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.65, 0.5, 0.65]);

  return (
    <section
      ref={ref}
      className="relative my-8 overflow-hidden sm:my-12 lg:my-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.10] sm:min-h-[420px] lg:min-h-[480px]">
          <motion.div
            className="absolute inset-[-8%]"
            style={{ scale: videoScale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-navy-950"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-navy-950/60" />

          <div className="relative z-10 flex h-full min-h-[360px] items-center p-6 sm:min-h-[420px] sm:p-10 lg:min-h-[480px] lg:p-14">
            <SectionPanel className="max-w-2xl border-white/15 bg-navy-950/50 backdrop-blur-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-turquoise-400">
                The Omi&scaron; Collection
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl">
                Five experiences.
                <br />
                <span className="italic font-normal text-white/70">
                  One Dalmatian coastline.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                From the Cetina canyon to the open Adriatic — each tour reveals
                a different side of Omi&scaron;.
              </p>
            </SectionPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
