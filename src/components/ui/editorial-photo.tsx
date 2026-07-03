"use client";

import Image from "next/image";
import { Parallax } from "@/components/motion";

type EditorialPhotoProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  aspectClass?: string;
  className?: string;
  parallax?: boolean;
  parallaxOffset?: number;
  onClick?: () => void;
  label?: string;
};

export function EditorialPhoto({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  objectPosition = "center center",
  aspectClass = "aspect-[4/5]",
  className = "",
  parallax = false,
  parallaxOffset = 28,
  onClick,
  label,
}: EditorialPhotoProps) {
  const Tag = onClick ? "button" : "div";

  const frame = (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`photo-frame photo-zoom group relative block w-full overflow-hidden text-left ${aspectClass} ${className}`}
      aria-label={onClick ? label ?? `View ${alt}` : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="photo-zoom-image object-cover"
        style={{ objectPosition }}
      />
      {onClick && (
        <span className="photo-frame-expand" aria-hidden>
          View
        </span>
      )}
    </Tag>
  );

  if (parallax) {
    return (
      <Parallax offset={parallaxOffset} className={`relative ${aspectClass} ${className}`}>
        <div className="photo-frame photo-zoom group relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="photo-zoom-image object-cover"
            style={{ objectPosition }}
          />
        </div>
      </Parallax>
    );
  }

  return frame;
}

type StackPhoto = {
  id: string;
  src: string;
  alt: string;
  objectPosition?: string;
  aspectClass?: string;
};

export function PhotoStack({
  photos,
  onPhotoClick,
  className = "",
}: {
  photos: StackPhoto[];
  onPhotoClick?: (id: string) => void;
  className?: string;
}) {
  return (
    <div className={`photo-stack ${className}`}>
      {photos.map((photo, i) => (
        <button
          key={photo.id}
          type="button"
          className={`photo-stack__layer photo-stack__layer--${i}`}
          onClick={() => onPhotoClick?.(photo.id)}
          aria-label={`View ${photo.alt}`}
        >
          <div className="photo-frame photo-zoom relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 80vw, 28rem"
              className="photo-zoom-image object-cover"
              style={{ objectPosition: photo.objectPosition ?? "center" }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
