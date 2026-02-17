import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogPostArticle } from "@/components/blogs/BlogPostArticle";
import { BackToTop } from "@/components/layout/BackToTop";
import { BreadcrumbJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.flatMap((post) =>
    routing.locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (postIndex === -1) return {};

  const t = await getTranslations({ locale, namespace: "blogs" });
  const posts = t.raw("posts") as Array<{ title: string; excerpt: string }>;
  const postTranslation = posts[postIndex];

  if (!postTranslation) return {};

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/blogs/${slug}`;
  }
  languages["x-default"] = `${BASE_URL}/en/blogs/${slug}`;

  return {
    title: postTranslation.title,
    description: postTranslation.excerpt,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blogs/${slug}`,
      languages,
    },
    openGraph: {
      title: `${postTranslation.title} | Linova Clinic`,
      description: postTranslation.excerpt,
      url: `${BASE_URL}/${locale}/blogs/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (postIndex === -1) notFound();

  const post = BLOG_POSTS[postIndex];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}` },
          { name: "Blog", url: `${BASE_URL}/${locale}/blogs` },
          { name: post.slug, url: `${BASE_URL}/${locale}/blogs/${slug}` },
        ]}
      />
      <BlogPostArticle post={post} postIndex={postIndex} />
      <BackToTop />
    </main>
  );
}
