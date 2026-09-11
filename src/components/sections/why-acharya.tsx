"use client";

import * as React from "react";
import { Award, Globe, Monitor, ShieldCheck } from "lucide-react";

const WHY_FEATURES = [
  {
    title: "50+ Years Legacy",
    description: "Half a century of trust, care and clinical excellence.",
    icon: Award,
  },
  {
    title: "1000+ International Patients",
    description: "Patients from 25+ countries trust us for their smiles.",
    icon: Globe,
  },
  {
    title: "Digital Treatment Planning",
    description: "Advanced technology for precise diagnosis and predictable results.",
    icon: Monitor,
  },
  {
    title: "World-Class Sterilization",
    description: "International standards of hygiene and sterilization protocols.",
    icon: ShieldCheck,
  },
];

export function WhyAcharya() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Patients Choose Acharya Dental"
      className="py-16 lg:py-20 bg-[#071120] border-y border-white/10 text-white"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        {/* Centered / clean uppercase title matching reference mockup */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-white uppercase">
            Why Patients Choose Acharya Dental
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#D4AF37]" />
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {WHY_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center sm:items-start sm:text-left group"
              >
                {/* Circular Gold Outline Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] mb-5 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-playfair)] text-lg sm:text-xl font-bold text-white tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyAcharya;
