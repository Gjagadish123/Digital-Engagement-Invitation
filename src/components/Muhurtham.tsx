import { event, muhurtham, quotes } from "@/content/invitation";
import { Florals } from "./Florals";
import { SectionTitle } from "./Ornament";

export function Muhurtham() {
  const rows = [...muhurtham, { label: "Followed by", en: event.followedBy, te: "" }];
  return (
    <section id="muhurtham" aria-labelledby="muhurtham-h" className="wash px-4 py-20 [--wx1:100%] [--wy1:10%] [--wx2:0%] [--wy2:95%] md:py-28">
      <SectionTitle id="muhurtham-h" sub={quotes.morning}>
        The Muhurtham
      </SectionTitle>

      <div className="bloom card mx-auto mt-10 max-w-[40rem] overflow-hidden px-6 pb-10 pt-12 md:px-12">
        <Florals corner="tr" sizes="180px" className="w-[34%] max-w-[180px]" />
        <p lang="te" className="relative text-center font-telugu text-[clamp(2rem,8.6vw,2.7rem)] leading-tight text-wine">
          ముహూర్తం
        </p>
        <dl className="relative mt-6 border-t border-gold/40">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[6.75rem_1fr] items-baseline gap-x-4 border-b border-gold/40 py-4 md:grid-cols-[8.5rem_1fr_auto]">
              <dt className="caps text-[0.75rem] tracking-[0.18em]">{r.label}</dt>
              <dd className="numerals text-[1.125rem] leading-snug text-ink">{r.en}</dd>
              {r.te && (
                <dd lang="te" className="col-start-2 text-[1rem] text-wine md:col-start-3 md:text-right">
                  {r.te}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
