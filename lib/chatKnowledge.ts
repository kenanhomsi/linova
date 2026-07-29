import {
  WHATSAPP_LINK,
  PHONE,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
} from "./constants";

export type ChatIntent =
  | "greeting"
  | "services"
  | "hollywood_smile"
  | "implants"
  | "veneers"
  | "whitening"
  | "all_on_4"
  | "crowns"
  | "pricing"
  | "consultation"
  | "travel"
  | "hotel"
  | "airport"
  | "location"
  | "hours"
  | "contact"
  | "warranty"
  | "pain"
  | "safety"
  | "duration"
  | "languages"
  | "before_after"
  | "payment"
  | "aftercare"
  | "technology"
  | "xray"
  | "whatsapp"
  | "fallback";

type IntentKeywords = Record<ChatIntent, string[]>;

type IntentResponses = Record<
  ChatIntent,
  {
    en: string;
    ar: string;
    tr: string;
    de: string;
    fr: string;
  }
>;

export const INTENT_KEYWORDS: IntentKeywords = {
  greeting: [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good evening",
    "good afternoon",
    "مرحبا",
    "اهلا",
    "السلام عليكم",
    "صباح الخير",
    "مساء الخير",
    "merhaba",
    "selam",
    "günaydın",
    "iyi akşamlar",
  ],
  services: [
    "services",
    "treatments",
    "what do you offer",
    "what treatments",
    "خدمات",
    "علاجات",
    "ماذا تقدمون",
    "hizmetler",
    "tedaviler",
    "neler sunuyorsunuz",
  ],
  hollywood_smile: [
    "hollywood smile",
    "smile makeover",
    "smile design",
    "ابتسامة هوليوود",
    "تصميم الابتسامة",
    "hollywood gülüş",
    "gülüş tasarımı",
  ],
  implants: [
    "implant",
    "implants",
    "dental implant",
    "missing tooth",
    "missing teeth",
    "زراعة",
    "زرعة",
    "زراعة الأسنان",
    "أسنان مفقودة",
    "implant",
    "diş implantı",
    "eksik diş",
  ],
  veneers: [
    "veneer",
    "veneers",
    "porcelain",
    "emax",
    "e-max",
    "zirconia",
    "laminate",
    "فينير",
    "قشور",
    "بورسلين",
    "زركونيا",
    "kaplama",
    "porselen",
    "zirkonyum",
    "laminat",
  ],
  whitening: [
    "whitening",
    "whiten",
    "bleaching",
    "white teeth",
    "brighter",
    "تبييض",
    "بياض",
    "أبيض",
    "beyazlatma",
    "beyaz",
    "parlatma",
  ],
  all_on_4: [
    "all on 4",
    "all-on-4",
    "all on 6",
    "all-on-6",
    "full arch",
    "full jaw",
    "اول اون فور",
    "فك كامل",
    "all on 4",
    "all-on-4",
    "tam çene",
  ],
  crowns: [
    "crown",
    "crowns",
    "bridge",
    "bridges",
    "cap",
    "تاج",
    "تيجان",
    "جسر",
    "جسور",
    "kron",
    "köprü",
  ],
  pricing: [
    "price",
    "prices",
    "cost",
    "costs",
    "how much",
    "expensive",
    "cheap",
    "affordable",
    "budget",
    "fee",
    "fees",
    "money",
    "savings",
    "سعر",
    "أسعار",
    "كم التكلفة",
    "تكلفة",
    "رخيص",
    "غالي",
    "ميزانية",
    "fiyat",
    "fiyatlar",
    "ne kadar",
    "maliyet",
    "uygun",
    "ucuz",
    "pahalı",
    "bütçe",
  ],
  consultation: [
    "consultation",
    "consult",
    "appointment",
    "book",
    "booking",
    "schedule",
    "free consultation",
    "استشارة",
    "موعد",
    "حجز",
    "danışmanlık",
    "randevu",
    "rezervasyon",
  ],
  travel: [
    "travel",
    "trip",
    "fly",
    "flight",
    "visa",
    "medical tourism",
    "tourism",
    "package",
    "سفر",
    "رحلة",
    "طيران",
    "فيزا",
    "تأشيرة",
    "سياحة علاجية",
    "باقة",
    "seyahat",
    "uçuş",
    "vize",
    "sağlık turizmi",
    "paket",
  ],
  hotel: [
    "hotel",
    "stay",
    "accommodation",
    "where to stay",
    "lodging",
    "فندق",
    "إقامة",
    "أين أقيم",
    "otel",
    "konaklama",
    "nerede kalırım",
  ],
  airport: [
    "airport",
    "transfer",
    "pickup",
    "transportation",
    "vip transfer",
    "مطار",
    "نقل",
    "استقبال",
    "توصيل",
    "havalimanı",
    "transfer",
    "karşılama",
    "ulaşım",
  ],
  location: [
    "where",
    "location",
    "address",
    "where are you",
    "directions",
    "map",
    "أين",
    "موقع",
    "عنوان",
    "خريطة",
    "nerede",
    "adres",
    "konum",
    "harita",
  ],
  hours: [
    "hours",
    "open",
    "opening",
    "working hours",
    "when are you open",
    "schedule",
    "time",
    "ساعات",
    "مواعيد",
    "متى تفتحون",
    "saatler",
    "çalışma saatleri",
    "ne zaman açık",
  ],
  contact: [
    "contact",
    "call",
    "phone",
    "email",
    "reach",
    "تواصل",
    "اتصل",
    "هاتف",
    "بريد",
    "iletişim",
    "ara",
    "telefon",
    "e-posta",
  ],
  warranty: [
    "warranty",
    "guarantee",
    "how long does it last",
    "lifetime",
    "durability",
    "ضمان",
    "كفالة",
    "كم يدوم",
    "garanti",
    "ne kadar dayanır",
    "ömür boyu",
  ],
  pain: [
    "pain",
    "hurt",
    "painful",
    "anesthesia",
    "sedation",
    "comfortable",
    "scared",
    "fear",
    "nervous",
    "ألم",
    "يؤلم",
    "مؤلم",
    "تخدير",
    "خوف",
    "ağrı",
    "acıyor",
    "anestezi",
    "korkuyorum",
  ],
  safety: [
    "safe",
    "safety",
    "risk",
    "quality",
    "sterile",
    "hygiene",
    "certified",
    "accredited",
    "آمن",
    "أمان",
    "خطر",
    "جودة",
    "تعقيم",
    "نظافة",
    "güvenli",
    "güvenlik",
    "risk",
    "kalite",
    "sterilizasyon",
    "hijyen",
  ],
  duration: [
    "how long",
    "how many days",
    "duration",
    "time needed",
    "how many visits",
    "كم يوم",
    "مدة",
    "كم زيارة",
    "kaç gün",
    "süre",
    "kaç seans",
  ],
  languages: [
    "language",
    "languages",
    "english",
    "arabic",
    "speak",
    "translator",
    "لغة",
    "لغات",
    "إنجليزي",
    "عربي",
    "مترجم",
    "dil",
    "diller",
    "ingilizce",
    "arapça",
    "tercüman",
  ],
  before_after: [
    "before after",
    "before and after",
    "results",
    "photos",
    "gallery",
    "pictures",
    "قبل وبعد",
    "نتائج",
    "صور",
    "معرض",
    "önce sonra",
    "sonuçlar",
    "fotoğraf",
    "galeri",
  ],
  payment: [
    "payment",
    "pay",
    "installment",
    "credit card",
    "cash",
    "bank transfer",
    "دفع",
    "تقسيط",
    "بطاقة",
    "نقد",
    "تحويل بنكي",
    "ödeme",
    "taksit",
    "kredi kartı",
    "nakit",
    "havale",
  ],
  aftercare: [
    "aftercare",
    "after treatment",
    "follow up",
    "recovery",
    "healing",
    "post treatment",
    "بعد العلاج",
    "متابعة",
    "تعافي",
    "شفاء",
    "tedavi sonrası",
    "takip",
    "iyileşme",
  ],
  technology: [
    "technology",
    "3d",
    "digital",
    "laser",
    "cad cam",
    "cbct",
    "scan",
    "scanner",
    "تقنية",
    "تكنولوجيا",
    "ليزر",
    "رقمي",
    "ماسح",
    "teknoloji",
    "lazer",
    "dijital",
    "tarama",
  ],
  xray: [
    "xray",
    "x-ray",
    "panoramic",
    "scan",
    "send photos",
    "أشعة",
    "صور أسنان",
    "بانوراما",
    "röntgen",
    "panoramik",
    "tarama",
  ],
  whatsapp: [
    "whatsapp",
    "chat",
    "message",
    "text",
    "واتساب",
    "واتس اب",
    "رسالة",
    "whatsapp",
    "mesaj",
  ],
  fallback: [],
};

