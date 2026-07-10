"use client";

import { useEffect, useRef } from "react";
import { motion, type MotionValue } from "framer-motion";
import { withBasePath } from "@/lib/base-path";

const HERO_VIDEO = withBasePath("/videos/hero-cetina.mp4");
const HERO_POSTER = withBasePath("/images/hero-poster.jpg");

export function HeroVideoBg({ parallaxY }: { parallaxY?: number | MotionValue<number> }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (document.hidden || !video.paused) return;
      void video.play().catch(() => {
        /* Autoplay may wait for first gesture on some devices. */
      });
    };

    const keepLooping = () => {
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
      }
      tryPlay();
    };

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    video.addEventListener("ended", keepLooping);
    video.addEventListener("stalled", tryPlay);
    video.addEventListener("waiting", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);

    tryPlay();

    const interval = window.setInterval(tryPlay, 2500);

    const unlockOnGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("click", unlockOnGesture);
    };

    window.addEventListener("touchstart", unlockOnGesture, { passive: true });
    window.addEventListener("click", unlockOnGesture);

    return () => {
      video.removeEventListener("ended", keepLooping);
      video.removeEventListener("stalled", tryPlay);
      video.removeEventListener("waiting", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("click", unlockOnGesture);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <motion.div className="hero-media" style={{ y: parallaxY ?? 0 }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        disablePictureInPicture
        className="hero-media__video h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
    </motion.div>
  );
}
