"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export function CopyButton({ text, label, className = "btn btn-line" }: { text: string; label: string; className?: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("fail");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2600);
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <Icon name={state === "done" ? "check" : "copy"} className="size-4" />
      <span aria-live="polite">{state === "done" ? "Copied" : state === "fail" ? "Press and hold the address to copy" : label}</span>
    </button>
  );
}
