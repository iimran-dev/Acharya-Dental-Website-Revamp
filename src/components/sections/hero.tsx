"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Calendar, Trophy, Smile, Globe, ChevronDown } from "lucide-react";
import {
  WhatsAppIcon,
  GoogleGIcon,
  OperatoryChairIcon,
  SpecialistDoctorIcon,
  StarRow,
} from "@/components/site/icons";
import { CountUp } from "@/components/site/count-up";
import { EASE_EDITORIAL } from "@/components/site/motion";
import { BRAND, HERO_METRICS, HERO_BADGE } from "@/lib/content";
import { assetPath } from "@/lib/utils";

const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_EDITORIAL },
  },
};

const METRIC_ICONS = [Trophy, Smile, Globe];

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Acharya Dental — 50 Years of Trusted Dental Excellence"
      className="relative isolate flex min-h-[92vh] lg:min-h-screen items-center justify-center overflow-hidden pt-24 pb-16 lg:py-32"
    >
      {/* Background Operatory Photography with warm ambient clinical lighting */}
      <motion.img
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=88"
        alt="Acharya Dental luxury operatory interior in Nungambakkam Chennai"
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 16, ease: "easeOut" }}
      />

      {/* Navy Gradient Scrim — deeper on left to highlight text, lighter on right to reveal the modern operatory */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071120]/95 via-[#071120]/80 to-[#071120]/50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071120] via-transparent to-[#071120]/60"
      />

      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline, Subtitle, Metrics, CTAs (Span 7 or 8) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* 1. Main Headline */}
            <motion.h1
              variants={heroItem}
              className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              50 Years of <br />
              <span className="text-white">Trusted Dental</span> <br />
              <span className="text-[#F1E5D1] italic font-normal">Excellence</span>
            </motion.h1>

            {/* 2. Subtitle */}
            <motion.p
              variants={heroItem}
              className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-white/85 font-normal max-w-2xl leading-relaxed"
            >
              Advanced Dentistry in Chennai for Families &amp; International Patients
            </motion.p>

            {/* 3. 3 Key Metrics Row with Gold Outline Icons */}
            <motion.div
              variants={heroItem}
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl"
            >
              {HERO_METRICS.map((metric, idx) => {
                const IconComponent = METRIC_ICONS[idx] || Trophy;
                return (
                  <div key={metric.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                        <IconComponent className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <span className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        <CountUp
                          value={metric.value}
                          suffix={metric.suffix}
                          duration={1800}
                        />
                      </span>
                    </div>
                    <span className="text-[0.65rem] sm:text-[0.72rem] font-semibold tracking-[0.14em] text-white/70 uppercase">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* 4. CTA Buttons Row */}
            <motion.div
              variants={heroItem}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE4A] text-[#0B162A] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
              </a>

              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#071120]/70 hover:bg-[#071120] border border-white/20 hover:border-[#25D366] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md active:scale-95 group"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp Now
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Google Review & Operatory Card (Span 4 or 5) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              variants={heroItem}
              className="w-full max-w-sm rounded-2xl bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/40 flex flex-col gap-5 text-[#10233F]"
            >
              {/* Google Reviews Block */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
                  <GoogleGIcon className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#10233F]">
                      {HERO_BADGE.rating}
                    </span>
                    <StarRow count={5} className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 mt-0.5">
                    {HERO_BADGE.reviewsText}
                  </span>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-gray-200/80" />

              {/* Operatories Block */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#C89B48]">
                  <OperatoryChairIcon className="h-6 w-6 text-[#C89B48]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[var(--font-playfair)] text-xl font-bold text-[#10233F]">
                    {HERO_BADGE.operatoriesText}
                  </span>
                  <span className="text-xs text-gray-600">
                    Spacious 14,000 sq. ft. Facility
                  </span>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-gray-200/80" />

              {/* U.S. Trained Specialists Block */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#C89B48]">
                  <SpecialistDoctorIcon className="h-6 w-6 text-[#C89B48]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[var(--font-playfair)] text-xl font-bold text-[#10233F]">
                    {HERO_BADGE.specialistsText}
                  </span>
                  <span className="text-xs text-gray-600">
                    NYU &amp; MD Anderson Credentials
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#specialists"
        aria-label="Scroll to specialists"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[0.6rem] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
