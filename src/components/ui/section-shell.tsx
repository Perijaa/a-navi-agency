import { cn } from "@/lib/utils";

type SectionBg = "dark" | "light" | "muted" | "transparent";

const bgClasses: Record<SectionBg, string> = {
  dark: "surface-dark",
  light: "surface-light",
  muted: "surface-muted",
  transparent: "",
};

interface SectionShellProps {
  id?: string;
  bg?: SectionBg;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
}

export function SectionShell({
  id,
  bg = "light",
  children,
  className,
  innerClassName,
  fullBleed = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("section-shell", bgClasses[bg], className)}
    >
      {fullBleed ? (
        children
      ) : (
        <div className={cn("page-container", innerClassName)}>{children}</div>
      )}
    </section>
  );
}
