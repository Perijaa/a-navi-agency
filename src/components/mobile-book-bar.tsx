"use client";

import { Compass, CalendarCheck } from "lucide-react";

const actions = [
  {
    href: "#experiences",
    label: "Tours",
    icon: Compass,
    className:
      "bg-white/95 text-turquoise-600 shadow-lg ring-1 ring-slate-200/80 backdrop-blur-sm hover:bg-teal-50 hover:ring-turquoise-200",
  },
  {
    href: "#contact",
    label: "Book",
    icon: CalendarCheck,
    className:
      "bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white shadow-lg shadow-turquoise-500/35 hover:from-turquoise-600 hover:to-teal-700",
  },
] as const;

export function MobileBookBar() {
  return (
    <div
      className="fixed bottom-0 right-0 z-50 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] xl:hidden"
      aria-label="Quick actions"
    >
      <div className="flex flex-col items-center gap-2.5 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-2 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.2)] backdrop-blur-xl">
        {actions.map(({ href, label, icon: Icon, className }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all active:scale-95 ${className}`}
          >
            <Icon className="h-[19px] w-[19px]" strokeWidth={2.25} />
          </a>
        ))}
      </div>
    </div>
  );
}
