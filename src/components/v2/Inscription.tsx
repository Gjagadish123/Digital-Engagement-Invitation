"use client";

import { useState } from "react";
import { invitation, quotes } from "@/content/invitation";

/** The family's invitation wording, inscribed on a panel of undyed cotton inside the painted border. */
export function Inscription() {
  const [lang, setLang] = useState<"en" | "te">("en");
  const { en, te } = invitation;

  return (
    <section id="invitation" aria-labelledby="invitation-h" className="cloth dye-madder px-4 pb-24 pt-8 md:pb-32">
      <p className="mx-auto max-w-[26ch] text-balance text-center text-[clamp(1.3rem,5.4vw,1.75rem)] leading-snug text-myro">
        {quotes.elders}
      </p>

      <div className="kframe mx-auto mt-12 max-w-[36rem] [--kf:26px] md:[--kf:34px]">
        <div className="cloth dye-ecru px-5 pb-10 pt-7 text-center md:px-12 md:pb-14">
          <div className="tabs" role="group" aria-label="Language of the invitation">
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              English
            </button>
            <button type="button" aria-pressed={lang === "te"} onClick={() => setLang("te")} lang="te" className="!font-[family-name:var(--font-tet)]">
              తెలుగు
            </button>
          </div>

          {lang === "en" ? (
            <div lang="en-IN" className="mt-8">
              <h2 id="invitation-h" className="font-serif text-[clamp(1.75rem,7.4vw,2.4rem)] font-bold leading-tight text-madder">
                {en.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[34ch] text-[1.1875rem] leading-relaxed">{en.body}</p>
              <div className="seam mx-auto my-7 w-32" style={{ "--seam-dot": "var(--madder)" } as React.CSSProperties} />
              {en.lines.map((l) => (
                <p key={l} className="text-[1.1875rem] font-semibold leading-relaxed">
                  {l}
                </p>
              ))}
              <p className="mx-auto mt-7 max-w-[32ch] text-[1.1875rem] leading-relaxed">{en.close}</p>
            </div>
          ) : (
            <div lang="te" className="mt-8">
              <h2 id="invitation-h" className="te-d text-[clamp(1.6rem,7vw,2.2rem)] text-madder">
                {te.title}
              </h2>
              <p className="te mx-auto mt-4 max-w-[30ch] text-[1.1875rem]">{te.body}</p>
              <div className="seam mx-auto my-6 w-32" style={{ "--seam-dot": "var(--madder)" } as React.CSSProperties} />
              {te.lines.map((l) => (
                <p key={l} className="te text-[1.1875rem] font-semibold">
                  {l}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
