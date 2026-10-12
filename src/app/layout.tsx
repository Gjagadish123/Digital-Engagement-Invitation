import type { Metadata, Viewport } from "next";
import { Castoro_Titling, Rouge_Script, Sirivennela, Tiro_Telugu } from "next/font/google";
import "./globals.css";

/*
 * Direction contract (impeccable), kept in source rather than in guests' HTML.
 * THESIS: A hand-painted watercolor keepsake of a Telugu engagement: an envelope tied with turmeric thread
 *   and sealed in wine wax opens into painted scenes where the couple's real photographs live inside the
 *   paintings. It refuses the interchangeable pastel template and the stiff e-card.
 * OWN-WORLD: Ivory rag paper with painted blush and peach washes; wine-ink formal script, widely spaced
 *   inscriptional capitals, antique-gold hairlines; hand-painted mango leaves, marigold and jasmine;
 *   gold leaf; drifting petals; arches that echo the painted entrance.
 * STORY: Break the seal, meet the couple at a painted Telugu entrance, scratch the gold to reveal the
 *   muhurtham, read the bilingual invitation, turn through four painted chapters, then save the date,
 *   find the venue and reply on WhatsApp.
 * FIRST VIEWPORT: The sealed envelope on a painted wash, florals at the corners, the names in script above
 *   it; after opening, the painted archway with the blessing, names, headline and date in its open sky and
 *   the couple's photograph set into the garden path.
 * FORM: User-pinned watercolor invitation world (references supplied 2026-10-11); supersedes seed 6f1535ab.
 */

const script = Rouge_Script({ weight: "400", subsets: ["latin"], variable: "--nf-script", display: "swap" });
const caps = Castoro_Titling({ weight: "400", subsets: ["latin"], variable: "--nf-caps", display: "swap" });
// Not preloaded: unicode-range fetches only the faces a guest's screen actually uses.
const tiro = Tiro_Telugu({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "telugu"],
  variable: "--nf-tiro",
  display: "swap",
  preload: false,
});
const sirivennela = Sirivennela({
  weight: "400",
  subsets: ["telugu"],
  variable: "--nf-siri",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
if (!siteUrl && process.env.NODE_ENV === "production") {
  console.warn("[invite] SITE_URL is not set: WhatsApp link previews will point at localhost. Set SITE_URL to the public https origin.");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: "Sai Girishma & Ravi · Engagement · 20 November 2026",
  description:
    "You are invited to our engagement: Friday, 20 November 2026, muhurtham 09:34 AM, Quality Inn Ramachandra, Duvvada, Visakhapatnam.",
  applicationName: "Sai Girishma & Ravi",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_PATH}/`,
    siteName: "Sai Girishma & Ravi",
    title: "Sai Girishma & Ravi are getting engaged",
    description: "Friday, 20 November 2026 · Muhurtham 09:34 AM · Visakhapatnam. With love, you are invited.",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f6ebe4",
  colorScheme: "light",
};

// Before first paint: skip the envelope if it was opened this session, and if a guest taps the seal
// before the page's script is ready, open straight away rather than ignoring the tap.
const headScript = `(function(){var h=document.documentElement;function open(){h.dataset.opened="1";try{sessionStorage.setItem("opened","1")}catch(e){}}
try{if(sessionStorage.getItem("opened"))h.dataset.opened="1"}catch(e){}
document.addEventListener("click",function(e){if(!window.__envReady&&e.target.closest&&e.target.closest(".env-seal"))open()},true)})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the head script may set data-opened / data-opening before React hydrates.
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${script.variable} ${caps.variable} ${tiro.variable} ${sirivennela.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
        <noscript>
          <style>{`.envelope-gate{display:none!important}html body{overflow:auto!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
