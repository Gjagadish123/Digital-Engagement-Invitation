"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import cottonPaper from "@/assets/art/envelope/cotton-paper.jpg";
import silkPortrait from "@/assets/art/envelope/silk-portrait.jpg";
import silkWide from "@/assets/art/envelope/silk-wide.jpg";
import twine from "@/assets/art/envelope/twine.png";
import washBlush from "@/assets/media/wash-blush.webp";
import { art } from "@/content/art";
import { blessing, couple } from "@/content/invitation";
import { burstPetals } from "./Petals";

// crack → the seal splits; break → its halves fall and the twine slips off; open → the flap swings back;
// rise → the card slides out of the pocket; lift → the envelope drops away and the card comes forward;
// reveal → the card grows into the page (its face is the hero painting).
type Stage = "idle" | "crack" | "break" | "open" | "rise" | "lift" | "reveal" | "done";

declare global {
  interface Window {
    __envReady?: boolean;
  }
}

/** A hand-dabbed pasupu smudge with its kumkum dot, as on an invitation's corners. */
function Dab({ className }: { className: string }) {
  return <Image src={art.dab} alt="" aria-hidden="true" sizes="48px" className={`env-dab pointer-events-none absolute z-[5] h-auto w-[8%] ${className}`} />;
}

// the jagged line the wax splits along, in % of the seal
const CRACK = "52,4 47,20 55,35 46,52 54,68 48,84 51,97";
const half = (side: "l" | "r") =>
  side === "l"
    ? "polygon(0 0, 52% 0, 52% 4%, 47% 20%, 55% 35%, 46% 52%, 54% 68%, 48% 84%, 51% 97%, 51% 100%, 0 100%)"
    : "polygon(52% 0, 100% 0, 100% 100%, 51% 100%, 51% 97%, 48% 84%, 54% 68%, 46% 52%, 55% 35%, 47% 20%, 52% 4%)";

