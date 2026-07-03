"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { HeroVideoBg } from "@/components/ui/hero-video-bg";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

const TRUST_ITEMS = [
  "Free cancellation",
  "Instant booking",
  "Small groups",
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

const STAGGER = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.07, duration: 0.7, ease: EASE },
  }),
};

function StarRow({ size = "sm" }: { size?: "sm" | "xs" }) {
  return (
    <span className={size === "xs" ? "hero-v2__stars hero-v2__stars--xs" : "hero-v2__stars"} aria-hidden>
      ★★★★★
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 24]);

  const motionProps = (i: number) =>
    reducedMotion
      ? {}
      : {
          initial: "hidden" as const,
          animate: "show" as const,
          custom: i,
          variants: STAGGER,
        };

  return (
    <section
      ref={ref}
      className="hero-v2 hero-section relative min-h-[100svh] w-full overflow-hidden bg-ink"
      data-mobile-bar-surface="dark"
      aria-label="Hero"
    >
      <HeroVideoBg parallaxY={reducedMotion ? 0 : videoY} />

      <div className="hero-media__overlay bg-ink/18" aria-hidden />
      <div
        className="hero-media__overlay bg-gradient-to-b from-ink/30 via-transparent to-ink/50"
        aria-hidden
      />

      <motion.div
        style={{ opacity: reducedMotion ? 1 : contentOpacity }}
        className="hero-media__content hero-v2__content relative flex min-h-[100svh] flex-col items-center px-[var(--container-pad)] pb-6 pt-[calc(env(safe-area-inset-top)+6.5rem)] sm:pb-8"
      >
        <div className="hero-v2__column">
          {/* Rating chip */}
          <motion.div {...motionProps(0)} className="hero-v2__chip">
            <StarRow size="xs" />
            <span>4.9</span>
            <span className="hero-v2__chip-sep" aria-hidden>·</span>
            <span className="hero-v2__chip-muted">1,200 reviews</span>
          </motion.div>

          {/* Dominant headline */}
          <motion.h1
            {...motionProps(1)}
            style={reducedMotion ? undefined : { y: titleY }}
            className="hero-v2__title"
          >
            <span className="hero-v2__title-line">Experience the Wild</span>
            <span className="hero-v2__title-accent">Cetina River</span>
          </motion.h1>

          {/* Context chips */}
          <motion.div {...motionProps(2)} className="hero-v2__chip-row">
            <span className="hero-v2__chip">Rafting · Canyoning · Boat Tours</span>
            <span className="hero-v2__chip hero-v2__chip--ghost">Every day from Omi&scaron;</span>
          </motion.div>

          {/* CTA */}
          <motion.div {...motionProps(3)} className="hero-v2__actions">
            <a href="#contact" className="hero-v2__cta-primary">
              Book now
            </a>
            <a href="#experiences" className="hero-v2__cta-link">
              View all tours
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </motion.div>

          {/* Trust micro-pills */}
          <motion.ul {...motionProps(4)} className="hero-v2__chip-row hero-v2__chip-row--trust">
            {TRUST_ITEMS.map((item) => (
              <li key={item}>
                <span className="hero-v2__chip hero-v2__chip--mini">{item}</span>
              </li>
            ))}
          </motion.ul>

          {/* Stats micro-pills */}
          <motion.div {...motionProps(5)} className="hero-v2__chip-row hero-v2__chip-row--stats">
            <span className="hero-v2__chip hero-v2__chip--mini">
              From <strong>&euro;{minPrice}</strong> / person
            </span>
            <span className="hero-v2__chip hero-v2__chip--mini">
              {experiences.length} tours
            </span>
            <span className="hero-v2__chip hero-v2__chip--mini">Daily departures</span>
          </motion.div>
        </div>

        <a
          href="#experiences"
          className="hero-scroll-indicator hero-v2__scroll"
          aria-label="Scroll to explore tours"
        >
          <span className="hero-v2__scroll-label">Explore</span>
          <span className="hero-scroll-line">
            <ArrowDown className="hero-scroll-chevron h-4 w-4" strokeWidth={1.5} />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
