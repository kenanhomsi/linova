// Data matching readdy.link design: Linova Clinic Istanbul
import laserDentistry from "@/public/Laser Dentistry.jpg";

const IMAGES = {
  hollywoodSmile: "/images/Hollywood Smile Makeover.jpeg",
  dentalVeneers: "/images/Dental Veneers.jpeg",
  teethWhitening: "/images/Teeth Whitening.jpeg",
  dentalImplants: "/images/dental-implants/pic1.jpeg",
  allOn4: "/images/all-in-4-6.jpeg",
  dentalCrowns: "/images/Dental Crowns.jpeg",
  digitalSmileDesign: "/images/digital-smile-design/pic1.jpeg",
  DCBCTImaging: "/images/xray-cbct2.jpeg",
  IntraoralScanning:"/images/Intraoral Scanning.jpeg"
} as const;




export const HERO = {
  badge: "Premium Dental Care in Istanbul",
  title: "Transform Your Smile Journey",
  titleHighlight: "Smile Journey",
  subtitle:
    "World-class dental treatments combining cutting-edge technology, expert care, and exceptional medical tourism experience in the heart of Istanbul",
  ctaPrimary: "Get Free Consultation",
  ctaSecondary: "Explore Services",
} as const;

export const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Patients" },
  { value: "50+", label: "Countries Served" },
  { value: "98%", label: "Satisfaction Rate" },
] as const;

export const EXPERTISE = {
  eyebrow: "Our Expertise",
  title: "Complete Dental Solutions",
  subtitle:
    "From cosmetic enhancements to complex restorations, we offer comprehensive dental treatments using the latest technology and techniques",
} as const;

export const TREATMENT_CARDS = [
  {
    category: "Cosmetic Dentistry",
    title: "Hollywood Smile Makeover",
    description:
      "Complete cosmetic transformation combining veneers, whitening, and smile design for a stunning, natural-looking result",
    cta: "Book Consultation",
    featured: true,
    image: IMAGES.hollywoodSmile,
    badge: "Most Popular",
    treatmentSlug: "hollywood-smile",
  },
  {
    category: "Restorative Dentistry",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth",
    cta: "Book Consultation",
    featured: true,
    image: IMAGES.dentalImplants,
    badge: "Most Popular",
    treatmentSlug: "dental-implants",
  },
  {
    category: "Restorative Dentistry",
    title: "All-on-4 & All-on-6 Implants",
    description: "Full arch fixed solutions for multiple missing teeth with immediate results",
    cta: "Learn More",
    featured: false,
    image: IMAGES.allOn4,
    treatmentSlug: "all-on-4-6",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Dental Veneers",
    description: "Ultra-thin zirconia, E-max, and porcelain shells for perfect teeth",
    cta: "Learn More",
    featured: false,
    image: IMAGES.dentalVeneers,
    treatmentSlug: "dental-veneers",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Teeth Whitening",
    description: "Professional laser bleaching for a brighter, confident smile",
    cta: "Learn More",
    featured: false,
    image: IMAGES.teethWhitening,
    treatmentSlug: "teeth-whitening",
  },
  {
    category: "Restorative Dentistry",
    title: "Dental Crowns & Bridges",
    description: "Restore strength, function, and appearance of damaged teeth",
    cta: "Learn More",
    featured: false,
    image: IMAGES.dentalCrowns,
    treatmentSlug: "crowns-bridges",
  },
  {
    category: "Digital Dentistry",
    title: "Digital Smile Design",
    description: "3D preview and planning for your ideal smile transformation",
    cta: "Learn More",
    featured: false,
    image: IMAGES.digitalSmileDesign,
    treatmentSlug: "digital-smile-design",
  },
  {
    category: "Advanced Technology",
    title: "Laser Dentistry",
    description: "Precise, minimally invasive treatments with modern laser technology",
    cta: "Learn More",
    featured: false,
    image: laserDentistry,
    treatmentSlug: "laser-dentistry",
  },
] as const;

