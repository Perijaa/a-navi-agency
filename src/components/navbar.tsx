"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onHero = !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
          onHero
            ? "border-b border-white/10 bg-navy-900/35 backdrop-blur-md"
            : "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
        )}
      >
        <div className="page-container flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link href="/" className="group flex shrink-0 items-baseline gap-2">
            <span
              className={cn(
                "font-serif text-xl font-bold transition-colors lg:text-2xl",
                onHero
                  ? "text-white group-hover:text-turquoise-300"
                  : "text-navy-900 group-hover:text-turquoise-600"
              )}
            >
              A-Navi
            </span>
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.18em]",
                onHero ? "text-white/50" : "text-slate-400"
              )}
            >
              Omi&scaron;
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors xl:text-base",
                  onHero
                    ? "text-white/75 hover:text-white"
                    : "text-slate-600 hover:text-navy-900"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="btn-primary hidden !px-6 !py-2.5 !text-[15px] lg:inline-flex xl:!px-7 xl:!py-3 xl:!text-base"
          >
            Reserve
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              onHero
                ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "border border-slate-200 bg-white text-navy-900 shadow-sm"
            )}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white pt-[env(safe-area-inset-top)]"
          >
            <div className="page-container flex h-[4.25rem] shrink-0 items-center justify-between border-b border-slate-200 sm:h-[4.75rem]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-2"
              >
                <span className="font-serif text-[1.75rem] font-bold text-navy-900">
                  A-Navi
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Omi&scaron;
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy-900"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-safe sm:px-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 + i * 0.04 }}
                  className="rounded-xl px-2 py-4 font-serif text-[1.75rem] font-semibold text-navy-900 active:bg-slate-50 sm:text-[2rem]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="btn-primary mt-8 w-full !py-4"
              >
                Reserve
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
