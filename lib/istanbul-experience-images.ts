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
  bazaar: `https://images.unsplash.com/photo-1706873251420-caac4330c3b3?${q}&w=900&h=560`,
  hagia: `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?${q}&w=900&h=560`,
  istiklal: `https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?${q}&w=900&h=560`,
  hamam: `https://images.unsplash.com/photo-1659614536075-2cf8f82cf9db?${q}&w=900&h=560`,
  galata: `https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?${q}&w=900&h=560`,
  spring: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?${q}&w=800&h=420`,
  summer: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?${q}&w=800&h=420`,
  autumn: `https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?${q}&w=800&h=420`,
  winter: `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?${q}&w=800&h=420`,
};

export function istanbulImageSrc(key: string | undefined): string | null {
  if (!key) return null;
  return ISTANBUL_EXPERIENCE_IMAGES[key] ?? null;
}
