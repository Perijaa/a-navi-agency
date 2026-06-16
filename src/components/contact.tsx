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
    "mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500";

  return (
    <SectionShell id="contact" bg="deep">
      <SectionHeader
        label="Contact"
        title="Book your tour"
        subtitle="Tell us which experience you want — we confirm availability within hours."
      />

      <div className="section-content section-body grid gap-8 lg:grid-cols-5">
        <aside className="lg:col-span-2">
          <div className="space-y-6">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                  <p.icon className="h-4 w-4 text-turquoise-600" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900">{p.title}</h4>
                  <p className="mt-0.5 text-sm text-slate-600">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 space-y-3 border-t border-slate-200 pt-8">
            <a
              href="tel:+385991234567"
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-turquoise-700"
            >
              <Phone className="h-4 w-4 text-turquoise-600" />
              +385 99 123 4567
            </a>
            <a
              href="mailto:info@a-navi-agency.com"
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-turquoise-700"
            >
              <Mail className="h-4 w-4 text-turquoise-600" />
              info@a-navi-agency.com
            </a>
            <a
              href="https://wa.me/385991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-turquoise-700"
            >
              <MessageCircle className="h-4 w-4 text-turquoise-600" />
              WhatsApp
            </a>
          </div>
        </aside>

        <div className="card p-6 sm:p-8 lg:col-span-3">
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
              <div className="mb-6">
                <label className={labelClasses}>Which tour?</label>
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
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                        formData.experience === exp.id
                          ? "border-turquoise-400 bg-teal-50 text-turquoise-800"
                          : "border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <exp.icon
                        className={`h-3.5 w-3.5 shrink-0 ${
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

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
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

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
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

              <div className="mb-4">
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

              <div className="mb-6">
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

              <p className="mt-4 text-center text-xs text-slate-500">
                No payment now &middot; Free cancellation 24h &middot; Reply
                within hours
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
