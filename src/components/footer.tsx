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
      className={`border-t border-stone-200/50 bg-[#f5f2ed] ${className}`}
    >
      <div
        className={`page-container pb-16 pt-20 sm:pb-20 sm:pt-28 xl:pb-24 xl:pt-36 ${containerClassName}`}
      >
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="flex items-baseline justify-center gap-2.5 sm:justify-start">
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-800 sm:text-[1.75rem]">
                A-Navi
              </span>
              <span className="rounded-full border border-stone-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-stone-400">
                Omi&scaron;
              </span>
            </div>
            <p className="mx-auto mt-5 max-w-xs text-[15px] leading-[1.75] text-balance text-stone-500 sm:mx-0 sm:max-w-none sm:text-base">
              Boat tours on the Cetina promenade — glass boat, submarine, rental,
              taxi &amp; rafting from one harbour.
            </p>
            <div className="mt-8 flex justify-center gap-3.5 sm:justify-start">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-[#fffefa] text-stone-400 transition-colors hover:border-turquoise-400/40 hover:text-turquoise-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-base text-stone-500 transition-colors hover:text-stone-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Tours</h4>
            <ul className="mt-5 space-y-3">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <Link
                    href={`/experiences/${exp.id}`}
                    className="inline-flex min-h-11 items-center text-base text-stone-500 transition-colors hover:text-turquoise-600"
                  >
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Location</h4>
            <ul className="mt-5 space-y-3 text-base leading-[1.75] text-stone-500">
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
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-turquoise-600"
                >
                  <Phone className="h-4 w-4 text-turquoise-500" />
                  +385 99 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@a-navi-agency.com"
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-turquoise-600"
                >
                  <Mail className="h-4 w-4 text-turquoise-500" />
                  info@a-navi-agency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} A-Navi Agency — Omi&scaron;, Croatia</p>
          <p className="mt-1.5 text-stone-400/60">
            Boat tours from the Cetina promenade
          </p>
        </div>
      </div>
    </footer>
  );
}
