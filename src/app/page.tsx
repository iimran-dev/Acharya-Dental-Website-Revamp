import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Specialists } from "@/components/sections/specialists";
import { TreatmentShowcase } from "@/components/sections/treatments";
import { WhyAcharya } from "@/components/sections/why-acharya";
import { SmileGallery } from "@/components/sections/smile-gallery";
import { InternationalPatients } from "@/components/sections/international-patients";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { ClinicExperience } from "@/components/sections/clinic-experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/site/mobile-sticky-cta";

/**
 * Acharya Dental — Homepage Revamp
 *
 * Sequence matches Acharya-Dental.png reference design:
 * 1. Navbar (Dark navy with Acharya logo, service dropdown, contact quick actions, and Book Appointment CTA)
 * 2. Hero (Cinematic operatory with "50 Years of Trusted Dental Excellence", 3 legacy stats, and floating Google Review card)
 * 3. Specialists (MEET OUR SPECIALISTS: Experience. Expertise. Compassion. — Dr. Vijailakshmi & Dr. Varun)
 * 4. TreatmentShowcase (OUR SIGNATURE TREATMENTS: Advanced Care. Beautiful Results. — 4 cards with blue circular icon badges)
 * 5. WhyAcharya (WHY PATIENTS CHOOSE ACHARYA DENTAL — dark navy luxury band)
 * 6. SmileGallery (SMILE TRANSFORMATIONS — Before & After comparison carousel)
 * 7. InternationalPatients (Panoramic sunset airplane wing banner with concierge details)
 * 8. AppointmentCTA (Ready for a Healthier, More Confident Smile? — reception lobby split consultation banner)
 * 9. Testimonials & ClinicExperience (Social proof & 14,000 sq. ft. facility showcase)
 * 10. Contact (Full appointment booking form & Nungambakkam map)
 * 11. Footer (Accreditation badges bar, doctor contacts, and legal info)
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* id="top" anchor lives inside Hero */}
        <Hero />
        <Specialists />
        <TreatmentShowcase />
        <WhyAcharya />
        <SmileGallery />
        <InternationalPatients />
        <AppointmentCTA />
        <Testimonials />
        <ClinicExperience />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
      {/* Spacer so the fixed mobile sticky CTA does not cover the footer bottom bar */}
      <div className="h-24 md:hidden" aria-hidden={true} />
    </>
  );
}
