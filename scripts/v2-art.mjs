// Local-only: turns the chosen Kie.ai paintings (tmp/kie/...) into the v2 site assets in src/assets/v2/.
// Usage: node scripts/v2-art.mjs scripts/prompts/v2/chosen.json
// chosen.json maps an output name to a source PNG, e.g. { "tree": "tmp/kie/hero-tree/image-0.png" }.
// Panels listed in LINED also get a "-line" twin: the same cloth before dyeing (black kalam lines on
// undyed cotton), pixel-aligned with the dyed version so the site can dye one into the other.
import { mkdir, readFile } from "node:fs/promises";
import sharp from "sharp";

const OUT = "src/assets/v2";
const LINED = new Set(["tree", "story-1", "story-2", "story-3", "story-4"]);
const WIDTH = { tree: 1400, "story-1": 1400, "story-2": 1400, "story-3": 1400, "story-4": 1400, "sea-band": 2400, "vine-band": 2400, frame: 900, "about-her": 1000, "about-him": 1000 };

const chosen = JSON.parse(await readFile(process.argv[2], "utf8"));
await mkdir(OUT, { recursive: true });

const ECRU = [239, 226, 196];
const INK = [30, 22, 16];

async function lineTwin(src, width, out, ecruSrc) {
  const { data, info } = await sharp(src).resize({ width }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  // undyed cotton: the generated ecru cloth if there is one, else flat ecru
  const base = ecruSrc
    ? await sharp(ecruSrc).resize({ width: w, height: h, fit: "cover" }).removeAlpha().raw().toBuffer()
    : null;
  const px = Buffer.alloc(w * h * 3);
  for (let i = 0; i < w * h; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const v = max / 255, s = max ? (max - min) / max : 0;
    // kalam lines are dark and nearly colourless; deep indigo or madder fills are dark but saturated
    let a = Math.min(1, Math.max(0, (0.36 - v) / 0.16));
    if (s > 0.5) a *= Math.max(0, 1 - (s - 0.5) * 3);
    for (let c = 0; c < 3; c++) {
      const g0 = base ? base[i * 3 + c] : ECRU[c];
      px[i * 3 + c] = Math.round(g0 * (1 - a) + INK[c] * a);
    }
  }
  await sharp(px, { raw: { width: w, height: h, channels: 3 } }).jpeg({ quality: 84, mozjpeg: true }).toFile(out);
}

for (const [name, src] of Object.entries(chosen)) {
  if (name.startsWith("cloth-")) continue;
  const width = WIDTH[name] ?? 1200;
  // the frame is a CSS border-image (no next/image resizing), so it ships as a small WebP
  const isFrame = name === "frame";
  const out = `${OUT}/${name}.${isFrame ? "webp" : "jpg"}`;
  const img = sharp(src).resize({ width }).removeAlpha();
  await (isFrame ? img.webp({ quality: 82 }) : img.jpeg({ quality: 84, mozjpeg: true })).toFile(out);
  if (LINED.has(name)) await lineTwin(src, width, `${OUT}/${name}-line.jpg`, chosen["cloth-ecru"]);
  console.log("wrote", out, LINED.has(name) ? "(+ line twin)" : "");
}
