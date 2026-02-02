"use client";

import { useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { useTheme } from "./ThemeProvider";

export function SyncColorScheme() {
  const { theme } = useTheme();
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return null;
}
