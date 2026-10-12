import { venue } from "@/content/invitation";
import { CopyButton } from "./CopyButton";
import { Icon } from "./Icon";
import { SectionTitle } from "./Ornament";

export function Venue() {
  return (
    <section id="venue" aria-labelledby="venue-h" className="px-6 py-20 md:py-28">
      <SectionTitle id="venue-h" sprig={2}>The Venue</SectionTitle>

      <div className="mx-auto mt-12 grid max-w-[60rem] items-center gap-12 md:grid-cols-2">
        <div className="bloom text-center md:text-left">
          <p className="caps text-[0.875rem] tracking-[0.24em] text-wine">{venue.name}</p>
          <address className="mt-4 text-[1.125rem] not-italic leading-relaxed text-ink">
            {venue.street}
            <br />
            {venue.area}
            <br />
            {venue.city} {venue.pin}
          </address>
          <p lang="te" className="mt-3 text-[1rem] text-ink-soft">
            {venue.nameTe}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={venue.directions} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
              <Icon name="directions" className="size-4" /> Get directions
            </a>
            <CopyButton text={venue.full} label="Copy address" />
          </div>
        </div>

        <div className="bloom relative mx-auto aspect-[4/5] w-full max-w-[24rem] rounded-[22px] border border-gold/60 bg-[#fffaf3] p-[7px] shadow-[0_24px_44px_-26px_rgb(107_29_46/0.55)]">
          <div className="relative size-full overflow-hidden rounded-[16px] bg-paper-2">
            <p className="absolute inset-0 grid place-items-center px-8 text-center text-[1rem] italic text-ink-soft">
              The map is on its way. Get directions works even without it.
            </p>
            <iframe
              src={venue.mapEmbed}
              title={`Map showing ${venue.name}, Duvvada, Visakhapatnam`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full border-0 [filter:sepia(0.12)_saturate(0.9)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
