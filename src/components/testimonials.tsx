"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const count = testimonials.length;

  const goTo = useCallback((index: number) => {
    setActive((index + count) % count);
  }, [count]);

  const next = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, paused, reducedMotion]);

  const t = testimonials[active];

  return (
    <SectionShell id="reviews" bg="deep" className="!pt-[2cm] !pb-0">
      <div className="section-stack">
        <SectionHeader
          label="Reviews"
          title="What guests say"
          subtitle="Real experiences on the Cetina and Adriatic."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content flex justify-center">
          <div
            className="reviews-panel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setPaused(false);
              }
            }}
          >
            <div className="reviews-panel-stage" aria-live="polite">
              <Quote className="reviews-panel-quote" aria-hidden />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="reviews-panel-slide"
                >
                  <div className="reviews-panel-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <blockquote className="reviews-panel-quote-text">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="reviews-panel-author">
                    <div className="flex items-center gap-3">
                      <span className="reviews-author-avatar" aria-hidden>
                        {t.name.charAt(0)}
                      </span>
                      <span className="flex flex-col items-start">
                        <span className="reviews-panel-name">{t.name}</span>
                        <span className="reviews-panel-meta">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-turquoise-600" />
                          {t.country} &middot; {t.experience}
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="reviews-panel-controls">
              <button
                type="button"
                onClick={prev}
                className="reviews-panel-nav"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="reviews-panel-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`reviews-panel-dot${
                      i === active ? " reviews-panel-dot--active" : ""
                    }`}
                    aria-label={`Review ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="reviews-panel-nav"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
