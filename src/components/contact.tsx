"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { BlurReveal } from "@/components/motion";
import { scaleIn, transition, reducedVariants } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { BookingCard } from "@/components/ui/booking-card";
import {
  loadBookingDraft,
  clearBookingDraft,
  guestTotal,
  type BookingDraft,
} from "@/lib/booking-utils";

export function Contact() {
  const reduced = useReducedMotion();
  const [booking, setBooking] = useState<BookingDraft>({
    experienceId: "",
    date: "",
    guests: { adults: 2, children: 0 },
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const draft = loadBookingDraft();
    if (draft) {
      setBooking(draft);
      clearBookingDraft();
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section bg-cream">
      <div className="aw-container contact-section__wrap">
        <BlurReveal className="experiences-section__intro">
          <div className="experiences-section__copy">
            <p className="aw-kicker">Contact</p>
            <h2 className="aw-headline mt-4 text-ink">Book your tour.</h2>
            <p className="experiences-section__lead mt-5 text-[17px] leading-relaxed text-stone-500">
              We confirm availability within hours — by email or WhatsApp.
            </p>
            <p className="contact-section__meta mt-6 text-[15px] text-stone-500">
              <a href="tel:+385991234567" className="transition-colors hover:text-ink">
                +385 99 123 4567
              </a>
              <span aria-hidden>·</span>
              <a href="mailto:info@a-navi-agency.com" className="transition-colors hover:text-ink">
                info@a-navi-agency.com
              </a>
              <span aria-hidden>·</span>
              <a
                href="https://wa.me/385991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </BlurReveal>

        <div className="contact-section__form">
          <BlurReveal delay={0.06} className="contact-section__form-inner">
            {submitted ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={reducedVariants(scaleIn, reduced)}
                transition={transition(0.5)}
                className="py-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink">Request received</h3>
                <p className="mt-3 text-[15px] text-stone-500">We&apos;ll reply within a few hours.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="pro-link mt-6 !text-[15px]">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__header">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">Reservation</h3>
                  <p className="mt-1.5 text-[15px] text-stone-500">
                    Select a tour, date, and party size.
                  </p>
                </div>

                <div className="contact-form__body">
                  <div className="contact-form__booking">
                    <BookingCard
                      variant="solid"
                      defaultExperienceId={booking.experienceId}
                      defaultDate={booking.date}
                      defaultGuests={booking.guests}
                      showPrice
                      showCta={false}
                      onChange={setBooking}
                    />

                    <input type="hidden" name="experience" value={booking.experienceId} />
                    <input type="hidden" name="date" value={booking.date} />
                    <input type="hidden" name="guests" value={String(guestTotal(booking.guests))} />
                  </div>

                  <div className="contact-form__fields">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="field-label">Name</label>
                        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} className="field-input" required />
                      </div>
                      <div>
                        <label className="field-label">Email</label>
                        <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="field-input" required />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="field-label">
                          Phone <span className="field-label-optional">optional</span>
                        </label>
                        <input type="tel" name="phone" placeholder="+385 ..." value={formData.phone} onChange={handleChange} className="field-input" />
                      </div>
                      <div>
                        <label className="field-label">
                          Message <span className="field-label-optional">optional</span>
                        </label>
                        <textarea name="message" rows={2} placeholder="Special requests..." value={formData.message} onChange={handleChange} className="field-input resize-none" />
                      </div>
                    </div>

                    <div className="contact-form__submit">
                      <button
                        type="submit"
                        className="flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
                      >
                        <Send className="h-4 w-4" />
                        Send request
                      </button>
                      <p className="mt-4 text-center text-xs text-stone-400">
                        No payment now · Free cancellation 24h
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
