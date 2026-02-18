// Data matching readdy.link design: Linova Clinic Istanbul
import hollywoodSmile from "@/public/HollywoodSmile.jpg";
import  digitalSmileDesign from "@/public/Dental Crowns.jpg";
import allOn4 from "@/public/All-on-4.jpg";
import dentalVeneers from "@/public/Dental Veneers.jpg";
import dentalImplants from "@/public/DentalImplants.jpg";
import teethWhitening from "@/public/Teeth Whitening.jpg";
import dentalCrowns from "@/public/Digital Smile Design.jpg";
import laserDentistry from "@/public/Laser Dentistry.jpg";
import DCBCTImaging from "@/public/3DCBCTImaging.jpg";




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
    image: hollywoodSmile,
    badge: "Most Popular",
    blogSlug: "hollywood-smile-complete-guide-2026",
  },
  {
    category: "Restorative Dentistry",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth",
    cta: "Book Consultation",
    featured: true,
    image: dentalImplants,
    badge: "Most Popular",
    blogSlug: "dental-implants-vs-bridges-which-is-right",
  },
  {
    category: "Restorative Dentistry",
    title: "All-on-4 & All-on-6 Implants",
    description: "Full arch fixed solutions for multiple missing teeth with immediate results",
    cta: "Learn More",
    featured: false,
    image: allOn4,
    blogSlug: "all-on-4-dental-implants-everything-you-need-to-know",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Dental Veneers",
    description: "Ultra-thin zirconia, E-max, and porcelain shells for perfect teeth",
    cta: "Learn More",
    featured: false,
    image: dentalVeneers,
    blogSlug: "porcelain-veneers-vs-composite-veneers",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Teeth Whitening",
    description: "Professional laser bleaching for a brighter, confident smile",
    cta: "Learn More",
    featured: false,
    image: teethWhitening,
    blogSlug: "teeth-whitening-professional-vs-at-home",
  },
  {
    category: "Restorative Dentistry",
    title: "Dental Crowns & Bridges",
    description: "Restore strength, function, and appearance of damaged teeth",
    cta: "Learn More",
    featured: false,
    image: dentalCrowns,
    blogSlug: "complete-guide-dental-crowns-bridges",
  },
  {
    category: "Digital Dentistry",
    title: "Digital Smile Design",
    description: "3D preview and planning for your ideal smile transformation",
    cta: "Learn More",
    featured: false,
    image: digitalSmileDesign,
    blogSlug: "digital-smile-design-technology-explained",
  },
  {
    category: "Advanced Technology",
    title: "Laser Dentistry",
    description: "Precise, minimally invasive treatments with modern laser technology",
    cta: "Learn More",
    featured: false,
    image: laserDentistry,
    blogSlug: "3d-cbct-imaging-modern-dentistry",
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
    image: hollywoodSmile,
    blogSlug: "hollywood-smile-complete-guide-2026",
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
    image: dentalImplants,
    blogSlug: "dental-implants-vs-bridges-which-is-right",
  },
  {
    category: "Restorative Dentistry",
    categoryIcon: "implant" as const,
    title: "All-on-4 & All-on-6",
    description: "Full arch fixed solutions for multiple missing teeth with immediate results",
    cta: "Learn More",
    featured: false,
    image: allOn4,
    blogSlug: "all-on-4-dental-implants-everything-you-need-to-know",
  },
  {
    category: "Cosmetic Dentistry",
    categoryIcon: "veneer" as const,
    title: "Dental Veneers",
    description: "Ultra thin zirconia, E-max, and porcelain shells for perfect teeth",
    cta: "Learn More",
    featured: false,
    image: dentalVeneers,
    blogSlug: "porcelain-veneers-vs-composite-veneers",
  },
  {
    category: "Cosmetic Dentistry",
    categoryIcon: "whitening" as const,
    title: "Teeth Whitening",
    description: "Professional laser bleaching for a brighter, confident smile",
    cta: "Learn More",
    featured: false,
    image: teethWhitening,
    blogSlug: "teeth-whitening-professional-vs-at-home",
  },
  {
    category: "Restorative Dentistry",
    categoryIcon: "crown" as const,
    title: "Dental Crowns & Bridges",
    description: "Restore strength, function, and appearance of damaged teeth",
    cta: "Learn More",
    featured: false,
    image: dentalCrowns,
    blogSlug: "complete-guide-dental-crowns-bridges",
  },
  {
    category: "Digital Dentistry",
    categoryIcon: "digital" as const,
    title: "Digital Smile Design",
    description: "3D preview and planning for your ideal smile transformation",
    cta: "Learn More",
    featured: false,
    image: digitalSmileDesign,
    blogSlug: "digital-smile-design-technology-explained",
  },
  {
    category: "Advanced Technology",
    categoryIcon: "laser" as const,
    title: "Laser Dentistry",
    description: "Precise, minimally invasive treatments with modern laser technology",
    cta: "Learn More",
    featured: false,
    image: laserDentistry,
    blogSlug: "3d-cbct-imaging-modern-dentistry",
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
    before: "WhatsApp Image 2026-01-27 at 12.47.08 PM (1).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.08 PM (2).jpeg",
  },
  {
    title: "Dental Implant Success",
    detail: "4 Dental Implants",
    category: "Implants",
    before: "WhatsApp Image 2026-01-27 at 12.47.08 PM (3).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.08 PM (4).jpeg",
  },
  {
    title: "Veneer Perfection",
    detail: "8 E-max Veneers",
    category: "Veneers",
    before: "WhatsApp Image 2026-01-27 at 12.47.09 PM (1).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.09 PM (2).jpeg",
  },
  {
    title: "Complete Smile Makeover",
    detail: "20 Veneers + Whitening",
    category: "Veneers",
    before: "WhatsApp Image 2026-01-27 at 12.47.09 PM (3).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.10 PM (1).jpeg",
  },
  {
    title: "Laser Whitening Results",
    detail: "Professional Laser Whitening",
    category: "Whitening",
    before: "WhatsApp Image 2026-01-27 at 12.47.10 PM (2).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.10 PM (3).jpeg",
  },
  {
    title: "All-on-4 Full Restoration",
    detail: "All-on-4 Implants",
    category: "Implants",
    before: "WhatsApp Image 2026-01-27 at 12.47.10 PM (4).jpeg",
    after: "WhatsApp Image 2026-01-27 at 12.47.11 PM (1).jpeg",
  },
  // {
  //   title: "Hollywood Smile Makeover",
  //   detail: "Full Arch Zirconia",
  //   category: "Hollywood Smile",
  //   before: "WhatsApp Image 2026-01-27 at 12.47.11 PM (2).jpeg",
  //   after: "WhatsApp Image 2026-01-27 at 12.47.11 PM (3).jpeg",
  // },
  // {
  //   title: "Porcelain Veneers",
  //   detail: "6 E-max Veneers",
  //   category: "Veneers",
  //   before: "WhatsApp Image 2026-01-27 at 12.47.11 PM (4).jpeg",
  //   after: "WhatsApp Image 2026-01-27 at 12.47.12 PM (1).jpeg",
  // },
  // {
  //   title: "Teeth Whitening",
  //   detail: "In-Office Whitening",
  //   category: "Whitening",
  //   before: "WhatsApp Image 2026-01-27 at 12.47.12 PM (2).jpeg",
  //   after: "WhatsApp Image 2026-01-27 at 12.47.12 PM (3).jpeg",
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
      image: DCBCTImaging,
      blogSlug: "3d-cbct-imaging-modern-dentistry",
    },
    {
      badge: "Latest Technology",
      title: "Laser Treatments",
      description:
        "Minimally invasive procedures with faster healing times, reduced discomfort, and superior precision for soft tissue treatments.",
      cta: "Learn More",
      image: laserDentistry,
      blogSlug: "3d-cbct-imaging-modern-dentistry",
    },
  ],
  bullets: [
    {
      title: "Intraoral Scanning",
      description:
        "Digital impressions eliminate uncomfortable traditional molds while providing superior accuracy for crowns, veneers, and aligners.",
    },
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
      question: "Why should I choose Linova Clinic for a Luxury Dental Clinic in Turkey?",
      answer: "At Dentaray Clinic, we redefine the dental experience by blending world-class dentistry with premium patient care. As a premier Luxury Dental Clinic in Turkey, we offer state-of-the-art technology, VIP lounge comforts, and a dedicated international patient team to ensure your journey to a perfect smile is as relaxing as it is transformative.",
    },
    {
      question: "Is Linova Clinic the right choice for high-quality Dental Turkey packages?",
      answer: "Absolutely. We specialize in comprehensive Dental Turkey services designed specifically for international visitors. Our all-inclusive packages cover your advanced dental treatments, luxury hotel stays, private VIP transfers, and multilingual assistance, making high-end dental care accessible and stress-free.",
    },
    {
      question: "What makes you a leading Dental Clinic Istanbul for international patients?",
      answer: "Being a top-tier Dental Clinic Istanbul, we are located at the crossroads of Europe and Asia. Our clinic is staffed by expert surgeons and cosmetic dentists who specialize in complex full-mouth reconstructions and Hollywood Smiles. We utilize the latest 3D imaging and digital smile design to provide results that meet global aesthetic standards.",
    },
    {
      question: "Can I get a consultation at a Luxury Dental Turkey provider before flying out?",
      answer: "",
    },
    {
      question: "Are treatments at Linova Clinic affordable despite being a Luxury Dental Clinic?",
      answer: "",
    },
  ],
} as const;
