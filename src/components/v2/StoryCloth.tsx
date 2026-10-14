import Image from "next/image";
import { photos } from "@/content/photos";
import { quotes, story } from "@/content/invitation";
import { storyCloth } from "@/content/v2-art";

/** The four chapters as painted registers of one cloth; each panel dyes itself as it comes into view. */
export function StoryCloth() {
  return (
    <section id="story" aria-labelledby="story-h">
      <header className="cloth dye-kasimi px-4 pb-14 pt-24 text-center md:pt-32">
        <h2 id="story-h">
          <span lang="te" className="te-d block text-[clamp(3.2rem,14vw,5.5rem)] leading-[1.3] text-myro">
            మా కథ
          </span>
          <span className="mt-1 block font-serif text-[clamp(1.6rem,6.6vw,2.2rem)] font-bold">Our Story</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[24ch] text-balance text-[clamp(1.25rem,5vw,1.6rem)] leading-snug text-myro">{quotes.journey}</p>
      </header>

      {story.map((ch, i) => {
        const art = storyCloth[i];
        const photo = photos[ch.photo];
        const onEcru = art.dye === "ecru";
        return (
          <article key={ch.title} aria-labelledby={`chapter-${i}`} className={`cloth dye-${art.dye}`}>
            <div className="seam" style={onEcru ? ({ "--seam-dot": "var(--madder)" } as React.CSSProperties) : undefined} />
            <div className="mx-auto max-w-[80rem] px-4 py-14 md:px-8 md:py-20">
            <div className="kframe grid items-center gap-9 [--kf:0px] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 md:p-8 md:[--kf:30px]">
              <figure className={`panel shadow-[0_18px_40px_-20px_rgb(0_0_0/0.65)] ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={art.line} alt="" aria-hidden="true" sizes="(min-width: 768px) 560px, 92vw" className="h-auto w-full" />
                <Image src={art.dyed} alt={art.alt} sizes="(min-width: 768px) 560px, 92vw" className="panel-dyed h-auto w-full" />
              </figure>

              <div className={`cartouche ${i % 2 ? "md:order-1" : ""}`}>
                <h3 id={`chapter-${i}`} className={`font-serif text-[clamp(2.1rem,8.6vw,3.1rem)] font-bold leading-[1.08] ${onEcru ? "text-madder" : ""}`}>
                  {ch.title}
                </h3>
                {"caption" in ch && <p className={`caps mt-3 ${onEcru ? "text-madder" : "text-myro"}`}>{ch.caption}</p>}
                <p className="mt-5 max-w-[34ch] text-[1.1875rem] leading-relaxed">{ch.text}</p>
                <figure className="kframe mt-9 w-[min(80%,19rem)] -rotate-1 [--kf:18px]">
                  <Image src={photo.src} alt={photo.alt} placeholder="blur" sizes="304px" className="aspect-[4/5] w-full object-cover" />
                </figure>
              </div>
            </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
