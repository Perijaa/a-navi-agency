import { cn } from "@/lib/utils";

interface SectionPanelProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
  padded?: boolean;
}

export function SectionPanel({
  children,
  className,
  accent = true,
  padded = true,
}: SectionPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.10]",
        "bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent",
        "shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55)]",
        padded && "p-6 sm:p-8 lg:p-10",
        className
      )}
    >
      {accent && (
        <>
          <div className="pointer-events-none absolute top-0 left-0 h-10 w-10 rounded-tl-2xl border-t-2 border-l-2 border-turquoise-400/35" />
          <div className="pointer-events-none absolute top-0 right-0 h-10 w-10 rounded-tr-2xl border-t-2 border-r-2 border-turquoise-400/35" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 rounded-bl-2xl border-b-2 border-l-2 border-white/10" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-white/10" />
        </>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
