const platforms = [
  { name: "Tripadvisor", abbr: "TA" },
  { name: "Google", abbr: "G" },
  { name: "GetYourGuide", abbr: "GYG" },
  { name: "Viator", abbr: "V" },
  { name: "Booking.com", abbr: "B" },
] as const;

export function FeaturedIn() {
  return (
    <section
      className="border-b border-stone-200 bg-cream-dark"
      data-mobile-bar-surface="light"
      aria-label="Featured on travel platforms"
    >
      <div className="aw-container featured-in__inner">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
          Featured on
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
          {platforms.map((p) => (
            <li key={p.name}>
              <span className="featured-in__logo" aria-label={p.name}>
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
