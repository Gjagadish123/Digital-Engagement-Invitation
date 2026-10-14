import Image from "next/image";
import { CopyButton } from "@/components/CopyButton";
import { Icon } from "@/components/Icon";
import { event, venue } from "@/content/invitation";
import { cloth } from "@/content/v2-art";
import { LiveMap } from "./LiveMap";

export function Venue() {
  return (
    <section id="venue" aria-labelledby="venue-h" className="cloth dye-indigo pb-20 md:pb-28">
      <Image src={cloth.seaBand} alt="" aria-hidden="true" sizes="100vw" className="h-auto w-full" />
      <div className="mx-auto max-w-[64rem] px-4 pt-12 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-14 md:px-10">
        <div className="text-center md:text-left">
          <h2 id="venue-h">
            <span lang="te" className="te-d block text-[clamp(3rem,13vw,5rem)] leading-[1.3] text-myro">
              వేదిక
            </span>
            <span className="mt-1 block font-serif text-[clamp(1.9rem,8vw,2.8rem)] font-bold leading-[1.08]">{venue.name}</span>
          </h2>
          <p lang="te" className="te mt-3 text-[1.125rem] text-ecru/85">
            {venue.nameTe}
          </p>
          <address className="mx-auto mt-5 max-w-[30ch] text-[1.1875rem] not-italic leading-relaxed md:mx-0">
            {venue.street}, {venue.area}, {venue.city} {venue.pin}
          </address>
          <p className="caps mt-5 text-myro">Followed by {event.followedBy.toLowerCase()}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a href={venue.directions} target="_blank" rel="noopener noreferrer" className="btn-k btn-k--myro w-full max-w-[19rem]">
              <Icon name="directions" className="size-5" /> Get directions
            </a>
            <CopyButton text={venue.full} label="Copy address" className="btn-k btn-k--ghost w-full max-w-[19rem]" />
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <LiveMap />
        </div>
      </div>
    </section>
  );
}
