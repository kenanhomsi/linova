import { hollywoodSmileLongArticle } from "./treatmentData";
import { dentalVeneersLongArticle } from "./dentalVeneersArticle";
import { dentalImplantsLongArticle } from "./dentalImplantsArticle";

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
  title: string;
  excerpt: string;
  content: string;
  contentImages: string[];
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
    slug: "hollywood-smile-makeover",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/Hollywood Smile Makeover.jpeg",
    readTime: 10,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: true,
    title: "Hollywood Smile Makeover",
    excerpt:
      "A beautiful smile can transform the way a person feels about themselves. Learn what a Hollywood Smile is, how it’s designed, and which materials (E-MAX or Zirconia) may be used.",
    contentImages: hollywoodSmileLongArticle.contentImages,
    content: hollywoodSmileLongArticle.content,
  },
  {
    id: "2",
    slug: "dental-veneers",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/Dental Veneers.jpeg",
    readTime: 9,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: false,
    title: "Dental Veneers",
    excerpt:
      "Dental veneers are thin custom-made shells bonded to the front of teeth to improve color, shape, and symmetry—designed to look natural while preserving most tooth structure.",
    contentImages: [...dentalVeneersLongArticle.contentImages],
    content: dentalVeneersLongArticle.content,
  },
  {
    id: "3",
    slug: "dental-implants",
    category: "dentalImplants",
    categoryKey: "dentalImplants",
    image: "/images/dental-implants/pic1.jpeg",
    readTime: 8,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: false,
    title: "Dental Implants",
    excerpt:
      "Dental implants are titanium posts placed in the jaw to replace missing tooth roots—restoring function, aesthetics, and helping preserve jawbone structure over time.",
    contentImages: [...dentalImplantsLongArticle.contentImages],
    content: dentalImplantsLongArticle.content,
  },
];
