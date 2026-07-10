"use client";

import Image from "next/image";
import { Calendar, Users, Star, Globe, Waves, Trees, Sun } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";

const stats = [
  { icon: Calendar, value: 15, suffix: "", decimals: 0, label: "Seasons", color: "cetina" },
  { icon: Users, value: 50, suffix: "k+", decimals: 0, label: "Guests", color: "primary" },
  { icon: Star, value: 4.9, suffix: "", decimals: 1, label: "Rating", color: "cta" },
  { icon: Globe, value: 40, suffix: "+", decimals: 0, label: "Countries", color: "ink" },
];

const highlights = [
  {
    title: "One departure point",
    text: "Cetina promenade, Omiš harbour.",
    image: "/images/zvone/anavi-kiosk.jpg",
    alt: "Omiš harbour on the Cetina promenade",
    objectPosition: "50% 45%",
  },
  {
    title: "Cetina canyon",
    text: "River gorge minutes from town.",
    image: "/images/zvone/canyon-from-boat.jpg",
    alt: "Cetina River canyon near Omiš",
    objectPosition: "50% 35%",
  },
  {
    title: "Adriatic coast",
    text: "Where the river meets the sea.",
    image: "/images/zvone/taxi-boat-guests-1.jpg",
    alt: "Adriatic coast near Omiš",
    objectPosition: "48% 40%",
  },
  {
    title: "One local crew",
    text: "Six tours. One team. Every day.",
    image: "/images/zvone/rent-boat-harbour.jpg",
    alt: "Rafting crew on the Cetina River",
    objectPosition: "50% 40%",
  },
] as const;

const destinationPillars = [
  {
    icon: Waves,
    label: "Cetina River",
    text: "Crystal water from the gorge",
    image: "/images/omis/harbour.jpg",
    alt: "Cetina River at Omiš harbour",
    objectPosition: "50% 45%",
  },
  {
    icon: Trees,
    label: "Canyon",
    text: "Limestone walls minutes away",
    image: "/images/omis/canyon.jpg",
    alt: "Cetina canyon near Omiš",
    objectPosition: "50% 35%",
  },
  {
    icon: Sun,
    label: "Adriatic",
    text: "Where river meets the sea",
    image: "/images/omis/coast.jpg",
    alt: "Adriatic coast near Omiš",
    objectPosition: "50% 40%",
  },
] as const;

export function OmisDestination() {
  return (
    <section id="omis" className="bg-cream">
      <div className="aw-container experiences-section__intro omis-intro">
        <span className="omis-intro__mark" aria-hidden>
          15
        </span>
        <div className="experiences-section__copy omis-intro__copy">
          <BlurReveal>
            <p className="experiences-section__eyebrow">By the numbers</p>
          </BlurReveal>
          <BlurReveal variant="fadeUp" delay={0.05}>
            <h2 className="experiences-section__headline">
              <span className="experiences-section__headline-line">Fifteen seasons on the</span>
              <span className="experiences-section__headline-accent">Cetina</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <p className="experiences-section__lead">
              A local crew trusted by guests from over 40 countries — same harbour, same river,
              every day.
            </p>
            <div className="omis-intro__meta">
              <span className="omis-intro__meta-chip">Local Omiš crew</span>
              <span className="omis-intro__meta-chip omis-intro__meta-chip--ghost">
                Same harbour daily
              </span>
            </div>
          </BlurReveal>
        </div>
      </div>

      <div className="aw-container omis-stats">
        <Stagger className="omis-stats__grid">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label} className={`stat-card stat-card--${stat.color}`}>
                <div className="stat-card__icon-wrap">
                  <Icon className="stat-card__icon" strokeWidth={1.5} />
                </div>
                <p className="stat-card__value">
                  <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} duration={2} />
                </p>
                <p className="stat-card__label">{stat.label}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      <div className="aw-container omis-v2__destination">
        <BlurReveal className="omis-v2__destination-panel">
          <div className="omis-v2__destination-copy">
            <p className="omis-v2__destination-eyebrow">The destination</p>
            <h2 className="omis-v2__destination-headline">
              <span className="omis-v2__destination-headline-line">Everything in one</span>
              <span className="omis-v2__destination-headline-accent">harbour</span>
            </h2>
            <p className="omis-v2__destination-lead">
              River, canyon, and Adriatic coast — all within minutes of Omi&scaron; old town.
            </p>

            <ul className="omis-v2__destination-pillars">
              {destinationPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.label} className="omis-v2__destination-pillar">
                    <span className="omis-v2__destination-pillar-icon" aria-hidden>
                      <Icon strokeWidth={1.5} />
                    </span>
                    <span className="omis-v2__destination-pillar-copy">
                      <strong>{pillar.label}</strong>
                      <span>{pillar.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="omis-v2__destination-photos" aria-hidden>
            {destinationPillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className={`omis-v2__destination-photo omis-v2__destination-photo--${index + 1}`}
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 33vw, 18vw"
                  className="object-cover"
                  style={{ objectPosition: pillar.objectPosition }}
                />
              </div>
            ))}
          </div>
        </BlurReveal>
      </div>

      <div className="aw-container omis-highlights">
        <Stagger stagger={0.06} className="omis-highlights__grid">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="omis-highlight-card">
                <div className="omis-highlight-card__media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
                <div className="tour-card__body">
                  <h3 className="tour-card__title">{item.title}</h3>
                  <p className="tour-card__summary">{item.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
