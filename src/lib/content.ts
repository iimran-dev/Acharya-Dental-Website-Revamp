import { assetPath } from "@/lib/utils";

/**
 * Central factual content + data source for Acharya Dental.
 * Source: acharyadental.com and acharya_dental_raw_content_data.
 * All clinical and brand differentiators are preserved with 100% factual accuracy.
 */

export const BRAND = {
  name: "Acharya Dental",
  tagline: "ADVANCED DENTISTRY. SIMPLIFIED.",
  subtitle: "Multispeciality Dental Practice",
  founded: 1974,
  legacyYears: "50+",
  founder: "Dr. Vijailakshmi Acharya",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  facilityArea: "14,000 sq. ft.",
  operatoriesCount: 15,
  phonePrimary: "+91 44 4383 1000",
  phonePrimaryHref: "tel:+914443831000",
  phones: [
    { label: "Front Desk & Appointments", number: "+91 44 4383 1000", href: "tel:+914443831000" },
    { label: "Clinic Main Line 1", number: "+91 44 4950 1100", href: "tel:+914449501100" },
    { label: "Clinic Main Line 2", number: "+91 44 3511 1100", href: "tel:+914435111100" },
    { label: "Clinic Line 3", number: "+91 44 2827 4114", href: "tel:+914428274114" },
    { label: "Clinic Line 4", number: "+91 44 2822 4114", href: "tel:+914428224114" },
  ],
  whatsapp: "+91 44 4950 1100",
  whatsappHref: "https://wa.me/914449501100?text=Hello%20Acharya%20Dental,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation.",
  email: "acharya@acharyadental.com",
  doctorEmails: {
    vijailakshmi: "acharya@acharyadental.com",
    varun: "varun@acharyadental.com",
  },
  addressLine1: "No. 5, Thirumurthy Nagar 6th Street",
  addressLine2: "Nungambakkam, Chennai",
  addressLine3: "Tamil Nadu 600034, India",
  fullAddress: "No. 5, Thirumurthy Nagar 6th Street, Nungambakkam, Chennai, Tamil Nadu 600034, India",
  mapQuery: "Acharya Dental, No. 5, Thirumurthy Nagar 6th Street, Nungambakkam, Chennai, Tamil Nadu 600034",
  mapEmbedUrl: "https://maps.google.com/maps?q=Acharya%20Dental%2C%20Nungambakkam%2C%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hours: [
    { day: "Monday — Saturday", time: "9:00 AM — 7:30 PM IST" },
    { day: "Sunday", time: "Closed / Emergency On-Call" },
  ],
  rating: "4.8",
  ratingOutOf: "5.0",
  reviewsCount: "957+",
  ratingPlatform: "Google Reviews",
  airportCode: "MAA (Chennai International Airport)",
  referralSources: [
    "Google Search",
    "Referrals / Friend or Family",
    "Facebook",
    "Instagram",
    "Just Dial",
  ],
} as const;

export const NAV_LINKS = [
  { label: "ABOUT US", href: "#about" },
  {
    label: "TREATMENTS",
    href: "#treatments",
    hasDropdown: true,
  },
  { label: "INTERNATIONAL PATIENTS", href: "#international" },
  { label: "GALLERY", href: "#gallery" },
  { label: "TESTIMONIALS", href: "#testimonials" },
] as const;

export const HERO_METRICS = [
  { value: 50, suffix: "+", label: "YEARS LEGACY", decimals: 0 },
  { value: 5000, suffix: "+", label: "SMILES RESTORED", decimals: 0 },
  { value: 1000, suffix: "+", label: "INTERNATIONAL PATIENTS", decimals: 0 },
] as const;

export const HERO_BADGE = {
  rating: "4.8/5",
  stars: 5,
  reviewsText: "950+ Google Reviews",
  operatoriesText: "15+ Operatories",
  specialistsText: "U.S. Trained Specialists",
} as const;

