"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { href: "#experiences", label: "Tours", icon: Compass },
  { href: "#contact", label: "Book", icon: CalendarCheck },
] as const;

type BarSurface = "light" | "dark";

function detectBarSurface(): BarSurface {
  const bar = document.querySelector(".mobile-book-bar");
  if (!bar) return "light";

  const rect = bar.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const stack = document.elementsFromPoint(x, y);

  for (const el of stack) {
    if (el.closest(".mobile-book-bar")) continue;

    const marked = el.closest("[data-mobile-bar-surface]");
    if (marked) {
      return marked.getAttribute("data-mobile-bar-surface") === "dark" ? "dark" : "light";
    }

    if (el.closest("footer, .bg-ink, .hero-v2, .hero-section")) {
      return "dark";
    }

    if (el.closest("section, main")) {
      return "light";
    }
  }

  return "light";
}

export function MobileBookBar() {
  const [surface, setSurface] = useState<BarSurface>("dark");

  useEffect(() => {
    const update = () => setSurface(detectBarSurface());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "mobile-book-bar fixed bottom-0 right-0 z-50 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] xl:hidden",
        surface === "dark" ? "mobile-book-bar--dark" : "mobile-book-bar--light"
      )}
      aria-label="Quick actions"
    >
      <div className="mobile-book-bar__pill">
        {actions.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className={
              href === "#contact"
                ? "mobile-book-bar__cta flex h-11 w-11 items-center justify-center rounded-full"
                : "mobile-book-bar__action flex h-11 w-11 items-center justify-center rounded-full"
            }
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </div>
  );
}
