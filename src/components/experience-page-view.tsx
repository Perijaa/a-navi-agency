"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Star,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Euro,
  Waves,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";
import { getExperienceBySlug, testimonials } from "@/lib/data";
import { getExperienceDetail } from "@/lib/experience-detail";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileBookBar } from "@/components/mobile-book-bar";
import { FloatingBookCta } from "@/components/floating-book-cta";
import { BlurReveal, Stagger, StaggerItem } from "@/components/motion";
import { BookingCard } from "@/components/ui/booking-card";
import { saveBookingDraft, type BookingDraft } from "@/lib/booking-utils";
import { useState } from "react";

const OVERVIEW_ICONS = {
  clock: Clock,
  "map-pin": MapPin,
  users: Users,
  euro: Euro,
  waves: Waves,
  "life-buoy": LifeBuoy,
} as const;

function scrollToContact(draft: BookingDraft) {
  saveBookingDraft(draft);
  if (typeof window !== "undefined" && window.location.pathname !== "/") {
    window.location.href = "/#contact";
    return;
  }
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function StickyBooking({
  experience,
}: {
  experience: NonNullable<ReturnType<typeof getExperienceBySlug>>;
}) {
  const detail = getExperienceDetail(experience.id);

  return (
    <div className="exp-booking">
      <p className="exp-booking__price">
        From <strong>&euro;{experience.priceFrom}</strong>
      </p>
      <p className="exp-booking__rating">
        <span className="exp-booking__stars" aria-hidden>
          ★★★★★
        </span>
        {detail?.rating ?? 4.9}
        <span className="exp-booking__rating-muted">
          ({detail?.reviewCount ?? 200} reviews)
        </span>
      </p>
      <BookingCard
        variant="floating"
        defaultExperienceId={experience.id}
        showPrice={false}
        ctaLabel="Book now"
        onReserve={scrollToContact}
      />
      <ul className="exp-booking__trust">
        <li>Today available</li>
        <li>Free cancellation</li>
      </ul>
    </div>
  );
}

function ExpFaq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="exp-faq">
      {items.map((item, i) => (
        <div key={item.question} className="exp-faq__item">
          <button
            type="button"
            className="exp-faq__trigger"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.question}
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && <p className="exp-faq__answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export function ExperiencePageView({ slug }: { slug: string }) {
  const experience = getExperienceBySlug(slug);
  const detail = getExperienceDetail(slug);

  if (!experience || !detail) return null;

  const tourReviews = testimonials.filter(
    (t) =>
      t.experience === experience.title ||
      (experience.id === "rafting" && t.experience === "Rafting")
  );
  const reviews = (tourReviews.length > 0 ? tourReviews : testimonials).slice(0, 4);

  return (
    <>
      <Navbar />
      <FloatingBookCta />
      <main className="bg-cream pb-safe-book-bar">
        {/* Hero — split layout */}
        <section className="exp-hero">
          <div className="exp-hero__media">
            <Image
              src={experience.detailImage.replace("w=1200", "w=1800")}
              alt={experience.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
            <div className="exp-hero__overlay" aria-hidden />
          </div>

          <div className="aw-container exp-hero__inner">
            <Link href="/#experiences" className="exp-hero__back">
              ← All tours
            </Link>

            <div className="exp-hero__grid">
              <BlurReveal className="exp-hero__copy">
                <p className="exp-hero__eyebrow">{experience.tag}</p>
                <h1 className="exp-hero__title">{experience.title}</h1>
                <p className="exp-hero__rating">
                  <span className="exp-hero__stars" aria-hidden>
                    ★★★★★
                  </span>
                  {detail.rating}
                  <span className="exp-hero__rating-muted">
                    {detail.reviewCount} reviews
                  </span>
                </p>
                <p className="exp-hero__lead">{experience.headline}</p>
                <a href="/#contact" className="hero-v2__cta-primary exp-hero__cta lg:hidden">
                  Book now
                </a>
              </BlurReveal>

              <aside className="exp-hero__booking hidden lg:block">
                <StickyBooking experience={experience} />
              </aside>
            </div>
          </div>
        </section>

        <div className="aw-container exp-layout">
          <div className="exp-main">
            {/* Overview */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">Overview</h2>
              <div className="exp-overview">
                {detail.overview.map((item) => {
                  const Icon = OVERVIEW_ICONS[item.icon];
                  return (
                    <div key={item.label} className="exp-overview__item">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </BlurReveal>

            {/* Gallery */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">Gallery</h2>
              <div className="exp-gallery">
                {detail.galleryImages.map((img, i) => (
                  <div
                    key={img.src}
                    className={`exp-gallery__item exp-gallery__item--${img.span ?? (i === 0 ? "wide" : "normal")}`}
                  >
                    <div className="relative h-full min-h-[12rem] overflow-hidden rounded-[20px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </BlurReveal>

            {/* Timeline */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">What to expect</h2>
              <ol className="exp-timeline">
                {detail.timeline.map((step, i) => (
                  <li key={step.title} className="exp-timeline__step">
                    <span className="exp-timeline__dot">{i + 1}</span>
                    <span className="exp-timeline__label">{step.title}</span>
                  </li>
                ))}
              </ol>
            </BlurReveal>

            {/* Included / Bring */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">What&apos;s included</h2>
              <div className="exp-included">
                <div>
                  <h3 className="exp-included__heading">Included</h3>
                  <ul className="exp-included__list">
                    {detail.included.map((item) => (
                      <li key={item}>
                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="exp-included__heading">Bring</h3>
                  <ul className="exp-included__list exp-included__list--bring">
                    {detail.bring.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurReveal>

            {/* Why choose */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">Why choose this tour</h2>
              <ul className="exp-why">
                {detail.whyChoose.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </BlurReveal>

            {/* Reviews */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">Guest reviews</h2>
              <Stagger stagger={0.08} className="exp-reviews">
                {reviews.map((review) => (
                  <StaggerItem key={review.id} className="exp-review">
                    <div className="exp-review__stars" aria-label={`${review.rating} stars`}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="exp-review__quote">&ldquo;{review.quote}&rdquo;</p>
                    <p className="exp-review__author">
                      {review.name}
                      <span className="exp-review__meta">
                        {review.countryFlag} {review.country} · {review.date}
                      </span>
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </BlurReveal>

            {/* Location */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">Location</h2>
              <div className="exp-location">
                <div className="exp-location__map" aria-hidden>
                  <div className="exp-location__pin exp-location__pin--start">
                    <MapPin className="h-4 w-4" />
                    Start
                  </div>
                  {detail.location.finish !== detail.location.meeting && (
                    <div className="exp-location__route" />
                  )}
                  {detail.location.finish !== detail.location.meeting && (
                    <div className="exp-location__pin exp-location__pin--finish">
                      <MapPin className="h-4 w-4" />
                      Finish
                    </div>
                  )}
                </div>
                <div className="exp-location__details">
                  <p>
                    <strong>Meeting point</strong>
                    <br />
                    {detail.location.meeting}
                  </p>
                  {detail.location.finish !== detail.location.meeting && (
                    <p className="mt-4">
                      <strong>Finish</strong>
                      <br />
                      {detail.location.finish}
                    </p>
                  )}
                  <p className="mt-4 text-stone-500">{detail.location.note}</p>
                </div>
              </div>
            </BlurReveal>

            {/* FAQ */}
            <BlurReveal className="exp-section">
              <h2 className="exp-section__title">FAQ</h2>
              <ExpFaq items={detail.detailFaqs} />
            </BlurReveal>

            {/* Mobile booking */}
            <div className="exp-section lg:hidden">
              <StickyBooking experience={experience} />
            </div>
          </div>

          <aside className="exp-sidebar hidden lg:block">
            <div className="exp-sidebar__sticky">
              <StickyBooking experience={experience} />
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="exp-cta-banner">
          <Image
            src={experience.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="exp-cta-banner__overlay" aria-hidden />
          <div className="aw-container exp-cta-banner__content">
            <h2 className="exp-cta-banner__title">Ready for your adventure?</h2>
            <a href="/#contact" className="hero-v2__cta-primary">
              Book now
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
