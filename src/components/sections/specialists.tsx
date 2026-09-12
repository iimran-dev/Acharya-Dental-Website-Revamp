"use client";

import * as React from "react";
import { Award, GraduationCap, Phone, Mail, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SPECIALISTS } from "@/lib/content";

type Specialist = (typeof SPECIALISTS)[number];

const SPECIALIST_ROLES: Record<string, string[]> = {
  "dr-vijailakshmi-acharya": [
    "Prosthodontist & Implantologist",
    "Full Mouth Rehabilitation",
  ],
  "dr-varun-acharya": [
    "Prosthodontist & Implantologist",
    "Cosmetic & Implant Dentistry",
  ],
};

function SpecialistProfileModal({ specialist }: { specialist: Specialist }) {
  return (
    <DialogContent className="max-w-2xl bg-[#081225] border border-white/15 text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
      <DialogTitle className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
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
  const specialties = SPECIALIST_ROLES[specialist.id] || [
    "Prosthodontist & Implantologist",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(16,35,63,0.14)] hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col cursor-pointer text-left">
          {/* Portrait Container — Unobstructed, natural framing */}
          <div className="relative aspect-[4/4.2] sm:aspect-[4/4] w-full overflow-hidden bg-slate-900">
            <img
              src={specialist.image}
              alt={`${specialist.name} — ${specialist.role}`}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle top role badge */}

          </div>

          {/* Dedicated Typography Panel (clean, senior-level editorial design) */}
          <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
            <div>
              {/* Doctor Name */}
              <h3 className="text-xl sm:text-[1.35rem] font-bold text-[#10233F] tracking-tight group-hover:text-[#0284C7] transition-colors">
                {specialist.name}
              </h3>

              {/* Degrees / Post-nominals */}
              <p className="mt-1 text-[0.72rem] sm:text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                {specialist.credentials}
              </p>

              {/* Specialization Tags — Clean modern pills (No AI-style checkmarks) */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {specialties.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-[0.72rem] font-medium text-slate-700 border border-slate-200/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Affordance */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] group-hover:text-[#10233F] transition-colors inline-flex items-center gap-1.5">
                View Clinical Credentials
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[0.68rem] text-slate-400 font-medium">
                {specialist.id === "dr-vijailakshmi-acharya" ? "50+ Yrs Exp" : "U.S. Board-Certified"}
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

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
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#10233F] overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* 3-Column Layout: Left Info Block + 2 Specialist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Eyebrow, Title, Accent Bar, Description, and Button */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4">
            <span className="text-xs sm:text-[0.82rem] font-bold tracking-[0.16em] text-[#0284C7] uppercase">
              MEET OUR SPECIALISTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.65rem] font-bold text-[#10233F] tracking-tight leading-[1.12] mt-3">
              Experience. Expertise. <br />
              Compassion.
            </h2>

            {/* Cyan Accent Bar */}
            <div className="w-12 h-[3px] bg-[#0284C7] rounded-full mt-4 mb-6" />

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
              A father-daughter team dedicated to delivering world-class dental care with precision,
              technology and a personal touch.
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#0A192F] hover:bg-[#122B4F] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md active:scale-95"
              >
                VIEW ALL DOCTORS
              </a>
            </div>
          </div>

          {/* Right Two Columns: Doctor Cards */}
          {SPECIALISTS.map((specialist) => (
            <div key={specialist.id} className="md:col-span-1 lg:col-span-4 flex justify-center">
              <SpecialistCard specialist={specialist} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialists;
