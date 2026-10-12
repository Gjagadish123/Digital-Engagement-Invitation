"use client";

import { useId, useRef, useState } from "react";
import { couple, event, rsvp } from "@/content/invitation";
import { Florals } from "./Florals";
import { Icon } from "./Icon";
import { SectionTitle } from "./Ornament";

const MAX_GUESTS = 20;

export function Rsvp() {
  const id = useId();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  // kept as typed text so a guest can clear the box and type a new number; clamped on blur and send
  const [guests, setGuests] = useState("1");
  const [error, setError] = useState("");
  const [sentUrl, setSentUrl] = useState<string | null>(null);
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
      document.getElementById(`${id}-name`)?.focus();
      return;
    }
    setError("");
    setGuests(String(count));
    const reply = attending ? `Joyfully attending · ${count} ${count === 1 ? "guest" : "guests"}` : "Unable to attend · sending blessings from afar";
    const text = [`Namaskaram! RSVP for ${couple.bride} & ${couple.groom}'s engagement (${event.dateLong}, ${event.time}).`, `Name: ${who}`, reply].join("\n");
    const url = `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(text)}`;
    // (a "noopener" feature string would make window.open return null and trigger the fallback too)
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
    setSentUrl(url);
    requestAnimationFrame(() => thanks.current?.focus());
  }

  return (
    <section id="rsvp" aria-labelledby="rsvp-h" className="px-4 py-20 md:py-28">
      <SectionTitle id="rsvp-h" sub={`Your reply goes on WhatsApp to ${rsvp.display}.`}>
        Kindly Reply
      </SectionTitle>

      <div className="bloom card mx-auto mt-10 max-w-[30rem] overflow-hidden px-6 pb-10 pt-20 md:px-10">
        <Florals corner="tr" sizes="150px" className="w-[30%] max-w-[150px]" />

        {sentUrl ? (
          <div ref={thanks} tabIndex={-1} role="status" className="relative text-center outline-none">
            <p className="script text-[clamp(2.5rem,11vw,3.6rem)]">Thank you{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}</p>
            <p className="mt-4 text-[1.125rem] leading-relaxed text-ink">
              WhatsApp is opening with your reply written out. Tap <strong className="font-normal text-wine">Send</strong> there to share it.
            </p>
            <div className="mt-7 flex flex-col items-center gap-2">
              <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                <Icon name="chat" className="size-4" /> Open WhatsApp again
              </a>
              <button
                type="button"
                onClick={() => {
                  setSentUrl(null);
                  requestAnimationFrame(() => document.getElementById(`${id}-name`)?.focus());
                }}
                className="link-caps text-[0.75rem]"
              >
                Change my reply
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="relative space-y-7">
            <div>
              <label htmlFor={`${id}-name`} className="caps block text-[0.75rem] text-wine">
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
                className="field mt-2"
              />
              {error && (
                <p id={`${id}-err`} className="mt-2 text-[1rem] text-[var(--error)]">
                  {error}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="caps text-[0.75rem] text-wine">Will you be there?</legend>
              <div className="mt-3 grid gap-3">
                {[
                  { v: true, t: "Joyfully attending" },
                  { v: false, t: "Sending blessings from afar" },
                ].map((o) => (
                  <label
                    key={o.t}
                    className="flex min-h-14 cursor-pointer items-center gap-3 rounded-[10px] border border-wine/20 bg-white/50 px-4 text-[1.125rem] transition-colors has-[:checked]:border-wine has-[:checked]:bg-blush/40 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-wine"
                  >
                    <input type="radio" name="attending" checked={attending === o.v} onChange={() => setAttending(o.v)} className="size-5 accent-[var(--wine)]" />
                    {o.t}
                  </label>
                ))}
              </div>
            </fieldset>

            {attending && (
              <div>
                <label htmlFor={`${id}-guests`} className="caps block text-[0.75rem] text-wine">
                  How many of you, including you?
                </label>
                <div className="mt-2 flex items-stretch gap-2">
                  <button type="button" onClick={() => step(-1)} disabled={count <= 1} aria-label="One fewer guest" className="btn btn-line w-14 shrink-0 px-0">
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
                    className="field numerals w-24 text-center text-[1.375rem] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button type="button" onClick={() => step(1)} disabled={count >= MAX_GUESTS} aria-label="One more guest" className="btn btn-line w-14 shrink-0 px-0">
                    <Icon name="plus" />
                  </button>
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-wine w-full">
              <Icon name="chat" className="size-4" /> Reply on WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
