"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  CalendarDays,
  Users,
  Compass,
  Ship,
  Glasses,
  Anchor,
  Waves,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data";

const quickPickExperiences = [
  { id: "glass-boat", label: "Glass Boat Tour", icon: Ship },
  { id: "semi-submarine", label: "Semi Submarine", icon: Glasses },
  { id: "rent-a-boat", label: "Rent a Boat", icon: Anchor },
  { id: "rafting", label: "River Rafting", icon: Waves },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);

  const [selectedExperience, setSelectedExperience] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* ── Video background with parallax ── */}
      <motion.div
        className="absolute inset-0 origin-center"
        style={{ y: bgY, scale: bgScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster=""
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic overlays */}
        <motion.div
          className="absolute inset-0 bg-navy-950"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/40" />

        {/* Subtle film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>

      {/* ── Ambient light effects ── */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-turquoise-400/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-blue-400/[0.03] blur-[100px]" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-28 lg:px-8">
        {/* Center — Headline block */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="flex flex-1 flex-col items-center justify-center text-center"
        >
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turquoise-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-turquoise-400" />
            </span>
            <span className="text-sm font-medium tracking-wide text-white/70">
              Season 2026 — Now Booking
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-5xl font-serif text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            Discover Cetina{" "}
            <br className="hidden sm:block" />
            <span className="relative">
              <span className="bg-gradient-to-r from-turquoise-300 via-turquoise-400 to-cyan-300 bg-clip-text text-transparent">
                Like Never Before
              </span>
              {/* Underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-turquoise-400 to-transparent"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
          >
            Five ways to experience the Adriatic coast and Cetina River
            canyon&nbsp;&mdash; all from the heart of Omi&scaron;.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Book Your Adventure
            </Button>
            <Button variant="ghost" size="lg" href="#experiences">
              <Compass className="mr-2 h-4 w-4" />
              Explore Experiences
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Bottom — Glassmorphism booking card (desktop only) ── */}
        <motion.div
          style={{ opacity: cardOpacity, y: cardY }}
          className="mx-auto hidden w-full max-w-4xl lg:block"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 sm:px-6">
              <div className="grid items-end gap-4 sm:grid-cols-4">
                {/* Experience picker */}
                <div className="sm:col-span-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/40">
                    <Compass className="h-3 w-3" />
                    Experience
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm text-white backdrop-blur-sm transition-colors focus:border-turquoise-400/40 focus:outline-none [&>option]:bg-navy-900"
                  >
                    <option value="">All experiences</option>
                    {experiences.map((exp) => (
                      <option key={exp.id} value={exp.id}>
                        {exp.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date picker */}
                <div className="sm:col-span-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/40">
                    <CalendarDays className="h-3 w-3" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm text-white backdrop-blur-sm transition-colors focus:border-turquoise-400/40 focus:outline-none"
                  />
                </div>

                {/* Guests */}
                <div className="sm:col-span-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/40">
                    <Users className="h-3 w-3" />
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm text-white backdrop-blur-sm transition-colors focus:border-turquoise-400/40 focus:outline-none [&>option]:bg-navy-900"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search CTA */}
                <div className="sm:col-span-1">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-turquoise-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all hover:bg-turquoise-400 hover:shadow-turquoise-400/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Check Availability
                  </a>
                </div>
              </div>

              {/* Quick pick pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="text-xs text-white/30">Popular:</span>
                {quickPickExperiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                      selectedExperience === exp.id
                        ? "border-turquoise-400/40 bg-turquoise-500/15 text-turquoise-300"
                        : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/70"
                    }`}
                  >
                    <exp.icon className="h-3 w-3" />
                    {exp.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.a
          href="#experiences"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Scroll to explore
            </span>
            <ChevronDown className="h-4 w-4 text-white/25" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
