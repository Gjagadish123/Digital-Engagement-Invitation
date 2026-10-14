"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { blessing, headlineV2 } from "@/content/invitation";
import { cloth } from "@/content/v2-art";
import { MusicInline } from "./Music";

type State = "undyed" | "dyeing" | "dyed";
// longest dye bloom (3.2s + 0.45s delay in v2.css) plus a breath
const DYE_MS = 3900;

/** One face of the cloth. The undyed twin is drawn in kalam black on raw cotton; the dyed one is the real content. */
function Face({ dyed }: { dyed: boolean }) {
  const Title = dyed ? "h1" : "p";
  return (
    <div className="grid min-h-[100svh] content-center items-center gap-7 px-4 pb-32 pt-[max(2.25rem,env(safe-area-inset-top))] lg:grid-cols-[minmax(0,1fr)_min(50vw,80svh)] lg:gap-12 lg:p-0">
      <div className="text-center lg:py-16 lg:pl-[max(2.5rem,calc(50vw-34rem))] lg:pr-4 lg:text-left">
        <p lang="te" className={`te-d text-[1.125rem] ${dyed ? "text-myro" : ""}`}>
          {blessing}
        </p>
        <div className="seam mx-auto mt-3 w-44 lg:mx-0" style={dyed ? undefined : ({ "--seam-dot": "var(--ink)" } as React.CSSProperties)} />
        <Title className="mt-6">
          <span lang="te" className="te-d block text-[clamp(3.5rem,16.5vw,6rem)] leading-[1.25]">
            నిశ్చితార్థం
          </span>
          <span className="mt-1 block font-serif text-[clamp(2.15rem,9.6vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            Sai Girishma
            <span className="block">
              <span className={dyed ? "text-myro" : ""}>&amp;</span> Ravi
            </span>
          </span>
        </Title>
        <p className="mx-auto mt-5 max-w-[23rem] text-[1.1875rem] leading-snug lg:mx-0">{headlineV2}</p>
        <p className={`caps mt-6 leading-[1.9] ${dyed ? "text-myro" : ""}`}>
          <time dateTime="2026-11-20T09:34+05:30">
            Friday · 20 November 2026
            <br />
            Muhurtham 09:34 AM
          </time>
        </p>
        <MusicInline className="mt-7" />
      </div>
      <div className="mx-auto w-full max-w-[min(30rem,82svh*0.8)] lg:mx-0 lg:max-w-none">
        <Image
          src={dyed ? cloth.tree : cloth.treeLine}
          alt={dyed ? "Kalamkari painting: a flowering tree of life with two peacocks facing each other beneath it, and two plates of thambulam holding a pair of rings." : ""}
          sizes="(min-width: 1024px) 50vw, 92vw"
          preload
          placeholder="blur"
          className="h-auto w-full shadow-[0_18px_40px_-18px_rgb(0_0_0/0.6)] lg:shadow-none"
        />
      </div>
    </div>
  );
}

const noop = () => () => {};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [touched, setState] = useState<State>("undyed");
  // the head script marks a return visit (or reduced motion) as already dyed
  const preDyed = useSyncExternalStore(noop, () => Boolean(document.documentElement.dataset.dyed), () => false);
  const state: State = preDyed && touched === "undyed" ? "dyed" : touched;

  function dye(x?: number, y?: number) {
    const el = ref.current;
    if (!el || state !== "undyed") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${x === undefined ? r.width / 2 : x - r.left}px`);
    // without a touch point (keyboard, scroll) the dye starts 40% down the visible screen
    el.style.setProperty("--y", `${(y ?? innerHeight * 0.4) - r.top}px`);
    navigator.vibrate?.(12);
    setState("dyeing");
  }

  useEffect(() => {
    if (state !== "dyeing") return;
    const t = setTimeout(() => {
      setState("dyed");
      try {
        sessionStorage.setItem("v2-dyed", "1");
      } catch {}
    }, DYE_MS);
    return () => clearTimeout(t);
  }, [state]);

  // a guest who scrolls without touching still sees the cloth take its colour
  useEffect(() => {
    if (state !== "undyed") return;
    const onScroll = () => scrollY > 40 && dye();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  });

  return (
    <section
      ref={ref}
      data-state={state}
      onClick={(e) => dye(e.clientX, e.clientY)}
      className="hero relative isolate overflow-hidden"
    >
      <div className="hero-undyed cloth dye-ecru absolute inset-0" aria-hidden="true" inert>
        <Face dyed={false} />
      </div>
      <div className="hero-dyed cloth dye-madder relative">
        <Face dyed />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          dye();
        }}
        className="dye-cue cloth dye-ecru fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 pb-[max(1.4rem,env(safe-area-inset-bottom))] pt-12 [mask-image:linear-gradient(to_top,#000_62%,transparent)] lg:inset-x-auto lg:left-0 lg:w-[calc(100%-min(50vw,80svh))]"
      >
        <span className="caps text-[0.875rem] tracking-[0.2em] text-ink">Touch the cloth to dye it</span>
        <span aria-hidden="true" className="seam w-40" style={{ "--seam-dot": "var(--madder)" } as React.CSSProperties} />
      </button>
    </section>
  );
}
