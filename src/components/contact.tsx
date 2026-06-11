"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import { experiences } from "@/lib/data";

const promises = [
  {
    icon: Clock,
    title: "Response Within Hours",
    description:
      "Our team is on the promenade every day. Most inquiries are confirmed within 2\u20133 hours during season.",
  },
  {
    icon: MapPin,
    title: "Local Support on Arrival",
    description:
      "We\u2019re not a call centre. Meet us in person at our desk on the Cetina promenade when you arrive in Omi\u0161.",
  },
  {
    icon: ShieldCheck,
    title: "Free Cancellation",
    description:
      "Plans change \u2014 we understand. Cancel or reschedule up to 24 hours before departure, no questions asked.",
  },
  {
    icon: Users,
    title: "Families and Groups Welcome",
    description:
      "Travelling with children, large groups, or pets? Just let us know and we\u2019ll tailor the experience for you.",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-white/25 backdrop-blur-sm transition-all duration-300 focus:border-turquoise-400/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-turquoise-400/20";

  const labelClasses =
    "mb-2 block text-[13px] font-medium uppercase tracking-wider text-white/35";

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950" />

      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[600px] w-[600px] rounded-full bg-turquoise-500/[0.03] blur-[180px]" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-blue-400/[0.02] blur-[150px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-turquoise-400/80">
            Reserve Your Experience
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Book Your Adventure
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/40 lg:text-lg">
            Tell us what you&apos;re looking for. We&apos;ll confirm
            availability and handle the rest.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-turquoise-400 to-transparent" />
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* ── Left panel: Promises ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between lg:col-span-2"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Our Booking Promise
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/35">
                Reserving with A-Navi is simple, personal, and risk-free. Here&apos;s
                what to expect when you reach out.
              </p>

              <div className="mt-8 space-y-5">
                {promises.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] transition-colors duration-500 group-hover:border-turquoise-400/20 group-hover:bg-turquoise-500/[0.08]">
                      <p.icon className="h-4.5 w-4.5 text-white/30 transition-colors duration-500 group-hover:text-turquoise-400" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/30">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div className="mt-10 space-y-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                Prefer to reach us directly?
              </p>
              <div className="space-y-2.5">
                <a
                  href="tel:+385991234567"
                  className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                >
                  <Phone className="h-4 w-4 text-turquoise-400/50" />
                  +385 99 123 4567
                </a>
                <a
                  href="mailto:info@a-navi-agency.com"
                  className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                >
                  <Mail className="h-4 w-4 text-turquoise-400/50" />
                  info@a-navi-agency.com
                </a>
                <a
                  href="https://wa.me/385991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-turquoise-400"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400/50" />
                  WhatsApp — instant reply
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right panel: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.015] p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-turquoise-500/15 ring-1 ring-turquoise-400/20">
                      <Check className="h-7 w-7 text-turquoise-400" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                      Request Received
                    </h3>
                    <p className="mt-3 max-w-sm text-[15px] text-white/40">
                      Thank you! Our team will review your request and get back
                      to you within a few hours to confirm availability.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-medium text-turquoise-400 transition-colors hover:text-turquoise-300"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit}>
                    {/* Tour selection */}
                    <div className="mb-8">
                      <label className={labelClasses}>
                        Which experience interests you?
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {experiences.map((exp) => (
                          <button
                            key={exp.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                experience: exp.id,
                              }))
                            }
                            className={`flex items-center gap-2 rounded-xl border px-3.5 py-3 text-left text-sm transition-all duration-300 ${
                              formData.experience === exp.id
                                ? "border-turquoise-400/30 bg-turquoise-500/10 text-turquoise-300"
                                : "border-white/[0.06] bg-white/[0.02] text-white/45 hover:border-white/10 hover:text-white/60"
                            }`}
                          >
                            <exp.icon
                              className={`h-4 w-4 shrink-0 ${
                                formData.experience === exp.id
                                  ? "text-turquoise-400"
                                  : "text-white/25"
                              }`}
                            />
                            <span className="truncate">{exp.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date + Guests row */}
                    <div className="mb-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Preferred Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Guests</label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className={`${inputClasses} [&>option]:bg-navy-900`}
                        >
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (n) => (
                              <option key={n} value={n}>
                                {n} {n === 1 ? "guest" : "guests"}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Name + Email row */}
                    <div className="mb-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                      <label className={labelClasses}>
                        Phone / WhatsApp{" "}
                        <span className="normal-case tracking-normal text-white/20">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+385 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label className={labelClasses}>
                        Anything we should know?{" "}
                        <span className="normal-case tracking-normal text-white/20">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Special requests, group details, children's ages..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group/btn flex w-full items-center justify-center gap-2.5 rounded-xl bg-turquoise-500 px-8 py-4 text-[15px] font-semibold text-navy-950 shadow-lg shadow-turquoise-500/20 transition-all duration-300 hover:bg-turquoise-400 hover:shadow-turquoise-400/30 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="h-4 w-4" />
                      Send Reservation Request
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </button>

                    {/* Trust note */}
                    <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-white/20">
                        <ShieldCheck className="h-3 w-3 text-turquoise-400/40" />
                        No payment required now
                      </span>
                      <span className="hidden h-3 w-px bg-white/10 sm:block" />
                      <span className="flex items-center gap-1.5 text-xs text-white/20">
                        <Clock className="h-3 w-3 text-turquoise-400/40" />
                        Free cancellation up to 24h
                      </span>
                      <span className="hidden h-3 w-px bg-white/10 sm:block" />
                      <span className="flex items-center gap-1.5 text-xs text-white/20">
                        <MessageCircle className="h-3 w-3 text-turquoise-400/40" />
                        Reply within hours
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
