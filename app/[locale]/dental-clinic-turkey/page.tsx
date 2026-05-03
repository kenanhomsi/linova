import type { Metadata } from "next";
import { Box, Button, Card, Container, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  MedicalBusinessJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/lib/structured-data";

const BASE_URL = "https://linovaclinic.com";
const PAGE_PATH = "/dental-clinic-turkey";

type Locale = "en" | "tr" | "ar";

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  whyTitle: string;
  reasons: string[];
  treatmentTitle: string;
  treatments: Array<{ title: string; description: string; href: string }>;
  supportTitle: string;
  supportItems: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  learnMoreLabel: string;
  packagesLabel: string;
  homeLabel: string;
  whyUsLabel: string;
  contactLabel: string;
  supportLinksText: string;
  metadataTitle: string;
  metadataDescription: string;
  breadcrumbName: string;
};

const pageContent: Record<Locale, PageContent> = {
  en: {
    eyebrow: "Dental Clinic in Turkey",
    title: "Linova Clinic in Istanbul for Dental Implants, Veneers, and Smile Makeovers",
    intro:
      "Linova Clinic is a patient-focused dental clinic in Turkey serving international visitors who want quality dentistry, clear planning, and a smoother treatment journey in Istanbul.",
    description:
      "If you are searching for a clinic in Turkey for dental implants, veneers, Hollywood Smile, or full mouth restoration, Linova combines digital dentistry, multilingual support, and dental tourism coordination in one place. Patients can start with an online consultation, receive a transparent treatment plan, and continue with help for transfers, accommodation, and aftercare.",
    whyTitle: "Why patients choose Linova Clinic",
    reasons: [
      "Clear treatment planning before travel, including expected timeline and pricing guidance.",
      "Strong focus on dental implants, veneers, Hollywood Smile, and restorative care.",
      "Multilingual support for international patients visiting Istanbul from abroad.",
      "A dental tourism process designed to reduce stress from consultation to aftercare.",
    ],
    treatmentTitle: "Popular treatments at our clinic in Turkey",
    treatments: [
      {
        title: "Dental Implants",
        description:
          "Single implants, multiple implants, and digitally planned implant solutions for long-term function and aesthetics.",
        href: "/treatments/dental-implants",
      },
      {
        title: "Dental Veneers",
        description:
          "Natural-looking veneers for patients who want a brighter, more balanced, and more confident smile.",
        href: "/treatments/dental-veneers",
      },
      {
        title: "Hollywood Smile",
        description:
          "A smile makeover approach that combines cosmetic planning, precision materials, and a tailored result.",
        href: "/treatments/hollywood-smile",
      },
    ],
    supportTitle: "What makes the experience more user-friendly",
    supportItems: [
      "Online consultation before booking flights.",
      "Help with hotel planning and airport transfers.",
      "Internal links to packages, treatments, and contact options.",
      "Follow-up support after treatment for international patients.",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Why do patients search for a dental clinic in Turkey?",
        answer:
          "Many patients compare Turkey for dental treatment because they want a balance of quality, transparent planning, and better value than prices in some Western countries. The decision should always include case suitability, materials, aftercare, and trust in the clinic.",
      },
      {
        question: "What treatments is Linova Clinic known for?",
        answer:
          "Linova Clinic focuses on dental implants, veneers, Hollywood Smile cases, restorative dentistry, and full smile rehabilitation supported by digital planning and international patient coordination.",
      },
      {
        question: "Can I start remotely before traveling to Istanbul?",
        answer:
          "Yes. Patients can start with an online consultation, share photos or X-rays, and receive an initial treatment direction before planning their trip.",
      },
    ],
    ctaTitle: "Start with a clearer treatment plan",
    ctaText:
      "If you are comparing a dental clinic in Turkey, the best next step is to request a consultation, review the treatment options, and choose the plan that fits your goals.",
    ctaPrimary: "Request Free Consultation",
    ctaSecondary: "View Treatments",
    learnMoreLabel: "Learn more",
    packagesLabel: "Packages",
    homeLabel: "Home",
    whyUsLabel: "Why Us",
    contactLabel: "Contact",
    supportLinksText:
      "Packages, Why Us, and Contact help users move to the right next step faster.",
    metadataTitle: "Dental Clinic in Turkey | Linova Clinic Istanbul",
    metadataDescription:
      "Looking for a dental clinic in Turkey? Discover Linova Clinic in Istanbul for dental implants, veneers, Hollywood Smile, and patient-friendly dental tourism support.",
    breadcrumbName: "Dental Clinic in Turkey",
  },
  tr: {
    eyebrow: "Türkiye'de Diş Kliniği",
    title: "İstanbul'da Diş İmplantı, Kaplama ve Gülüş Tasarımı için Linova Clinic",
    intro:
      "Linova Clinic, İstanbul'da kaliteli diş tedavisi, net planlama ve daha rahat bir hasta yolculuğu arayan uluslararası hastalara hizmet veren kullanıcı odaklı bir diş kliniğidir.",
    description:
      "Türkiye'de diş implantı, kaplama, Hollywood gülüş tasarımı veya tam ağız restorasyonu için klinik arıyorsanız, Linova dijital diş hekimliği, çok dilli destek ve sağlık turizmi koordinasyonunu tek yerde birleştirir. Hastalar online danışmanlıkla başlayabilir, şeffaf bir tedavi planı alabilir ve transfer, konaklama ve bakım sonrası desteğe ulaşabilir.",
    whyTitle: "Hastalar neden Linova Clinic'i tercih ediyor",
    reasons: [
      "Seyahatten önce süre ve fiyat beklentisini içeren net tedavi planlaması.",
      "Diş implantı, kaplama, Hollywood gülüş ve restoratif tedavilere güçlü odak.",
      "Yurt dışından İstanbul'a gelen hastalar için çok dilli destek.",
      "İlk danışmanlıktan bakım sonrasına kadar stresi azaltan sağlık turizmi süreci.",
    ],
    treatmentTitle: "Türkiye'deki kliniğimizde öne çıkan tedaviler",
    treatments: [
      {
        title: "Diş İmplantı",
        description:
          "Uzun ömürlü işlev ve estetik için tek diş, çoklu implant ve dijital planlamalı implant çözümleri.",
        href: "/treatments/dental-implants",
      },
      {
        title: "Diş Kaplamaları",
        description:
          "Daha aydınlık, dengeli ve özgüvenli bir gülüş isteyen hastalar için doğal görünümlü kaplamalar.",
        href: "/treatments/dental-veneers",
      },
      {
        title: "Hollywood Gülüş",
        description:
          "Estetik planlama, hassas malzeme seçimi ve kişiye özel sonuçları birleştiren gülüş tasarımı yaklaşımı.",
        href: "/treatments/hollywood-smile",
      },
    ],
    supportTitle: "Deneyimi daha kullanıcı dostu yapan noktalar",
    supportItems: [
      "Uçuş rezervasyonundan önce online danışmanlık.",
      "Otel planlaması ve havalimanı transfer desteği.",
      "Paketler, tedaviler ve iletişim sayfalarına kolay iç bağlantılar.",
      "Uluslararası hastalar için tedavi sonrası takip desteği.",
    ],
    faqTitle: "Sık sorulan sorular",
    faqs: [
      {
        question: "Hastalar neden Türkiye'de diş kliniği arıyor?",
        answer:
          "Birçok hasta, bazı Batı ülkelerine göre daha iyi fiyat dengesi, kaliteli tedavi ve şeffaf planlama için Türkiye'yi araştırır. Doğru karar; vaka uygunluğu, kullanılan malzemeler, bakım sonrası süreç ve kliniğe duyulan güven ile verilmelidir.",
      },
      {
        question: "Linova Clinic hangi tedavilerle öne çıkıyor?",
        answer:
          "Linova Clinic; diş implantı, kaplama, Hollywood gülüş, restoratif diş hekimliği ve dijital planlama destekli kapsamlı gülüş rehabilitasyonunda öne çıkar.",
      },
      {
        question: "İstanbul'a gelmeden önce sürece uzaktan başlayabilir miyim?",
        answer:
          "Evet. Hastalar online danışmanlıkla başlayabilir, fotoğraf veya röntgen paylaşabilir ve seyahat planından önce ilk tedavi yönlendirmesini alabilir.",
      },
    ],
    ctaTitle: "Daha net bir tedavi planıyla başlayın",
    ctaText:
      "Türkiye'de diş kliniği karşılaştırıyorsanız, en iyi sonraki adım danışmanlık istemek, tedavi seçeneklerini görmek ve hedeflerinize en uygun planı seçmektir.",
    ctaPrimary: "Ücretsiz Danışmanlık İsteyin",
    ctaSecondary: "Tedavileri Görün",
    learnMoreLabel: "Daha fazla bilgi",
    packagesLabel: "Paketler",
    homeLabel: "Ana Sayfa",
    whyUsLabel: "Neden Biz",
    contactLabel: "İletişim",
    supportLinksText:
      "Paketler, Neden Biz ve İletişim sayfaları kullanıcıların doğru sonraki adıma daha hızlı ulaşmasına yardımcı olur.",
    metadataTitle: "Türkiye'de Diş Kliniği | Linova Clinic İstanbul",
    metadataDescription:
      "Türkiye'de diş kliniği mi arıyorsunuz? Diş implantı, kaplama, Hollywood gülüş ve hasta dostu sağlık turizmi desteği için İstanbul'daki Linova Clinic'i keşfedin.",
    breadcrumbName: "Türkiye'de Diş Kliniği",
  },
  ar: {
    eyebrow: "عيادة أسنان في تركيا",
    title: "عيادة لينوفا في إسطنبول لزراعة الأسنان والفينير وتصميم الابتسامة",
    intro:
      "لينوفا هي عيادة أسنان في تركيا تركّز على راحة المريض، وتخدم الزوار الدوليين الباحثين عن علاج عالي الجودة وخطة واضحة وتجربة أسهل في إسطنبول.",
    description:
      "إذا كنت تبحث عن عيادة في تركيا لزراعة الأسنان أو الفينير أو ابتسامة هوليوود أو إعادة تأهيل الفم بالكامل، فإن لينوفا تجمع بين طب الأسنان الرقمي والدعم متعدد اللغات وتنسيق السياحة العلاجية في مكان واحد. يمكن للمريض البدء باستشارة عن بُعد والحصول على خطة علاج واضحة ثم متابعة الترتيبات الخاصة بالنقل والإقامة والمتابعة بعد العلاج.",
    whyTitle: "لماذا يختار المرضى عيادة لينوفا",
    reasons: [
      "خطة علاج واضحة قبل السفر تشمل مدة العلاج وتوجيهات التسعير.",
      "تركيز قوي على زراعة الأسنان والفينير وابتسامة هوليوود والعلاجات الترميمية.",
      "دعم متعدد اللغات للمرضى القادمين إلى إسطنبول من الخارج.",
      "رحلة سياحة علاجية مصممة لتقليل التوتر من الاستشارة حتى المتابعة.",
    ],
    treatmentTitle: "العلاجات الأكثر طلبًا في عيادتنا في تركيا",
    treatments: [
      {
        title: "زراعة الأسنان",
        description:
          "حلول للزرعة الواحدة والزرعات المتعددة مع تخطيط رقمي لتحقيق وظيفة طويلة الأمد ومظهر جمالي مميز.",
        href: "/treatments/dental-implants",
      },
      {
        title: "فينير الأسنان",
        description:
          "فينير طبيعي المظهر للمرضى الذين يريدون ابتسامة أكثر إشراقًا وتوازنًا وثقة.",
        href: "/treatments/dental-veneers",
      },
      {
        title: "ابتسامة هوليوود",
        description:
          "نهج متكامل لتجديد الابتسامة يجمع التخطيط التجميلي والخامات الدقيقة والنتيجة المصممة خصيصًا.",
        href: "/treatments/hollywood-smile",
      },
    ],
    supportTitle: "ما الذي يجعل التجربة أكثر سهولة للمستخدم",
    supportItems: [
      "استشارة عن بُعد قبل حجز الرحلة.",
      "مساعدة في تخطيط الفندق وخدمة النقل من المطار.",
      "روابط داخلية واضحة إلى الباقات والعلاجات ووسائل التواصل.",
      "دعم متابعة بعد العلاج للمرضى الدوليين.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "لماذا يبحث المرضى عن عيادة أسنان في تركيا؟",
        answer:
          "الكثير من المرضى يقارنون تركيا لعلاج الأسنان لأنهم يريدون توازنًا بين الجودة والخطة الواضحة والقيمة الأفضل مقارنة ببعض الدول الغربية. ويجب أن يعتمد القرار دائمًا على ملاءمة الحالة والمواد والمتابعة والثقة بالعيادة.",
      },
      {
        question: "بماذا تُعرف عيادة لينوفا؟",
        answer:
          "تشتهر عيادة لينوفا بزراعة الأسنان والفينير وابتسامة هوليوود والعلاجات الترميمية وإعادة تأهيل الابتسامة الكاملة مع دعم رقمي وتنسيق للمرضى الدوليين.",
      },
      {
        question: "هل يمكنني البدء عن بُعد قبل السفر إلى إسطنبول؟",
        answer:
          "نعم. يمكن للمريض البدء باستشارة عن بُعد وإرسال الصور أو الأشعة والحصول على توجيه أولي للعلاج قبل التخطيط للسفر.",
      },
    ],
    ctaTitle: "ابدأ بخطة علاج أوضح",
    ctaText:
      "إذا كنت تقارن بين عيادات الأسنان في تركيا، فإن أفضل خطوة تالية هي طلب استشارة ومراجعة خيارات العلاج ثم اختيار الخطة المناسبة لأهدافك.",
    ctaPrimary: "اطلب استشارة مجانية",
    ctaSecondary: "عرض العلاجات",
    learnMoreLabel: "اعرف المزيد",
    packagesLabel: "الباقات",
    homeLabel: "الرئيسية",
    whyUsLabel: "لماذا نحن",
    contactLabel: "تواصل معنا",
    supportLinksText:
      "صفحات الباقات ولماذا نحن والتواصل تساعد المستخدم على الوصول إلى الخطوة التالية بشكل أسرع.",
    metadataTitle: "عيادة أسنان في تركيا | عيادة لينوفا إسطنبول",
    metadataDescription:
      "هل تبحث عن عيادة أسنان في تركيا؟ اكتشف عيادة لينوفا في إسطنبول لزراعة الأسنان والفينير وابتسامة هوليوود مع دعم سياحة علاجية واضح وسهل.",
    breadcrumbName: "عيادة أسنان في تركيا",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[(locale as Locale) ?? "en"] ?? pageContent.en;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}${PAGE_PATH}`;
  }
  languages["x-default"] = `${BASE_URL}/en${PAGE_PATH}`;

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
    keywords: [
      "clinic in turkey",
      "dental clinic in turkey",
      "linova clinic",
      "dental implants turkey",
      "veneers turkey",
      "hollywood smile turkey",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}${PAGE_PATH}`,
      languages,
    },
    openGraph: {
      title: content.metadataTitle,
      description: content.metadataDescription,
      url: `${BASE_URL}/${locale}${PAGE_PATH}`,
    },
  };
}

