// v2: kalamkari paintings made for this invitation with Kie.ai (prompts in scripts/prompts/v2/).
// Each "-line" image is the same cloth before dyeing, derived pixel-for-pixel by scripts/v2-art.mjs.
import tree from "@/assets/v2/tree.jpg";
import treeLine from "@/assets/v2/tree-line.jpg";
import story1 from "@/assets/v2/story-1.jpg";
import story1Line from "@/assets/v2/story-1-line.jpg";
import story2 from "@/assets/v2/story-2.jpg";
import story2Line from "@/assets/v2/story-2-line.jpg";
import story3 from "@/assets/v2/story-3.jpg";
import story3Line from "@/assets/v2/story-3-line.jpg";
import story4 from "@/assets/v2/story-4.jpg";
import story4Line from "@/assets/v2/story-4-line.jpg";
import aboutHer from "@/assets/v2/about-her.jpg";
import aboutHim from "@/assets/v2/about-him.jpg";
import seaBand from "@/assets/v2/sea-band.jpg";
import vineBand from "@/assets/v2/vine-band.jpg";

export const cloth = { tree, treeLine, aboutHer, aboutHim, seaBand, vineBand };

/** Ground dye of each painted register, matching the ground the panel itself was painted on. */
export const storyCloth = [
  {
    dyed: story1,
    line: story1Line,
    dye: "madder",
    alt: "Kalamkari painting: a seaside café terrace on the green hill at Rushikonda, the sun over the waves and two boats; Ravi in a checked shirt and Sai Girishma with her braid sit across a lotus-patterned table, cups raised, friends at the tables around them.",
  },
  {
    dyed: story2,
    line: story2Line,
    dye: "indigo",
    alt: "Kalamkari painting at night under a crescent moon: Sai Girishma on a swing and Ravi at his desk, each on the phone, a flowering tree of life between them.",
  },
  {
    dyed: story3,
    line: story3Line,
    dye: "ecru",
    alt: "Kalamkari painting: the two of them sit facing each other on a rug, hands open; two vines rise from their hands and join into one lotus, and two parrots sit beak to beak above.",
  },
  {
    dyed: story4,
    line: story4Line,
    dye: "madder",
    alt: "Kalamkari painting of the engagement under a garland of marigolds and mango leaves: Ravi and Sai Girishma exchange rings while both families hold plates of thambulam on either side.",
  },
] as const;
