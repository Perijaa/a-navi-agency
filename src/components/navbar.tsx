"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { homeHash } from "@/lib/base-path";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const toursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      ...navLinks.map((link) => document.querySelector(link.href)),
      document.querySelector("#experiences"),
      document.querySelector("#faq"),
    ].filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveHash(`#${visible[0].target.id}`);
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

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) {
        setToursOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const onHero = !scrolled;
  const lightNav = onHero && !scrolled;

  const linkClass = (href: string) =>
    cn(
      "text-[13px] font-medium transition-colors",
      lightNav
        ? activeHash === href
          ? "text-cream"
          : "text-cream/60 hover:text-cream"
        : activeHash === href
          ? "text-ink"
          : "text-stone-500 hover:text-ink"
    );

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
          scrolled ? "border-b border-stone-200/60 bg-cream/85 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="aw-container flex h-14 items-center justify-between py-3 lg:h-[4.25rem] lg:py-4">
          <Link
            href="/"
            className="text-[17px] font-semibold tracking-tight transition-colors"
          >
            <span className={lightNav ? "text-cream" : "text-ink"}>A-Navi</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {/* Tours dropdown */}
            <div ref={toursRef} className="relative">
              <button
                type="button"
                onClick={() => setToursOpen((o) => !o)}
                className={cn(
                  "inline-flex items-center gap-1 text-[13px] font-medium transition-colors",
                  lightNav
                    ? activeHash === "#experiences"
                      ? "text-cream"
                      : "text-cream/60 hover:text-cream"
                    : activeHash === "#experiences"
                      ? "text-ink"
                      : "text-stone-500 hover:text-ink"
                )}
                aria-expanded={toursOpen}
                aria-haspopup="true"
              >
                Tours
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform", toursOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence>
                {toursOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-3 min-w-[14rem] overflow-hidden rounded-2xl border border-stone-200/80 bg-cream/95 py-2 shadow-xl backdrop-blur-xl"
                  >
                    <a
                      href={homeHash("experiences")}
                      onClick={() => setToursOpen(false)}
                      className="block px-4 py-2.5 text-[13px] font-medium text-ink hover:bg-stone-100"
                    >
                      All tours
                    </a>
                    {experiences.map((exp) => (
                      <Link
                        key={exp.id}
                        href={`/experiences/${exp.id}`}
                        onClick={() => setToursOpen(false)}
                        className="block px-4 py-2.5 text-[13px] text-stone-600 hover:bg-stone-100 hover:text-ink"
                      >
                        {exp.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a key={link.href} href={homeHash(link.href)} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}

            <a href={homeHash("contact")} className="nav-book-cta">
              Book now
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={homeHash("contact")}
              className="nav-book-cta nav-book-cta--sm"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full",
                lightNav ? "text-cream" : "text-ink"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cream pt-[env(safe-area-inset-top)]"
          >
            <div className="aw-container flex h-12 items-center justify-between">
              <span className="text-[17px] font-semibold text-ink">A-Navi</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mobile-nav aw-container">
              <div className="mobile-nav__intro experiences-section__copy">
                <p className="aw-kicker">Menu</p>
                <h2 className="mobile-nav__headline aw-headline mt-4 text-ink">Explore the Cetina.</h2>
                <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
                  Five tours from one harbour in Omi&scaron;.
                </p>
              </div>

              <div className="mobile-nav__group">
                <p className="aw-kicker mobile-nav__kicker">Tours</p>
                <a
                  href={homeHash("experiences")}
                  onClick={() => setMobileOpen(false)}
                  className="mobile-nav__link"
                >
                  All tours
                </a>
                <ul className="mobile-nav__sublinks">
                  {experiences.map((exp) => (
                    <li key={exp.id}>
                      <Link
                        href={`/experiences/${exp.id}`}
                        onClick={() => setMobileOpen(false)}
                        className="mobile-nav__sublink"
                      >
                        {exp.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mobile-nav__group">
                <p className="aw-kicker mobile-nav__kicker">Pages</p>
                <ul className="mobile-nav__links">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={homeHash(link.href)}
                        onClick={() => setMobileOpen(false)}
                        className="mobile-nav__link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={homeHash("contact")}
                onClick={() => setMobileOpen(false)}
                className="hero-v2__cta-primary mobile-nav__cta"
              >
                Book now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
