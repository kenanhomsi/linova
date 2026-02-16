import type { Treatment, TreatmentCategoryInfo } from "@/types";

import hollywoodSmile from "@/public/HollywoodSmile.jpg";
import dentalVeneers from "@/public/Dental Veneers.jpg";
import teethWhitening from "@/public/Teeth Whitening.jpg";
import dentalImplants from "@/public/DentalImplants.jpg";
import allOn4 from "@/public/All-on-4.jpg";
import dentalCrowns from "@/public/Dental Crowns.jpg";
import digitalSmileDesign from "@/public/Digital Smile Design.jpg";
import laserDentistry from "@/public/Laser Dentistry.jpg";
import cbctImaging from "@/public/3DCBCTImaging.jpg";

export const CATEGORIES: TreatmentCategoryInfo[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Achieve your dream smile with our full range of cosmetic treatments — from Hollywood Smile makeovers to precision veneers and professional whitening.",
    icon: "sparkles",
  },
  {
    id: "restorative",
    title: "Restorative & Reconstructive Dentistry",
    description:
      "Rebuild function and beauty with permanent implant solutions, advanced full-arch restorations, and durable crown and bridge work.",
    icon: "tool",
  },
  {
    id: "general",
    title: "General & Preventive Dentistry",
    description:
      "Maintain optimal oral health with comprehensive check-ups, advanced diagnostic imaging, and expert periodontal care.",
    icon: "stethoscope",
  },
  {
    id: "surgical",
    title: "Specialized & Surgical Services",
    description:
      "Complex procedures performed by experienced oral surgeons using the latest minimally invasive techniques for faster recovery.",
    icon: "scissors",
  },
  {
    id: "digital",
    title: "Digital & Technology-Enhanced Dentistry",
    description:
      "Experience the future of dentistry with 3D smile previews, computer-guided implant placement, and precision laser treatments.",
    icon: "device",
  },
  {
    id: "tourism",
    title: "Medical Tourism & Patient Support",
    description:
      "A seamless dental tourism experience — from your first virtual consultation to VIP airport transfers, luxury accommodation, and aftercare.",
    icon: "plane",
  },
];

