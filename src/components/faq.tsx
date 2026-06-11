"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-turquoise-400/20 bg-white/[0.04]"
          : "border-white/[0.06] bg-transparent hover:border-white/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-white lg:text-lg">
          {item.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-turquoise-400/30 bg-turquoise-500/15 rotate-0"
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
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-white/45 lg:text-base">
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
    <section id="faq" className="relative py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-turquoise-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          label="Common Questions"
          title="Before You Book"
          subtitle="Quick answers to the questions we hear most \u2014 so you can reserve with confidence"
        />

        <div className="mt-14 space-y-3">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-8 py-8 backdrop-blur-sm sm:py-10">
            <p className="text-lg font-medium text-white/70">
              Ready to reserve your spot?
            </p>
            <p className="mt-2 text-sm text-white/30">
              No payment upfront &middot; Free cancellation up to 24h &middot; Reply within hours
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-turquoise-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all duration-300 hover:bg-turquoise-400 hover:shadow-turquoise-400/30 hover:scale-[1.03]"
            >
              Book Your Experience
            </a>
          </div>
          <p className="mt-6 text-sm text-white/25">
            Something else on your mind?{" "}
            <a
              href="#contact"
              className="font-medium text-turquoise-400 transition-colors hover:text-turquoise-300"
            >
              Send us a message
            </a>{" "}
            &mdash; we typically respond within a couple of hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
