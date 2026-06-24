import { cn } from "@/lib/utils";

type SectionBg = "deep" | "mid" | "accent" | "teal" | "950" | "900" | "925" | "transparent";

const bgClasses: Record<SectionBg, string> = {
  deep: "surface-deep",
  mid: "surface-mid",
  accent: "surface-accent",
  teal: "surface-teal",
  "950": "surface-deep",
  "900": "surface-mid",
  "925": "surface-accent",
  transparent: "",
};

interface SectionShellProps {
  id?: string;
  bg?: SectionBg;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionShell({
  id,
  bg = "deep",
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-28 sm:py-36 xl:py-44",
        bgClasses[bg],
        className
      )}
    >
      <div className={cn("page-container", innerClassName)}>{children}</div>
    </section>
  );
}
