"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

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
    <article className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="faq-trigger"
        aria-expanded={isOpen}
      >
        <span className="faq-question text-balance">{item.question}</span>
        <span className="faq-toggle" aria-hidden>
          {isOpen ? (
            <Minus className="h-3 w-3" strokeWidth={2.5} />
          ) : (
            <Plus className="h-3 w-3" strokeWidth={2.5} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="faq-answer-wrap"
          >
            <p className="faq-answer">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" bg="mid" className="!pt-[2cm] !pb-0">
      <div className="section-stack">
        <SectionHeader
          label="FAQ"
          title="Before you book"
          subtitle="No payment upfront. Free cancellation up to 24 hours."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="section-content faq-body">
          <div className="faq-list window-stack">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <p className="faq-footer">
            Still have questions?{" "}
            <a href="#contact" className="faq-footer-link">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
