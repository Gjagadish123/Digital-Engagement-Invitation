import { googleCalendarUrl } from "@/content/calendar";
import { event, muhurtham } from "@/content/invitation";
import { Countdown } from "./Countdown";
import { Icon } from "./Icon";
import { SectionTitle } from "./Ornament";
import { ScratchReveal } from "./ScratchReveal";

export function SaveTheDate() {
  return (
    <section id="reveal" aria-labelledby="reveal-h" className="wash relative px-6 py-20 [--wash-inset:0_-12%_-14%] [--wx1:100%] [--wy1:0%] [--wx2:0%] [--wy2:100%] md:py-28">
      <SectionTitle id="reveal-h" sub="Scratch the gold to reveal our muhurtham.">
        Save the Date
      </SectionTitle>

      <div className="bloom mt-10">
        <ScratchReveal>
          <p className="caps">Friday</p>
          <p className="numerals mt-1 font-serif text-[clamp(4.5rem,22vw,6rem)] leading-none text-wine">20</p>
          <p className="caps mt-1 text-[0.875rem]">November 2026</p>
          <div className="gold-rule mx-auto my-5 w-2/3" />
          <p className="caps text-wine">Muhurtham · {event.time}</p>
          <p className="mt-2 font-serif text-[1.125rem] italic text-ink">Karthika Shuddha Ekadashi</p>
          <p lang="te" className="mt-1 text-[1rem] text-ink-soft">
            {muhurtham[0].te} · {muhurtham[1].te}
          </p>
        </ScratchReveal>
      </div>

      <div className="bloom mt-14">
        <Countdown />
        <p className="mt-4 text-center font-serif text-[1rem] italic text-ink-soft">until the muhurtham</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-8">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="link-caps">
          <Icon name="calendar" className="size-4" /> Add to Google Calendar
        </a>
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/engagement.ics`} className="link-caps">
          <Icon name="calendar" className="size-4" /> Add to Apple Calendar
        </a>
      </div>
    </section>
  );
}
