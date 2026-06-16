"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Clock, ArrowRight, Star, Shield, Play } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionPanel } from "@/components/ui/section-panel";

const experienceVideos: Record<string, string> = {
  "glass-boat":
    "https://videos.pexels.com/video-files/854669/854669-hd_1920_1080_25fps.mp4",
  "taxi-boat":
    "https://videos.pexels.com/video-files/856207/856207-hd_1920_1080_25fps.mp4",
  "rent-a-boat":
    "https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4",
  "semi-submarine":
    "https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4",
  rafting:
    "https://videos.pexels.com/video-files/2330337/2330337-hd_1920_1080_24fps.mp4",
};

const themes: Record<
  string,
  {
    accentText: string;
    accentTagline: string;
    checkBg: string;
    checkRing: string;
    checkIcon: string;
    ctaBg: string;
    ctaHover: string;
    ctaShadow: string;
    shieldColor: string;
    clockColor: string;
    glowColor: string;
    tagBg: string;
    tagBorder: string;
    tagText: string;
  }
> = {
  "glass-boat": {
    accentText: "text-cyan-400",
    accentTagline: "text-cyan-400/80",
    checkBg: "bg-cyan-500/15",
    checkRing: "ring-cyan-400/20",
    checkIcon: "text-cyan-400",
    ctaBg: "bg-cyan-400",
    ctaHover: "hover:bg-cyan-300 hover:shadow-cyan-300/30",
    ctaShadow: "shadow-cyan-500/20",
    shieldColor: "text-cyan-400/50",
    clockColor: "text-cyan-400",
    glowColor: "bg-cyan-500/[0.025]",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-400/20",
    tagText: "text-cyan-300",
  },
  "taxi-boat": {
    accentText: "text-amber-400",
    accentTagline: "text-amber-400/80",
    checkBg: "bg-amber-500/15",
    checkRing: "ring-amber-400/20",
    checkIcon: "text-amber-400",
    ctaBg: "bg-amber-400",
    ctaHover: "hover:bg-amber-300 hover:shadow-amber-300/30",
    ctaShadow: "shadow-amber-500/20",
    shieldColor: "text-amber-400/50",
    clockColor: "text-amber-400",
    glowColor: "bg-amber-400/[0.02]",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-400/20",
    tagText: "text-amber-300",
  },
  "rent-a-boat": {
    accentText: "text-emerald-400",
    accentTagline: "text-emerald-400/80",
    checkBg: "bg-emerald-500/15",
    checkRing: "ring-emerald-400/20",
    checkIcon: "text-emerald-400",
    ctaBg: "bg-emerald-400",
    ctaHover: "hover:bg-emerald-300 hover:shadow-emerald-300/30",
    ctaShadow: "shadow-emerald-500/20",
    shieldColor: "text-emerald-400/50",
    clockColor: "text-emerald-400",
    glowColor: "bg-emerald-400/[0.02]",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-400/20",
    tagText: "text-emerald-300",
  },
  "semi-submarine": {
    accentText: "text-violet-400",
    accentTagline: "text-violet-400/80",
    checkBg: "bg-violet-500/15",
    checkRing: "ring-violet-400/20",
    checkIcon: "text-violet-400",
    ctaBg: "bg-violet-400",
    ctaHover: "hover:bg-violet-300 hover:shadow-violet-300/30",
    ctaShadow: "shadow-violet-500/20",
    shieldColor: "text-violet-400/50",
    clockColor: "text-violet-400",
    glowColor: "bg-violet-500/[0.03]",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-400/20",
    tagText: "text-violet-300",
  },
  rafting: {
    accentText: "text-lime-400",
    accentTagline: "text-lime-400/80",
    checkBg: "bg-lime-500/15",
    checkRing: "ring-lime-400/20",
    checkIcon: "text-lime-400",
    ctaBg: "bg-lime-400",
    ctaHover: "hover:bg-lime-300 hover:shadow-lime-300/30",
    ctaShadow: "shadow-lime-500/20",
    shieldColor: "text-lime-400/50",
    clockColor: "text-lime-400",
    glowColor: "bg-lime-400/[0.02]",
    tagBg: "bg-lime-500/10",
    tagBorder: "border-lime-400/20",
    tagText: "text-lime-300",
  },
};

