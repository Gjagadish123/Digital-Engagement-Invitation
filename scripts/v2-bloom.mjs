// Local-only: draws the three dye-bloom masks for the v2 hero (src/assets/v2/bloom-*.png).
// Each is a soaked core whose rim wicks outward along the threads in irregular capillary fingers,
// with a feathered edge. The hero scales them up from the guest's touch point.
import sharp from "sharp";

const S = 512;
const blobs = [
  { seed: 11, r: 150, fq: 0.022, warp: 120 },
  { seed: 29, r: 140, fq: 0.03, warp: 105 },
  { seed: 47, r: 145, fq: 0.026, warp: 115 },
];

for (const [i, b] of blobs.entries()) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
  <filter id="w" x="-30%" y="-30%" width="160%" height="160%">
    <feTurbulence type="fractalNoise" baseFrequency="${b.fq}" numOctaves="4" seed="${b.seed}" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="${b.warp}" xChannelSelector="R" yChannelSelector="G" result="d"/>
    <feGaussianBlur in="d" stdDeviation="2.2"/>
  </filter>
  <circle cx="${S / 2}" cy="${S / 2}" r="${b.r}" fill="#000" filter="url(#w)"/>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`src/assets/v2/bloom-${i + 1}.png`);
  console.log("wrote", `src/assets/v2/bloom-${i + 1}.png`);
}
