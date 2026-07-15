import { getExperienceDetail } from "@/lib/experience-detail";
import { guestTotal, type BookingGuests } from "@/lib/booking-utils";

export type BookingPriceLine = {
  label: string;
  detail: string;
  amount: number;
};

export type BookingPriceQuote = {
  model: "per-guest" | "flat-party";
  adultUnitPrice?: number;
  childUnitPrice?: number;
  lines: BookingPriceLine[];
  total: number;
};

function parseEuro(value: string): number {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function getTier(experienceId: string, label: string) {
  return getExperienceDetail(experienceId)?.pricingTiers?.find(
    (tier) => tier.label.toLowerCase() === label.toLowerCase(),
  );
}

export function getGuestPriceLabel(
  experienceId: string,
  guestType: "Adults" | "Children",
): string | undefined {
  const tier = getTier(experienceId, guestType);
  return tier?.price;
}

export function getFlatPartyRateHint(experienceId: string): string | undefined {
  const tiers = getExperienceDetail(experienceId)?.pricingTiers;
  if (!tiers?.length || tiers.some((tier) => tier.label.toLowerCase() === "adults")) {
    return undefined;
  }

  const twoPerson = tiers.find((tier) => /2 person/i.test(tier.label) && !/\+/.test(tier.label));
  const twoPlus = tiers.find((tier) => /2\+/i.test(tier.label));

  if (!twoPerson || !twoPlus) return undefined;
  return `${twoPerson.price} (up to 2 guests) · ${twoPlus.price} (3+ guests)`;
}

export function getBookingPriceQuote(
  experienceId: string,
  guests: BookingGuests,
): BookingPriceQuote | null {
  const tiers = getExperienceDetail(experienceId)?.pricingTiers;
  if (!tiers?.length) return null;

  const hasGuestTiers = tiers.some((tier) => tier.label.toLowerCase() === "adults");

  if (!hasGuestTiers) {
    const twoPerson = tiers.find((tier) => /2 person/i.test(tier.label) && !/\+/.test(tier.label));
    const twoPlus = tiers.find((tier) => /2\+/i.test(tier.label));
    const totalGuests = guestTotal(guests);
    const useTwoPlus = totalGuests > 2;
    const selectedTier = useTwoPlus ? twoPlus : twoPerson;
    const amount = parseEuro(selectedTier?.price ?? (useTwoPlus ? "70" : "50"));

    return {
      model: "flat-party",
      lines: [
        {
          label: selectedTier?.label ?? (useTwoPlus ? "2+ person" : "2 person"),
          detail: `${totalGuests} ${totalGuests === 1 ? "guest" : "guests"} · boat rental`,
          amount,
        },
      ],
      total: amount,
    };
  }

  const adultPrice = parseEuro(getTier(experienceId, "Adults")?.price ?? "0");
  const childPrice = parseEuro(getTier(experienceId, "Children")?.price ?? "0");
  const lines: BookingPriceLine[] = [];

  if (guests.adults > 0) {
    lines.push({
      label: "Adults",
      detail: `${guests.adults} × €${adultPrice}`,
      amount: guests.adults * adultPrice,
    });
  }

  if (guests.children > 0) {
    lines.push({
      label: "Children",
      detail: `${guests.children} × €${childPrice}`,
      amount: guests.children * childPrice,
    });
  }

  return {
    model: "per-guest",
    adultUnitPrice: adultPrice,
    childUnitPrice: childPrice,
    lines,
    total: lines.reduce((sum, line) => sum + line.amount, 0),
  };
}

export function formatBookingTotal(total: number): string {
  return `€${total}`;
}