/** Card data for Complete Dental Solutions section. Set `image` to your image path (e.g. /images/treatments/hollywood-smile.jpg). */
export const COMPLETE_DENTAL_SOLUTIONS_CARDS = [
  {
    category: "Cosmetic Dentistry",
    categoryIcon: "sparkles" as const,
    title: "Hollywood Smile Makeover",
    description:
      "Complete cosmetic transformation combining veneers, whitening, and smile design for a stunning, natural-looking result",
    cta: "Book Consultation",
    featured: true,
    badge: "Most Popular",
    image: IMAGES.hollywoodSmile,
    treatmentSlug: "hollywood-smile",
  },
  {
    category: "Restorative Dentistry",
    categoryIcon: "implant" as const,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth",
    cta: "Book Consultation",
    featured: true,
    badge: "Most Popular",
    image: IMAGES.dentalImplants,
    treatmentSlug: "dental-implants",
  },
  {
    category: "Restorative Dentistry",
    categoryIcon: "implant" as const,
    title: "All-on-4 & All-on-6",
    description: "Full arch fixed solutions for multiple missing teeth with immediate results",
    cta: "Learn More",
    featured: false,
    image: IMAGES.allOn4,
    treatmentSlug: "all-on-4-6",
  },
  {
    category: "Cosmetic Dentistry",
    categoryIcon: "veneer" as const,
    title: "Dental Veneers",
    description: "Ultra thin zirconia, E-max, and porcelain shells for perfect teeth",
    cta: "Learn More",
    featured: false,
    image: IMAGES.dentalVeneers,
    treatmentSlug: "dental-veneers",
  },
  {
    category: "Cosmetic Dentistry",
    categoryIcon: "whitening" as const,
    title: "Teeth Whitening",
    description: "Professional laser bleaching for a brighter, confident smile",
    cta: "Learn More",
    featured: false,
    image: IMAGES.teethWhitening,
    treatmentSlug: "teeth-whitening",
  },
  {
    category: "Restorative Dentistry",
    categoryIcon: "crown" as const,
    title: "Dental Crowns & Bridges",
    description: "Restore strength, function, and appearance of damaged teeth",
    cta: "Learn More",
    featured: false,
    image: IMAGES.dentalCrowns,
    treatmentSlug: "crowns-bridges",
  },
  {
    category: "Digital Dentistry",
    categoryIcon: "digital" as const,
    title: "Digital Smile Design",
    description: "3D preview and planning for your ideal smile transformation",
    cta: "Learn More",
    featured: false,
    image: IMAGES.digitalSmileDesign,
    treatmentSlug: "digital-smile-design",
  },

];

export const WHY_LINOVA = {
  eyebrow: "Why Linova Clinic",
  title: "Your Trusted Partner in Istanbul",
  subtitle:
    "Combining world-class dental expertise with exceptional patient care and medical tourism excellence",
  cards: [
    {
      title: "International Standards",
      description: "ISO-certified clinic with European quality protocols and sterilization standards",
      cta: "Learn More",
    },
    {
      title: "Expert Team",
      description: "Highly qualified dentists with international training and 15+ years experience",
      cta: "Learn More",
    },
    {
      title: "Transparent Pricing",
      description: "Up to 70% savings compared to UK/US prices with no hidden costs",
      cta: "Learn More",
    },
    {
      title: "Medical Tourism",
      description: "Complete travel assistance, airport transfers, and accommodation support",
      cta: "Learn More",
    },
    {
      title: "Lifetime Warranty",
      description: "Extended guarantees on all treatments with comprehensive aftercare",
      cta: "Learn More",
    },
    {
      title: "24/7 Support",
      description: "Multilingual patient coordinators available around the clock",
      cta: "Learn More",
    },
  ],
} as const;

export type TransformationCategory = "Hollywood Smile" | "Implants" | "Veneers" | "Whitening";

export const TRANSFORMATIONS: Array<{
  title: string;
  detail: string;
  category: TransformationCategory;
  before: string;
  after: string;
}> = [
  {
    title: "Hollywood Smile Transformation",
    detail: "16 Zirconia Veneers",
    category: "Hollywood Smile",
    before: "h-smily-befor-new-3.jpeg",
    after: "h-smily-after-new-3.jpeg",
  },
  {
    title: "Dental Implant Success",
    detail: "4 Dental Implants",
    category: "Implants",
    before: "implant-befor2.jpeg",
    after: "implant-after2.jpeg",
  },
  {
    title: "Veneer Perfection",
    detail: "8 E-max Veneers",
    category: "Veneers",
    before: "Veneer-befor1.jpeg",
    after: "Veneer-after1.jpeg",
  },
  // {
  //   title: "Laser Whitening Results",
  //   detail: "Professional Laser Whitening",
  //   category: "Whitening",
  //   before: "WhatsApp Image 2026-01-27 at 12.47.10 PM (2).jpeg",
  //   after: "WhatsApp Image 2026-01-27 at 12.47.10 PM (3).jpeg",
  // },
  // {
  //   title: "All-on-4 Full Restoration",
  //   detail: "All-on-4 Implants",
  //   category: "Implants",
  //   before: "WhatsApp Image 2026-01-27 at 12.47.10 PM (4).jpeg",
  //   after: "WhatsApp Image 2026-01-27 at 12.47.11 PM (1).jpeg",
  // },

];

export const GALLERY_TABS = ["Before & After", "Our Clinic"] as const;

