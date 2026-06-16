"use client";

import { Compass, CalendarCheck } from "lucide-react";

const actions = [
  {
    href: "#experiences",
    label: "Tours",
    icon: Compass,
    className:
      "bg-white text-turquoise-600 shadow-md ring-1 ring-slate-200 hover:bg-teal-50 hover:ring-turquoise-200",
  },
  {
    href: "#contact",
    label: "Book",
    icon: CalendarCheck,
    className:
      "bg-turquoise-500 text-white shadow-md shadow-turquoise-500/30 hover:bg-turquoise-600",
  },
] as const;

export function MobileBookBar() {
  return (
    <div
      className="fixed bottom-0 right-0 z-50 flex flex-col items-center gap-2.5 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden"
      aria-label="Quick actions"
    >
      {actions.map(({ href, label, icon: Icon, className }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-all active:scale-95 ${className}`}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.25} />
        </a>
      ))}
    </div>
  );
}
