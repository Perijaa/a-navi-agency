"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () =>
      setActive(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section id="reviews" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-turquoise-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Guest Stories"
          title="Trusted by Travelers"
          subtitle="Real stories from guests who explored Omi&#353; with us"
        />

        {/* Testimonial carousel */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10 lg:p-14">
              <Quote className="mb-8 h-10 w-10 text-turquoise-500/15" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-serif text-xl leading-relaxed text-white/80 sm:text-2xl lg:text-[1.65rem] lg:leading-[1.6]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-10 flex items-center gap-4 border-t border-white/[0.05] pt-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-turquoise-400/20 to-blue-500/20 text-xl ring-2 ring-white/[0.06]">
                      {t.countryFlag}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="flex items-center gap-2 text-sm text-white/40">
                        <MapPin className="h-3 w-3" />
                        {t.country} &middot; {t.experience} &middot; {t.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-turquoise-400"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Location line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/25">
            <MapPin className="mr-1 inline h-3 w-3" />
            Find us on the Cetina promenade in Omi&#353;, Croatia &mdash; right
            where the river meets the sea.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