export const GALLERY_ITEMS = [
  { title: "Hollywood Smile", tag: "Veneers" },
  { title: "Dental Veneers", tag: "Cosmetic" },
  { title: "All-on-4 Implants", tag: "Implants" },
  { title: "Teeth Whitening", tag: "Whitening" },
] as const;

export const DENTAL_JOURNEY = {
  title: "your dental journey in istanbul",
  subtitle:
    "Complete care packages including luxury accommodation, VIP transfers, and personalized treatment plans",
  cards: [
    {
      title: "Online Consultation",
      description:
        "Start your journey from home with detailed virtual assessment and personalized treatment plans",
    },
    {
      title: "VIP Airport Transfer",
      description:
        "Convenient transportation from airport to clinic and hotel with dedicated driver service",
    },
    {
      title: "Luxury Accommodation",
      description:
        "Comfortable hotel stays matched to your treatment schedule in premium Istanbul locations",
    },
    {
      title: "Multilingual Support",
      description:
        "Patient coordinators fluent in English and other languages throughout your entire visit",
    },
  ],
  cta: "Plan Your Visit",
} as const;

export const DIGITAL_DENTISTRY = {
  eyebrow: "Advanced Digital Dentistry",
  title: "Advanced Digital Dentistry",
  intro:
    "We invest in cutting-edge technology to ensure precise diagnostics, comfortable treatments, and predictable results. Our digital workflow enhances every aspect of your dental care experience.",
  highlight: {
    title: "Digital Smile Design",
    description:
      "Visualize your new smile before treatment begins. Our DSD technology creates a precise digital blueprint of your ideal smile transformation.",
    cta: "See Technology",
  },
  tech: [
    {
      badge: "Latest Technology",
      title: "3D CBCT Imaging",
      description:
        "Three-dimensional imaging for precise implant planning and complex surgical procedures with minimal radiation exposure.",
      cta: "Learn More",
      image: IMAGES.DCBCTImaging,
      treatmentSlug: "xray-cbct",
    },
    {
      badge: "Intraoral Scanning",
      title: "Intraoral Scanning",
      description:
         "Digital impressions eliminate uncomfortable traditional molds while providing superior accuracy for crowns, veneers, and aligners.",
      cta: "Learn More",
      image: IMAGES.IntraoralScanning,
      treatmentSlug: "xray-cbct",
    },
  ],
  bullets: [
    {
      title: "CAD/CAM System",
      description:
        "Same-day restorations designed and milled in-house, reducing treatment time and ensuring perfect fit and aesthetics.",
    },
  ],
} as const;

export const TESTIMONIALS = [
  {
    flag: "🇬🇧",
    quote:
      "I traveled from London to Istanbul for my Hollywood smile, and it was the best decision ever! The team at Linova Clinic was incredibly professional, and the results exceeded my expectations. My confidence has skyrocketed!",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    treatment: "Hollywood Smile Makeover",
    timeAgo: "3 weeks ago",
  },
  {
    flag: "🇺🇸",
    quote:
      "After years of dental problems, I finally found the solution at Linova Clinic. The All-on-4 procedure was painless, and the results are amazing. I saved thousands compared to US prices and got better quality care!",
    name: "James Anderson",
    country: "United States",
    treatment: "All-on-4 Dental Implants",
    timeAgo: "1 month ago",
  },
  {
    flag: "🇦🇺",
    quote:
      "The entire experience was seamless from start to finish. The clinic arranged everything - airport pickup, hotel, and all appointments. My veneers look absolutely natural, and I couldn't be happier with my new smile!",
    name: "Emma Thompson",
    country: "Australia",
    treatment: "Dental Veneers",
    timeAgo: "2 weeks ago",
  },
  {
    flag: "🇩🇪",
    quote:
      "Exceptional quality and professionalism! The German standards of precision combined with Turkish hospitality made this experience outstanding. My full mouth restoration looks perfect, and the aftercare support is excellent.",
    name: "Michael Weber",
    country: "Germany",
    treatment: "Full Mouth Restoration",
    timeAgo: "1 month ago",
  },
  {
    flag: "🇫🇷",
    quote:
      "Magnifique! The attention to detail and artistic approach to my smile design was impressive. The team understood exactly what I wanted, and the results are naturally beautiful. Highly recommend for anyone considering dental tourism!",
    name: "Sophie Laurent",
    country: "France",
    treatment: "Teeth Whitening & Veneers",
    timeAgo: "3 weeks ago",
  },
  {
    flag: "🇨🇦",
    quote:
      "I was nervous about traveling abroad for dental work, but Linova Clinic made everything easy. The technology they use is cutting-edge, and the results are fantastic. Worth every penny and the trip from Toronto!",
    name: "David Chen",
    country: "Canada",
    treatment: "Dental Implants & Crowns",
    timeAgo: "2 weeks ago",
  },
] as const;

