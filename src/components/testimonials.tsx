"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <SectionShell id="reviews" bg="deep">
      <div className="section-stack">
        <SectionHeader
          label="Reviews"
          title="What guests say"
          subtitle="Real experiences on the Cetina and Adriatic."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content flex justify-center">
          <div className="section-panel reviews-panel relative mx-auto flex min-h-[17rem] w-full max-w-3xl flex-col overflow-hidden bg-gradient-to-b from-white to-slate-50/50 sm:min-h-[19rem]">
            <Quote
              className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-teal-100/90 sm:h-16 sm:w-16"
              aria-hidden
            />

            <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-10 text-center sm:px-12 sm:py-12 xl:px-14 xl:py-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <div className="mb-6 flex justify-center gap-1.5 sm:mb-7">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <blockquote className="mx-auto max-w-2xl font-serif text-[clamp(1.125rem,2.4vw,1.5rem)] font-medium leading-[1.75] text-balance text-navy-900">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex w-full max-w-2xl flex-col items-center gap-2.5 border-t border-slate-200/80 pt-7 sm:mt-9 sm:gap-3 sm:pt-8">
                    <span className="text-base font-semibold text-navy-900">
                      {t.name}
                    </span>
                    <span className="flex items-center justify-center gap-1.5 text-[15px] text-slate-500 sm:text-base">
                      <MapPin className="h-4 w-4 text-turquoise-600" />
                      {t.country} &middot; {t.experience}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex justify-center gap-3 pb-8 pt-2 sm:pb-9">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-10 bg-turquoise-500"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
