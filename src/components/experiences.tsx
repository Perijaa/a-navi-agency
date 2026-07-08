"use client";

import { experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ui/experience-card";
import { BlurReveal } from "@/components/motion";

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <section id="experiences" className="experiences-section">
      <div className="aw-container experiences-section__intro">
        <BlurReveal className="experiences-section__copy">
          <p className="experiences-section__eyebrow">Experiences</p>
          <h2 className="experiences-section__headline">
            <span className="experiences-section__headline-line">Six ways into the</span>
            <span className="experiences-section__headline-accent">canyon.</span>
          </h2>
          <p className="experiences-section__lead">
            Same harbour, six distinct journeys on the Cetina. Tours from{" "}
            <span className="experiences-section__price-hint">&euro;{minPrice}</span> per person.
          </p>
        </BlurReveal>
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
