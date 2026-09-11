"use client";

import * as React from "react";
import { Plane, Hotel, CalendarClock, Video, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BRAND, INTERNATIONAL_FEATURES } from "@/lib/content";

const SERVICES = [
  {
    title: "Airport Pickup",
    desc: "Assistance on arrival at Chennai International Airport (MAA).",
    icon: Plane,
  },
  {
    title: "Accommodation Assistance",
    desc: "Partnered stays and hotels near our Nungambakkam clinic.",
    icon: Hotel,
  },
  {
    title: "Fast-track Treatment",
    desc: "Pre-scheduled appointment blocks planned around travel dates.",
    icon: CalendarClock,
  },
  {
    title: "Virtual Consultation",
    desc: "Remote case review and treatment roadmap before departure.",
    icon: Video,
  },
];

export function InternationalPatients() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <section
      id="international"
      aria-label="International Patients"
      className="relative overflow-hidden bg-[#071120] text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Side: Dark Navy Information & Concierge Services (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20 z-10">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38BDF8] uppercase">
            International Patients
          </span>

          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 leading-tight">
            Your Smile. Our Expertise. <br />
            <span className="text-[#F1E5D1]">Seamless Experience.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-lg leading-relaxed">
            Complete support for your dental journey in Chennai. From preliminary virtual consultations to airport reception and customized treatment timelines.
          </p>

          {/* 4 Feature Icons Row / Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="flex flex-col items-start gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-white/90 leading-snug">
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Airplane Wing Golden Sunset Photo & Know More Button (Span 5) */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full flex items-end justify-end p-8 sm:p-12 overflow-hidden">
          {/* Airplane Wing Photographic Background */}
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85"
            alt="International flight wing over golden sunset clouds"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />

          {/* Gradient overlay to smoothly bridge left dark navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/30 to-transparent lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Know More CTA Button matching reference mockup */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="relative z-10 inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE4A] text-[#071120] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95"
              >
                Know More
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-[#081225] border border-white/15 text-white p-6 sm:p-8">
              <DialogTitle className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
                International Patient Dental Tourism Concierge
              </DialogTitle>
              <div className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mt-1">
                Chennai, Tamil Nadu, India · Airport Code: MAA
              </div>

              <DialogDescription className="text-sm text-white/80 mt-3 leading-relaxed">
                Acharya Dental welcomes patients from the United States, United Kingdom, Singapore, Middle East, Australia, and worldwide. Our dedicated international desk ensures end-to-end comfort from pre-travel planning to post-treatment care.
              </DialogDescription>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-white/85">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider text-xs mb-1.5">
                    1. Pre-Travel Digital Planning
                  </h4>
                  <p className="text-white/75">
                    Share your dental X-rays, photos, and records via WhatsApp or email. Dr. Varun Acharya and our team will prepare a preliminary diagnosis, estimated duration of stay, and schedule prior to your booking.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider text-xs mb-1.5">
                    2. Arrival &amp; Local Transportation
                  </h4>
                  <p className="text-white/75">
                    Complimentary airport reception from Chennai International Airport (MAA) and assistance with chauffeur or ground transport to your accommodation in centrally located Nungambakkam.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider text-xs mb-1.5">
                    3. Fast-Track Treatment &amp; Recovery
                  </h4>
                  <p className="text-white/75">
                    Procedures are scheduled in dedicated blocks with our in-house dental laboratory to ensure rapid turnaround times and ample post-operative follow-up before your flight home.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={BRAND.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline"
                >
                  Chat with International Concierge on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-[#D4AF37] text-[#071120] text-xs font-bold uppercase tracking-wider hover:bg-[#E5BE4A]"
                >
                  Book Consultation
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export default InternationalPatients;
