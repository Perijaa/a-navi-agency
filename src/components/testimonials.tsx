"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";

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
    <SectionShell id="reviews" bg="925">
      <SectionHeader
        label="Guest Stories"
        title="What Our Guests Say"
        subtitle="Real reviews from travellers who explored Omiš with us."
      />

      <SectionPanel className="mt-14 sm:mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="w-full"
          >
            <div className="mb-6 flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="h-4 w-4 fill-gold-400 text-gold-400"
                />
              ))}
            </div>

            <blockquote className="w-full font-serif text-2xl leading-[1.55] text-white/85 sm:text-3xl lg:text-[2rem]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/[0.08] pt-6">
              <span className="text-[15px] font-semibold text-white">
                {t.name}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/45">
                <MapPin className="h-3.5 w-3.5" />
                {t.country} &middot; {t.experience}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-12 bg-turquoise-400"
                  : "w-6 bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </SectionPanel>
    </SectionShell>
  );
}
