"use client";

import Image from "next/image";
import { Counter } from "@/components/ui/counter";
import { BlurReveal, Stagger, StaggerItem, Parallax } from "@/components/motion";
import { EditorialPhoto } from "@/components/ui/editorial-photo";
import { SectionHeroContent } from "@/components/ui/section-hero-content";

const stats = [
  { value: 15, suffix: "", decimals: 0, label: "Seasons" },
  { value: 50, suffix: "k+", decimals: 0, label: "Guests" },
  { value: 4.9, suffix: "", decimals: 1, label: "Rating" },
  { value: 40, suffix: "+", decimals: 0, label: "Countries" },
];

const highlights = [
  {
    title: "One departure point",
    text: "Cetina promenade, Omiš harbour.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    alt: "Omiš harbour on the Cetina promenade",
    objectPosition: "50% 45%",
  },
  {
    title: "Cetina canyon",
    text: "River gorge minutes from town.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80",
    alt: "Cetina River canyon near Omiš",
    objectPosition: "50% 35%",
  },
  {
    title: "Adriatic coast",
    text: "Where the river meets the sea.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Adriatic coast near Omiš",
    objectPosition: "48% 40%",
  },
  {
    title: "One local crew",
    text: "Five tours. One team. Every day.",
    image: "/images/hero-rafting.png",
    alt: "Rafting crew on the Cetina River",
    objectPosition: "50% 40%",
  },
] as const;

export function OmisDestination() {
  return (
    <section id="omis" className="bg-ink">
      <div className="hero-section relative min-h-[85svh] w-full overflow-hidden">
        <Parallax offset={40} className="hero-media">
          <Image
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1800&q=85"
            alt="Cetina River canyon from above"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </Parallax>
        <div className="hero-media__overlay bg-ink/55" aria-hidden />
        <div
          className="hero-media__overlay bg-gradient-to-b from-ink/60 via-ink/25 to-ink/75"
          aria-hidden
        />

        <div className="hero-media__content hero-media__content--centered">
          <BlurReveal>
            <SectionHeroContent
              eyebrow="Omiš"
              title={
                <>
                  Dalmatia&apos;s
                  <br />
                  hidden gorge
                </>
              }
              lead="Limestone cliffs and emerald water — every tour starts on the promenade."
              meta={
                <>
                  <span>15 seasons</span>
                  <span aria-hidden>·</span>
                  <span>50k+ guests</span>
                  <span aria-hidden>·</span>
                  <span>4.9 rating</span>
                </>
              }
            />
          </BlurReveal>
        </div>
      </div>

      <div className="aw-container omis-gallery">
        <div className="omis-gallery__grid">
          <EditorialPhoto
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85"
            alt="Crystal clear Cetina waters"
            sizes="(max-width: 768px) 92vw, 20rem"
            objectPosition="50% 40%"
            aspectClass="aspect-[3/2]"
            parallax
            parallaxOffset={16}
          />
          <EditorialPhoto
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85"
            alt="Boat on the Adriatic near Omiš"
            sizes="(max-width: 768px) 92vw, 20rem"
            objectPosition="55% 42%"
            aspectClass="aspect-[3/2] omis-gallery__photo--offset"
            parallax
            parallaxOffset={12}
          />
        </div>
      </div>

      <div className="omis-body bg-cream">
        <div className="aw-container experiences-section__intro">
          <BlurReveal className="experiences-section__copy">
            <p className="aw-kicker">By the numbers</p>
            <h2 className="aw-headline mt-4 text-ink">Fifteen seasons on the Cetina.</h2>
            <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
              A local crew trusted by guests from over 40 countries.
            </p>
          </BlurReveal>
        </div>

        <div className="aw-container omis-stats">
          <Stagger className="omis-stats__grid">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="omis-stat">
                <p className="omis-stat__value">
                  <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} duration={2} />
                </p>
                <p className="omis-stat__label">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="aw-container experiences-section__outro">
          <BlurReveal className="experiences-section__copy">
            <p className="aw-kicker">The destination</p>
            <h2 className="aw-headline mt-4 text-ink">Everything in one harbour.</h2>
            <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
              River, canyon, and Adriatic coast — all within minutes of Omi&scaron; old town.
            </p>
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
      </div>
    </section>
  );
}
