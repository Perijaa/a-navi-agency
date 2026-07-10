"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle, Anchor } from "lucide-react";
import { experiences, navLinks } from "@/lib/data";
import { BlurReveal } from "@/components/motion";
import { homeHash } from "@/lib/base-path";
import { MeetingPointCard } from "@/components/ui/meeting-point-map";

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
      className={`footer-v2 ${className}`}
      data-mobile-bar-surface="light"
    >
      <div className={`aw-container footer-v2__wrap ${containerClassName}`}>
        {/* Brand + Contact */}
        <BlurReveal className="footer-v2__brand">
          <div className="footer-v2__logo">
            <Anchor className="footer-v2__logo-icon" strokeWidth={1.5} />
            <span className="footer-v2__logo-text">A-Navi</span>
          </div>
          <p className="footer-v2__tagline">
            Boat tours on the Cetina River.<br />
            Discover Omiš from the water.
          </p>
          <div className="footer-v2__contact">
            <a href="tel:+385957264937" className="footer-v2__contact-item">
              <Phone className="h-4 w-4" />
              <span>0957264937</span>
            </a>
            <a href="mailto:josipsinkovic6@gmail.com" className="footer-v2__contact-item">
              <Mail className="h-4 w-4" />
              <span>josipsinkovic6@gmail.com</span>
            </a>
            <a href="https://wa.me/385957264937" target="_blank" rel="noopener noreferrer" className="footer-v2__contact-item footer-v2__contact-item--whatsapp">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </BlurReveal>

        {/* Navigation columns */}
        <BlurReveal delay={0.04} className="footer-v2__nav">
          <div className="footer-v2__nav-group">
            <p className="footer-v2__nav-label">Explore</p>
            <ul className="footer-v2__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={homeHash(link.href)} className="footer-v2__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-v2__nav-group">
            <p className="footer-v2__nav-label">Tours</p>
            <ul className="footer-v2__nav-list">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <Link href={`/experiences/${exp.id}`} className="footer-v2__link">
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BlurReveal>

        {/* Location card */}
        <BlurReveal delay={0.08} className="footer-v2__location">
          <MeetingPointCard />
        </BlurReveal>

        {/* Bottom bar */}
        <BlurReveal delay={0.1} className="footer-v2__bottom">
          <p className="footer-v2__copyright">
            &copy; {currentYear} A-Navi Agency
          </p>
          <p className="footer-v2__made">
            Made with care in Omiš
          </p>
        </BlurReveal>
      </div>
    </footer>
  );
}
