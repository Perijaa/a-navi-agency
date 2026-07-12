import { experiences } from "@/lib/data";
import {
  formatBookingDate,
  formatGuestSummary,
  parseDateInputValue,
  type BookingDraft,
} from "@/lib/booking-utils";

export const BOOKING_INBOX = "josipsinkovic6@gmail.com";

const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${BOOKING_INBOX}`;

export type BookingInquiryPayload = {
  draft: BookingDraft;
  source: "experience-page" | "contact-form";
  tourTitle?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export function getTourTitle(experienceId: string): string {
  return experiences.find((e) => e.id === experienceId)?.title ?? experienceId;
}

export function validateBookingDraft(draft: BookingDraft): string | null {
  if (!draft.experienceId) return "Please choose a tour.";
  if (!draft.date) return "Please select a date.";
  if (draft.guests.adults < 1) return "At least one adult is required.";
  return null;
}

export async function submitBookingInquiry(payload: BookingInquiryPayload): Promise<void> {
  const validationError = validateBookingDraft(payload.draft);
  if (validationError) {
    throw new Error(validationError);
  }

  const tour =
    payload.tourTitle ?? getTourTitle(payload.draft.experienceId);
  const dateLabel = formatBookingDate(parseDateInputValue(payload.draft.date));
  const guestsLabel = formatGuestSummary(payload.draft.guests);

  const body = {
    _subject: `A-Navi booking · ${tour}`,
    _template: "table",
    _captcha: "false",
    Source: payload.source === "contact-form" ? "Contact form" : "Tour page",
    Tour: tour,
    Date: dateLabel,
    Guests: guestsLabel,
    Name: payload.name?.trim() || "Not provided",
    Email: payload.email?.trim() || "Not provided",
    Phone: payload.phone?.trim() || "Not provided",
    Message: payload.message?.trim() || "—",
  };

  const response = await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Booking request could not be sent.");
  }

  const data = (await response.json()) as { success?: string };
  if (data.success !== "true") {
    throw new Error("Booking request could not be sent.");
  }
}
