"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { gallery } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";
import { PhotoLightbox, type LightboxItem } from "@/components/ui/photo-lightbox";

const CROPS: Record<string, string> = {
  g1: "50% 35%",
  g2: "50% 40%",
  g3: "50% 30%",
  g4: "60% 50%",
  g5: "50% 20%",
  g6: "50% 55%",
  g7: "50% 45%",
};

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      gallery.map((g) => ({
        id: g.id,
        image: withBasePath(g.image),
        alt: g.alt,
        caption: g.caption,
        location: g.location,
      })),
    []
  );

  const openByIndex = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="gallery-v2" data-mobile-bar-surface="light">
      <header className="aw-container gallery-v2__intro">
        <div className="gallery-v2__intro-inner experiences-section__copy">
          <BlurReveal>
            <p className="experiences-section__eyebrow">Gallery</p>
          </BlurReveal>
          <BlurReveal variant="fadeUp" delay={0.05}>
            <h2 className="experiences-section__headline">
              <span className="experiences-section__headline-line">Moments on the</span>
              <span className="experiences-section__headline-accent">Cetina</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <p className="experiences-section__lead gallery-v2__lead">
              Crystal waters, dramatic cliffs, and Dalmatian light — captured from our boats and the canyon rim.
            </p>
            <div className="gallery-v2__meta">
              <span className="gallery-v2__meta-chip">{gallery.length} photos</span>
              <span className="gallery-v2__meta-chip gallery-v2__meta-chip--ghost">
                Tap any image to expand
              </span>
            </div>
          </BlurReveal>
        </div>
      </header>

      <div className="aw-container gallery-v2__showcase-wrap">
        <Stagger stagger={0.06} className="gallery-v2__showcase">
          {gallery.map((item, index) => (
            <StaggerItem key={item.id} className="gallery-v2__piece">
              <button
                type="button"
                onClick={() => openByIndex(index)}
                className="gallery-v2__card"
                aria-label={`View ${item.alt}`}
              >
                <div className="gallery-v2__frame">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="gallery-v2__image"
                    style={{ objectPosition: CROPS[item.id] ?? "center" }}
                  />
                  <div className="gallery-v2__shade" aria-hidden />
                  <span className="gallery-v2__expand" aria-hidden>
                    <Expand className="h-5 w-5" />
                  </span>
                  <div className="gallery-v2__caption">
                    <p className="gallery-v2__title">{item.alt}</p>
                    <p className="gallery-v2__location">{item.location}</p>
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <PhotoLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
