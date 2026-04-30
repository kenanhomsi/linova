"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Box,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { PHONE, PHONE_TEL, EMAIL, SOCIAL } from "@/lib/constants";
import styles from "./Footer.module.css";

const FOOTER_SERVICES_CONFIG = [
  { href: "/treatments", labelKey: "footerServices.cosmeticDentistry" },
  { href: "/treatments", labelKey: "footerServices.dentalImplants" },
  { href: "/packages", labelKey: "footerServices.dentalPackages" },
  { href: "/istanbul-experience", labelKey: "footerServices.istanbulExperience" },
  { href: "/why-us", labelKey: "footerServices.medicalTourism" },
  { href: "/#technology", labelKey: "footerServices.technology" },
] as const;

const FOOTER_TREATMENTS_CONFIG = [
  { href: "/treatments", labelKey: "footerTreatments.hollywoodSmile" },
  { href: "/treatments", labelKey: "footerTreatments.allOn4Implants" },
  { href: "/treatments", labelKey: "footerTreatments.veneers" },
  { href: "/treatments", labelKey: "footerTreatments.teethWhitening" },
] as const;

const FOOTER_LEGAL_CONFIG = [
  { href: "/privacy", labelKey: "footerLegal.privacyPolicy", external: false },
  { href: "/terms", labelKey: "footerLegal.termsOfService", external: false },
  { href: "https://readdy.link", labelKey: "footerLegal.websiteBuilder", external: true },
] as const;

export function Footer() {
  const t = useTranslations("common");

  const socialLinks = [
    { labelKey: "footer.instagram", href: SOCIAL.instagram, Icon: IconBrandInstagram },
    { labelKey: "footer.facebook", href: SOCIAL.facebook, Icon: IconBrandFacebook },
    { labelKey: "footer.youtube", href: SOCIAL.youtube, Icon: IconBrandYoutube },
    { labelKey: "footer.whatsapp", href: SOCIAL.whatsapp, Icon: IconBrandWhatsapp },
  ];

  return (
    <footer className={styles.footer}>
      <Box component="section" py={{ base: "sm", sm: "lg" }} className={styles.ctaBar}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="md" className={styles.ctaGroup}>
            <Text size="lg" fw={600} c="white" className={styles.ctaText}>
              {t("footer.doYouWantAppointment")}
            </Text>
            <Link href="/contact" className={styles.ctaLink}>
              <Button
                size="md"
                radius="md"
                fw={600}
                component={motion.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={styles.ctaButton}
              >
                {t("footer.getAnAppointment")}
              </Button>
            </Link>
          </Group>
        </Container>
      </Box>

      <Container size="xl" py={{ base: "md", sm: "xl" }} className={styles.footerMain}>
        <Box mb={{ base: "md", sm: "xl" }} >
          <Link href="/" className={styles.footerLogoLink} aria-label={t("siteName")}>
            <Image
              src="/logo-white.png"
              alt="Linova Clinic"
              width={425}
              height={186}
              className={styles.footerLogo}
              priority={false}
              quality={80}
              sizes="(max-width: 768px) 300px, 425px"
            />
          </Link>
        </Box>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: "sm", md: "lg", lg: "xl" }}
          mb={{ base: "md", sm: "xl" }}
        >
          <Box>
            <Title order={3} size="h4" c="white" fw={700} mb="sm" className={styles.sectionTitle}>
              {t("siteName")}
            </Title>
            <Stack gap="xs" className={styles.footerLinkStack}>
              <Link href="/why-us" className={styles.footerLink}>
                {t("footer.aboutUs")}
              </Link>
              <Link href="/treatments" className={styles.footerLink}>
                {t("footer.treatments")}
              </Link>
              <Link href="/#gallery" className={styles.footerLink}>
                {t("footer.smileGallery")}
              </Link>
              <Link href="/why-us" className={styles.footerLink}>
                {t("footer.team")}
              </Link>
              <Link href="/blogs" className={styles.footerLink}>
                {t("footer.blog")}
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                {t("footer.contact")}
              </Link>
            </Stack>
          </Box>

          <Box>
            <Title order={3} size="h4" c="white" fw={700} mb="sm" className={styles.sectionTitle}>
              {t("footer.services")}
            </Title>
            <Stack gap="xs" className={styles.footerLinkStack}>
              {FOOTER_SERVICES_CONFIG.map(({ href, labelKey }) => (
                <Link key={labelKey} href={href} className={styles.footerLink}>
                  {t(labelKey)}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Title order={3} size="h4" c="white" fw={700} mb="sm" className={styles.sectionTitle}>
              {t("footer.popularTreatments")}
            </Title>
            <Stack gap="xs" className={styles.footerLinkStack}>
              {FOOTER_TREATMENTS_CONFIG.map(({ href, labelKey }) => (
                <Link key={labelKey} href={href} className={styles.footerLink}>
                  {t(labelKey)}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Title order={3} size="h4" c="white" fw={700} mb="sm" className={styles.sectionTitle}>
              {t("footer.getInTouch")}
            </Title>
            <Stack gap="sm" mb="lg" className={styles.footerContactStack}>
              <a href={PHONE_TEL} className={styles.contactLink}>
                <IconPhone size={18} stroke={2} />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                <IconMail size={18} stroke={2} />
                {EMAIL}
              </a>
            </Stack>
            <Title order={3} size="h4" c="white" fw={700} mb="sm" className={styles.sectionTitle}>
              {t("footer.visitUs")}
            </Title>
            <Group gap="sm" align="flex-start">
              <IconMapPin size={18} stroke={2} className={styles.mapIcon} />
              <Text
                size="sm"
                c="rgba(255,255,255,0.75)"
                lh={1.5}
                className={styles.addressText}
              >
                {t("address").replace(/,\s*/, "\n")}
              </Text>
            </Group>
          </Box>
        </SimpleGrid>

        <Divider color="rgba(255,255,255,0.15)" mb="lg" className={styles.footerDivider} />

        <Group justify="space-between" wrap="wrap" gap="md" className={styles.footerBottomGroup}>
          <Group gap="sm">
            {socialLinks.map(({ labelKey, href, Icon }) => (
              <a
                key={labelKey}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={t(labelKey)}
                className={styles.socialBtn}
              >
                <motion.span
                  className={styles.socialIconWrap}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={20} stroke={2} />
                </motion.span>
              </a>
            ))}
          </Group>
          <Text size="xs" c="rgba(255,255,255,0.6)">
            © {new Date().getFullYear()} {t("siteName")}. {t("footer.allRightsReserved")}.
          </Text>
          <Group gap={4}>
            {FOOTER_LEGAL_CONFIG.map((item, i) => (
              <span key={item.labelKey} className={styles.legalWrap}>
                {i > 0 && <span className={styles.legalSeparator}>|</span>}
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.legalLink}
                  >
                    <motion.span
                      className={styles.legalSpan}
                      whileHover={{ color: "white" }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(item.labelKey)}
                    </motion.span>
                  </a>
                ) : (
                  <Link href={item.href as "/privacy"} className={styles.legalLink}>
                    <motion.span
                      className={styles.legalSpan}
                      whileHover={{ color: "white" }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(item.labelKey)}
                    </motion.span>
                  </Link>
                )}
              </span>
            ))}
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
