"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";
import { EASE_OUT } from "@/lib/motion";

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`faq-section__item${isOpen ? " faq-section__item--open" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="faq-section__trigger"
        aria-expanded={isOpen}
      >
        <span className="faq-section__question">{item.question}</span>
        <ChevronDown
          className={`faq-section__chevron${isOpen ? " faq-section__chevron--open" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="faq-section__answer">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section bg-cream">
      <div className="aw-container experiences-section__intro">
        <BlurReveal className="experiences-section__copy">
          <p className="aw-kicker">FAQ</p>
          <h2 className="aw-headline mt-4 text-ink">Common questions.</h2>
          <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
            No payment upfront. Free cancellation 24 hours before departure.
          </p>
        </BlurReveal>
      </div>

      <div className="aw-container faq-section__list">
        <Stagger stagger={0.04} className="faq-section__accordion">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FaqItem
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <BlurReveal delay={0.08} className="faq-section__footer">
          <p className="text-[15px] text-stone-500">
            Still have questions?{" "}
            <a href="#contact" className="pro-link !text-[15px]">
              Contact us
            </a>
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}
