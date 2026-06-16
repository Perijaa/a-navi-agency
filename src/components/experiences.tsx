"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href={`/experiences/${exp.id}`}
        className="group card flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg font-bold text-navy-900 sm:text-xl">
              {exp.title}
            </h3>
            <span className="shrink-0 text-base font-bold text-turquoise-600">
              &euro;{exp.priceFrom}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {exp.tagline}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Clock className="h-3.5 w-3.5" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-turquoise-600">
              Details
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Experiences() {
  const minPrice = Math.min(...experiences.map((e) => e.priceFrom));

  return (
    <SectionShell id="experiences" bg="deep">
      <SectionHeader
        label="Tours"
        title="Five experiences from the harbour"
        subtitle={`All depart from the Cetina promenade in Omiš. From €${minPrice}.`}
      />

      <div className="section-content section-body grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>

      <div className="section-content mt-12 text-center lg:mt-16">
        <p className="text-sm text-slate-500 sm:text-base">
          Not sure which tour? We&apos;ll help you choose.
        </p>
        <Link href="/#contact" className="btn-primary mt-5">
          Book a tour
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionShell>
  );
}
