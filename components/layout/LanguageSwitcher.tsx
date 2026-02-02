"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button, Group, Menu } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";

const localeLabels: Record<string, string> = {
  en: "EN",
  ar: "AR",
  tr: "TR",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Menu position="bottom-end" shadow="md" width={120}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="sm"
          leftSection={<IconLanguage size={18} />}
          className="lang-switcher-btn"
        >
          {localeLabels[locale] ?? locale.toUpperCase()}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {(routing.locales as readonly string[]).map((loc) => (
          <Menu.Item
            key={loc}
            onClick={() => switchLocale(loc)}
            style={{ fontWeight: locale === loc ? 700 : 400 }}
          >
            {localeLabels[loc] ?? loc.toUpperCase()}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
