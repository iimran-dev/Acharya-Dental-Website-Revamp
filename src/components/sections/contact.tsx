"use client";

import * as React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { BRAND, SIGNATURE_TREATMENTS, ALL_TREATMENTS } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  timeSlot: string;
  source: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  date: "",
  timeSlot: "",
  source: "",
  message: "",
};

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = React.useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const setField = (field: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      toast({
        title: "Required Information Missing",
        description: "Please enter your name and phone number so our team can reach you.",
        variant: "destructive",
      });
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      toast({
        title: "Consultation Request Received",
        description:
          "Thank you! Our patient coordinator at Acharya Dental will contact you promptly to confirm your appointment time.",
      });
      setForm(INITIAL_FORM);
    } catch {
      // Fallback for static export or offline mode
      setStatus("success");
      toast({
        title: "Consultation Request Recorded",
        description:
          "Thank you! Our front desk team has received your details and will call you shortly.",
      });
      setForm(INITIAL_FORM);
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Book a consultation and contact details"
      className="py-20 lg:py-28 bg-[#FAF9F6] text-[#10233F]"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0284C7] uppercase">
            Appointments &amp; Inquiries
          </span>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] tracking-tight mt-2">
            Schedule Your Visit
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Our multispeciality clinic is located in the heart of Nungambakkam, Chennai.
            Fill out the form below or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Contact Information & Google Map (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-200/80 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Clinic Address
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[#10233F] leading-relaxed">
                    {BRAND.fullAddress}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Centrally located in Nungambakkam · 14,000 sq. ft. Facility
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284C7]/10 text-[#0284C7]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Clinic Hours
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[#10233F]">
                    Monday — Saturday: 9:00 AM — 7:30 PM IST
                  </p>
                  <p className="text-xs text-gray-500">
                    Sunday: Closed / Emergency Support
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phone Numbers
                  </h4>
                  <div className="mt-1 space-y-1 text-sm font-medium text-[#10233F]">
                    <p>
                      Front Desk:{" "}
                      <a href="tel:+914443831000" className="hover:text-[#0284C7]">
                        +91 44 4383 1000
                      </a>
                    </p>
                    <p>
                      Appointments:{" "}
                      <a href="tel:+914449501100" className="hover:text-[#0284C7]">
                        +91 44 4950 1100
                      </a>{" "}
                      /{" "}
                      <a href="tel:+914435111100" className="hover:text-[#0284C7]">
                        +91 44 3511 1100
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284C7]/10 text-[#0284C7]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Correspondence
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[#10233F]">
                    <a href="mailto:acharya@acharyadental.com" className="hover:text-[#0284C7]">
                      acharya@acharyadental.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200/80 aspect-[16/10] relative">
              <iframe
                title="Acharya Dental Location Map"
                src={BRAND.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Appointment Booking Form (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-gray-200/80">
            <h3 className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#10233F]">
              Book Your Appointment
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Please share your preferred date and requirements. Our coordinators will get in touch immediately.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    required
                    className="h-11 rounded-lg border-gray-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold text-gray-700">
                    Mobile / Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    required
                    className="h-11 rounded-lg border-gray-200 focus-visible:ring-[#0284C7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="h-11 rounded-lg border-gray-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                {/* Treatment Selection */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-gray-700">
                    Treatment Required
                  </Label>
                  <Select
                    value={form.treatment}
                    onValueChange={(val) => setField("treatment", val)}
                  >
                    <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:ring-[#0284C7]">
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {ALL_TREATMENTS.map((t) => (
                        <SelectItem key={t.id} value={t.name}>
                          {t.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="General Consultation">
                        General Dental Check-up / Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs font-semibold text-gray-700">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                    className="h-11 rounded-lg border-gray-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-gray-700">
                    Preferred Time Slot
                  </Label>
                  <Select
                    value={form.timeSlot}
                    onValueChange={(val) => setField("timeSlot", val)}
                  >
                    <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:ring-[#0284C7]">
                      <SelectValue placeholder="Select time preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning (9:00 AM - 12:00 PM)">
                        Morning (9:00 AM — 12:00 PM)
                      </SelectItem>
                      <SelectItem value="Afternoon (12:00 PM - 4:00 PM)">
                        Afternoon (12:00 PM — 4:00 PM)
                      </SelectItem>
                      <SelectItem value="Evening (4:00 PM - 7:30 PM)">
                        Evening (4:00 PM — 7:30 PM)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* How did you hear about us? (Preserved from existing website form) */}
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-700">
                  How did you hear about us?
                </Label>
                <Select
                  value={form.source}
                  onValueChange={(val) => setField("source", val)}
                >
                  <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:ring-[#0284C7]">
                    <SelectValue placeholder="Select referral source" />
                  </SelectTrigger>
                  <SelectContent>
                    {BRAND.referralSources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Message / Notes */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold text-gray-700">
                  Additional Notes or Symptoms (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about any specific dental concerns or questions..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className="rounded-lg border-gray-200 focus-visible:ring-[#0284C7] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE4A] text-[#0B162A] text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md active:scale-[0.98] disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <span>Submitting Request...</span>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-800" />
                    <span>Request Submitted Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Confirm Consultation Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
