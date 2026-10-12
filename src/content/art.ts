// Watercolor illustrations and materials painted for this invitation with Kie.ai (see scripts/prompts/).
// Each story scene leaves a pale oval where a real photograph is set in; `oval` is that box in % of the painting.
import heroPortrait from "@/assets/art/hero-portrait.jpg";
import heroLandscape from "@/assets/art/hero-landscape.jpg";
import florals from "@/assets/art/florals.png";
import seal from "@/assets/art/seal.png";
import thambulam from "@/assets/art/thambulam.png";
import thread from "@/assets/art/thread.png";
import dab from "@/assets/art/dab.png";
import goldLeaf from "@/assets/art/gold-leaf.jpg";
import divider1 from "@/assets/art/divider-1.png";
import divider2 from "@/assets/art/divider-2.png";
import story1 from "@/assets/art/story-1.jpg";
import story2 from "@/assets/art/story-2.jpg";
import story3 from "@/assets/art/story-3.jpg";
import story4 from "@/assets/art/story-4.jpg";

export const art = { heroPortrait, heroLandscape, florals, seal, thambulam, thread, dab, goldLeaf, divider1, divider2 };
// Painted washes and rag paper live in src/assets/media/ so CSS can lay them under sections.

export const storyScenes = [
  { src: story1, oval: { left: 24, top: 22, width: 50, height: 44 }, alt: "A watercolor of green hills above a turquoise sea, banana plants and a garland of mango leaves." },
  { src: story2, oval: { left: 21, top: 13, width: 57, height: 44 }, alt: "A watercolor of a quiet bay at dusk with palms and a crescent moon." },
  { src: story3, oval: { left: 20, top: 14, width: 56, height: 50 }, alt: "A watercolor of a bamboo garden path under an arch of roses." },
  { src: story4, oval: { left: 24, top: 24, width: 48, height: 49 }, alt: "A watercolor of a decorated mandapam hung with marigold garlands and mango leaves." },
] as const;