export const INTENT_RESPONSES: IntentResponses = {
  greeting: {
    en: `Welcome to Linova Clinic Istanbul! 😊 I'm your dental care assistant. How can I help you today?\n\nI can help you with:\n• Our treatments & services\n• Pricing information\n• Booking a free consultation\n• Travel & accommodation\n• Before & after results\n\nWhat would you like to know?`,
    ar: `أهلاً بك في عيادة لينوفا إسطنبول! 😊 أنا مساعدك لرعاية الأسنان. كيف يمكنني مساعدتك اليوم؟\n\nيمكنني مساعدتك في:\n• علاجاتنا وخدماتنا\n• معلومات الأسعار\n• حجز استشارة مجانية\n• السفر والإقامة\n• نتائج قبل وبعد\n\nماذا تريد أن تعرف؟`,
    tr: `Linova Clinic İstanbul'a hoş geldiniz! 😊 Diş bakım asistanınızım. Bugün size nasıl yardımcı olabilirim?\n\nYardımcı olabileceğim konular:\n• Tedavi ve hizmetlerimiz\n• Fiyat bilgileri\n• Ücretsiz danışmanlık randevusu\n• Seyahat ve konaklama\n• Önce ve sonra sonuçları\n\nNe hakkında bilgi almak istersiniz?`,
    de: `Willkommen bei der Linova Clinic Istanbul! 😊 Ich bin Ihr Assistent für Zahnpflege. Wie kann ich Ihnen heute helfen?\n\nIch kann Ihnen helfen bei:\n• Unseren Behandlungen & Leistungen\n• Preisinformationen\n• Buchung einer kostenlosen Beratung\n• Reise & Unterkunft\n• Vorher-Nachher-Ergebnissen\n\nWas möchten Sie wissen?`,
    fr: `Bienvenue à la Linova Clinic Istanbul ! 😊 Je suis votre assistant de soins dentaires. Comment puis-je vous aider aujourd'hui ?\n\nJe peux vous aider avec :\n• Nos traitements et services\n• Les informations tarifaires\n• La réservation d'une consultation gratuite\n• Le voyage et l'hébergement\n• Les résultats avant/après\n\nQue souhaitez-vous savoir ?`,
  },
  services: {
    en: `At Linova Clinic, we offer a full range of dental treatments:\n\n⭐ **Hollywood Smile Makeover** — Our most popular!\n🦷 **Dental Implants** — Lifetime warranty\n✨ **Dental Veneers** — E-max, Zirconia, Porcelain\n💎 **All-on-4 & All-on-6** — Full arch in one day\n🔬 **Teeth Whitening** — Up to 8 shades brighter\n👑 **Crowns & Bridges** — Same-day available\n🖥️ **Digital Smile Design** — Preview your smile\n⚡ **Laser Dentistry** — Minimal discomfort\n\nWhich treatment interests you? I can give you more details!`,
    ar: `في عيادة لينوفا، نقدم مجموعة كاملة من علاجات الأسنان:\n\n⭐ **ابتسامة هوليوود** — الأكثر طلباً!\n🦷 **زراعة الأسنان** — ضمان مدى الحياة\n✨ **فينير الأسنان** — إيماكس، زركونيا، بورسلين\n💎 **All-on-4 و All-on-6** — فك كامل في يوم واحد\n🔬 **تبييض الأسنان** — حتى 8 درجات أكثر بياضاً\n👑 **التيجان والجسور** — متاحة في نفس اليوم\n🖥️ **تصميم الابتسامة الرقمي** — شاهد ابتسامتك مسبقاً\n⚡ **طب الأسنان بالليزر** — بأقل ألم\n\nأي علاج يهمك؟ يمكنني إعطاءك تفاصيل أكثر!`,
    tr: `Linova Clinic'te kapsamlı diş tedavileri sunuyoruz:\n\n⭐ **Hollywood Gülüş Tasarımı** — En popüler!\n🦷 **Diş İmplantı** — Ömür boyu garanti\n✨ **Diş Kaplamaları** — E-max, Zirkonyum, Porselen\n💎 **All-on-4 ve All-on-6** — Tek günde tam çene\n🔬 **Diş Beyazlatma** — 8 tona kadar beyazlama\n👑 **Kron ve Köprü** — Aynı gün tedavi mümkün\n🖥️ **Dijital Gülüş Tasarımı** — Gülüşünüzü önizleyin\n⚡ **Lazer Diş Tedavisi** — Minimum rahatsızlık\n\nHangi tedavi ilginizi çekiyor? Daha fazla bilgi verebilirim!`,
    de: `In der Linova Clinic bieten wir ein umfassendes Angebot an Zahnbehandlungen:\n\n⭐ **Hollywood Smile Makeover** — Unser beliebtestes!\n🦷 **Zahnimplantate** — Lebenslange Garantie\n✨ **Zahn-Veneers** — E-max, Zirkonoxid, Porzellan\n💎 **All-on-4 & All-on-6** — Kompletter Kiefer an einem Tag\n🔬 **Zahnaufhellung** — Bis zu 8 Nuancen heller\n👑 **Kronen & Brücken** — Auch am selben Tag möglich\n🖥️ **Digitales Lächeln-Design** — Vorschau Ihres Lächelns\n⚡ **Laser-Zahnheilkunde** — Minimale Beschwerden\n\nWelche Behandlung interessiert Sie? Ich kann Ihnen weitere Details geben!`,
    fr: `À la Linova Clinic, nous proposons une gamme complète de traitements dentaires :\n\n⭐ **Relooking Hollywood Smile** — Notre plus populaire !\n🦷 **Implants dentaires** — Garantie à vie\n✨ **Facettes dentaires** — E-max, zircone, céramique\n💎 **All-on-4 & All-on-6** — Arcade complète en une journée\n🔬 **Blanchiment dentaire** — Jusqu'à 8 teintes plus clair\n👑 **Couronnes & bridges** — Disponible le jour même\n🖥️ **Design numérique du sourire** — Aperçu de votre sourire\n⚡ **Dentisterie laser** — Inconfort minimal\n\nQuel traitement vous intéresse ? Je peux vous donner plus de détails !`,
  },
  hollywood_smile: {
    en: `**Hollywood Smile Makeover** is our most popular treatment! ⭐\n\n✅ Complete cosmetic transformation\n✅ Premium E-max & Zirconia veneers\n✅ Custom digital smile design preview\n✅ Completed in just 5-7 days\n✅ Natural-looking, stunning results\n\nThe process:\n1️⃣ Free online consultation + smile design\n2️⃣ Arrive in Istanbul (we arrange everything)\n3️⃣ Digital scanning & preparation\n4️⃣ Custom veneer fabrication\n5️⃣ Final fitting & your perfect smile!\n\n💬 Want a free consultation? Send us your photos on WhatsApp!`,
    ar: `**ابتسامة هوليوود** هي علاجنا الأكثر طلباً! ⭐\n\n✅ تحوّل تجميلي شامل\n✅ فينير إيماكس وزركونيا فاخر\n✅ معاينة رقمية مخصصة لتصميم ابتسامتك\n✅ تكتمل خلال 5-7 أيام فقط\n✅ نتائج طبيعية مذهلة\n\nالخطوات:\n1️⃣ استشارة مجانية عن بُعد + تصميم الابتسامة\n2️⃣ الوصول إلى إسطنبول (نرتّب كل شيء)\n3️⃣ مسح رقمي وتحضير\n4️⃣ تصنيع الفينير المخصص\n5️⃣ التركيب النهائي وابتسامتك المثالية!\n\n💬 تريد استشارة مجانية؟ أرسل لنا صورك على واتساب!`,
    tr: `**Hollywood Gülüş Tasarımı** en popüler tedavimiz! ⭐\n\n✅ Kapsamlı estetik dönüşüm\n✅ Premium E-max ve Zirkonyum kaplamalar\n✅ Kişiye özel dijital gülüş tasarımı\n✅ Sadece 5-7 günde tamamlanır\n✅ Doğal ve göz alıcı sonuçlar\n\nSüreç:\n1️⃣ Ücretsiz online danışmanlık + gülüş tasarımı\n2️⃣ İstanbul'a gelişiniz (her şeyi organize ederiz)\n3️⃣ Dijital tarama ve hazırlık\n4️⃣ Kişiye özel kaplama üretimi\n5️⃣ Son montaj ve mükemmel gülüşünüz!\n\n💬 Ücretsiz danışmanlık ister misiniz? Fotoğraflarınızı WhatsApp'tan gönderin!`,
    de: `Das **Hollywood Smile Makeover** ist unsere beliebteste Behandlung! ⭐\n\n✅ Komplette kosmetische Verwandlung\n✅ Premium E-max- & Zirkonoxid-Veneers\n✅ Individuelle digitale Lächeln-Design-Vorschau\n✅ Abgeschlossen in nur 5-7 Tagen\n✅ Natürlich wirkende, atemberaubende Ergebnisse\n\nDer Ablauf:\n1️⃣ Kostenlose Online-Beratung + Lächeln-Design\n2️⃣ Ankunft in Istanbul (wir organisieren alles)\n3️⃣ Digitaler Scan & Vorbereitung\n4️⃣ Individuelle Veneer-Herstellung\n5️⃣ Endgültige Anpassung & Ihr perfektes Lächeln!\n\n💬 Möchten Sie eine kostenlose Beratung? Senden Sie uns Ihre Fotos auf WhatsApp!`,
    fr: `Le **relooking Hollywood Smile** est notre traitement le plus populaire ! ⭐\n\n✅ Transformation esthétique complète\n✅ Facettes premium E-max & zircone\n✅ Aperçu personnalisé du design numérique du sourire\n✅ Réalisé en seulement 5 à 7 jours\n✅ Résultats naturels et éblouissants\n\nLe processus :\n1️⃣ Consultation en ligne gratuite + design du sourire\n2️⃣ Arrivée à Istanbul (nous organisons tout)\n3️⃣ Scan numérique & préparation\n4️⃣ Fabrication des facettes sur mesure\n5️⃣ Pose finale & votre sourire parfait !\n\n💬 Vous voulez une consultation gratuite ? Envoyez-nous vos photos sur WhatsApp !`,
  },
  implants: {
    en: `**Dental Implants** at Linova Clinic:\n\n🔹 German titanium implant systems\n🔹 3D digital surgical planning\n🔹 Lifetime warranty included\n🔹 Painless procedure with sedation options\n🔹 98% success rate\n\nWe use the latest 3D CBCT imaging for precise implant placement. Our experienced surgeons have placed thousands of implants.\n\nTypical timeline: 2-3 days in Istanbul for the procedure. The healing period is 3-6 months, then you return for the final crown.\n\n💬 Send us your panoramic X-ray on WhatsApp for a free assessment!`,
    ar: `**زراعة الأسنان** في عيادة لينوفا:\n\n🔹 أنظمة زرعات تيتانيوم ألمانية\n🔹 تخطيط جراحي رقمي ثلاثي الأبعاد\n🔹 ضمان مدى الحياة مشمول\n🔹 إجراء بلا ألم مع خيارات تخدير\n🔹 نسبة نجاح 98%\n\nنستخدم أحدث تقنيات التصوير CBCT ثلاثي الأبعاد لزراعة دقيقة. أطباؤنا ذوو خبرة واسعة في آلاف حالات الزراعة.\n\nالمدة المعتادة: 2-3 أيام في إسطنبول للإجراء. فترة الشفاء 3-6 أشهر ثم تعود للتاج النهائي.\n\n💬 أرسل لنا صورة الأشعة البانورامية على واتساب لتقييم مجاني!`,
    tr: `**Diş İmplantı** Linova Clinic'te:\n\n🔹 Alman üretimi titanyum implant sistemleri\n🔹 3D dijital cerrahi planlama\n🔹 Ömür boyu garanti dahil\n🔹 Sedasyon seçenekleriyle ağrısız işlem\n🔹 %98 başarı oranı\n\nHassas implant yerleşimi için en güncel 3D CBCT görüntüleme kullanıyoruz. Deneyimli cerrahlarımız binlerce implant yerleştirmiştir.\n\nTipik süre: İşlem için İstanbul'da 2-3 gün. İyileşme süresi 3-6 ay, ardından son kron için geri gelirsiniz.\n\n💬 Ücretsiz değerlendirme için panoramik röntgeninizi WhatsApp'tan gönderin!`,
    de: `**Zahnimplantate** in der Linova Clinic:\n\n🔹 Deutsche Titan-Implantatsysteme\n🔹 3D-digitale Operationsplanung\n🔹 Lebenslange Garantie inklusive\n🔹 Schmerzfreier Eingriff mit Sedierungsoptionen\n🔹 98% Erfolgsrate\n\nWir verwenden modernste 3D-CBCT-Bildgebung für eine präzise Implantatplatzierung. Unsere erfahrenen Chirurgen haben bereits tausende Implantate gesetzt.\n\nTypischer Zeitplan: 2-3 Tage in Istanbul für den Eingriff. Die Heilungsphase dauert 3-6 Monate, danach kommen Sie für die finale Krone zurück.\n\n💬 Senden Sie uns Ihr Panorama-Röntgenbild auf WhatsApp für eine kostenlose Einschätzung!`,
    fr: `**Implants dentaires** à la Linova Clinic :\n\n🔹 Systèmes d'implants en titane allemand\n🔹 Planification chirurgicale numérique en 3D\n🔹 Garantie à vie incluse\n🔹 Procédure indolore avec options de sédation\n🔹 Taux de réussite de 98 %\n\nNous utilisons l'imagerie 3D CBCT la plus récente pour un placement précis des implants. Nos chirurgiens expérimentés ont posé des milliers d'implants.\n\nCalendrier typique : 2-3 jours à Istanbul pour l'intervention. La période de guérison est de 3 à 6 mois, puis vous revenez pour la couronne finale.\n\n💬 Envoyez-nous votre radiographie panoramique sur WhatsApp pour une évaluation gratuite !`,
  },
  veneers: {
    en: `**Dental Veneers** — Transform your smile!\n\nWe offer 3 premium types:\n\n💎 **E-max Veneers** — Ultra-thin (0.3mm), most natural\n👑 **Zirconia Veneers** — Strongest & most durable\n✨ **Porcelain Veneers** — Classic beauty\n\nBenefits:\n✅ No-prep & minimal-prep options\n✅ Natural translucency match\n✅ Fix gaps, chips, discoloration\n✅ Completed in 5-7 days\n✅ 10+ year durability\n\nPerfect for closing gaps, fixing chips, and achieving a flawless smile!\n\n💬 Want to see which type is best for you? Book a free consultation!`,
    ar: `**فينير الأسنان** — حوّل ابتسامتك!\n\nنقدم 3 أنواع فاخرة:\n\n💎 **فينير إيماكس** — رقيق جداً (0.3 مم)، الأكثر طبيعية\n👑 **فينير زركونيا** — الأقوى والأكثر متانة\n✨ **فينير بورسلين** — جمال كلاسيكي\n\nالمميزات:\n✅ خيارات بدون برد أو برد بسيط\n✅ شفافية مطابقة للأسنان الطبيعية\n✅ علاج الفراغات والكسور وتغيّر اللون\n✅ يكتمل خلال 5-7 أيام\n✅ متانة تتجاوز 10 سنوات\n\nمثالي لإغلاق الفراغات وإصلاح الكسور والحصول على ابتسامة مثالية!\n\n💬 تريد معرفة النوع الأفضل لك؟ احجز استشارة مجانية!`,
    tr: `**Diş Kaplamaları** — Gülüşünüzü dönüştürün!\n\n3 premium tip sunuyoruz:\n\n💎 **E-max Kaplamalar** — Ultra ince (0.3mm), en doğal\n👑 **Zirkonyum Kaplamalar** — En güçlü ve dayanıklı\n✨ **Porselen Kaplamalar** — Klasik güzellik\n\nAvantajlar:\n✅ Prepsiz ve minimal preparasyon seçenekleri\n✅ Doğal diş şeffaflığına uyum\n✅ Aralık, kırık ve renk sorunlarını giderir\n✅ 5-7 günde tamamlanır\n✅ 10+ yıl dayanıklılık\n\nAralıkları kapatmak, kırıkları düzeltmek ve kusursuz bir gülüş için mükemmel!\n\n💬 Sizin için en uygun tipi öğrenmek ister misiniz? Ücretsiz danışmanlık alın!`,
    de: `**Zahn-Veneers** — Verwandeln Sie Ihr Lächeln!\n\nWir bieten 3 Premium-Typen an:\n\n💎 **E-max-Veneers** — Ultradünn (0,3 mm), am natürlichsten\n👑 **Zirkonoxid-Veneers** — Am stärksten & langlebigsten\n✨ **Porzellan-Veneers** — Klassische Schönheit\n\nVorteile:\n✅ Optionen ohne oder mit minimalem Schliff\n✅ Natürlich abgestimmte Transluzenz\n✅ Behebt Lücken, Absplitterungen, Verfärbungen\n✅ Abgeschlossen in 5-7 Tagen\n✅ Über 10 Jahre Haltbarkeit\n\nPerfekt, um Lücken zu schließen, Absplitterungen zu beheben und ein makelloses Lächeln zu erzielen!\n\n💬 Möchten Sie sehen, welcher Typ am besten zu Ihnen passt? Buchen Sie eine kostenlose Beratung!`,
    fr: `**Facettes dentaires** — Transformez votre sourire !\n\nNous proposons 3 types premium :\n\n💎 **Facettes E-max** — Ultra-fines (0,3 mm), les plus naturelles\n👑 **Facettes en zircone** — Les plus solides et durables\n✨ **Facettes en céramique** — Beauté classique\n\nAvantages :\n✅ Options sans préparation ou à préparation minimale\n✅ Translucidité naturelle assortie\n✅ Corrige les espaces, éclats, décolorations\n✅ Réalisé en 5 à 7 jours\n✅ Durabilité de plus de 10 ans\n\nParfait pour combler les espaces, réparer les éclats et obtenir un sourire impeccable !\n\n💬 Vous voulez savoir quel type vous convient le mieux ? Réservez une consultation gratuite !`,
  },
  whitening: {
    en: `**Professional Teeth Whitening** at Linova Clinic:\n\n🔬 Professional in-office laser treatment\n✨ Up to 8 shades brighter in one session\n⏱️ Takes only about 1 hour\n😊 Long-lasting results\n🛡️ Safe for your enamel\n\nWe use advanced laser whitening technology that's fast, effective, and comfortable. Results are visible immediately!\n\nThis can be combined with other treatments like veneers for the ultimate smile makeover.\n\n💬 Interested? Book your free consultation!`,
    ar: `**تبييض الأسنان الاحترافي** في عيادة لينوفا:\n\n🔬 جلسة ليزر احترافية في العيادة\n✨ تبييض يصل إلى 8 درجات في جلسة واحدة\n⏱️ تستغرق حوالي ساعة واحدة فقط\n😊 نتائج تدوم طويلاً\n🛡️ آمن على مينا الأسنان\n\nنستخدم تقنية تبييض ليزر متطورة وسريعة وفعالة ومريحة. النتائج مرئية فوراً!\n\nيمكن دمجه مع علاجات أخرى مثل الفينير لتحوّل كامل للابتسامة.\n\n💬 مهتم؟ احجز استشارتك المجانية!`,
    tr: `**Profesyonel Diş Beyazlatma** Linova Clinic'te:\n\n🔬 Klinikteki profesyonel lazer uygulaması\n✨ Tek seansta 8 tona kadar beyazlama\n⏱️ Sadece yaklaşık 1 saat sürer\n😊 Uzun süreli kalıcı sonuçlar\n🛡️ Mine için güvenli\n\nHızlı, etkili ve konforlu ileri lazer beyazlatma teknolojisi kullanıyoruz. Sonuçlar anında görülür!\n\nNihai gülüş dönüşümü için kaplama gibi diğer tedavilerle birleştirilebilir.\n\n💬 İlgileniyor musunuz? Ücretsiz danışmanlık randevusu alın!`,
    de: `**Professionelle Zahnaufhellung** in der Linova Clinic:\n\n🔬 Professionelle Laserbehandlung in der Praxis\n✨ Bis zu 8 Nuancen heller in einer Sitzung\n⏱️ Dauert nur etwa 1 Stunde\n😊 Lang anhaltende Ergebnisse\n🛡️ Sicher für Ihren Zahnschmelz\n\nWir verwenden fortschrittliche Laseraufhellungstechnologie, die schnell, effektiv und angenehm ist. Die Ergebnisse sind sofort sichtbar!\n\nDies kann mit anderen Behandlungen wie Veneers für das ultimative Lächeln-Makeover kombiniert werden.\n\n💬 Interessiert? Buchen Sie Ihre kostenlose Beratung!`,
    fr: `**Blanchiment dentaire professionnel** à la Linova Clinic :\n\n🔬 Traitement laser professionnel en cabinet\n✨ Jusqu'à 8 teintes plus clair en une seule séance\n⏱️ Ne dure qu'environ 1 heure\n😊 Résultats durables\n🛡️ Sans danger pour votre émail\n\nNous utilisons une technologie de blanchiment au laser avancée, rapide, efficace et confortable. Les résultats sont visibles immédiatement !\n\nCela peut être combiné avec d'autres traitements comme les facettes pour le relooking du sourire ultime.\n\n💬 Intéressé(e) ? Réservez votre consultation gratuite !`,
  },
  all_on_4: {
    en: `**All-on-4 & All-on-6 Implants** — Full Arch Restoration:\n\n🔹 Restore an entire jaw in one day\n🔹 No bone grafting required\n🔹 Immediate fixed prosthesis\n🔹 German titanium implant systems\n🔹 Lifetime warranty\n\nPerfect for patients with multiple missing teeth or those wearing dentures who want a permanent solution.\n\nThe procedure uses just 4-6 strategically placed implants to support a full arch of teeth.\n\n⏱️ Treatment time: 1-3 days in Istanbul\n🏥 You leave with a fixed set of teeth!\n\n💬 Send us your X-ray for a free evaluation!`,
    ar: `**زراعة All-on-4 و All-on-6** — ترميم الفك الكامل:\n\n🔹 استعادة فك كامل في يوم واحد\n🔹 بدون الحاجة لتطعيم العظام\n🔹 تركيبة ثابتة فورية\n🔹 أنظمة زرعات تيتانيوم ألمانية\n🔹 ضمان مدى الحياة\n\nمثالي للمرضى الذين يعانون من فقدان أسنان متعددة أو من يرتدون أطقم أسنان ويريدون حلاً دائماً.\n\nيستخدم الإجراء 4-6 زرعات موضوعة بدقة لدعم فك كامل من الأسنان.\n\n⏱️ مدة العلاج: 1-3 أيام في إسطنبول\n🏥 تغادر بأسنان ثابتة!\n\n💬 أرسل لنا صورة الأشعة لتقييم مجاني!`,
    tr: `**All-on-4 ve All-on-6 İmplant** — Tam Çene Restorasyonu:\n\n🔹 Tek günde tüm çeneyi yenileyin\n🔹 Kemik grefti gerektirmez\n🔹 Anında sabit protez\n🔹 Alman titanyum implant sistemleri\n🔹 Ömür boyu garanti\n\nBirden fazla eksik dişi olan veya takma diş kullanan ve kalıcı bir çözüm isteyen hastalar için mükemmel.\n\nİşlem, tam bir çene dişi desteklemek için stratejik olarak yerleştirilen 4-6 implant kullanır.\n\n⏱️ Tedavi süresi: İstanbul'da 1-3 gün\n🏥 Sabit dişlerle ayrılırsınız!\n\n💬 Ücretsiz değerlendirme için röntgeninizi gönderin!`,
    de: `**All-on-4 & All-on-6-Implantate** — Vollbogen-Restauration:\n\n🔹 Stellen Sie einen kompletten Kiefer an einem Tag wieder her\n🔹 Kein Knochenaufbau erforderlich\n🔹 Sofortige feste Prothese\n🔹 Deutsche Titan-Implantatsysteme\n🔹 Lebenslange Garantie\n\nPerfekt für Patienten mit mehreren fehlenden Zähnen oder für Träger von Zahnprothesen, die eine dauerhafte Lösung wünschen.\n\nDer Eingriff verwendet nur 4-6 strategisch platzierte Implantate, um einen kompletten Zahnbogen zu tragen.\n\n⏱️ Behandlungsdauer: 1-3 Tage in Istanbul\n🏥 Sie verlassen uns mit einem festen Gebiss!\n\n💬 Senden Sie uns Ihr Röntgenbild für eine kostenlose Auswertung!`,
    fr: `**Implants All-on-4 & All-on-6** — Restauration de l'arcade complète :\n\n🔹 Restaurez toute une mâchoire en une journée\n🔹 Aucune greffe osseuse requise\n🔹 Prothèse fixe immédiate\n🔹 Systèmes d'implants en titane allemand\n🔹 Garantie à vie\n\nParfait pour les patients ayant plusieurs dents manquantes ou portant des prothèses dentaires et souhaitant une solution permanente.\n\nLa procédure utilise seulement 4 à 6 implants placés stratégiquement pour soutenir une arcade complète de dents.\n\n⏱️ Durée du traitement : 1 à 3 jours à Istanbul\n🏥 Vous repartez avec un jeu de dents fixe !\n\n💬 Envoyez-nous votre radiographie pour une évaluation gratuite !`,
  },
  crowns: {
    en: `**Dental Crowns & Bridges** at Linova Clinic:\n\n👑 CAD/CAM precision-crafted ceramic\n⚡ Same-day restorations available\n🔬 Premium quality materials\n💪 Restore strength and function\n😊 Natural-looking aesthetics\n\nWe use advanced CAD/CAM technology to design and mill crowns right in our clinic — often completed the same day!\n\nMaterials: Zirconia, E-max ceramic, and porcelain-fused options available.\n\n💬 Want to learn more? Book a free consultation!`,
    ar: `**التيجان والجسور** في عيادة لينوفا:\n\n👑 سيراميك فائق الدقة بتقنية CAD/CAM\n⚡ ترميمات متاحة في نفس اليوم\n🔬 خامات عالية الجودة\n💪 استعادة المتانة والوظيفة\n😊 مظهر طبيعي رائع\n\nنستخدم تقنية CAD/CAM المتطورة لتصميم وتصنيع التيجان في عيادتنا — غالباً في نفس اليوم!\n\nالخامات: زركونيا، سيراميك إيماكس، وخيارات بورسلين.\n\n💬 تريد معرفة المزيد؟ احجز استشارة مجانية!`,
    tr: `**Kron ve Köprü Tedavisi** Linova Clinic'te:\n\n👑 CAD/CAM hassas seramik üretim\n⚡ Aynı gün restorasyon imkânı\n🔬 Premium kalite malzemeler\n💪 Dayanıklılık ve işlevi yeniden kazandırır\n😊 Doğal görünümlü estetik\n\nKliniğimizde kronları tasarlamak ve üretmek için ileri CAD/CAM teknolojisi kullanıyoruz — çoğu zaman aynı gün tamamlanır!\n\nMalzemeler: Zirkonyum, E-max seramik ve porselen seçenekleri mevcuttur.\n\n💬 Daha fazla bilgi almak ister misiniz? Ücretsiz danışmanlık alın!`,
    de: `**Zahnkronen & Brücken** in der Linova Clinic:\n\n👑 Präzisionsgefertigte Keramik mit CAD/CAM\n⚡ Restaurationen am selben Tag möglich\n🔬 Hochwertige Materialien\n💪 Stellt Stärke und Funktion wieder her\n😊 Natürlich wirkende Ästhetik\n\nWir verwenden fortschrittliche CAD/CAM-Technologie, um Kronen direkt in unserer Klinik zu entwerfen und zu fräsen — oft am selben Tag fertiggestellt!\n\nMaterialien: Zirkonoxid, E-max-Keramik und Optionen mit Porzellanverblendung verfügbar.\n\n💬 Möchten Sie mehr erfahren? Buchen Sie eine kostenlose Beratung!`,
    fr: `**Couronnes & bridges dentaires** à la Linova Clinic :\n\n👑 Céramique de précision fabriquée en CFAO\n⚡ Restaurations le jour même disponibles\n🔬 Matériaux de qualité premium\n💪 Restaure la solidité et la fonction\n😊 Esthétique à l'aspect naturel\n\nNous utilisons une technologie CFAO avancée pour concevoir et usiner les couronnes directement dans notre clinique — souvent terminées le jour même !\n\nMatériaux : zircone, céramique E-max et options en porcelaine fusionnée disponibles.\n\n💬 Vous voulez en savoir plus ? Réservez une consultation gratuite !`,
  },
  pricing: {
    en: `💰 **Save up to 70%** compared to UK, US & European prices!\n\nAt Linova Clinic, we offer transparent pricing with no hidden fees. Our all-inclusive packages include:\n\n✅ Full dental treatment\n✅ Luxury hotel accommodation\n✅ VIP airport transfers\n✅ Multilingual support\n✅ Lifetime warranty on most treatments\n\nFor an accurate quote, we need to assess your specific case. Send us:\n📸 Photos of your teeth\n🔬 Panoramic X-ray (if available)\n\n💬 Contact us on WhatsApp for a free, personalized quote!\n${WHATSAPP_LINK}`,
    ar: `💰 **وفّر حتى 70%** مقارنة بأسعار بريطانيا وأمريكا وأوروبا!\n\nفي عيادة لينوفا، نقدم أسعاراً شفافة بدون أي رسوم خفية. باقاتنا الشاملة تتضمن:\n\n✅ العلاج الكامل للأسنان\n✅ إقامة فندقية فاخرة\n✅ نقل VIP من وإلى المطار\n✅ دعم متعدد اللغات\n✅ ضمان مدى الحياة على معظم العلاجات\n\nللحصول على عرض سعر دقيق، نحتاج لتقييم حالتك. أرسل لنا:\n📸 صور أسنانك\n🔬 صورة أشعة بانورامية (إن وُجدت)\n\n💬 تواصل معنا على واتساب لعرض سعر مجاني ومخصص!\n${WHATSAPP_LINK}`,
    tr: `💰 İngiltere, ABD ve Avrupa fiyatlarına kıyasla **%70'e varan tasarruf**!\n\nLinova Clinic'te gizli maliyet olmadan şeffaf fiyatlandırma sunuyoruz. Her şey dahil paketlerimiz:\n\n✅ Tam diş tedavisi\n✅ Lüks otel konaklaması\n✅ VIP havalimanı transferleri\n✅ Çok dilli destek\n✅ Çoğu tedavide ömür boyu garanti\n\nDoğru bir fiyat teklifi için durumunuzu değerlendirmemiz gerekiyor. Bize gönderin:\n📸 Dişlerinizin fotoğrafları\n🔬 Panoramik röntgen (varsa)\n\n💬 Ücretsiz, kişiye özel fiyat teklifi için WhatsApp'tan yazın!\n${WHATSAPP_LINK}`,
    de: `💰 **Sparen Sie bis zu 70%** im Vergleich zu Preisen in UK, USA & Europa!\n\nIn der Linova Clinic bieten wir transparente Preise ohne versteckte Gebühren. Unsere All-inclusive-Pakete umfassen:\n\n✅ Vollständige Zahnbehandlung\n✅ Luxuriöse Hotelunterkunft\n✅ VIP-Flughafentransfers\n✅ Mehrsprachiger Support\n✅ Lebenslange Garantie auf die meisten Behandlungen\n\nFür ein genaues Angebot müssen wir Ihren individuellen Fall bewerten. Senden Sie uns:\n📸 Fotos Ihrer Zähne\n🔬 Panorama-Röntgenbild (falls vorhanden)\n\n💬 Kontaktieren Sie uns auf WhatsApp für ein kostenloses, persönliches Angebot!\n${WHATSAPP_LINK}`,
    fr: `💰 **Économisez jusqu'à 70 %** par rapport aux prix pratiqués au Royaume-Uni, aux États-Unis et en Europe !\n\nÀ la Linova Clinic, nous proposons une tarification transparente sans frais cachés. Nos forfaits tout compris incluent :\n\n✅ Traitement dentaire complet\n✅ Hébergement en hôtel de luxe\n✅ Transferts aéroport VIP\n✅ Assistance multilingue\n✅ Garantie à vie sur la plupart des traitements\n\nPour un devis précis, nous devons évaluer votre cas spécifique. Envoyez-nous :\n📸 Des photos de vos dents\n🔬 Une radiographie panoramique (si disponible)\n\n💬 Contactez-nous sur WhatsApp pour un devis gratuit et personnalisé !\n${WHATSAPP_LINK}`,
  },
  consultation: {
    en: `📋 **Free Consultation** — It's easy to get started!\n\nYou can book a free consultation in 3 ways:\n\n1️⃣ **WhatsApp** (fastest!) — Send us your photos/X-ray\n   ${WHATSAPP_LINK}\n\n2️⃣ **Phone** — Call us at ${PHONE}\n\n3️⃣ **Email** — ${EMAIL}\n\nWhat we need from you:\n📸 Clear photos of your teeth (front + sides)\n🔬 Panoramic X-ray (if you have one)\n📝 Tell us what you'd like to improve\n\nYou'll receive a personalized treatment plan with pricing within 24 hours!`,
    ar: `📋 **استشارة مجانية** — البدء سهل جداً!\n\nيمكنك حجز استشارة مجانية بـ 3 طرق:\n\n1️⃣ **واتساب** (الأسرع!) — أرسل لنا صورك/أشعتك\n   ${WHATSAPP_LINK}\n\n2️⃣ **هاتف** — اتصل بنا على ${PHONE}\n\n3️⃣ **بريد إلكتروني** — ${EMAIL}\n\nما نحتاجه منك:\n📸 صور واضحة لأسنانك (أمامية + جانبية)\n🔬 صورة أشعة بانورامية (إن وُجدت)\n📝 أخبرنا ماذا تريد تحسينه\n\nستتلقى خطة علاج مخصصة مع الأسعار خلال 24 ساعة!`,
    tr: `📋 **Ücretsiz Danışmanlık** — Başlamak çok kolay!\n\nÜcretsiz danışmanlık randevusunu 3 şekilde alabilirsiniz:\n\n1️⃣ **WhatsApp** (en hızlısı!) — Fotoğraf/röntgeninizi gönderin\n   ${WHATSAPP_LINK}\n\n2️⃣ **Telefon** — ${PHONE} numarasını arayın\n\n3️⃣ **E-posta** — ${EMAIL}\n\nSizden ihtiyacımız olanlar:\n📸 Dişlerinizin net fotoğrafları (ön + yan)\n🔬 Panoramik röntgen (varsa)\n📝 Neyi iyileştirmek istediğinizi belirtin\n\n24 saat içinde fiyatlı kişiye özel tedavi planınızı alacaksınız!`,
    de: `📋 **Kostenlose Beratung** — Der Einstieg ist ganz einfach!\n\nSie können eine kostenlose Beratung auf 3 Arten buchen:\n\n1️⃣ **WhatsApp** (am schnellsten!) — Senden Sie uns Ihre Fotos/Röntgenbild\n   ${WHATSAPP_LINK}\n\n2️⃣ **Telefon** — Rufen Sie uns unter ${PHONE} an\n\n3️⃣ **E-Mail** — ${EMAIL}\n\nWas wir von Ihnen benötigen:\n📸 Klare Fotos Ihrer Zähne (von vorne + von den Seiten)\n🔬 Panorama-Röntgenbild (falls vorhanden)\n📝 Sagen Sie uns, was Sie verbessern möchten\n\nSie erhalten innerhalb von 24 Stunden einen persönlichen Behandlungsplan mit Preisen!`,
    fr: `📋 **Consultation gratuite** — C'est facile de commencer !\n\nVous pouvez réserver une consultation gratuite de 3 façons :\n\n1️⃣ **WhatsApp** (le plus rapide !) — Envoyez-nous vos photos/radiographie\n   ${WHATSAPP_LINK}\n\n2️⃣ **Téléphone** — Appelez-nous au ${PHONE}\n\n3️⃣ **E-mail** — ${EMAIL}\n\nCe dont nous avons besoin de votre part :\n📸 Des photos claires de vos dents (de face + de profil)\n🔬 Une radiographie panoramique (si vous en avez une)\n📝 Dites-nous ce que vous souhaitez améliorer\n\nVous recevrez un plan de traitement personnalisé avec tarification sous 24 heures !`,
  },
  travel: {
    en: `✈️ **Medical Tourism Made Easy!**\n\nLinova Clinic handles everything for your dental trip to Istanbul:\n\n🚗 **VIP Airport Transfer** — Private car pickup & drop-off\n🏨 **Luxury Hotel** — Premium accommodation arranged for you\n🗣️ **Multilingual Team** — English, Arabic, Turkish & more\n📋 **Treatment Planning** — Everything scheduled for you\n🌍 **Visa Assistance** — We can provide invitation letters\n\nTypical dental trip timeline:\n• Day 1: Arrive, consultation & scanning\n• Day 2-5: Treatment sessions\n• Day 6-7: Final adjustments & explore Istanbul!\n\nWe've hosted patients from 50+ countries. You're in great hands!\n\n💬 Ready to plan your trip? Contact us!`,
    ar: `✈️ **السياحة العلاجية أصبحت سهلة!**\n\nعيادة لينوفا تتولى كل شيء لرحلتك العلاجية إلى إسطنبول:\n\n🚗 **نقل VIP من المطار** — سيارة خاصة للاستقبال والتوديع\n🏨 **فندق فاخر** — إقامة مميزة نرتّبها لك\n🗣️ **فريق متعدد اللغات** — عربي، إنجليزي، تركي والمزيد\n📋 **تخطيط العلاج** — كل شيء مجدول لراحتك\n🌍 **مساعدة في التأشيرة** — نوفر خطابات دعوة\n\nالجدول الزمني المعتاد:\n• اليوم 1: الوصول، الاستشارة والمسح\n• اليوم 2-5: جلسات العلاج\n• اليوم 6-7: التعديلات النهائية واستكشاف إسطنبول!\n\nاستضفنا مرضى من أكثر من 50 دولة. أنت في أيدٍ أمينة!\n\n💬 مستعد لتخطيط رحلتك؟ تواصل معنا!`,
    tr: `✈️ **Sağlık Turizmi Artık Çok Kolay!**\n\nLinova Clinic, İstanbul'daki diş tedavi yolculuğunuzun her aşamasını organize eder:\n\n🚗 **VIP Havalimanı Transferi** — Özel araçla karşılama ve uğurlama\n🏨 **Lüks Otel** — Sizin için premium konaklama ayarlanır\n🗣️ **Çok Dilli Ekip** — İngilizce, Arapça, Türkçe ve daha fazlası\n📋 **Tedavi Planlama** — Her şey sizin için programlanır\n🌍 **Vize Desteği** — Davet mektubu sağlayabiliriz\n\nTipik diş tedavisi yolculuğu:\n• 1. Gün: Varış, danışmanlık ve tarama\n• 2-5. Gün: Tedavi seansları\n• 6-7. Gün: Son düzeltmeler ve İstanbul'u keşfedin!\n\n50'den fazla ülkeden hasta ağırladık. Emin ellerde olacaksınız!\n\n💬 Yolculuğunuzu planlamaya hazır mısınız? Bizimle iletişime geçin!`,
    de: `✈️ **Medizintourismus leicht gemacht!**\n\nDie Linova Clinic kümmert sich um alles für Ihre Zahnreise nach Istanbul:\n\n🚗 **VIP-Flughafentransfer** — Private Abholung & Rückfahrt\n🏨 **Luxushotel** — Premium-Unterkunft für Sie arrangiert\n🗣️ **Mehrsprachiges Team** — Englisch, Arabisch, Türkisch & mehr\n📋 **Behandlungsplanung** — Alles für Sie geplant\n🌍 **Visa-Unterstützung** — Wir können Einladungsschreiben bereitstellen\n\nTypischer Zeitplan für die Zahnreise:\n• Tag 1: Ankunft, Beratung & Scan\n• Tag 2-5: Behandlungssitzungen\n• Tag 6-7: Letzte Anpassungen & Istanbul entdecken!\n\nWir haben bereits Patienten aus über 50 Ländern betreut. Sie sind in guten Händen!\n\n💬 Bereit, Ihre Reise zu planen? Kontaktieren Sie uns!`,
    fr: `✈️ **Le tourisme médical simplifié !**\n\nLa Linova Clinic gère tout pour votre voyage dentaire à Istanbul :\n\n🚗 **Transfert aéroport VIP** — Prise en charge et retour en voiture privée\n🏨 **Hôtel de luxe** — Hébergement premium organisé pour vous\n🗣️ **Équipe multilingue** — Anglais, arabe, turc et plus\n📋 **Planification du traitement** — Tout est programmé pour vous\n🌍 **Assistance visa** — Nous pouvons fournir des lettres d'invitation\n\nCalendrier typique du voyage dentaire :\n• Jour 1 : Arrivée, consultation & scan\n• Jour 2-5 : Séances de traitement\n• Jour 6-7 : Derniers ajustements & découverte d'Istanbul !\n\nNous avons accueilli des patients de plus de 50 pays. Vous êtes entre de bonnes mains !\n\n💬 Prêt à planifier votre voyage ? Contactez-nous !`,
  },
  hotel: {
    en: `🏨 **Accommodation Support**\n\nWe help arrange luxury hotel stays in Istanbul's best neighborhoods:\n\n✅ Premium hotels near our clinic in Nişantaşı\n✅ Rates matched to your treatment schedule\n✅ Special partner hotel discounts\n✅ All-inclusive packages available\n\nMost patients stay 5-7 days depending on treatment. We'll recommend the perfect option for you!\n\n💬 Let us know your dates and we'll arrange everything!`,
    ar: `🏨 **دعم الإقامة**\n\nنساعدك في ترتيب إقامة فندقية فاخرة في أفضل أحياء إسطنبول:\n\n✅ فنادق مميزة قرب عيادتنا في نيشانتاشي\n✅ مدة تتناسب مع جدول علاجك\n✅ خصومات خاصة في الفنادق الشريكة\n✅ باقات شاملة متاحة\n\nمعظم المرضى يقيمون 5-7 أيام حسب العلاج. سنرشح لك الخيار المثالي!\n\n💬 أخبرنا بتواريخك ونحن نرتّب كل شيء!`,
    tr: `🏨 **Konaklama Desteği**\n\nİstanbul'un en iyi semtlerinde lüks otel konaklaması ayarlıyoruz:\n\n✅ Nişantaşı'ndaki kliniğimize yakın premium oteller\n✅ Tedavi programınıza uygun konaklama süresi\n✅ Anlaşmalı otel indirimleri\n✅ Her şey dahil paket seçenekleri\n\nÇoğu hasta tedaviye bağlı olarak 5-7 gün kalır. Sizin için mükemmel seçeneği önereceğiz!\n\n💬 Tarihlerinizi bildirin, her şeyi ayarlayalım!`,
    de: `🏨 **Unterstützung bei der Unterkunft**\n\nWir helfen Ihnen, luxuriöse Hotelaufenthalte in den besten Vierteln Istanbuls zu arrangieren:\n\n✅ Premium-Hotels in der Nähe unserer Klinik in Nişantaşı\n✅ Aufenthaltsdauer abgestimmt auf Ihren Behandlungsplan\n✅ Spezielle Rabatte bei Partnerhotels\n✅ All-inclusive-Pakete verfügbar\n\nDie meisten Patienten bleiben je nach Behandlung 5-7 Tage. Wir empfehlen Ihnen die perfekte Option!\n\n💬 Teilen Sie uns Ihre Termine mit, und wir organisieren alles!`,
    fr: `🏨 **Assistance pour l'hébergement**\n\nNous aidons à organiser des séjours en hôtel de luxe dans les meilleurs quartiers d'Istanbul :\n\n✅ Hôtels premium près de notre clinique à Nişantaşı\n✅ Tarifs adaptés à votre calendrier de traitement\n✅ Remises spéciales chez nos hôtels partenaires\n✅ Forfaits tout compris disponibles\n\nLa plupart des patients restent 5 à 7 jours selon le traitement. Nous vous recommanderons l'option parfaite !\n\n💬 Indiquez-nous vos dates et nous organiserons tout !`,
  },
  airport: {
    en: `🚗 **VIP Airport Transfer**\n\nWe provide private transportation:\n\n✅ Pickup from Istanbul Airport (IST)\n✅ Comfortable, modern vehicles\n✅ Dedicated driver service\n✅ Transfer between hotel & clinic\n✅ Drop-off back to airport\n\nAll included in our treatment packages — no extra charge!\n\n💬 Just send us your flight details and we'll be there!`,
    ar: `🚗 **نقل VIP من المطار**\n\nنوفر لك خدمة نقل خاصة:\n\n✅ استقبال من مطار إسطنبول (IST)\n✅ سيارات مريحة وحديثة\n✅ خدمة سائق مخصص\n✅ نقل بين الفندق والعيادة\n✅ توصيل للمطار عند المغادرة\n\nكل هذا مشمول في باقات العلاج — بدون رسوم إضافية!\n\n💬 فقط أرسل لنا تفاصيل رحلتك وسنكون بانتظارك!`,
    tr: `🚗 **VIP Havalimanı Transferi**\n\nÖzel ulaşım hizmeti sağlıyoruz:\n\n✅ İstanbul Havalimanı'ndan (IST) karşılama\n✅ Konforlu, modern araçlar\n✅ Özel şoför hizmeti\n✅ Otel-klinik arası transfer\n✅ Havalimanına bırakma\n\nTümü tedavi paketlerimize dahil — ekstra ücret yok!\n\n💬 Uçuş bilgilerinizi gönderin, orada olacağız!`,
    de: `🚗 **VIP-Flughafentransfer**\n\nWir bieten privaten Transport:\n\n✅ Abholung vom Flughafen Istanbul (IST)\n✅ Komfortable, moderne Fahrzeuge\n✅ Persönlicher Fahrservice\n✅ Transfer zwischen Hotel & Klinik\n✅ Rückfahrt zum Flughafen\n\nAlles in unseren Behandlungspaketen enthalten — keine zusätzlichen Kosten!\n\n💬 Senden Sie uns einfach Ihre Flugdaten, und wir sind da!`,
    fr: `🚗 **Transfert aéroport VIP**\n\nNous assurons un transport privé :\n\n✅ Prise en charge à l'aéroport d'Istanbul (IST)\n✅ Véhicules confortables et modernes\n✅ Service de chauffeur dédié\n✅ Transfert entre l'hôtel & la clinique\n✅ Retour à l'aéroport\n\nTout est inclus dans nos forfaits de traitement — sans frais supplémentaires !\n\n💬 Envoyez-nous simplement les détails de votre vol, et nous serons là !`,
  },
  location: {
    en: `📍 **Our Location**\n\n**Linova Clinic Istanbul**\n${ADDRESS}\n\nWe're located in the prestigious Nişantaşı district — one of Istanbul's most upscale neighborhoods, easily accessible from anywhere in the city.\n\n🚗 30-40 min from Istanbul Airport\n🏨 Walking distance from major hotels\n🛍️ Surrounded by restaurants & shopping\n\n💬 Need directions? Contact us and we'll help!`,
    ar: `📍 **موقعنا**\n\n**عيادة لينوفا إسطنبول**\n${ADDRESS}\n\nنقع في حي نيشانتاشي الراقي — أحد أرقى أحياء إسطنبول، يسهل الوصول إليه من أي مكان في المدينة.\n\n🚗 30-40 دقيقة من مطار إسطنبول\n🏨 على مسافة مشي من الفنادق الكبرى\n🛍️ محاط بالمطاعم والتسوق\n\n💬 تحتاج إرشادات؟ تواصل معنا وسنساعدك!`,
    tr: `📍 **Konumumuz**\n\n**Linova Clinic İstanbul**\n${ADDRESS}\n\nPrestijli Nişantaşı semtinde yer alıyoruz — İstanbul'un en seçkin bölgelerinden birinde, şehrin her yerinden kolayca ulaşılabilir.\n\n🚗 İstanbul Havalimanı'ndan 30-40 dk\n🏨 Büyük otellerden yürüme mesafesinde\n🛍️ Restoranlar ve alışveriş ile çevrili\n\n💬 Yol tarifi mi gerekiyor? İletişime geçin, yardımcı olalım!`,
    de: `📍 **Unser Standort**\n\n**Linova Clinic Istanbul**\n${ADDRESS}\n\nWir befinden uns im renommierten Stadtteil Nişantaşı — einem der exklusivsten Viertel Istanbuls, leicht erreichbar von überall in der Stadt.\n\n🚗 30-40 Min. vom Flughafen Istanbul\n🏨 Fußläufig zu großen Hotels\n🛍️ Umgeben von Restaurants & Einkaufsmöglichkeiten\n\n💬 Benötigen Sie eine Wegbeschreibung? Kontaktieren Sie uns, wir helfen gerne!`,
    fr: `📍 **Notre emplacement**\n\n**Linova Clinic Istanbul**\n${ADDRESS}\n\nNous sommes situés dans le prestigieux quartier de Nişantaşı — l'un des quartiers les plus chics d'Istanbul, facilement accessible depuis n'importe quel point de la ville.\n\n🚗 30-40 min de l'aéroport d'Istanbul\n🏨 À distance de marche des grands hôtels\n🛍️ Entouré de restaurants & de boutiques\n\n💬 Besoin d'un itinéraire ? Contactez-nous, nous vous aiderons !`,
  },
  hours: {
    en: `🕐 **Working Hours**\n\n${WORKING_HOURS}\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n\nFor international patients, we can arrange appointments outside regular hours when needed.\n\n📞 ${PHONE}\n📧 ${EMAIL}\n💬 WhatsApp available 24/7 for messages!`,
    ar: `🕐 **أوقات العمل**\n\nالإثنين - الجمعة: 09:00 - 18:00\nالسبت: 10:00 صباحاً - 4:00 مساءً\nالأحد: مغلق\n\nللمرضى الدوليين، يمكننا ترتيب مواعيد خارج الأوقات العادية عند الحاجة.\n\n📞 ${PHONE}\n📧 ${EMAIL}\n💬 واتساب متاح 24/7 للرسائل!`,
    tr: `🕐 **Çalışma Saatleri**\n\nPzt - Cum: 09:00 - 18:00\nCumartesi: 10:00 - 16:00\nPazar: Kapalı\n\nUluslararası hastalar için gerektiğinde normal çalışma saatleri dışında randevu düzenleyebiliriz.\n\n📞 ${PHONE}\n📧 ${EMAIL}\n💬 WhatsApp üzerinden 7/24 mesaj gönderebilirsiniz!`,
    de: `🕐 **Öffnungszeiten**\n\nMo - Fr: 09:00 - 18:00\nSamstag: 10:00 - 16:00\nSonntag: Geschlossen\n\nFür internationale Patienten können wir bei Bedarf Termine außerhalb der regulären Öffnungszeiten vereinbaren.\n\n📞 ${PHONE}\n📧 ${EMAIL}\n💬 WhatsApp ist rund um die Uhr für Nachrichten verfügbar!`,
    fr: `🕐 **Horaires d'ouverture**\n\nLun - Ven : 09h00 - 18h00\nSamedi : 10h00 - 16h00\nDimanche : Fermé\n\nPour les patients internationaux, nous pouvons organiser des rendez-vous en dehors des horaires habituels si nécessaire.\n\n📞 ${PHONE}\n📧 ${EMAIL}\n💬 WhatsApp disponible 24h/24 et 7j/7 pour les messages !`,
  },
  contact: {
    en: `📞 **Contact Linova Clinic**\n\n💬 **WhatsApp** (recommended): ${WHATSAPP_LINK}\n📞 **Phone**: ${PHONE}\n📧 **Email**: ${EMAIL}\n📍 **Address**: ${ADDRESS}\n\nOur patient coordinators speak English, Arabic, and Turkish. We typically respond within minutes on WhatsApp!\n\nWhich method would you prefer?`,
    ar: `📞 **تواصل مع عيادة لينوفا**\n\n💬 **واتساب** (مُوصى به): ${WHATSAPP_LINK}\n📞 **هاتف**: ${PHONE}\n📧 **بريد إلكتروني**: ${EMAIL}\n📍 **العنوان**: ${ADDRESS}\n\nمنسقو المرضى لدينا يتحدثون العربية والإنجليزية والتركية. نرد عادة خلال دقائق على واتساب!\n\nأي طريقة تفضّل؟`,
    tr: `📞 **Linova Clinic İletişim**\n\n💬 **WhatsApp** (önerilen): ${WHATSAPP_LINK}\n📞 **Telefon**: ${PHONE}\n📧 **E-posta**: ${EMAIL}\n📍 **Adres**: ${ADDRESS}\n\nHasta koordinatörlerimiz İngilizce, Arapça ve Türkçe konuşmaktadır. WhatsApp'ta genellikle dakikalar içinde yanıt veriyoruz!\n\nHangi yöntemi tercih edersiniz?`,
    de: `📞 **Kontakt zur Linova Clinic**\n\n💬 **WhatsApp** (empfohlen): ${WHATSAPP_LINK}\n📞 **Telefon**: ${PHONE}\n📧 **E-Mail**: ${EMAIL}\n📍 **Adresse**: ${ADDRESS}\n\nUnsere Patientenkoordinatoren sprechen Englisch, Arabisch und Türkisch. Wir antworten auf WhatsApp normalerweise innerhalb von Minuten!\n\nWelche Methode bevorzugen Sie?`,
    fr: `📞 **Contacter la Linova Clinic**\n\n💬 **WhatsApp** (recommandé) : ${WHATSAPP_LINK}\n📞 **Téléphone** : ${PHONE}\n📧 **E-mail** : ${EMAIL}\n📍 **Adresse** : ${ADDRESS}\n\nNos coordinateurs de patients parlent anglais, arabe et turc. Nous répondons généralement en quelques minutes sur WhatsApp !\n\nQuelle méthode préférez-vous ?`,
  },
  warranty: {
    en: `🛡️ **Warranty & Guarantee**\n\nAt Linova Clinic, we stand behind our work:\n\n✅ **Dental Implants** — Lifetime warranty\n✅ **Veneers** — 10+ year guarantee\n✅ **Crowns & Bridges** — 10+ year guarantee\n✅ **All-on-4/6** — Lifetime warranty on implants\n\nOur warranty covers:\n• Material defects\n• Manufacturing issues\n• Free replacement if needed\n\nWe also provide comprehensive aftercare support even after you return home. If you ever have a concern, our team is just a WhatsApp message away!\n\n💬 Have questions about our guarantee? Ask us!`,
    ar: `🛡️ **الضمان والكفالة**\n\nفي عيادة لينوفا، نقف وراء عملنا:\n\n✅ **زراعة الأسنان** — ضمان مدى الحياة\n✅ **الفينير** — ضمان 10+ سنوات\n✅ **التيجان والجسور** — ضمان 10+ سنوات\n✅ **All-on-4/6** — ضمان مدى الحياة على الزرعات\n\nيغطي ضماننا:\n• عيوب المواد\n• مشاكل التصنيع\n• استبدال مجاني عند الحاجة\n\nنوفر أيضاً دعم متابعة شامل حتى بعد عودتك لبلدك. إذا كان لديك أي قلق، فريقنا على بُعد رسالة واتساب!\n\n💬 لديك أسئلة عن ضماننا؟ اسألنا!`,
    tr: `🛡️ **Garanti ve Güvence**\n\nLinova Clinic'te işimizin arkasında duruyoruz:\n\n✅ **Diş İmplantı** — Ömür boyu garanti\n✅ **Kaplamalar** — 10+ yıl garanti\n✅ **Kron ve Köprü** — 10+ yıl garanti\n✅ **All-on-4/6** — İmplantlarda ömür boyu garanti\n\nGarantimiz şunları kapsar:\n• Malzeme kusurları\n• Üretim sorunları\n• Gerekirse ücretsiz değişim\n\nÜlkenize döndükten sonra bile kapsamlı tedavi sonrası destek sağlıyoruz. Herhangi bir endişeniz olursa ekibimiz bir WhatsApp mesajı kadar yakın!\n\n💬 Garantimiz hakkında sorularınız mı var? Bize sorun!`,
    de: `🛡️ **Garantie & Gewährleistung**\n\nIn der Linova Clinic stehen wir zu unserer Arbeit:\n\n✅ **Zahnimplantate** — Lebenslange Garantie\n✅ **Veneers** — Garantie über 10+ Jahre\n✅ **Kronen & Brücken** — Garantie über 10+ Jahre\n✅ **All-on-4/6** — Lebenslange Garantie auf Implantate\n\nUnsere Garantie deckt ab:\n• Materialfehler\n• Herstellungsprobleme\n• Kostenloser Ersatz falls nötig\n\nWir bieten außerdem umfassenden Nachsorge-Support, auch nachdem Sie nach Hause zurückgekehrt sind. Sollten Sie jemals ein Anliegen haben, ist unser Team nur eine WhatsApp-Nachricht entfernt!\n\n💬 Haben Sie Fragen zu unserer Garantie? Fragen Sie uns!`,
    fr: `🛡️ **Garantie**\n\nÀ la Linova Clinic, nous soutenons notre travail :\n\n✅ **Implants dentaires** — Garantie à vie\n✅ **Facettes** — Garantie de plus de 10 ans\n✅ **Couronnes & bridges** — Garantie de plus de 10 ans\n✅ **All-on-4/6** — Garantie à vie sur les implants\n\nNotre garantie couvre :\n• Les défauts de matériaux\n• Les problèmes de fabrication\n• Un remplacement gratuit si nécessaire\n\nNous offrons également un accompagnement de suivi complet même après votre retour chez vous. Si vous avez une préoccupation, notre équipe n'est qu'à un message WhatsApp !\n\n💬 Des questions sur notre garantie ? Demandez-nous !`,
  },
  pain: {
    en: `😌 **Comfortable & Pain-Free Treatment**\n\nWe understand dental anxiety! Here's how we ensure your comfort:\n\n✅ **Local anesthesia** — You won't feel a thing\n✅ **Sedation options** — For nervous patients\n✅ **Laser technology** — Less invasive, less pain\n✅ **Experienced team** — Gentle techniques\n✅ **Modern equipment** — Precision = less discomfort\n\nMost patients are surprised at how comfortable their experience is! Many of our procedures are completely painless.\n\nDon't let fear stop you from getting the smile you deserve! 😊\n\n💬 Tell us your concerns and we'll make sure you're comfortable.`,
    ar: `😌 **علاج مريح وبدون ألم**\n\nنتفهم قلق الأسنان! إليك كيف نضمن راحتك:\n\n✅ **تخدير موضعي** — لن تشعر بأي شيء\n✅ **خيارات تهدئة** — للمرضى القلقين\n✅ **تقنية الليزر** — أقل تدخلاً، أقل ألماً\n✅ **فريق ذو خبرة** — تقنيات لطيفة\n✅ **معدات حديثة** — دقة = أقل إزعاج\n\nمعظم المرضى يتفاجأون بمدى راحة تجربتهم! كثير من إجراءاتنا بلا ألم تماماً.\n\nلا تدع الخوف يمنعك من الحصول على الابتسامة التي تستحقها! 😊\n\n💬 أخبرنا بمخاوفك وسنضمن راحتك التامة.`,
    tr: `😌 **Konforlu ve Ağrısız Tedavi**\n\nDisş kaygısını anlıyoruz! Konforunuzu nasıl sağladığımız:\n\n✅ **Lokal anestezi** — Hiçbir şey hissetmezsiniz\n✅ **Sedasyon seçenekleri** — Endişeli hastalar için\n✅ **Lazer teknolojisi** — Daha az invaziv, daha az ağrı\n✅ **Deneyimli ekip** — Nazik teknikler\n✅ **Modern ekipman** — Hassasiyet = daha az rahatsızlık\n\nÇoğu hasta deneyimlerinin ne kadar konforlu olduğuna şaşırıyor! Birçok işlemimiz tamamen ağrısız.\n\nKorku sizi hak ettiğiniz gülüşten alıkoymasın! 😊\n\n💬 Endişelerinizi bize bildirin, konforlu olmanızı sağlayalım.`,
    de: `😌 **Komfortable & schmerzfreie Behandlung**\n\nWir verstehen Zahnarztangst! So sorgen wir für Ihren Komfort:\n\n✅ **Lokalanästhesie** — Sie spüren nichts\n✅ **Sedierungsoptionen** — Für nervöse Patienten\n✅ **Lasertechnologie** — Weniger invasiv, weniger Schmerz\n✅ **Erfahrenes Team** — Sanfte Techniken\n✅ **Moderne Ausrüstung** — Präzision = weniger Beschwerden\n\nDie meisten Patienten sind überrascht, wie angenehm ihre Erfahrung ist! Viele unserer Eingriffe sind völlig schmerzfrei.\n\nLassen Sie sich von Angst nicht davon abhalten, das Lächeln zu bekommen, das Sie verdienen! 😊\n\n💬 Erzählen Sie uns Ihre Bedenken, und wir sorgen dafür, dass Sie sich wohlfühlen.`,
    fr: `😌 **Traitement confortable et sans douleur**\n\nNous comprenons l'anxiété dentaire ! Voici comment nous assurons votre confort :\n\n✅ **Anesthésie locale** — Vous ne sentirez rien\n✅ **Options de sédation** — Pour les patients anxieux\n✅ **Technologie laser** — Moins invasif, moins de douleur\n✅ **Équipe expérimentée** — Techniques douces\n✅ **Équipement moderne** — Précision = moins d'inconfort\n\nLa plupart des patients sont surpris de voir à quel point leur expérience est confortable ! Beaucoup de nos procédures sont totalement indolores.\n\nNe laissez pas la peur vous empêcher d'obtenir le sourire que vous méritez ! 😊\n\n💬 Dites-nous vos inquiétudes, et nous veillerons à votre confort.`,
  },
  safety: {
    en: `🏥 **Safety & Quality Standards**\n\nLinova Clinic meets the highest international standards:\n\n✅ ISO-certified clinic\n✅ European quality protocols\n✅ Advanced sterilization standards\n✅ FDA-approved materials\n✅ German titanium implant systems\n✅ Digital workflow for precision\n✅ 15+ years of experience\n✅ 10,000+ happy patients from 50+ countries\n✅ 98% patient satisfaction rate\n\nTurkey is the #1 destination for dental tourism, and Linova Clinic is one of Istanbul's premier clinics.\n\n💬 Want to see our certifications or patient reviews? Just ask!`,
    ar: `🏥 **معايير السلامة والجودة**\n\nعيادة لينوفا تلبي أعلى المعايير الدولية:\n\n✅ عيادة معتمدة ISO\n✅ بروتوكولات جودة أوروبية\n✅ معايير تعقيم متقدمة\n✅ مواد معتمدة من FDA\n✅ أنظمة زرعات تيتانيوم ألمانية\n✅ سير عمل رقمي لضمان الدقة\n✅ خبرة تتجاوز 15 عاماً\n✅ أكثر من 10,000 مريض سعيد من 50+ دولة\n✅ نسبة رضا 98%\n\nتركيا الوجهة الأولى للسياحة العلاجية للأسنان، وعيادة لينوفا من أبرز عيادات إسطنبول.\n\n💬 تريد الاطلاع على شهاداتنا أو تقييمات المرضى؟ فقط اسأل!`,
    tr: `🏥 **Güvenlik ve Kalite Standartları**\n\nLinova Clinic en yüksek uluslararası standartları karşılar:\n\n✅ ISO sertifikalı klinik\n✅ Avrupa kalite protokolleri\n✅ İleri sterilizasyon standartları\n✅ FDA onaylı malzemeler\n✅ Alman titanyum implant sistemleri\n✅ Hassasiyet için dijital iş akışı\n✅ 15+ yıllık deneyim\n✅ 50+ ülkeden 10.000+ mutlu hasta\n✅ %98 hasta memnuniyet oranı\n\nTürkiye diş turizmi için 1 numaralı destinasyondur ve Linova Clinic İstanbul'un önde gelen kliniklerinden biridir.\n\n💬 Sertifikalarımızı veya hasta yorumlarını görmek ister misiniz? Sorun yeter!`,
    de: `🏥 **Sicherheits- & Qualitätsstandards**\n\nDie Linova Clinic erfüllt die höchsten internationalen Standards:\n\n✅ ISO-zertifizierte Klinik\n✅ Europäische Qualitätsprotokolle\n✅ Fortschrittliche Sterilisationsstandards\n✅ FDA-zugelassene Materialien\n✅ Deutsche Titan-Implantatsysteme\n✅ Digitaler Workflow für Präzision\n✅ Über 15 Jahre Erfahrung\n✅ 10.000+ zufriedene Patienten aus über 50 Ländern\n✅ 98% Patientenzufriedenheitsrate\n\nDie Türkei ist das führende Reiseziel für Zahntourismus, und die Linova Clinic ist eine der besten Kliniken Istanbuls.\n\n💬 Möchten Sie unsere Zertifizierungen oder Patientenbewertungen sehen? Fragen Sie einfach!`,
    fr: `🏥 **Normes de sécurité & de qualité**\n\nLa Linova Clinic répond aux normes internationales les plus élevées :\n\n✅ Clinique certifiée ISO\n✅ Protocoles de qualité européens\n✅ Normes de stérilisation avancées\n✅ Matériaux approuvés par la FDA\n✅ Systèmes d'implants en titane allemand\n✅ Flux de travail numérique pour la précision\n✅ Plus de 15 ans d'expérience\n✅ Plus de 10 000 patients satisfaits venus de plus de 50 pays\n✅ Taux de satisfaction patient de 98 %\n\nLa Turquie est la destination n°1 pour le tourisme dentaire, et la Linova Clinic est l'une des principales cliniques d'Istanbul.\n\n💬 Vous voulez voir nos certifications ou les avis de patients ? Demandez-nous simplement !`,
  },
  duration: {
    en: `⏱️ **Treatment Duration**\n\nHere's how long typical treatments take:\n\n• **Hollywood Smile**: 5-7 days (2 visits)\n• **Dental Veneers**: 5-7 days (2 visits)\n• **Dental Implants**: 2-3 days + 3-6 months healing + 2 days for crown\n• **All-on-4/6**: 1-3 days (immediate teeth!)\n• **Teeth Whitening**: 1 hour (single visit)\n• **Crowns/Bridges**: 3-5 days\n\nMost cosmetic treatments can be completed in a single trip to Istanbul!\n\n💬 Tell us your treatment interest and we'll give you a detailed timeline!`,
    ar: `⏱️ **مدة العلاج**\n\nإليك المدة المعتادة لكل علاج:\n\n• **ابتسامة هوليوود**: 5-7 أيام (زيارتان)\n• **فينير الأسنان**: 5-7 أيام (زيارتان)\n• **زراعة الأسنان**: 2-3 أيام + 3-6 أشهر شفاء + يومان للتاج\n• **All-on-4/6**: 1-3 أيام (أسنان فورية!)\n• **تبييض الأسنان**: ساعة واحدة (زيارة واحدة)\n• **التيجان/الجسور**: 3-5 أيام\n\nمعظم العلاجات التجميلية يمكن إكمالها في رحلة واحدة إلى إسطنبول!\n\n💬 أخبرنا بالعلاج الذي يهمك وسنعطيك جدولاً زمنياً مفصلاً!`,
    tr: `⏱️ **Tedavi Süreleri**\n\nTipik tedavi süreleri:\n\n• **Hollywood Gülüş**: 5-7 gün (2 ziyaret)\n• **Diş Kaplamaları**: 5-7 gün (2 ziyaret)\n• **Diş İmplantı**: 2-3 gün + 3-6 ay iyileşme + 2 gün kron\n• **All-on-4/6**: 1-3 gün (anında dişler!)\n• **Diş Beyazlatma**: 1 saat (tek seans)\n• **Kron/Köprü**: 3-5 gün\n\nÇoğu estetik tedavi tek bir İstanbul ziyaretinde tamamlanabilir!\n\n💬 İlgilendiğiniz tedaviyi söyleyin, detaylı bir zaman planı sunalım!`,
    de: `⏱️ **Behandlungsdauer**\n\nSo lange dauern typische Behandlungen:\n\n• **Hollywood Smile**: 5-7 Tage (2 Besuche)\n• **Zahn-Veneers**: 5-7 Tage (2 Besuche)\n• **Zahnimplantate**: 2-3 Tage + 3-6 Monate Heilung + 2 Tage für die Krone\n• **All-on-4/6**: 1-3 Tage (sofortige Zähne!)\n• **Zahnaufhellung**: 1 Stunde (einmaliger Besuch)\n• **Kronen/Brücken**: 3-5 Tage\n\nDie meisten kosmetischen Behandlungen können in einer einzigen Reise nach Istanbul abgeschlossen werden!\n\n💬 Teilen Sie uns Ihr Behandlungsinteresse mit, und wir geben Ihnen einen detaillierten Zeitplan!`,
    fr: `⏱️ **Durée du traitement**\n\nVoici la durée typique des traitements :\n\n• **Hollywood Smile** : 5 à 7 jours (2 visites)\n• **Facettes dentaires** : 5 à 7 jours (2 visites)\n• **Implants dentaires** : 2-3 jours + 3-6 mois de guérison + 2 jours pour la couronne\n• **All-on-4/6** : 1 à 3 jours (dents immédiates !)\n• **Blanchiment dentaire** : 1 heure (visite unique)\n• **Couronnes/Bridges** : 3 à 5 jours\n\nLa plupart des traitements esthétiques peuvent être réalisés en un seul voyage à Istanbul !\n\n💬 Dites-nous quel traitement vous intéresse, et nous vous donnerons un calendrier détaillé !`,
  },
  languages: {
    en: `🗣️ **Languages We Speak**\n\nOur team communicates fluently in:\n\n🇬🇧 English\n🇸🇦 Arabic (العربية)\n🇹🇷 Turkish (Türkçe)\n\nOur patient coordinators are multilingual and will be with you throughout your entire treatment journey — from your first consultation to aftercare.\n\nYou'll never have a communication issue at Linova Clinic!\n\n💬 Feel free to write to us in your preferred language!`,
    ar: `🗣️ **اللغات التي نتحدثها**\n\nفريقنا يتواصل بطلاقة بالغات:\n\n🇬🇧 الإنجليزية\n🇸🇦 العربية\n🇹🇷 التركية\n\nمنسقو المرضى لدينا متعددو اللغات وسيرافقونك طوال رحلتك العلاجية بالكامل — من أول استشارة حتى المتابعة بعد العلاج.\n\nلن تواجه أي مشكلة في التواصل في عيادة لينوفا!\n\n💬 لا تتردد في الكتابة لنا بلغتك المفضلة!`,
    tr: `🗣️ **Konuştuğumuz Diller**\n\nEkibimiz akıcı şekilde iletişim kurar:\n\n🇬🇧 İngilizce\n🇸🇦 Arapça (العربية)\n🇹🇷 Türkçe\n\nHasta koordinatörlerimiz çok dillidir ve tüm tedavi yolculuğunuz boyunca — ilk danışmanlıktan tedavi sonrası takibe kadar — yanınızda olacaktır.\n\nLinova Clinic'te asla iletişim sorunu yaşamazsınız!\n\n💬 Size en uygun dilde bize yazabilirsiniz!`,
    de: `🗣️ **Sprachen, die wir sprechen**\n\nUnser Team kommuniziert fließend in:\n\n🇬🇧 Englisch\n🇸🇦 Arabisch (العربية)\n🇹🇷 Türkisch (Türkçe)\n\nUnsere Patientenkoordinatoren sind mehrsprachig und begleiten Sie während Ihrer gesamten Behandlungsreise — von der ersten Beratung bis zur Nachsorge.\n\nSie werden bei der Linova Clinic nie ein Kommunikationsproblem haben!\n\n💬 Schreiben Sie uns gerne in Ihrer bevorzugten Sprache!`,
    fr: `🗣️ **Langues que nous parlons**\n\nNotre équipe communique couramment en :\n\n🇬🇧 Anglais\n🇸🇦 Arabe (العربية)\n🇹🇷 Turc (Türkçe)\n\nNos coordinateurs de patients sont multilingues et vous accompagneront tout au long de votre parcours de traitement — de votre première consultation au suivi post-traitement.\n\nVous n'aurez jamais de problème de communication à la Linova Clinic !\n\n💬 N'hésitez pas à nous écrire dans la langue de votre choix !`,
  },
  before_after: {
    en: `📸 **Before & After Results**\n\nWe have an extensive gallery of real patient transformations!\n\nOur results include:\n• Hollywood Smile makeovers\n• Dental implant cases\n• Veneer transformations\n• Full mouth restorations\n• Whitening results\n\nAll photos are real patients — no filters, no editing!\n\n💬 Want to see specific cases? Send us a WhatsApp message and we'll share relevant before/after photos for your treatment type!\n${WHATSAPP_LINK}`,
    ar: `📸 **نتائج قبل وبعد**\n\nلدينا معرض واسع من تحوّلات المرضى الحقيقية!\n\nنتائجنا تشمل:\n• تحوّلات ابتسامة هوليوود\n• حالات زراعة أسنان\n• تحوّلات فينير\n• ترميمات كاملة للفم\n• نتائج تبييض\n\nجميع الصور لمرضى حقيقيين — بدون فلاتر أو تعديل!\n\n💬 تريد رؤية حالات محددة؟ أرسل لنا رسالة واتساب وسنشارك صور قبل/بعد ذات صلة بنوع علاجك!\n${WHATSAPP_LINK}`,
    tr: `📸 **Önce ve Sonra Sonuçları**\n\nGerçek hasta dönüşümlerinden oluşan kapsamlı bir galerimiz var!\n\nSonuçlarımız şunları içerir:\n• Hollywood Gülüş dönüşümleri\n• Diş implant vakaları\n• Kaplama dönüşümleri\n• Tam ağız restorasyonları\n• Beyazlatma sonuçları\n\nTüm fotoğraflar gerçek hastalara ait — filtre yok, düzenleme yok!\n\n💬 Belirli vakaları görmek ister misiniz? WhatsApp'tan mesaj atın, tedavi tipinize uygun önce/sonra fotoğraflarını paylaşalım!\n${WHATSAPP_LINK}`,
    de: `📸 **Vorher-Nachher-Ergebnisse**\n\nWir haben eine umfangreiche Galerie echter Patientenverwandlungen!\n\nUnsere Ergebnisse umfassen:\n• Hollywood-Smile-Makeovers\n• Zahnimplantat-Fälle\n• Veneer-Verwandlungen\n• Komplette Mundrestaurationen\n• Aufhellungsergebnisse\n\nAlle Fotos zeigen echte Patienten — keine Filter, keine Bearbeitung!\n\n💬 Möchten Sie bestimmte Fälle sehen? Senden Sie uns eine WhatsApp-Nachricht, und wir teilen relevante Vorher-Nachher-Fotos für Ihren Behandlungstyp!\n${WHATSAPP_LINK}`,
    fr: `📸 **Résultats avant/après**\n\nNous avons une vaste galerie de transformations réelles de patients !\n\nNos résultats incluent :\n• Relookings Hollywood Smile\n• Cas d'implants dentaires\n• Transformations avec facettes\n• Restaurations complètes de la bouche\n• Résultats de blanchiment\n\nToutes les photos sont de vrais patients — aucun filtre, aucune retouche !\n\n💬 Vous voulez voir des cas spécifiques ? Envoyez-nous un message WhatsApp et nous partagerons des photos avant/après pertinentes pour votre type de traitement !\n${WHATSAPP_LINK}`,
  },
  payment: {
    en: `💳 **Payment Options**\n\nWe offer flexible payment methods:\n\n✅ Credit/Debit cards (Visa, Mastercard)\n✅ Bank transfer\n✅ Cash (Turkish Lira, USD, EUR, GBP)\n✅ Installment plans available\n\nPayment is typically split:\n• 50% deposit to confirm your booking\n• 50% upon treatment completion\n\nAll prices are transparent with no hidden fees!\n\n💬 Need more details about pricing? Contact us for a personalized quote!`,
    ar: `💳 **خيارات الدفع**\n\nنوفر طرق دفع مرنة:\n\n✅ بطاقات ائتمان/خصم (فيزا، ماستركارد)\n✅ تحويل بنكي\n✅ نقداً (ليرة تركية، دولار، يورو، جنيه إسترليني)\n✅ خطط تقسيط متاحة\n\nعادة يُقسم الدفع:\n• 50% عربون لتأكيد الحجز\n• 50% عند اكتمال العلاج\n\nجميع الأسعار شفافة بدون رسوم خفية!\n\n💬 تحتاج تفاصيل أكثر عن الأسعار؟ تواصل معنا لعرض سعر مخصص!`,
    tr: `💳 **Ödeme Seçenekleri**\n\nEsnek ödeme yöntemleri sunuyoruz:\n\n✅ Kredi/Banka kartları (Visa, Mastercard)\n✅ Havale/EFT\n✅ Nakit (Türk Lirası, USD, EUR, GBP)\n✅ Taksit imkânı\n\nÖdeme genellikle ikiye bölünür:\n• %50 depozito (rezervasyon onayı için)\n• %50 tedavi tamamlandığında\n\nTüm fiyatlar şeffaf, gizli maliyet yok!\n\n💬 Fiyatlandırma hakkında daha fazla bilgi mi lazım? Kişiye özel teklif için bizimle iletişime geçin!`,
    de: `💳 **Zahlungsoptionen**\n\nWir bieten flexible Zahlungsmethoden:\n\n✅ Kredit-/Debitkarten (Visa, Mastercard)\n✅ Banküberweisung\n✅ Bargeld (Türkische Lira, USD, EUR, GBP)\n✅ Ratenzahlungspläne verfügbar\n\nDie Zahlung erfolgt in der Regel geteilt:\n• 50% Anzahlung zur Bestätigung Ihrer Buchung\n• 50% nach Abschluss der Behandlung\n\nAlle Preise sind transparent, ohne versteckte Gebühren!\n\n💬 Benötigen Sie weitere Details zu den Preisen? Kontaktieren Sie uns für ein persönliches Angebot!`,
    fr: `💳 **Options de paiement**\n\nNous proposons des méthodes de paiement flexibles :\n\n✅ Cartes de crédit/débit (Visa, Mastercard)\n✅ Virement bancaire\n✅ Espèces (livre turque, USD, EUR, GBP)\n✅ Plans de paiement échelonné disponibles\n\nLe paiement est généralement réparti ainsi :\n• 50 % d'acompte pour confirmer votre réservation\n• 50 % à la fin du traitement\n\nTous les prix sont transparents, sans frais cachés !\n\n💬 Besoin de plus de détails sur les tarifs ? Contactez-nous pour un devis personnalisé !`,
  },
  aftercare: {
    en: `🩺 **Aftercare & Follow-up**\n\nYour care doesn't end when you leave Istanbul:\n\n✅ Detailed aftercare instructions\n✅ 24/7 WhatsApp support\n✅ Regular follow-up check-ins\n✅ Video consultations if needed\n✅ Lifetime warranty on implants\n✅ Free adjustments during warranty period\n\nIf you ever need to come back for any reason related to your treatment, we're here for you!\n\nOur dedicated aftercare team monitors your healing and is always available for questions.\n\n💬 Have concerns about post-treatment care? We're here to help!`,
    ar: `🩺 **المتابعة بعد العلاج**\n\nرعايتنا لا تنتهي عند مغادرتك إسطنبول:\n\n✅ تعليمات مفصلة للعناية بعد العلاج\n✅ دعم واتساب على مدار الساعة\n✅ متابعات دورية\n✅ استشارات فيديو عند الحاجة\n✅ ضمان مدى الحياة على الزرعات\n✅ تعديلات مجانية خلال فترة الضمان\n\nإذا احتجت العودة لأي سبب يتعلق بعلاجك، نحن هنا من أجلك!\n\nفريق المتابعة المخصص لدينا يراقب شفاءك ومتاح دائماً للأسئلة.\n\n💬 لديك مخاوف بشأن الرعاية بعد العلاج؟ نحن هنا للمساعدة!`,
    tr: `🩺 **Tedavi Sonrası Bakım ve Takip**\n\nBakımınız İstanbul'dan ayrıldığınızda bitmez:\n\n✅ Detaylı bakım talimatları\n✅ 7/24 WhatsApp desteği\n✅ Düzenli takip kontrolleri\n✅ Gerektiğinde video danışmanlık\n✅ İmplantlarda ömür boyu garanti\n✅ Garanti süresince ücretsiz düzeltmeler\n\nTedavinizle ilgili herhangi bir nedenle geri gelmeniz gerekirse, buradayız!\n\nÖzel bakım ekibimiz iyileşmenizi takip eder ve sorularınız için her zaman hazırdır.\n\n💬 Tedavi sonrası bakımla ilgili endişeleriniz mi var? Yardımcı olmak için buradayız!`,
    de: `🩺 **Nachsorge & Nachbetreuung**\n\nIhre Betreuung endet nicht, wenn Sie Istanbul verlassen:\n\n✅ Detaillierte Nachsorgeanweisungen\n✅ 24/7-WhatsApp-Support\n✅ Regelmäßige Nachuntersuchungen\n✅ Videokonsultationen bei Bedarf\n✅ Lebenslange Garantie auf Implantate\n✅ Kostenlose Anpassungen während der Garantiezeit\n\nFalls Sie aus irgendeinem Grund im Zusammenhang mit Ihrer Behandlung zurückkommen müssen, sind wir für Sie da!\n\nUnser engagiertes Nachsorgeteam überwacht Ihre Heilung und steht Ihnen jederzeit für Fragen zur Verfügung.\n\n💬 Haben Sie Bedenken bezüglich der Nachsorge? Wir helfen Ihnen gerne!`,
    fr: `🩺 **Suivi post-traitement**\n\nVos soins ne s'arrêtent pas quand vous quittez Istanbul :\n\n✅ Instructions de suivi détaillées\n✅ Assistance WhatsApp 24h/24 et 7j/7\n✅ Contrôles de suivi réguliers\n✅ Consultations vidéo si nécessaire\n✅ Garantie à vie sur les implants\n✅ Ajustements gratuits pendant la période de garantie\n\nSi vous devez revenir pour une raison liée à votre traitement, nous sommes là pour vous !\n\nNotre équipe de suivi dédiée surveille votre guérison et reste toujours disponible pour vos questions.\n\n💬 Des préoccupations concernant les soins post-traitement ? Nous sommes là pour vous aider !`,
  },
  technology: {
    en: `🖥️ **Our Advanced Technology**\n\nLinova Clinic uses cutting-edge dental technology:\n\n🔬 **3D CBCT Imaging** — Precise surgical planning\n📸 **Intraoral Scanner** — No more uncomfortable molds\n🖥️ **Digital Smile Design** — See your smile before treatment\n⚡ **Laser Dentistry** — Minimal pain, faster healing\n🏭 **CAD/CAM System** — Same-day restorations\n🤖 **AI Facial Analysis** — Precision smile planning\n\nOur digital workflow ensures:\n✅ Maximum precision\n✅ Predictable results\n✅ Faster treatment times\n✅ Better patient comfort\n\n💬 Want to learn more about our technology? Ask us!`,
    ar: `🖥️ **تقنياتنا المتطورة**\n\nعيادة لينوفا تستخدم أحدث تقنيات طب الأسنان:\n\n🔬 **تصوير CBCT ثلاثي الأبعاد** — تخطيط جراحي دقيق\n📸 **ماسح ضوئي داخل الفم** — لا مزيد من القوالب المزعجة\n🖥️ **تصميم الابتسامة الرقمي** — شاهد ابتسامتك قبل العلاج\n⚡ **طب الأسنان بالليزر** — ألم أقل، شفاء أسرع\n🏭 **نظام CAD/CAM** — ترميمات في نفس اليوم\n🤖 **تحليل وجهي بالذكاء الاصطناعي** — تخطيط دقيق للابتسامة\n\nسير العمل الرقمي لدينا يضمن:\n✅ أقصى درجات الدقة\n✅ نتائج متوقعة\n✅ أوقات علاج أسرع\n✅ راحة أكبر للمريض\n\n💬 تريد معرفة المزيد عن تقنياتنا؟ اسألنا!`,
    tr: `🖥️ **İleri Teknolojimiz**\n\nLinova Clinic son teknoloji diş hekimliği ekipmanları kullanır:\n\n🔬 **3D CBCT Görüntüleme** — Hassas cerrahi planlama\n📸 **Ağız İçi Tarayıcı** — Rahatsız kalıplara son\n🖥️ **Dijital Gülüş Tasarımı** — Tedavi öncesi gülüşünüzü görün\n⚡ **Lazer Diş Tedavisi** — Minimum ağrı, hızlı iyileşme\n🏭 **CAD/CAM Sistemi** — Aynı gün restorasyon\n🤖 **Yapay Zekâ Yüz Analizi** — Hassas gülüş planlaması\n\nDijital iş akışımız şunları garanti eder:\n✅ Maksimum hassasiyet\n✅ Öngörülebilir sonuçlar\n✅ Daha kısa tedavi süreleri\n✅ Daha iyi hasta konforu\n\n💬 Teknolojimiz hakkında daha fazla bilgi mi istiyorsunuz? Bize sorun!`,
    de: `🖥️ **Unsere fortschrittliche Technologie**\n\nDie Linova Clinic nutzt modernste Zahnmedizintechnologie:\n\n🔬 **3D-CBCT-Bildgebung** — Präzise Operationsplanung\n📸 **Intraoraler Scanner** — Keine unangenehmen Abformungen mehr\n🖥️ **Digitales Lächeln-Design** — Sehen Sie Ihr Lächeln vor der Behandlung\n⚡ **Laser-Zahnheilkunde** — Minimaler Schmerz, schnellere Heilung\n🏭 **CAD/CAM-System** — Restaurationen am selben Tag\n🤖 **KI-Gesichtsanalyse** — Präzise Lächeln-Planung\n\nUnser digitaler Workflow gewährleistet:\n✅ Maximale Präzision\n✅ Vorhersehbare Ergebnisse\n✅ Schnellere Behandlungszeiten\n✅ Besserer Patientenkomfort\n\n💬 Möchten Sie mehr über unsere Technologie erfahren? Fragen Sie uns!`,
    fr: `🖥️ **Notre technologie avancée**\n\nLa Linova Clinic utilise une technologie dentaire de pointe :\n\n🔬 **Imagerie 3D CBCT** — Planification chirurgicale précise\n📸 **Scanner intra-oral** — Fini les empreintes inconfortables\n🖥️ **Design numérique du sourire** — Voyez votre sourire avant le traitement\n⚡ **Dentisterie laser** — Douleur minimale, guérison plus rapide\n🏭 **Système CFAO** — Restaurations le jour même\n🤖 **Analyse faciale par IA** — Planification précise du sourire\n\nNotre flux de travail numérique garantit :\n✅ Précision maximale\n✅ Résultats prévisibles\n✅ Temps de traitement plus rapides\n✅ Meilleur confort patient\n\n💬 Vous voulez en savoir plus sur notre technologie ? Demandez-nous !`,
  },
  xray: {
    en: `🔬 **Send Us Your X-Ray!**\n\nFor an accurate assessment, please send us:\n\n📸 **Clear photos** of your teeth (front view + both sides)\n🔬 **Panoramic X-ray** (OPG) if you have one\n📝 **Description** of what you'd like to improve\n\nYou can get a panoramic X-ray at any local dental clinic — it takes just 2 minutes!\n\nSend everything via WhatsApp for the fastest response:\n${WHATSAPP_LINK}\n\nWe'll review your case and send a detailed treatment plan with pricing within 24 hours!`,
    ar: `🔬 **أرسل لنا صورة الأشعة!**\n\nللحصول على تقييم دقيق، يرجى إرسال:\n\n📸 **صور واضحة** لأسنانك (من الأمام + الجانبين)\n🔬 **صورة أشعة بانورامية** (OPG) إن وُجدت\n📝 **وصف** لما تريد تحسينه\n\nيمكنك الحصول على أشعة بانورامية في أي عيادة أسنان محلية — تستغرق دقيقتين فقط!\n\nأرسل كل شيء عبر واتساب للحصول على أسرع رد:\n${WHATSAPP_LINK}\n\nسنراجع حالتك ونرسل خطة علاج مفصلة مع الأسعار خلال 24 ساعة!`,
    tr: `🔬 **Röntgeninizi Bize Gönderin!**\n\nDoğru bir değerlendirme için lütfen gönderin:\n\n📸 **Net fotoğraflar** (ön görünüm + iki yan)\n🔬 **Panoramik röntgen** (OPG) varsa\n📝 **Açıklama** — neyi iyileştirmek istediğiniz\n\nPanoramik röntgen herhangi bir diş kliniğinde çekilebilir — sadece 2 dakika sürer!\n\nEn hızlı yanıt için her şeyi WhatsApp'tan gönderin:\n${WHATSAPP_LINK}\n\nVakayınızı inceleyip 24 saat içinde fiyatlı detaylı tedavi planı göndereceğiz!`,
    de: `🔬 **Senden Sie uns Ihr Röntgenbild!**\n\nFür eine genaue Einschätzung senden Sie uns bitte:\n\n📸 **Klare Fotos** Ihrer Zähne (Frontalansicht + beide Seiten)\n🔬 **Panorama-Röntgenbild** (OPG), falls vorhanden\n📝 **Beschreibung**, was Sie verbessern möchten\n\nEin Panorama-Röntgenbild erhalten Sie in jeder örtlichen Zahnarztpraxis — es dauert nur 2 Minuten!\n\nSenden Sie alles über WhatsApp für die schnellste Antwort:\n${WHATSAPP_LINK}\n\nWir prüfen Ihren Fall und senden Ihnen innerhalb von 24 Stunden einen detaillierten Behandlungsplan mit Preisen!`,
    fr: `🔬 **Envoyez-nous votre radiographie !**\n\nPour une évaluation précise, veuillez nous envoyer :\n\n📸 **Des photos claires** de vos dents (vue de face + les deux côtés)\n🔬 **Une radiographie panoramique** (OPG) si vous en avez une\n📝 **Une description** de ce que vous souhaitez améliorer\n\nVous pouvez obtenir une radiographie panoramique dans n'importe quelle clinique dentaire locale — cela ne prend que 2 minutes !\n\nEnvoyez tout via WhatsApp pour la réponse la plus rapide :\n${WHATSAPP_LINK}\n\nNous examinerons votre cas et vous enverrons un plan de traitement détaillé avec tarification sous 24 heures !`,
  },
  whatsapp: {
    en: `💬 **Chat with Us on WhatsApp!**\n\nWhatsApp is the fastest way to reach us:\n\n👉 ${WHATSAPP_LINK}\n\nOn WhatsApp you can:\n• Send photos & X-rays\n• Get a free treatment plan\n• Ask questions in real-time\n• Schedule your appointment\n• Get travel assistance\n\nWe typically respond within minutes! Our team is available in English, Arabic, and Turkish.\n\nTap the link above to start chatting! 😊`,
    ar: `💬 **تحدث معنا على واتساب!**\n\nواتساب هو أسرع طريقة للتواصل معنا:\n\n👉 ${WHATSAPP_LINK}\n\nعلى واتساب يمكنك:\n• إرسال صور وأشعة\n• الحصول على خطة علاج مجانية\n• طرح أسئلة فورية\n• حجز موعدك\n• الحصول على مساعدة في السفر\n\nعادة نرد خلال دقائق! فريقنا متاح بالعربية والإنجليزية والتركية.\n\nاضغط الرابط أعلاه لبدء المحادثة! 😊`,
    tr: `💬 **WhatsApp'tan Bize Yazın!**\n\nWhatsApp bize ulaşmanın en hızlı yoludur:\n\n👉 ${WHATSAPP_LINK}\n\nWhatsApp'ta yapabilecekleriniz:\n• Fotoğraf ve röntgen gönderin\n• Ücretsiz tedavi planı alın\n• Anlık sorularınızı sorun\n• Randevunuzu ayarlayın\n• Seyahat desteği alın\n\nGenellikle dakikalar içinde yanıt veriyoruz! Ekibimiz İngilizce, Arapça ve Türkçe hizmet vermektedir.\n\nSohbete başlamak için yukarıdaki bağlantıya dokunun! 😊`,
    de: `💬 **Chatten Sie mit uns auf WhatsApp!**\n\nWhatsApp ist der schnellste Weg, uns zu erreichen:\n\n👉 ${WHATSAPP_LINK}\n\nAuf WhatsApp können Sie:\n• Fotos & Röntgenbilder senden\n• Einen kostenlosen Behandlungsplan erhalten\n• Fragen in Echtzeit stellen\n• Ihren Termin vereinbaren\n• Reiseunterstützung erhalten\n\nWir antworten normalerweise innerhalb von Minuten! Unser Team ist auf Englisch, Arabisch und Türkisch verfügbar.\n\nTippen Sie auf den obigen Link, um den Chat zu starten! 😊`,
    fr: `💬 **Discutez avec nous sur WhatsApp !**\n\nWhatsApp est le moyen le plus rapide de nous joindre :\n\n👉 ${WHATSAPP_LINK}\n\nSur WhatsApp, vous pouvez :\n• Envoyer des photos & radiographies\n• Obtenir un plan de traitement gratuit\n• Poser des questions en temps réel\n• Programmer votre rendez-vous\n• Obtenir de l'aide pour votre voyage\n\nNous répondons généralement en quelques minutes ! Notre équipe est disponible en anglais, arabe et turc.\n\nAppuyez sur le lien ci-dessus pour commencer à discuter ! 😊`,
  },
  fallback: {
    en: `I appreciate your question! For the most accurate and detailed answer, I'd recommend speaking directly with our patient coordinators.\n\n💬 **WhatsApp** (fastest): ${WHATSAPP_LINK}\n📞 **Phone**: ${PHONE}\n📧 **Email**: ${EMAIL}\n\nThey can help with:\n• Personalized treatment plans\n• Exact pricing for your case\n• Travel arrangements\n• Any specific questions\n\nIs there anything else I can help you with? You can ask me about our treatments, pricing, travel, or booking!`,
    ar: `أقدّر سؤالك! للحصول على إجابة أكثر دقة وتفصيلاً، أنصح بالتحدث مباشرة مع منسقي المرضى لدينا.\n\n💬 **واتساب** (الأسرع): ${WHATSAPP_LINK}\n📞 **هاتف**: ${PHONE}\n📧 **بريد إلكتروني**: ${EMAIL}\n\nيمكنهم مساعدتك في:\n• خطط علاج مخصصة\n• أسعار دقيقة لحالتك\n• ترتيبات السفر\n• أي أسئلة محددة\n\nهل هناك شيء آخر يمكنني مساعدتك به؟ يمكنك سؤالي عن علاجاتنا، الأسعار، السفر، أو الحجز!`,
    tr: `Sorunuz için teşekkürler! En doğru ve detaylı cevap için hasta koordinatörlerimizle doğrudan görüşmenizi öneririm.\n\n💬 **WhatsApp** (en hızlısı): ${WHATSAPP_LINK}\n📞 **Telefon**: ${PHONE}\n📧 **E-posta**: ${EMAIL}\n\nSize yardımcı olabilecekleri konular:\n• Kişiye özel tedavi planları\n• Vakayınız için kesin fiyatlandırma\n• Seyahat düzenlemeleri\n• Herhangi bir özel soru\n\nBaşka yardımcı olabileceğim bir konu var mı? Tedavilerimiz, fiyatlar, seyahat veya randevu hakkında sorabilirsiniz!`,
    de: `Ich schätze Ihre Frage! Für die genaueste und detaillierteste Antwort empfehle ich Ihnen, direkt mit unseren Patientenkoordinatoren zu sprechen.\n\n💬 **WhatsApp** (am schnellsten): ${WHATSAPP_LINK}\n📞 **Telefon**: ${PHONE}\n📧 **E-Mail**: ${EMAIL}\n\nSie können Ihnen helfen bei:\n• Persönlichen Behandlungsplänen\n• Genauen Preisen für Ihren Fall\n• Reisearrangements\n• Jeglichen spezifischen Fragen\n\nGibt es noch etwas, womit ich Ihnen helfen kann? Sie können mich zu unseren Behandlungen, Preisen, Reisen oder der Buchung fragen!`,
    fr: `J'apprécie votre question ! Pour une réponse plus précise et détaillée, je vous recommande de parler directement avec nos coordinateurs de patients.\n\n💬 **WhatsApp** (le plus rapide) : ${WHATSAPP_LINK}\n📞 **Téléphone** : ${PHONE}\n📧 **E-mail** : ${EMAIL}\n\nIls peuvent vous aider avec :\n• Des plans de traitement personnalisés\n• Le tarif exact pour votre cas\n• Les arrangements de voyage\n• Toute question spécifique\n\nY a-t-il autre chose avec quoi je peux vous aider ? Vous pouvez me poser des questions sur nos traitements, les tarifs, le voyage ou la réservation !`,
  },
};

