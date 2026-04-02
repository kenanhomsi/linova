// Client-safe subset of home data (avoid pulling large server-only data into client bundles)

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
  IntraoralScanning: "/images/Intraoral Scanning.jpeg",
} as const;

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
] as const;

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
    before: "h-smily-befor-new.jpeg",
    after: "h-smily-after-new.jpeg",
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
];

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

