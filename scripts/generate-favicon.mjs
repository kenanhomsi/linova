import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "tab-logo.svg");
const outPath = path.join(root, "public", "favicon.ico");

const sizes = [16, 32, 48];
const buffers = await Promise.all(
  sizes.map((s) =>
    sharp(svgPath)
      .resize(s, s, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .png()
      .toBuffer(),
  ),
);
const ico = await toIco(buffers);
fs.writeFileSync(outPath, ico);
console.log("Wrote", outPath);
