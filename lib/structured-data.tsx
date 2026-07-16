import {
  SITE_FULL_NAME,
  PHONE,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
} from "./constants";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [k: string]: JsonLdValue };

function JsonLdScript({ data }: { data: Record<string, JsonLdValue> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE_FULL_NAME,
    alternateName: [
      "Linova Dental Clinic",
      "Linova Turkey",
      "Linova Clinic",
      "Linova Dental",
    ],
    url: "https://linovaclinic.com",
    logo: "https://linovaclinic.com/icon-512.png",
    image: "https://linovaclinic.com/images/og-image.jpg",
    description:
      "Linova Clinic is a premier dental clinic in Turkey specializing in dental implants, veneers, Hollywood Smile, full mouth restoration, and medical tourism. Located in Istanbul, offering world-class dental treatments.",
    telephone: PHONE,
    email: EMAIL,
    availableLanguage: ["English", "Arabic", "Turkish"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nişantaşı District",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0542,
      longitude: 28.9922,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, GBP, TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Turkey" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Treatments",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Hollywood Smile Makeover",
            procedureType: "https://schema.org/CosmeticProcedure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Implants",
            procedureType: "https://schema.org/SurgicalProcedure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Veneers",
            procedureType: "https://schema.org/CosmeticProcedure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "All-on-4 Implants",
            procedureType: "https://schema.org/SurgicalProcedure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Teeth Whitening",
            procedureType: "https://schema.org/CosmeticProcedure",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "500",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/linovadental?igsh=MWp2eXc4d3c1Z21laQ==",
      "https://www.facebook.com/people/Linova-Clinic/61588817529414/",
      "https://www.youtube.com/linovaclinic",
    ],
  };

  return <JsonLdScript data={data} />;
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const validItems = items.filter((item) => item.answer && item.answer.trim());

  if (validItems.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={data} />;
}

export function MedicalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_FULL_NAME,
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
    availableLanguage: ["English", "Arabic", "Turkish"],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Hollywood Smile Makeover",
        description:
          "Complete cosmetic dental transformation including veneers, whitening, and digital smile design.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Implant Surgery",
        description:
          "Permanent titanium tooth replacement with digital planning for precision results.",
      },
      {
        "@type": "MedicalProcedure",
        name: "All-on-4 / All-on-6 Implants",
        description:
          "Full arch restoration with fixed implant-supported prosthetics in a single session.",
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_FULL_NAME,
    url: "https://linovaclinic.com",
    description:
      "Linova Clinic is a dental clinic in Turkey for dental implants, veneers, Hollywood Smile, and patient-friendly dental tourism in Istanbul.",
    inLanguage: ["en", "tr", "ar"],
    publisher: {
      "@type": "Dentist",
      name: SITE_FULL_NAME,
    },
  };

  return <JsonLdScript data={data} />;
}

export function BlogPostingJsonLd({
  url,
  headline,
  description,
  image,
  datePublished,
  authorName,
  inLanguage,
}: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  authorName: string;
  inLanguage?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_FULL_NAME,
      logo: {
        "@type": "ImageObject",
        url: "https://linovaclinic.com/icon-512.png",
      },
    },
    ...(inLanguage ? { inLanguage } : {}),
  };

  return <JsonLdScript data={data} />;
}

export function MedicalProcedureJsonLd({
  url,
  name,
  description,
  image,
  inLanguage,
}: {
  url: string;
  name: string;
  description: string;
  image?: string;
  inLanguage?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    ...(image ? { image: [image] } : {}),
    ...(inLanguage ? { inLanguage } : {}),
    provider: {
      "@type": "Dentist",
      name: SITE_FULL_NAME,
      url: "https://linovaclinic.com",
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS,
      },
      openingHours: WORKING_HOURS,
    },
  };

  return <JsonLdScript data={data} />;
}
