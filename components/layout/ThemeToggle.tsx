"use client";

import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      radius="md"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={styles.button}
    >
      {theme === "light" ? <IconMoon size={20} stroke={2} /> : <IconSun size={20} stroke={2} />}
    </ActionIcon>
  );
}