export const SPECIALISTS = [
  {
    id: "dr-vijailakshmi-acharya",
    name: "Dr. Vijailakshmi Acharya",
    credentials: "M.D.S., F.I.C.D., ASSOCIATE FELLOW (U.S.A.)",
    role: "Founder & Director — Implantologist, Cosmetologist, Endodontist",
    image: assetPath("/images/acharyadental/vijailakshmi-acharya.png"),
    highlights: [
      "Prosthodontist & Implantologist",
      "40+ Years of Experience",
      "Specialist in Full Mouth Rehabilitation",
    ],
    education: [
      "Bachelor of Dental Surgery — University of Mumbai",
      "Master’s degree in Endodontics and Conservative Dentistry — Madras University",
    ],
    experienceDetails: [
      "Nearly 50 years of clinical practice since founding Acharya Dental in 1974",
      "Extensive training in Implantology in Sweden and Japan",
      "Trained in Cosmetic Dentistry in India and internationally",
      "Among the pioneering dentists from India trained in advanced Implantology",
    ],
    activities: [
      "Lectures extensively on Practice Management, Esthetic Dentistry, Lasers, and Infection Control",
      "Active in public dental-health education and continuing dental education programs",
    ],
    memberships: [
      "Associate Fellow — American Academy of Implant Dentistry (AAID)",
      "Fellow — International College of Dentists (FICD)",
      "Member — Pierre Fauchard Academy",
      "Member — American Dental Association (ADA)",
      "Member — Indian Dental Association (IDA)",
    ],
    phone: "+91-44-35111100",
    email: "acharya@acharyadental.com",
    theme: "navy",
  },
  {
    id: "dr-varun-acharya",
    name: "Dr. Varun Acharya",
    credentials: "B.D.S., M.S., F.A.C.P.",
    role: "Consultant Maxillofacial Prosthodontist & Implantologist",
    image: assetPath("/images/acharyadental/varun-acharya.png"),
    highlights: [
      "Prosthodontist & Implantologist",
      "Digital Smile Design Expert",
      "Specialist in Cosmetic & Implant Dentistry",
    ],
    education: [
      "Bachelor of Dental Surgery — Saveetha Dental College (Best Outgoing Student, top of BDS class)",
      "Four-year postgraduate Prosthodontic training — New York University College of Dentistry",
      "Fellowship in Maxillofacial Prosthetics and Oncologic Dentistry — University of Texas MD Anderson Cancer Center",
    ],
    experienceDetails: [
      "U.S. Board-Certified Maxillofacial Prosthodontist",
      "Recipient of the prestigious Adisman Award for outstanding graduating resident at NYU",
      "Famdent Outstanding Dentist of the Year (2018 & 2019)",
      "Implantologist of the Year (2021)",
      "Superstar 'Above & Beyond' Award (2022)",
    ],
    activities: [
      "Keynote speaker on full-arch restorations, digital workflow, and oncology dental rehabilitation",
      "Pioneering digital smile simulations and computer-guided implant surgery protocols",
    ],
    memberships: [
      "Fellow — American College of Prosthodontists (FACP)",
      "Diplomate — American Board of Prosthodontics",
      "Member — American Dental Association (ADA)",
      "Member — Indian Dental Association (IDA)",
    ],
    phone: "+91-44-49501100",
    email: "varun@acharyadental.com",
    theme: "light",
  },
] as const;

