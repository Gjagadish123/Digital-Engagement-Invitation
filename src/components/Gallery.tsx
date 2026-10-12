"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gallery, photos } from "@/content/photos";
import { Icon } from "./Icon";
import { SectionTitle } from "./Ornament";

const tilt = [0, -7, 6, -3.5, 8];
const shift = [0, -10, 12, -4, 8];

/** A little pile of prints: flick the top one away and it slides to the back. */
export function Gallery() {
  const [order, setOrder] = useState(() => gallery.map((_, i) => i));
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [fly, setFly] = useState<0 | 1 | -1>(0);
  const start = useRef<number | null>(null);
  const moved = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const [full, setFull] = useState<number | null>(null);

  const flyOut = (dir: 1 | -1) => {
    if (fly) return;
    setFly(dir);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setFly(0);
      setDx(0);
    }, 320);
  };
  const back = () => !fly && setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);

  const top = order[0];

  return (
    <section id="moments" aria-labelledby="moments-h" className="wash overflow-x-clip px-6 py-20 [--wx1:0%] [--wy1:0%] [--wx2:100%] [--wy2:100%] md:py-28">
      <SectionTitle id="moments-h" sub="Swipe through a few of our favourite days. Tap one to see it whole." sprig={2}>
        Moments
      </SectionTitle>

      <div role="region" aria-label="Photographs" className="bloom mx-auto mt-12 flex max-w-[28rem] flex-col items-center">
        <div className="relative aspect-[3/4] w-[min(76vw,21rem)]">
          {order.map((photoIndex, k) => {
            const p = photos[gallery[photoIndex]];
            const isTop = k === 0;
            const x = isTop ? (fly ? fly * 140 : 0) : 0;
            const style = isTop
              ? { transform: `translateX(calc(${x}vw + ${dx}px)) rotate(${dx / 16 + fly * 22}deg)`, zIndex: 10 }
              : { transform: `translate(${shift[k % shift.length]}px, ${k * 6}px) rotate(${tilt[k % tilt.length]}deg) scale(${1 - k * 0.03})`, zIndex: 10 - k };
            return (
              <div
                key={photoIndex}
                className={`absolute inset-0 rounded-[3px] bg-[#fffaf3] p-2.5 pb-10 shadow-[0_18px_34px_-18px_rgb(79_18_32/0.55)] ${
                  dragging && isTop ? "" : "transition-transform duration-300 ease-out"
                }`}
                style={style}
                aria-hidden={!isTop}
              >
                {isTop ? (
                  <button
                    type="button"
                    aria-label={`View full size: ${p.alt}`}
                    className="relative block size-full cursor-grab touch-pan-y overflow-hidden rounded-[2px] active:cursor-grabbing"
                    onPointerDown={(e) => {
                      start.current = e.clientX;
                      setDragging(true);
                      e.currentTarget.setPointerCapture(e.pointerId);
                    }}
                    onPointerMove={(e) => start.current !== null && setDx(e.clientX - start.current)}
                    onPointerUp={() => {
                      setDragging(false);
                      start.current = null;
                      moved.current = Math.abs(dx) >= 6; // a drag, not a tap: swallow the click that follows
                      if (Math.abs(dx) > 80) flyOut(dx > 0 ? 1 : -1);
                      else setDx(0);
                    }}
                    onClick={() => {
                      if (moved.current) {
                        moved.current = false;
                        return;
                      }
                      setFull(top);
                      dialog.current?.showModal();
                    }}
                    onPointerCancel={() => {
                      setDragging(false);
                      start.current = null;
                      setDx(0);
                    }}
                  >
                    <Image src={p.src} alt="" fill placeholder="blur" sizes="(min-width: 768px) 336px, 76vw" className="pointer-events-none object-cover" draggable={false} />
                  </button>
                ) : (
                  <div className="relative size-full overflow-hidden rounded-[2px]">
                    <Image src={p.src} alt="" fill sizes="(min-width: 768px) 336px, 76vw" className="object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button type="button" onClick={back} aria-label="Previous photograph" className="btn btn-line size-12 px-0">
            <Icon name="left" />
          </button>
          <p className="caps numerals w-16 text-center text-[0.75rem]" aria-live="polite">
            {top + 1} / {gallery.length}
          </p>
          <button type="button" onClick={() => flyOut(1)} aria-label="Next photograph" className="btn btn-line size-12 px-0">
            <Icon name="right" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-label="Photograph"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[rgb(40_14_20/0.92)]"
      >
        <div className="pointer-events-none flex h-full items-center justify-center p-4 pt-16">
          {full !== null && (
            <div className="pointer-events-auto relative h-[min(82dvh,900px)] w-full max-w-[min(92vw,680px)]">
              <Image src={photos[gallery[full]].src} alt={photos[gallery[full]].alt} fill sizes="(min-width: 740px) 680px, 92vw" className="object-contain" />
            </div>
          )}
        </div>
        <button
          type="button"
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Close"
          className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] grid size-12 place-items-center rounded-full border border-gold-soft/60 text-gold-soft hover:bg-white/10"
        >
          <Icon name="close" />
        </button>
      </dialog>
    </section>
  );
}
