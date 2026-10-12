"use client";

import { useEffect, useRef } from "react";

/** Ask for a shower of petals from anywhere: `burstPetals(60)`. */
export function burstPetals(count = 60) {
  window.dispatchEvent(new CustomEvent("petals", { detail: count }));
}

type Petal = { x: number; y: number; vx: number; vy: number; r: number; a: number; va: number; flip: number; vf: number; size: number; kind: number; ambient: boolean; fade: number };

// marigold, deep marigold, blush rose, jasmine
const fills = ["#e9a03a", "#de7a24", "#e9aeb0", "#fffaf0"];
const edges = ["#c97a1c", "#b85d14", "#cf8b8f", "#e8dcc4"];

/**
 * Akshintalu-like blessing: petals drift while the painted entrance is on screen and
 * shower when the seal breaks or the muhurtham is revealed. Idle when nothing falls.
 */
export function Petals() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      // mobile browsers fire resize as the address bar slides; only reallocate for real changes
      if (w && Math.abs(innerWidth - w) < 1 && Math.abs(innerHeight - h) < 120) return;
      w = innerWidth;
      h = innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const petals: Petal[] = [];
    let ambient = false;
    let raf = 0;
    let last = 0;
    let spawnClock = 0;

    const make = (fast: boolean): Petal => ({
      x: Math.random() * w,
      y: fast ? -20 - Math.random() * h * 0.6 : -20,
      vx: (Math.random() - 0.5) * (fast ? 50 : 18),
      vy: fast ? 70 + Math.random() * 90 : 22 + Math.random() * 22,
      r: Math.random() * Math.PI * 2,
      a: Math.random() * 6,
      va: 0.6 + Math.random() * 1.2,
      flip: Math.random() * Math.PI,
      vf: 1.5 + Math.random() * 2.5,
      size: 6 + Math.random() * 7,
      kind: Math.floor(Math.random() * fills.length),
      ambient: !fast,
      fade: 1,
    });

    const draw = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.scale(Math.max(0.2, Math.abs(Math.cos(p.flip))), 1);
      ctx.beginPath();
      const s = p.size;
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.9, -s * 0.6, s * 0.75, s * 0.7, 0, s);
      ctx.bezierCurveTo(-s * 0.75, s * 0.7, -s * 0.9, -s * 0.6, 0, -s);
      ctx.fillStyle = fills[p.kind];
      ctx.globalAlpha = 0.9 * p.fade;
      ctx.fill();
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = edges[p.kind];
      ctx.stroke();
      ctx.restore();
    };

    const frame = (t: number) => {
      const dt = Math.min(0.05, (t - (last || t)) / 1000);
      last = t;
      if (ambient && petals.length < 9) {
        spawnClock += dt;
        if (spawnClock > 0.9) {
          spawnClock = 0;
          petals.push(make(false));
        }
      }
      ctx.clearRect(0, 0, w, h);
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.a += p.va * dt;
        p.x += (p.vx + Math.sin(p.a) * 14) * dt;
        p.y += p.vy * dt;
        p.r += Math.sin(p.a) * 0.6 * dt;
        p.flip += p.vf * dt;
        // drifting petals settle away once the guest scrolls past the entrance, so they never sit over text
        if (p.ambient && !ambient) p.fade -= dt * 1.6;
        if (p.y > h + 30 || p.fade <= 0) petals.splice(i, 1);
        else draw(p);
      }
      if (petals.length || ambient) raf = requestAnimationFrame(frame);
      else raf = 0;
    };
    const wake = () => {
      if (!raf && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };

    const onBurst = (e: Event) => {
      const n = (e as CustomEvent<number>).detail ?? 60;
      for (let i = 0; i < n; i++) petals.push(make(true));
      wake();
    };
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else wake();
    };

    const hero = document.getElementById("top");
    const io = new IntersectionObserver(([e]) => {
      ambient = e.isIntersecting;
      wake();
    });
    if (hero) io.observe(hero);

    addEventListener("petals", onBurst);
    addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("petals", onBurst);
      removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] size-full" />;
}
