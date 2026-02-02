import type { Treatment, TreatmentCategoryInfo } from "@/types";

export const CATEGORIES: TreatmentCategoryInfo[] = [
  { id: "cosmetic", title: "Cosmetic Dentistry" },
  { id: "restorative", title: "Restorative & Reconstructive Dentistry" },
  { id: "general", title: "General & Preventive Dentistry" },
  { id: "surgical", title: "Specialized & Surgical Services" },
  { id: "digital", title: "Digital & Technology-Enhanced Dentistry" },
  { id: "tourism", title: "Medical Tourism & Patient Support" },
];

export const TREATMENTS: Treatment[] = [
  // Cosmetic
  {
    id: "hollywood-smile",
    slug: "hollywood-smile",
    title: "Hollywood Smile Makeover",
    shortDescription:
      "Transform your smile with a complete cosmetic dental plan combining veneers, whitening, and smile design.",
    category: "cosmetic",
  },
  {
    id: "dental-veneers",
    slug: "dental-veneers",
    title: "Dental Veneers (Zirconia, E-max, Porcelain)",
    shortDescription:
      "Thin custom shells to improve color, shape, and symmetry of teeth.",
    category: "cosmetic",
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Professional bleaching for a brighter, more confident smile.",
    category: "cosmetic",
  },
  {
    id: "composite-bonding",
    slug: "composite-bonding",
    title: "Composite Bonding",
    shortDescription:
      "Improve minor chips, gaps, or uneven shapes in a single visit.",
    category: "cosmetic",
  },
  // Restorative
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent tooth replacement resembling natural teeth.",
    category: "restorative",
  },
  {
    id: "all-on-4-6",
    slug: "all-on-4-6",
    title: "All-on-4 & All-on-6 Implants",
    shortDescription: "Full arch fixed solutions for multiple missing teeth.",
    category: "restorative",
  },
  {
    id: "zygomatic-implants",
    slug: "zygomatic-implants",
    title: "Zygomatic Implants",
    shortDescription: "Advanced implant option for patients with severe bone loss.",
    category: "restorative",
  },
  {
    id: "crowns-bridges",
    slug: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    shortDescription:
      "Restore strength, function, and appearance of damaged teeth.",
    category: "restorative",
  },
  {
    id: "full-mouth-restoration",
    slug: "full-mouth-restoration",
    title: "Full Mouth Restoration",
    shortDescription: "Comprehensive reconstruction for function & aesthetics.",
    category: "restorative",
  },
  // General
  {
    id: "checkups",
    slug: "checkups",
    title: "Routine Dental Check-ups & Consultation",
    shortDescription:
      "Full oral health evaluation and personalized treatment plans.",
    category: "general",
  },
  {
    id: "xray-cbct",
    slug: "xray-cbct",
    title: "Dental X-Rays / CBCT Imaging",
    shortDescription:
      "Advanced imaging for precise diagnosis and treatment planning.",
    category: "general",
  },
  {
    id: "gum-periodontal",
    slug: "gum-periodontal",
    title: "Gum & Periodontal Treatments",
    shortDescription: "Care for gum disease and ensure long-term oral health.",
    category: "general",
  },
  // Surgical
  {
    id: "oral-surgery",
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription:
      "Tooth extractions, impacted tooth removal, and complex surgical procedures.",
    category: "surgical",
  },
  {
    id: "sinus-lift-bone-graft",
    slug: "sinus-lift-bone-graft",
    title: "Sinus Lift & Bone Grafting",
    shortDescription:
      "Prepare the jaw for implants with advanced surgical techniques.",
    category: "surgical",
  },
  {
    id: "root-canal",
    slug: "root-canal",
    title: "Root Canal Therapy",
    shortDescription:
      "Preserve natural teeth by treating infected or damaged nerves.",
    category: "surgical",
  },
  // Digital
  {
    id: "digital-smile-design",
    slug: "digital-smile-design",
    title: "Digital Smile Design (DSD)",
    shortDescription:
      "Plan your ideal smile with advanced 3D preview and digital planning tools.",
    category: "digital",
  },
  {
    id: "laser-dentistry",
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    shortDescription:
      "Precise, minimally invasive treatments using modern laser technology.",
    category: "digital",
  },
  // Tourism
  {
    id: "online-consultation",
    slug: "online-consultation",
    title: "Online Consultation & Personalized Treatment Plans",
    shortDescription:
      "Start your journey from home with detailed virtual assessment.",
    category: "tourism",
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers & VIP Pickup",
    shortDescription: "Convenient transportation from airport to clinic/hotel.",
    category: "tourism",
  },
  {
    id: "accommodation",
    slug: "accommodation",
    title: "Luxury Accommodation Arrangements",
    shortDescription:
      "Comfortable hotel stay matched to your treatment schedule.",
    category: "tourism",
  },
  {
    id: "multilingual-coordinators",
    slug: "multilingual-coordinators",
    title: "Multilingual Patient Coordinators",
    shortDescription:
      "Support in English and other languages throughout your visit.",
    category: "tourism",
  },
  {
    id: "tour-addons",
    slug: "tour-addons",
    title: "Tour & Experience Add-Ons",
    shortDescription:
      "Cultural tours and leisure activities in Istanbul combined with treatment plans.",
    category: "tourism",
  },
];

export function getTreatmentsByCategory(
  category: Treatment["category"]
): Treatment[] {
  return TREATMENTS.filter((t) => t.category === category);
}

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getCategoryById(
  id: Treatment["category"]
): TreatmentCategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
