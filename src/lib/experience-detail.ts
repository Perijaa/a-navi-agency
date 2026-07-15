import type { FaqItem } from "./data";
import { assetPath } from "./base-path";

export type ExperienceDetailExtras = {
  cardSummary: string;
  rating: number;
  reviewCount: number;
  overview: { icon: "clock" | "map-pin" | "users" | "euro" | "waves" | "life-buoy"; label: string }[];
  timeline: { title: string }[];
  included: string[];
  bring: string[];
  galleryImages: { src: string; alt: string; span?: "wide" | "tall" | "normal" }[];
  detailFaqs: FaqItem[];
  location: { meeting: string; finish: string; note: string };
  whyChoose: string[];
};

export const experienceDetailExtras: Record<string, ExperienceDetailExtras> = {
  "glass-boat": {
    cardSummary: "Watch the Cetina canyon come alive through glass-bottom views.",
    rating: 4.9,
    reviewCount: 420,
    overview: [
      { icon: "clock", label: "2 hours total" },
      { icon: "map-pin", label: "Omiš promenade" },
      { icon: "users", label: "Family friendly" },
      { icon: "euro", label: "From €15" },
      { icon: "waves", label: "Canyon cruise" },
      { icon: "life-buoy", label: "Life jackets included" },
    ],
    timeline: [
      { title: "Meet at the promenade" },
      { title: "Board the glass boat" },
      { title: "Cruise into the canyon" },
      { title: "Stop at Radmanove Mlinice" },
      { title: "Return to Omiš" },
    ],
    included: ["Glass-bottom boat ride", "Stop at Radmanove Mlinice", "Life jackets", "Pet-friendly welcome"],
    bring: ["Sunscreen", "Camera", "Light jacket", "Comfortable shoes"],
    galleryImages: [
      { src: assetPath("/images/zvone/20260416_115400_IMG_4384.jpg"), alt: "Glass boat cruise through the Cetina canyon", span: "wide" },
      { src: assetPath("/images/zvone/glass-boat-dock.jpg"), alt: "Glass boat at Omi\u0161 harbour", span: "normal" },
      { src: assetPath("/images/zvone/glass-boat-night-canyon.jpg"), alt: "Glass boat in the canyon at night", span: "tall" },
      { src: assetPath("/images/zvone/canyon-bridge.jpg"), alt: "Cetina canyon and Omi\u0161 bridge", span: "normal" },
    ],
    detailFaqs: [
      { question: "Is the Glass Boat suitable for children?", answer: "Yes — no age restrictions. The ride is calm and children love watching fish through the glass." },
      { question: "Are pets allowed?", answer: "Absolutely. Dogs are welcome aboard at no extra charge." },
      { question: "Where does the tour depart?", answer: "From our desk on the Cetina promenade in Omiš, where the river meets the old town." },
      { question: "What's included in the price?", answer: "The full canyon ride, stop at Radmanove Mlinice, and life jackets. No hidden fees." },
      { question: "Can I cancel my booking?", answer: "Free cancellation up to 24 hours before departure. No payment upfront required." },
    ],
    location: {
      meeting: "Cetina promenade, Omiš harbour",
      finish: "Same departure point",
      note: "Look for the A-Navi desk where the river meets the old town bridge.",
    },
    whyChoose: ["Omiš's most popular family tour", "Crystal canyon views without getting wet", "Pet-friendly — bring the whole family"],
  },
  "taxi-boat": {
    cardSummary: "Scenic canyon cruise to Radmanove Mlinice with time to explore.",
    rating: 4.9,
    reviewCount: 280,
    overview: [
      { icon: "clock", label: "2 hours total" },
      { icon: "map-pin", label: "Omiš promenade" },
      { icon: "users", label: "All ages" },
      { icon: "euro", label: "From €8" },
      { icon: "waves", label: "Swimming stop" },
      { icon: "life-buoy", label: "Life jackets included" },
    ],
    timeline: [
      { title: "Meet at the harbour" },
      { title: "30-min canyon cruise" },
      { title: "Arrive at Radmanove Mlinice" },
      { title: "Free time to swim & explore" },
      { title: "Scenic return to Omiš" },
    ],
    included: ["Round-trip boat transfer", "1 h at Radmanove Mlinice", "Life jackets", "Scenic canyon route"],
    bring: ["Swimwear", "Towel", "Sunscreen", "Water bottle"],
    galleryImages: [
      { src: assetPath("/images/zvone/taxi-boat-hero.jpg"), alt: "Taxi boat cruise through the Cetina gorge", span: "wide" },
      { src: assetPath("/images/zvone/taxi-boat-guests-2.jpg"), alt: "Radmanove Mlinice taxi boat tour", span: "normal" },
      { src: assetPath("/images/zvone/canyon-bridge.jpg"), alt: "Cetina canyon and Omi\u0161 bridge", span: "tall" },
      { src: assetPath("/images/zvone/taxi-boat-guests-6.jpg"), alt: "Taxi boat on the Cetina River", span: "normal" },
    ],
    detailFaqs: [
      { question: "How long is the stop at Radmanove Mlinice?", answer: "You have 1 hour to swim, explore the mill estate, or relax by the river." },
      { question: "Is this tour suitable for seniors?", answer: "Yes — it's our most relaxed tour with minimal walking and plenty of seating on board." },
      { question: "Where do we depart from?", answer: "The Cetina promenade in Omiš harbour, at our A-Navi desk." },
      { question: "Can we swim during the tour?", answer: "Yes, at Radmanove Mlinice there are natural swimming pools in the canyon." },
      { question: "What's the cancellation policy?", answer: "Free cancellation up to 24 hours before. No upfront payment required." },
    ],
    location: {
      meeting: "Cetina promenade, Omiš harbour",
      finish: "Same departure point",
      note: "30-minute scenic cruise each way through the Cetina gorge.",
    },
    whyChoose: ["Most relaxing way to reach the canyon", "Perfect for families and seniors", "Swim in natural canyon pools"],
  },
  "rent-a-boat": {
    cardSummary: "Chart your own course from the Cetina canyon to the Adriatic.",
    rating: 4.8,
    reviewCount: 190,
    overview: [
      { icon: "clock", label: "3 h – full day" },
      { icon: "map-pin", label: "Omiš harbour" },
      { icon: "users", label: "No license needed" },
      { icon: "euro", label: "From €50" },
      { icon: "waves", label: "River & sea" },
      { icon: "life-buoy", label: "Safety gear included" },
    ],
    timeline: [
      { title: "Briefing at the harbour" },
      { title: "Receive map & safety gear" },
      { title: "Set your own course" },
      { title: "Explore canyon or coast" },
      { title: "Return by agreed time" },
    ],
    included: ["Boat rental", "Fuel", "Safety equipment", "Coastal & river map", "Brief orientation"],
    bring: ["Sunscreen", "Swimwear", "Towel", "ID document", "Water & snacks"],
    galleryImages: [
      { src: assetPath("/images/zvone/rent-a-boat-hero.png"), alt: "Rent a boat on the Cetina near Omi\u0161", span: "wide" },
      { src: assetPath("/images/zvone/rent-boat-harbour.jpg"), alt: "A-Navi boats at Omi\u0161 harbour", span: "normal" },
      { src: assetPath("/images/gallery/taxi-boat-coast.jpg"), alt: "Adriatic coastline", span: "tall" },
      { src: assetPath("/images/gallery/canyon-aerial.jpg"), alt: "Aerial view of the coast", span: "normal" },
    ],
    detailFaqs: [
      { question: "Do I need a boat license?", answer: "No license required. We provide a full briefing and coastal map before you depart." },
      { question: "What's included in the rental?", answer: "Boat, fuel, safety gear, and a map of the best spots along the Omiš riviera." },
      { question: "Can I go upstream into the canyon?", answer: "Yes — many guests explore the Cetina upstream toward Radmanove Mlinice." },
      { question: "How long can I rent for?", answer: "Choose 3 hours or a full day. Return by the agreed time at Omiš harbour." },
      { question: "Is fuel included?", answer: "Yes, fuel is included for standard routes. Extended trips may incur a small surcharge." },
    ],
    location: {
      meeting: "Omiš harbour, Cetina promenade",
      finish: "Same harbour",
      note: "Explore upstream on the Cetina or out to hidden Adriatic beaches.",
    },
    whyChoose: ["Total freedom on the water", "No license needed", "Reach beaches no road can access"],
  },
  "semi-submarine": {
    cardSummary: "Descend below the Adriatic and watch marine life through panoramic windows.",
    rating: 4.9,
    reviewCount: 310,
    overview: [
      { icon: "clock", label: "30 min tour" },
      { icon: "map-pin", label: "Omiš coast" },
      { icon: "users", label: "Family favourite" },
      { icon: "euro", label: "From €14" },
      { icon: "waves", label: "Underwater views" },
      { icon: "life-buoy", label: "Climate controlled" },
    ],
    timeline: [
      { title: "Board at the harbour" },
      { title: "Descend below waterline" },
      { title: "Marine life viewing" },
      { title: "WWII wreck sighting" },
      { title: "Return to surface" },
    ],
    included: ["30-minute semi-submarine ride", "Expert marine guide", "Climate-controlled cabin", "Panoramic windows"],
    bring: ["Camera", "Light layer", "Comfortable shoes", "Sea-sickness remedy if needed"],
    galleryImages: [
      { src: assetPath("/images/semi-submarine/semi-submarine-1.jpg"), alt: "Semi submarine at the harbour", span: "wide" },
      { src: assetPath("/images/semi-submarine/semi-submarine-3.jpg"), alt: "Underwater viewing cabin", span: "normal" },
      { src: assetPath("/images/semi-submarine/semi-submarine-5.jpg"), alt: "Marine life through the windows", span: "tall" },
      { src: assetPath("/images/semi-submarine/semi-submarine-7.jpg"), alt: "Adriatic underwater views", span: "normal" },
    ],
    detailFaqs: [
      { question: "Is it safe for young children?", answer: "Yes — the cabin is climate-controlled and captivates children of all ages." },
      { question: "Will I get seasick?", answer: "The vessel stays close to shore in calm waters. Most guests feel perfectly comfortable." },
      { question: "What will we see underwater?", answer: "Fish, marine flora, and a WWII shipwreck — narrated by our expert guide." },
      { question: "Where does it depart?", answer: "From the Omiš harbour, a short walk from the old town." },
      { question: "Can I cancel my booking?", answer: "Free cancellation up to 24 hours before departure." },
    ],
    location: {
      meeting: "Omiš harbour",
      finish: "Same harbour",
      note: "The route follows the Omiš coastline with underwater viewing windows.",
    },
    whyChoose: ["Unique underwater experience", "Perfect for families with kids", "Expert narration throughout"],
  },
  rafting: {
    cardSummary: "The ultimate Cetina adventure through Croatia's wildest canyon.",
    rating: 4.9,
    reviewCount: 520,
    overview: [
      { icon: "clock", label: "4 hours total" },
      { icon: "map-pin", label: "Slime, near Omiš" },
      { icon: "users", label: "Ages 3+" },
      { icon: "euro", label: "From €35" },
      { icon: "waves", label: "Swimming stops" },
      { icon: "life-buoy", label: "Equipment included" },
    ],
    timeline: [
      { title: "Meet your guide" },
      { title: "Equipment briefing" },
      { title: "Transfer to start point" },
      { title: "12 km canyon descent" },
      { title: "Swimming & cliff jumps" },
      { title: "Finish at take-out point" },
    ],
    included: ["Professional guide", "Raft & paddles", "Helmet & life jacket", "Waterproof bag", "Insurance"],
    bring: ["Swimwear", "Towel", "Water shoes", "Change of clothes", "Water"],
    galleryImages: [
      { src: assetPath("/images/experiences/rafting-detail.jpg"), alt: "Rafting the Cetina", span: "wide" },
      { src: assetPath("/images/gallery/rafting-action.jpg"), alt: "Rafting through canyon", span: "normal" },
      { src: assetPath("/images/omis/canyon.jpg"), alt: "Cetina canyon", span: "tall" },
      { src: assetPath("/images/omis/crew-rafting.jpg"), alt: "Rafting crew on the river", span: "normal" },
    ],
    detailFaqs: [
      { question: "Is rafting safe for beginners?", answer: "Yes — the route is graded for beginners and families with professional guides throughout." },
      { question: "Can children join?", answer: "Children aged 3 and above can participate. We provide all safety equipment in child sizes." },
      { question: "Where do we meet?", answer: "In the village of Slime, a short drive from Omiš. Exact directions sent after booking." },
      { question: "What's included?", answer: "Guide, raft, helmet, life jacket, waterproof bag, and insurance. Just bring swimwear." },
      { question: "Are cliff jumps optional?", answer: "Completely optional. You can swim, float, or watch — whatever you're comfortable with." },
    ],
    location: {
      meeting: "Village of Slime, near Omiš",
      finish: "Cetina take-out point",
      note: "12 km descent through the Cetina canyon with two swimming stops.",
    },
    whyChoose: ["#1 outdoor activity in Omiš", "12 km of dramatic canyon", "Cliff jumps & wild swimming"],
  },
  "night-ride": {
    cardSummary: "An illuminated evening cruise through the Cetina canyon after dark.",
    rating: 4.9,
    reviewCount: 165,
    overview: [
      { icon: "clock", label: "2 hours total" },
      { icon: "map-pin", label: "Omiš promenade" },
      { icon: "users", label: "Couples & families" },
      { icon: "euro", label: "From €12" },
      { icon: "waves", label: "Evening cruise" },
      { icon: "life-buoy", label: "Life jackets included" },
    ],
    timeline: [
      { title: "Meet at the harbour" },
      { title: "Board the glass boat" },
      { title: "Enter the canyon at dusk" },
      { title: "Illuminated riverbed viewing" },
      { title: "Return to Omiš" },
    ],
    included: ["Glass-bottom night ride", "Illuminated viewing deck", "Life jackets", "Local crew"],
    bring: ["Light jacket", "Camera", "Comfortable shoes"],
    galleryImages: [
      { src: assetPath("/images/zvone/night-ride-hero.png"), alt: "Illuminated glass boat on the Cetina at night", span: "wide" },
      { src: assetPath("/images/zvone/glass-boat-dock.jpg"), alt: "Glass boat at Omiš harbour", span: "normal" },
      { src: assetPath("/images/zvone/canyon-from-boat.jpg"), alt: "Cetina canyon by day", span: "tall" },
      { src: assetPath("/images/zvone/canyon-bridge.jpg"), alt: "Cetina gorge", span: "normal" },
    ],
    detailFaqs: [
      { question: "When does the Night Ride depart?", answer: "On select evenings from the Cetina promenade — contact us for the current schedule." },
      { question: "Is it suitable for children?", answer: "Yes — the ride is calm and the illuminated glass floor fascinates guests of all ages." },
      { question: "How is it different from the Glass Boat?", answer: "Same route through the canyon, but after dark with underwater lighting and a quieter, more atmospheric experience." },
      { question: "What should I wear?", answer: "Evenings can be cooler on the water — bring a light layer. Comfortable shoes recommended." },
      { question: "Can I cancel my booking?", answer: "Free cancellation up to 24 hours before departure." },
    ],
    location: {
      meeting: "Cetina promenade, Omiš harbour",
      finish: "Same departure point",
      note: "Start 20:40 — evening departures, exact time confirmed when you book.",
    },
    whyChoose: ["See the canyon in a different light", "Perfect for couples", "Unique illuminated glass-bottom views"],
  },
};

export function getExperienceDetail(slug: string) {
  return experienceDetailExtras[slug];
}
