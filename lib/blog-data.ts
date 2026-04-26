import { hollywoodSmileLongArticle } from "./treatmentData";
import { dentalVeneersLongArticle } from "./dentalVeneersArticle";
import { dentalImplantsLongArticle } from "./dentalImplantsArticle";
import { allOn46LongArticle } from "./allOn46Article";
import { teethWhiteningLongArticle } from "./teethWhiteningArticle";
import { compositeBondingLongArticle } from "./compositeBondingArticle";

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
    image: "/images/Hollywood Smile Makeover-2.jpeg",
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
  {
    id: "4",
    slug: "all-on-4-6",
    category: "dentalImplants",
    categoryKey: "dentalImplants",
    image: "/images/all-in-4-6_2.jpeg",
    readTime: 11,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: false,
    title: "All-on-4 & All-on-6 Dental Implants",
    excerpt:
      "Evidence-based full-arch implant rehabilitation: how All-on-4 and All-on-6 restore a complete arch with fixed, implant-supported teeth and high long-term survival rates.",
    contentImages: [...allOn46LongArticle.contentImages],
    content: allOn46LongArticle.content,
  },
  {
    id: "5",
    slug: "teeth-whitening",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/Teeth Whitening.jpeg",
    readTime: 6,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: false,
    title: "Teeth Whitening",
    excerpt:
      "How professional teeth whitening lightens natural teeth safely, what causes discoloration, and what to expect from treatment at the clinic.",
    contentImages: [...teethWhiteningLongArticle.contentImages],
    content: teethWhiteningLongArticle.content,
  },
  {
    id: "6",
    slug: "composite-bonding",
    category: "cosmeticDentistry",
    categoryKey: "cosmeticDentistry",
    image: "/images/compositeBonding.jpeg",
    readTime: 7,
    date: "2026-04-01",
    author: "LINOVA Dental Team",
    featured: false,
    title: "Composite Bonding",
    excerpt:
      "Composite bonding uses tooth-colored resin to fix chips, gaps, and minor shape issues—often in one visit, with minimal removal of natural enamel.",
    contentImages: [...compositeBondingLongArticle.contentImages],
    content: compositeBondingLongArticle.content,
  },
];
