"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

/** Soft instrumental, off until a guest taps. play() runs inside the tap (iOS rule). */
export function MusicButton() {
  const audio = useRef<HTMLAudioElement>(null);
  const wanted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  function toggle() {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      wanted.current = true;
      el.play().then(
        () => {
          setPlaying(true);
          setFailed(false);
        },
        () => {
          setPlaying(false);
          setFailed(true);
        },
      );
    } else {
      wanted.current = false;
      el.pause();
      setPlaying(false);
    }
  }

  // Hush when the guest switches back to WhatsApp; resume if they had it on.
  useEffect(() => {
    const onVis = () => {
      const el = audio.current;
      if (!el) return;
      if (document.hidden) el.pause();
      else if (wanted.current) el.play().catch(() => setPlaying(false));
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={failed ? "Music could not start. Tap to try again" : "Soft music"}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[70] grid size-12 place-items-center rounded-full bg-wine text-gold-soft shadow-[0_10px_24px_-10px_rgb(79_18_32/0.8)] transition-transform hover:scale-105 active:scale-95"
      >
        {playing && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-wine/40 [animation-duration:2.4s]" />}
        <Icon name={playing ? "music" : "musicOff"} className="relative size-[22px]" />
      </button>
      <audio ref={audio} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/media/soft-melody.mp3`} loop preload="none" onError={() => setFailed(true)} />
    </>
  );
}
