// Local-only: turns the Kie.ai photographs of dyed cotton into seamless ground tiles for v2.
// Usage: node scripts/v2-cloth.mjs
// Each tile keeps the real slub and uneven dye take-up, is pulled to the page's dye colour, and is made
// seamless by blending a half-offset copy over its edges (once across, once down).
import sharp from "sharp";

const N = 640;
const tiles = {
  madder: { src: "tmp/kie/v2-cloth-madder-b/image-0.png", rgb: [139, 35, 24], keep: 0.45 },
  indigo: { src: "tmp/kie/v2-cloth-indigo/image-0.png", rgb: [29, 45, 82], keep: 0.8 },
  kasimi: { src: "tmp/kie/v2-cloth-kasimi/image-0.png", rgb: [29, 25, 21], keep: 1 },
  ecru: { src: "tmp/kie/v2-cloth-ecru/image-0.png", rgb: [240, 227, 198], keep: 0.7 },
};

const smooth = (a, b, t) => {
  const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
};

// blend a copy shifted by N/2 along one axis over the edges of that axis
function seam(px, axis) {
  const out = Buffer.alloc(px.length);
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      const t = axis === "x" ? x : y;
      const m = smooth(0.08, 0.42, Math.min(t, N - 1 - t) / (N / 2));
      const sx = axis === "x" ? (x + N / 2) % N : x;
      const sy = axis === "y" ? (y + N / 2) % N : y;
      for (let c = 0; c < 3; c++) out[(y * N + x) * 3 + c] = Math.round(px[(y * N + x) * 3 + c] * m + px[(sy * N + sx) * 3 + c] * (1 - m));
    }
  return out;
}

for (const [name, { src, rgb, keep }] of Object.entries(tiles)) {
  // the centre of the photograph, scaled so one tile spans a hand's width of cloth
  let px = await sharp(src).extract({ left: 512, top: 512, width: 1024, height: 1024 }).resize(N, N).removeAlpha().raw().toBuffer();
  // keep part of the cloth's own light and dark (the madder photo's weave is loud) over the exact dye colour
  const lum = (i) => 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
  let total = 0;
  for (let i = 0; i < px.length; i += 3) total += lum(i);
  const meanL = total / (px.length / 3);
  const tuned = Buffer.alloc(px.length);
  for (let i = 0; i < px.length; i += 3) {
    const k = 1 + (lum(i) / meanL - 1) * keep;
    for (let c = 0; c < 3; c++) tuned[i + c] = Math.max(0, Math.min(255, Math.round(rgb[c] * k)));
  }
  px = seam(seam(tuned, "x"), "y");
  await sharp(px, { raw: { width: N, height: N, channels: 3 } }).webp({ quality: 78 }).toFile(`src/assets/v2/cloth-${name}.webp`);
  console.log("wrote", `src/assets/v2/cloth-${name}.webp`);
}
