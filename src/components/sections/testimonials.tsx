"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Star, User, Check } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/lib/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ---------------------------------------------------------------
   Testimonials — compact social proof showcase.
   - Minimal vertical height (py-10 sm:py-12 md:py-14)
   - Default profile avatar icons instead of person photos
   - Restrained quote card with gold accent, verified patient pill,
     5-star rating, and compact pagination controls
   - Auto-slides every 5s; pauses on interaction and resumes after 8s
   --------------------------------------------------------------- */

type Testimonial = (typeof TESTIMONIALS)[number];

const AUTOPLAY_MS = 5000;
const RESUME_MS = 8000;
const TRANSITION = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

function GoogleRatingBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1 shadow-2xs"
      aria-label={`${BRAND.rating} out of 5 on ${BRAND.ratingPlatform}`}
    >
      <span
        aria-hidden="true"
        className="grid h-4 w-4 place-items-center rounded-full bg-[var(--navy)] font-[var(--font-inter)] text-[0.6rem] font-bold text-white"
      >
        G
      </span>
      <span className="font-[var(--font-inter)] text-[0.72rem] font-bold text-[var(--ink)]">
        {BRAND.rating}
      </span>
      <span aria-hidden="true" className="flex items-center">
        <Star className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" strokeWidth={0} />
      </span>
      <span className="font-[var(--font-inter)] text-[0.68rem] font-medium text-[var(--ink-muted)]">
        {BRAND.ratingPlatform}
      </span>
    </div>
  );
}

function DefaultProfileAvatar({ name }: { name: string }) {
  return (
    <div className="relative flex-shrink-0" aria-hidden="true">
      <div className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold-soft)] shadow-xs">
        <User className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-[var(--gold)]" strokeWidth={1.75} />
      </div>
      <span
        title="Verified patient"
        className="absolute -bottom-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full border border-white bg-emerald-600 text-white shadow-2xs"
      >
        <Check className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
    </div>
  );
}

function VideoTestimonialDialog({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group/v inline-flex items-center gap-1.5 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/[0.06] px-3 py-1 font-[var(--font-inter)] text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--navy)] transition-all duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)]/15"
          aria-label={`Watch ${testimonial.name}'s video testimonial`}
        >
          <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-[var(--gold)] text-[var(--navy)] transition-transform group-hover/v:scale-105">
            <Play className="h-2.5 w-2.5 fill-[var(--navy)]" strokeWidth={0} aria-hidden="true" />
          </span>
          Watch video
        </button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden border-[var(--gold)]/25 bg-[var(--navy)] p-0 sm:max-w-[540px]">
        <div
          aria-hidden="true"
          className="h-0.5 w-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold)]/50 to-transparent"
        />
        <DialogTitle className="sr-only">{testimonial.name} — video testimonial</DialogTitle>
        <DialogDescription className="sr-only">
          A short video testimonial from {testimonial.name}, {testimonial.context}.
        </DialogDescription>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#0B1B30] via-[#132c4e] to-[#1a385f] p-6 flex flex-col items-center justify-center text-center">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)]/60 text-[var(--gold)] backdrop-blur-xs mb-3">
            <Play className="h-6 w-6 fill-[var(--gold)]" strokeWidth={0} />
          </div>
          <p className="font-[var(--font-playfair)] text-lg text-white font-medium">{testimonial.name}</p>
          <p className="mt-1 font-[var(--font-inter)] text-xs text-[var(--gold-soft)] tracking-wider uppercase">
            {testimonial.context}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ActiveTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Top row: Default Profile + Info + Stars */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)]/60 pb-4">
        <div className="flex items-center gap-3.5">
          <DefaultProfileAvatar name={testimonial.name} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-[var(--font-playfair)] text-base sm:text-lg font-semibold text-[var(--navy)]">
                {testimonial.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-700 border border-emerald-200/70">
                Verified Patient
              </span>
            </div>
            <p className="font-[var(--font-inter)] text-xs text-[var(--ink-muted)]">
              {testimonial.context}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {testimonial.hasVideo && <VideoTestimonialDialog testimonial={testimonial} />}
          <div className="flex items-center gap-1 bg-amber-50/70 border border-amber-200/50 rounded-full px-2.5 py-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < testimonial.rating
                      ? "h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]"
                      : "h-3.5 w-3.5 text-[var(--ink-muted)]/30"
                  }
                  strokeWidth={0}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-[var(--font-inter)] text-xs font-bold text-amber-900 ml-0.5">
              {testimonial.rating}.0
            </span>
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="relative pl-3.5 border-l-2 border-[var(--gold)]">
        <p className="font-[var(--font-playfair)] italic text-sm sm:text-base md:text-[1.02rem] text-[var(--ink)] leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const lastInteractionRef = React.useRef<number>(0);

  const count = TESTIMONIALS.length;
  const go = React.useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );
  const next = React.useCallback(() => go(index + 1), [go, index]);
  const prev = React.useCallback(() => go(index - 1), [go, index]);

  const markInteraction = React.useCallback(() => {
    lastInteractionRef.current = Date.now();
    setIsPaused(true);
  }, []);

  React.useEffect(() => {
    if (isPaused) {
      const t = window.setInterval(() => {
        if (Date.now() - lastInteractionRef.current >= RESUME_MS) {
          setIsPaused(false);
        }
      }, 1000);
      return () => window.clearInterval(t);
    }
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [isPaused, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      markInteraction();
      prev();
    } else if (e.key === "ArrowRight") {
      markInteraction();
      next();
    }
  };

  const active = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      aria-label="Patient testimonials — stories from Acharya Dental patients"
      className="py-10 sm:py-12 md:py-14 bg-[#FAF9F6] border-y border-[var(--border)]/50 scroll-mt-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Compact Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-7">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-px w-5 bg-[var(--gold)]" />
              <span className="font-[var(--font-inter)] text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                PATIENT STORIES
              </span>
            </div>
            <h2 className="font-[var(--font-playfair)] text-xl sm:text-2xl md:text-[1.75rem] font-medium text-[var(--navy)] tracking-tight">
              Trusted by Generations of Patients
            </h2>
          </div>
          <GoogleRatingBadge />
        </div>

        {/* Compact Testimonial Card */}
        <div
          className="relative rounded-2xl border border-[var(--gold)]/25 bg-white p-5 sm:p-7 shadow-[0_4px_20px_-4px_rgba(11,27,48,0.06)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={TRANSITION}
            >
              <ActiveTestimonial testimonial={active} />
            </motion.div>
          </AnimatePresence>

          {/* Compact Carousel Footer Controls */}
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)]/50 pt-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => {
                    markInteraction();
                    go(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1} of ${TESTIMONIALS.length}`}
                  aria-current={i === index ? "true" : undefined}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-[var(--gold)] transition-all duration-300"
                      : "h-2 w-2 rounded-full bg-[var(--ink-muted)]/25 hover:bg-[var(--gold)]/60 transition-all duration-300"
                  }
                />
              ))}
            </div>

            {/* Prev / Next Buttons & Counter */}
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-inter)] text-xs font-semibold tracking-wider text-[var(--ink-muted)]">
                <span className="text-[var(--navy)]">{String(index + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                <span>{String(TESTIMONIALS.length).padStart(2, "0")}</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    markInteraction();
                    prev();
                  }}
                  aria-label="Previous testimonial"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    markInteraction();
                    next();
                  }}
                  aria-label="Next testimonial"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
