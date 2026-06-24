"use client";

import Link from "next/link";
import {
  Globe,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { experiences, navLinks } from "@/lib/data";

export function Footer({
  className = "",
  containerClassName = "",
}: {
  className?: string;
  containerClassName?: string;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/80 ${className}`}
    >
      <div
        className={`page-container pb-16 pt-20 sm:pb-20 sm:pt-28 xl:pb-24 xl:pt-36 ${containerClassName}`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-serif text-2xl font-bold text-navy-900 sm:text-[1.75rem]">
              A-Navi
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600">
              Omi&scaron;
            </span>
          </div>
          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-balance text-slate-600 sm:text-[15px]">
            Boat tours on the Cetina promenade — glass boat, submarine, rental,
            taxi &amp; rafting from one harbour.
          </p>
          <div className="mt-8 flex justify-center gap-3.5">
            {[
              { icon: Globe, href: "https://a-navi-agency.com", label: "Website" },
              { icon: Heart, href: "#", label: "Instagram" },
              { icon: Share2, href: "#", label: "TripAdvisor" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-turquoise-300 hover:text-turquoise-600 hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-12 text-center xl:grid-cols-3 xl:gap-14 xl:text-left">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-turquoise-600">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-turquoise-600">
              Tours
            </h4>
            <ul className="mt-5 space-y-3">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <Link
                    href={`/experiences/${exp.id}`}
                    className="text-sm text-slate-600 transition-colors hover:text-turquoise-700"
                  >
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-turquoise-600">
              Location
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li className="flex justify-center gap-2 xl:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-600" />
                <span>
                  Cetina promenade
                  <br />
                  21310 Omi&scaron;, Croatia
                </span>
              </li>
              <li>
                <a
                  href="tel:+385991234567"
                  className="inline-flex items-center gap-2 transition-colors hover:text-turquoise-700"
                >
                  <Phone className="h-4 w-4 text-turquoise-600" />
                  +385 99 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@a-navi-agency.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-turquoise-700"
                >
                  <Mail className="h-4 w-4 text-turquoise-600" />
                  info@a-navi-agency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 h-px max-w-xs bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <p className="mt-10 text-center text-xs text-slate-400">
          &copy; {currentYear} A-Navi Agency — Omi&scaron;, Croatia
        </p>
      </div>
    </footer>
  );
}
