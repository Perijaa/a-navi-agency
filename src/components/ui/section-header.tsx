"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`section-content flex w-full flex-col items-center text-center ${className ?? ""}`}
    >
      {label && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600 sm:text-xs">
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-[clamp(2.25rem,5.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-stone-800 ${
          label ? "mt-4 sm:mt-5" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.75] text-balance text-stone-500 sm:mt-6 sm:text-base sm:leading-[1.8] xl:max-w-2xl xl:text-[1.0625rem]">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
