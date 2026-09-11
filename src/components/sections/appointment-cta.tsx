"use client";

import * as React from "react";
import { Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/icons";
import { BRAND } from "@/lib/content";
import { assetPath } from "@/lib/utils";

export function AppointmentCTA() {
  return (
    <section
      id="appointment-cta"
      aria-label="Ready for a healthier smile"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#10233F]"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-[#FAF9F6] border border-gray-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Side: Authentic Reception Lobby Photo with Backlit Logo Wall (Span 6) */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[380px] overflow-hidden bg-slate-900">
            <img
              src={assetPath("/images/acharyadental/t1.jpg")}
              alt="Acharya Dental reception lobby and lounge in Nungambakkam Chennai"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Subtle inner shadow / border */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Side: Consultation Callout matching reference mockup (Span 6) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#10233F] tracking-tight leading-[1.2]">
              Ready for a Healthier, <br />
              <span className="text-[#0284C7]">More Confident Smile?</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Book your consultation with our specialists today. Experience gentle care, cutting-edge technology, and generational trust.
            </p>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE4A] text-[#0B162A] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_4px_15px_rgba(212,175,55,0.35)] active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
              </a>

              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-[#F0F9FF] border-2 border-[#0284C7] text-[#0284C7] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-sm active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#0284C7]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentCTA;
