"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/Icon";
import { couple, event, rsvp } from "@/content/invitation";

const MAX_GUESTS = 20;
const KEY = "v2-reply";
type Reply = { name: string; attending: boolean; count: number; url: string };

const noop = () => () => {};
function readStored() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
function parse(raw: string | null): Reply | null {
  try {
    return raw ? (JSON.parse(raw) as Reply) : null;
  } catch {
    return null;
  }
}

/** A block-print seal pressed onto the cloth; it stays there when the guest comes back. */
function Stamp({ attending }: { attending: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" className="stamp-press mx-auto size-48 text-madder" role="img" aria-label={attending ? "Seal: attending" : "Seal: sending blessings"}>
      <defs>
        <filter id={`${id}-ink`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" seed="9" result="m" />
          <feColorMatrix in="m" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.2 1.7" result="holes" />
          <feComposite in="d" in2="holes" operator="in" />
        </filter>
        <path id={`${id}-ring`} d="M100 100m-71 0a71 71 0 1 1 142 0a71 71 0 1 1-142 0" />
      </defs>
      <g filter={`url(#${id}-ink)`}>
        <g fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="93" strokeWidth="5" />
          <circle cx="100" cy="100" r="85" strokeWidth="1.6" />
          <circle cx="100" cy="100" r="57" strokeWidth="1.6" />
        </g>
        <text fill="currentColor" fontSize="12.5" fontWeight="700" letterSpacing="2.2" style={{ fontFamily: "var(--font-serif)" }}>
          <textPath href={`#${id}-ring`}>SAI GIRISHMA &amp; RAVI · 20 · 11 · 2026 · NISCHITARTHAM ·</textPath>
        </text>
        <g fill="currentColor">
          <path d="M100 62c7 8 8 19 0 30-8-11-7-22 0-30z" />
          <path d="M100 92c-8-2-15-9-16-20 7 2 13 9 16 20zM100 92c8-2 15-9 16-20-7 2-13 9-16 20z" />
          <path d="M100 92c-10 1-19-3-24-10 8-1 17 2 24 10zM100 92c10 1 19-3 24-10-8-1-17 2-24 10z" opacity="0.8" />
        </g>
        <text x="100" y="119" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="800" letterSpacing="1.2" style={{ fontFamily: "var(--font-serif)" }}>
          {attending ? "ATTENDING" : "BLESSINGS"}
        </text>
        <text x="100" y="136" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="600" letterSpacing="1.5" style={{ fontFamily: "var(--font-serif)" }}>
          WITH LOVE
        </text>
      </g>
    </svg>
  );
}

export function Reply() {
  const id = useId();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  // kept as typed text so a guest can clear the box and type a new number; clamped on blur and send
  const [guests, setGuests] = useState("1");
  const [error, setError] = useState("");
  // undefined until the guest acts on this visit; until then a reply stamped on an earlier visit shows
  const [fresh, setSent] = useState<Reply | null | undefined>(undefined);
  const stored = useSyncExternalStore(noop, readStored, () => null);
  const sent = fresh === undefined ? parse(stored) : fresh;
  const thanks = useRef<HTMLDivElement>(null);

  const clamp = (v: string) => {
    const n = Math.round(Number(v));
    return Number.isFinite(n) && v.trim() !== "" ? Math.min(MAX_GUESTS, Math.max(1, n)) : 1;
  };
  const count = clamp(guests);
  const step = (d: number) => setGuests(String(Math.min(MAX_GUESTS, Math.max(1, count + d))));

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const who = name.trim();
    if (!who) {
      setError("Please add your name so the family knows who is replying.");
      requestAnimationFrame(() => document.getElementById(`${id}-name`)?.focus());
      return;
    }
    setError("");
    setGuests(String(count));
    const line = attending ? `Joyfully attending · ${count} ${count === 1 ? "guest" : "guests"}` : "Unable to attend · sending blessings from afar";
    const text = [`Namaskaram! RSVP for ${couple.bride} & ${couple.groom}'s engagement (${event.dateLong}, ${event.time}).`, `Name: ${who}`, line].join("\n");
    const url = `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(text)}`;
    // opened inside the tap so phones allow it ("noopener" in the feature string would make window.open return null)
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
    const reply = { name: who, attending, count, url };
    setSent(reply);
    try {
      localStorage.setItem(KEY, JSON.stringify(reply));
    } catch {}
    requestAnimationFrame(() => thanks.current?.focus());
  }

  function change() {
    if (sent) {
      setName(sent.name);
      setAttending(sent.attending);
      setGuests(String(sent.count));
    }
    setSent(null);
    try {
      localStorage.removeItem(KEY);
    } catch {}
    requestAnimationFrame(() => document.getElementById(`${id}-name`)?.focus());
  }

  return (
    <section id="reply" aria-labelledby="reply-h" className="cloth dye-ecru px-4 py-20 md:py-28">
      <div className="mx-auto max-w-[30rem]">
        <h2 id="reply-h" className="text-center font-serif text-[clamp(2.4rem,10vw,4rem)] font-bold leading-none text-madder">
          Kindly reply
        </h2>
        <p className="mt-4 text-center text-[1.125rem]">Your reply goes on WhatsApp to <span className="whitespace-nowrap">{rsvp.display}</span>.</p>

        {sent ? (
          <div ref={thanks} tabIndex={-1} role="status" className="mt-10 text-center outline-none">
            <Stamp attending={sent.attending} />
            <p className="mt-6 font-serif text-[clamp(1.6rem,6.6vw,2.1rem)] font-bold leading-tight text-madder">
              Thank you, {sent.name.split(" ")[0]}.
            </p>
            <p className="mx-auto mt-3 max-w-[30ch] text-[1.125rem] leading-relaxed">
              WhatsApp opened with your reply written out. Tap <strong>Send</strong> there so the family receives it.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a href={sent.url} target="_blank" rel="noopener noreferrer" className="btn-k w-full max-w-[19rem]">
                <Icon name="chat" className="size-5" /> Open WhatsApp again
              </a>
              <button type="button" onClick={change} className="btn-k btn-k--ghost w-full max-w-[19rem]">
                Change my reply
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-10 space-y-8">
            <div>
              <label htmlFor={`${id}-name`} className="caps block text-madder">
                Your name
              </label>
              <input
                id={`${id}-name`}
                name="name"
                autoComplete="name"
                maxLength={60}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error && e.target.value.trim()) setError("");
                }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-err` : undefined}
                placeholder="Your name, or your family’s"
                className="field-k mt-2"
              />
              {error && (
                <p id={`${id}-err`} role="alert" className="mt-2 text-[1.0625rem] font-semibold text-madder">
                  {error}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="caps text-madder">Will you be there?</legend>
              <div className="mt-3 grid gap-3">
                {[
                  { v: true, t: "Joyfully attending" },
                  { v: false, t: "Sending blessings from afar" },
                ].map((o) => (
                  <label
                    key={o.t}
                    className="flex min-h-14 cursor-pointer items-center gap-3 rounded-[3px] border-[1.5px] border-ink px-4 text-[1.1875rem] transition-colors has-[:checked]:bg-madder has-[:checked]:text-ecru has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-madder"
                  >
                    <input type="radio" name="attending" checked={attending === o.v} onChange={() => setAttending(o.v)} className="size-5 accent-[var(--myro)]" />
                    {o.t}
                  </label>
                ))}
              </div>
            </fieldset>

            {attending && (
              <div>
                <label htmlFor={`${id}-guests`} className="caps block text-madder">
                  How many of you, including you?
                </label>
                <div className="mt-2 flex items-stretch gap-2">
                  <button type="button" onClick={() => step(-1)} disabled={count <= 1} aria-label="One fewer guest" className="btn-k btn-k--ghost w-14 shrink-0 px-0">
                    <Icon name="minus" />
                  </button>
                  <input
                    id={`${id}-guests`}
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={MAX_GUESTS}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    onBlur={() => setGuests(String(count))}
                    className="field-k numerals w-24 text-center text-[1.375rem] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button type="button" onClick={() => step(1)} disabled={count >= MAX_GUESTS} aria-label="One more guest" className="btn-k btn-k--ghost w-14 shrink-0 px-0">
                    <Icon name="plus" />
                  </button>
                </div>
              </div>
            )}

            <button type="submit" className="btn-k w-full">
              <Icon name="chat" className="size-5" /> Stamp my reply and send on WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
