"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Container,
  Group,
  Burger,
  Button,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Header.module.css";

const NAV_CONFIG = [
  { href: "/", labelKey: "nav.home" },
  { href: "/treatments", labelKey: "nav.services" },
  { href: "/why-us", labelKey: "nav.whyChooseUs" },
  { href: "/#technology", labelKey: "nav.technology" },
  { href: "/blogs", labelKey: "nav.blog" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const t = useTranslations("common");

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 1px 3px rgba(0,0,0,0.05)", "0 4px 20px rgba(0,0,0,0.12)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["saturate(100%) blur(0px)", "saturate(180%) blur(12px)"]
  );

  const navItems = (
    <Group gap="xl" wrap="nowrap" className={styles.navGroup}>
      {NAV_CONFIG.map(({ href, labelKey }) => {
        const linkPath = href.split("#")[0];
        const isActive =
          pathname === href ||
          (linkPath !== "/" && pathname.startsWith(linkPath));
        return (
          <Link key={href} href={href} className={styles.link}>
            <motion.span
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              whileHover={{ color: "var(--readdy-teal)" }}
              transition={{ duration: 0.2 }}
            >
              {t(labelKey)}
            </motion.span>
          </Link>
        );
      })}
    </Group>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={styles.header}
      style={{
        boxShadow: headerShadow,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        ["--nav-color" as string]: "var(--header-fg)",
        ["--nav-active" as string]: "var(--readdy-teal)",
        ["--nav-hover" as string]: "var(--readdy-teal-hover)",
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" wrap="nowrap" gap="md">
          <span className={styles.logoWrap}>
            <Logo variant={"default"} />
          </span>

          <div className={styles.centerNav}>
            <nav className={styles.nav} aria-label="Main navigation">
              {navItems}
            </nav>
          </div>

          <Group gap="sm" wrap="nowrap" className={styles.actions}>
            <LanguageSwitcher />
            <ThemeToggle />
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
              <Button
                variant="outline"
                color="gray"
                size="sm"
                fw={600}
                leftSection={<IconBrandWhatsapp size={18} />}
                visibleFrom="sm"
                component={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={styles.whatsappBtn}
              >
                {t("whatsapp")}
              </Button>
            </a>
            <Link href="/contact" className={styles.contactLink}>
              <Button
                size="sm"
                fw={600}
                visibleFrom="sm"
                component={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={styles.ctaBtn}
              >
                {t("getAppointment")}
              </Button>
            </Link>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color={"var(--header-fg)"}
              aria-label="Toggle navigation"
            />
          </Group>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        position="right"
        size="sm"
        classNames={{
          header: styles.drawerHeader,
          body: styles.drawerBody,
        }}
      >
        <Stack gap={4}>
          {NAV_CONFIG.map(({ href, labelKey }) => {
            const linkPath = href.split("#")[0];
            const isActive =
              pathname === href ||
              (linkPath !== "/" && pathname.startsWith(linkPath));
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
              >
                {t(labelKey)}
              </Link>
            );
          })}
        </Stack>
        <Stack gap="md" mt="xl" className={styles.drawerSection}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.drawerWhatsApp}>
            <Button
              variant="outline"
              fullWidth
              size="md"
              fw={600}
              leftSection={<IconBrandWhatsapp size={18} />}
              component={motion.button}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={styles.drawerWhatsAppBtn}
            >
              {t("whatsapp")}
            </Button>
          </a>
          <Link href="/contact" className={styles.drawerWhatsApp} onClick={close}>
            <Button
              variant="filled"
              fullWidth
              size="md"
              fw={600}
              component={motion.button}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={styles.drawerContactBtn}
            >
              {t("bookNow")}
            </Button>
          </Link>
        </Stack>
      </Drawer>
    </motion.header>
  );
}
