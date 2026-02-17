"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Box, Group, UnstyledButton, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import type { BlogCategory } from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import styles from "./BlogsGrid.module.css";

export function BlogsGrid() {
  const t = useTranslations("blogs");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

  const filteredPosts =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <Box className={styles.root}>
      <Container size="xl">
        <Stack gap="xl">
          {/* Category Filter Tabs */}
          <Box className={styles.filtersWrap}>
            <Group gap="xs" justify="center" wrap="wrap">
              {BLOG_CATEGORIES.map((cat) => (
                <UnstyledButton
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
                >
                  {t(`categories.${cat}`)}
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="blogCategoryBar"
                      className={styles.activeBar}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </UnstyledButton>
              ))}
            </Group>
          </Box>

          {/* Results count */}
          <Text size="sm" fw={500} className={styles.resultCount}>
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </Text>

          {/* Blog Cards Grid */}
          <StaggerContainer staggerChildren={0.06} delayChildren={0.05}>
            <div className={styles.grid}>
              {filteredPosts.map((post) => {
                const globalIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
                return (
                  <StaggerItem key={post.id} className={styles.gridItem}>
                    <BlogCard
                      post={post}
                      index={globalIndex}
                      featured={post.featured}
                    />
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </Stack>
      </Container>
    </Box>
  );
}
