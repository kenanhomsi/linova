import { notFound } from "next/navigation";
import { Container, Title } from "@mantine/core";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { BlogPostArticle } from "@/components/blogs/BlogPostArticle";
import { BackToTop } from "@/components/layout/BackToTop";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { routing } from "@/i18n/routing";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/lib/structured-data";
import { getTreatmentBySlug } from "@/lib/treatments";

import type { Metadata } from "next";

const BASE_URL = "https://linovaclinic.com";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.flatMap((post) =>
    routing.locales.map((locale) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return {
      title: "Not found",
      robots: { index: false, follow: false },
    };
  }

  const post = BLOG_POSTS[postIndex];

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/blogs/${slug}`;
  }
  languages["x-default"] = `${BASE_URL}/en/blogs/${slug}`;

  const absoluteOgImage = post.image.startsWith("http")
    ? post.image
    : `${BASE_URL}${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blogs/${slug}`,
      languages,
    },
    openGraph: {
      type: "article",
      siteName: "Linova Clinic Istanbul",
      title: `${post.title} | Linova Clinic`,
      description: post.excerpt,
      url: `${BASE_URL}/${locale}/blogs/${slug}`,
      images: [{ url: absoluteOgImage, alt: post.title }],
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Linova Clinic`,
      description: post.excerpt,
      images: [absoluteOgImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (postIndex === -1) notFound();

  const post = BLOG_POSTS[postIndex];
  const absoluteUrl = `${BASE_URL}/${locale}/blogs/${slug}`;
  const absoluteOgImage = post.image.startsWith("http")
    ? post.image
    : `${BASE_URL}${post.image}`;

  const slugToTreatment: Record<string, string> = {
    "hollywood-smile-makeover": "hollywood-smile",
  };
  const relatedTreatment =
    getTreatmentBySlug(slug) ?? getTreatmentBySlug(slugToTreatment[slug] ?? "");
  const tCommon = await getTranslations("common");
  const tBlogs = await getTranslations("blogs");
  const tTreatments = await getTranslations("treatments");

  return (
    <main>
      <BlogPostingJsonLd
        url={absoluteUrl}
        headline={post.title}
        description={post.excerpt}
        image={absoluteOgImage}
        datePublished={new Date(post.date).toISOString()}
        authorName={post.author}
        inLanguage={locale}
      />
      <BreadcrumbJsonLd
        items={[
          { name: tCommon("nav.home"), url: `${BASE_URL}/${locale}` },
          { name: tBlogs("title"), url: `${BASE_URL}/${locale}/blogs` },
          { name: post.title, url: `${BASE_URL}/${locale}/blogs/${slug}` },
        ]}
      />
      <BlogPostArticle post={post} postIndex={postIndex} />
      {relatedTreatment ? (
        <section>
          <Container size="md" py="xl">
            <Title order={2} mb="md">
              {tTreatments("detail.relatedTreatments")}
            </Title>
            <ServiceCard treatment={relatedTreatment} />
          </Container>
        </section>
      ) : null}
      <BackToTop />
    </main>
  );
}
