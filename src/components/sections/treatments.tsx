"use client";

import * as React from "react";
import { ArrowRight, Sparkles, Check, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ToothImplantIcon,
  ToothSparkleIcon,
  FullMouthRehabIcon,
  AlignerOrthodonticIcon,
} from "@/components/site/icons";
import { SIGNATURE_TREATMENTS, ALL_TREATMENTS } from "@/lib/content";

type Treatment = (typeof ALL_TREATMENTS)[number];

function TreatmentIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  switch (type) {
    case "implant":
      return <ToothImplantIcon className={className} />;
    case "sparkle":
      return <ToothSparkleIcon className={className} />;
    case "rehab":
      return <FullMouthRehabIcon className={className} />;
    case "aligner":
      return <AlignerOrthodonticIcon className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

function TreatmentDetailsModal({ treatment }: { treatment: Treatment }) {
  return (
    <DialogContent className="max-w-xl bg-white border border-gray-100 text-[#10233F] p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0284C7] text-white shadow-sm">
          <TreatmentIcon type={treatment.iconType} className="h-6 w-6" />
        </div>
        <div>
          <DialogTitle className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#10233F]">
            {treatment.name}
          </DialogTitle>
          <div className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase mt-0.5">
            Acharya Dental Specialized Care
          </div>
        </div>
      </div>

      <DialogDescription className="sr-only">
        Clinical treatment details and procedure flow for {treatment.name}
      </DialogDescription>

      <div className="mt-5 space-y-4">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {treatment.longDescription}
        </p>

        {treatment.process && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
              Clinical Process &amp; Methodology
            </h4>
            <div className="space-y-2">
              {treatment.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0284C7]/10 text-[#0284C7] text-[0.68rem] font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE4A] text-[#0B162A] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <Calendar className="h-4 w-4" />
            Book Consultation
          </a>
        </div>
      </div>
    </DialogContent>
  );
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Dialog>
      <div className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(16,35,63,0.14)]">
        {/* Top Section: Photo with Circular Blue Icon Badge */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Circular Blue Icon Badge overlapping top-left */}
          <div className="absolute top-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0284C7] text-white shadow-lg shadow-[#0284C7]/30 border-2 border-white">
            <TreatmentIcon type={treatment.iconType} className="h-5 w-5" />
          </div>
        </div>

        {/* Bottom Section: Title, Description, Gold Learn More */}
        <div className="p-6 flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-[var(--font-playfair)] text-xl sm:text-2xl font-bold text-[#10233F]">
              {treatment.name}
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {treatment.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs sm:text-[0.78rem] font-bold uppercase tracking-wider text-[#C89B48] hover:text-[#A87B28] transition-colors group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </DialogTrigger>
          </div>
        </div>
      </div>

      <TreatmentDetailsModal treatment={treatment} />
    </Dialog>
  );
}

export function TreatmentShowcase() {
  const [allTreatmentsOpen, setAllTreatmentsOpen] = React.useState(false);

  return (
    <section
      id="treatments"
      aria-label="Our Signature Treatments"
      className="py-20 lg:py-28 bg-white text-[#10233F]"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-14 border-b border-gray-100">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0284C7] uppercase">
              Our Signature Treatments
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] tracking-tight mt-2">
              Advanced Care. Beautiful Results.
            </h2>
          </div>

          {/* Explore All Treatments Dialog Trigger */}
          <Dialog open={allTreatmentsOpen} onOpenChange={setAllTreatmentsOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0284C7] hover:text-[#0369A1] transition-colors group self-start sm:self-auto"
              >
                <span>Explore All Treatments</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl bg-white border border-gray-100 text-[#10233F] p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              <DialogTitle className="font-[var(--font-playfair)] text-3xl font-bold text-[#10233F]">
                All Treatments &amp; Dental Specialties
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 mt-1">
                Explore our full suite of general, cosmetic, restorative, and surgical dental services.
              </DialogDescription>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ALL_TREATMENTS.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-xl border border-gray-100 hover:border-[#0284C7]/40 hover:bg-[#F0F9FF]/30 transition-all flex items-start gap-3.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0284C7]/10 text-[#0284C7]">
                      <TreatmentIcon type={t.iconType} className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-[var(--font-playfair)] text-base font-bold text-[#10233F]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {t.tagline || t.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* 4 Signature Treatment Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SIGNATURE_TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentShowcase;
