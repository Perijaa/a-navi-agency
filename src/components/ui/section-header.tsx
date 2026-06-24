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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`section-content flex w-full flex-col items-center text-center ${className ?? ""}`}
    >
      {label && (
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-turquoise-400 sm:w-14" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-turquoise-600 sm:text-xs">
            {label}
          </p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-turquoise-400 sm:w-14" />
        </div>
      )}
      <h2
        className={`font-serif text-[clamp(2rem,5vw,2.875rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-navy-900 ${
          label ? "mt-7 sm:mt-8" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.8] text-balance text-slate-600 sm:mt-7 sm:text-lg xl:max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
