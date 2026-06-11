"use client";

import {
  Globe,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Anchor,
} from "lucide-react";
import { experiences, navLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* ── Pre-footer CTA band ── */}
      <div className="relative border-t border-white/[0.04] bg-gradient-to-b from-navy-900/60 to-navy-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-60 w-60 rounded-full bg-turquoise-500/[0.04] blur-[100px]" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Ready to explore Omi&#353;?
            </h3>
            <p className="mt-2 text-[15px] text-white/35">
              Five experiences. One unforgettable coastline. Book in minutes.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-turquoise-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all duration-300 hover:bg-turquoise-400 hover:shadow-turquoise-400/30 hover:scale-[1.03]"
          >
            Book Your Adventure
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="border-t border-white/[0.04] bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand — wider column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-turquoise-600">
                  <Anchor className="h-5 w-5 text-navy-950" />
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight text-white">
                    A-Navi Agency
                  </span>
                  <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-white/20">
                    d.o.o.
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/30">
                Touring agency on the Cetina promenade in Omi&#353;. Glass boat
                tours, semi-submarine dives, self-drive boat rentals, scenic
                taxi boats, and canyon rafting &mdash; all from one crew, one
                location, fifteen seasons of experience.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-2.5">
                {[
                  {
                    icon: Globe,
                    href: "https://a-navi-agency.com",
                    label: "Website",
                  },
                  { icon: Heart, href: "#", label: "Instagram" },
                  { icon: Share2, href: "#", label: "TripAdvisor" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/30 transition-all duration-300 hover:border-turquoise-400/25 hover:text-turquoise-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Navigate
              </h4>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/30 transition-colors duration-200 hover:text-turquoise-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Experiences
              </h4>
              <ul className="mt-5 space-y-3">
                {experiences.map((exp) => (
                  <li key={exp.id}>
                    <a
                      href={`#${exp.id}`}
                      className="group flex items-center gap-2 text-sm text-white/30 transition-colors duration-200 hover:text-turquoise-400"
                    >
                      <exp.icon className="h-3.5 w-3.5 text-white/15 transition-colors group-hover:text-turquoise-400/60" />
                      {exp.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Get in Touch
              </h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-2.5 text-sm text-white/30">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-400/40" />
                  <span>
                    Cetina promenade
                    <br />
                    21310 Omi&#353;, Croatia
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+385991234567"
                    className="flex items-center gap-2.5 text-sm text-white/30 transition-colors duration-200 hover:text-turquoise-400"
                  >
                    <Phone className="h-4 w-4 text-turquoise-400/40" />
                    +385 99 123 4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@a-navi-agency.com"
                    className="flex items-center gap-2.5 text-sm text-white/30 transition-colors duration-200 hover:text-turquoise-400"
                  >
                    <Mail className="h-4 w-4 text-turquoise-400/40" />
                    info@a-navi-agency.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
            <p className="text-[11px] tracking-wide text-white/15">
              &copy; {currentYear} A-Navi Agency, d.o.o. &mdash; Registered
              touring agency, Omi&#353;, Croatia
            </p>
            <p className="text-[11px] tracking-wide text-white/15">
              Where the Cetina meets the sea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