type Exp = (typeof experiences)[0];

function TrustLine({ experience, theme }: { experience: Exp; theme: (typeof themes)[string] }) {
  return (
    <div className="mt-5 flex items-center gap-2 text-[13px] text-white/45">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="h-3 w-3 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <span className="mx-1 text-white/25">|</span>
      <Shield className={`h-3 w-3 ${theme.shieldColor}`} />
      <span>{experience.trustLine}</span>
    </div>
  );
}

function BenefitsList({ experience, theme }: { experience: Exp; theme: (typeof themes)[string] }) {
  return (
    <ul className="space-y-3">
      {experience.benefits.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <div
            className={`mt-[5px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.checkBg} ring-1 ${theme.checkRing}`}
          >
            <Check className={`h-3 w-3 ${theme.checkIcon}`} />
          </div>
          <span className="text-[15px] leading-relaxed text-white/65">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function CtaRow({ experience, theme }: { experience: Exp; theme: (typeof themes)[string] }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <a
        href="#contact"
        className={`group/cta inline-flex items-center gap-2.5 rounded-full ${theme.ctaBg} px-7 py-3.5 text-[15px] font-semibold text-navy-950 shadow-lg ${theme.ctaShadow} transition-all duration-300 ${theme.ctaHover} hover:scale-[1.03] active:scale-[0.98]`}
      >
        {experience.ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
      </a>
      <span className="text-sm font-semibold text-white">
        {experience.pricing[0].price}
        <span className="ml-1 font-normal text-white/50">
          / {experience.pricing[0].label.toLowerCase()}
        </span>
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   LAYOUT 1: Editorial Split — image left, content right
   Used for: Glass Boat (index 0)
───────────────────────────────────────────────── */
function LayoutSplit({ experience }: { experience: Exp }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const theme = themes[experience.id];

  return (
    <div ref={ref} className="relative" id={experience.id}>
      <div className={`pointer-events-none absolute top-1/2 -translate-y-1/2 -left-40 h-[600px] w-[600px] rounded-full ${theme.glowColor} blur-[180px]`} />

      <div className="relative w-full px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div style={{ y: imageY }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl"
            >
              <div className="aspect-[4/3] relative">
                <Image src={experience.detailImage} alt={experience.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] lg:rounded-3xl" />
              </div>
              <div className="absolute top-5 left-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.tagBorder} ${theme.tagBg} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${theme.tagText} backdrop-blur-md`}>{experience.tag}</span>
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-950/60 px-3.5 py-1.5 backdrop-blur-md">
                <Clock className={`h-3.5 w-3.5 ${theme.clockColor}`} />
                <span className="text-xs font-medium text-white">{experience.duration}</span>
              </div>
            </motion.div>

            {experienceVideos[experience.id] && (
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: 0.3 }} className="absolute -bottom-8 -right-6 z-20 hidden lg:block">
                <div className="relative w-[200px] overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/40">
                  <div className="aspect-video relative">
                    <video autoPlay muted loop playsInline poster={experience.detailImage} className="h-full w-full object-cover"><source src={experienceVideos[experience.id]} type="video/mp4" /></video>
                    <div className="absolute inset-0 bg-navy-950/20" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 backdrop-blur-md">
                      <Play className="h-2.5 w-2.5 fill-white text-white" />
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">Preview</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <experience.icon className={`h-5 w-5 ${theme.accentText}`} />
              </div>
              <span className={`text-[13px] font-medium uppercase tracking-[0.15em] ${theme.accentTagline}`}>{experience.tagline}</span>
            </div>
            <h3 className="mt-6 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white lg:text-4xl xl:text-[2.75rem]">{experience.headline}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-[17px]">{experience.subheadline}</p>
            <div className="mt-8"><BenefitsList experience={experience} theme={theme} /></div>
            <div className="mt-8"><CtaRow experience={experience} theme={theme} /></div>
            <TrustLine experience={experience} theme={theme} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   LAYOUT 2: Compact Card — horizontal, minimal
   Used for: Taxi Boat (index 1)
───────────────────────────────────────────────── */
function LayoutCompact({ experience }: { experience: Exp }) {
  const theme = themes[experience.id];

  return (
    <div className="relative" id={experience.id}>
      <div className={`pointer-events-none absolute top-1/2 -translate-y-1/2 -right-40 h-[500px] w-[500px] rounded-full ${theme.glowColor} blur-[180px]`} />

      <div className="relative w-full px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] lg:rounded-3xl"
        >
          <div className="grid lg:grid-cols-5">
            {/* Image — 2 cols */}
            <div className="relative h-72 lg:col-span-2 lg:h-auto">
              <Image src={experience.detailImage} alt={experience.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f1628]" />
              <div className="absolute top-5 left-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.tagBorder} ${theme.tagBg} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${theme.tagText} backdrop-blur-md`}>{experience.tag}</span>
              </div>
            </div>

            {/* Content — 3 cols */}
            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
              <div className="flex items-center gap-3">
                <experience.icon className={`h-5 w-5 ${theme.accentText}`} />
                <span className={`text-[13px] font-medium uppercase tracking-[0.15em] ${theme.accentTagline}`}>{experience.tagline}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold leading-[1.1] tracking-tight text-white lg:text-3xl">{experience.headline}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">{experience.subheadline}</p>

              {/* Inline benefits — horizontal on desktop */}
              <div className="mt-6 flex flex-wrap gap-3">
                {experience.benefits.map((b) => (
                  <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-white/60">
                    <Check className={`h-3 w-3 shrink-0 ${theme.checkIcon}`} />
                    {b.split("\u2014")[0].trim()}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#contact" className={`group/cta inline-flex items-center gap-2 rounded-full ${theme.ctaBg} px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg ${theme.ctaShadow} transition-all duration-300 ${theme.ctaHover} hover:scale-[1.03]`}>
                  {experience.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </a>
                <span className="flex items-center gap-1.5 text-sm text-white/50">
                  <Clock className={`h-3.5 w-3.5 ${theme.clockColor}`} />
                  {experience.duration}
                </span>
                <span className="text-sm font-semibold text-white">{experience.pricing[0].price}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   LAYOUT 3: Full-width Immersive — background image, overlaid content
   Used for: Rent a Boat (index 2), Rafting (index 4)
───────────────────────────────────────────────── */
function LayoutImmersive({ experience }: { experience: Exp }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const theme = themes[experience.id];

  return (
    <div ref={ref} className="relative overflow-hidden" id={experience.id}>
      {/* Full-bleed background */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image src={experience.detailImage} alt={experience.title} fill sizes="100vw" className="object-cover" />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.tagBorder} ${theme.tagBg} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${theme.tagText} backdrop-blur-sm`}>{experience.tag}</span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Clock className={`h-3 w-3 ${theme.clockColor}`} />
              {experience.duration}
            </span>
          </div>

          <h3 className="mt-6 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl xl:text-6xl">{experience.headline}</h3>

          <p className="mt-5 text-base leading-relaxed text-white/65 lg:text-lg">{experience.subheadline}</p>

          <div className="mt-8"><BenefitsList experience={experience} theme={theme} /></div>

          <div className="mt-10"><CtaRow experience={experience} theme={theme} /></div>
          <TrustLine experience={experience} theme={theme} />
        </motion.div>

        {/* Floating video — positioned right on desktop */}
        {experienceVideos[experience.id] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-16 right-8 z-20 hidden xl:block"
          >
            <div className="relative w-[260px] overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/50">
              <div className="aspect-video relative">
                <video autoPlay muted loop playsInline poster={experience.detailImage} className="h-full w-full object-cover"><source src={experienceVideos[experience.id]} type="video/mp4" /></video>
                <div className="absolute inset-0 bg-navy-950/15" />
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
                  <Play className="h-2.5 w-2.5 fill-white text-white" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   LAYOUT 4: Split Reversed — content left, image right
   Used for: Semi Submarine (index 3)
───────────────────────────────────────────────── */
function LayoutSplitReversed({ experience }: { experience: Exp }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const theme = themes[experience.id];

  return (
    <div ref={ref} className="relative" id={experience.id}>
      <div className={`pointer-events-none absolute top-1/2 -translate-y-1/2 -right-40 h-[600px] w-[600px] rounded-full ${theme.glowColor} blur-[180px]`} />

      <div className="relative w-full px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content — left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:order-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <experience.icon className={`h-5 w-5 ${theme.accentText}`} />
              </div>
              <span className={`text-[13px] font-medium uppercase tracking-[0.15em] ${theme.accentTagline}`}>{experience.tagline}</span>
            </div>
            <h3 className="mt-6 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white lg:text-4xl xl:text-[2.75rem]">{experience.headline}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-[17px]">{experience.subheadline}</p>
            <div className="mt-8"><BenefitsList experience={experience} theme={theme} /></div>
            <div className="mt-8"><CtaRow experience={experience} theme={theme} /></div>
            <TrustLine experience={experience} theme={theme} />
          </motion.div>

          {/* Image — right */}
          <motion.div style={{ y: imageY }} className="relative lg:order-2">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9 }} className="group relative overflow-hidden rounded-2xl lg:rounded-3xl">
              <div className="aspect-[4/3] relative">
                <Image src={experience.detailImage} alt={experience.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] lg:rounded-3xl" />
              </div>
              <div className="absolute top-5 left-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.tagBorder} ${theme.tagBg} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${theme.tagText} backdrop-blur-md`}>{experience.tag}</span>
              </div>
              <div className="absolute bottom-5 right-5 rounded-xl border border-white/[0.08] bg-navy-950/70 px-4 py-3 backdrop-blur-xl">
                <div className="space-y-1">
                  {experience.pricing.map((tier) => (
                    <div key={tier.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-[11px] text-white/55">{tier.label}</span>
                      <span className="text-sm font-semibold text-white">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {experienceVideos[experience.id] && (
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: 0.3 }} className="absolute -bottom-8 -left-6 z-20 hidden lg:block">
                <div className="relative w-[200px] overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/40">
                  <div className="aspect-video relative">
                    <video autoPlay muted loop playsInline poster={experience.detailImage} className="h-full w-full object-cover"><source src={experienceVideos[experience.id]} type="video/mp4" /></video>
                    <div className="absolute inset-0 bg-navy-950/20" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 backdrop-blur-md">
                      <Play className="h-2.5 w-2.5 fill-white text-white" />
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">Preview</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Layout assignment per experience
───────────────────────────────────────────────── */
const layoutMap: Record<string, React.ComponentType<{ experience: Exp }>> = {
  "glass-boat": LayoutSplit,
  "taxi-boat": LayoutCompact,
  "rent-a-boat": LayoutImmersive,
  "semi-submarine": LayoutSplitReversed,
  rafting: LayoutImmersive,
};

export function ExperienceDetails() {
  return (
    <SectionShell bg="deep">
      <SectionHeader
        label="Tour Details"
        title="Everything About Each Tour"
        subtitle="Duration, prices, and what's included — all the details before you book from Omi\u0161 harbour."
      />

      <div className="mt-14 space-y-8 sm:mt-16 lg:space-y-10">
        {experiences.map((exp) => {
          const Layout = layoutMap[exp.id] || LayoutSplit;
          return (
            <SectionPanel key={exp.id} padded={false} className="overflow-hidden">
              <Layout experience={exp} />
            </SectionPanel>
          );
        })}
      </div>
    </SectionShell>
  );
}
