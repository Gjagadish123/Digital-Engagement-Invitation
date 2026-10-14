import Image from "next/image";
import { about } from "@/content/invitation";
import { cloth } from "@/content/v2-art";

const roundels = [
  { src: cloth.aboutHer, alt: "Kalamkari roundel: a paintbrush and dye pots, a stethoscope and a pair of dancer's ankle bells around a lotus." },
  { src: cloth.aboutHim, alt: "Kalamkari roundel: an open ledger, a fountain pen and a row of rising market bars growing like lotus stems around a lotus." },
];

export function TwoOfUs() {
  return (
    <section aria-labelledby="us-h" className="cloth dye-indigo px-4 py-20 md:py-28">
      <h2 id="us-h" className="text-center font-serif text-[clamp(2.4rem,10vw,4rem)] font-bold leading-none">
        The two of us
      </h2>
      <div className="mx-auto mt-12 grid max-w-[60rem] gap-14 md:grid-cols-2 md:gap-10">
        {about.map((p, i) => (
          <div key={p.name} className="text-center">
            <Image
              src={roundels[i].src}
              alt={roundels[i].alt}
              sizes="(min-width: 768px) 320px, 72vw"
              className="mx-auto aspect-square w-[min(72vw,20rem)] object-cover [clip-path:circle(45%)]"
            />
            <h3 className="mt-2 font-serif text-[clamp(1.9rem,7.6vw,2.6rem)] font-bold">{p.name}</h3>
            <ul className="mt-3 space-y-1 text-[1.1875rem]">
              {p.lines.map((l, j) => (
                <li key={l} className={j === 0 ? "font-semibold text-myro" : ""}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
