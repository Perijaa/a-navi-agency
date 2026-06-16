"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise-600">
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem] ${
          label ? "mt-3" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600 lg:mt-5 lg:text-lg">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
