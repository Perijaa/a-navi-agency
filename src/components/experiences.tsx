"use client";

import Link from "next/link";
import { experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ui/experience-card";
import { BlurReveal } from "@/components/motion";

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <section id="experiences" className="experiences-section">
      <div className="aw-container experiences-section__intro">
        <BlurReveal className="experiences-section__copy">
          <p className="aw-kicker">Experiences</p>
          <h2 className="aw-headline mt-4 text-ink">Five ways into the canyon.</h2>
          <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
            Same harbour, five distinct journeys on the Cetina. Tours from &euro;{minPrice} per person.
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

      <div className="aw-container experiences-section__outro">
        <BlurReveal className="experiences-section__copy">
          <p className="aw-kicker">Need help choosing?</p>
          <h2 className="aw-headline mt-4 text-ink">We&apos;ll find the right tour.</h2>
          <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
            Tell us who&apos;s travelling. We reply within hours — no payment upfront.
          </p>
          <Link href="/#contact" className="pro-link experiences-section__link">
            Contact our crew
          </Link>
        </BlurReveal>
      </div>
    </section>
  );
}
