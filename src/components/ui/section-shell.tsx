import { cn } from "@/lib/utils";

type SectionBg = "950" | "900" | "925" | "transparent";

const bgClasses: Record<SectionBg, string> = {
  "950": "bg-navy-950",
  "900": "bg-navy-900",
  "925": "bg-navy-925",
  transparent: "",
};

interface SectionShellProps {
  id?: string;
  bg?: SectionBg;
  bordered?: boolean;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionShell({
  id,
  bg = "950",
  bordered = false,
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-32 lg:py-40",
        bgClasses[bg],
        bordered && "border-y border-white/[0.06]",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
