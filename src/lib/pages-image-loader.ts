// Static export (GitHub Pages) only. scripts/pages-images.mjs writes `<name>.w<width>.webp`
// beside every bundled image after `next build`, so each srcset width resolves to a real file.
export default function pagesImageLoader({ src, width }: { src: string; width: number }) {
  return `${src.replace(/\.\w+$/, "")}.w${width}.webp`;
}
