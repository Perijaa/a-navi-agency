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
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
          "nav-scrolled fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
          scrolled ? "shadow-sm" : "",
          onHero
            ? "border-b border-white/10 bg-navy-900/30"
            : "border-b border-stone-200/50 bg-[#faf8f5]/92 shadow-[0_1px_2px_rgba(44,38,32,0.04)]"
        )}
      >
        <div
          className={cn(
            "page-container relative flex w-full items-center justify-between transition-all duration-300",
            scrolled ? "h-14 xl:h-[3.75rem]" : "h-16 xl:h-[4.5rem]"
          )}
        >
          <Link href="/" className="group relative z-10 flex shrink-0 items-baseline gap-2.5">
            <span
              className={cn(
                "font-serif text-[1.375rem] font-bold tracking-tight transition-colors xl:text-2xl",
                onHero
                  ? "text-white group-hover:text-turquoise-300"
                  : "text-stone-800 group-hover:text-turquoise-600"
              )}
            >
              A-Navi
            </span>
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] transition-colors",
                onHero
                  ? "border-white/20 text-white/50"
                  : "border-stone-200 text-stone-400"
              )}
            >
              Omi&scaron;
            </span>
          </Link>

          <div className="pointer-events-none absolute inset-x-0 hidden justify-center xl:flex">
            <div className="pointer-events-auto flex items-center gap-8 2xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link text-[15px] font-medium transition-colors xl:text-base",
                    activeHash === link.href
                      ? "nav-link--active font-semibold"
                      : "",
                    onHero
                      ? activeHash === link.href
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : activeHash === link.href
                        ? "text-turquoise-600"
                        : "text-stone-500 hover:text-stone-800"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-2.5">
            <a
              href="#contact"
              className="btn-primary !min-h-11 !px-4 !py-2 !text-sm sm:!px-5 sm:!py-2.5 sm:!text-[15px] 2xl:!px-7 2xl:!py-3 2xl:!text-base"
            >
              Reserve
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden",
                onHero
                  ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  : "border border-stone-200 bg-[#fffefa] text-stone-700"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#faf8f5]/98 backdrop-blur-xl pt-[env(safe-area-inset-top)]"
          >
            <div className="page-container flex h-[4.25rem] shrink-0 items-center justify-between border-b border-stone-200/50 sm:h-[4.75rem]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-2.5"
              >
                <span className="font-serif text-[1.75rem] font-bold tracking-tight text-stone-800">
                  A-Navi
                </span>
                <span className="rounded-full border border-stone-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-stone-400">
                  Omi&scaron;
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700"
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
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 + i * 0.04 }}
                  className={cn(
                    "rounded-xl px-2 py-4 font-serif text-[1.75rem] font-semibold active:bg-stone-100/50 sm:text-[2rem]",
                    activeHash === link.href
                      ? "text-turquoise-600"
                      : "text-stone-800"
                  )}
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
                className="btn-primary mt-8 w-full !min-h-11 !py-4"
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
