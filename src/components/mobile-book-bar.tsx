"use client";

import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";

const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

export function MobileBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-navy-950/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href="#experiences"
          className="flex flex-1 items-center justify-center rounded-full border border-white/15 px-4 py-3 text-[13px] font-semibold text-white/80 transition-colors hover:border-white/25 hover:text-white"
        >
          View Tours
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-turquoise-500 px-4 py-3 text-[13px] font-semibold text-navy-950 transition-colors hover:bg-turquoise-400"
        >
          Book from &euro;{minPrice}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