export const SIGNATURE_TREATMENTS = [
  {
    id: "dental-implants",
    name: "Dental Implants",
    tagline: "Permanent, natural-looking solutions for missing teeth.",
    description:
      "Permanent, natural-looking solutions for missing teeth.",
    image: assetPath("/images/acharyadental/dental-implants.webp"),
    iconType: "implant",
    badgeLabel: "Implants",
    longDescription:
      "Dental implants are a cornerstone of Acharya Dental's restorative excellence. Led by Dr. Vijailakshmi Acharya and Dr. Varun Acharya, our implantology protocols integrate 3D CBCT bone mapping, digital surgical guides, and customized biocompatible crowns to restore full chewing strength and natural smile aesthetics.",
    process: [
      "Comprehensive 3D radiographic assessment & bone density evaluation",
      "Digital precision implant planning & guided placement",
      "Osseointegration healing monitoring",
      "Final custom aesthetic restoration with ceramic crown",
    ],
  },
  {
    id: "smile-makeover",
    name: "Smile Makeover",
    tagline: "Transform your smile with minimal invasive, aesthetic treatments.",
    description:
      "Transform your smile with minimal invasive, aesthetic treatments.",
    image: assetPath("/images/acharyadental/teeth-whitening-1.webp"),
    iconType: "sparkle",
    badgeLabel: "Aesthetics",
    longDescription:
      "A personalized smile transformation combining Digital Smile Design, ultra-thin porcelain veneers, composite artistry, and clinical whitening. Every treatment is designed conservatively to respect your natural enamel while elevating your facial proportions and self-confidence.",
    process: [
      "Facial proportion analysis and digital aesthetic simulation",
      "Diagnostic mock-up to preview final outcome in your mouth",
      "Minimally invasive tooth preparation and custom impressions",
      "Precision cementation of master-crafted ceramic restorations",
    ],
  },
  {
    id: "full-mouth-rehab",
    name: "Full Mouth Rehabilitation",
    tagline: "Customized plans for complex dental problems for long-lasting results.",
    description:
      "Customized plans for complex dental problems for long-lasting results.",
    image: assetPath("/images/acharyadental/full-mouth-rehabilitation.webp"),
    iconType: "rehab",
    badgeLabel: "Rehabilitation",
    longDescription:
      "Comprehensive reconstruction for patients with severe tooth wear, collapsed bites, trauma, or multiple missing teeth. Under the specialized direction of U.S. board-certified Prosthodontist Dr. Varun Acharya, functional harmony and long-term joint health are restored through coordinated prosthodontic and implant treatments.",
    process: [
      "Full digital occlusal and jaw relation diagnostic workup",
      "Stepwise multidisciplinary rehabilitation plan",
      "Provisional restorations to test function, bite, and speech",
      "Delivery of durable, precision-engineered full-arch restorations",
    ],
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    tagline: "Braces & aligners for children, teens & adults.",
    description:
      "Braces & aligners for children, teens & adults.",
    image: assetPath("/images/acharyadental/invisalign.webp"),
    iconType: "aligner",
    badgeLabel: "Orthodontics",
    longDescription:
      "Advanced orthodontic solutions ranging from virtually invisible clear aligners to modern self-ligating ceramic braces. We correct crowding, spacing, and bite irregularities for children, adolescents, and adults with gentle, predictable tooth movement.",
    process: [
      "Digital intraoral scan for 3D orthodontic mapping",
      "Customized computer-planned aligner series or bracket positioning",
      "Scheduled milestone progress tracking and adjustments",
      "Long-term post-treatment retention for permanent results",
    ],
  },
] as const;

