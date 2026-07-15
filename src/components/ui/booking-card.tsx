"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Users,
  ArrowRight,
  Shield,
  Check,
} from "lucide-react";
import { experiences, type Experience } from "@/lib/data";
import { Magnetic } from "@/components/motion";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  type BookingGuests,
  type BookingDraft,
  formatBookingDate,
  formatGuestSummary,
  guestTotal,
  getCalendarMonth,
  isDateDisabled,
  isSameDay,
  monthLabel,
  startOfDay,
  WEEKDAYS,
  toDateInputValue,
  parseDateInputValue,
} from "@/lib/booking-utils";
import {
  formatBookingTotal,
  getBookingPriceQuote,
  getFlatPartyRateHint,
  getGuestPriceLabel,
} from "@/lib/booking-pricing";

type Panel = "activity" | "date" | "guests" | null;

export type BookingCardVariant = "glass" | "solid" | "floating";

export type BookingCardProps = {
  variant?: BookingCardVariant;
  defaultExperienceId?: string;
  defaultDate?: string;
  defaultGuests?: BookingGuests;
  showPrice?: boolean;
  showCta?: boolean;
  ctaLabel?: string;
  onReserve?: (draft: BookingDraft) => void | Promise<void>;
  onChange?: (draft: BookingDraft) => void;
  className?: string;
};

function getExperience(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id);
}

function panelMotion(reduced: boolean) {
  if (reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    };
  }
  return {
    initial: { opacity: 0, y: -8, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -6, scale: 0.98 },
    transition: { duration: 0.32, ease: EASE_OUT },
  };
}

function Stepper({
  value,
  min,
  max,
  onChange,
  label,
  sublabel,
  variant,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  label: string;
  sublabel?: string;
  variant: BookingCardVariant;
}) {
  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div className="booking-stepper">
      <div>
        <p className={`booking-stepper-label booking-stepper-label--${variant}`}>{label}</p>
        {sublabel && (
          <p className={`booking-stepper-sublabel booking-stepper-sublabel--${variant}`}>
            {sublabel}
          </p>
        )}
      </div>
      <div className="booking-stepper-controls">
        <motion.button
          type="button"
          className={`booking-stepper-btn booking-stepper-btn--${variant}`}
          disabled={atMin}
          onClick={() => onChange(value - 1)}
          whileTap={{ scale: 0.92 }}
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </motion.button>
        <span className={`booking-stepper-value booking-stepper-value--${variant}`}>
          {value}
        </span>
        <motion.button
          type="button"
          className={`booking-stepper-btn booking-stepper-btn--${variant}`}
          disabled={atMax}
          onClick={() => onChange(value + 1)}
          whileTap={{ scale: 0.92 }}
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
}

