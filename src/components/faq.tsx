"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, Clock3, CreditCard } from "lucide-react";
import { faqs } from "@/lib/data";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";
import { EASE_OUT } from "@/lib/motion";
import { homeHash } from "@/lib/base-path";

const trustPoints = [
  { icon: CreditCard, label: "No payment upfront" },
  { icon: ShieldCheck, label: "Free cancellation 24h" },
  { icon: Clock3, label: "Reply within hours" },
] as const;

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
      <div className="aw-container faq-v2__intro">
        <BlurReveal className="faq-v2__intro-panel">
          <div className="faq-v2__intro-copy experiences-section__copy">
            <p className="experiences-section__eyebrow">FAQ</p>
            <h2 className="experiences-section__headline">
              <span className="experiences-section__headline-line">Common</span>
              <span className="experiences-section__headline-accent">questions</span>
            </h2>
            <p className="experiences-section__lead faq-v2__lead">
              Everything you need before booking — clear answers, no fine print, and no payment
              required until you are ready.
            </p>

            <ul className="faq-v2__trust">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.label} className="faq-v2__trust-item">
                    <span className="faq-v2__trust-icon" aria-hidden>
                      <Icon strokeWidth={1.5} />
                    </span>
                    <span>{point.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="faq-v2__intro-aside" aria-hidden>
            <div className="faq-v2__intro-badge">
              <HelpCircle strokeWidth={1.5} />
            </div>
            <p className="faq-v2__intro-count">{faqs.length}</p>
            <p className="faq-v2__intro-count-label">answers ready</p>
            <p className="faq-v2__intro-note">Tap any question below</p>
          </div>
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
            <a href={homeHash("contact")} className="pro-link !text-[15px]">
              Contact us
            </a>
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}