export const ALL_TREATMENTS = [
  ...SIGNATURE_TREATMENTS,
  {
    id: "teeth-cleaning",
    name: "Teeth Cleaning & Scaling",
    tagline: "Professional plaque, tartar and stain removal with ultrasonic precision.",
    description: "Thorough ultrasonic scaling, stain removal, and polishing to preserve gum health.",
    image: assetPath("/images/acharyadental/teeth-cleaning-1.webp"),
    iconType: "cleaning",
    badgeLabel: "Hygiene",
    longDescription: "Ultrasonic and manual scaling removes hardened tartar, bacterial biofilm, and deep stains, followed by gentle polishing. An essential foundation for lifelong oral wellness.",
    process: [
      "Periodontal health screening",
      "Ultrasonic tartar removal",
      "Enamel polishing and stain clearance",
      "Personalized preventive oral hygiene guidance",
    ],
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    tagline: "Chairside professional illumination for radiant natural brightness.",
    description: "Advanced chairside light-activated whitening system across four 15-minute cycles.",
    image: assetPath("/images/acharyadental/teeth-whitening-1.webp"),
    iconType: "sparkle",
    badgeLabel: "Whitening",
    longDescription: "Professional light-activated whitening gently lifts deep discolorations caused by coffee, tea, ageing, and diet, brightening your natural smile safely under specialist care.",
    process: [
      "Dental health and shade assessment",
      "Protective barrier application for gums",
      "Light-activated bleaching gel application (4 x 15-min cycles)",
      "Post-whitening shade verification and care advice",
    ],
  },
  {
    id: "crowns-bridges",
    name: "Crowns & Bridges",
    tagline: "Durable ceramic crowns and fixed bridges to restore damaged or missing teeth.",
    description: "High-strength zirconia and ceramic restorations crafted to look and feel like natural teeth.",
    image: assetPath("/images/acharyadental/crowns-bridges.webp"),
    iconType: "rehab",
    badgeLabel: "Restorative",
    longDescription: "Precision CAD/CAM designed crowns and multi-unit bridges that reinforce compromised teeth or replace missing teeth with exact marginal fit and lifelike translucency.",
    process: [
      "Diagnostic assessment and conservative tooth preparation",
      "Digital optical scan of dental arch",
      "Fabrication in state-of-the-art ceramic materials",
      "Precise clinical fitting and adhesive cementation",
    ],
  },
  {
    id: "clear-aligners",
    name: "Clear Aligners",
    tagline: "Discreet, removable orthodontic alignment engineered for modern lifestyles.",
    description: "Custom transparent aligners that gently straighten teeth without metal wires.",
    image: assetPath("/images/acharyadental/invisalign.webp"),
    iconType: "aligner",
    badgeLabel: "Aligners",
    longDescription: "Clear aligner therapy offers an invisible, removable orthodontic solution planned digitally from your initial scan through each phase of alignment.",
    process: [
      "Digital 3D simulation of planned movements",
      "Custom fabrication of clear aligner series",
      "Wear aligners 20–22 hours daily with periodic tray switches",
      "Final aesthetic alignment review and retention",
    ],
  },
  {
    id: "oral-surgery",
    name: "Oral Surgery",
    tagline: "Specialist surgical care preserving natural dental structures whenever possible.",
    description: "Wisdom teeth removal, cysts, corrective jaw procedures, and surgical care.",
    image: assetPath("/images/acharyadental/t3.jpg"),
    iconType: "implant",
    badgeLabel: "Surgery",
    longDescription: "Our oral surgical care philosophy prioritizes natural tooth preservation and gentle, minimally traumatic procedures including wisdom tooth impactions, cysts, and jaw corrective surgery.",
    process: [
      "Pre-operative 3D imaging and medical history review",
      "Detailed procedure and recovery discussion",
      "Comfortable surgical execution under local anaesthesia / sedation",
      "Comprehensive post-operative care and emergency contact support",
    ],
  },
  {
    id: "fillings",
    name: "Tooth Fillings",
    tagline: "Natural-shade composite restorations that blend seamlessly with enamel.",
    description: "Light-cured, layer-by-layer composite restorations replacing decayed tooth structure.",
    image: assetPath("/images/acharyadental/t4.jpg"),
    iconType: "cleaning",
    badgeLabel: "Fillings",
    longDescription: "Modern biocompatible tooth-colored composite resins placed layer-by-layer to seal decay and rebuild tooth strength with imperceptible margins.",
    process: [
      "Gentle removal of decayed tissue",
      "Conditioning and priming of healthy tooth structure",
      "Layer-by-layer placement of composite resin",
      "Light curing and final high-gloss contour polishing",
    ],
  },
] as const;

export const TREATMENTS = SIGNATURE_TREATMENTS;

export const WHY_ACHARYA = [
  {
    number: "01",
    title: "50+ Years Legacy",
    description: "Half a century of trust, care and clinical excellence.",
    icon: "Award",
  },
  {
    number: "02",
    title: "1000+ International Patients",
    description: "Patients from 25+ countries trust us for their smiles.",
    icon: "Globe2",
  },
  {
    number: "03",
    title: "Digital Treatment Planning",
    description: "Advanced technology for precise diagnosis and predictable results.",
    icon: "ScanLine",
  },
  {
    number: "04",
    title: "World-Class Sterilization",
    description: "International standards of hygiene and sterilization protocols.",
    icon: "ShieldCheck",
  },
] as const;

export const SMILE_CASES = [
  {
    id: "case-1",
    title: "Smile Makeover with Porcelain Veneers",
    tag: "Aesthetic Restoration",
    before: assetPath("/images/cases/case-1-before.jpg"),
    after: assetPath("/images/cases/case-1-after.jpg"),
    story: "A patient with worn, irregular and discolored enamel seeking a natural, luminous smile.",
    treatment: "Ultra-thin porcelain veneers, conservative prep, and minor gingival contouring.",
    outcome: "A radiant, confident smile respecting the patient's individual facial harmony.",
  },
  {
    id: "case-2",
    title: "Porcelain Veneers & Diastema Closure",
    tag: "Smile Makeover",
    before: assetPath("/images/cases/case-2-before.jpg"),
    after: assetPath("/images/cases/case-2-after.jpg"),
    story: "Patient presented with noticeable anterior spacing (diastema), chipped incisal edges, and irregular dental alignment.",
    treatment: "Digital smile design, conservative enamel preparation, and custom master-crafted porcelain veneers.",
    outcome: "Seamless space closure, perfectly harmonized smile arc, and radiant natural translucency.",
  },
  {
    id: "case-3",
    title: "Comprehensive Restorative & Implant Rehabilitation",
    tag: "Implant & Restorative",
    before: assetPath("/images/cases/case-3-before.jpg"),
    after: assetPath("/images/cases/case-3-after.jpg"),
    story: "Patient presented with missing upper lateral tooth, severe wear on incisal surfaces, crowding, and collapsed bite.",
    treatment: "Digital implant replacement, multi-unit aesthetic ceramic crowns, and comprehensive occlusal realignment.",
    outcome: "Full masticatory rehabilitation, harmonious anterior guidance, and a confident, natural aesthetic smile.",
  },
] as const;

