"use client";

import * as React from "react";

import { assetPath } from "@/lib/utils";

/* ---------------------------------------------------------------
   Acharya Dental Brand Monogram & Icons
   --------------------------------------------------------------- */

export function AcharyaLogo({
  className = "h-11",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <img
      src={assetPath(light ? "/images/acharyadental/officail-logo-light.png" : "/images/acharyadental/officail-logo.png")}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = assetPath("/images/acharyadental/officail-logo.png");
      }}
      alt="Acharya Dental - Advanced Dentistry. Simplified."
      className={`w-auto object-contain ${className}`}
      loading="eager"
    />
  );
}

export function GoogleGIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.4 7.5 23 12 23z"
      />
    </svg>
  );
}

export function OperatoryChairIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 4h3a2 2 0 0 1 2 2v3H4V6a2 2 0 0 1 1-2Z" />
      <path d="M4 9h16l-1 5H5L4 9Z" />
      <path d="M12 14v4" />
      <path d="M8 20h8" />
      <path d="M15 4h4a1 1 0 0 1 1 1v4" />
    </svg>
  );
}

export function SpecialistDoctorIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function ToothImplantIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3c-1.5 0-3 1.5-3 3.5 0 2.5 1.5 5 3 6.5l1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-6l1-1c1.5-1.5 3-4 3-6.5 0-2-1.5-3.5-3-3.5-1.5 0-2.5.8-3 1.8-.5-1-1.5-1.8-3-1.8Z" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

export function ToothSparkleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z" />
      <path d="M19 13l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
      <path d="M5 15l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7Z" />
    </svg>
  );
}

export function FullMouthRehabIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21a9 9 0 0 0 9-9c0-4-3-8-9-8s-9 4-9 8a9 9 0 0 0 9 9Z" />
      <path d="M8 12h8" />
      <path d="M9 9c0 1.5 1 3 3 3s3-1.5 3-3" />
      <path d="M9 15c0-1.5 1-3 3-3s3 1.5 3 3" />
    </svg>
  );
}

export function AlignerOrthodonticIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="6" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

export function WhatsAppIcon({
  className = "h-4 w-4",
  ariaHidden = true,
}: {
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={ariaHidden}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function StarRow({
  count = 5,
  className = "h-4 w-4",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${className} text-[#F59E0B] fill-[#F59E0B]`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l2.95 5.99 6.61.96-4.78 4.66 1.13 6.58L12 17.77l-5.91 3.11 1.13-6.58L2.44 9.95l6.61-.96L12 2z" />
        </svg>
      ))}
    </div>
  );
}
