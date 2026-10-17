"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { storyScenes } from "@/content/art";
import { quotes, story } from "@/content/invitation";
import { Icon } from "./Icon";
import { SectionTitle } from "./Ornament";

export function Story() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(story.length - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <section id="story" aria-labelledby="story-h" className="wash py-20 [--wx1:0%] [--wy1:20%] [--wx2:100%] [--wy2:90%] md:py-28">
      <div className="px-6">
        <SectionTitle id="story-h" sub={quotes.journey} sprig={2}>
          Our Story
        </SectionTitle>
      </div>

      <div role="region" aria-roledescription="carousel" aria-label="Our story in four chapters" className="relative mx-auto mt-10 max-w-[64rem]">
        <div
          ref={track}
          onScroll={(e) => setIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {story.map((ch, i) => {
            const scene = storyScenes[i];
            const caption = "caption" in ch ? ch.caption : undefined;
            return (
              <article
                key={ch.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`Chapter ${ch.chapter} of Four: ${ch.title}`}
                className="w-full shrink-0 snap-center px-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-14 md:px-12"
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[26rem]">
                  <Image src={scene.src} alt={scene.alt} fill sizes="(min-width: 768px) 416px, 88vw" className="feather on-paper object-cover" />
                </div>

                <div className="mx-auto mt-8 max-w-[26rem] text-center md:mt-0 md:text-left">
                  <h3 className="script text-[clamp(2.5rem,11vw,3.6rem)]">{ch.title}</h3>
                  {caption && <p className="caps mt-2 text-[0.75rem] text-ink-soft">{caption}</p>}
                  <p className="mt-4 text-[1.125rem] leading-[1.8] text-ink md:text-[1.25rem]">{ch.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous chapter" className="btn btn-line size-12 px-0">
            <Icon name="left" />
          </button>
          <div className="flex">
            {story.map((ch, i) => (
              <button
                key={ch.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to chapter ${ch.chapter}`}
                aria-current={i === index ? "true" : undefined}
                className="grid size-11 place-items-center"
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-wine" : "w-2 bg-wine/40"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => go(index + 1)} disabled={index === story.length - 1} aria-label="Next chapter" className="btn btn-line size-12 px-0">
            <Icon name="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
