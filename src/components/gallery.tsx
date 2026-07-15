"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/data";
import { BlurReveal } from "@/components/motion";
import { PhotoLightbox, type LightboxItem } from "@/components/ui/photo-lightbox";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { EASE_OUT } from "@/lib/motion";

const CROPS: Record<string, string> = {
  g1: "50% 35%",
  g2: "50% 40%",
  g3: "50% 30%",
  g4: "60% 50%",
  g5: "50% 20%",
  g6: "50% 55%",
  g7: "50% 45%",
};

export function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();
  const count = gallery.length;

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      gallery.map((g) => ({
        id: g.id,
        image: g.image,
        alt: g.alt,
        caption: g.caption,
        location: g.location,
      })),
    []
  );

  const goTo = useCallback(
    (index: number) => setActive((index + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, paused, reducedMotion]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) next();
    else prev();
  };

  const item = gallery[active];

  return (
    <section id="gallery" className="gallery-v2" data-mobile-bar-surface="light">
      <header className="aw-container gallery-v2__intro">
        <div className="gallery-v2__intro-inner experiences-section__copy">
          <BlurReveal>
            <p className="experiences-section__eyebrow">Gallery</p>
          </BlurReveal>
          <BlurReveal variant="fadeUp" delay={0.05}>
            <h2 className="experiences-section__headline">
              <span className="experiences-section__headline-line">Moments on the</span>
              <span className="experiences-section__headline-accent">Cetina</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <p className="experiences-section__lead gallery-v2__lead">
              Crystal waters, dramatic cliffs, and Dalmatian light — captured from our boats and
              the canyon rim.
            </p>
            <div className="gallery-v2__meta">
              <span className="gallery-v2__meta-chip">{gallery.length} photos</span>
              <span className="gallery-v2__meta-chip gallery-v2__meta-chip--ghost">
                Slideshow · Tap to expand
              </span>
            </div>
          </BlurReveal>
        </div>
      </header>

      <div className="aw-container gallery-v2__showcase-wrap">
        <div
          className="gallery-v2__slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="gallery-v2__nav-btn gallery-v2__nav-btn--prev"
            onClick={prev}
            aria-label="Previous photo"
          >
            <ChevronLeft strokeWidth={1.75} />
          </button>

          <div className="gallery-v2__stage">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.55, ease: EASE_OUT }}
                className="gallery-v2__slide"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(active)}
                  className="gallery-v2__card"
                  aria-label={`View ${item.alt}`}
                >
                  <div className="gallery-v2__frame relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, 44rem"
                      className="gallery-v2__image"
                      style={{ objectPosition: CROPS[item.id] ?? "center" }}
                      priority={active === 0}
                    />
                    <div className="gallery-v2__shade" aria-hidden />
                    <span className="gallery-v2__expand" aria-hidden>
                      <Expand className="h-5 w-5" />
                    </span>
                    <div className="gallery-v2__caption">
                      <p className="gallery-v2__title">{item.alt}</p>
                      <p className="gallery-v2__location">{item.location}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="gallery-v2__nav-btn gallery-v2__nav-btn--next"
            onClick={next}
            aria-label="Next photo"
          >
            <ChevronRight strokeWidth={1.75} />
          </button>

          <div className="gallery-v2__controls">
            <p className="gallery-v2__counter" aria-live="polite">
              {active + 1} / {count}
            </p>
            <div className="gallery-v2__dots" role="tablist" aria-label="Gallery photos">
              {gallery.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show photo ${index + 1}`}
                  className={`gallery-v2__dot${index === active ? " gallery-v2__dot--active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PhotoLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
