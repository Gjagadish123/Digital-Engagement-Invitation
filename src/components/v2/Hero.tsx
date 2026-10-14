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
        <p data-draw="blessing" lang="te" className={`te-d text-[1.125rem] ${dyed ? "text-myro" : ""}`}>
          {blessing}
        </p>
        <div data-draw="seam" className="seam mx-auto mt-3 w-44 lg:mx-0" style={dyed ? undefined : ({ "--seam-dot": "var(--ink)" } as React.CSSProperties)} />
        <Title className="mt-6">
          <span data-draw="title" lang="te" className="te-d block text-[clamp(3.5rem,16.5vw,6rem)] leading-[1.25]">
            నిశ్చితార్థం
          </span>
          <span data-draw="name1" className="mt-1 block font-serif text-[clamp(2.15rem,9.6vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            Sai Girishma
          </span>
          <span data-draw="name2" className="block font-serif text-[clamp(2.15rem,9.6vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            <span className={dyed ? "text-myro" : ""}>&amp;</span> Ravi
          </span>
        </Title>
        <p data-draw="headline" className="mx-auto mt-5 max-w-[23rem] text-[1.1875rem] leading-snug lg:mx-0">
          {headlineV2}
        </p>
        <p data-draw="date" className={`caps mt-6 leading-[1.9] ${dyed ? "text-myro" : ""}`}>
          <time dateTime="2026-11-20T09:34+05:30">
            Friday · 20 November 2026
            <br />
            Muhurtham 09:34 AM
          </time>
        </p>
        <div data-draw="music" className="mt-7">
          <MusicInline />
        </div>
      </div>
      <div data-draw="tree" className="mx-auto w-full max-w-[min(30rem,82svh*0.8)] lg:mx-0 lg:max-w-none">
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

// The bamboo kalam that draws the cloth: a felt wad bound with thread at its tip. Its writing point is (8, 112).
const PEN = 64;
const TIP = { x: (8 / 120) * PEN, y: (112 / 120) * PEN };
function Kalam({ penRef }: { penRef: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={penRef}
      viewBox="0 0 120 120"
      width={PEN}
      height={PEN}
      aria-hidden="true"
      className="kalam pointer-events-none absolute left-0 top-0 z-[5] drop-shadow-[0_6px_6px_rgb(0_0_0/0.25)]"
      style={{ transformOrigin: `${TIP.x}px ${TIP.y}px`, transform: "translate(-200px, -200px)" }}
    >
      <path d="M17.6 96 106.6 7a4.5 4.5 0 0 1 6.4 6.4L24 102.4z" fill="var(--myro)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M50.5 71.5l-4.6-4.6M82 40l-4.6-4.6" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M95 18.5 99.5 23" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
      <path d="M10.5 101c2-5.5 6.5-9.5 11.5-8 4.6 1.4 5 6 2.4 9.6-2.9 4-8.2 7.6-12.6 6-1.6-.6-2.2-3.8-1.3-7.6z" fill="var(--ecru)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M15.5 95.5l8 8M12.8 99l7.6 7.6" stroke="var(--madder)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 112c-.6-3 .6-6.6 3.4-8.6l3.8 3.8c-2 2.8-5.6 4-7.2 4.8z" fill="var(--ink)" />
    </svg>
  );
}

// the opening: once a visit, the kalam writes the cloth before the guest dyes it
const STEPS = [
  { key: "blessing", kind: "line", ms: 680 },
  { key: "seam", kind: "line", ms: 320 },
  { key: "title", kind: "line", ms: 1000 },
  { key: "name1", kind: "line", ms: 580 },
  { key: "name2", kind: "line", ms: 380 },
  // the rest settles in together while the tree of life blossoms out from its canopy
  { key: "headline", kind: "fade", ms: 520 },
  { key: "date", kind: "fade", ms: 420 },
  { key: "tree", kind: "grow", ms: 1500 },
  { key: "music", kind: "fade", ms: 380 },
] as const;
const WRITE = "cubic-bezier(0.45, 0.05, 0.55, 0.95)";