export const REVIEWS_SECTION = {
  title: "Patients Reviews",
  googleRating: "4.9",
  googleLabel: "Top Rated Service",
  verifiedBadge: "Verified by Trustindex",
  readMore: "Read more",
  quoteMaxLength: 120,
} as const;

export const READY_CTA = {
  eyebrow: "GET STARTED",
  title: "Ready for Your Dream Smile?",
  subtitle:
    "Start your smile transformation today with a detailed, personalized treatment plan. Our multilingual team is here to guide you through every step of your dental journey.",
  callLabel: "Call us anytime",
  emailLabel: "Email us",
  hoursLabel: "Working hours",
  hours: "Mon - Fri: 09:00 - 18:00",
  ctaButton: "Book Free Consultation",
} as const;

export const FOOTER_FORM = {
  title: "Start Your Smile Journey",
  subtitle: "Book your free consultation and discover how we can transform your smile",
  fullName: "Full Name",
  email: "Email",
  phone: "Phone Number",
  treatmentInterest: "Treatment Interest",
  treatmentOptions: [
    "Select a treatment",
    "Hollywood Smile Makeover",
    "Dental Implants",
    "Dental Veneers",
    "Teeth Whitening",
    "All-on-4 Implants",
    "Other Treatment",
  ],
  message: "Message",
  messagePlaceholder: "0/500 characters",
  sendButton: "Send Message",
  quickContact: "Quick Contact",
  callUs: "Call Us",
  whatsapp: "Chat with Us",
  emailUs: "Email",
  visitTitle: "Visit Our Clinic",
  addressLabel: "Address",
  address: "Nişantaşı District\nIstanbul, Turkey",
  hoursLabel: "Working Hours",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
} as const;

export const FAQ = {
  title: "FAQ",
  subtitle: "frequently asked questions",
  items: [
    {
      question: "How do patients save significantly on dental treatment by choosing Linova in Istanbul?",
      answer: "Turkey's favorable economic structure — lower operating costs, advantageous exchange rates, and strong government investment in healthcare — means that world-class dental treatments can be offered at a fraction of Western prices. This is not a compromise in quality. Linova uses the same internationally certified implant brands, premium ceramic materials, and advanced digital technology as leading clinics in Europe and the USA. Patients consistently find that the savings are substantial enough to cover their entire trip — flights, accommodation, and treatment — and still pay less than they would at home."    },
    {
      question: "Is it really safe to have dental treatment in Turkey?",
      answer: "Absolutely. Turkey welcomes over 500,000 international dental patients every year — and for good reason. Linova Clinic operates under Turkish Ministry of Health standards, and our dentists hold internationally recognized certifications. We use only EU and FDA-approved implant systems and materials. Every procedure follows strict sterile surgical protocols, and all treatments come with a written warranty. Thousands of patients from the UK, Europe, the Gulf, and Russia have trusted Linova — and left with smiles that speak for themselves."    },
    {
      question: "How does Linova take care of me from the moment I land in Istanbul?",
      answer: `From your first message to your flight home, we handle everything:
Before you arrive: Free online consultation, personalized treatment plan, and full cost breakdown — within 24 hours.
When you land: VIP airport transfer directly to your hotel or clinic — no stress, no confusion.
During treatment: Dedicated multilingual coordinator (English, Arabic, Russian) with you every step of the way.
Free time: Curated Istanbul experiences between appointments — the Bosphorus, historic sites, world-class dining.
When you leave: Full treatment records, aftercare kit, and ongoing WhatsApp support.`    },
    {
      question: "How do I get started — do I need to fly to Istanbul just for a consultation?",
      answer: "Not at all. Your journey starts from home, for free. Simply send us photos of your teeth and any existing X-rays via WhatsApp or our contact form. Our specialist team will assess your case and send you a detailed treatment plan with transparent pricing — usually within 24 hours. Once you are happy with the plan, we help you coordinate your travel dates, hotel, and airport transfer. Most treatments are completed in one or two visits, and we make sure every day counts.",
    },
    {
      question: "What happens if I have a problem after I return home?",
      answer: "Your care does not end when your flight takes off. Every Linova patient receives a written warranty on their treatment, complete digital records and X-rays, and direct access to their patient coordinator via WhatsApp for any questions. For minor concerns, our team provides remote guidance and video consultations at no extra charge. If in-person follow-up is ever needed, we coordinate with trusted partner clinics internationally — so no matter where you are in the world, you are never left without support.",
    },
  ],
} as const;
