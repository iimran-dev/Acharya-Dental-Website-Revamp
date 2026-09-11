"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { AcharyaLogo, WhatsAppIcon } from "@/components/site/icons";
import { BRAND, ACCREDITATIONS, ALL_TREATMENTS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#050C17] border-t border-white/10 text-white">
      {/* Accreditations & Affiliations Bar */}
      <div className="py-10 border-b border-white/10 bg-[#071120]">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                Accreditations &amp; Global Affiliations
              </span>
              <p className="text-xs text-white/60 mt-0.5">
                Recognized by leading dental boards and international dental colleges
              </p>
            </div>

            {/* Accreditation Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {ACCREDITATIONS.map((acc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title={acc.name}
                >
                  <img
                    src={acc.logo}
                    alt={acc.name}
                    className="h-9 w-auto max-w-[110px] object-contain brightness-90 hover:brightness-100 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <AcharyaLogo light={true} />
            <p className="mt-5 text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Founded in 1974 by Dr. Vijailakshmi Acharya in a 240 sq. ft. clinic in Madras.
              Today, Acharya Dental is a premier 14,000 sq. ft. multispeciality practice with
              15 operatories, combining western technology with eastern clinical skill.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.68rem] font-semibold tracking-wider uppercase">
                50+ Years Legacy
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0284C7]/15 border border-[#0284C7]/30 text-[#38BDF8] text-[0.68rem] font-semibold tracking-wider uppercase">
                15 Operatories
              </span>
            </div>
          </div>

          {/* Quick Links Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Acharya Dental
                </a>
              </li>
              <li>
                <a href="#specialists" className="hover:text-white transition-colors">
                  Our Specialists
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Signature Treatments
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Smile Transformations
                </a>
              </li>
              <li>
                <a href="#international" className="hover:text-white transition-colors">
                  International Concierge
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Dental Specialties Column (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-5">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              {ALL_TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-white transition-colors">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Information (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-5">
              Chennai Facility
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                <span>{BRAND.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                <div>
                  <a href="tel:+914443831000" className="block hover:text-white">
                    +91 44 4383 1000 (Front Desk)
                  </a>
                  <a href="tel:+914449501100" className="block hover:text-white text-xs text-white/60">
                    +91 44 4950 1100 (Dr. Varun Acharya)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#38BDF8] mt-0.5" />
                <a href="mailto:acharya@acharyadental.com" className="hover:text-white">
                  acharya@acharyadental.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                <span>Mon — Sat: 9:00 AM — 7:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Acharya Dental. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Terms of Care
            </a>
            <a
              href={BRAND.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:underline"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
