"use client";

import { createTheme, MantineProvider as MantineProviderBase } from "@mantine/core";

type MantineProviderProps = {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
};

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  defaultRadius: "md",
  radius: {
    xs: "6px",
    sm: "8px",
    md: "10px",
    lg: "14px",
    xl: "18px",
  },
  focusRing: "auto",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
        fw: 600,
      },
      styles: {
        root: {
          "&:focus-visible": {
            outline: "2px solid var(--mantine-color-teal-6)",
            outlineOffset: 2,
          },
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
      styles: {
        input: {
          "&:focus": {
            borderColor: "var(--mantine-color-teal-6)",
            boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.15)",
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
      styles: {
        input: {
          "&:focus": {
            borderColor: "var(--mantine-color-teal-6)",
            boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.15)",
          },
        },
      },
    },
    Select: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
      styles: {
        input: {
          "&:focus": {
            borderColor: "var(--mantine-color-teal-6)",
            boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.15)",
          },
        },
      },
    },
    Card: {
      defaultProps: {
        radius: "lg",
        shadow: "sm",
      },
    },
    Drawer: {
      styles: {
        content: {
          borderRadius: "18px 0 0 18px",
        },
      },
    },
  },
});

export function MantineProvider({ children, direction = "ltr" }: MantineProviderProps) {
  return (
    <MantineProviderBase theme={theme} defaultColorScheme="light" direction={direction}>
      {children}
    </MantineProviderBase>
  );
}
