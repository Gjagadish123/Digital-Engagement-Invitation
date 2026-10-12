import Image from "next/image";
import { art } from "@/content/art";

/** A painted sprig: mango leaves with jasmine and a marigold (1), or a jasmine strand with rose buds (2). */
export function Sprig({ variant = 1, className = "" }: { variant?: 1 | 2; className?: string }) {
  const src = variant === 1 ? art.divider1 : art.divider2;
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      sizes={variant === 1 ? "180px" : "260px"}
      className={`on-paper pointer-events-none mx-auto h-auto select-none ${variant === 1 ? "w-[180px]" : "w-[260px] [mask-image:linear-gradient(90deg,transparent,#000_18%,#000_82%,transparent)]"} ${className}`}
    />
  );
}

export function SectionTitle({ id, children, sub, sprig = 1 }: { id: string; children: React.ReactNode; sub?: string; sprig?: 1 | 2 }) {
  return (
    <div className="bloom text-center">
      <h2 id={id} className="script text-[clamp(3.1rem,13vw,4.75rem)]">
        {children}
      </h2>
      <Sprig variant={sprig} className="mt-1" />
      {sub && <p className="mx-auto mt-4 max-w-[28ch] text-balance font-serif text-[1.125rem] italic leading-snug text-ink-soft md:text-[1.375rem]">{sub}</p>}
    </div>
  );
}

/** One of the family's lines, set between sections. */
export function Interlude({ quote }: { quote: string }) {
  return (
    <figure className="bloom mx-auto max-w-[30ch] px-6 py-16 text-center md:py-24">
      <Sprig variant={2} />
      <blockquote className="mt-4 text-balance font-serif text-[clamp(1.35rem,5.6vw,1.8rem)] italic leading-[1.45] text-wine">
        <p>{quote}</p>
      </blockquote>
    </figure>
  );
}
