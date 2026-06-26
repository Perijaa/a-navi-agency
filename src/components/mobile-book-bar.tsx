"use client";

import { Compass, CalendarCheck } from "lucide-react";

const actions = [
  {
    href: "#experiences",
    label: "Tours",
    icon: Compass,
    className:
      "bg-[#fffefa]/95 text-turquoise-600 ring-1 ring-stone-200/60 backdrop-blur-sm",
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
      <div className="flex flex-col items-center gap-2.5 rounded-[1.75rem] border border-stone-200/60 bg-[#faf8f5]/92 p-2 shadow-[0_8px_24px_-8px_rgba(44,38,32,0.15)] backdrop-blur-xl">
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
