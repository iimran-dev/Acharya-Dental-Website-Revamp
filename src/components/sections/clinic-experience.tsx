"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Building2,
  ShieldCheck,
  Microscope,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { SectionHeading } from "@/components/site/section-heading";
import { assetPath } from "@/lib/utils";
import { BRAND } from "@/lib/content";

/* ---------------------------------------------------------------
   ClinicExperience — Modern Bento Display Layout
   Showcasing Acharya Dental's 14,000 sq. ft. facility with:
     • 12-column asymmetric Bento Grid
     • Authentic photography across exterior, reception, suites & lounge
     • Subtle zoom micro-interactions & dark glassmorphic labels
     • Full-screen interactive lightbox gallery with keyboard navigation
     • Integrated facility highlights bar
   --------------------------------------------------------------- */

interface ClinicSpace {
  id: string;
  src: string;
  alt: string;
  title: string;
  tag: string;
  description: string;
  desktopGridClass: string;
}

const CLINIC_SPACES: ClinicSpace[] = [
  {
    id: "exterior",
    src: assetPath("/images/acharyadental/t1.jpg"),
    alt: "Acharya Dental multi-storey modern clinic building illuminated at twilight in Nungambakkam",
    title: "Flagship Facility — Evening Facade",
    tag: "14,000 SQ. FT. CAMPUS",
    description:
      "Purpose-built multi-storey centre in central Nungambakkam, Chennai, combining hospital-grade sterilization with bespoke patient privacy.",
    desktopGridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]",
  },
  {
    id: "reception",
    src: assetPath("/images/acharyadental/t3.jpg"),
    alt: "Executive marble reception foyer with acoustic textured ceiling and concierge arrival desk",
    title: "Executive Reception & Foyer",
    tag: "ARRIVAL CONCIERGE",
    description:
      "Calming marble foyer with acoustic wave ceilings and concierge check-in designed to dissolve dental anxiety.",
    desktopGridClass: "lg:col-span-5 min-h-[240px] sm:min-h-[250px]",
  },
  {
    id: "operatory",
    src: assetPath("/images/acharyadental/t25.jpg"),
    alt: "Modern dental operatory suite with ergonomic treatment chairs, sterile systems, and vibrant contemporary art",
    title: "Operatory & Treatment Suite",
    tag: "DIGITAL OPERATORY",
    description:
      "Ergonomic treatment bays equipped with ceiling displays, digital sensors, and uplifting modern interiors.",
    desktopGridClass: "lg:col-span-5 min-h-[240px] sm:min-h-[250px]",
  },
  {
    id: "lounge",
    src: assetPath("/images/acharyadental/t4.jpg"),
    alt: "Spacious patient waiting lounge with abundant natural light, ergonomic seating, and tranquil atmosphere",
    title: "Patient Waiting Lounge",
    tag: "SERENE AMBIENCE",
    description:
      "Naturally lit, peaceful lounge with comfortable seating and refreshments for patients and accompanying family.",
    desktopGridClass: "lg:col-span-6 min-h-[260px] sm:min-h-[280px]",
  },
  {
    id: "campus",
    src: assetPath("/images/acharyadental/t2.jpg"),
    alt: "Aerial daylight view of Acharya Dental clinic campus surrounded by lush tropical greenery",
    title: "Daylight Campus & Greenery",
    tag: "CENTRAL CHENNAI",
    description:
      "Nestled among mature palm trees and tropical greenery with dedicated patient valet parking in Nungambakkam.",
    desktopGridClass: "lg:col-span-6 min-h-[260px] sm:min-h-[280px]",
  },
];

const FACILITY_SPECS = [
  {
    icon: Building2,
    stat: "14,000",
    unit: "sq. ft.",
    label: "Multispeciality Facility",
    detail: "Purpose-built multi-floor centre",
  },
  {
    icon: Sparkles,
    stat: "15",
    unit: "Suites",
    label: "Advanced Operatories",
    detail: "Ergonomic clinical bays",
  },
  {
    icon: ShieldCheck,
    stat: "NABH",
    unit: "Grade",
    label: "Sterilization Standard",
    detail: "Class-B autoclaves & sealed cassettes",
  },
  {
    icon: Microscope,
    stat: "Digital",
    unit: "In-House",
    label: "CAD/CAM & 3D CBCT",
    detail: "Same-day diagnostics & milling",
  },
];

