import { Closing } from "@/components/Closing";
import { Couple } from "@/components/Couple";
import { Envelope } from "@/components/Envelope";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Muhurtham } from "@/components/Muhurtham";
import { MusicButton } from "@/components/MusicButton";
import { Interlude } from "@/components/Ornament";
import { Petals } from "@/components/Petals";
import { SaveTheDate } from "@/components/SaveTheDate";
import { Story } from "@/components/Story";
import { Venue } from "@/components/Venue";
import { quotes } from "@/content/invitation";

export default function Page() {
  return (
    <>
      <Envelope />
      <Petals />
      <MusicButton />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <SaveTheDate />
        <Interlude quote={quotes.elders} />
        <Invitation />
        <Story />
        <Couple />
        <Muhurtham />
        <Venue />
        <Gallery />
        <Closing />
      </main>
    </>
  );
}
