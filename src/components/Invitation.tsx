"use client";

import { useState } from "react";
import { event, invitation } from "@/content/invitation";
import { Florals } from "./Florals";
import { Sprig } from "./Ornament";

type Lang = "en" | "te";
const panel = "col-start-1 row-start-1 transition-[opacity,filter,visibility] duration-500";
const on = "opacity-100 blur-0";
const off = "invisible opacity-0 blur-[3px]";

export function Invitation() {
  const [lang, setLang] = useState<Lang>("en");
  const { en, te } = invitation;

  return (
    <section id="invitation" aria-labelledby={lang === "en" ? "inv-en" : "inv-te"} className="px-4 py-12 md:py-20">
      <div className="bloom card mx-auto max-w-[36rem] overflow-hidden px-7 pb-14 pt-24 md:px-14 md:pt-28">
        <Florals corner="tl" sizes="(min-width: 768px) 230px, 44vw" className="w-[44%] max-w-[230px]" />
        <Florals corner="br" sizes="(min-width: 768px) 230px, 44vw" className="w-[44%] max-w-[230px]" />

        <div className="relative mx-auto flex w-fit rounded-full border border-wine/20 bg-paper/70 p-1" role="group" aria-label="Language">
          {(["en", "te"] as const).map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              lang={l === "te" ? "te" : undefined}
              className={`min-h-11 min-w-24 rounded-full px-4 transition-colors duration-200 ${
                lang === l ? "bg-wine text-[#fff8f3]" : "text-wine hover:bg-blush/60"
              } ${l === "en" ? "font-caps text-[0.75rem] tracking-[0.2em]" : "font-serif text-[1rem]"}`}
            >
              {l === "en" ? "ENGLISH" : "తెలుగు"}
            </button>
          ))}
        </div>

        <div className="relative mt-10 grid text-center">
          <div className={`${panel} ${lang === "en" ? on : off}`} aria-hidden={lang !== "en"}>
            <h2 id="inv-en" className="script text-[clamp(2.6rem,11vw,3.6rem)]">{en.title}</h2>
            <Sprig className="mt-1" />
            <p className="mt-6 text-[1.25rem] leading-[1.8] text-ink md:text-[1.25rem]">{en.body}</p>
            <div className="gold-rule mx-auto my-7 w-24" />
            <p className="caps text-[0.8rem] text-wine">{en.lines[0]}</p>
            <p className="mt-2 text-[1.125rem] text-ink">{en.lines[1]}</p>
            <p className="mt-1 text-[1rem] italic text-ink-soft">Followed by {event.followedBy.toLowerCase()}</p>
            <p className="mt-8 text-balance font-serif text-[1.375rem] italic leading-snug text-wine md:text-[1.375rem]">{en.close}</p>
          </div>

          <div lang="te" className={`${panel} ${lang === "te" ? on : off}`} aria-hidden={lang !== "te"}>
            <h2 id="inv-te" className="font-telugu text-[clamp(2rem,8.6vw,2.7rem)] leading-[1.35] text-wine">{te.title}</h2>
            <Sprig className="mt-1" />
            <p className="mt-6 text-[1.25rem] leading-[2] text-ink md:text-[1.25rem]">{te.body}</p>
            <div className="gold-rule mx-auto my-7 w-24" />
            {te.lines.map((line, i) => (
              <p key={line} className={`text-[1.125rem] leading-[1.95] ${i === 0 ? "text-wine" : "text-ink"}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
