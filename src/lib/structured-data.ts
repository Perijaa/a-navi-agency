import type { Experience } from "@/lib/data";
import { faqs } from "@/lib/data";
import { MEETING_POINT } from "@/lib/meeting-point";
import {
  absoluteUrl,
  businessId,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  websiteId,
} from "@/lib/site";
import { assetPath } from "@/lib/base-path";

type JsonLd = Record<string, unknown>;

function imageUrl(path: string): string {
  return absoluteUrl(assetPath(path));
}

export function buildLocalBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": businessId(),
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    image: imageUrl("/images/logo.png"),
    logo: imageUrl("/images/logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: MEETING_POINT.address,
      addressLocality: "Omiš",
      postalCode: "21310",
      addressRegion: "Split-Dalmatia County",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MEETING_POINT.lat,
      longitude: MEETING_POINT.lng,
    },
    hasMap: MEETING_POINT.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "Omiš",
      containedInPlace: {
        "@type": "Country",
        name: "Croatia",
      },
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@id": businessId(),
    },
  };
}

export function buildFaqPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildExperienceSchema(experience: Experience): JsonLd {
  const pageUrl = absoluteUrl(`/experiences/${experience.id}`);

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: experience.title,
    description: experience.subheadline,
    url: pageUrl,
    image: imageUrl(experience.detailImage || experience.image),
    touristType: experience.difficulty,
    provider: {
      "@id": businessId(),
    },
    offers: {
      "@type": "Offer",
      price: String(experience.priceFrom),
      priceCurrency: experience.currency || "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      validFrom: new Date().toISOString().slice(0, 10),
    },
  };
}

export function buildExperienceBreadcrumbSchema(slug: string, title: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: absoluteUrl(`/experiences/${slug}`),
      },
    ],
  };
}

export function defaultOgImage() {
  return {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} — boat tours on the Cetina River in Omiš, Croatia`,
  };
}
