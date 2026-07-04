"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { gallery } from "@/lib/data";
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
        image: g.image.replace("w=800", "w=1600").replace("w=1200", "w=1800"),
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
        <BlurReveal className="experiences-section__intro">
          <p className="aw-kicker">Gallery</p>
          <h2 className="aw-headline mt-4">Moments on the Cetina</h2>
          <p className="experiences-section__lead mt-5">
            A glimpse of what awaits — crystal waters, dramatic cliffs, and unforgettable sunsets.
          </p>
        </BlurReveal>
      </header>

      <div className="aw-container gallery-v2__grid-wrap">
        <Stagger stagger={0.06} className="gallery-v2__grid">
          {gallery.map((item, index) => (
            <StaggerItem
              key={item.id}
              className={`gallery-v2__item ${index === 0 ? "gallery-v2__item--featured" : ""}`}
            >
              <button
                type="button"
                onClick={() => openByIndex(index)}
                className="gallery-v2__card group"
                aria-label={`View ${item.alt}`}
              >
                <div className="gallery-v2__image-wrap">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                    className="gallery-v2__image"
                    style={{ objectPosition: CROPS[item.id] ?? "center" }}
                  />
                  <div className="gallery-v2__overlay" />
                  <div className="gallery-v2__expand">
                    <Expand className="h-5 w-5" />
                  </div>
                </div>
                <div className="gallery-v2__caption">
                  <p className="gallery-v2__title">{item.alt}</p>
                  <p className="gallery-v2__location">{item.location}</p>
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
