"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { BlurReveal } from "@/components/motion";

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="review-bubble__stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="review-bubble__stars-empty">{"☆".repeat(5 - rating)}</span>
    </span>
  );
}

function TypewriterQuote({ text }: { text: string }) {
  const reducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let index = 0;
    let cancelled = false;
    let timeoutId = 0;

    const tick = () => {
      if (cancelled) return;
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        setDone(true);
        return;
      }
      timeoutId = window.setTimeout(tick, 22);
    };

    timeoutId = window.setTimeout(tick, 180);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [text, reducedMotion]);

  return (
    <span className="review-bubble__typed">
      &ldquo;{displayed}
      {!done && <span className="review-bubble__cursor" aria-hidden />}
      {done && <>&rdquo;</>}
    </span>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => setActive((index + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [next, paused, reducedMotion]);

  const t = testimonials[active];

  return (
    <section id="reviews" className="reviews-section bg-cream">
      <div className="aw-container experiences-section__intro">
        <BlurReveal className="experiences-section__copy">
          <p className="aw-kicker">Reviews</p>
          <h2 className="aw-headline mt-4 text-ink">What guests say.</h2>
        </BlurReveal>
      </div>

      <div className="aw-container reviews-section__slider">
        <div
          className="reviews-section__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -16, scale: 0.98 }}
              transition={
                reducedMotion
                  ? { duration: 0.2 }
                  : { type: "spring", stiffness: 340, damping: 28, mass: 0.9 }
              }
              aria-live="polite"
              className="reviews-section__quote"
            >
              <article className="review-bubble">
                <div className="review-bubble__frame">
                  <div className="review-bubble__badge">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                    Verified guest review
                  </div>

                  <header className="review-bubble__header">
                    <div className="review-bubble__avatar" aria-hidden>
                      {getInitials(t.name)}
                    </div>
                    <div className="review-bubble__identity">
                      <p className="review-bubble__name">{t.name}</p>
                      <p className="review-bubble__meta">
                        {t.countryFlag} {t.country} · {t.experience}
                      </p>
                    </div>
                    <StarRow rating={t.rating} />
                  </header>

                  <blockquote className="review-bubble__text">
                    <TypewriterQuote text={t.quote} />
                  </blockquote>

                  {t.date && <p className="review-bubble__date">{t.date}</p>}
                </div>
                <span className="review-bubble__tail" aria-hidden />
              </article>
            </motion.div>
          </AnimatePresence>

          <div className="reviews-section__controls">
            <button
              type="button"
              onClick={prev}
              className="reviews-section__nav-btn"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`reviews-section__dot${i === active ? " reviews-section__dot--active" : ""}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="reviews-section__nav-btn"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
