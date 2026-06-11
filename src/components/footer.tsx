"use client";

import {
  Globe,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { experiences, navLinks } from "@/lib/data";
import { SectionPanel } from "@/components/ui/section-panel";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <SectionPanel className="mb-16 sm:mb-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Ready to explore Omi&scaron;?
              </h3>
              <p className="mt-2 text-[15px] text-white/55">
                Five tours from the harbour — book in minutes.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-turquoise-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-turquoise-400"
            >
              Book Your Adventure
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </SectionPanel>

        <div className="grid w-full gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-white">
                A-Navi
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                Omi&scaron;
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/45">
              Touring agency on the Cetina promenade — glass boat, semi
              submarine, rent a boat, taxi boat &amp; Cetina rafting from one
              harbour in Omi&scaron;.
            </p>
            <div className="mt-6 flex gap-2.5">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 transition-colors hover:border-turquoise-400/30 hover:text-turquoise-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/45 transition-colors hover:text-turquoise-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
              Experiences
            </h4>
            <ul className="mt-5 space-y-3">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <a
                    href={`#${exp.id}`}
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                  >
                    <exp.icon className="h-3.5 w-3.5 text-white/30 group-hover:text-turquoise-400/60" />
                    {exp.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-white/45">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-400/50" />
                <span>
                  Cetina promenade
                  <br />
                  21310 Omi&scaron;, Croatia
                </span>
              </li>
              <li>
                <a
                  href="tel:+385991234567"
                  className="flex items-center gap-2.5 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                >
                  <Phone className="h-4 w-4 text-turquoise-400/50" />
                  +385 99 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@a-navi-agency.com"
                  className="flex items-center gap-2.5 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                >
                  <Mail className="h-4 w-4 text-turquoise-400/50" />
                  info@a-navi-agency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] text-white/30">
            &copy; {currentYear} A-Navi Agency, d.o.o. — Omi&scaron;, Croatia
          </p>
          <p className="text-[11px] text-white/30">
            Where the Cetina meets the sea
          </p>
        </div>
      </div>
    </footer>
  );
}
