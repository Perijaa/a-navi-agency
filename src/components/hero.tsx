"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, BadgeCheck, Zap, Users2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { HeroVideoBg } from "@/components/ui/hero-video-bg";

const ACCENT_TITLE = "Cetina River";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

const TRUST_ITEMS = [
  { label: "Free cancellation", icon: BadgeCheck },
  { label: "Instant booking", icon: Zap },
  { label: "Small groups", icon: Users2 },
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

const TRIPADVISOR_URL =
  "https://www.tripadvisor.co.uk/Attraction_Review-g644074-d34202004-Reviews-A_navi-Omis_Split_Dalmatia_County_Dalmatia.html";

const STAR_DELAY_MS = 280;
const DETAILS_DELAY_MS = STAR_DELAY_MS * 5 + 180;
const HOLD_MS = 2400;
const CYCLE_MS = DETAILS_DELAY_MS + 400 + HOLD_MS;

const CTA_LABEL = "BOOK NOW";
const CTA_LETTER_COUNT = CTA_LABEL.length;
const CTA_LETTER_DELAY_MS = 130;
const CTA_COMPLETE_MS = CTA_LETTER_COUNT * CTA_LETTER_DELAY_MS + 220;
const CTA_HOLD_MS = 2000;
const CTA_CYCLE_MS = CTA_COMPLETE_MS + CTA_HOLD_MS;

function HeroBookCta({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeLetters, setActiveLetters] = useState(reducedMotion ? CTA_LETTER_COUNT : 0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reducedMotion) {
      setActiveLetters(CTA_LETTER_COUNT);
      return;
    }

    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeoutsRef.current.push(id);
    };

    const clearTimers = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const runCycle = () => {
      clearTimers();
      setActiveLetters(0);

      for (let i = 1; i <= CTA_LETTER_COUNT; i++) {
        schedule(() => setActiveLetters(i), i * CTA_LETTER_DELAY_MS);
      }

      schedule(runCycle, CTA_CYCLE_MS);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [reducedMotion]);

  return (
    <a
      href="#contact"
      className="hero-v2__cta-primary hero-v2__cta-primary--animated"
      aria-label="Book now"
    >
      <span className="hero-v2__cta-text" aria-hidden>
        {CTA_LABEL.split("").map((char, index) => {
          const isActive = index < activeLetters;
          const isLatest = index === activeLetters - 1;

          return (
            <motion.span
              key={`${char}-${index}`}
              className={
                char === " "
                  ? "hero-v2__cta-letter hero-v2__cta-letter--space"
                  : "hero-v2__cta-letter"
              }
              initial={false}
              animate={
                isActive
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: isLatest ? [0.45, 1.28, 1] : 1,
                    }
                  : { opacity: 0.08, y: 8, scale: 0.72 }
              }
              transition={
                isLatest
                  ? {
                      scale: { duration: 0.36, times: [0, 0.55, 1], ease: EASE },
                      opacity: { duration: 0.14 },
                      y: { duration: 0.28, ease: EASE },
                    }
                  : { duration: 0.22, ease: "easeOut" }
              }
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </span>
    </a>
  );
}

function HeroRatingBadge({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeStars, setActiveStars] = useState(reducedMotion ? 5 : 0);
  const [showDetails, setShowDetails] = useState(reducedMotion);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reducedMotion) {
      setActiveStars(5);
      setShowDetails(true);
      return;
    }

    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeoutsRef.current.push(id);
    };

    const clearTimers = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const runCycle = () => {
      clearTimers();
      setActiveStars(0);
      setShowDetails(false);

      for (let i = 1; i <= 5; i++) {
        schedule(() => setActiveStars(i), i * STAR_DELAY_MS);
      }

      schedule(() => setShowDetails(true), DETAILS_DELAY_MS);
      schedule(runCycle, CYCLE_MS);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [reducedMotion]);

  return (
    <a
      href={TRIPADVISOR_URL}
      className="hero-v2__chip hero-v2__chip--rating hero-v2__chip--rating-animated"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="4.9 out of 5 from 1,200 reviews on Tripadvisor (opens in new tab)"
    >
      <span className="hero-v2__rating-stars" aria-hidden>
        {Array.from({ length: 5 }, (_, index) => {
          const isActive = index < activeStars;
          const isLatest = index === activeStars - 1;

          return (
            <motion.span
              key={index}
              className="hero-v2__rating-star"
              initial={false}
              animate={
                isActive
                  ? { opacity: 1, scale: isLatest ? [0.25, 1.85, 1.1] : 1.1 }
                  : { opacity: 0.12, scale: 0.35 }
              }
              transition={
                isLatest
                  ? {
                      scale: { duration: 0.42, times: [0, 0.58, 1], ease: EASE },
                      opacity: { duration: 0.16 },
                    }
                  : { duration: 0.2, ease: "easeOut" }
              }
            >
              ★
            </motion.span>
          );
        })}
      </span>

      <motion.span
        className="hero-v2__rating-details"
        aria-hidden={!showDetails}
        initial={false}
        animate={{ opacity: showDetails ? 1 : 0 }}
        transition={{ duration: 0.32, ease: EASE }}
      >
        <span className="hero-v2__rating-score">4.9</span>
        <span className="hero-v2__chip-sep" aria-hidden>
          ·
        </span>
        <span className="hero-v2__chip-muted">1,200 reviews</span>
      </motion.span>
    </a>
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
        className="hero-media__content hero-v2__content relative flex min-h-[100svh] flex-col items-center px-[var(--container-pad)]"
      >
        <div className="hero-v2__column">
          {/* Dominant headline */}
          <motion.h1
            {...motionProps(0)}
            style={reducedMotion ? undefined : { y: titleY }}
            className="hero-v2__title"
          >
            <span className="hero-v2__title-line">Experience</span>
            <span className="hero-v2__title-line">the Wild</span>
            <span
              className={`hero-v2__title-accent${reducedMotion ? " hero-v2__title-accent--static" : ""}`}
            >
              {ACCENT_TITLE.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="hero-v2__title-accent-char"
                  style={{ "--wave-i": index } as React.CSSProperties}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Rating — below headline, clears navbar */}
          <motion.div {...motionProps(1)} className="hero-v2__rating">
            <HeroRatingBadge reducedMotion={reducedMotion} />
          </motion.div>

          {/* Context chips */}
          <motion.div {...motionProps(2)} className="hero-v2__chip-row hero-v2__chip-row--context">
            <span className="hero-v2__chip">Rafting · Canyoning · Boat Tours</span>
            <span className="hero-v2__chip hero-v2__chip--ghost">Every day from Omi&scaron;</span>
          </motion.div>

          {/* CTA */}
          <motion.div {...motionProps(3)} className="hero-v2__actions">
            <HeroBookCta reducedMotion={reducedMotion} />
            <a href="#experiences" className="hero-v2__cta-link">
              View all tours
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </motion.div>

          {/* Trust + stats — aligned meta grid */}
          <motion.ul
            {...motionProps(4)}
            className={`hero-v2__meta${reducedMotion ? " hero-v2__meta--static" : ""}`}
          >
            {TRUST_ITEMS.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className="hero-v2__meta-item"
                style={{ "--wave-i": index } as React.CSSProperties}
              >
                <span className="hero-v2__chip hero-v2__chip--mini">
                  <Icon className="hero-v2__chip-icon" aria-hidden />
                  {label}
                </span>
              </li>
            ))}
            <li
              className="hero-v2__meta-item hero-v2__meta-item--price"
              style={{ "--wave-i": 3 } as React.CSSProperties}
            >
              <span className="hero-v2__chip hero-v2__chip--mini hero-v2__chip--price">
                From <strong>&euro;{minPrice}</strong> / person
              </span>
            </li>
            <li
              className="hero-v2__meta-item hero-v2__meta-item--stat"
              style={{ "--wave-i": 4 } as React.CSSProperties}
            >
              <span className="hero-v2__chip hero-v2__chip--mini">
                {experiences.length} tours
              </span>
            </li>
            <li
              className="hero-v2__meta-item hero-v2__meta-item--stat"
              style={{ "--wave-i": 5 } as React.CSSProperties}
            >
              <span className="hero-v2__chip hero-v2__chip--mini">Daily departures</span>
            </li>
          </motion.ul>
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
