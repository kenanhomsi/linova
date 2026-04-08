/**
 * Unsplash images verified via HTTP (valid photo IDs only).
 * `auto=format&fit=crop` is the supported CDN shape for images.unsplash.com.
 */
const q = "auto=format&fit=crop&q=80";

export const ISTANBUL_EXPERIENCE_IMAGES: Record<string, string> = {
  nisantasi: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?${q}&w=900&h=600`,
  taksim: `https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?${q}&w=900&h=600`,
  sultanahmet: `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?${q}&w=900&h=600`,
  besiktas: `https://images.unsplash.com/photo-1527838832700-5059252407fa?${q}&w=900&h=600`,
  bosphorus: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?${q}&w=900&h=560`,
  bazaar: `https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?${q}&w=900&h=560`,
  hagia: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?${q}&w=900&h=560`,
  istiklal: `https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?${q}&w=900&h=560`,
  hamam: `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?${q}&w=900&h=560`,
  galata: `https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?${q}&w=900&h=560`,
  spring: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?${q}&w=800&h=420`,
  summer: `https://images.unsplash.com/photo-1566073771259-6a8506099945?${q}&w=800&h=420`,
  autumn: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?${q}&w=800&h=420`,
  winter: `https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?${q}&w=800&h=420`,
};

export function istanbulImageSrc(key: string | undefined): string | null {
  if (!key) return null;
  return ISTANBUL_EXPERIENCE_IMAGES[key] ?? null;
}
