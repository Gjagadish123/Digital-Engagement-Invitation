import { getImageProps } from "next/image";
import { art } from "@/content/art";
import { blessing, couple, headline } from "@/content/invitation";
import { Icon } from "./Icon";

const alt =
  "A watercolor of a festive Telugu entrance hung with a mango-leaf toranam, marigold and jasmine; beneath the arch, Sai Girishma in a silk saree and Ravi in a kurta exchange rings.";

export function Hero() {
  // Art direction: the tall painting on phones and portrait tablets, the wide one on landscape screens.
  const common = { alt, sizes: "100vw" };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: art.heroLandscape });
  const {
    props: { srcSet: tall, ...img },
  } = getImageProps({ ...common, src: art.heroPortrait, loading: "eager", fetchPriority: "high" });

  return (
    <header id="top" tabIndex={-1} className="relative h-[100svh] min-h-[680px] overflow-hidden outline-none">
      <picture>
        <source media="(min-width: 768px) and (orientation: landscape)" srcSet={wide} />
        <source srcSet={tall} />
        <img {...img} alt={alt} className="bloom-first absolute inset-0 size-full object-cover object-[50%_40%]" />
      </picture>

      {/* lettering in the open sky of the arch, kept clear of the couple exchanging rings beneath it */}
      <div className="absolute inset-x-0 top-[20.5%] mx-auto flex flex-col items-center landscape:md:top-[23%]">
        <div className="hero-copy relative flex w-[min(64vw,30rem)] flex-col items-center text-center landscape:md:w-[min(60vw,52rem)]">
          <p lang="te" className="bloom-first-late text-[clamp(0.95rem,4vw,1.2rem)] text-wine">
            {blessing}
          </p>
          <div aria-hidden="true" className="bloom-first-late gold-rule mt-2.5 w-24" />
          <h1 className="bloom-first-late script mt-2 text-[clamp(3.1rem,14vw,6rem)] leading-[1.02] landscape:md:whitespace-nowrap landscape:md:text-[clamp(3.2rem,4.7vw,5.25rem)]">
            <span className="block landscape:md:inline">{couple.bride}</span>{" "}
            <span className="block landscape:md:inline">
              <span className="text-[0.8em] text-gold">&amp;</span> {couple.groom}
            </span>
          </h1>
          <p className="bloom-first-late caps mt-2 text-[clamp(0.72rem,3vw,0.82rem)] tracking-[0.14em] landscape:md:hidden">are getting engaged</p>
          <p className="bloom-first-late mt-1 hidden font-serif text-[clamp(1.05rem,1.5vw,1.25rem)] italic leading-snug text-ink landscape:md:block">{headline}</p>
        </div>
      </div>

      {/* on phones the headline sits beneath the couple, like a caption on the painting */}
      <p className="hero-copy bloom-first-late absolute inset-x-0 bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))+2.25rem)] mx-auto max-w-[17rem] text-balance text-center font-serif text-[clamp(1.05rem,4.3vw,1.3rem)] italic leading-snug text-ink landscape:md:hidden">
        {headline}
      </p>

      <a
        href="#reveal"
        className="link-caps absolute inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[1] mx-auto w-fit no-underline"
        aria-label="Scroll to the invitation"
      >
        <Icon name="down" className="drift size-5" />
      </a>
    </header>
  );
}
