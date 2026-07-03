import type { ReactNode } from "react";

type SectionHeroContentProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
  size?: "default" | "overlay";
};

export function SectionHeroContent({
  eyebrow,
  title,
  lead,
  meta,
  actions,
  as: Tag = "h2",
  className = "",
  size = "default",
}: SectionHeroContentProps) {
  return (
    <div
      className={`hero-center mx-auto flex w-full max-w-[40rem] flex-col items-center text-center ${
        size === "overlay" ? "hero-center--overlay" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-cream/55">{eyebrow}</p>
      )}

      <Tag className="hero-center__title mt-5 text-cream">{title}</Tag>

      {lead && <p className="hero-center__lead mt-6 text-cream/60">{lead}</p>}

      {actions && <div className="mt-10 flex w-full flex-col items-center gap-3">{actions}</div>}

      {meta && <div className="hero-center__meta mt-10">{meta}</div>}
    </div>
  );
}
