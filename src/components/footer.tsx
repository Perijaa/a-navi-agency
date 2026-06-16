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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="page-container py-12 sm:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-serif text-2xl font-bold text-navy-900">
              A-Navi
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600">
              Omi&scaron;
            </span>
          </div>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Boat tours on the Cetina promenade — glass boat, submarine, rental,
            taxi &amp; rafting from one harbour.
          </p>
          <div className="mt-5 flex justify-center gap-3">
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-turquoise-300 hover:text-turquoise-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-turquoise-600">
              Navigate
            </h4>
            <ul className="mt-3 space-y-2">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-turquoise-600">
              Tours
            </h4>
            <ul className="mt-3 space-y-2">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-turquoise-600">
              Location
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex justify-center gap-2 sm:justify-start">
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

        <p className="mt-10 text-center text-xs text-slate-400">
          &copy; {currentYear} A-Navi Agency — Omi&scaron;, Croatia
        </p>
      </div>
    </footer>
  );
}
