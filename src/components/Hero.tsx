import Image, { getImageProps } from "next/image";
import { art } from "@/content/art";
import { blessing, couple, event, headline } from "@/content/invitation";
import { photos } from "@/content/photos";
import { Icon } from "./Icon";

const alt =
  "A watercolor of a festive Telugu entrance: an ivory arch hung with a mango-leaf toranam, marigold and jasmine, banana plants at its pillars and a rangoli at its feet.";

export function Hero() {
  // Art direction: the tall painting on phones and portrait tablets, the wide one on landscape screens.
  const common = { alt, sizes: "100vw" };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: art.heroLandscape });
  const {
    props: { srcSet: tall, ...img },
  } = getImageProps({ ...common, src: art.heroPortrait, loading: "eager", fetchPriority: "high" });
  const portrait = photos["selfie-window"];

  return (
    <header id="top" tabIndex={-1} className="relative h-[100svh] min-h-[680px] overflow-hidden outline-none">
      <picture>
        <source media="(min-width: 768px) and (orientation: landscape)" srcSet={wide} />
        <source srcSet={tall} />
        <img {...img} alt={alt} className="bloom-first absolute inset-0 size-full object-cover object-[50%_40%]" />
      </picture>

      {/* lettering set in the open sky of the arch, the couple set into the garden path below */}
      <div className="absolute inset-x-0 top-[24%] mx-auto flex flex-col items-center landscape:md:top-[27%]">
        <div className="hero-copy relative flex w-[min(60vw,30rem)] flex-col items-center text-center landscape:md:w-[min(60vw,52rem)]">
        <p lang="te" className="bloom-first-late text-[clamp(0.95rem,4vw,1.2rem)] text-wine">
          {blessing}
        </p>
        <div aria-hidden="true" className="bloom-first-late gold-rule mt-3 w-24" />
        <h1 className="bloom-first-late script mt-3 text-[clamp(3.1rem,14vw,6rem)] landscape:md:whitespace-nowrap landscape:md:text-[clamp(4rem,6.4vw,6rem)]">
          <span className="block landscape:md:inline">{couple.bride}</span>{" "}
          <span className="block text-[0.72em] leading-[0.85] text-gold landscape:md:inline landscape:md:text-[0.8em]">&amp;</span>{" "}
          <span className="block landscape:md:inline">{couple.groom}</span>
        </h1>
        <p className="bloom-first-late caps mt-3 text-[clamp(0.72rem,3vw,0.82rem)] tracking-[0.14em]">are getting engaged</p>
        <p className="bloom-first-late mx-auto mt-3 max-w-[15rem] text-balance font-serif text-[clamp(1.05rem,4.3vw,1.3rem)] italic leading-snug text-ink landscape:md:max-w-none">
          {headline}
        </p>
        <p className="bloom-first-late caps mt-3 whitespace-nowrap text-[clamp(0.72rem,3vw,0.85rem)] tracking-[0.1em] text-wine">
          <time dateTime="2026-11-20T09:34+05:30">{event.dateLong.replace(", ", " · ")}</time>
        </p>
        </div>
        {/* the two of them, printed into the painted garden path */}
        <div className="bloom-first-late hero-photo relative mt-2 aspect-[5/4] w-[min(44vw,11rem)] overflow-hidden landscape:md:w-[11rem]">
          <Image src={portrait.src} alt={portrait.alt} fill placeholder="blur" sizes="200px" className="scale-[1.12] object-cover object-[55%_30%]" />
        </div>
      </div>

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
