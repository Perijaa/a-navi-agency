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
    <div
      className={`card overflow-hidden text-center transition-all duration-200 ${
        isOpen
          ? "border-teal-200/70 bg-gradient-to-b from-teal-50/30 to-white shadow-[0_8px_32px_-12px_rgba(20,184,166,0.15)]"
          : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col items-center gap-5 px-8 py-7 sm:gap-6 sm:px-9 sm:py-8"
      >
        <span className="max-w-xl text-base font-semibold leading-snug text-balance text-navy-900 sm:text-lg">
          {item.question}
        </span>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
            isOpen
              ? "bg-turquoise-500 text-white shadow-md shadow-turquoise-500/30"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mx-auto max-w-xl border-t border-slate-100 px-8 pb-8 pt-7 text-[15px] leading-[1.85] text-balance text-slate-600 sm:px-9 sm:pb-9 sm:pt-8 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" bg="mid" className="!pb-0">
      <div className="section-stack">
        <SectionHeader
          label="FAQ"
          title="Before you book"
          subtitle="No payment upfront. Free cancellation up to 24 hours."
          className="[&_h2]:!mt-7 [&_p]:!mt-8"
        />

        <div className="mx-auto w-full max-w-xl window-stack xl:max-w-2xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className="mx-auto max-w-xl text-center text-[15px] leading-relaxed text-slate-500 sm:text-base xl:max-w-2xl">
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-turquoise-600 underline-offset-2 hover:text-turquoise-700 hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </SectionShell>
  );
}
