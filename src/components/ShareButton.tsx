"use client";

import { couple, event, venue } from "@/content/invitation";
import { Icon } from "./Icon";

const text = `${couple.names} are getting engaged: ${event.dateLong}, muhurtham ${event.time}, ${venue.name}, Duvvada, Visakhapatnam.`;

export function ShareButton({ className = "btn btn-line" }: { className?: string }) {
  async function share() {
    const url = `${location.origin}${location.pathname}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: couple.names, text, url });
        return;
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
      }
    }
    const wa = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`;
    const win = window.open(wa, "_blank");
    if (win) win.opener = null;
    else location.href = wa;
  }

  return (
    <button type="button" onClick={share} className={className}>
      <Icon name="share" className="size-4" /> Share this invitation
    </button>
  );
}
