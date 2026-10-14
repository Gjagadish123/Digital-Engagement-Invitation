import { muhurtham, quotes } from "@/content/invitation";

/** The panchangam details, set like the inscription at the foot of a temple cloth. */
export function Muhurtham() {
  return (
    <section aria-labelledby="muhurtham-h" className="cloth dye-kasimi px-4 py-20 md:py-28">
      <h2 id="muhurtham-h" className="text-center">
        <span lang="te" className="te-d block text-[clamp(3rem,13vw,5rem)] leading-[1.3] text-myro">
          ముహూర్తం
        </span>
        <span className="mt-1 block font-serif text-[clamp(1.6rem,6.6vw,2.2rem)] font-bold">The auspicious hour</span>
      </h2>

      <dl className="mx-auto mt-10 max-w-[36rem]">
        {muhurtham.map((row) => (
          <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-t border-dashed border-ecru/30 py-4 last:border-b sm:grid-cols-[8rem_1fr_1fr]">
            <dt className="caps pt-1 text-myro">{row.label}</dt>
            <dd className="text-[1.1875rem] font-semibold">{row.en}</dd>
            <dd lang="te" className="te col-start-2 text-[1.125rem] text-ecru/85 sm:col-start-3 sm:text-right">
              {row.te}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mx-auto mt-14 max-w-[24ch] text-balance text-center text-[clamp(1.25rem,5vw,1.6rem)] leading-snug text-myro">{quotes.morning}</p>
    </section>
  );
}
