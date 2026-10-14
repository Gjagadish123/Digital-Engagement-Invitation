import type { Metadata, Viewport } from "next";
import { Eczar, Noto_Serif_Telugu, Ramaraja } from "next/font/google";
import "./v2.css";

/*
 * Direction contract (impeccable), kept in source rather than in guests' HTML.
 * THESIS: The invitation is a hand-painted Srikalahasti kalamkari cloth that tells Sai Girishma and Ravi's
 *   story in painted registers, and the guest dyes it into colour with a touch. It refuses the cream-and-script
 *   wedding-website template (v1's world) and its black-and-gold opposite.
 * OWN-WORLD: Natural-dye fields own whole viewports: madder red, indigo, kasimi black, myrobalan yellow; greens
 *   only as indigo over yellow; ecru only as undyed cotton. Iron-black kalam outlines, lotus-vine borders cut
 *   from the cloth, dotted seams. Ramaraja and Noto Serif Telugu, Eczar. Controls are block-printed tabs; the
 *   reply is a stamped seal.
 * STORY: Guests learn who, when and where, read the four chapters as painted cloth, save the date, find the
 *   venue and stamp their reply on WhatsApp.
 * FIRST VIEWPORT: Undyed ecru cloth carrying only black lines: the blessing, నిశ్చితార్థం, the names, the tree of
 *   life with two peacocks. A touch floods madder from the fingertip and the painting takes its colours.
 * FORM: grounded candidate 5 of 7 (kalamkari narrative cloth), seed 732042d0.
 * FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
 */

const ramaraja = Ramaraja({ weight: "400", subsets: ["telugu", "latin"], variable: "--nf-ramaraja", display: "swap" });
// Not preloaded: unicode-range fetches only the Telugu faces a guest's screen actually uses.
const notoTe = Noto_Serif_Telugu({ subsets: ["telugu"], variable: "--nf-noto-te", display: "swap", preload: false });
const eczar = Eczar({ subsets: ["latin"], variable: "--nf-eczar", display: "swap" });

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: "Sai Girishma & Ravi · నిశ్చితార్థం · 20 November 2026",
  description:
    "Our engagement, painted as a kalamkari cloth: Friday, 20 November 2026, muhurtham 09:34 AM, Quality Inn Ramachandra, Duvvada, Visakhapatnam.",
  applicationName: "Sai Girishma & Ravi",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_PATH}/v2/`,
    siteName: "Sai Girishma & Ravi",
    title: "Sai Girishma & Ravi are getting engaged",
    description: "Friday, 20 November 2026 · Muhurtham 09:34 AM · Visakhapatnam. Touch the cloth to open your invitation.",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#8b2318",
  colorScheme: "dark",
};

// Before first paint: a guest who already dyed the cloth this visit, or who asks for less motion, sees it
// dyed straight away; everyone else first watches the kalam draw it (data-intro, with a safety release).
const headScript = `(function(){var h=document.documentElement,d=false;try{d=!!sessionStorage.getItem("v2-dyed")||matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}if(d)h.dataset.dyed="1";else{h.dataset.intro="1";setTimeout(function(){delete h.dataset.intro},12000)}})()`;

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the head script may set data-dyed before React hydrates.
    <html lang="en-IN" suppressHydrationWarning className={`${ramaraja.variable} ${notoTe.variable} ${eczar.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
        <noscript>
          <style>{`.hero-dyed{-webkit-mask-image:none!important;mask-image:none!important}.hero-undyed,.dye-cue{display:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