export const INTERNATIONAL_FEATURES = [
  {
    title: "Airport Pickup",
    description: "Dedicated arrival assistance from Chennai International Airport (MAA) to your stay.",
    icon: "Plane",
  },
  {
    title: "Accommodation Assistance",
    description: "Convenient partnership arrangements with reputable hotels near our Nungambakkam clinic.",
    icon: "Hotel",
  },
  {
    title: "Fast-track Treatment",
    description: "Pre-coordinated, condensed appointment schedules tailored to your travel itinerary.",
    icon: "CalendarClock",
  },
  {
    title: "Virtual Consultation",
    description: "Preliminary video assessment and digital treatment roadmap before you board your flight.",
    icon: "Video",
  },
] as const;

export const ACCREDITATIONS = [
  {
    name: "American Academy of Implant Dentistry",
    logo: assetPath("/images/acharyadental/aaid.webp"),
    desc: "Associate Fellow Accredited",
  },
  {
    name: "Indian Dental Association",
    logo: assetPath("/images/acharyadental/ida.org_.webp"),
    desc: "Active Member Clinic",
  },
  {
    name: "International College of Dentists",
    logo: assetPath("/images/acharyadental/icd.webp"),
    desc: "FICD Fellowship",
  },
  {
    name: "American College of Prosthodontists",
    logo: assetPath("/images/acharyadental/american-college-of-prosthodontics.webp"),
    desc: "Fellow Member",
  },
  {
    name: "American Board of Prosthodontics",
    logo: assetPath("/images/acharyadental/abpros.webp"),
    desc: "Board-Certified Specialists",
  },
] as const;

export const CLINIC_GALLERY = [
  {
    src: assetPath("/images/acharyadental/t1.jpg"),
    alt: "Acharya Dental reception desk with backlit logo wall in marble foyer",
    label: "Reception & Lounge",
  },
  {
    src: assetPath("/images/acharyadental/t2.jpg"),
    alt: "Modern dental operatory equipped with cutting-edge chair and digital displays",
    label: "Operatory Suite",
  },
  {
    src: assetPath("/images/acharyadental/t3.jpg"),
    alt: "Advanced surgical operatory with sterilization and monitor systems",
    label: "Surgical Operatory",
  },
  {
    src: assetPath("/images/acharyadental/t4.jpg"),
    alt: "Hygienic treatment room with ergonomic patient chair and sterile instruments",
    label: "Treatment Bay",
  },
  {
    src: assetPath("/images/acharyadental/t25.jpg"),
    alt: "Wide angle view of Acharya Dental modern clinic facility",
    label: "Clinic Facility",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ramesh Narayanan",
    context: "Chennai & Singapore · Patient for 25+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    quote:
      "My entire family has trusted Dr. Vijailakshmi Acharya since the 1980s. When Dr. Varun joined, the practice took modern digital dentistry to another level. The clinic is pristine, comforting, and unmatched in clinical perfection.",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Sarah Jenkins",
    context: "London, UK · International Patient",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
    quote:
      "Travelling from the UK to Chennai for full mouth implants was the best decision I ever made. The team arranged everything from airport pickup to my hotel. Treatment was virtually painless and completed on time. Absolutely world-class.",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Dr. K. Swaminathan",
    context: "Chennai · Orthodontics & Smile Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
    quote:
      "As a physician myself, what stands out to me most at Acharya Dental is their sterilization and evidence-based clinical discipline. There is zero compromise on hygiene, precision, and patient dignity.",
    rating: 5,
    hasVideo: false,
  },
] as const;
