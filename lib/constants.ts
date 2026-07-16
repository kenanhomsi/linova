export const SITE_NAME = "Linova Clinic";
export const SITE_FULL_NAME = "Linova Clinic Istanbul";

/** Canonical public hostname (no scheme, no path). Used for SEO redirects. */
export const SITE_CANONICAL_HOST = "linovadental.com";
export const SITE_CANONICAL_ORIGIN = `https://${SITE_CANONICAL_HOST}`;
export const SITE_TAGLINE = "Dental Implants Turkey | Hollywood Smile Makeover";

// First clinic image for hero (path under public/)
export const HERO_IMAGE =
  "/images/WhatsApp Image 2026-01-27 at 12.47.00 PM.jpeg";

export const WHATSAPP_NUMBER = "905061099770"; // +90 532 123 4567
export const WHATSAPP_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`
  : "#";

export const PHONE = "+90 506 109 9770";
export const PHONE_TEL = "tel:+905061099770";
export const EMAIL = "info@linovaclinic.com";
export const ADDRESS = "Nişantaşı District, Istanbul, Turkey";
export const WORKING_HOURS = "Mon - Fri: 09:00 - 18:00";
export const WORKING_HOURS_FOOTER =
  "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM";

export const SOCIAL = {
  whatsapp: WHATSAPP_LINK,
  instagram: "https://www.instagram.com/linovadental?igsh=MWp2eXc4d3c1Z21laQ==",
  facebook: "https://www.facebook.com/people/Linova-Clinic/61588817529414/",
  youtube: "#",
} as const;

export const FOOTER_SERVICES = [
  { label: "Cosmetic Dentistry", href: "/treatments" },
  { label: "Dental Implants", href: "/treatments" },
  { label: "Medical Tourism", href: "/why-us" },
  { label: "Technology", href: "/#technology" },
] as const;

export const FOOTER_TREATMENTS = [
  { label: "Hollywood Smile", href: "/treatments" },
  { label: "All-on-4 Implants", href: "/treatments" },
  { label: "Veneers", href: "/treatments" },
  { label: "Teeth Whitening", href: "/treatments" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy", external: false as const },
  { label: "Terms of Service", href: "/terms", external: false as const },
  {
    label: "Website Builder",
    href: "https://readdy.link",
    external: true as const,
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Services" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
] as const;