export function BookingCard({
  variant = "solid",
  defaultExperienceId = "",
  defaultDate = "",
  defaultGuests = { adults: 2, children: 0 },
  showPrice = true,
  showCta = true,
  ctaLabel = "Check availability",
  onReserve,
  onChange,
  className = "",
}: BookingCardProps) {
  const reduced = useReducedMotion();
  const listId = useId();
  const cardRef = useRef<HTMLDivElement>(null);

  const [experienceId, setExperienceId] = useState(defaultExperienceId);
  const [date, setDate] = useState<Date | null>(() => parseDateInputValue(defaultDate));
  const [guests, setGuests] = useState<BookingGuests>(defaultGuests);
  const [panel, setPanel] = useState<Panel>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = useMemo(() => startOfDay(new Date()), []);
  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setFullYear(d.getFullYear() + 1);
    return d;
  }, [today]);

  const [viewYear, setViewYear] = useState(() => (date ?? today).getFullYear());
  const [viewMonth, setViewMonth] = useState(() => (date ?? today).getMonth());

  const experience = getExperience(experienceId);
  const priceQuote = useMemo(
    () => (experienceId ? getBookingPriceQuote(experienceId, guests) : null),
    [experienceId, guests],
  );
  const adultPriceLabel = experienceId ? getGuestPriceLabel(experienceId, "Adults") : undefined;
  const childPriceLabel = experienceId ? getGuestPriceLabel(experienceId, "Children") : undefined;
  const flatPartyHint = experienceId ? getFlatPartyRateHint(experienceId) : undefined;
  const calendarCells = useMemo(
    () => getCalendarMonth(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  useEffect(() => {
    setExperienceId(defaultExperienceId);
  }, [defaultExperienceId]);

  useEffect(() => {
    setDate(parseDateInputValue(defaultDate));
  }, [defaultDate]);

  useEffect(() => {
    setGuests(defaultGuests);
  }, [defaultGuests.adults, defaultGuests.children]);

  useEffect(() => {
    if (!panel) return;

    const onPointerDown = (e: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setPanel(null);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [panel]);

  const togglePanel = (next: Panel) => {
    setPanel((current) => (current === next ? null : next));
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const canPrevMonth =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const canNextMonth =
    viewYear < maxDate.getFullYear() ||
    (viewYear === maxDate.getFullYear() && viewMonth < maxDate.getMonth());

  const updateGuests = (patch: Partial<BookingGuests>) => {
    const next = { ...guests, ...patch };
    const total = guestTotal(next);
    if (total > 20) return;
    if (next.adults < 1) return;
    if (next.children < 0) return;
    setGuests(next);
    emitDraft({ guests: next });
  };

  const emitDraft = (patch?: Partial<{ experienceId: string; date: Date | null; guests: BookingGuests }>) => {
    const next = {
      experienceId: patch?.experienceId ?? experienceId,
      date: patch?.date !== undefined ? patch.date : date,
      guests: patch?.guests ?? guests,
    };
    onChange?.({
      experienceId: next.experienceId,
      date: toDateInputValue(next.date),
      guests: next.guests,
    });
  };

  const handleReserve = async () => {
    if (!onReserve || isSubmitting) return;

    const draft: BookingDraft = {
      experienceId,
      date: toDateInputValue(date),
      guests,
    };

    setIsSubmitting(true);
    try {
      await onReserve(draft);
    } finally {
      setIsSubmitting(false);
    }
  };

  const motionProps = panelMotion(reduced);
  const Icon = experience?.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`booking-card booking-card--${variant} ${className}`}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
    >
      {showPrice && experience && priceQuote && (
        <div className="booking-card-price">
          {priceQuote.model === "per-guest" ? (
            <>
              <span className={`booking-card-price-from booking-card-price-from--${variant}`}>
                Adults
              </span>
              <span className={`booking-card-price-value booking-card-price-value--${variant}`}>
                {adultPriceLabel ?? `€${priceQuote.adultUnitPrice}`}
              </span>
              {childPriceLabel ? (
                <span className={`booking-card-price-unit booking-card-price-unit--${variant}`}>
                  · Children {childPriceLabel}
                </span>
              ) : null}
            </>
          ) : (
            <>
              <span className={`booking-card-price-from booking-card-price-from--${variant}`}>
                Boat rate
              </span>
              <span className={`booking-card-price-value booking-card-price-value--${variant}`}>
                {flatPartyHint}
              </span>
            </>
          )}
        </div>
      )}

      <div className={`booking-fields booking-fields--${variant}`}>
        <button
          type="button"
          className={`booking-field ${panel === "activity" ? "booking-field--open" : ""} booking-field--${variant}`}
          onClick={() => togglePanel("activity")}
          aria-expanded={panel === "activity"}
          aria-controls={`${listId}-activity`}
        >
          <span className={`booking-field-icon booking-field-icon--${variant}`} aria-hidden>
            {Icon ? <Icon className="h-[18px] w-[18px]" /> : <Calendar className="h-[18px] w-[18px]" />}
          </span>
          <span className="booking-field-body">
            <span className={`booking-field-label booking-field-label--${variant}`}>Activity</span>
            <span className={`booking-field-value booking-field-value--${variant}`}>
              {experience?.title ?? "Choose a tour"}
            </span>
          </span>
          <ChevronRight
            className={`booking-field-chevron ${panel === "activity" ? "booking-field-chevron--open" : ""} booking-field-chevron--${variant}`}
          />
        </button>

        <button
          type="button"
          className={`booking-field ${panel === "date" ? "booking-field--open" : ""} booking-field--${variant}`}
          onClick={() => togglePanel("date")}
          aria-expanded={panel === "date"}
          aria-controls={`${listId}-date`}
        >
          <span className={`booking-field-icon booking-field-icon--${variant}`} aria-hidden>
            <Calendar className="h-[18px] w-[18px]" />
          </span>
          <span className="booking-field-body">
            <span className={`booking-field-label booking-field-label--${variant}`}>Date</span>
            <span
              className={`booking-field-value booking-field-value--${variant} ${!date ? "booking-field-value--placeholder" : ""}`}
            >
              {formatBookingDate(date)}
            </span>
          </span>
          <ChevronRight
            className={`booking-field-chevron ${panel === "date" ? "booking-field-chevron--open" : ""} booking-field-chevron--${variant}`}
          />
        </button>

        <button
          type="button"
          className={`booking-field booking-field--last ${panel === "guests" ? "booking-field--open" : ""} booking-field--${variant}`}
          onClick={() => togglePanel("guests")}
          aria-expanded={panel === "guests"}
          aria-controls={`${listId}-guests`}
        >
          <span className={`booking-field-icon booking-field-icon--${variant}`} aria-hidden>
            <Users className="h-[18px] w-[18px]" />
          </span>
          <span className="booking-field-body">
            <span className={`booking-field-label booking-field-label--${variant}`}>Guests</span>
            <span className={`booking-field-value booking-field-value--${variant}`}>
              {formatGuestSummary(guests)}
            </span>
          </span>
          <ChevronRight
            className={`booking-field-chevron ${panel === "guests" ? "booking-field-chevron--open" : ""} booking-field-chevron--${variant}`}
          />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {panel === "activity" && (
          <motion.div
            key="activity"
            id={`${listId}-activity`}
            className={`booking-panel booking-panel--${variant}`}
            {...motionProps}
          >
            <ul className="booking-activity-list" role="listbox">
              {experiences.map((exp) => {
                const ExpIcon = exp.icon;
                const selected = exp.id === experienceId;
                return (
                  <li key={exp.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={`booking-activity-option ${selected ? "booking-activity-option--selected" : ""} booking-activity-option--${variant}`}
                      onClick={() => {
                        setExperienceId(exp.id);
                        setPanel(null);
                        emitDraft({ experienceId: exp.id });
                      }}
                    >
                      <span className={`booking-activity-icon booking-activity-icon--${variant}`}>
                        <ExpIcon className="h-5 w-5" />
                      </span>
                      <span className="booking-activity-copy">
                        <span className={`booking-activity-title booking-activity-title--${variant}`}>
                          {exp.title}
                        </span>
                        <span className={`booking-activity-meta booking-activity-meta--${variant}`}>
                          {exp.duration} &middot; From &euro;{exp.priceFrom}
                        </span>
                      </span>
                      {selected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="booking-activity-check"
                        >
                          <Check className="h-4 w-4" />
                        </motion.span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}

        {panel === "date" && (
          <motion.div
            key="date"
            id={`${listId}-date`}
            className={`booking-panel booking-panel--date booking-panel--${variant}`}
            {...motionProps}
          >
            <div className="booking-calendar-header">
              <button
                type="button"
                className={`booking-calendar-nav booking-calendar-nav--${variant}`}
                onClick={prevMonth}
                disabled={!canPrevMonth}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className={`booking-calendar-title booking-calendar-title--${variant}`}>
                {monthLabel(viewYear, viewMonth)}
              </p>
              <button
                type="button"
                className={`booking-calendar-nav booking-calendar-nav--${variant}`}
                onClick={nextMonth}
                disabled={!canNextMonth}
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="booking-calendar-weekdays" aria-hidden>
              {WEEKDAYS.map((day) => (
                <span key={day} className={`booking-calendar-weekday booking-calendar-weekday--${variant}`}>
                  {day}
                </span>
              ))}
            </div>

            <div className="booking-calendar-grid" role="grid">
              {calendarCells.map(({ date: cellDate, inMonth }) => {
                const disabled = !inMonth || isDateDisabled(cellDate, today, maxDate);
                const selected = date ? isSameDay(cellDate, date) : false;
                const isToday = isSameDay(cellDate, today);

                return (
                  <button
                    key={cellDate.toISOString()}
                    type="button"
                    role="gridcell"
                    disabled={disabled}
                    aria-selected={selected}
                    aria-label={cellDate.toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    className={`booking-calendar-day booking-calendar-day--${variant} ${
                      !inMonth ? "booking-calendar-day--muted" : ""
                    } ${selected ? "booking-calendar-day--selected" : ""} ${
                      isToday && !selected ? "booking-calendar-day--today" : ""
                    }`}
                    onClick={() => {
                      setDate(cellDate);
                      setPanel(null);
                      emitDraft({ date: cellDate });
                    }}
                  >
                    {cellDate.getDate()}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {panel === "guests" && (
          <motion.div
            key="guests"
            id={`${listId}-guests`}
            className={`booking-panel booking-panel--${variant}`}
            {...motionProps}
          >
            <Stepper
              variant={variant}
              label="Adults"
              sublabel={
                flatPartyHint
                  ? flatPartyHint
                  : adultPriceLabel ?? "Age 13+"
              }
              value={guests.adults}
              min={1}
              max={20 - guests.children}
              onChange={(n) => updateGuests({ adults: n })}
            />
            <Stepper
              variant={variant}
              label="Children"
              sublabel={
                flatPartyHint
                  ? "Same boat rate applies to whole party"
                  : childPriceLabel ?? "Ages 0–13"
              }
              value={guests.children}
              min={0}
              max={20 - guests.adults}
              onChange={(n) => updateGuests({ children: n })}
            />
            <p className={`booking-guest-cap booking-guest-cap--${variant}`}>
              Maximum 20 guests per booking
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {priceQuote ? (
        <div className={`booking-card-breakdown booking-card-breakdown--${variant}`}>
          <div className="booking-card-breakdown__total">
            <span className="booking-card-breakdown__total-label">Estimated total</span>
            <strong className="booking-card-breakdown__total-value">
              {formatBookingTotal(priceQuote.total)}
            </strong>
          </div>
        </div>
      ) : null}

      {showCta && (
        <Magnetic className="booking-card-cta-wrap">
          <button
            type="button"
            onClick={handleReserve}
            disabled={isSubmitting}
            className={`booking-card-cta booking-card-cta--${variant}`}
          >
            {isSubmitting ? "Sending..." : ctaLabel}
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </button>
        </Magnetic>
      )}

      <p className={`booking-card-trust booking-card-trust--${variant} ${!showCta ? "mt-4" : ""}`}>
        <Shield className="h-3.5 w-3.5 shrink-0" />
        Free cancellation &middot; No payment upfront
      </p>
    </motion.div>
  );
}
