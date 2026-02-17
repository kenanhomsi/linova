export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  categoryKey: string;
  image: string;
  readTime: number;
  date: string;
  author: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  "all",
  "cosmeticDentistry",
  "dentalImplants",
  "medicalTourism",
  "oralHealth",
  "technology",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "hollywood-smile-complete-guide-2026",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/hero-patient-1.jpg",
    readTime: 8,
    date: "2026-02-10",
    author: "Dr. Elif Yılmaz",
    featured: true,
  },
  {
    id: "2",
    slug: "dental-implants-vs-bridges-which-is-right",
    category: "dentalImplants",
    categoryKey: "dentalImplants",
    image: "/images/hero-patient-2.jpg",
    readTime: 6,
    date: "2026-02-05",
    author: "Dr. Mehmet Kaya",
    featured: true,
  },
  {
    id: "3",
    slug: "why-istanbul-top-destination-dental-tourism",
    category: "medicalTourism",
    categoryKey: "medicalTourism",
    image: "/images/hero-istanbul-1.jpg",
    readTime: 7,
    date: "2026-01-28",
    author: "Dr. Elif Yılmaz",
    featured: true,
  },
  {
    id: "4",
    slug: "all-on-4-dental-implants-everything-you-need-to-know",
    category: "dentalImplants",
    categoryKey: "dentalImplants",
    image: "/images/hero-patient-3.jpg",
    readTime: 10,
    date: "2026-01-20",
    author: "Dr. Mehmet Kaya",
  },
  {
    id: "5",
    slug: "porcelain-veneers-vs-composite-veneers",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/hero-patient-1.jpg",
    readTime: 5,
    date: "2026-01-15",
    author: "Dr. Elif Yılmaz",
  },
  {
    id: "6",
    slug: "digital-smile-design-technology-explained",
    category: "technology",
    categoryKey: "technology",
    image: "/images/hero-istanbul-2.jpg",
    readTime: 6,
    date: "2026-01-10",
    author: "Dr. Mehmet Kaya",
  },
  {
    id: "7",
    slug: "how-to-maintain-dental-implants-long-term",
    category: "oralHealth",
    categoryKey: "oralHealth",
    image: "/images/hero-patient-2.jpg",
    readTime: 5,
    date: "2026-01-05",
    author: "Dr. Elif Yılmaz",
  },
  {
    id: "8",
    slug: "teeth-whitening-professional-vs-at-home",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/hero-patient-3.jpg",
    readTime: 4,
    date: "2025-12-28",
    author: "Dr. Mehmet Kaya",
  },
  {
    id: "9",
    slug: "what-to-expect-dental-trip-turkey",
    category: "medicalTourism",
    categoryKey: "medicalTourism",
    image: "/images/hero-istanbul-3.jpg",
    readTime: 8,
    date: "2025-12-20",
    author: "Dr. Elif Yılmaz",
  },
  {
    id: "10",
    slug: "3d-cbct-imaging-modern-dentistry",
    category: "technology",
    categoryKey: "technology",
    image: "/images/hero-istanbul-1.jpg",
    readTime: 6,
    date: "2025-12-15",
    author: "Dr. Mehmet Kaya",
  },
  {
    id: "11",
    slug: "complete-guide-dental-crowns-bridges",
    category: "oralHealth",
    categoryKey: "oralHealth",
    image: "/images/hero-patient-1.jpg",
    readTime: 7,
    date: "2025-12-10",
    author: "Dr. Elif Yılmaz",
  },
  {
    id: "12",
    slug: "save-up-to-70-percent-dental-costs-turkey",
    category: "medicalTourism",
    categoryKey: "medicalTourism",
    image: "/images/hero-istanbul-2.jpg",
    readTime: 5,
    date: "2025-12-05",
    author: "Dr. Mehmet Kaya",
  },
];
