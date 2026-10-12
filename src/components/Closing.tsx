import Image from "next/image";
import { art } from "@/content/art";
import { blessing, couple, families, quotes } from "@/content/invitation";
import { Florals } from "./Florals";
import { Sprig } from "./Ornament";
import { ShareButton } from "./ShareButton";

export function Closing() {
  return (
    <footer className="wash relative overflow-x-clip px-6 pb-28 pt-12 [--wash-inset:-14%_-12%_0] [--wx1:50%] [--wy1:0%] [--wx2:50%] [--wy2:100%] md:pb-32">
      <Florals corner="bl" sizes="(min-width: 768px) 300px, 46vw" className="w-[46%] max-w-[300px]" />
      <Florals corner="br" sizes="(min-width: 768px) 300px, 46vw" className="w-[46%] max-w-[300px]" />

      <div className="relative mx-auto max-w-[44rem] text-center">
        <Image
          src={art.thambulam}
          alt="A watercolor of an engagement thambulam: betel leaves, bananas, a coconut, turmeric, kumkum, jasmine and two gold rings on a brass plate."
          sizes="(min-width: 768px) 420px, 82vw"
          className="bloom on-paper mx-auto h-auto w-[min(82vw,26rem)]"
        />

        <p className="bloom mx-auto mt-6 max-w-[22ch] text-balance font-serif text-[clamp(1.5rem,6.4vw,2.1rem)] italic leading-[1.35] text-wine">{quotes.presence}</p>
        <Sprig className="mt-8" />

        <h2 className="caps mt-8">With best compliments from</h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-gold/40">
          {families.map((f) => (
            <li key={f.side} className="bloom md:px-8">
              <p className="script text-balance text-[clamp(2.3rem,10vw,2.9rem)]">
                <span className="block">{f.names[0]}</span>
                <span className="block">
                  <span className="text-gold">&amp;</span> {f.names[1]}
                </span>
              </p>
              <p className="mt-1 text-[1.125rem] italic text-ink-soft">
                {f.place} · {f.side.toLowerCase()}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <ShareButton />
        </div>

        <div className="mt-16">
          <p lang="te" className="text-[1rem] text-wine/80">
            {blessing}
          </p>
          <p className="script mt-3 text-[clamp(2.5rem,11vw,3.6rem)]">
            {couple.bride} <span className="text-gold">&amp;</span> {couple.groom}
          </p>
          <p className="caps mt-2 text-[0.75rem]">20 · 11 · 2026</p>
        </div>
      </div>
    </footer>
  );
}