export function ClinicExperience() {
  const [activeLightbox, setActiveLightbox] = React.useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightbox(index);
  const closeLightbox = () => setActiveLightbox(null);

  const nextLightbox = React.useCallback(() => {
    setActiveLightbox((prev) =>
      prev !== null ? (prev + 1) % CLINIC_SPACES.length : null
    );
  }, []);

  const prevLightbox = React.useCallback(() => {
    setActiveLightbox((prev) =>
      prev !== null ? (prev - 1 + CLINIC_SPACES.length) % CLINIC_SPACES.length : null
    );
  }, []);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (activeLightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightbox, nextLightbox, prevLightbox]);

  return (
    <section
      id="clinic"
      aria-label="The Acharya Dental clinic — designed for calm, equipped for precision"
      className="relative overflow-hidden bg-[#060e1a] text-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[var(--gold)]/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#0284C7]/[0.05] blur-3xl"
      />

      <div className="container-editorial relative z-10">
        {/* Header with facility summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="THE ENVIRONMENT & FACILITY"
            title="World-Class Ambience. Surgical Precision."
            lead="Step inside South India's premier 14,000 sq. ft. dental centre in Nungambakkam, Chennai — thoughtfully designed for calm, privacy, and clinical excellence."
            tone="light"
            className="max-w-2xl"
          />

          <Reveal delay={0.15}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="font-[var(--font-inter)] text-xs font-semibold tracking-wider text-[var(--gold-soft)] uppercase">
                {BRAND.facilityArea} · {BRAND.operatoriesCount} Operatories
              </span>
            </div>
          </Reveal>
        </div>

        {/* Modern Bento Display Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {CLINIC_SPACES.map((space, idx) => (
            <Reveal
              key={space.id}
              delay={idx * 0.08}
              className={`${space.desktopGridClass} md:col-span-1`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
                aria-label={`View ${space.title}`}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1B30] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[var(--gold)]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-2"
              >
                {/* Background Image with smooth hover zoom */}
                <img
                  src={space.src}
                  alt={space.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />

                {/* Multilayer gradient scrims for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/95 via-[#060e1a]/40 to-transparent" />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                {/* Top Tag & Expand Affordance */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-[var(--font-inter)] text-[0.62rem] sm:text-[0.68rem] font-bold tracking-wider text-[var(--gold-soft)] uppercase backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                    {space.tag}
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[#0B1B30] group-hover:scale-110 shadow-xs"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Bottom Content Panel */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <div className="h-0.5 w-10 bg-[var(--gold)] mb-2.5 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-[var(--font-playfair)] text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
                    {space.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {space.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Facility Highlights Bar */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {FACILITY_SPECS.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={i} delay={0.2 + i * 0.05}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--gold)]/40 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--gold)]/10 text-[var(--gold)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[var(--font-playfair)] text-lg sm:text-xl font-bold text-white">
                        {spec.stat}
                      </span>
                      <span className="font-[var(--font-inter)] text-xs text-[var(--gold-soft)] font-medium">
                        {spec.unit}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-[var(--font-inter)] text-xs sm:text-sm font-semibold text-white/90">
                    {spec.label}
                  </h4>
                  <p className="mt-0.5 text-[0.7rem] sm:text-xs text-white/60">
                    {spec.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Clinic Space High-Resolution Viewer"
          >
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={closeLightbox}
              aria-hidden="true"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0B1B30] shadow-2xl"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/15 px-2.5 py-0.5 font-[var(--font-inter)] text-[0.65rem] font-bold text-[var(--gold)] uppercase">
                    {CLINIC_SPACES[activeLightbox].tag}
                  </span>
                  <span className="font-[var(--font-inter)] text-xs text-white/60">
                    {activeLightbox + 1} / {CLINIC_SPACES.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close viewer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main Image Stage */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeLightbox}
                    src={CLINIC_SPACES[activeLightbox].src}
                    alt={CLINIC_SPACES[activeLightbox].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full object-contain"
                  />
                </AnimatePresence>

                {/* Left & Right Navigation Arrows */}
                <button
                  type="button"
                  onClick={prevLightbox}
                  aria-label="Previous space"
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 hover:border-[var(--gold)] cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextLightbox}
                  aria-label="Next space"
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 hover:border-[var(--gold)] cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Caption & Thumbnail Navigation Strip */}
              <div className="p-5 sm:p-6 bg-[#081322] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <h4 className="font-[var(--font-playfair)] text-xl font-bold text-white">
                    {CLINIC_SPACES[activeLightbox].title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {CLINIC_SPACES[activeLightbox].description}
                  </p>
                </div>

                {/* Mini thumbnails */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {CLINIC_SPACES.map((space, thumbIdx) => (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => setActiveLightbox(thumbIdx)}
                      aria-label={`Go to ${space.title}`}
                      className={`relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all cursor-pointer ${
                        thumbIdx === activeLightbox
                          ? "border-[var(--gold)] scale-105"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={space.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ClinicExperience;
