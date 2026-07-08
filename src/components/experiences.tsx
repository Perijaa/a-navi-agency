"use client";

import { experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ui/experience-card";
import { BlurReveal } from "@/components/motion";

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <section id="experiences" className="experiences-section">
      <div className="aw-container experiences-section__intro">
        <div className="experiences-section__copy">
          <BlurReveal>
            <p className="experiences-section__eyebrow">Experiences</p>
          </BlurReveal>
          <BlurReveal variant="fadeUp" delay={0.05}>
            <h2 className="experiences-section__headline">
              <span className="experiences-section__headline-line">Six ways into the</span>
              <span className="experiences-section__headline-accent">canyon</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <p className="experiences-section__lead">
              Same harbour, six distinct journeys on the Cetina. Tours from{" "}
              <span className="experiences-section__price-hint">&euro;{minPrice}</span> per person.
            </p>
          </BlurReveal>
        </div>
      </div>

      <div className="aw-container experiences-section__grid">
        <div className="tour-grid">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
