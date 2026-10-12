"use client";

import { useEffect, useState } from "react";
import { CAL_END } from "@/content/calendar";
import { MUHURTHAM_ISO } from "@/content/invitation";

const TARGET = new Date(MUHURTHAM_ISO).getTime();
// The ceremony window runs to the calendar end (13:00 IST) used on the invitation.
const END = Date.UTC(2026, 10, 20, Number(CAL_END.slice(9, 11)), Number(CAL_END.slice(11, 13)));
const pad = (n: number) => String(n).padStart(2, "0");

/** Locked to the real clock; changes its words during the muhurtham and after. */
export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const left = now === null ? null : TARGET - now;

  if (left !== null && left <= 0) {
    return (
      <p role="status" className="text-balance text-center font-serif text-[1.375rem] italic text-wine">
        {(now ?? 0) < END ? "The ceremony is under way. Send your blessings." : "Thank you for your blessings."}
      </p>
    );
  }

  const s = left === null ? null : Math.floor(left / 1000);
  const units = [
    { v: s === null ? null : Math.floor(s / 86400), l: "Days" },
    { v: s === null ? null : Math.floor((s % 86400) / 3600), l: "Hours" },
    { v: s === null ? null : Math.floor((s % 3600) / 60), l: "Minutes" },
    { v: s === null ? null : s % 60, l: "Seconds" },
  ];

  return (
    <div
      role="timer"
      aria-label={s === null ? "Counting down to the muhurtham" : `${units[0].v} days, ${units[1].v} hours and ${units[2].v} minutes to go`}
      className="mx-auto grid w-full max-w-[24rem] grid-cols-4 divide-x divide-gold/40"
    >
      {units.map((u) => (
        <div key={u.l} className="flex flex-col items-center px-1">
          <span className="numerals font-serif text-[clamp(1.9rem,8.5vw,2.6rem)] leading-none text-wine">{u.v === null ? "··" : pad(u.v)}</span>
          <span className="caps mt-2 text-[0.75rem] tracking-[0.16em]">{u.l}</span>
        </div>
      ))}
    </div>
  );
}
