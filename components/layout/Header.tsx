"use client";

import Image from "next/image";
import {
  Container,
  Group,
  Burger,
  Button,
  Drawer,
  Stack,
  useDirection,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/public/logo-m2.svg";

import styles from "./Header.module.css";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
const NAV_CONFIG = [
  { href: "/", labelKey: "nav.home" },
  { href: "/treatments", labelKey: "nav.Treatments" },
  // { href: "/packages", labelKey: "nav.packages" },
  { href: "/why-us", labelKey: "nav.whyChooseUs" },
  { href: "/istanbul-experience", labelKey: "nav.istanbulExperience" },
  { href: "/blogs", labelKey: "nav.blog" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

function normalizePath(path: string) {
  // Keep root as-is; remove trailing slashes for stable comparisons.
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

function isNavItemActive(currentPathname: string, href: string) {
  // Hash anchors (e.g. /#technology) are section links, not pages — never mark active.
  if (href.includes("#")) return false;

  const current = normalizePath(currentPathname);
  const linkPath = normalizePath(href);

  if (current === linkPath) return true;

  // Nested routes match only on a segment boundary.
  if (linkPath !== "/" && current.startsWith(`${linkPath}/`)) return true;

  return false;
}

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { dir } = useDirection();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const t = useTranslations("common");

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 1px 3px rgba(0,0,0,0.05)", "0 4px 20px rgba(0,0,0,0.12)"],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["saturate(100%) blur(0px)", "saturate(180%) blur(12px)"],
  );

  const navItems = (
    <Group gap="xl" wrap="nowrap" className={styles.navGroup}>
      {NAV_CONFIG.map(({ href, labelKey }) => {
        const isActive = isNavItemActive(pathname, href);
        return (
          <Link key={href} href={href} className={styles.link}>
            <span
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {t(labelKey)}
            </span>
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
      <Container size="xl" py="md" px={{ base: "xs", sm: "md" }}>
        <Group
          justify="space-between"
          wrap="nowrap"
          gap="sm"
          className={styles.headerInner}
        >
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo-m2.svg"
              alt="Linova Clinic"
              width={160}
              height={61}
              className={styles.headerLogo}
              priority
              unoptimized={true} // SVG optimization can cause styling issues
            />
          </Link>

          <div className={styles.centerNav}>
            <nav className={styles.nav} aria-label="Main navigation">
              {navItems}
            </nav>
          </div>

          <Group gap="sm" wrap="nowrap" className={styles.actions}>
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <Button
                variant="outline"
                color="gray"
                size="sm"
                fw={600}
                leftSection={<IconBrandWhatsapp size={18} />}
                visibleFrom="lg"
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
                visibleFrom="lg"
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
              hiddenFrom="lg"
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
        title={
          <Link href="/" onClick={close} className={styles.drawerLogoLink}>
            <Image
              src={logo}
              alt="Linova Clinic"
              width={90}
              height={61}
              decoding="async"
            />
          </Link>
        }
        position={dir === "rtl" ? "left" : "right"}
        size="sm"
        styles={{
          content: {
            borderTopLeftRadius: dir === "rtl" ? 0 : 18,
            borderBottomLeftRadius: dir === "rtl" ? 0 : 18,
            borderTopRightRadius: dir === "rtl" ? 18 : 0,
            borderBottomRightRadius: dir === "rtl" ? 18 : 0,
          },
        }}
        classNames={{
          header: styles.drawerHeader,
          body: styles.drawerBody,
        }}
      >
        <Stack gap={4}>
          {NAV_CONFIG.map(({ href, labelKey }) => {
            const isActive = isNavItemActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(labelKey)}
              </Link>
            );
          })}
        </Stack>
        <Stack gap="md" mt="xl" className={styles.drawerSection}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerWhatsApp}
          >
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
          <Link
            href="/contact"
            className={styles.drawerWhatsApp}
            onClick={close}
          >
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
