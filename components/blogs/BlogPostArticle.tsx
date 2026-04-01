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
  Divider,
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

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function renderContentBlock(block: string, post: BlogPost, key: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed === "---") {
    return <Divider key={key} my="sm" />;
  }

  const imageMatch = trimmed.match(/^\[IMAGE:(\d+)\]$/);
  if (imageMatch) {
    const idx = Number(imageMatch[1]) - 1;
    const src = post.contentImages?.[idx];
    if (!src) return null;
    return (
      <Box key={key} className={styles.contentImageWrap}>
        {/* Using <img> here to preserve intrinsic aspect ratio without stretching */}
        <img src={src} alt="" loading="lazy" className={styles.contentImage} />
      </Box>
    );
  }

  if (trimmed.startsWith("# ")) {
    return (
      <Title key={key} order={2} mt="md">
        {trimmed.replace(/^#\s+/, "")}
      </Title>
    );
  }

  if (trimmed.startsWith("## ")) {
    return (
      <Title key={key} order={3} mt="md">
        {trimmed.replace(/^##\s+/, "")}
      </Title>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <Title key={key} order={4} mt="sm">
        {trimmed.replace(/^###\s+/, "")}
      </Title>
    );
  }

  const lines = trimmed.split("\n").map((l) => l.trim());
  const listItems = lines.filter((l) => l.startsWith("* ")).map((l) => l.slice(2));
  if (listItems.length > 0 && listItems.length === lines.length) {
    return (
      <Box key={key} component="ul" pl="lg" style={{ margin: 0 }}>
        {listItems.map((item, i) => (
          <li key={i}>
            <Text size="md" lh={1.8} className={styles.paragraph}>
              {renderInlineBold(item)}
            </Text>
          </li>
        ))}
      </Box>
    );
  }

  return (
    <Text key={key} size="md" lh={1.8} className={styles.paragraph}>
      {renderInlineBold(trimmed)}
    </Text>
  );
}

export function BlogPostArticle({ post, postIndex }: BlogPostArticleProps) {
  const t = useTranslations("blogs");

  const formattedDate = post.date;

  const blocks = post.content
    .split("\n\n")
    .filter((p: string) => p.trim().length > 0);

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost =
    postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const prevTitle = prevPost ? prevPost.title : null;
  const nextTitle = nextPost ? nextPost.title : null;

  return (
    <Box className={styles.root}>
      {/* Hero */}
      <Box className={styles.hero}>
        <Image
          src={post.image}
          alt={post.title}
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
                {post.title}
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
      <Container className={styles.articleWrap}>
        <FadeInUp delay={0.1}>
          <Box className={styles.excerpt}>
            <Text size="lg" fw={500} lh={1.7}>
              {post.excerpt}
            </Text>
          </Box>
        </FadeInUp>

        <article className={styles.article}>
          {blocks.map((block: string, i: number) =>
            renderContentBlock(block, post, i)
          )}
        </article>

        {/* CTA */}
        <FadeInUp delay={0.2}>
          <Box className={styles.ctaBox} suppressHydrationWarning>
            <Title order={3} className={styles.ctaTitle}>
              Ready to Transform Your Smile?
            </Title>
            <Text size="md" className={styles.ctaText}>
              Book a free consultation with our expert team and start your
              journey today.
            </Text>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                radius="md"
                fw={600}
                className={styles.ctaBtn}
                suppressHydrationWarning
              >
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
