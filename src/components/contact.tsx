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
  ArrowRight,
  Check,
} from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

const promises = [
  {
    icon: Clock,
    title: "Reply within hours",
    description: "We're on the promenade daily during season.",
  },
  {
    icon: ShieldCheck,
    title: "Free cancellation",
    description: "Up to 24 hours before departure.",
  },
  {
    icon: MapPin,
    title: "Meet at the harbour",
    description: "Cetina promenade — we walk you to the boat.",
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

  const labelClasses =
    "contact-form-label mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-[13px]";

  return (
    <SectionShell id="contact" bg="deep" className="!pt-[2cm]">
      <div className="section-stack">
      <SectionHeader
        label="Contact"
        title="Book your tour"
        subtitle="Tell us which experience you want — we confirm availability within hours."
      />

        <div className="section-content grid gap-10 xl:grid-cols-5 xl:gap-14">
        <aside className="window-stack xl:col-span-2">
          <div className="window-stack">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card flex flex-col items-center gap-4 p-5 text-center sm:p-6 xl:flex-row xl:items-start xl:gap-4 xl:p-5 xl:text-left"
              >
                <div className="icon-badge h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                  <p.icon className="h-5 w-5 text-turquoise-600 sm:h-[1.125rem] sm:w-[1.125rem]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-navy-900 sm:text-base">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="card space-y-4 p-5 text-center sm:space-y-4 sm:p-6 xl:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">
              Direct contact
            </p>
            <a
              href="tel:+385991234567"
              className="flex items-center justify-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-turquoise-700 sm:text-[15px] xl:justify-start"
            >
              <Phone className="h-4 w-4 shrink-0 text-turquoise-600" />
              +385 99 123 4567
            </a>
            <a
              href="mailto:info@a-navi-agency.com"
              className="flex items-center justify-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-turquoise-700 sm:text-[15px] xl:justify-start"
            >
              <Mail className="h-4 w-4 shrink-0 text-turquoise-600" />
              info@a-navi-agency.com
            </a>
            <a
              href="https://wa.me/385991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-turquoise-700 sm:text-[15px] xl:justify-start"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-turquoise-600" />
              WhatsApp
            </a>
          </div>
        </aside>

        <div className="contact-form-card card overflow-hidden p-9 sm:p-11 xl:col-span-3 xl:p-14">
          {!submitted && (
            <div className="mb-10 border-b border-slate-100 pb-8 text-center xl:text-left">
              <h3 className="font-serif text-xl font-semibold text-navy-900 sm:text-2xl">
                Reservation request
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                Fill in the details — we&apos;ll confirm availability by email or WhatsApp.
              </p>
            </div>
          )}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
                <Check className="h-7 w-7 text-turquoise-600" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-navy-900">
                Request received
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-600">
                We&apos;ll get back to you within a few hours to confirm
                availability.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-turquoise-600 hover:text-turquoise-700"
              >
                Send another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <label className={labelClasses}>Which tour?</label>
                <div className="contact-tour-picker-grid grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
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
                      className={`tour-picker-btn ${
                        formData.experience === exp.id
                          ? "tour-picker-btn--active"
                          : ""
                      }`}
                    >
                      <exp.icon
                        className={`h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem] ${
                          formData.experience === exp.id
                            ? "text-turquoise-600"
                            : "text-slate-400"
                        }`}
                      />
                      <span className="truncate">{exp.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5 grid gap-5 xl:grid-cols-2">
                <div>
                  <label className={labelClasses}>Preferred date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="input-field"
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-5 grid gap-5 xl:grid-cols-2">
                <div>
                  <label className={labelClasses}>Full name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
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
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClasses}>
                  Phone / WhatsApp{" "}
                  <span className="normal-case tracking-normal text-slate-400">
                    (optional)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+385 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="mb-7">
                <label className={labelClasses}>
                  Message{" "}
                  <span className="normal-case tracking-normal text-slate-400">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Group size, children, special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send reservation request
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-6 text-center text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                No payment now &middot; Free cancellation 24h &middot; Reply
                within hours
              </p>
            </form>
          )}
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