export const TREATMENTS: Treatment[] = [
  // Cosmetic
  {
    id: "hollywood-smile",
    slug: "hollywood-smile",
    title: "Hollywood Smile Makeover",
    shortDescription:
      "A complete smile transformation combining custom veneers, professional whitening, and digital smile design for a stunning, natural-looking result that turns heads.",
    category: "cosmetic",
    image: hollywoodSmile,
  },
  {
    id: "dental-veneers",
    slug: "dental-veneers",
    title: "Dental Veneers (Zirconia, E-max, Porcelain)",
    shortDescription:
      "Ultra-thin, custom-crafted shells bonded to your teeth to perfect color, shape, and symmetry — choose from premium zirconia, E-max, or porcelain options.",
    category: "cosmetic",
    image: dentalVeneers,
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Professional in-office laser whitening that brightens your smile up to 8 shades in a single visit, with long-lasting results you'll love.",
    category: "cosmetic",
    image: teethWhitening,
  },
  {
    id: "composite-bonding",
    slug: "composite-bonding",
    title: "Composite Bonding",
    shortDescription:
      "Fix minor chips, close gaps, or reshape uneven teeth in a single painless visit using tooth-colored composite resin for a seamless, natural finish.",
    category: "cosmetic",
  },
  // Restorative
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "The gold standard in permanent tooth replacement — titanium implants that look, feel, and function exactly like your natural teeth with a 98% success rate.",
    category: "restorative",
    image: dentalImplants,
  },
  {
    id: "all-on-4-6",
    slug: "all-on-4-6",
    title: "All-on-4 & All-on-6 Implants",
    shortDescription:
      "Full-arch fixed prosthetics on just 4–6 strategically placed implants — a complete set of teeth in a single day with immediate function and aesthetics.",
    category: "restorative",
    image: allOn4,
  },
  {
    id: "zygomatic-implants",
    slug: "zygomatic-implants",
    title: "Zygomatic Implants",
    shortDescription:
      "An advanced implant solution for patients with severe bone loss, anchored in the cheekbone to avoid the need for bone grafting procedures.",
    category: "restorative",
  },
  {
    id: "crowns-bridges",
    slug: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    shortDescription:
      "Restore damaged or missing teeth with custom-crafted crowns and bridges that match your natural teeth in strength, color, and shape.",
    category: "restorative",
    image: dentalCrowns,
  },
  {
    id: "full-mouth-restoration",
    slug: "full-mouth-restoration",
    title: "Full Mouth Restoration",
    shortDescription:
      "A comprehensive reconstruction plan combining multiple treatments to fully restore function, aesthetics, and oral health for long-term results.",
    category: "restorative",
  },
  // General
  {
    id: "checkups",
    slug: "checkups",
    title: "Routine Dental Check-ups & Consultation",
    shortDescription:
      "A thorough oral health evaluation with digital imaging, personalized treatment planning, and expert guidance to keep your smile healthy.",
    category: "general",
  },
  {
    id: "xray-cbct",
    slug: "xray-cbct",
    title: "Dental X-Rays / 3D CBCT Imaging",
    shortDescription:
      "State-of-the-art 3D cone-beam imaging for precise diagnosis, implant planning, and complex treatment design with minimal radiation exposure.",
    category: "general",
    image: cbctImaging,
  },
  {
    id: "gum-periodontal",
    slug: "gum-periodontal",
    title: "Gum & Periodontal Treatments",
    shortDescription:
      "Expert treatment for gum disease, deep cleaning, and periodontal therapy to protect your teeth and ensure lasting oral health foundations.",
    category: "general",
  },
  // Surgical
  {
    id: "oral-surgery",
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription:
      "From wisdom tooth extractions to complex surgical procedures — performed by experienced oral surgeons with minimally invasive techniques and fast recovery.",
    category: "surgical",
  },
  {
    id: "sinus-lift-bone-graft",
    slug: "sinus-lift-bone-graft",
    title: "Sinus Lift & Bone Grafting",
    shortDescription:
      "Advanced bone augmentation procedures to build the foundation needed for successful implant placement, using premium graft materials.",
    category: "surgical",
  },
  {
    id: "root-canal",
    slug: "root-canal",
    title: "Root Canal Therapy",
    shortDescription:
      "Save your natural tooth with precise endodontic treatment — modern techniques and anesthesia ensure a comfortable, virtually painless experience.",
    category: "surgical",
  },
  // Digital
  {
    id: "digital-smile-design",
    slug: "digital-smile-design",
    title: "Digital Smile Design (DSD)",
    shortDescription:
      "Visualize your new smile before treatment begins with advanced 3D digital planning — see exactly how your transformation will look from every angle.",
    category: "digital",
    image: digitalSmileDesign,
  },
  {
    id: "laser-dentistry",
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    shortDescription:
      "Precise, minimally invasive soft and hard tissue treatments using cutting-edge laser technology for faster healing and superior comfort.",
    category: "digital",
    image: laserDentistry,
  },
  // Tourism
  {
    id: "online-consultation",
    slug: "online-consultation",
    title: "Online Consultation & Treatment Planning",
    shortDescription:
      "Start your dental journey from home — share photos, get a detailed virtual assessment, and receive a personalized treatment plan with transparent pricing.",
    category: "tourism",
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "VIP Airport Transfers",
    shortDescription:
      "Arrive in style with complimentary VIP pickup from Istanbul Airport — a dedicated driver takes you directly to your hotel or clinic, hassle-free.",
    category: "tourism",
  },
  {
    id: "accommodation",
    slug: "accommodation",
    title: "Luxury Accommodation Arrangements",
    shortDescription:
      "Stay in hand-picked premium hotels near the clinic, perfectly matched to your treatment schedule and personal preferences.",
    category: "tourism",
  },
  {
    id: "multilingual-coordinators",
    slug: "multilingual-coordinators",
    title: "Multilingual Patient Coordinators",
    shortDescription:
      "Dedicated coordinators fluent in English, Arabic, Turkish, and more — guiding you through every step of your treatment journey.",
    category: "tourism",
  },
  {
    id: "tour-addons",
    slug: "tour-addons",
    title: "Tour & Experience Add-Ons",
    shortDescription:
      "Combine your dental visit with curated Istanbul experiences — historic tours, Bosphorus cruises, shopping excursions, and cultural highlights.",
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
