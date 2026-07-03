"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left max-w-3xl";

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`section-content flex flex-col ${alignClass} ${className ?? ""}`}
    >
      {label && (
        <p className={`brand-eyebrow ${dark ? "" : ""}`}>{label}</p>
      )}
      <h2
        className={`brand-headline mt-5 ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`brand-body mt-6 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
