import Image from "next/image";
import { about } from "@/content/invitation";
import { photos } from "@/content/photos";
import { SectionTitle } from "./Ornament";

function Person({ p }: { p: (typeof about)[number] }) {
  return (
    <div className="bloom text-center">
      <p className="script text-[clamp(2.6rem,11vw,3.4rem)]">{p.name}</p>
      <p className="caps mt-2 text-[0.75rem]">{p.lines[0]}</p>
      <p className="mt-2 text-[1.125rem] text-ink">{p.lines[1]}</p>
    </div>
  );
}

export function Couple() {
  const portrait = photos["evening-walk"];
  return (
    <section id="couple" aria-labelledby="couple-h" className="px-6 py-20 md:py-28">
      <SectionTitle id="couple-h" sprig={2}>The Two of Us</SectionTitle>
      <div className="mx-auto mt-12 grid max-w-[60rem] items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
        <div className="md:order-1">
          <Person p={about[0]} />
        </div>
        <div className="bloom arch relative -order-1 mx-auto aspect-[3/4] w-[min(64vw,17rem)] md:order-2 overflow-hidden border border-gold/60 bg-[#fffaf3] p-[7px] shadow-[0_24px_44px_-26px_rgb(107_29_46/0.6)]">
          <div className="arch relative size-full overflow-hidden">
            <Image src={portrait.src} alt={portrait.alt} fill placeholder="blur" sizes="272px" className="object-cover object-[50%_45%]" />
          </div>
        </div>
        <div className="md:order-3">
          <Person p={about[1]} />
        </div>
      </div>
    </section>
  );
}
