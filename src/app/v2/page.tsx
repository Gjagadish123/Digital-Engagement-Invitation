import { Closing } from "@/components/v2/Closing";
import { Hero } from "@/components/v2/Hero";
import { Inscription } from "@/components/v2/Inscription";
import { Moments } from "@/components/v2/Moments";
import { Mornings } from "@/components/v2/Mornings";
import { Muhurtham } from "@/components/v2/Muhurtham";
import { MusicFloat } from "@/components/v2/Music";
import { Reply } from "@/components/v2/Reply";
import { StoryCloth } from "@/components/v2/StoryCloth";
import { TwoOfUs } from "@/components/v2/TwoOfUs";
import { Venue } from "@/components/v2/Venue";

export default function Page() {
  return (
    <>
      <MusicFloat />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Inscription />
        <Mornings />
        <StoryCloth />
        <TwoOfUs />
        <Muhurtham />
        <Venue />
        <Moments />
        <Reply />
      </main>
      <Closing />
    </>
  );
}
