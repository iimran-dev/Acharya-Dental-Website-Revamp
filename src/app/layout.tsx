import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import { BASE_PATH } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Acharya Dental — 50 Years of Trusted Dental Excellence | Chennai",
  description:
    "Acharya Dental is one of India's most trusted dental institutions. Advanced dentistry in Chennai for families and international patients — 50+ years of heritage, world-class specialists, and modern clinical technology.",
  keywords: [
    "Acharya Dental",
    "dental clinic Chennai",
    "best dentist Chennai",
    "dental implants India",
    "smile makeover",
    "international dental patients India",
    "luxury dental clinic",
    "orthodontics Chennai",
  ],
  authors: [{ name: "Acharya Dental" }],
  openGraph: {
    title: "Acharya Dental — 50 Years of Trusted Dental Excellence",
    description:
      "Advanced dentistry in Chennai for families and international patients. 50+ years of heritage, world-class specialists, modern technology.",
    siteName: "Acharya Dental",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acharya Dental — 50 Years of Trusted Dental Excellence",
    description:
      "Advanced dentistry in Chennai for families and international patients.",
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico` },
      { url: `${BASE_PATH}/icon.png`, type: "image/png" },
    ],
    shortcut: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/icon.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#10233F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* min-h-screen flex-col ensures the footer sticks to the bottom of
            the viewport on short pages and is pushed down naturally on long
            pages (per layout guidance: sticky-footer requirement). */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