export function Envelope() {
  const [stage, setStage] = useState<Stage>("idle");
  const gate = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.__envReady = true;
    if (document.documentElement.dataset.opened) return; // opened this session, or tapped before load
    const main = document.getElementById("main");
    if (main) main.inert = true;
    return () => {
      if (main) main.inert = false;
    };
  }, []);

  // Where must the card go, and how big must it grow, for its painting to sit exactly on the hero's?
  // Both pictures are the same art cropped with object-fit: cover, so map the card's centre pixel onto the hero.
  function alignCardToHero() {
    const g = gate.current;
    const ci = card.current?.querySelector("img");
    const hero = document.getElementById("top");
    const hi = hero?.querySelector("img");
    if (!g || !ci || !hero || !hi || !ci.naturalWidth || !hi.naturalWidth) return;
    const LIFT = 1.16; // the card's scale while lifted (globals.css)
    const fit = (img: HTMLImageElement, w: number, h: number, left: number, top: number) => {
      const [px, py] = getComputedStyle(img).objectPosition.split(" ").map((v) => parseFloat(v) / 100);
      const s = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      return { w: img.naturalWidth * s, h: img.naturalHeight * s, x: left + (w - img.naturalWidth * s) * px, y: top + (h - img.naturalHeight * s) * py };
    };
    const cr = ci.getBoundingClientRect();
    const cx = cr.left + cr.width / 2;
    const cy = cr.top + cr.height / 2;
    const cw = ci.offsetWidth * LIFT;
    const ch = ci.offsetHeight * LIFT;
    const c = fit(ci, cw, ch, cx - cw / 2, cy - ch / 2);
    const hr = hero.getBoundingClientRect();
    const h = fit(hi, hr.width, hr.height, hr.left, hr.top);
    // the same point of the painting, as a fraction of it
    const fx = (cx - c.x) / c.w;
    const fy = (cy - c.y) / c.h;
    const vx = h.x + fx * h.w - cx;
    const vy = h.y + fy * h.h - cy;
    // the card sits inside the envelope, which lies rotated -1.6deg on the silk
    const t = (1.6 * Math.PI) / 180;
    g.style.setProperty("--rx", `${vx * Math.cos(t) - vy * Math.sin(t)}px`);
    g.style.setProperty("--ry", `${vx * Math.sin(t) + vy * Math.cos(t)}px`);
    g.style.setProperty("--rk", String(h.w / c.w));
  }

  function open() {
    if (stage !== "idle") return;
    const html = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const at = (ms: number, fn: () => void) => setTimeout(fn, reduce ? Math.min(ms, 120) : ms);

    window.scrollTo(0, 0);
    navigator.vibrate?.(14);
    setStage("crack");
    at(200, () => setStage("break"));
    at(650, () => setStage("open"));
    at(900, () => burstPetals(60));
    at(1500, () => setStage("rise"));
    at(2550, () => {
      html.dataset.opening = "1";
      setStage("lift");
    });
    at(3400, () => {
      alignCardToHero();
      setStage("reveal");
    });
    at(4650, () => {
      html.dataset.opened = "1";
      try {
        sessionStorage.setItem("opened", "1");
      } catch {}
      const main = document.getElementById("main");
      if (main) main.inert = false;
      document.getElementById("top")?.focus({ preventScroll: true });
      setStage("done");
    });
    at(6000, () => delete html.dataset.opening);
  }

  if (stage === "done") return null;

  // the table: maroon silk with jasmine, rose petals and turmeric rice (wide light on landscape screens)
  const {
    props: { srcSet: wide },
  } = getImageProps({ src: silkWide, alt: "", sizes: "100vw" });
  const {
    props: { srcSet: tall, ...table },
  } = getImageProps({ src: silkPortrait, alt: "", sizes: "100vw", loading: "eager", fetchPriority: "high" });
  const paper = { backgroundImage: `url(${cottonPaper.src})` };
  const {
    props: { srcSet: cardWide },
  } = getImageProps({ src: art.heroLandscape, alt: "", sizes: "(min-width: 768px) 560px, 88vw" });
  const {
    props: { srcSet: cardTall, ...cardImg },
  } = getImageProps({ src: art.heroPortrait, alt: "", sizes: "(min-width: 768px) 560px, 88vw" });

  return (
    <div
      ref={gate}
      data-stage={stage}
      role="dialog"
      aria-modal="true"
      aria-labelledby="env-names"
      className="envelope-gate fixed inset-0 z-50 overflow-hidden bg-[#3b0d16]"
    >
      <picture>
        <source media="(orientation: landscape)" srcSet={wide} />
        <source srcSet={tall} />
        <img {...table} alt="" aria-hidden="true" className="env-table absolute inset-0 size-full object-cover" />
      </picture>
      <div aria-hidden="true" className="env-vignette absolute inset-0" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
        <div className="env-stage relative aspect-[142/100] w-[min(88vw,440px)] landscape:md:w-[min(44vw,560px)]">
          {/* set down a touch askew on the silk, as if by hand */}
          <div className="env-body absolute inset-0">
            <div aria-hidden="true" className="env-shadow absolute inset-0 rounded-[3px]" />
            {/* the inside of the envelope's back */}
            <div aria-hidden="true" className="env-paper env-inside absolute inset-0 z-[1] rounded-[3px]" style={paper} />

            {/* the card: the hero painting printed with a cotton-paper border */}
            <div ref={card} aria-hidden="true" className="env-card absolute inset-x-[5%] top-[5%] z-[2] h-[88%]">
              <div className="env-paper absolute inset-0 rounded-[2px] p-[3.2%] shadow-[0_1px_2px_rgb(60_30_20/0.25)]" style={paper}>
                <div className="relative size-full overflow-hidden rounded-[1px]">
                  <picture>
                    <source media="(min-width: 768px) and (orientation: landscape)" srcSet={cardWide} />
                    <source srcSet={cardTall} />
                    <img {...cardImg} alt="" className="absolute inset-0 size-full object-cover object-[50%_66%] landscape:md:object-[50%_60%]" />
                  </picture>
                </div>
              </div>
            </div>

            {/* the pocket: two side folds, then the bottom fold over them */}
            <div aria-hidden="true" className="env-pocket absolute inset-0 z-[3]">
              <div className="env-paper env-fold env-fold-l absolute inset-0" style={paper} />
              <div className="env-paper env-fold env-fold-r absolute inset-0" style={paper} />
              <div className="env-paper env-fold env-fold-b absolute inset-0" style={paper} />
              <svg viewBox="0 0 142 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
                <path d="M0.4 0.4 L66.7 52 M141.6 0.4 L75.3 52" fill="none" stroke="rgb(90 60 40 / 0.22)" strokeWidth="0.45" />
                <path d="M0.4 99.6 L71 46 L141.6 99.6" fill="none" stroke="rgb(90 60 40 / 0.3)" strokeWidth="0.5" />
                <path d="M0.4 100.4 L71 47 L141.6 100.4" fill="none" stroke="rgb(255 255 255 / 0.55)" strokeWidth="0.4" />
              </svg>
            </div>
            {/* letterpressed into the bottom fold */}
            <div className="env-press absolute inset-x-[10%] bottom-[7%] z-[3] text-center">
              <p id="env-names" className="script text-[clamp(1.55rem,7vw,2.3rem)] leading-none landscape:md:text-[clamp(1.7rem,2.6vw,2.6rem)]">
                {couple.bride} <span className="env-foil">&amp;</span> {couple.groom}
              </p>
            </div>

            {/* the flap's shadow on the pocket, gone as soon as it lifts */}
            <svg aria-hidden="true" viewBox="0 0 142 62" preserveAspectRatio="none" className="env-flap-shadow absolute inset-x-0 top-0 z-[3] h-[64%] w-full">
              <defs>
                <filter id="env-soft" x="-10%" y="-10%" width="120%" height="130%">
                  <feGaussianBlur stdDeviation="1.6" />
                </filter>
              </defs>
              <path d="M0 0 L142 0 L75 60.5 Q71 63.5 67 60.5 Z" fill="rgb(50 25 15 / 0.32)" filter="url(#env-soft)" transform="translate(0 1.6)" />
            </svg>

            {/* the flap: cotton paper outside, a blush liner inside */}
            <div aria-hidden="true" className="env-flap-wrap absolute inset-x-0 top-0 z-[4] h-[62%]">
              <div className="env-face env-flap-front env-paper" style={paper}>
                <div className="env-press absolute inset-x-0 top-[13%] text-center">
                  <p lang="te" className="text-[clamp(0.72rem,3.1vw,0.95rem)]">
                    {blessing}
                  </p>
                  <p className="caps mt-[4%] text-[clamp(0.58rem,2.4vw,0.72rem)] tracking-[0.32em]">Engagement</p>
                </div>
                <svg viewBox="0 0 142 62" preserveAspectRatio="none" className="absolute inset-0 size-full">
                  <path d="M0.3 0.3 L67 59.6 Q71 62.6 75 59.6 L141.7 0.3" fill="none" stroke="rgb(90 60 40 / 0.35)" strokeWidth="0.5" />
                  <path d="M1.2 0.3 L67.4 58.8 Q71 61.6 74.6 58.8 L140.8 0.3" fill="none" stroke="rgb(255 255 255 / 0.6)" strokeWidth="0.4" />
                </svg>
              </div>
              <div className="env-face env-face-back env-liner">
                <div className="absolute inset-0 bg-[#f1d2cb] bg-cover bg-center" style={{ backgroundImage: `url(${washBlush.src})` }} />
                <Image src={art.divider2} alt="" width={260} height={40} className="absolute left-1/2 top-[6%] w-[56%] -translate-x-1/2" />
                <Image src={art.divider1} alt="" width={120} height={30} className="absolute left-1/2 top-[36%] w-[24%] -translate-x-1/2" />
              </div>
            </div>

            {/* turmeric twine, once around */}
            <div aria-hidden="true" className="env-twine absolute inset-x-0 top-[60%] z-[5] h-[3.4%] -translate-y-1/2">
              <Image src={twine} alt="" fill sizes="(min-width: 768px) 560px, 88vw" className="object-fill" />
            </div>

            <Dab className="left-[2.2%] top-[3%] rotate-12" />
            <Dab className="right-[2.2%] top-[3%] rotate-[100deg]" />
            <Dab className="bottom-[3.5%] left-[2.2%] -rotate-[70deg]" />
            <Dab className="bottom-[3.5%] right-[2.2%] rotate-[190deg]" />

            {/* the wax seal is the button; it cracks in two */}
            <button
              type="button"
              onClick={open}
              aria-label="Break the seal to open the invitation"
              className="env-seal absolute left-1/2 top-[60%] z-[6] aspect-square w-[19%] rounded-full outline-offset-4"
            >
              {(["l", "r"] as const).map((side) => (
                <span key={side} className={`env-seal-half env-seal-${side} absolute inset-0`} style={{ clipPath: half(side) }}>
                  <Image src={art.seal} alt="" aria-hidden="true" fill sizes="96px" preload fetchPriority="high" className="object-contain" />
                </span>
              ))}
              <span
                aria-hidden="true"
                className="env-glint absolute inset-0"
                style={{ WebkitMaskImage: `url(${art.seal.src})`, maskImage: `url(${art.seal.src})` }}
              />
              <svg aria-hidden="true" viewBox="0 0 100 100" className="env-crack absolute inset-0 size-full">
                <polyline points={CRACK} fill="none" stroke="rgb(40 6 14 / 0.85)" strokeWidth="2.2" strokeLinejoin="round" />
                <polyline points={CRACK} fill="none" stroke="rgb(255 210 210 / 0.35)" strokeWidth="0.8" transform="translate(1.2 0)" />
              </svg>
            </button>
          </div>
        </div>

        <p className="env-hint caps relative mt-10 text-[0.8125rem] tracking-[0.24em] text-[#f6e7cf] landscape:md:mt-12">Tap the seal to open</p>
      </div>
    </div>
  );
}