export default async function DentalClinicTurkeyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = pageContent[(locale as Locale) ?? "en"] ?? pageContent.en;

  return (
    <Box component="section" py={64}>
      <OrganizationJsonLd />
      <MedicalBusinessJsonLd />
      <WebSiteJsonLd />
      <FAQJsonLd items={content.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: content.homeLabel, url: `${BASE_URL}/${locale}` },
          { name: content.breadcrumbName, url: `${BASE_URL}/${locale}${PAGE_PATH}` },
        ]}
      />

      <Container size="lg">
        <Stack gap={48}>
          <Stack gap="md" maw={920}>
            <Text size="sm" fw={700} tt="uppercase" c="#0f766e">
              {content.eyebrow}
            </Text>
            <Title order={1} style={{ lineHeight: 1.1 }}>
              {content.title}
            </Title>
            <Text size="lg" c="dimmed" style={{ lineHeight: 1.8 }}>
              {content.intro}
            </Text>
            <Text size="md" c="dimmed" style={{ lineHeight: 1.85 }}>
              {content.description}
            </Text>
            <Group gap="md" wrap="wrap">
              <Button component={Link} href="/contact" size="md" radius="md">
                {content.ctaPrimary}
              </Button>
              <Button component={Link} href="/treatments" variant="outline" size="md" radius="md">
                {content.ctaSecondary}
              </Button>
            </Group>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Card withBorder radius="lg" padding="xl">
              <Stack gap="md">
                <Title order={2} size="h3">
                  {content.whyTitle}
                </Title>
                {content.reasons.map((reason) => (
                  <Text key={reason} c="dimmed" style={{ lineHeight: 1.8 }}>
                    {reason}
                  </Text>
                ))}
              </Stack>
            </Card>

            <Card withBorder radius="lg" padding="xl">
              <Stack gap="md">
                <Title order={2} size="h3">
                  {content.supportTitle}
                </Title>
                {content.supportItems.map((item) => (
                  <Text key={item} c="dimmed" style={{ lineHeight: 1.8 }}>
                    {item}
                  </Text>
                ))}
                <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                  <Link href="/packages">{content.packagesLabel}</Link>, <Link href="/why-us">{content.whyUsLabel}</Link>, and{" "}
                  <Link href="/contact">{content.contactLabel}</Link> {content.supportLinksText}
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          <Stack gap="lg">
            <Title order={2}>{content.treatmentTitle}</Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {content.treatments.map((treatment) => (
                <Card key={treatment.title} withBorder radius="lg" padding="xl">
                  <Stack gap="sm">
                    <Title order={3} size="h4">
                      {treatment.title}
                    </Title>
                    <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                      {treatment.description}
                    </Text>
                    <Text fw={600}>
                      <Link href={treatment.href}>{content.learnMoreLabel}</Link>
                    </Text>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>

          <Card withBorder radius="lg" padding="xl" bg="#f8fafc">
            <Stack gap="md">
              <Title order={2}>{content.faqTitle}</Title>
              {content.faqs.map((faq) => (
                <Box key={faq.question}>
                  <Title order={3} size="h5" mb="xs">
                    {faq.question}
                  </Title>
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Card>

          <Card radius="lg" padding="xl" bg="#0f172a" c="white">
            <Stack gap="md">
              <Title order={2} c="white">
                {content.ctaTitle}
              </Title>
              <Text c="rgba(255,255,255,0.85)" style={{ lineHeight: 1.8 }}>
                {content.ctaText}
              </Text>
              <Group gap="md" wrap="wrap">
                <Button component={Link} href="/contact" variant="white" c="#0f172a">
                  {content.ctaPrimary}
                </Button>
                <Button component={Link} href="/packages" variant="outline" color="gray">
                  {content.packagesLabel}
                </Button>
              </Group>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
