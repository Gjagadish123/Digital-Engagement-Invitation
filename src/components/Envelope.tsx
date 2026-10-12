"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import washBlush from "@/assets/media/wash-blush.webp";
import { art } from "@/content/art";
import { blessing, couple } from "@/content/invitation";
import { Florals } from "./Florals";
import { burstPetals } from "./Petals";

type Stage = "idle" | "open" | "rise" | "reveal" | "done";

declare global {
  interface Window {
    __envReady?: boolean;
  }
}

/** A hand-dabbed pasupu smudge with its kumkum dot, as on an invitation's corners. */
function Dab({ className }: { className: string }) {
  return (
    <Image src={art.dab} alt="" aria-hidden="true" sizes="64px" className={`pointer-events-none absolute z-[5] h-auto w-[9%] opacity-90 ${className}`} />
  );
}

/** Ink edge drawn over painted paper: slightly irregular, like a hand-ruled fold. */
const ink = "rgb(120 80 70 / 0.35)";

export function Envelope() {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    window.__envReady = true;
    if (document.documentElement.dataset.opened) return; // opened this session, or tapped before load
    const main = document.getElementById("main");
    if (main) main.inert = true;
    return () => {
      if (main) main.inert = false;
    };
  }, []);

  function open() {
    if (stage !== "idle") return;
    const html = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const at = (ms: number, fn: () => void) => setTimeout(fn, reduce ? Math.min(ms, 120) : ms);

    window.scrollTo(0, 0);
    setStage("open");
    burstPetals(70);
    at(650, () => setStage("rise"));
    at(2000, () => {
      html.dataset.opening = "1";
      setStage("reveal");
    });
    at(2950, () => {
      html.dataset.opened = "1";
      try {
        sessionStorage.setItem("opened", "1");
      } catch {}
      const main = document.getElementById("main");
      if (main) main.inert = false;
      document.getElementById("top")?.focus({ preventScroll: true });
      setStage("done");
    });
    at(4800, () => delete html.dataset.opening);
  }

  if (stage === "done") return null;

  return (
    <div
      data-stage={stage}
      role="dialog"
      aria-modal="true"
      aria-labelledby="env-names"
      className="envelope-gate wash fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-paper px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] text-center [--wash-inset:0] [--wx1:-10%] [--wx2:110%] [--wy1:0%] [--wy2:100%]"
    >
      <Florals corner="tl" eager sizes="(min-width: 768px) 340px, 52vw" className="w-[52%] max-w-[340px] -translate-x-[8%] -translate-y-[6%]" />
      <Florals corner="br" eager sizes="(min-width: 768px) 340px, 52vw" className="w-[52%] max-w-[340px] translate-x-[8%] translate-y-[6%]" />

      <div className="env-hint relative transition-opacity duration-500">
        <p lang="te" className="text-[1rem] text-wine/90">
          {blessing}
        </p>
        <p id="env-names" className="script mt-3 text-[clamp(3.3rem,15vw,4.8rem)]">
          {couple.bride}
          <span className="block">
            <span className="text-gold">&amp;</span> {couple.groom}
          </span>
        </p>
        <p className="caps mt-3">Engagement · 20 · 11 · 2026</p>
      </div>

      {/* the envelope */}
      <div className="envelope relative mt-[5vh] aspect-[145/100] w-[min(84vw,380px)]">
        {/* soft shadow under the envelope (a filter here would flatten the 3D flap) */}
        <div aria-hidden="true" className="absolute inset-x-[4%] -bottom-[6%] top-[30%] rounded-[50%] bg-[rgb(107_29_46/0.22)] blur-2xl" />

        {/* inside back */}
        <div className="env-paper absolute inset-0 rounded-[4px] brightness-[0.93]" />

        {/* the card that rises out */}
        <div className="env-card env-paper absolute inset-x-[6%] top-[6%] z-[2] h-[88%] rounded-[3px] shadow-[0_2px_8px_rgb(107_29_46/0.15)]">
          <div className="absolute inset-[6px] rounded-[2px] border border-gold/60" />
          <p className="script pt-[8%] text-[clamp(1.9rem,8vw,2.4rem)]">
            S <span className="text-gold">&amp;</span> R
          </p>
          <div className="gold-rule mx-auto mt-1 w-1/3" />
          <p className="caps mt-2 text-[0.75rem]">With love, you are invited</p>
        </div>

        {/* front pocket: painted paper cut into the three folds, hand-inked edges */}
        <div className="absolute inset-0 z-[3]">
          <div className="env-paper absolute inset-0 [clip-path:polygon(0_0,50%_56%,0_100%)]" />
          <div className="env-paper absolute inset-0 brightness-[0.97] [clip-path:polygon(100%_0,50%_56%,100%_100%)]" />
          <div className="env-paper absolute inset-0 brightness-[1.02] [clip-path:polygon(0_100%,50%_49%,100%_100%)]" />
          <svg viewBox="0 0 145 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
            <path d="M0.5 99.5 C 20 86, 50 62, 72.5 49 C 95 62, 125 86, 144.5 99.5" fill="none" stroke={ink} strokeWidth="0.5" />
            <path d="M0.5 0.5 C 22 18, 52 42, 72.5 56 M144.5 0.5 C 123 18, 93 42, 72.5 56" fill="none" stroke={ink} strokeWidth="0.35" opacity="0.7" />
          </svg>
        </div>

        {/* top flap: painted paper outside, floral liner inside */}
        <div className="env-flap-wrap absolute inset-x-0 top-0 z-[4] h-[60%]">
          <div className="env-face env-paper [clip-path:polygon(0_0,100%_0,50%_100%)]">
            <svg viewBox="0 0 145 60" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
              <path d="M0.4 0.4 C 25 22, 55 47, 72.5 59.4 C 90 47, 120 22, 144.6 0.4" fill="none" stroke={ink} strokeWidth="0.55" />
            </svg>
          </div>
          <div className="env-face env-face-back overflow-hidden [clip-path:polygon(0_0,100%_0,50%_100%)]">
            <div className="absolute inset-0 bg-[#f1d2cb] bg-cover bg-center" style={{ backgroundImage: `url(${washBlush.src})` }} />
            <Image src={art.divider2} alt="" aria-hidden="true" width={260} height={40} className="absolute left-1/2 top-[3%] w-[58%] -translate-x-1/2" />
            <Image src={art.divider1} alt="" aria-hidden="true" width={120} height={30} className="absolute left-1/2 top-[34%] w-[26%] -translate-x-1/2" />
            <svg viewBox="0 0 145 60" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
              <path d="M0.4 0.4 C 25 22, 55 47, 72.5 59.4 C 90 47, 120 22, 144.6 0.4" fill="none" stroke={ink} strokeWidth="0.6" />
            </svg>
          </div>
        </div>

        {/* turmeric thread, tied around */}
        <div aria-hidden="true" className="env-thread absolute inset-x-[-4%] top-[58%] z-[5] -mt-[4px] h-[8px]">
          <Image src={art.thread} alt="" fill sizes="420px" className="on-paper object-fill" />
        </div>
        <div aria-hidden="true" className="env-thread absolute left-1/2 top-1/2 z-[5] h-[8px] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-90">
          <Image src={art.thread} alt="" fill sizes="420px" className="on-paper object-fill" />
        </div>

        <Dab className="left-[2.5%] top-[3%] rotate-12" />
        <Dab className="right-[2.5%] top-[3%] rotate-[100deg]" />
        <Dab className="bottom-[3%] left-[2.5%] -rotate-[70deg]" />
        <Dab className="bottom-[3%] right-[2.5%] rotate-[190deg]" />

        {/* the wax seal is the button */}
        <button
          type="button"
          onClick={open}
          aria-label="Break the seal to open the invitation"
          className="env-seal absolute left-[36%] top-[38.5%] z-[6] aspect-square w-[28%] rounded-full outline-offset-4"
        >
          <span className="env-seal-pulse relative block size-full">
            <Image src={art.seal} alt="" aria-hidden="true" fill sizes="120px" preload fetchPriority="high" className="object-contain drop-shadow-[0_6px_8px_rgb(79_18_32/0.45)]" />
          </span>
        </button>
      </div>

      <p className="env-hint caps relative mt-8 transition-opacity duration-300">Tap the seal to open</p>
    </div>
  );
}
