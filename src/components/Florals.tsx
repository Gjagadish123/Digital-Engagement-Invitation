import Image from "next/image";
import { art } from "@/content/art";

const flip = {
  tl: "left-0 top-0",
  tr: "right-0 top-0 -scale-x-100",
  bl: "left-0 bottom-0 -scale-y-100",
  br: "right-0 bottom-0 -scale-100",
} as const;

/** Hand-painted jasmine, marigold, rose and mango-leaf spray laid onto the paper at a corner. */
export function Florals({
  corner,
  className = "w-[46%] max-w-[300px]",
  sizes = "(min-width: 768px) 300px, 46vw",
  eager = false,
}: {
  corner: keyof typeof flip;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={art.florals}
      alt=""
      aria-hidden="true"
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`on-paper pointer-events-none absolute h-auto select-none ${flip[corner]} ${className}`}
    />
  );
}
