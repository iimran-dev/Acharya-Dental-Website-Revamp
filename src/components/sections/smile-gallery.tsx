"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { SMILE_CASES } from "@/lib/content";
import { cn, assetPath } from "@/lib/utils";

export function SmileGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cases = [
    {
      id: "case-1",
      title: "Full Arch Realignment & Whitening",
      before: assetPath("/images/cases/case-1-before.jpg"),
      after: assetPath("/images/cases/case-1-after.jpg"),
    },
    {
      id: "case-2",
      title: "Aesthetic Porcelain Veneer Transformation",
      before: assetPath("/images/cases/case-2-before.jpg"),
      after: assetPath("/images/cases/case-2-after.jpg"),
    },
    {
      id: "case-3",
      title: "Comprehensive Restorative Rehabilitation",
      before: assetPath("/images/cases/case-1-before.jpg"),
      after: assetPath("/images/cases/case-2-after.jpg"),
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cases.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < cases.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      aria-label="Smile Transformations"
      className="py-20 lg:py-28 bg-[#FAF9F6] text-[#10233F]"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        {/* Header matching reference mockup */}
        <div className="flex items-center justify-between pb-10 border-b border-gray-200/80">
          <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-[#10233F] uppercase">
            Smile Transformations
          </h2>

          <a
            href="#gallery"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0284C7] hover:text-[#0369A1] transition-colors group"
          >
            <span>View All Cases</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative mt-12">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous case"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-[#0284C7] hover:border-[#0284C7] transition-colors focus:outline-none"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next case"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-[#0284C7] hover:border-[#0284C7] transition-colors focus:outline-none"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* 3 Cases Grid / Row (matching the 3 cards shown in reference mockup) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
            {cases.map((c, i) => (
              <div
                key={c.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200/70"
              >
                {/* Side-by-side Before & After split presentation */}
                <div className="relative aspect-[16/10] w-full grid grid-cols-2 overflow-hidden bg-black">
                  {/* Before side */}
                  <div className="relative h-full w-full border-r border-white/20 overflow-hidden">
                    <img
                      src={c.before}
                      alt="Before procedure"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[0.62rem] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                      Before
                    </span>
                  </div>

                  {/* After side */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={c.after}
                      alt="After procedure"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#D4AF37] text-[0.62rem] font-bold uppercase tracking-wider text-[#071120] shadow-sm">
                      After
                    </span>
                  </div>
                </div>

                {/* Optional interactive slider toggle below */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <span className="font-[var(--font-playfair)] text-sm sm:text-base font-bold text-[#10233F]">
                    {c.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to slide ${dot + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  dot === currentIndex
                    ? "w-6 bg-[#0284C7]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setCurrentIndex(dot % cases.length)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmileGallery;
