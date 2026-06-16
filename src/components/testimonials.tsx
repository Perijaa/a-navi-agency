"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin } from "lucide-react";
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
      <SectionHeader
        label="Reviews"
        title="What guests say"
        subtitle="Real experiences on the Cetina and Adriatic."
      />

      <div className="section-content section-body">
        <div className="section-panel mx-auto max-w-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="mb-5 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="font-serif text-xl leading-relaxed text-navy-900 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex flex-col items-center gap-1 border-t border-slate-100 pt-5 sm:flex-row sm:justify-center sm:gap-2">
                <span className="font-medium text-navy-900">{t.name}</span>
                <span className="hidden text-slate-300 sm:inline">&middot;</span>
                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-turquoise-600" />
                  {t.country} &middot; {t.experience}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-turquoise-500"
                    : "w-1.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
