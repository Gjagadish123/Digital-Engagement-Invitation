// Watercolor illustrations and materials painted for this invitation with Kie.ai (see scripts/prompts/).
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

// Each story scene is fully illustrated: the couple are painted into it (no photographs), per the family's request.
export const storyScenes = [
  { src: story1, alt: "A watercolor illustration: the two of them talking over coffee at a café table on the green hill at Rushikonda, the turquoise sea behind them." },
  { src: story2, alt: "A watercolor illustration of a quiet bay at dusk under a crescent moon: she sits on the sea wall and he sits further along the shore, each on the phone, a trail of tiny stars arcing between them." },
  { src: story3, alt: "A watercolor illustration: the two of them laughing together on a garden bench beneath an arch of roses on a bamboo path." },
  { src: story4, alt: "A watercolor illustration of their engagement under a mandapam hung with marigolds and mango leaves: she in a silk saree and he in a kurta, exchanging rings." },
] as const;
