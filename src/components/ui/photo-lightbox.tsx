"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

export type LightboxItem = {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  location?: string;
};

type PhotoLightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function PhotoLightbox({
  items,
  index,
  onClose,
  onChange,
}: PhotoLightboxProps) {
  const open = index !== null;
  const item = index !== null ? items[index] : null;
  const count = items.length;

  useEffect(() => {
    if (!open || index === null) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onChange((index + 1) % count);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, count, onClose, onChange]);

  const prev = () => {
    if (index === null) return;
    onChange((index - 1 + count) % count);
  };

  const next = () => {
    if (index === null) return;
    onChange((index + 1) % count);
  };

  return (
    <AnimatePresence>
      {open && item && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <motion.button
            type="button"
            className="lightbox-backdrop"
            aria-label="Close gallery"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            type="button"
            onClick={onClose}
            className="lightbox-close"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="lightbox-nav">
            <button type="button" onClick={prev} className="lightbox-nav-btn" aria-label="Previous photo">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" onClick={next} className="lightbox-nav-btn" aria-label="Next photo">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              className="lightbox-stage"
              initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
            >
              <div className="lightbox-image-wrap">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              {(item.caption || item.location) && (
                <div className="lightbox-caption">
                  {item.location && (
                    <p className="text-[11px] uppercase tracking-[0.16em] text-accent-light">
                      {item.location}
                    </p>
                  )}
                  {item.caption && (
                    <p className="mt-2 font-display text-lg font-medium leading-snug text-cream sm:text-xl">
                      {item.caption}
                    </p>
                  )}
                  <p className="mt-4 text-xs text-cream/40">
                    {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
