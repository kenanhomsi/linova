"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, Text, Box, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { IconClock, IconArrowRight } from "@tabler/icons-react";
import type { BlogPost } from "@/lib/blog-data";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export function BlogCard({ post, index, featured = false }: BlogCardProps) {
  const t = useTranslations("blogs");
  const posts = t.raw("posts") as Array<{
    title: string;
    excerpt: string;
  }>;

  const postTranslation = posts[index];
  if (!postTranslation) return null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/blogs/${post.slug}`} className={styles.link}>
        <Card
          padding={0}
          radius="lg"
          className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
        >
          <Box className={styles.imageWrap}>
            <Image
              src={post.image}
              alt={postTranslation.title}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"}
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
            <Box className={styles.categoryBadge}>
              {t(`categories.${post.categoryKey}`)}
            </Box>
            {post.featured && (
              <Box className={styles.featuredBadge}>
                {t("featuredBadge")}
              </Box>
            )}
          </Box>
          <Box className={styles.content}>
            <Group gap="sm" className={styles.meta}>
              <Text size="xs" className={styles.date}>
                {formattedDate}
              </Text>
              <span className={styles.metaDot}>·</span>
              <Group gap={4} wrap="nowrap">
                <IconClock size={13} stroke={2} className={styles.clockIcon} />
                <Text size="xs" className={styles.readTime}>
                  {post.readTime} {t("minRead")}
                </Text>
              </Group>
            </Group>
            <h3 className={styles.title}>{postTranslation.title}</h3>
            <Text size="sm" lh={1.65} className={styles.excerpt} lineClamp={featured ? 3 : 2}>
              {postTranslation.excerpt}
            </Text>
            <Group gap="xs" className={styles.footer}>
              <Text size="xs" className={styles.author}>
                {t("byAuthor")} {post.author}
              </Text>
              <span className={styles.readMore}>
                {t("readMore")} <IconArrowRight size={14} stroke={2.5} />
              </span>
            </Group>
          </Box>
        </Card>
      </Link>
    </motion.div>
  );
}