export function detectIntent(message: string): ChatIntent {
  const lowerMessage = message.toLowerCase().trim();

  let bestMatch: ChatIntent = "fallback";
  let bestScore = 0;

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [
    ChatIntent,
    string[],
  ][]) {
    if (intent === "fallback") continue;

    let score = 0;
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        score += keyword.split(" ").length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  return bestMatch;
}

export function getResponse(intent: ChatIntent, locale: string): string {
  const supportedLocales = ["ar", "tr", "de", "fr"] as const;
  const lang = (supportedLocales as readonly string[]).includes(locale)
    ? (locale as "ar" | "tr" | "de" | "fr")
    : "en";
  return INTENT_RESPONSES[intent][lang];
}

export function detectLanguage(
  message: string,
): "en" | "ar" | "tr" | "de" | "fr" {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;
  // \u00DF/\u00E4 are effectively unique to German among these languages.
  const germanChars = /[\u00E4\u00DF\u00C4]/;
  // Accented letters common in French that don't overlap with Turkish/German markers.
  const frenchChars = /[\u00E0\u00E2\u00E6\u00E8\u00E9\u00EA\u00EB\u00EE\u00EF\u00F4\u0153\u00F9\u00FB\u00FF\u00C0\u00C2\u00C6\u00C8\u00C9\u00CA\u00CB\u00CE\u00CF\u00D4\u0152\u00D9\u00DB\u0178]/;
  const turkishChars = /[çğıöşüÇĞİÖŞÜ]/;

  if (arabicRegex.test(message)) return "ar";
  if (turkishChars.test(message)) return "tr";
  if (germanChars.test(message)) return "de";
  if (frenchChars.test(message)) return "fr";
  return "en";
}
