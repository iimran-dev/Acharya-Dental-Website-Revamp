"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Calendar, Trophy, Smile, Globe, ChevronRight } from "lucide-react";
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
      className="relative isolate flex min-h-[92vh] lg:min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 lg:py-32"
    >
      {/* Background Operatory Photography with subtle cinematic zoom */}
      <motion.img
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=88"
        alt="Acharya Dental luxury operatory interior in Nungambakkam Chennai"
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 16, ease: "easeOut" }}
      />

      {/* Ambient Multi-Layer Scrim & Lighting Glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071120]/95 via-[#071120]/80 to-[#071120]/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071120] via-transparent to-[#071120]/70"
      />

      {/* Atmospheric Ambient Light Blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-[#D4AF37]/15 via-[#C8A15A]/8 to-transparent blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-[#1EA5E8]/12 via-[#284B73]/10 to-transparent blur-[140px]"
      />

      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Eyebrow, Headline, Subtitle, Metrics, CTAs (Span 8) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Editorial Eyebrow Badge */}
            <motion.div variants={heroItem} className="mb-5 inline-flex items-center gap-2.5 self-start rounded-full border border-[#D4AF37]/35 bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent px-4 py-1.5 backdrop-blur-md shadow-[0_2px_12px_rgba(212,175,55,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]" />
              </span>
              <span className="text-[0.66rem] sm:text-[0.72rem] font-bold tracking-[0.22em] text-[#F1E5D1] uppercase">
                EST. 1974 • CHENNAI, INDIA
              </span>
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]/50" />
              <span className="text-[0.66rem] sm:text-[0.72rem] font-semibold tracking-wider text-white/70 uppercase">
                NABH ACCREDITED
              </span>
            </motion.div>

            {/* 1. Main Headline */}
            <motion.h1
              variants={heroItem}
              className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.1rem] font-bold tracking-tight text-white leading-[1.08]"
            >
              50 Years of <br />
              <span className="text-white">Trusted Dental</span> <br />
              <span className="bg-gradient-to-r from-white via-[#F6E7C1] to-[#D4AF37] bg-clip-text text-transparent italic font-normal drop-shadow-[0_4px_24px_rgba(212,175,55,0.22)]">
                Excellence
              </span>
            </motion.h1>

            {/* 2. Subtitle */}
            <motion.div
              variants={heroItem}
              className="mt-6 sm:mt-7 flex items-start gap-4 max-w-2xl"
            >
              <div className="mt-1.5 hidden sm:block h-10 w-[2px] rounded-full bg-gradient-to-b from-[#D4AF37] to-transparent shrink-0" />
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed">
                Advanced Dentistry in Chennai for{" "}
                <span className="text-white font-medium">Families</span> &amp;{" "}
                <span className="text-[#F1E5D1] font-medium">International Patients</span>.
              </p>
            </motion.div>

            {/* 3. 3 Key Metrics Row with Elevated Glass Micro-Cards */}
            <motion.div
              variants={heroItem}
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl"
            >
              {HERO_METRICS.map((metric, idx) => {
                const IconComponent = METRIC_ICONS[idx] || Trophy;
                return (
                  <div
                    key={metric.label}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.07] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 text-[#E5BE4A] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                      </div>
                      <span className="font-[var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-sm">
                        <CountUp
                          value={metric.value}
                          suffix={metric.suffix}
                          duration={1800}
                        />
                      </span>
                    </div>
                    <span className="mt-3 text-[0.62rem] sm:text-[0.7rem] font-semibold tracking-[0.16em] text-white/70 uppercase group-hover:text-[#F1E5D1] transition-colors">
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
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C366] to-[#C8A15A] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B162A] shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(212,175,55,0.5)] active:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Book Consultation</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-[#071120]/75 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/70 hover:bg-[#071120] hover:shadow-[0_8px_30px_rgba(37,211,102,0.2)] active:translate-y-0"
              >
                <div className="relative flex items-center">
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                  </span>
                </div>
                <span>WhatsApp Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Google Review & Operatory Card (Span 4) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              variants={heroItem}
              className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-white/[0.97] backdrop-blur-2xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_35px_rgba(212,175,55,0.12)] border border-white/80 ring-1 ring-black/5 flex flex-col gap-4 text-[#10233F] overflow-hidden"
            >
              {/* Subtle top gold highlight line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20" />

              {/* Google Reviews Block */}
              <div className="group/item flex items-start gap-4 rounded-2xl p-3 sm:p-3.5 -mx-1 sm:-mx-1.5 transition-all duration-300 hover:bg-slate-50/90 border border-transparent hover:border-slate-200/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform duration-300 group-hover/item:scale-105">
                  <GoogleGIcon className="h-6 w-6" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#10233F]">
                        {HERO_BADGE.rating}
                      </span>
                      <StarRow count={5} className="h-4 w-4" />
                    </div>
                    <span className="inline-flex items-center text-[0.62rem] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-1">
                    {HERO_BADGE.reviewsText}
                  </span>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Operatories Block */}
              <div className="group/item flex items-center gap-4 rounded-2xl p-3 sm:p-3.5 -mx-1 sm:-mx-1.5 transition-all duration-300 hover:bg-slate-50/90 border border-transparent hover:border-slate-200/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 text-[#B88928] transition-transform duration-300 group-hover/item:scale-105">
                  <OperatoryChairIcon className="h-6 w-6 text-[#B88928]" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-playfair)] text-xl font-bold text-[#10233F]">
                      {HERO_BADGE.operatoriesText}
                    </span>
                    <span className="inline-flex items-center text-[0.62rem] font-semibold text-[#8B6B23] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                      Advanced
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 mt-0.5">
                    Spacious 14,000 sq. ft. Facility
                  </span>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* U.S. Trained Specialists Block */}
              <div className="group/item flex items-center gap-4 rounded-2xl p-3 sm:p-3.5 -mx-1 sm:-mx-1.5 transition-all duration-300 hover:bg-slate-50/90 border border-transparent hover:border-slate-200/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 text-[#B88928] transition-transform duration-300 group-hover/item:scale-105">
                  <SpecialistDoctorIcon className="h-6 w-6 text-[#B88928]" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-playfair)] text-xl font-bold text-[#10233F]">
                      {HERO_BADGE.specialistsText}
                    </span>
                    <span className="inline-flex items-center text-[0.62rem] font-semibold text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-full">
                      Global Care
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 mt-0.5">
                    NYU &amp; MD Anderson Credentials
                  </span>
                </div>
              </div>

              {/* Micro Trust Bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[0.65rem] sm:text-[0.68rem] text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Strict Hospital-Grade Sterilization
                </span>
                <span className="text-slate-400 font-normal">ISO 9001:2015</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#specialists"
        aria-label="Scroll to specialists"
        className="group absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-[#D4AF37] transition-all duration-300"
      >
        <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-white/60 group-hover:text-[#D4AF37] transition-colors">
          Explore Excellence
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1 group-hover:border-[#D4AF37] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-[#D4AF37]"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;
