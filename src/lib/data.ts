import {
  Ship,
  Anchor,
  Glasses,
  Navigation,
  Waves,
  type LucideIcon,
} from "lucide-react";

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
  span: "tall" | "wide" | "normal";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const experiences: Experience[] = [
  {
    id: "glass-boat",
    title: "Glass Boat",
    tagline: "See beneath the surface",
    headline: "A Window to the World Below",
    subheadline:
      "Drift through the Cetina canyon on a glass-bottom boat and watch the riverbed come alive beneath your feet.",
    description:
      "Glide through the dramatic Cetina canyon aboard our glass-bottom boat. Watch fish dart beneath your feet, marvel at the ancient riverbed, and arrive at the legendary Radmanove Mlinice for an unforgettable stop.",
    longDescription:
      "There is something quietly extraordinary about watching a river reveal its secrets through glass. As your boat slips into the Cetina canyon, towering limestone walls rise around you and the water beneath turns crystalline. Schools of fish trace silver lines across the riverbed. Pebbles shimmer in the shifting light. The 30\u201335 minute ride carries you deep into the canyon, ending at Radmanove Mlinice \u2014 a centuries-old mill estate hidden in the heart of the gorge. This is an experience designed for everyone: families with small children, couples seeking a quiet afternoon, and even your four-legged companions. No restrictions, no rush \u2014 just pure, unhurried beauty.",
    duration: "30\u201335 min ride",
    priceFrom: 20,
    currency: "EUR",
    pricing: [
      { label: "Adults", price: "\u20ac20" },
      { label: "Children 5\u201313", price: "\u20ac10" },
      { label: "Under 5", price: "Free" },
    ],
    benefits: [
      "Glass-bottom views of fish and the ancient riverbed throughout the journey",
      "Scenic stop at Radmanove Mlinice, a hidden canyon estate",
      "Fully family-friendly and pet-friendly \u2014 no age restrictions",
    ],
    ctaLabel: "Reserve Your Glass Boat",
    trustLine:
      "Over 800 five-star reviews. Loved by families from 40+ countries.",
    icon: Ship,
    gradient: "from-cyan-500/30 to-blue-600/30",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
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
    tagline: "The scenic route, redefined",
    headline: "Your Private Passage Through the Canyon",
    subheadline:
      "A 30-minute scenic cruise through the Cetina gorge, followed by a leisurely break at the enchanting Radmanove Mlinice.",
    description:
      "A scenic 30-minute cruise through the Cetina canyon, delivering you to the storied Radmanove Mlinice for a 1.5-hour break in one of Dalmatia\u2019s most magical settings.",
    longDescription:
      "Some journeys are destinations in themselves. Our taxi boat carves a gentle path through the Cetina River canyon, where sheer rock faces plunge into emerald water and the air smells of wild sage and pine. After 30 minutes of cinematic scenery, you arrive at Radmanove Mlinice \u2014 a nature-park retreat built around 17th-century stone mills, where the river pools into natural swimming holes beneath ancient trees. You\u2019ll have a full hour and a half to explore, swim, or simply sit with a coffee at the water\u2019s edge. When you\u2019re ready, the boat takes you home the same breathtaking way you came. Perfect for every age and every pace.",
    duration: "2 hours total",
    priceFrom: 15,
    currency: "EUR",
    pricing: [
      { label: "Adults", price: "\u20ac15" },
      { label: "Children 5\u201313", price: "\u20ac10" },
      { label: "Under 5", price: "Free" },
    ],
    benefits: [
      "30-minute scenic cruise through the towering Cetina canyon",
      "1.5-hour leisure break at the historic Radmanove Mlinice estate",
      "A nature-park atmosphere perfect for all ages and group sizes",
    ],
    ctaLabel: "Book the Canyon Cruise",
    trustLine:
      "The most relaxing way to reach Radmanove Mlinice. Guests return year after year.",
    icon: Navigation,
    gradient: "from-sky-500/30 to-cyan-600/30",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    tag: "Scenic",
    highlights: [
      "30-minute scenic canyon cruise",
      "1.5-hour stop at Radmanove Mlinice",
      "Nature-park atmosphere",
      "Suitable for all ages",
    ],
  },
  {
    id: "rent-a-boat",
    title: "Rent a Boat",
    tagline: "Captain your own adventure",
    headline: "The River Is Yours",
    subheadline:
      "Take the helm of your own boat and explore the Cetina canyon, hidden beaches, and the open sea at your own pace.",
    description:
      "No captain, no schedule, no boundaries. Rent a self-drive boat and chart your own course through the Cetina canyon, upstream to Radmanove Mlinice, or out to the open Adriatic and its secluded coastal beaches.",
    longDescription:
      "Freedom on the water feels different. With the engine humming softly and the canyon opening ahead, every turn becomes your decision. Head upstream through the Cetina gorge toward the quiet pools near Radmanove Mlinice, where you can tie up and swim in water so clear it barely looks real. Or turn the other way \u2014 out past the river mouth and along the Adriatic coastline, discovering secluded pebble beaches that no road can reach. Our boats require no license, and come with everything you need: fuel, safety gear, and a simple map of the best spots. Whether you choose a 3-hour escape or a full day on the water, the pace is entirely yours.",
    duration: "3 hours \u2013 full day",
    priceFrom: 70,
    currency: "EUR",
    pricing: [
      { label: "3 hours", price: "\u20ac70" },
      { label: "Full day", price: "\u20ac130" },
    ],
    benefits: [
      "No license needed \u2014 fuel, safety gear, and maps included",
      "Explore upstream to Radmanove Mlinice or out to the open sea",
      "Discover hidden Adriatic beaches only reachable by water",
    ],
    ctaLabel: "Reserve Your Boat",
    trustLine:
      "Our most popular choice for couples and families seeking independence on the water.",
    icon: Anchor,
    gradient: "from-teal-500/30 to-emerald-600/30",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200&q=80",
    tag: "Freedom",
    highlights: [
      "No boat license required",
      "Fuel and safety equipment included",
      "Reach hidden coastal beaches",
      "Flexible 3-hour or full-day rentals",
    ],
  },
  {
    id: "semi-submarine",
    title: "Semi Submarine",
    tagline: "Dive without getting wet",
    headline: "Descend Into the Adriatic",
    subheadline:
      "Step below the waterline and witness marine life and a WWII shipwreck through panoramic underwater windows.",
    description:
      "A world-class underwater viewing experience. Descend below the Adriatic\u2019s surface in our semi-submarine and come face-to-face with marine life and the haunting silhouette of a Second World War shipwreck.",
    longDescription:
      "The moment you descend the stairs and the waterline rises above the windows, everything changes. Suddenly you are inside the Adriatic \u2014 not on it. Shoals of bream and mullet drift past the panoramic glass, sea urchins cling to the rocky bottom, and then, emerging from the blue-green haze, the unmistakable outline of a World War II shipwreck appears. Our expert marine guide narrates every moment, turning the voyage into a living documentary. The cabin is climate-controlled and perfectly comfortable, making this an experience that captivates children and adults alike. For families, it\u2019s pure magic \u2014 the kind of wonder that stays with your kids long after the holiday ends.",
    duration: "1 hour",
    priceFrom: 20,
    currency: "EUR",
    pricing: [{ label: "Per person", price: "From \u20ac20" }],
    benefits: [
      "Panoramic underwater windows with views of fish, flora, and a WWII wreck",
      "Climate-controlled cabin with expert marine guide narration",
      "A one-of-a-kind family experience \u2014 children are mesmerized",
    ],
    ctaLabel: "Book the Semi Submarine",
    trustLine:
      "The experience children talk about for years. Rated unforgettable by 97% of guests.",
    icon: Glasses,
    gradient: "from-indigo-500/30 to-purple-600/30",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&q=80",
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
    tagline: "Where adrenaline meets nature",
    headline: "Twelve Kilometres of Pure Canyon",
    subheadline:
      "A 2.5-hour rafting descent through the Cetina gorge \u2014 with rapids, cliff jumping, and two wild swimming stops along the way.",
    description:
      "Depart from the village of Slime and descend 12 km through the Cetina canyon. Navigate rapids, leap from cliffs, and swim in canyon pools \u2014 all with professional guides and full equipment provided.",
    longDescription:
      "The Cetina canyon does not ease you in \u2014 it takes your breath away from the first stroke. Departing from the small village of Slime, just outside Omi\u0161, you board a professional raft and begin a 12-kilometre descent through one of Croatia\u2019s most dramatic natural corridors. The canyon walls rise hundreds of metres above you, waterfalls thread down the rock face, and the river alternates between thrilling whitewater and mirror-still pools. Along the way, your guide stops twice at designated spots where you can leap from cliffs into the turquoise water below, or simply float and take in the silence. The entire adventure takes around two and a half hours, and every piece of equipment \u2014 helmet, life jacket, waterproof bag \u2014 is provided. Safe for children aged 3 and above, and unforgettable for everyone.",
    duration: "~2.5 hours",
    priceFrom: 45,
    currency: "EUR",
    pricing: [{ label: "Per person", price: "\u20ac45" }],
    benefits: [
      "12 km descent through a towering canyon with rapids and waterfalls",
      "Two dedicated stops for cliff jumping and wild swimming",
      "Professional guides and full equipment \u2014 safe for children 3+",
    ],
    ctaLabel: "Book Your Rafting Adventure",
    trustLine:
      "Rated the #1 outdoor activity in Omi\u0161. Over 2,000 rafters this season alone.",
    icon: Waves,
    gradient: "from-emerald-500/30 to-teal-600/30",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c83be0e81?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80",
    tag: "Adventure",
    highlights: [
      "12 km canyon descent",
      "Cliff jumping and swimming stops",
      "Professional guides, full equipment",
      "Safe for children 3+",
    ],
  },
];

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80",
    alt: "Cetina River canyon from above",
    span: "tall",
  },
  {
    id: "g2",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    alt: "Crystal clear waters of the Adriatic",
    span: "normal",
  },
  {
    id: "g3",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    alt: "Rafting through Cetina canyon",
    span: "normal",
  },
  {
    id: "g4",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Boat on the Adriatic sea",
    span: "wide",
  },
  {
    id: "g5",
    image:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    alt: "Sunset over Dalmatian coast",
    span: "tall",
  },
  {
    id: "g6",
    image:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
    alt: "Underwater marine life",
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
      "Absolutely magical experience! The glass boat tour revealed an underwater world I never knew existed. The crew was professional and the views of Omi\u0161 from the water are breathtaking.",
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
      "We rented a boat for the day and explored hidden beaches along the coast. The freedom to go wherever we wanted made it the highlight of our Croatian holiday.",
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
      "The Cetina River rafting was an incredible adventure. Perfect balance of thrills and stunning natural beauty. Our guide was knowledgeable and made us feel completely safe.",
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
      "Used the taxi boat to reach Radmanove Mlinice \u2014 it felt like stepping back in time. The canyon ride alone was worth it. Will definitely return next summer!",
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
      "The semi-submarine was perfect for our family with young children. They were mesmerized by the fish swimming past the windows. A must-do in Omi\u0161!",
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
      "Yes \u2014 it\u2019s one of our most popular family tours. There are no age restrictions, the ride is smooth and calm, and children love watching fish through the glass bottom. Life jackets in all sizes are on board.",
  },
  {
    question: "Are pets allowed on board?",
    answer:
      "Absolutely. The Glass Boat is fully pet-friendly \u2014 your dog is welcome aboard at no extra charge. We just ask that they stay calm around other guests.",
  },
  {
    question: "How long does each tour last?",
    answer:
      "Glass Boat: ~35 min ride + stop at Radmanove Mlinice. Taxi Boat: 30 min each way + 1.5 h break. Rent a Boat: 3 hours or full day. Semi Submarine: 1 hour. Rafting: approximately 2.5 hours including two swimming stops.",
  },
  {
    question: "What\u2019s included in the price?",
    answer:
      "Everything you need. Boat tours include the ride and any scheduled stops. Boat rentals include fuel, safety equipment, and a navigation map. Rafting includes a professional guide, helmet, life jacket, and waterproof bag. No hidden fees \u2014 the price on this site is the price you pay.",
  },
  {
    question: "Is rafting safe for beginners and young children?",
    answer:
      "It is. Our Cetina rafting route is graded for beginners and families, and professional guides are with you the entire way. Children aged 3 and above can join. We provide all safety equipment and give a full briefing before departure.",
  },
  {
    question: "Do I need experience to rent a boat?",
    answer:
      "None at all. Our rental boats on the Cetina River require no license and no previous boating experience. We give you a brief orientation, hand you a map of the best spots, and you\u2019re on your way.",
  },
  {
    question: "Where do the tours depart from?",
    answer:
      "Most tours leave from our information desk on the right side of the Cetina promenade in Omi\u0161 \u2014 you can\u2019t miss it. Rafting departs from the village of Slime, a short drive from town. We send directions as soon as you book.",
  },
  {
    question: "How do I book, and can I cancel?",
    answer:
      "Book through the form on this page, by phone, or via WhatsApp \u2014 we respond within hours. No payment is required upfront. You can cancel or reschedule free of charge up to 24 hours before departure. During July and August, we recommend booking at least one day ahead.",
  },
];

export const navLinks = [
  { label: "Tours", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
