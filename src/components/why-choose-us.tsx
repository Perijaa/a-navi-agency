"use client";

import { Anchor, BadgeCheck, Heart, Award } from "lucide-react";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";

const reasons = [
  {
    icon: Anchor,
    title: "Local crew on the Cetina",
    description:
      "We're on the promenade every day — not a booking platform. Real people, real boats.",
    accent: "cetina",
  },
  {
    icon: BadgeCheck,
    title: "Clear pricing & equipment",
    description:
      "Every price on this site. Gear included. Free cancellation 24 hours before departure.",
    accent: "primary",
  },
  {
    icon: Heart,
    title: "For families & all ages",
    description:
      "Glass boat, taxi cruise, rafting — pets welcome. Something for every pace.",
    accent: "cta",
  },
];

export function WhyChooseUs() {
  return (
    <section className="why-section bg-cream">
      <div className="aw-container why-section__intro">
        <BlurReveal className="why-section__hero">
          <div className="why-section__badge">
            <Award className="why-section__badge-icon" strokeWidth={1.5} />
            <span>Since 2009</span>
          </div>
          
          <h2 className="why-section__headline">
            <span className="why-section__headline-accent">15 years</span>
            <span className="why-section__headline-text">of trust on the Cetina</span>
          </h2>
          
          <p className="why-section__lead">
            One harbour, five tours, and a crew that knows every bend of the river.
          </p>
        </BlurReveal>
      </div>

      <div className="aw-container why-section__grid">
        <Stagger className="why-section__cards">
          {reasons.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title} className={`why-card why-card--${point.accent}`}>
                <div className="why-card__icon-wrap">
                  <Icon className="why-card__icon" strokeWidth={1.5} />
                </div>
                <h3 className="why-card__title">{point.title}</h3>
                <p className="why-card__text">{point.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