const noop = () => () => {};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const pen = useRef<SVGSVGElement>(null);
  const skip = useRef<() => void>(() => {});
  const [touched, setState] = useState<State>("undyed");
  // the head script marks a return visit (or reduced motion) as already dyed
  const preDyed = useSyncExternalStore(noop, () => Boolean(document.documentElement.dataset.dyed), () => false);
  const state: State = preDyed && touched === "undyed" ? "dyed" : touched;
  const drawing = () => Boolean(document.documentElement.dataset.intro);

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
    const html = document.documentElement;
    const hero = ref.current;
    const kalam = pen.current;
    if (!html.dataset.intro || !hero || !kalam) return;
    const face = hero.querySelector<HTMLElement>(".hero-undyed")!;
    const running: Animation[] = [];
    let stopped = false;
    const finish = () => {
      if (stopped) return;
      stopped = true;
      running.forEach((a) => a.cancel());
      delete html.dataset.intro;
    };
    skip.current = finish;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const play = (a: Animation) => {
      running.push(a);
      return a.finished.catch(() => {});
    };
    const at = (p: { x: number; y: number }, lifted = false) =>
      `translate(${p.x - TIP.x}px, ${p.y - TIP.y - (lifted ? 16 : 0)}px) rotate(${lifted ? -8 : 0}deg)`;

    (async () => {
      // measure with the real letterforms, and let the tree's line drawing arrive first
      await Promise.race([document.fonts.ready, wait(1500)]);
      await Promise.race([face.querySelector("img")?.decode().catch(() => {}), wait(2500)]);
      const hr = hero.getBoundingClientRect();
      let penAt = { x: hr.width + 40, y: hr.height * 0.12 };
      for (const step of STEPS) {
        if (stopped) return;
        const el = face.querySelector<HTMLElement>(`[data-draw="${step.key}"]`);
        if (!el) continue;
        if (step.kind === "line") {
          const er = el.getBoundingClientRect();
          const range = document.createRange();
          range.selectNodeContents(el);
          const tr = range.getBoundingClientRect().width ? range.getBoundingClientRect() : er;
          const from = ((tr.left - er.left) / er.width) * 100 - 6;
          const to = ((tr.right - er.left) / er.width) * 100 + 6;
          const x = (pct: number) => er.left - hr.left + (pct / 100) * er.width;
          const y = tr.top - hr.top + tr.height * 0.6;
          await play(kalam.animate([{ transform: at(penAt, true) }, { transform: at({ x: x(from), y }, true) }], { duration: 230, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }));
          await Promise.all([
            play(el.animate([{ "--wipe": `${from}%` }, { "--wipe": `${to}%` }], { duration: step.ms, easing: WRITE, fill: "forwards" })),
            play(kalam.animate([{ transform: at({ x: x(from), y }) }, { transform: at({ x: x(to), y }) }], { duration: step.ms, easing: WRITE, fill: "forwards" })),
          ]);
          penAt = { x: x(to), y };
        } else if (step.kind === "fade") {
          void play(el.animate([{ opacity: 0, filter: "blur(3px)" }, { opacity: 1, filter: "blur(0px)" }], { duration: step.ms, easing: "ease-out", fill: "forwards" }));
          await wait(160);
        } else {
          // the kalam lifts away and the tree of life blossoms out from the part of it on screen
          const pr = el.getBoundingClientRect();
          const seen = (Math.max(pr.top, 0) + Math.min(pr.bottom, innerHeight)) / 2 - pr.top;
          el.style.setProperty("--gy", `${Math.min(90, Math.max(10, (seen / pr.height) * 100))}%`);
          void play(kalam.animate([{ transform: at(penAt), opacity: 1 }, { transform: at({ x: hr.width + 60, y: penAt.y - 90 }, true), opacity: 0 }], { duration: 650, easing: "ease-in", fill: "forwards" }));
          await play(el.animate([{ "--grow": "0%" }, { "--grow": "340%" }], { duration: step.ms, easing: "cubic-bezier(0.5, 0.1, 0.35, 1)", fill: "forwards" }));
        }
      }
      await wait(150);
      finish();
    })();
    return finish;
  }, []);

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
    const onScroll = () => {
      if (scrollY <= 40) return;
      skip.current();
      dye();
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  });

  return (
    <section
      ref={ref}
      data-state={state}
      // while the kalam is still drawing, a touch finishes the drawing; the next touch dyes
      onClick={(e) => (drawing() ? skip.current() : dye(e.clientX, e.clientY))}
      className="hero relative isolate overflow-hidden"
    >
      <div className="hero-undyed cloth dye-ecru absolute inset-0" aria-hidden="true" inert>
        <Face dyed={false} />
      </div>
      <div className="hero-dyed cloth dye-madder relative">
        <Face dyed />
      </div>
      <Kalam penRef={pen} />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (drawing()) skip.current();
          else dye();
        }}
        className="dye-cue cloth dye-ecru fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 pb-[max(1.4rem,env(safe-area-inset-bottom))] pt-12 [mask-image:linear-gradient(to_top,#000_62%,transparent)] lg:inset-x-auto lg:left-0 lg:w-[calc(100%-min(50vw,80svh))]"
      >
        <span className="cue-drawing caps max-w-[19rem] text-balance text-center text-[0.875rem] tracking-[0.2em] text-ink">The kalam is drawing your invitation</span>
        <span className="cue-touch caps text-[0.875rem] tracking-[0.2em] text-ink">Touch the cloth to dye it</span>
        <span aria-hidden="true" className="seam w-40" style={{ "--seam-dot": "var(--madder)" } as React.CSSProperties} />
      </button>
    </section>
  );
}
