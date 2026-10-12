import type { StaticImageData } from "next/image";
import shore from "@/assets/photos/shore.jpg";
import ringOfLight from "@/assets/photos/ring-of-light.jpg";
import lanternSteps from "@/assets/photos/lantern-steps.jpg";
import palmGarden from "@/assets/photos/palm-garden.jpg";
import selfieWindow from "@/assets/photos/selfie-window.jpg";
import glassBridge from "@/assets/photos/glass-bridge.jpg";
import eveningWalk from "@/assets/photos/evening-walk.jpg";
import yellowDupatta from "@/assets/photos/yellow-dupatta.jpg";
import beachNight from "@/assets/photos/beach-night.jpg";

export type Photo = { src: StaticImageData; alt: string };

// Alt text describes what is visible; places are named only where the brief names them.
export const photos = {
  shore: {
    src: shore,
    alt: "Sai Girishma and Ravi in silhouette on the beach, laughing as they turn to each other beneath a wide cloudy sky at the sea’s edge.",
  },
  "ring-of-light": {
    src: ringOfLight,
    alt: "The two of them sitting together inside a glowing ring of light, framed by a great fan of bamboo against the night.",
  },
  "lantern-steps": {
    src: lanternSteps,
    alt: "Under a woven lantern on a garden path at night, Ravi and Sai Girishma hold hands and smile at each other by a wooden railing.",
  },
  "palm-garden": {
    src: palmGarden,
    alt: "Ravi in a checked shirt with his arm around Sai Girishma in a cream top, among palms and warm evening lights.",
  },
  "selfie-window": {
    src: selfieWindow,
    alt: "A soft, sunlit selfie: Sai Girishma smiling in front, Ravi in a cap and glasses grinning beside her.",
  },
  "glass-bridge": {
    src: glassBridge,
    alt: "Standing together on a glass skywalk at night, its floor glowing in rainbow light, the valley lights far below.",
  },
  "evening-walk": {
    src: eveningWalk,
    alt: "Ravi in a white hoodie and Sai Girishma in a striped dress, smiling side by side under tall trees on an evening street.",
  },
  "yellow-dupatta": {
    src: yellowDupatta,
    alt: "A close selfie at a restaurant table: Sai Girishma in a pale yellow dupatta and jhumkas, Ravi in a striped shirt.",
  },
  "beach-night": {
    src: beachNight,
    alt: "A night selfie by the sea: Ravi in a cap and white shirt, Sai Girishma in pink, the shoreline lights behind them.",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// All nine supplied photos (the brief asks for 8–12); add more here as the family shares them.
export const gallery: PhotoKey[] = [
  "shore",
  "evening-walk",
  "glass-bridge",
  "yellow-dupatta",
  "palm-garden",
  "beach-night",
  "lantern-steps",
  "selfie-window",
  "ring-of-light",
];
