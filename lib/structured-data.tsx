import {
  SITE_FULL_NAME,
  PHONE,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
} from "./constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE_FULL_NAME,
    alternateName: "Linova Dental Clinic",
    url: "https://linovaclinic.com",
    logo: "https://linovaclinic.com/icon-512.png",
    image: "https://linovaclinic.com/images/og-image.jpg",
    description:
      "Premium dental clinic in Istanbul offering Hollywood Smile makeovers, dental implants, veneers, full mouth restoration, and comprehensive medical tourism packages. ISO-certified with 15+ years of experience.",
    telephone: PHONE,
    email: EMAIL,
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
      "https://www.instagram.com/linovaclinic",
      "https://www.facebook.com/linovaclinic",
      "https://www.youtube.com/linovaclinic",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function MedicalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_FULL_NAME,
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
