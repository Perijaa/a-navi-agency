"use client";

import Link from "next/link";
import { experiences, navLinks } from "@/lib/data";
import { BlurReveal } from "@/components/motion";
import { SectionHeroContent } from "@/components/ui/section-hero-content";

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
      className={`footer border-t border-white/8 bg-ink ${className}`}
      data-mobile-bar-surface="dark"
    >
      <div className={`aw-container footer__wrap ${containerClassName}`}>
        <BlurReveal className="footer__intro">
          <SectionHeroContent
            eyebrow="A-Navi"
            title={
              <>
                Boat tours from
                <br />
                the Cetina
              </>
            }
            lead="Five tours from one harbour on the Omi&scaron; promenade."
            meta={
              <>
                <a href="tel:+385991234567" className="transition-colors hover:text-cream/80">
                  +385 99 123 4567
                </a>
                <span aria-hidden>·</span>
                <a href="mailto:info@a-navi-agency.com" className="transition-colors hover:text-cream/80">
                  info@a-navi-agency.com
                </a>
              </>
            }
          />
        </BlurReveal>

        <BlurReveal delay={0.06} className="footer__nav">
          <div className="footer__nav-group">
            <p className="footer__nav-label">Explore</p>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__nav-group">
            <p className="footer__nav-label">Tours</p>
            <ul className="footer__nav-list">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <Link href={`/experiences/${exp.id}`} className="footer__link">
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__nav-group">
            <p className="footer__nav-label">Contact</p>
            <ul className="footer__nav-list">
              <li>
                <span className="footer__link footer__link--muted">Cetina promenade, Omi&scaron;</span>
              </li>
              <li>
                <a href="https://wa.me/385991234567" target="_blank" rel="noopener noreferrer" className="footer__link">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Book a tour
                </a>
              </li>
            </ul>
          </div>
        </BlurReveal>

        <BlurReveal delay={0.1} className="footer__bottom">
          <p>&copy; {currentYear} A-Navi Agency. All rights reserved.</p>
        </BlurReveal>
      </div>
    </footer>
  );
}
