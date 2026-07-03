"use client";

import { motion, type MotionValue } from "framer-motion";
import { withBasePath } from "@/lib/base-path";

const HERO_VIDEO = withBasePath("/videos/hero-cetina.mp4");
const HERO_POSTER = withBasePath("/images/hero-rafting.png");

export function HeroVideoBg({ parallaxY }: { parallaxY?: number | MotionValue<number> }) {
  return (
    <motion.div className="hero-media" style={{ y: parallaxY ?? 0 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        className="h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
    </motion.div>
  );
}
