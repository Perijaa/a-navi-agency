"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Star,
  Users,
  Shield,
} from "lucide-react";
import { getExperienceBySlug } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileBookBar } from "@/components/mobile-book-bar";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

function BookingCard({
  experience,
  className = "",
}: {
  experience: ReturnType<typeof getExperienceBySlug> & {};
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#e8e2d9]/70 bg-[#fffefa] shadow-[0_2px_4px_rgb(44_38_32/0.03),0_8px_32px_-6px_rgb(44_38_32/0.08)] ${className}`}
    >
      <div className="px-6 pt-7 pb-2 sm:px-7 sm:pt-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#a89d90]">
          Starting from
        </p>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="font-serif text-[2rem] font-semibold tracking-[-0.02em] text-[#2c2620]">
            &euro;{experience.priceFrom}
          </span>
          <span className="text-sm text-[#7d7268]">/ person</span>
        </div>
      </div>

      <div className="mx-6 my-2 h-px bg-[#e8e2d9]/40 sm:mx-7" />

      <div className="px-6 py-3 sm:px-7">
        {experience.pricing.map((tier, i) => (
          <div
            key={tier.label}
            className={`flex items-center justify-between py-3.5 ${i < experience.pricing.length - 1 ? "border-b border-[#e8e2d9]/30" : ""}`}
          >
            <span className="text-[15px] text-[#7d7268]">{tier.label}</span>
            <span className="font-serif text-lg font-semibold text-[#2c2620]">
              {tier.price}
            </span>
          </div>
        ))}
      </div>

      <div className="px-6 pt-2 pb-6 sm:px-7 sm:pb-7">
        <Link
          href="/#contact"
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#2c2620] px-5 py-4 text-[15px] font-semibold text-[#faf8f5] transition-all hover:bg-[#3a3228] hover:-translate-y-px sm:py-[1.125rem] sm:text-base"
        >
          {experience.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#a89d90]">
          <Shield className="h-3.5 w-3.5 text-turquoise-500" />
          <span>Free cancellation &middot; No payment upfront</span>
        </div>
      </div>
    </div>
  );
}

export function ExperiencePageView({ slug }: { slug: string }) {
  const experience = getExperienceBySlug(slug);
  if (!experience) return null;

  const Icon = experience.icon;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf8f5] pb-safe-book-bar">
        {/* ════════════════════════════════════════════
            HERO
            Mobile: 50vh, compact text
            Tablet: 58vh
            Desktop: 68vh, cinematic
        ════════════════════════════════════════════ */}
        <section className="relative flex min-h-[50vh] w-full items-end overflow-hidden sm:min-h-[58vh] xl:min-h-[68vh]">
          <Image
            src={experience.detailImage}
            alt={experience.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <Link
            href="/#experiences"
            className="absolute left-4 top-[max(4.5rem,calc(env(safe-area-inset-top)+3.5rem))] z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[13px] font-medium text-white/90 backdrop-blur-xl transition-all hover:bg-white/20 sm:left-8 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm xl:left-12"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            All tours
          </Link>

          <div className="relative z-10 w-full px-4 pb-7 sm:px-8 sm:pb-12 xl:px-12 xl:pb-16">
            <div className="mx-auto max-w-5xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px]"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {experience.tag}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="mt-3 font-serif text-[clamp(1.75rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:mt-5"
              >
                {experience.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease }}
                className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:mt-4 sm:max-w-2xl sm:text-lg sm:leading-relaxed"
              >
                {experience.headline}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            QUICK FACTS
            Mobile: 2×2 grid
            Tablet+: horizontal strip
        ════════════════════════════════════════════ */}
        <div className="border-b border-[#e8e2d9]/60 bg-[#faf8f5]">
          <div className="mx-auto max-w-5xl px-4 py-4 sm:px-8 sm:py-5 xl:px-12 xl:py-6">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a4035] sm:text-[15px]">
                <Clock className="h-4 w-4 shrink-0 text-turquoise-500 sm:h-[1.125rem] sm:w-[1.125rem]" />
                {experience.duration}
              </span>
              <span className="hidden h-5 w-px bg-[#d4cbbf]/40 sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a4035] sm:text-[15px]">
                <MapPin className="h-4 w-4 shrink-0 text-turquoise-500 sm:h-[1.125rem] sm:w-[1.125rem]" />
                Omiš, Cetina
              </span>
              <span className="hidden h-5 w-px bg-[#d4cbbf]/40 sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a4035] sm:text-[15px]">
                <Users className="h-4 w-4 shrink-0 text-turquoise-500 sm:h-[1.125rem] sm:w-[1.125rem]" />
                All ages
              </span>
              <span className="hidden h-5 w-px bg-[#d4cbbf]/40 sm:block" aria-hidden />
              <span className="font-serif text-base font-semibold text-[#2c2620] sm:text-xl">
                From&nbsp;&euro;{experience.priceFrom}
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            BODY
            Mobile: single column, booking card hidden (MobileBookBar handles CTA)
            Tablet: single column with booking card
            Desktop (lg+): two columns with sticky sidebar
        ════════════════════════════════════════════ */}
        <div className="mx-auto max-w-5xl px-4 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:grid lg:grid-cols-[1fr_23rem] lg:items-start lg:gap-12 lg:pt-14 xl:grid-cols-[1fr_25rem] xl:gap-16 xl:px-12 xl:pt-16 xl:pb-24">

          {/* ─── Main content column ─── */}
          <div>

            {/* About */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="pb-8 sm:pb-10 lg:pb-12"
            >
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600 sm:text-xs">
                About this experience
              </h2>
              <p className="mt-4 font-serif text-[clamp(1.125rem,2.8vw,1.625rem)] font-semibold leading-[1.35] tracking-[-0.015em] text-[#2c2620] text-balance sm:mt-5">
                {experience.subheadline}
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#7d7268] sm:mt-5 sm:text-base lg:text-[1.0625rem]">
                {experience.longDescription}
              </p>
            </motion.section>

            <hr className="border-[#e8e2d9]/50" />

            {/* Scenic image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="py-8 sm:py-10 lg:py-12"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[16/9] sm:rounded-2xl lg:rounded-3xl">
                <Image
                  src={experience.image}
                  alt={`${experience.title} — scenic view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56rem"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 sm:rounded-2xl lg:rounded-3xl" />
              </div>
            </motion.div>

            <hr className="border-[#e8e2d9]/50" />

            {/* What's included */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="py-8 sm:py-10 lg:py-12"
            >
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600 sm:text-xs">
                What&apos;s included
              </h2>
              <ul className="mt-5 sm:mt-6 lg:mt-8">
                {experience.benefits.map((benefit, i) => (
                  <li
                    key={benefit}
                    className={`flex items-start gap-3 py-4 sm:gap-4 sm:py-5 lg:py-6 ${i < experience.benefits.length - 1 ? "border-b border-[#e8e2d9]/30" : ""}`}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 sm:mt-1 sm:h-7 sm:w-7">
                      <Check className="h-3.5 w-3.5 text-turquoise-600 sm:h-4 sm:w-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#3a3228] sm:text-base lg:text-[1.0625rem]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <hr className="border-[#e8e2d9]/50" />

            {/* Highlights */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="py-8 sm:py-10 lg:py-12"
            >
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise-600 sm:text-xs">
                Highlights
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:mt-8 lg:gap-4">
                {experience.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-xl border border-[#e8e2d9]/50 bg-[#fffefa] px-4 py-3.5 transition-colors hover:border-turquoise-300/40 sm:px-5 sm:py-4"
                  >
                    <Check className="h-4 w-4 shrink-0 text-turquoise-500" strokeWidth={2.5} />
                    <span className="text-[13px] font-medium text-[#3a3228] sm:text-[15px]">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            <hr className="border-[#e8e2d9]/50" />

            {/* Trust banner */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 rounded-xl border border-teal-100/60 bg-teal-50/30 p-5 sm:mt-10 sm:rounded-2xl sm:p-6 lg:mt-12 lg:p-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-turquoise-500 sm:h-6 sm:w-6" />
                <div>
                  <p className="text-sm font-semibold text-teal-800 sm:text-[15px]">
                    Free cancellation &middot; No payment upfront
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#615749] sm:mt-2 sm:text-sm lg:text-[15px]">
                    <Star className="mb-px mr-1 inline h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
                    {experience.trustLine}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile/tablet booking card — visible below lg */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 sm:mt-12 lg:hidden"
            >
              <BookingCard experience={experience} />
            </motion.div>
          </div>

          {/* ─── Sticky booking sidebar — visible on lg+ only ─── */}
          <aside className="hidden lg:sticky lg:top-24 lg:block">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <BookingCard experience={experience} />
            </motion.div>
          </aside>
        </div>
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
