"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Container,
  Title,
  Text,
  Box,
  Stack,
  Group,
  Button,
} from "@mantine/core";
import {
  IconClock,
  IconCalendar,
  IconUser,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import { FadeInUp } from "@/components/ui/Animate";
import { BLOG_POSTS } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";
import styles from "./BlogPostArticle.module.css";

interface BlogPostArticleProps {
  post: BlogPost;
  postIndex: number;
}

export function BlogPostArticle({ post, postIndex }: BlogPostArticleProps) {
  const t = useTranslations("blogs");
  const posts = t.raw("posts") as Array<{
    title: string;
    excerpt: string;
    content: string;
  }>;

  const postTranslation = posts[postIndex];
  if (!postTranslation) return null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paragraphs = postTranslation.content
    .split("\n\n")
    .filter((p: string) => p.trim().length > 0);

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost =
    postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const prevTitle = prevPost ? posts[postIndex - 1]?.title : null;
  const nextTitle = nextPost ? posts[postIndex + 1]?.title : null;

  return (
    <Box className={styles.root}>
      {/* Hero */}
      <Box className={styles.hero}>
        <Image
          src={post.image}
          alt={postTranslation.title}
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <Container size="md" className={styles.heroContent}>
          <FadeInUp>
            <Stack gap="md" className={styles.heroInner}>
              <Link href="/blogs" className={styles.backLink}>
                <IconArrowLeft size={16} stroke={2} />
                {t("title")}
              </Link>
              <Box className={styles.categoryBadge}>
                {t(`categories.${post.categoryKey}`)}
              </Box>
              <Title order={1} className={styles.title}>
                {postTranslation.title}
              </Title>
              <Group gap="lg" className={styles.meta}>
                <Group gap={6} wrap="nowrap">
                  <IconCalendar size={15} stroke={2} />
                  <Text size="sm">{formattedDate}</Text>
                </Group>
                <Group gap={6} wrap="nowrap">
                  <IconClock size={15} stroke={2} />
                  <Text size="sm">
                    {post.readTime} {t("minRead")}
                  </Text>
                </Group>
                <Group gap={6} wrap="nowrap">
                  <IconUser size={15} stroke={2} />
                  <Text size="sm">{post.author}</Text>
                </Group>
              </Group>
            </Stack>
          </FadeInUp>
        </Container>
      </Box>

      {/* Article Body */}
      <Container size="sm" className={styles.articleWrap}>
        <FadeInUp delay={0.1}>
          <Box className={styles.excerpt}>
            <Text size="lg" fw={500} lh={1.7}>
              {postTranslation.excerpt}
            </Text>
          </Box>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <article className={styles.article}>
            {paragraphs.map((paragraph: string, i: number) => (
              <Text key={i} size="md" lh={1.8} className={styles.paragraph}>
                {paragraph}
              </Text>
            ))}
          </article>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={0.2}>
          <Box className={styles.ctaBox}>
            <Title order={3} className={styles.ctaTitle}>
              Ready to Transform Your Smile?
            </Title>
            <Text size="md" className={styles.ctaText}>
              Book a free consultation with our expert team and start your
              journey today.
            </Text>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button size="lg" radius="md" fw={600} className={styles.ctaBtn}>
                Get Free Consultation
              </Button>
            </Link>
          </Box>
        </FadeInUp>

        {/* Navigation */}
        <Box className={styles.navRow}>
          {prevPost ? (
            <Link
              href={`/blogs/${prevPost.slug}`}
              className={styles.navLink}
            >
              <IconArrowLeft size={16} stroke={2} />
              <Box>
                <Text size="xs" className={styles.navLabel}>
                  Previous
                </Text>
                <Text size="sm" fw={600} className={styles.navTitle} lineClamp={1}>
                  {prevTitle}
                </Text>
              </Box>
            </Link>
          ) : (
            <span />
          )}
          {nextPost ? (
            <Link
              href={`/blogs/${nextPost.slug}`}
              className={`${styles.navLink} ${styles.navLinkRight}`}
            >
              <Box>
                <Text size="xs" className={styles.navLabel}>
                  Next
                </Text>
                <Text size="sm" fw={600} className={styles.navTitle} lineClamp={1}>
                  {nextTitle}
                </Text>
              </Box>
              <IconArrowRight size={16} stroke={2} />
            </Link>
          ) : (
            <span />
          )}
        </Box>
      </Container>
    </Box>
  );
}
