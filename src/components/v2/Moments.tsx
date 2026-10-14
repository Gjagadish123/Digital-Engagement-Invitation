"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { gallery, photos } from "@/content/photos";

/** All their photographs, each framed in the painted border, in one swipeable run; tap to see it whole. */
export function Moments() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(0);
  const p = photos[gallery[open]];

  function show(i: number) {
    setOpen(i);
    dialog.current?.showModal();
  }
  const step = (d: number) => setOpen((i) => (i + d + gallery.length) % gallery.length);

  return (
    <section id="moments" aria-labelledby="moments-h" className="cloth dye-madder pb-14 pt-20 md:pb-20 md:pt-28">
      <h2 id="moments-h" className="px-4 text-center font-serif text-[clamp(2.4rem,10vw,4rem)] font-bold leading-none">
        Moments
      </h2>
      <p className="mt-4 px-4 text-center text-[1.0625rem] text-ecru/85">Swipe through, and tap a photograph to see it whole.</p>

      <ul className="mt-10 flex snap-x snap-mandatory scroll-px-[max(1rem,calc(50vw-11rem))] gap-5 overflow-x-auto px-[max(1rem,calc(50vw-11rem))] pb-4 [scrollbar-width:thin] md:scroll-px-[max(2.5rem,calc(50vw-32rem))] md:px-[max(2.5rem,calc(50vw-32rem))]">
        {gallery.map((key, i) => (
          <li key={key} className="shrink-0 snap-center md:snap-start">
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={`Open photograph ${i + 1} of ${gallery.length}: ${photos[key].alt}`}
              className={`kframe block w-[min(76vw,22rem)] [--kf:16px] ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}
            >
              <Image src={photos[key].src} alt="" placeholder="blur" sizes="(min-width: 640px) 352px, 76vw" className="aspect-[4/5] w-full object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={`Photograph ${open + 1} of ${gallery.length}`}
        // a tap anywhere outside the photograph and its buttons closes it
        onClick={(e) => (e.target === e.currentTarget || e.target === e.currentTarget.firstElementChild) && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[100svh] max-w-[100vw] bg-transparent p-0 backdrop:bg-kasimi/92"
      >
        <div className="flex h-[100svh] w-[100vw] flex-col items-center justify-center gap-4 p-4">
          <div className="relative h-[72svh] w-full max-w-[44rem]">
            <Image key={gallery[open]} src={p.src} alt={p.alt} fill sizes="(min-width: 740px) 704px, 92vw" className="object-contain" />
          </div>
          <p className="numerals text-ecru/85" aria-live="polite">
            {open + 1} of {gallery.length}
          </p>
          <div className="flex gap-3">
            <button type="button" onClick={() => step(-1)} className="btn-k btn-k--ghost text-ecru" aria-label="Previous photograph">
              <Icon name="left" />
            </button>
            <button type="button" autoFocus onClick={() => dialog.current?.close()} className="btn-k">
              <Icon name="close" className="size-4" /> Close
            </button>
            <button type="button" onClick={() => step(1)} className="btn-k btn-k--ghost text-ecru" aria-label="Next photograph">
              <Icon name="right" />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
