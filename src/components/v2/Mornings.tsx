"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { CAL_END, googleCalendarUrl } from "@/content/calendar";
import { MUHURTHAM_ISO } from "@/content/invitation";

const TARGET = new Date(MUHURTHAM_ISO).getTime();
const END = Date.UTC(2026, 10, 20, Number(CAL_END.slice(9, 11)), Number(CAL_END.slice(11, 13)));
const DAY = Date.UTC(2026, 10, 20);
const IST = 5.5 * 3600e3;

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function words(n: number) {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : "");
  return String(n);
}
const pad = (n: number) => String(n).padStart(2, "0");

/** Mornings left in India until the muhurtham morning (that morning counts as the last one). */
function morningsLeft(now: number) {
  const d = new Date(now + IST);
  return Math.round((DAY - Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())) / 86400e3);
}

function Bud() {
  return (
    <svg viewBox="0 0 24 34" className="h-[31px] w-[22px]" aria-hidden="true">
      <use href="#v2-bud" />
    </svg>
  );
}

export function Mornings() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const left = now === null ? null : TARGET - now;
  const n = now === null ? null : morningsLeft(now);
  const s = left === null ? 0 : Math.max(0, Math.floor(left / 1000));

  let heading: string;
  if (n === null) heading = "Mornings until the muhurtham";
  else if (left !== null && left <= 0) heading = (now ?? 0) < END ? "The ceremony is under way. Send your blessings." : "Thank you for your blessings.";
  else if (n === 0) heading = "This is the morning.";
  else heading = `${words(n).replace(/^./, (c) => c.toUpperCase())} ${n === 1 ? "morning" : "mornings"} until the muhurtham`;

  return (
    <section id="date" aria-labelledby="date-h" className="cloth dye-kasimi px-4 py-20 text-center md:py-28">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <symbol id="v2-bud" viewBox="0 0 24 34">
            <path d="M12 33V21" stroke="var(--ecru)" strokeWidth="1.3" fill="none" />
            <path d="M12 21c-3-.4-6-2.4-7-5.2M12 21c3-.4 6-2.4 7-5.2" stroke="var(--ecru)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M12 2.5c5 5.6 7.4 12 0 18.6-7.4-6.6-5-13 0-18.6z" fill="var(--madder)" stroke="var(--ecru)" strokeWidth="1.3" />
            <path d="M12 6v12" stroke="var(--ecru)" strokeWidth="0.8" opacity="0.7" />
            <circle cx="9.6" cy="12" r="0.8" fill="var(--ecru)" />
            <circle cx="14.4" cy="12" r="0.8" fill="var(--ecru)" />
            <circle cx="9.9" cy="15.6" r="0.8" fill="var(--ecru)" />
            <circle cx="14.1" cy="15.6" r="0.8" fill="var(--ecru)" />
          </symbol>
        </defs>
      </svg>

      <h2 id="date-h" className="mx-auto max-w-[18ch] font-serif text-[clamp(2rem,8.6vw,3.25rem)] font-bold leading-[1.12]">
        {heading}
      </h2>

      {n !== null && n > 0 && left !== null && left > 0 && (
        <>
          <div
            role="img"
            aria-label={`${n} lotus buds, one for each morning until the muhurtham on 20 November`}
            className="mx-auto mt-10 flex max-w-[34rem] flex-wrap items-end justify-center gap-x-[7px] gap-y-2"
          >
            {Array.from({ length: n - 1 }, (_, i) => (
              <Bud key={i} />
            ))}
            {/* the muhurtham morning: the bud opens */}
            <svg viewBox="0 0 48 40" className="h-[40px] w-[48px]" aria-hidden="true">
              <path d="M24 39V30" stroke="var(--ecru)" strokeWidth="1.3" />
              <path d="M24 4c6 7 7 17 0 26-7-9-6-19 0-26z" fill="var(--myro)" stroke="var(--ink)" strokeWidth="1.2" />
              <path d="M24 30C17 28 11 21 10 11c6 2 11 8 14 19zM24 30c7-2 13-9 14-19-6 2-11 8-14 19z" fill="var(--myro)" stroke="var(--ink)" strokeWidth="1.2" />
              <path d="M24 30C15 31 6 27 2 20c7-1 15 2 22 10zM24 30c9 1 18-3 22-10-7-1-15 2-22 10z" fill="var(--madder)" stroke="var(--ecru)" strokeWidth="1.2" />
              <circle cx="24" cy="15" r="1" fill="var(--ink)" />
              <circle cx="24" cy="21" r="1" fill="var(--ink)" />
            </svg>
          </div>
          <p className="numerals mt-7 text-[1.0625rem] text-ecru/85" aria-live="off">
            and {pad(Math.floor((s % 86400) / 3600))} h · {pad(Math.floor((s % 3600) / 60))} m · {pad(s % 60)} s more, to 09:34 AM on Friday, 20 November
          </p>
        </>
      )}

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="btn-k w-full max-w-[19rem]">
          <Icon name="calendar" className="size-5" /> Add to Google Calendar
        </a>
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/engagement.ics`} className="btn-k btn-k--ghost w-full max-w-[19rem]">
          <Icon name="calendar" className="size-5" /> Add to Apple Calendar
        </a>
      </div>
    </section>
  );
}
