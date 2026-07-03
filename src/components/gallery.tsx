"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";
import type { GalleryItem } from "@/lib/data";
import { BlurReveal } from "@/components/motion";
import { EditorialPhoto } from "@/components/ui/editorial-photo";
import { PhotoLightbox, type LightboxItem } from "@/components/ui/photo-lightbox";
import { SectionHeroContent } from "@/components/ui/section-hero-content";

const CROPS: Record<string, string> = {
  g1: "50% 35%",
  g2: "50% 40%",
  g3: "50% 30%",
  g4: "60% 50%",
  g5: "50% 20%",
  g6: "50% 55%",
  g7: "50% 45%",
};

function spanClass(span: GalleryItem["span"]) {
  switch (span) {
    case "tall":
      return "photo-masonry__item--tall";
    case "wide":
      return "photo-masonry__item--wide";
    default:
      return "photo-masonry__item--normal";
  }
}

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

  const openById = (id: string) => {
    const i = gallery.findIndex((g) => g.id === id);
    if (i >= 0) setLightboxIndex(i);
  };

  const [featured, ...rest] = gallery;

  return (
    <section id="gallery" className="bg-ink" data-mobile-bar-surface="dark">
      <header className="aw-container gallery-section__intro">
        <BlurReveal className="gallery-section__copy">
          <p className="aw-kicker text-cream/45">Gallery</p>
          <h2 className="aw-headline mt-4 text-cream">On the water</h2>
          <p className="gallery-section__lead mt-5 text-[17px] leading-relaxed text-cream/55">
            Scenes from the Cetina — tap any photo to expand.
          </p>
        </BlurReveal>
      </header>

      {featured && (
        <div className="aw-container gallery-section__featured">
          <button
            type="button"
            onClick={() => openById(featured.id)}
            className="hero-section gallery-featured group relative mx-auto block w-full max-w-3xl overflow-hidden rounded-[20px]"
            aria-label={`View ${featured.alt}`}
          >
            <div className="gallery-featured__frame relative aspect-[16/11] w-full">
              <Image
                src={featured.image.replace("w=1200", "w=1800")}
                alt={featured.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: CROPS[featured.id] ?? "center" }}
              />
              <div className="absolute inset-0 bg-ink/35 transition-colors group-hover:bg-ink/45" />
              <div className="hero-media__content hero-media__content--centered">
                <SectionHeroContent
                  size="overlay"
                  eyebrow={featured.location}
                  title={featured.alt}
                  lead={featured.caption}
                  className="pointer-events-none"
                />
              </div>
            </div>
          </button>
        </div>
      )}

      <div className="aw-container gallery-section__masonry">
        <div className="photo-masonry">
          {rest.map((item) => (
            <div key={item.id} className={`photo-masonry__item ${spanClass(item.span)}`}>
              <EditorialPhoto
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                objectPosition={CROPS[item.id]}
                aspectClass="h-full min-h-[11rem]"
                className="h-full !rounded-[16px]"
                onClick={() => openById(item.id)}
                label={item.alt}
              />
            </div>
          ))}
        </div>
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
