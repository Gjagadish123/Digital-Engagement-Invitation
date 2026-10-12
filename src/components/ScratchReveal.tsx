"use client";

import { useEffect, useRef, useState } from "react";
import { art } from "@/content/art";
import { burstPetals } from "./Petals";

/** Gold leaf over the muhurtham: scratch it away, or tap the button below. */
export function ScratchReveal({ children }: { children: React.ReactNode }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const done = useRef(false);

  function reveal(moveFocus = false) {
    if (done.current) return;
    done.current = true;
    setRevealed(true);
    burstPetals(80);
    if (moveFocus) card.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!cv || !ctx) return;

    const leaf = new Image();
    leaf.src = art.goldLeaf.src;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let moves = 0;
    let painted = false;

    const paint = () => {
      const { width, height } = cv.getBoundingClientRect();
      if (!width || !height) return;
      cv.width = width * dpr;
      cv.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      if (leaf.complete && leaf.naturalWidth) {
        // cover-fit the gold leaf into the arch
        const s = Math.max(width / leaf.naturalWidth, height / leaf.naturalHeight);
        const w = leaf.naturalWidth * s;
        const h = leaf.naturalHeight * s;
        ctx.drawImage(leaf, (width - w) / 2, (height - h) / 2, w, h);
      } else {
        ctx.fillStyle = "#cfa24e";
        ctx.fillRect(0, 0, width, height);
      }
      ctx.fillStyle = "rgb(84 44 14 / 0.78)";
      ctx.textAlign = "center";
      ctx.font = `400 ${Math.round(width / 21)}px "Castoro Titling", serif`;
      ctx.letterSpacing = "4px";
      ctx.fillText("SCRATCH TO REVEAL", width / 2, height * 0.55);
      ctx.font = `italic 400 ${Math.round(width / 19)}px "Tiro Telugu", serif`;
      ctx.letterSpacing = "0px";
      ctx.fillText("the muhurtham", width / 2, height * 0.55 + width / 10);
      painted = true;
    };
    paint();
    leaf.onload = () => moves === 0 && paint();
    document.fonts.ready.then(() => moves === 0 && paint());

    // A rotation before any scratching repaints the leaf; one mid-scratch simply reveals.
    const ro = new ResizeObserver(() => {
      if (!painted || done.current) return;
      if (moves === 0) paint();
      else reveal();
    });
    ro.observe(cv);

    let drawing = false;
    const scratch = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(e.clientX - r.left, e.clientY - r.top, 24, 0, Math.PI * 2);
      ctx.fill();
      if (++moves % 12 === 0) {
        // sample a coarse grid to estimate how much leaf is gone
        const { data } = ctx.getImageData(0, 0, cv.width, cv.height);
        let clear = 0;
        let total = 0;
        for (let y = 0; y < cv.height; y += 12) {
          for (let x = 0; x < cv.width; x += 12) {
            total++;
            if (data[(y * cv.width + x) * 4 + 3] < 40) clear++;
          }
        }
        if (clear / total > 0.5) reveal();
      }
    };
    const down = (e: PointerEvent) => {
      drawing = true;
      cv.setPointerCapture(e.pointerId);
      scratch(e);
    };
    const move = (e: PointerEvent) => drawing && scratch(e);
    const up = () => (drawing = false);
    cv.addEventListener("pointerdown", down);
    cv.addEventListener("pointermove", move);
    cv.addEventListener("pointerup", up);
    cv.addEventListener("pointercancel", up);
    return () => {
      ro.disconnect();
      cv.removeEventListener("pointerdown", down);
      cv.removeEventListener("pointermove", move);
      cv.removeEventListener("pointerup", up);
      cv.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="arch relative w-[min(84vw,24rem)] overflow-hidden border border-gold/60 bg-[#fffaf3] p-[10px] shadow-[0_26px_50px_-30px_rgb(107_29_46/0.55)]">
        <div ref={card} tabIndex={-1} className="arch border border-gold/40 px-6 pb-9 pt-14 text-center outline-none">
          {children}
        </div>
        <canvas
          ref={canvas}
          aria-hidden="true"
          className={`absolute inset-0 size-full cursor-grab touch-none transition-opacity duration-700 ${revealed ? "pointer-events-none opacity-0" : ""}`}
        />
      </div>
      <button
        type="button"
        onClick={() => reveal(true)}
        className={`link-caps mt-4 text-[0.75rem] text-gold-text no-underline hover:underline ${revealed ? "invisible" : ""}`}
      >
        Reveal without scratching
      </button>
    </div>
  );
}
