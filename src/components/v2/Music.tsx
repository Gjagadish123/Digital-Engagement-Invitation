"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/Icon";

// One shared player. Music is off until a guest taps; play() runs inside that tap (iOS rule).
let audio: HTMLAudioElement | null = null;
let playing = false;
let failed = false;
let wanted = false;
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());
const subscribe = (f: () => void) => {
  subs.add(f);
  return () => subs.delete(f);
};
const snapshot = () => (failed ? "failed" : playing ? "playing" : "paused");

function toggle() {
  if (!audio) {
    audio = new Audio(`${process.env.NEXT_PUBLIC_BASE_PATH}/media/v2-kalam.mp3`);
    audio.loop = true;
    // hush when the guest switches back to WhatsApp; resume if they had it on
    document.addEventListener("visibilitychange", () => {
      if (!audio) return;
      if (document.hidden) audio.pause();
      else if (wanted) audio.play().catch(() => ((playing = false), emit()));
    });
  }
  if (audio.paused) {
    wanted = true;
    audio.play().then(
      () => ((playing = true), (failed = false), emit()),
      () => ((playing = false), (failed = true), emit()),
    );
  } else {
    wanted = false;
    audio.pause();
    playing = false;
    emit();
  }
}

const useMusic = () => useSyncExternalStore(subscribe, snapshot, () => "paused");

/** A block-printed control set into the cloth (hero and closing). */
export function MusicInline({ className = "" }: { className?: string }) {
  const state = useMusic();
  return (
    <button type="button" onClick={toggle} aria-pressed={state === "playing"} className={`btn-k btn-k--ghost music-inline min-h-11 px-4 py-2 text-[1rem] ${className}`}>
      <Icon name={state === "playing" ? "music" : "musicOff"} className="size-5" />
      {state === "playing" ? "Pause the music" : state === "failed" ? "Music could not start. Try again" : "Play music: veena and flute"}
    </button>
  );
}

/** Only while music plays: a small seal in the corner so it can be paused from anywhere. */
export function MusicFloat() {
  const state = useMusic();
  if (state !== "playing") return null;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Pause the music"
      className="fixed right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-[70] grid size-11 place-items-center rounded-full border-[1.5px] border-ink bg-madder text-ecru shadow-[0_10px_24px_-10px_rgb(0_0_0/0.8)] transition-transform hover:scale-105 active:scale-95"
    >
      <span aria-hidden="true" className="absolute inset-[4px] rounded-full border border-dashed border-ecru/60" />
      <Icon name="music" className="relative size-5" />
    </button>
  );
}
