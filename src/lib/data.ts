import {
  Ship,
  Anchor,
  Glasses,
  Navigation,
  Waves,
  Moon,
  type LucideIcon,
} from "lucide-react";
import { assetPath } from "./base-path";

export interface PriceTier {
  label: string;
  price: string;
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  longDescription: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Active";
  priceFrom: number;
  currency: string;
  pricing: PriceTier[];
  benefits: string[];
  ctaLabel: string;
  trustLine: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
  detailImage: string;
  tag: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  rating: number;
  quote: string;
  date: string;
  experience: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
  location: string;
  span: "hero" | "tall" | "wide" | "normal";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const experiences: Experience[] = [
  {
    id: "glass-boat",
    title: "Glass Boat",
    tagline: "Where the Cetina reveals its secrets",
    headline: "Through the Glass, the Canyon Comes Alive",
    subheadline:
      "Slip into the Cetina gorge from the Omi\u0161 promenade on a glass-bottom boat and watch the ancient Dalmatian riverbed come alive beneath your feet.",
    description:
      "Depart from the Omi\u0161 waterfront and glide into the towering Cetina canyon. Watch fish dart beneath the glass as limestone walls \u2014 sculpted by millennia of Dalmatian weather \u2014 rise around you, then arrive at the legendary Radmanove Mlinice, a hidden canyon estate that has drawn visitors for centuries.",
    longDescription:
      "There is something quietly extraordinary about watching the Cetina reveal its secrets through glass. As your boat slips past Omi\u0161\u2019s old stone bridge and into the canyon, towering limestone walls \u2014 sculpted by millions of years of Dalmatian weather \u2014 rise around you and the water beneath turns crystalline. Schools of fish trace silver lines across the riverbed. Pebbles shimmer in the shifting light. The 30\u201335 minute ride carries you deep into a gorge that few visitors to Croatia ever see, ending at Radmanove Mlinice \u2014 a centuries-old mill estate hidden where the canyon is narrowest. This is an experience designed for everyone: families with small children, couples seeking a quiet afternoon on the Cetina, and even your four-legged companions. No restrictions, no rush \u2014 just the canyon, the river, and pure, unhurried Dalmatian beauty.",
    duration: "30\u201335 min ride",
    difficulty: "Easy",
    priceFrom: 20,
    currency: "EUR",
    pricing: [
      { label: "Adults", price: "\u20ac20" },
      { label: "Children 5\u201313", price: "\u20ac10" },
      { label: "Under 5", price: "Free" },
    ],
    benefits: [
      "Glass-bottom views of fish and the ancient Cetina riverbed throughout the journey",
      "Scenic stop at Radmanove Mlinice, a centuries-old estate hidden deep in the canyon",
      "Fully family-friendly and pet-friendly \u2014 no age restrictions",
    ],
    ctaLabel: "Reserve Your Glass Boat",
    trustLine:
      "Over 800 five-star reviews. Omi\u0161\u2019s most beloved family tour, guests from 40+ countries.",
    icon: Ship,
    gradient: "from-teal-800/25 to-emerald-900/20",
    image: assetPath("/images/zvone/glass-boat-dock.jpg"),
    detailImage: assetPath("/images/zvone/20260416_115400_IMG_4384.jpg"),
    tag: "Most Popular",
    highlights: [
      "Crystal-clear glass bottom viewing",
      "Stop at Radmanove Mlinice",
      "Pet-friendly, all ages welcome",
      "30\u201335 minute scenic ride",
    ],
  },
  {
    id: "taxi-boat",
    title: "Taxi Boat",
    tagline: "The old Dalmatian way upriver",
    headline: "Into the Heart of the Cetina Gorge",
    subheadline:
      "A 30-minute scenic cruise from the Omi\u0161 waterfront through the towering Cetina canyon, followed by a leisurely break at the enchanting Radmanove Mlinice.",
    description:
      "Leave the Omi\u0161 harbour behind and cruise 30 minutes through the Cetina canyon \u2014 where sheer Dalmatian limestone meets emerald water \u2014 to the storied Radmanove Mlinice for a 1-hour break in one of Croatia\u2019s most magical settings.",
    longDescription:
      "Some journeys are destinations in themselves. Our taxi boat departs from the Omi\u0161 promenade and carves a gentle path through the Cetina River canyon, where sheer rock faces plunge into emerald water and the air smells of wild sage, rosemary, and Mediterranean pine. After 30 minutes of cinematic Dalmatian scenery, you arrive at Radmanove Mlinice \u2014 a nature-park retreat built around 17th-century stone mills, where the river pools into natural swimming holes beneath ancient trees. You\u2019ll have a full hour to explore the estate, swim in canyon pools, or simply sit with a coffee at the water\u2019s edge while the Cetina slips past. When you\u2019re ready, the boat takes you home the same breathtaking way you came \u2014 back through the gorge to Omi\u0161. Perfect for every age and every pace.",
    duration: "2 hours total",
    difficulty: "Easy",
    priceFrom: 15,
    currency: "EUR",
    pricing: [
      { label: "Adults", price: "\u20ac15" },
      { label: "Children 5\u201313", price: "\u20ac10" },
      { label: "Under 5", price: "Free" },
    ],
    benefits: [
      "30-minute scenic cruise through the towering Cetina canyon from Omi\u0161",
      "1-hour leisure break at Radmanove Mlinice, a 17th-century Dalmatian mill estate",
      "A nature-park atmosphere in the heart of Croatia\u2019s coastal canyon country",
    ],
    ctaLabel: "Book the Canyon Cruise",
    trustLine:
      "The most relaxing way to reach Radmanove Mlinice from Omi\u0161. Guests return year after year.",
    icon: Navigation,
    gradient: "from-teal-700/25 to-emerald-800/20",
    image: assetPath("/images/zvone/taxi-boat-guests-1.jpg"),
    detailImage: assetPath("/images/zvone/taxi-boat-hero.jpg"),
    tag: "Scenic",
    highlights: [
      "30-minute scenic canyon cruise",
      "1-hour stop at Radmanove Mlinice",
      "Nature-park atmosphere",
      "Suitable for all ages",
    ],
  },
  {
    id: "rent-a-boat",
    title: "Rent a Boat",
    tagline: "Your own course, from river to open sea",
    headline: "From the Cetina to the Adriatic",
    subheadline:
      "Take the helm from the Omi\u0161 waterfront and explore the Cetina canyon, hidden Dalmatian beaches, and the open Adriatic at your own pace.",
    description:
      "No captain, no schedule, no boundaries. Depart from Omi\u0161 and chart your own course \u2014 upstream through the Cetina canyon to Radmanove Mlinice, or out past the river mouth along the Dalmatian coastline to secluded beaches only reachable by water.",
    longDescription:
      "Freedom on the water feels different here. From the Omi\u0161 promenade, where the Cetina River meets the Adriatic Sea, every direction becomes an invitation. Head upstream through the canyon toward the quiet pools near Radmanove Mlinice, where you can tie up and swim in water so clear it barely looks real. Or turn the other way \u2014 out past the river mouth and along the Dalmatian coastline, discovering secluded pebble beaches framed by Mediterranean pine that no road can reach. This is the stretch of coast between Split and Makarska, and from the water, it looks nothing like the postcards. Our boats require no license, and come with everything you need: fuel, safety gear, and a simple map of the best spots along the Omi\u0161 riviera. Whether you choose a 3-hour escape or a full day on the water, the pace is entirely yours.",
    duration: "3 hours \u2013 full day",
    difficulty: "Moderate",
    priceFrom: 70,
    currency: "EUR",
    pricing: [
      { label: "3 hours", price: "\u20ac70" },
      { label: "Full day", price: "\u20ac130" },
    ],
    benefits: [
      "No license needed \u2014 fuel, safety gear, and coastal maps included",
      "Explore the Cetina canyon upstream or the Dalmatian coast by sea",
      "Discover hidden Adriatic beaches between Omi\u0161 and Makarska",
    ],
    ctaLabel: "Reserve Your Boat",
    trustLine:
      "Our most popular choice for couples and families exploring the Omi\u0161 riviera on their own.",
    icon: Anchor,
    gradient: "from-emerald-800/25 to-teal-900/20",
    image: assetPath("/images/zvone/rent-boat-harbour.jpg"),
    detailImage: assetPath("/images/zvone/rent-a-boat-hero.png"),
    tag: "Freedom",
    highlights: [
      "No boat license required",
      "Fuel and safety equipment included",
      "Reach hidden Dalmatian beaches",
      "Flexible 3-hour or full-day rentals",
    ],
  },
  {
    id: "semi-submarine",
    title: "Semi Submarine",
    tagline: "Below the Adriatic, off the Omi\u0161 coast",
    headline: "The Adriatic Beneath Omi\u0161",
    subheadline:
      "Step below the waterline of the central Dalmatian coast and witness marine life and a WWII shipwreck through panoramic underwater windows.",
    description:
      "Descend below the Adriatic surface just off the Omi\u0161 coast. Come face-to-face with the marine life of the central Dalmatian sea and the haunting silhouette of a Second World War shipwreck resting on the seabed.",
    longDescription:
      "The moment you descend the stairs and the waterline rises above the windows, everything changes. Suddenly you are inside the Adriatic \u2014 not on it. The waters off the Omi\u0161 coast harbour a rich ecosystem: shoals of bream and mullet drift past the panoramic glass, sea urchins cling to the rocky Dalmatian seabed, and then, emerging from the blue-green haze, the unmistakable outline of a World War II shipwreck appears \u2014 a silent reminder of the history that lies beneath this ancient coastline. Our expert marine guide narrates every moment, turning the voyage into a living documentary of the central Adriatic. The cabin is climate-controlled and perfectly comfortable, making this an experience that captivates children and adults alike. For families visiting Omi\u0161, it\u2019s pure magic \u2014 the kind of wonder that stays with your kids long after the holiday ends.",
    duration: "1 hour",
    difficulty: "Easy",
    priceFrom: 20,
    currency: "EUR",
    pricing: [{ label: "Per person", price: "From \u20ac20" }],
    benefits: [
      "Panoramic underwater windows into the Adriatic ecosystem \u2014 fish, flora, and a WWII wreck",
      "Climate-controlled cabin with expert narration on local marine life",
      "A one-of-a-kind family experience off the Dalmatian coast",
    ],
    ctaLabel: "Book the Semi Submarine",
    trustLine:
      "The experience children talk about for years. Rated unforgettable by 97% of guests in Omi\u0161.",
    icon: Glasses,
    gradient: "from-stone-700/25 to-teal-900/20",
    image: assetPath("/images/experiences/semi-submarine.jpg"),
    detailImage: assetPath("/images/experiences/semi-submarine-detail.jpg"),
    tag: "Underwater",
    highlights: [
      "Panoramic underwater viewing windows",
      "WWII shipwreck sighting",
      "Climate-controlled cabin",
      "Expert marine guide narration",
    ],
  },
  {
    id: "rafting",
    title: "Cetina River Rafting",
    tagline: "Twelve kilometres through Dalmatia\u2019s wildest canyon",
    headline: "The Cetina Canyon, End to End",
    subheadline:
      "A 2.5-hour rafting descent through one of Croatia\u2019s most dramatic gorges \u2014 with rapids, cliff jumping, and two wild swimming stops in the Cetina\u2019s turquoise pools.",
    description:
      "Depart from the village of Slime, just outside Omi\u0161, and descend 12 km through the Cetina canyon \u2014 where waterfalls thread down ancient Dalmatian rock and the river alternates between whitewater and mirror-still pools. Professional guides and full equipment provided.",
    longDescription:
      "The Cetina canyon does not ease you in \u2014 it takes your breath away from the first stroke. Departing from the small village of Slime, nestled in the hills above Omi\u0161, you board a professional raft and begin a 12-kilometre descent through one of Croatia\u2019s most dramatic natural corridors. The Dalmatian canyon walls rise hundreds of metres above you, waterfalls thread down the rock face, and the river alternates between thrilling whitewater and mirror-still pools fed by underground springs. Along the way, your guide stops twice at designated spots where you can leap from cliffs into the turquoise Cetina water below, or simply float and take in the silence of a landscape that has looked this way for millennia. The entire adventure takes around two and a half hours, and every piece of equipment \u2014 helmet, life jacket, waterproof bag \u2014 is provided. Safe for children aged 3 and above, and unforgettable for everyone who visits this corner of Dalmatia.",
    duration: "~2.5 hours",
    difficulty: "Active",
    priceFrom: 45,
    currency: "EUR",
    pricing: [{ label: "Per person", price: "\u20ac45" }],
    benefits: [
      "12 km descent through the towering Cetina canyon with rapids and waterfalls",
      "Two dedicated stops for cliff jumping and wild swimming in canyon pools",
      "Professional guides and full equipment \u2014 safe for children 3+",
    ],
    ctaLabel: "Book Your Rafting Adventure",
    trustLine:
      "Rated the #1 outdoor activity in Omi\u0161. Over 2,000 rafters this season alone.",
    icon: Waves,
    gradient: "from-emerald-700/25 to-teal-800/20",
    image: assetPath("/images/experiences/rafting.jpg"),
    detailImage: assetPath("/images/experiences/rafting-detail.jpg"),
    tag: "Adventure",
    highlights: [
      "12 km canyon descent",
      "Cliff jumping and swimming stops",
      "Professional guides, full equipment",
      "Safe for children 3+",
    ],
  },
  {
    id: "night-ride",
    title: "Night Ride",
    tagline: "The Cetina canyon after dark",
    headline: "When the Canyon Glows at Night",
    subheadline:
      "An evening glass-bottom cruise through the Cetina gorge — illuminated waters, towering cliffs in silhouette, and a side of the canyon most visitors never see.",
    description:
      "As daylight fades over Omi\u0161, board our glass boat and slip into the Cetina canyon under the stars. The riverbed glows beneath the glass as limestone walls close in around you — a quiet, cinematic journey through Dalmatia after dark.",
    longDescription:
      "There is a different Cetina after sunset. The crowds fade, the canyon narrows, and the only light comes from the boat itself — casting the ancient riverbed in gold through the glass floor. Our Night Ride departs from the Omi\u0161 promenade on select evenings and follows the same magical corridor as our daytime glass boat tours, but the atmosphere is entirely its own: starlight above, illuminated water below, and the deep silence of a gorge that has watched over this river for millennia. Perfect for couples, photographers, and anyone who wants to see the Cetina in its most intimate hour. Life jackets provided, calm water throughout, and the same warm welcome from our local crew.",
    duration: "30\u201335 min ride",
    difficulty: "Easy",
    priceFrom: 25,
    currency: "EUR",
    pricing: [
      { label: "Adults", price: "\u20ac25" },
      { label: "Children 5\u201313", price: "\u20ac15" },
      { label: "Under 5", price: "Free" },
    ],
    benefits: [
      "Illuminated glass-bottom views of the Cetina after dark",
      "Evening cruise through the canyon in calm, starlit conditions",
      "A unique perspective on the gorge most day visitors miss",
    ],
    ctaLabel: "Book the Night Ride",
    trustLine:
      "Our most romantic tour on the Cetina. Guests call it the highlight of their stay in Omi\u0161.",
    icon: Moon,
    gradient: "from-indigo-900/25 to-teal-900/20",
    image: assetPath("/images/zvone/night-ride-hero.png"),
    detailImage: assetPath("/images/zvone/night-ride-hero.png"),
    tag: "Evening",
    highlights: [
      "Illuminated glass-bottom viewing",
      "Evening canyon atmosphere",
      "Calm water, all ages welcome",
      "30\u201335 minute scenic ride",
    ],
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((exp) => exp.id === slug);
}

export function getExperienceSlugs() {
  return experiences.map((exp) => exp.id);
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    image: assetPath("/images/zvone/canyon-bridge.jpg"),
    alt: "Cetina canyon with the Omi\u0161 bridge",
    caption: "The Cetina gorge near Omi\u0161, carved over millennia of Dalmatian weather, seen from the canyon rim at golden hour.",
    location: "Cetina Canyon, Omi\u0161",
    span: "hero",
  },
  {
    id: "g2",
    image: assetPath("/images/zvone/canyon-from-boat.jpg"),
    alt: "View from the boat through the Cetina canyon",
    caption: "Waters so clear the Cetina riverbed feels close enough to touch.",
    location: "Cetina River, Glass Boat Route",
    span: "tall",
  },
  {
    id: "g3",
    image: assetPath("/images/gallery/rafting-action.jpg"),
    alt: "Rafting through Cetina canyon",
    caption: "Twelve kilometres of Dalmatian canyon, two cliff jumps, and one unforgettable descent.",
    location: "Cetina Canyon Rafting",
    span: "normal",
  },
  {
    id: "g4",
    image: assetPath("/images/zvone/taxi-boat-guests-2.jpg"),
    alt: "Taxi boat guests on the Cetina",
    caption: "Past the Cetina river mouth, the Dalmatian coastline opens up into endless Adriatic blue.",
    location: "Cetina River, Taxi Boat",
    span: "wide",
  },
  {
    id: "g5",
    image: assetPath("/images/zvone/taxi-boat-guests-4.jpg"),
    alt: "Radmanove Mlinice taxi boat tour",
    caption: "When the sun drops behind Omi\u0161\u2019s medieval fortress, every boat ride becomes a private screening.",
    location: "Radmanove Mlinice, Cetina Canyon",
    span: "tall",
  },
  {
    id: "g6",
    image: assetPath("/images/zvone/night-ride-hero.png"),
    alt: "Illuminated glass boat on the Cetina at night",
    caption: "The glass bottom glows as the Cetina canyon closes in around you after dark.",
    location: "Cetina Canyon, Glass Boat",
    span: "normal",
  },
  {
    id: "g7",
    image: assetPath("/images/zvone/taxi-boat-guests-6.jpg"),
    alt: "Taxi boat to Radmanove Mlinice",
    caption: "Some Dalmatian beaches have no road. The only way in is by water from Omi\u0161.",
    location: "Cetina River, Taxi Boat",
    span: "normal",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie Mueller",
    country: "Germany",
    countryFlag: "\u{1F1E9}\u{1F1EA}",
    rating: 5,
    quote:
      "Absolutely magical experience! The glass boat ride through the Cetina canyon revealed an underwater world I never knew existed. The crew was professional and the views of the canyon walls from the water are breathtaking. Omi\u0161 is a gem.",
    date: "August 2025",
    experience: "Glass Boat",
  },
  {
    id: "t2",
    name: "James & Emily Carter",
    country: "United Kingdom",
    countryFlag: "\u{1F1EC}\u{1F1E7}",
    rating: 5,
    quote:
      "We rented a boat for the day from Omi\u0161 and explored hidden Dalmatian beaches along the coastline. The freedom to go wherever we wanted \u2014 upriver or out to the open sea \u2014 made it the highlight of our Croatian holiday.",
    date: "July 2025",
    experience: "Rent a Boat",
  },
  {
    id: "t3",
    name: "Marco Rossi",
    country: "Italy",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    rating: 5,
    quote:
      "The Cetina River rafting was an incredible adventure through one of the most beautiful canyons we\u2019ve ever seen. Perfect balance of thrills and stunning Dalmatian scenery. Our guide knew the canyon like the back of his hand.",
    date: "September 2025",
    experience: "Rafting",
  },
  {
    id: "t4",
    name: "Anna Johansson",
    country: "Sweden",
    countryFlag: "\u{1F1F8}\u{1F1EA}",
    rating: 5,
    quote:
      "Used the taxi boat to reach Radmanove Mlinice through the Cetina gorge \u2014 it felt like stepping back in time. The canyon ride alone was worth the trip to Omi\u0161. Will definitely return next summer!",
    date: "June 2025",
    experience: "Taxi Boat",
  },
  {
    id: "t5",
    name: "Pierre Dubois",
    country: "France",
    countryFlag: "\u{1F1EB}\u{1F1F7}",
    rating: 5,
    quote:
      "The semi-submarine off the Omi\u0161 coast was perfect for our family with young children. They were mesmerized by the fish swimming past the windows and the shipwreck. A must-do if you\u2019re visiting this part of Dalmatia!",
    date: "August 2025",
    experience: "Semi Submarine",
  },
];

export const stats = [
  { label: "Tours Completed", value: 1000, suffix: "+" },
  { label: "Years in Omi\u0161", value: 15, suffix: "+" },
  { label: "Guest Rating", value: 4.9, suffix: "", decimals: 1 },
  { label: "Happy Guests", value: 50000, suffix: "+" },
];

export const faqs: FaqItem[] = [
  {
    question: "Is the Glass Boat suitable for children?",
    answer:
      "Yes \u2014 it\u2019s one of the most popular family tours in Omi\u0161. There are no age restrictions, the ride through the Cetina canyon is smooth and calm, and children love watching fish through the glass bottom. Life jackets in all sizes are on board.",
  },
  {
    question: "Are pets allowed on board?",
    answer:
      "Absolutely. The Glass Boat through the Cetina canyon is fully pet-friendly \u2014 your dog is welcome aboard at no extra charge. We just ask that they stay calm around other guests.",
  },
  {
    question: "How long does each tour last?",
    answer:
      "Glass Boat: ~35 min ride through the Cetina canyon + stop at Radmanove Mlinice. Taxi Boat: 30 min each way through the gorge + 1 h break. Rent a Boat: 3 hours or full day exploring the river and coast. Semi Submarine: 1 hour off the Omi\u0161 coast. Rafting: approximately 2.5 hours through the Cetina canyon including two swimming stops.",
  },
  {
    question: "What\u2019s included in the price?",
    answer:
      "Everything you need. Boat tours include the ride through the canyon and any scheduled stops. Boat rentals include fuel, safety equipment, and a map of the Omi\u0161 riviera. Rafting includes a professional guide, helmet, life jacket, and waterproof bag. No hidden fees \u2014 the price on this site is the price you pay.",
  },
  {
    question: "Is rafting safe for beginners and young children?",
    answer:
      "It is. The Cetina canyon rafting route is graded for beginners and families, and professional guides who know every metre of the gorge are with you the entire way. Children aged 3 and above can join. We provide all safety equipment and give a full briefing before departure.",
  },
  {
    question: "Do I need experience to rent a boat?",
    answer:
      "None at all. Our rental boats on the Cetina River and Omi\u0161 coast require no license and no previous boating experience. We give you a brief orientation, hand you a map of the best spots along the riviera, and you\u2019re on your way.",
  },
  {
    question: "Where do the tours depart from?",
    answer:
      "Most tours leave from our information desk on the Cetina promenade in Omi\u0161 \u2014 right where the river meets the old town. You can\u2019t miss it. Rafting departs from the village of Slime, a short drive upriver from Omi\u0161. We send exact directions as soon as you book.",
  },
  {
    question: "How do I book, and can I cancel?",
    answer:
      "Book through the form on this page, by phone, or via WhatsApp \u2014 we respond within hours from Omi\u0161. No payment is required upfront. You can cancel or reschedule free of charge up to 24 hours before departure. During July and August, we recommend booking at least one day ahead.",
  },
];

export const navLinks = [
  { label: "About", href: "#omis" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
