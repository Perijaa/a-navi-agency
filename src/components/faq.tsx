"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-xl border transition-colors duration-300 ${
        isOpen
          ? "border-turquoise-400/25 bg-white/[0.05]"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/12"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-base font-medium text-white sm:text-lg">
          {item.question}
        </span>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-turquoise-400/30 bg-turquoise-500/15"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-turquoise-400" />
          ) : (
            <Plus className="h-4 w-4 text-white/50" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6">
              <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" bg="950">
      <div className="grid w-full gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <SectionHeader
            label="Common Questions"
            title="Before You Book"
            subtitle="Quick answers so you can reserve your Omiš tour with confidence."
          />
          <div className="mt-8 hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 lg:block">
            <p className="font-serif text-xl italic leading-relaxed text-white/50">
              No payment upfront. Free cancellation. Reply within hours.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex text-[13px] font-semibold uppercase tracking-[0.12em] text-turquoise-400 transition-colors hover:text-turquoise-300"
            >
              Reserve your experience &rarr;
            </a>
          </div>
        </div>

        <SectionPanel className="lg:col-span-3" accent={false}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqAccordionItem
                key={i}
                item={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </SectionPanel>
      </div>

      <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center lg:hidden">
        <p className="font-serif text-lg italic text-white/50">
          No payment upfront. Free cancellation. Reply within hours.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex text-[13px] font-semibold uppercase tracking-[0.12em] text-turquoise-400"
        >
          Reserve your experience &rarr;
        </a>
      </div>
    </SectionShell>
  );
}
