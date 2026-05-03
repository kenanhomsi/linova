import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Linova Clinic Istanbul — Premium Dental Care",
    short_name: "Linova Clinic",
    description:
      "Premium dental care in Istanbul. Hollywood Smile, dental implants, veneers, and full mouth restoration with medical tourism support.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    icons: [
      { src: "/favicon.ico", sizes: "192x192", type: "image/x-icon" },
      { src: "/logo.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
  };
}
