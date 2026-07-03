"use client";

import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";

const reasons = [
  {
    title: "Local crew on the Cetina",
    description:
      "We're on the promenade every day — not a booking platform. Real people, real boats.",
  },
  {
    title: "Clear pricing & equipment",
    description:
      "Every price on this site. Gear included. Free cancellation 24 hours before departure.",
  },
  {
    title: "For families & all ages",
    description:
      "Glass boat, taxi cruise, rafting — pets welcome. Something for every pace.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="why-section bg-cream">
      <div className="aw-container experiences-section__intro">
        <BlurReveal className="experiences-section__copy">
          <p className="aw-kicker">Why A-Navi</p>
          <h2 className="aw-headline mt-4 text-ink">Built on fifteen seasons of trust.</h2>
          <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
            One harbour, five tours, and a crew that knows every bend of the Cetina.
          </p>
        </BlurReveal>
      </div>

      <div className="aw-container why-section__grid">
        <Stagger className="why-section__reasons">
          {reasons.map((point) => (
            <StaggerItem key={point.title} className="why-section__item">
              <h3 className="why-section__title">{point.title}</h3>
              <p className="why-section__text">{point.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
