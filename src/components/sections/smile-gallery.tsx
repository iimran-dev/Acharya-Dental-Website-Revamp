"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/utils";

export function SmileGallery() {
  const cases = [
    {
      id: "case-1",
      title: "Full Arch Realignment & Whitening",
      before: assetPath("/images/cases/case-1-before.jpg"),
      after: assetPath("/images/cases/case-1-after.jpg"),
    },
    {
      id: "case-2",
      title: "Porcelain Veneers & Diastema Closure",
      before: assetPath("/images/cases/case-2-before.jpg"),
      after: assetPath("/images/cases/case-2-after.jpg"),
    },
    {
      id: "case-3",
      title: "Comprehensive Restorative Rehabilitation",
      before: assetPath("/images/cases/case-3-before.jpg"),
      after: assetPath("/images/cases/case-3-after.jpg"),
    },
  ];

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

        {/* 3 Cases Grid / Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200/70"
            >
              {/* Side-by-side Before & After split presentation */}
              <div className="relative aspect-[16/10] w-full grid grid-cols-2 overflow-hidden bg-gray-100">
                {/* Before side */}
                <div className="relative h-full w-full border-r border-white/60 overflow-hidden">
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

              {/* Title below */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                <span className="font-[var(--font-playfair)] text-sm sm:text-base font-bold text-[#10233F]">
                  {c.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmileGallery;
