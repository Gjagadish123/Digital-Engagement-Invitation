# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS — chosen by the user. Deploy target not stated; Vercel is the natural host for Next.js image optimisation.

## Users

Family and guests of Sai Girishma and Ravi, mostly opening a link forwarded on WhatsApp, on a phone, often older relatives reading Telugu as well as English. Their job: understand who is getting engaged, when and where, feel invited, save the date, find the venue, and tell the family they are coming.

## Product Purpose

A personal digital engagement invitation (Nischitartham / నిశ్చితార్థం) for Sai Girishma & Ravi, made by the groom's sibling as a surprise for the family. Success: guests open it, feel the care in it, know the muhurtham time and venue, add it to their calendar, get directions, and RSVP; the family keeps it as a memory.

## Positioning

It is this couple's own invitation: their photographs, their story in their words, the exact muhurtham details (nakshatra, lagna, tithi), and bilingual Telugu/English invitation wording supplied by the family. Nothing generic stands in for those facts.

## Operating Context

- Shared through WhatsApp; link previews (title, description, image) matter.
- Morning ceremony: Friday 20 November 2026, muhurtham 09:34 AM IST, followed by breakfast and lunch.
- Venue: Quality Inn Ramachandra, Duvvada (Kurmannapalem), Visakhapatnam, Andhra Pradesh. Maps link: https://maps.app.goo.gl/AXHFhzJQMuHbFLYA9?g_st=iw
- Today is 11 October 2026; the countdown runs to 2026-11-20T09:34:00+05:30.

## Capabilities and Constraints

- Source of truth: `Sai-Girishma-Ravi-Engagement-Invitation-Content.docx` (content brief). Do not invent names, events, traditions, or story details.
- Required: hero (శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు, names, a chosen headline, date, couple photo); countdown; invitation wording with English/Telugu toggle; four-chapter story with photos; muhurtham details; venue with map and directions; gallery; RSVP; footer with family compliments and closing quote.
- RSVP: short form (name, number of guests) that composes a WhatsApp message to 9550887700 — no backend (user choice).
- v1 (route /) changes requested 2026-10-17: no RSVP section; no couple photo in the hero; story scenes illustrated (no real photos); "The Two of Us" keeps its photo but drops the hobbies; Moments leaves out photos 4, 6 and 8 (yellow-dupatta, beach-night, selfie-window); music is v2's veena-and-flute track. v2 (/v2) unchanged.
- Add to calendar (Google + Apple/.ics) for 20 Nov 2026, 09:34 IST.
- Soft instrumental background music, off by default, with a floating toggle; track generated with Kie.ai (user choice), `public/media/soft-melody.mp3`. Kie.ai key lives in `.env` only, used by the local `scripts/kie.mjs`, never shipped.
- Illustrations (watercolor scenes, florals, wax seal) are generated with Kie.ai and committed as static assets; real photographs carry every personal moment.
- Telugu text in a proper Telugu web font.
- 21st.dev Magic MCP was not authenticated this session.

## Brand Commitments

- Family-stated look (brief): "Traditional but clean: maroon and gold on an ivory background, with light floral or mango-leaf (toranam) motifs. Your best choice!"
- User's references (binding taste, 2026-10-11): Instagram wedding-website invites by abbyy_illustrates: soft watercolor-painted worlds (blush/peach washes, hand-painted florals in corners, an illustrated garden/arch hero), elegant script names with widely spaced serif capitals, an envelope + wax seal "tap the seal to open" intro, scratch-to-reveal date, countdown + add to calendar, a story carousel with couple photos vignetted into painted scenes, drifting petals, a floating round music button. References are inspiration only: the user wants something more personal and better, not a copy.
- Banned: deepam, diyas, lamps, candles or flame motifs anywhere. The earlier "Karthika Deepam / patrika letterpress" build was rejected and removed.
- Voice: warm, blessing-led, from the couple in first person plural ("we joyfully invite you").

## Evidence on Hand

- 10 photos in `photos/` (WhatsApp exports, 720–1200px wide). One is a pre-made collage (`3.22.26 PM (1)`) unsuitable for direct use. Strongest: beach silhouette at the sea horizon (`3.23.12 PM (1)`), couple inside a glowing ring of light (`3.35.01 PM`), lantern-lit forest steps (`3.22.26 PM`).
- Families: Bride's — Manga bai and Bhikshalu (Tenali). Groom's — Sushila and Kesava Rao (Vizag).
- About: Sai Girishma — MBBS MD Anaesthesia, Vizag, painting and dancing. Ravi — Chartered Accountant from Vizag, business enthusiast, financial markets.
- No formal/traditional-dress couple portraits, no family group photos, no venue photos. Do not fabricate them.

## Product Principles

1. The family's words and photographs are the content; design frames them, never replaces them.
2. Phone first, WhatsApp first: everything essential works one-handed on a small screen over a mobile connection.
3. Respect the ritual: muhurtham details and Telugu wording are presented with the dignity of a printed patrika.
4. Every control does something real: calendar, directions, RSVP, share.

## Accessibility & Inclusion

Older relatives: large readable type, strong contrast, Telugu rendered in a proper font, reduced-motion respected, keyboard accessible.
