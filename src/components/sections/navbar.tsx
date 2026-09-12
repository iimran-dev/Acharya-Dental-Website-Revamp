"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, Calendar, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/site/icons";
import { NAV_LINKS, BRAND } from "@/lib/content";
import { cn, assetPath } from "@/lib/utils";

const SCROLL_THRESHOLD = 40;

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-[#071120]/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2"
          : "bg-[#081225] sm:bg-[#081225]/95 sm:backdrop-blur-sm border-b border-white/10 py-2.5 sm:py-3"
      )}
      aria-label="Site header"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* =========================================================
            1. Left: Official Brand Logo (Compact & Crisp)
            ========================================================= */}
        <Link
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center shrink-0 focus:outline-none group pr-2"
          aria-label="Acharya Dental — Return to top"
        >
          <img
            src={assetPath("/images/acharyadental/officail-logo-light.png")}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = assetPath(
                "/images/acharyadental/officail-logo.png"
              );
            }}
            alt="Acharya Dental - Advanced Dentistry. Simplified."
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:opacity-90",
              scrolled ? "h-8 sm:h-9" : "h-8 sm:h-9 lg:h-10"
            )}
            loading="eager"
          />
        </Link>

        {/* =========================================================
            2. Center: Sequential Navigation Links (Single-Line, No Dropdowns)
            Sequence matches page.tsx section order:
            Specialists -> Treatments -> Why Us -> Gallery -> 
            International -> Testimonials -> The Clinic -> Contact
            ========================================================= */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2.5 flex-1 mx-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="shrink-0 whitespace-nowrap py-1.5 px-2 rounded-md text-[11px] 2xl:text-xs font-semibold tracking-[0.08em] uppercase text-white/80 hover:text-[#D4AF37] hover:bg-white/[0.05] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* =========================================================
            3. Right: Contact Direct Lines & Action CTA
            ========================================================= */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0 pl-2">
          {/* Phone Link */}
          <a
            href={BRAND.phonePrimaryHref}
            className="whitespace-nowrap shrink-0 flex items-center gap-1.5 text-[11px] xl:text-xs font-medium text-white/90 hover:text-[#D4AF37] transition-colors group"
            title="Call Acharya Dental Front Desk"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B162A] transition-all">
              <Phone className="h-3 w-3" />
            </span>
            <span className="tracking-wide whitespace-nowrap">+91 44 4383 1000</span>
          </a>

          {/* Hairline Divider */}
          <span className="h-3.5 w-px bg-white/20 shrink-0" aria-hidden="true" />

          {/* WhatsApp Direct */}
          <a
            href={BRAND.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap shrink-0 flex items-center gap-1.5 text-[11px] xl:text-xs font-medium text-white/90 hover:text-[#25D366] transition-colors group"
            title="Chat with Acharya Dental on WhatsApp"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
            <span className="whitespace-nowrap">WhatsApp Us</span>
          </a>
        </div>

        {/* =========================================================
            4. Mobile & Tablet Drawer Menu Trigger
            ========================================================= */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="whitespace-nowrap px-3 py-1.5 rounded-md bg-[#D4AF37] text-[#0B162A] text-[0.7rem] font-bold uppercase tracking-wider shadow-sm active:scale-95"
          >
            Book
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open mobile navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-[#081225] border-l border-white/10 text-white p-6"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Acharya Dental Menu</SheetTitle>
              </SheetHeader>

              <div className="flex h-full flex-col justify-between pt-2 pb-6">
                <div>
                  {/* Drawer Brand Header */}
                  <div className="pb-4 border-b border-white/10">
                    <img
                      src={assetPath("/images/acharyadental/officail-logo-light.png")}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = assetPath(
                          "/images/acharyadental/officail-logo.png"
                        );
                      }}
                      alt="Acharya Dental"
                      className="h-8 w-auto object-contain"
                    />
                  </div>

                  {/* Drawer Navigation Links in exact page sequence */}
                  <nav className="mt-5 flex flex-col gap-1">
                    {NAV_LINKS.map((link, idx) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-white/85 hover:text-[#D4AF37] hover:bg-white/5 transition-colors whitespace-nowrap"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-[0.65rem] text-[var(--gold)] font-mono">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span>{link.label}</span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-white/30" />
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* Drawer Footer Actions */}
                <div className="flex flex-col gap-2.5 pt-5 border-t border-white/10">
                  <a
                    href={BRAND.phonePrimaryHref}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 bg-white/5 text-xs font-semibold text-white hover:border-[#D4AF37] whitespace-nowrap"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                    Call +91 44 4383 1000
                  </a>
                  <a
                    href={BRAND.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-xs font-semibold text-white whitespace-nowrap"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    WhatsApp Us
                  </a>
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#0B162A] shadow-md whitespace-nowrap"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Consultation
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
