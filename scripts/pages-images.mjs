// Run after a static-export build (`PAGES_BASE_PATH=... npm run build`).
// GitHub Pages has no image optimizer, so this writes the WebP widths that
// src/lib/pages-image-loader.ts points next/image at: one per configured size, never upscaled.
import { readdir } from "node:fs/promises";
import sharp from "sharp";
import imageConfig from "next/dist/shared/lib/image-config.js";

const dir = "out/_next/static/media";
const { imageSizes, deviceSizes } = imageConfig.imageConfigDefault;
const widths = [...imageSizes, ...deviceSizes];

const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (!files.length) throw new Error(`no images in ${dir}: run the static-export build first`);

for (const f of files) {
  const base = f.replace(/\.\w+$/, "");
  await Promise.all(
    widths.map((w) =>
      sharp(`${dir}/${f}`).resize({ width: w, withoutEnlargement: true }).webp({ quality: 75 }).toFile(`${dir}/${base}.w${w}.webp`),
    ),
  );
}
console.log(`pages-images: ${files.length} images x ${widths.length} widths`);
