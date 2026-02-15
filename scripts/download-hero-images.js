/**
 * Downloads the two hero composite images from Unsplash and saves to public/images/.
 * Run: node scripts/download-hero-images.js
 *
 * Patient: smiling woman, natural light (Unsplash)
 * Istanbul: Istanbul skyline with Bosphorus (Unsplash)
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const OUT_DIR = path.join(__dirname, "..", "public", "images");
// Unsplash direct CDN URLs (photo-id from Unsplash; add ?w=1200 for size)
const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    file: "hero-patient.jpg",
    description: "Smiling woman portrait, natural light",
  },
  {
    url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    file: "hero-istanbul.jpg",
    description: "Istanbul / city at golden hour",
  },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Linova-Dental-Hero/1.0" } }, (res) => {
        const redirect = res.headers.location;
        if (redirect) {
          download(redirect).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { url, file, description } of IMAGES) {
    const filePath = path.join(OUT_DIR, file);
    try {
      console.log("Downloading", description, "->", file);
      const buf = await download(url);
      fs.writeFileSync(filePath, buf);
      console.log("Saved", filePath);
    } catch (err) {
      console.error("Failed", file, err.message);
    }
  }
}

main();
