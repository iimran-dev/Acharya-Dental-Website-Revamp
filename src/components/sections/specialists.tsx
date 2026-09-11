"use client";

import * as React from "react";
import { Check, ArrowRight, Award, GraduationCap, Phone, Mail, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { SPECIALISTS, BRAND } from "@/lib/content";
import { cn } from "@/lib/utils";

type Specialist = (typeof SPECIALISTS)[number];

function SpecialistProfileModal({ specialist }: { specialist: Specialist }) {
  return (
    <DialogContent className="max-w-2xl bg-[#081225] border border-white/15 text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
      <DialogTitle className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
        {specialist.name}
      </DialogTitle>
      <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mt-1">
        {specialist.credentials}
      </div>
      <DialogDescription className="text-white/70 text-xs sm:text-sm mt-1">
        {specialist.role}
      </DialogDescription>

      <div className="mt-6 space-y-6 text-sm text-white/85">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-2.5">
            <GraduationCap className="h-4 w-4" />
            Education &amp; Qualifications
          </div>
          <ul className="space-y-1.5 pl-4 border-l border-white/10">
            {specialist.education.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm leading-relaxed text-white/80">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Experience & Training */}
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Award className="h-4 w-4" />
            Experience &amp; Specialized Training
          </div>
          <ul className="space-y-1.5 pl-4 border-l border-white/10">
            {specialist.experienceDetails.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm leading-relaxed text-white/80">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Activities & Memberships */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white/90 mb-2.5">
            Professional Memberships &amp; Fellowships
          </div>
          <ul className="space-y-1 pl-4 border-l border-white/10">
            {specialist.memberships.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm text-white/70">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{specialist.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Mail className="h-3.5 w-3.5 text-[#38BDF8]" />
            <span>{specialist.email}</span>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function SpecialistCard({ specialist }: { specialist: Specialist }) {
  const isDark = specialist.theme === "navy";

  return (
    <Dialog>
      <div
        className={cn(
          "group relative rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,35,63,0.22)]",
          isDark
            ? "bg-[#091528] border-white/10 text-white"
            : "bg-[#0B1A30] border-white/10 text-white"
        )}
      >
        {/* Top Right Gold Monogram Badge */}
        <div className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/90 text-[#071120] shadow-md backdrop-blur-sm">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8 2 5 6 5 11c0 4 2 8 4 10 1 1 2 1 3 1s2 0 3-1c2-2 4-6 4-10 0-5-3-9-7-9Z" />
            <path d="M12 6v6" />
          </svg>
        </div>

        {/* Portrait Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img
            src={specialist.image}
            alt={`${specialist.name} — ${specialist.role}`}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle bottom vignette gradient to seamlessly blend with card info */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#091528] via-[#091528]/40 to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7 relative z-10 flex flex-col justify-between">
          <div>
            {/* Name */}
            <h3 className="font-[var(--font-playfair)] text-2xl sm:text-[1.7rem] font-bold text-white tracking-tight">
              {specialist.name}
            </h3>

            {/* Credentials */}
            <p className="mt-1 text-[0.72rem] sm:text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
              {specialist.credentials}
            </p>

            {/* Checklist items */}
            <div className="mt-5 space-y-2.5">
              {specialist.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[0.82rem] font-medium text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* View Profile Action Link */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#F3E5AB] transition-colors group/btn"
              >
                <span>View Profile</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </DialogTrigger>
          </div>
        </div>
      </div>

      {/* Profile Details Dialog */}
      <SpecialistProfileModal specialist={specialist} />
    </Dialog>
  );
}

export function Specialists() {
  return (
    <section
      id="about"
      aria-label="Meet Our Specialists"
      className="py-20 lg:py-28 bg-[#FAF9F6] text-[#10233F]"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        {/* Section Header: Eyebrow, Title, Subtitle, and Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-gray-200">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0284C7] uppercase">
              Meet Our Specialists
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] tracking-tight mt-2">
              Experience. Expertise. Compassion.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              A mother-and-son leadership team dedicated to delivering world-class dental care
              with precision, technology and a personal touch.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#specialists-grid"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0B162A] text-white hover:bg-[#1E3A5F] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md"
            >
              View All Doctors
            </a>
          </div>
        </div>

        {/* Specialists Two-Card Grid */}
        <div
          id="specialists-grid"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {SPECIALISTS.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialists;
