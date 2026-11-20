import Image from "next/image";
import { ShareButton } from "@/components/ShareButton";
import { couple, families, quotes, specialBlessing } from "@/content/invitation";
import { praveen } from "@/content/photos";
import { cloth } from "@/content/v2-art";
import { MusicInline } from "./Music";

/** The patrons' inscription that closes a temple cloth: the two families, then the last line. */
export function Closing() {
  return (
    <footer aria-labelledby="closing-h" className="cloth dye-kasimi">
      <Image src={cloth.vineBand} alt="" aria-hidden="true" sizes="100vw" className="h-auto w-full" />
      <div className="px-4 pb-16 pt-16 text-center md:pb-24 md:pt-20">
        <p className="mx-auto max-w-[24ch] text-balance text-[clamp(1.35rem,5.6vw,1.9rem)] leading-snug text-myro">{quotes.presence}</p>

        <section aria-labelledby="special-blessing-h" className="mt-16">
          <h2 id="special-blessing-h" className="caps text-ecru/85">
            With the special blessings of
          </h2>
          <figure className="kframe mx-auto mt-7 w-[min(62vw,15rem)] -rotate-1 [--kf:16px]">
            <Image src={praveen.src} alt={praveen.alt} placeholder="blur" sizes="240px" className="aspect-[4/5] w-full object-cover object-[50%_30%]" />
          </figure>
          <p className="mt-6 font-serif text-[clamp(2rem,8.6vw,2.6rem)] font-bold leading-tight">{specialBlessing.name}</p>
          <blockquote className="mx-auto mt-3 max-w-[32ch] text-balance text-[1.1875rem] leading-relaxed">
            <p>
              “{specialBlessing.words}” <span lang="te" className="te-d text-myro">{specialBlessing.wishTe}</span>
            </p>
          </blockquote>
        </section>
        <div className="seam mx-auto mt-14 w-48" />

        <h2 id="closing-h" className="caps mt-14 text-ecru/85">
          With best compliments from
        </h2>
        <div className="mx-auto mt-8 grid max-w-[40rem] gap-10 sm:grid-cols-2">
          {families.map((f) => (
            <div key={f.side}>
              <p className="font-serif text-[clamp(1.6rem,6.8vw,2.1rem)] font-bold leading-tight">
                {f.names[0]}
                <span className="text-myro"> &amp; </span>
                {f.names[1]}
              </p>
              <p className="mt-2 text-[1.0625rem] text-ecru/85">
                {f.side} · {f.place}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <ShareButton className="btn-k btn-k--myro w-full max-w-[19rem]" />
          <MusicInline className="w-full max-w-[19rem]" />
        </div>

        <div className="seam mx-auto mt-16 w-48" />
        <p className="mt-6 font-serif text-[1.25rem] font-bold">{couple.names}</p>
        <p lang="te" className="te-d mt-1 text-[1.125rem] text-myro">
          నిశ్చితార్థం · 20.11.2026
        </p>
      </div>
    </footer>
  );
}
