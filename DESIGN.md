---
name: Sai Girishma & Ravi · Engagement
description: A Telugu engagement invitation in two worlds. v1 (route /) a watercolor keepsake opened from a sealed envelope; v2 (route /v2, tokens prefixed v2-) a kalamkari cloth dyed by touch.
colors:
  paper: "#fbf6ef"
  paper-2: "#f5ebe2"
  mount: "#fffaf3"
  blush: "#f2d6d0"
  blush-2: "#e7b8b4"
  peach: "#f7dcc5"
  wine: "#6b1d2e"
  wine-2: "#4f1220"
  ink: "#45272b"
  ink-soft: "#77575a"
  gold: "#a0762f"
  gold-text: "#86621f"
  gold-soft: "#dcc08a"
  error: "#a3122d"
  # v2 (route /v2, src/app/v2/** and src/components/v2/**): the kalamkari cloth world
  v2-madder: "#8b2318"
  v2-madder-deep: "#5c140c"
  v2-indigo: "#1d2d52"
  v2-kasimi: "#1d1915"
  v2-myro: "#e3ae3c"
  v2-myro-on-madder: "#f2c968"
  v2-ecru: "#f0e3c6"
  v2-ink: "#1c1510"
typography:
  display:
    fontFamily: "Rouge Script, cursive"
    fontSize: "clamp(3.1rem, 13vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Rouge Script, cursive"
    fontSize: "clamp(2.5rem, 11vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Tiro Telugu, serif"
    fontSize: "clamp(1.35rem, 5.6vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Tiro Telugu, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Castoro Titling, Tiro Telugu, serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.3em"
  lede:
    fontFamily: "Tiro Telugu, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.4
  body-lg:
    fontFamily: "Tiro Telugu, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.8
  body-sm:
    fontFamily: "Tiro Telugu, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label-lg:
    fontFamily: "Castoro Titling, Tiro Telugu, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.24em"
  label-sm:
    fontFamily: "Castoro Titling, Tiro Telugu, serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.18em"
  telugu-display:
    fontFamily: "Sirivennela, Tiro Telugu, serif"
    fontSize: "clamp(2rem, 8.6vw, 2.7rem)"
    fontWeight: 400
    lineHeight: 1.35
  v2-display-te:
    fontFamily: "Ramaraja, Noto Serif Telugu, serif"
    fontSize: "clamp(3rem, 13vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.3
  v2-display:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(2.4rem, 10vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
  v2-headline:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(2.1rem, 8.6vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.08
  v2-title:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(1.6rem, 6.6vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.2
  v2-quote:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(1.25rem, 5vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.375
  v2-body:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.625
  v2-body-te:
    fontFamily: "Noto Serif Telugu, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.95
  v2-label:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.12em"
rounded:
  print: "3px"
  card: "6px"
  field: "10px"
  frame: "22px"
  pill: "999px"
  v2-print: "3px"
  v2-seal: "999px"
spacing:
  section-y: "80px"
  section-y-md: "112px"
  gutter: "24px"
  card-inset: "9px"
  v2-section-y: "80px"
  v2-section-y-md: "112px"
  v2-gutter: "16px"
  v2-frame: "22px"
components:
  button-wine:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.mount}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "48px"
  button-wine-hover:
    backgroundColor: "{colors.wine-2}"
  button-line:
    backgroundColor: "{colors.mount}"
    textColor: "{colors.wine}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "48px"
  field:
    backgroundColor: "{colors.mount}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "52px"
  card:
    backgroundColor: "{colors.mount}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  music-button:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.gold-soft}"
    rounded: "{rounded.pill}"
    size: "48px"
  v2-button-madder:
    backgroundColor: "{colors.v2-madder}"
    textColor: "{colors.v2-ecru}"
    rounded: "{rounded.v2-print}"
    padding: "0.75rem 1.5rem"
    height: "52px"
  v2-button-madder-hover:
    backgroundColor: "{colors.v2-madder-deep}"
  v2-button-myro:
    backgroundColor: "{colors.v2-myro}"
    textColor: "{colors.v2-ink}"
    rounded: "{rounded.v2-print}"
    padding: "0.75rem 1.5rem"
    height: "52px"
  v2-button-ghost:
    textColor: "{colors.v2-ecru}"
    rounded: "{rounded.v2-print}"
    padding: "0.75rem 1.5rem"
    height: "52px"
  v2-field:
    textColor: "{colors.v2-ink}"
    typography: "{typography.v2-body}"
    rounded: "{rounded.v2-print}"
    padding: "0.6rem 0.9rem"
    height: "52px"
  v2-tabs-active:
    backgroundColor: "{colors.v2-madder}"
    textColor: "{colors.v2-ecru}"
    rounded: "{rounded.v2-print}"
    padding: "0.4rem 1.2rem"
    height: "44px"
  v2-music-seal:
    backgroundColor: "{colors.v2-madder}"
    textColor: "{colors.v2-ecru}"
    rounded: "{rounded.v2-seal}"
    size: "44px"
---

# Design System: Sai Girishma & Ravi · Engagement

<!-- Two worlds share this file. v1, the watercolor world (route /, src/app/(v1)/**, src/components/*.tsx), is documented first and its rules apply only to v1. v2, the kalamkari cloth (route /v2, src/app/v2/**, src/components/v2/**), follows after the WORLD BOUNDARY below with its own eight sections and v2-prefixed tokens. -->

## Overview

**Creative North Star: "A Painted Telugu Morning"**

The invitation is a watercolor keepsake on ivory cold-press paper. Blush and peach washes bleed under each section and fade out at both edges; wine-ink script carries the names and section titles; widely spaced inscriptional capitals carry facts; antique-gold hairlines frame things the way a printed patrika would. Hand-painted mango leaves, marigold, jasmine and rose sit at corners and between sections. The couple's real photographs live inside the paintings, vignetted into painted ovals and paths.

The page is a single tall scroll for a phone held in one hand: generous vertical breathing room, one idea per section, centered compositions that go two-column only on wide screens. Every interaction is a physical gesture from a real invitation: break a wax seal, scratch gold leaf, turn a storybook page, flick through a pile of prints, catch falling petals.

Confirmed rejections: deepam, diyas, lamps, candles and any flame motif, anywhere (the earlier "Karthika Deepam" build was removed); the interchangeable pastel template; the stiff e-card.

**Key Characteristics:**
- Ivory paper with a fine SVG grain under everything, including cards.
- Wine is the only ink of authority; gold is a hairline, never a fill.
- Script for names and titles, spaced capitals for facts, a warm serif for reading.
- Painted art for settings, real photographs for people.
- Motion blooms like a wash spreading; nothing bounces.

## Colors

A warm, low-contrast paper world with one deep accent (wine) and one metallic line color (gold).

### Primary
- **Wine Ink** (wine): script names and titles, primary buttons, the music button, focus rings, caret, active indicators, Telugu blessings.
- **Deep Wine** (wine-2): hover state of wine buttons, selection text, the ink of shadows (shadows are tinted wine, never grey).

### Secondary
- **Antique Gold** (gold): hairline rules, frame borders at 40-60% alpha, the ampersand between the names.
- **Gold Ink** (gold-text): text-safe gold for spaced capitals on paper.
- **Gold Leaf Soft** (gold-soft): the light end of gold rules; icon color on the wine music button; lightbox close button.

### Tertiary
- **Blush** (blush) and **Deep Blush** (blush-2): checked radio fill (blush at 40%), field focus halo (blush-2 at 55%), selection background, scrollbar thumb.
- **Peach** (peach): wash partner to blush; appears through the painted wash images rather than as flat fill.

### Neutral
- **Ivory Rag Paper** (paper): the page ground; `html` background under the grain.
- **Warm Paper** (paper-2): tonal fill behind photographs before they load.
- **Mount Ivory** (mount): the white of photo mounts, card faces, field faces, arch frames and print borders; slightly whiter than paper so frames read as laid on top.
- **Ink** (ink): body text.
- **Soft Ink** (ink-soft): subtitles, italic section subs, captions, secondary Telugu lines.

### Named Rules
**The Wine-Is-the-Ink Rule.** Wine is the only saturated UI color. Turmeric and marigold belong to the paintings and the petals, not to buttons or text.

**The Gold-Is-a-Line Rule.** Gold appears as 1px hairlines, frame borders and small spaced capitals. Never as a button fill or a large flat area (the scratch-off gold leaf is a painted texture, not a fill).

**The Tinted-Shadow Rule.** Every shadow uses wine or deep wine at low alpha. No neutral grey or black shadows.

## Typography

**Display Font:** Rouge Script (with cursive)
**Body Font:** Tiro Telugu (latin + telugu subsets, normal and italic; with serif)
**Label Font:** Castoro Titling (with Tiro Telugu, serif)
**Telugu Display:** Sirivennela (with Tiro Telugu, serif)

**Character:** A formal wine-ink calligraphy paired with Roman inscriptional capitals; Tiro Telugu reads warmly in both scripts, so English and Telugu body text share one face.

### Hierarchy
- **Display** (400, clamp 3.1-4.75rem, 1.05): section titles and the couple's names (hero names run larger, clamp 3.1-6rem).
- **Headline** (400, clamp 2.5-3.6rem): story chapter titles and other in-section script headings.
- **Title** (italic serif, clamp 1.35-1.8rem, 1.45): family quotes set between sections, always wine, balanced, max ~30ch.
- **Body** (400, 1.125rem, 1.7): reading text; story chapters go to 1.15-1.25rem at 1.8. Section subtitles are italic, ink-soft, max 28ch.
- **Label** (400, 0.66-0.9rem, 0.16-0.3em tracking, uppercase, gold-text by default, wine when it is the key fact): dates, form labels, muhurtham field names, countdown units, venue name.
- **Telugu Display** (Sirivennela): only the Telugu invitation title and the Telugu muhurtham heading.

### Named Rules
**The Three Voices Rule.** Script names and titles, capitals state facts, serif speaks. Never set paragraphs in script or capitals.

**The Telugu-From-the-Brief Rule.** Telugu appears only where the family's content brief supplies it (blessing, invitation, muhurtham terms, venue line, compliments), always with `lang="te"`. Never machine-translate new Telugu copy.

**The Tabular Date Rule.** Countdown digits and gallery counters use lining, tabular numerals.

## Layout

Phone-first single column, centered. Sections run 80px vertical padding (112px from md) with 24px side gutters; content columns cap between 24rem and 64rem. The hero is a full small-viewport-height painting (min 680px) with lettering placed in the arch's open sky (top 24%, 27% on landscape) and the portrait set into the garden path. The story carousel and couple section go to a two-column grid from md. Art direction swaps the tall hero painting for the wide one at `(min-width: 768px) and (orientation: landscape)`. Safe-area insets are honored on every fixed or bottom-anchored control. Horizontal overflow is clipped at body and main so bleeding washes and florals never create sideways scroll.

## Elevation & Depth

Depth is paper on paper: washes behind, mounts and cards laid on top with long, soft, wine-tinted drop shadows, and painted cut-outs multiplied onto the paper. No hard edges, no grey.

### Shadow Vocabulary
- **Laid card** (`0 1px 2px rgb(107 29 46 / 0.06), 0 24px 48px -28px rgb(107 29 46 / 0.35)`): cards.
- **Framed mount** (`0 24px 44px -26px rgb(107 29 46 / 0.55-0.6)`): arch photo frame, venue frame, scratch arch.
- **Loose print** (`0 18px 34px -18px rgb(79 18 32 / 0.55)`): gallery prints.
- **Wine button** (`0 10px 22px -12px rgb(79 18 32 / 0.8)`): wine buttons and the music button.
- **Lettering halo** (`text-shadow: 0 0 14px rgb(251 246 239 / 0.85)`): hero lettering over painted sky only.

### Named Rules
**The Bleed, Never Band Rule.** Washes extend past their section and fade out top and bottom through a mask; a wash never ends in a visible edge.

**The No-Isolation Wash Rule.** Wash sections must not create a stacking context (no `isolation`, no z-index on the section). The wash sits in the page's root layer so painted art can multiply into it.

## Shapes

The mandapam arch is the signature silhouette: a true semicircular top over 6px shoulders (`9999px 9999px 6px 6px`), used for the couple's photo frame and the scratch-to-reveal card, always doubled with an inner gold hairline. Everything else is gently rounded paper: prints 2-3px, cards 6px, fields 10px, the venue frame 22px around a 16px inner window. Controls are pills or circles. Photographs set into paintings use a soft radial vignette instead of a hard edge.

## Components

### Buttons
Tactile, ceremonial, quiet.
- **Shape:** full pill (999px), min height 48px, spaced capitals at 0.8rem / 0.2em.
- **Wine (primary):** wine fill, ivory text, wine shadow; hover deepens to wine-2.
- **Line (secondary):** 1px wine border at 55% over translucent mount; hover goes to full wine border on solid mount.
- **Press:** 1px down and 0.99 scale. Disabled is 45% opacity and inert.
- **Icon buttons:** the same line button squared to 48px; icons are inline 24-grid SVG strokes at 1.5px, never glyphs or icon fonts.
- **Text link:** spaced capitals in wine with a gold underline at 0.55em offset, 44px minimum target.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** mount at 92% with the paper grain.
- **Border:** an inner gold hairline inset 9px (radius 3px), like a printed card's border.
- **Shadow Strategy:** laid card.

### Inputs / Fields
- **Style:** mount at 85%, 1px wine border at 55%, 10px radius, 52px min height, 1.125rem text.
- **Focus:** solid wine border plus a 4px blush-2 halo.
- **Error:** border shifts to a stronger red-wine with `aria-invalid`.
- **Choice tiles:** radio rows are 56px tiles that fill with blush and a wine border when checked.

### Navigation
There is no nav bar. Movement is scroll plus a drifting down-arrow cue in the hero, the bilingual pill toggle (EN in capitals, Telugu in serif), carousel prev/next and dot indicators (active dot stretches to 24px wine).

### Envelope Gate (signature)
A painted rag-paper envelope with florals at opposite corners, tied with a painted turmeric thread and sealed in painted wine wax. The seal breathes (1.045 scale, 2.8s) until tapped; then the seal lifts away, the thread drops, the flap rotates open in 3D, the card rises, and the gate blurs and fades out while the hero blooms in. Opening is remembered per session, a pre-hydration tap on the seal still opens, and with no JavaScript the gate is hidden.

### Scratch-to-Reveal (signature)
The muhurtham sits under painted gold leaf inside an arch. Scratching with a 24px brush reveals it at 50% cleared; a "Reveal without scratching" text link always does the same and moves focus to the revealed card. Reveal triggers a petal shower.

### Storybook (signature)
Four chapters on a scroll-snap track. Each is a painted scene with a pale oval where a real photograph is set in with a vignette, focal point tuned per photo. Slides are labelled "Chapter n of Four".

### Print Deck (signature)
Gallery photos as a pile of mounted prints, each tilted and offset; drag or flick the top print away and it slides to the back. Tap opens the photo whole in a native dialog.

### Petals (signature)
A fixed canvas of marigold, deep marigold, blush and jasmine petals. They drift gently only while the hero is on screen, fade away once it leaves, shower on seal-break and reveal, sleep when nothing falls, and never run under reduced motion.

### Floating Music Button
48px wine circle bottom-right with a gold-soft icon; music is off by default.

## Do's and Don'ts

### Do:
- **Do** set real photographs for every personal moment and painted art for settings, florals, seals and materials.
- **Do** export painted cut-outs (florals, sprigs, seal, thread, thambulam, dabs) as transparent RGBA PNGs. Multiply blending fails inside animated or transformed wrappers, so alpha must carry the cut-out; multiply is reserved for full-bleed scenes laid on the root-layer wash.
- **Do** generate new painted assets through `scripts/kie.mjs` with a prompt file in `scripts/prompts/`, then convert to alpha before committing.
- **Do** keep wash sections free of `isolation` and section-level z-index.
- **Do** bloom sections in on scroll (opacity, 6px blur, 16px rise) via `animation-timeline: view()`, only under `prefers-reduced-motion: no-preference`; the global reduced-motion rule collapses every animation and transition.
- **Do** use the two easings: `cubic-bezier(0.16, 1, 0.3, 1)` for arrivals and `cubic-bezier(0.33, 1, 0.68, 1)` for the envelope flap.
- **Do** give every control a 44-48px target, a 2px wine focus ring at 3px offset, and a non-gesture alternative (scratch has a button, the deck and story have buttons).
- **Do** mark Telugu with `lang="te"` and decorative art with empty alt and `aria-hidden`; describe paintings in alt text as watercolors.

### Don't:
- **Don't** use deepam, diyas, lamps, candles, flames or glowing light motifs in art, icons or copy.
- **Don't** add Telugu text the family's brief did not supply.
- **Don't** fabricate traditional-dress portraits, family photos or venue photos in paint or AI imagery.
- **Don't** let washes end in a hard band, or run petals over reading text after the hero.
- **Don't** fill large areas with gold or use grey/black shadows.
- **Don't** add eyebrow labels above section titles; a section opens with its script title and a painted sprig.
- **Don't** bounce. Cues drift like a falling petal.


<!-- WORLD BOUNDARY. Everything above this line is v1 (route /, src/app/(v1)/**, src/components/*.tsx). Everything below is v2 (route /v2, src/app/v2/**, src/components/v2/**). v2 tokens carry the `v2-` prefix in the frontmatter. Neither world's rules apply to the other. -->

# Design System v2: The Kalamkari Cloth (route /v2)

Scope: `src/app/v2/**`, `src/components/v2/**`, `src/content/v2-art.ts`, art in `src/assets/v2/`. Tokens are the `v2-*` keys in the frontmatter; CSS custom properties live on `:root` in `src/app/v2/v2.css` (`--madder`, `--madder-deep`, `--indigo`, `--kasimi`, `--myro`, `--ecru`, `--ink`), exposed to Tailwind as `madder`, `indigo`, `kasimi`, `myro`, `ecru`, `ink`. The v1 rules above (wine-only ink, gold-is-a-line, wine-tinted shadows, script display) do not apply here.

## Overview

**Creative North Star: "The Dyed Temple Cloth"**

The invitation is one hand-painted Srikalahasti kalamkari cloth, read top to bottom in painted registers. Every section is a whole field of a natural dye laid over a real woven-cotton texture: madder red, indigo, kasimi iron-black, and undyed ecru, with myrobalan yellow as the lettering and accent dye. Registers are divided by dotted seams; panels and photographs are wrapped in a lotus-vine border cut from the painted cloth; paintings are iron-black kalam line over dye. The guest opens it by touching undyed cloth, and madder floods outward from the fingertip.

Density is that of a narrative textile: generous registers, one chapter per field, centered on phones and two-column (painting beside a cartouche of writing) from 768px. Telugu leads at display scale and English follows beneath it. Every control is block-printed: a dyed tab with a dashed inner rule, never a pill.

Confirmed rejections: v1's cream-and-script wedding template, and its black-and-gold opposite. No lamp, diya or flame motif (project-wide).

**Key Characteristics:**
- Whole-viewport dye fields on real cotton tiles; dye changes only at a dotted seam.
- Myrobalan yellow is the lettering dye on dark grounds; madder is the lettering dye on ecru.
- Telugu display (Ramaraja) above a bold Eczar English line.
- Lotus-vine border-image frames paintings, photographs, the map and the inscription.
- Block-printed tabs with a dashed inner rule for every control; the reply is a stamped seal.
- Dye motion: things take their colour (bloom from touch, dye-bath on scroll), they never slide or bounce.

## Colors

Four natural dyes own whole fields; ecru is the cloth before dyeing; ink is the kalam line.

### Primary
- **Madder Red** (v2-madder): hero after dyeing, Inscription, Moments and two story registers as fields; primary button fill; active tab; checked reply tile; headings on ecru; the stamp; focus ring on ecru.
- **Deep Madder** (v2-madder-deep): hover of madder buttons only.

### Secondary
- **Myrobalan Yellow** (v2-myro): the lettering dye on kasimi and indigo grounds (Telugu display headings, quotes, caps labels, the ampersand), the yellow button on indigo and kasimi, the global focus ring, selection, scrollbar thumb, seam dots.
- **Myrobalan on Madder** (v2-myro-on-madder): the same dye, lifted so it holds contrast on madder; the `.dye-madder` scope reassigns `--myro` to it automatically. Never set it by hand.

### Tertiary
- **Indigo** (v2-indigo): Two of Us, Venue and one story register as fields.

### Neutral
- **Kasimi Black** (v2-kasimi): iron-black field for Mornings, Our Story header, Muhurtham, Closing; the `html` ground; dialog backdrop at 92%.
- **Undyed Ecru** (v2-ecru): the undyed cotton (pre-touch hero, Reply, the inscription panel, the map placeholder, one story register) and body text on every dark field; secondary text is ecru at 85%.
- **Kalam Ink** (v2-ink): text on ecru, borders of buttons, tabs, fields and reply tiles; text on myro buttons.

### Named Rules
**The Whole-Field Rule.** A dye owns a full-width section. Colour changes only at a seam or a cut border, never as a card or a band floating inside a field.

**The Cloth-Not-Flat Rule.** Every field is `.cloth` plus a `dye-*` class: the flat dye is only the fallback under a 320px seamless woven-cotton tile. No flat CSS colour field ships without its cloth.

**The Green-Is-Overdye Rule.** No green UI colour. Green exists only inside the paintings, as indigo over yellow.

## Typography

**Display Font:** Ramaraja (Telugu and Latin; with Noto Serif Telugu, serif)
**Body Font:** Eczar (with Georgia, serif), English
**Telugu Reading Font:** Noto Serif Telugu (not preloaded; loads per unicode-range)

**Character:** Ramaraja is a temple-inscription Telugu with a carved stroke; Eczar is a heavy-bottomed Indic-born Latin serif whose bold sits beside it without looking imported.

### Hierarchy
- **Telugu Display** (Ramaraja 400, clamp 3-5rem, 1.3; hero నిశ్చితార్థం runs clamp 3.5-6rem at 1.25): section openers మా కథ, ముహూర్తం, వేదిక and the hero title, in myro on dark grounds.
- **Display** (Eczar 700, clamp 2.4-4rem, 1): English-only section titles (Kindly reply, Moments, The two of us). Hero names run clamp 2.15-3.75rem at 1.08, tracking -0.01em.
- **Headline** (Eczar 700, clamp 2.1-3.1rem, 1.08): story chapter titles.
- **Title** (Eczar 700, clamp 1.6-2.2rem): the English line beneath a Telugu display heading, family names, the thank-you line.
- **Quote** (Eczar 400, clamp 1.25-1.6rem, snug, balanced, max 24-26ch, myro): the family's quotes between registers.
- **Body** (Eczar 400, 1.1875rem, 1.625; root 1.125rem at 1.6): reading text at 30-34ch. Secondary lines 1.0625rem at ecru 85%.
- **Telugu Body** (Noto Serif Telugu, 1.125-1.1875rem, 1.95): the Telugu invitation and muhurtham terms; the tall line-height carries the vowel signs.
- **Label** (Eczar 600, 0.9375rem, 0.12em, uppercase): dates, form labels, muhurtham field names, chapter captions under titles, the dye cue (0.875rem, 0.2em).

### Named Rules
**The Telugu-Leads Rule.** Where a heading is bilingual, Telugu is the display line and English follows at title scale beneath it, inside the same `h2`.

**The Two-Weights Rule.** Eczar runs at 400 for reading and 700 for headings, 600 only for labels, buttons and emphasised lines.

**The Tabular Count Rule.** The countdown and photo counter use lining, tabular numerals.

## Layout

Phone-first single column, centered, 16px gutters. Sections run 80px vertical padding (112px from 768px). Reading measures cap at 24-34ch; content columns at 30-64rem (story registers to 80rem). From 768px a story register becomes a two-column grid, painting (1.15fr) beside a cartouche (1fr), alternating sides by chapter, all inside a 30px lotus-vine frame with 32px inner padding. The hero is one full small-viewport-height face; from 1024px it splits into lettering (left, aligned to a 34rem column from centre) and the tree-of-life painting at min(50vw, 80svh). Venue goes two-column from 768px. The photo run is a horizontal scroll-snap strip with gutters that centre a 22rem frame. Painted bands (sea, vine) run full-bleed between registers. Horizontal overflow is clipped on `main`; safe-area insets are honoured on the dye cue and the floating seal.

## Elevation & Depth

Depth is cloth on cloth: paintings and photographs lie on the field with a soft dark drop, frames are cut borders, and a cartouche is a darker panel with a dashed inner rule. Shadows are black, because the world is iron-black and dye; there is no tinted-shadow rule here.

### Shadow Vocabulary
- **Laid painting** (`0 18px 40px -20px rgb(0 0 0 / 0.65)`): story paintings and the hero painting on phones.
- **Printed tab lift** (`0 6px 14px -6px rgb(0 0 0 / 0.45)`): resting block-printed buttons; pressing moves the button 2px down and tightens the shadow.
- **Seal** (`0 10px 24px -10px rgb(0 0 0 / 0.8)`): the floating music seal.
- **Cartouche** (no shadow; `rgb(0 0 0 / 0.1)` fill, 1.5px border at 45% black, 1px dashed inner rule at 6px inset and 35% opacity): writing panels inside a register, 768px and up only.

### Named Rules
**The Seam Rule.** Registers join at a dotted seam (15px: two 2px dark rules with 3px myro dots every 10px). On ecru the dots turn madder; before dyeing they are ink.

## Shapes

Rectilinear textile geometry. Controls, fields, tabs and reply tiles have barely-softened 3px corners (a printed block's edge), always with a 1.5px ink border, and a dashed inner rule inset 4px on buttons. The only circles are seals: the stamp, the floating music seal, the roundel paintings (`clip-path: circle(45%)`) and the lotus-bud countdown. Frames are the painted lotus-vine border (border-image, slice 80, round) at 16-34px. Photographs in frames sit tilted by 1 degree, alternating; hover straightens them.

## Components

### Buttons (block-printed tabs)
Pressed from a carved block: solid, square-shouldered, a little lifted off the cloth.
- **Shape:** 3px corners, 1.5px ink border, min height 52px (44px for the inline music control), Eczar 600 at 1.0625rem, a 1px dashed inner rule inset 4px at 50% opacity in the text colour.
- **Madder (primary):** madder fill, ecru text; hover deepens to deep madder. Calendar, WhatsApp send, lightbox close.
- **Myro:** myrobalan fill, ink text, on indigo and kasimi fields (directions, share).
- **Ghost:** transparent, border and text in the current colour, no shadow; hover is a 10% ecru wash (7% ink on ecru). Secondary actions, the guest stepper, lightbox arrows, the music control.
- **Press:** 2px down, shadow tightens. Disabled 45% opacity.
- **Icons:** inline 24-grid SVG strokes from the shared Icon set at 20px.

### Tabs (language switch)
- **Style:** an inline pair of tabs inside one 1.5px ink border, 3px corners, divided by a 1.5px ink rule; ink text, 44px min height.
- **State:** the pressed tab fills madder with ecru text; focus is a 2px inset ring (madder, or ecru on the active tab). The Telugu tab is set in Noto Serif Telugu.

### Inputs / Fields
- **Style:** 52px, warm-white wash (`rgb(255 250 238 / 0.55)`) on ecru, 1.5px ink border, 3px corners, 1.1875rem Eczar; caret madder; placeholder ink at 62%.
- **Focus:** 2px madder outline at 2px offset.
- **Error:** madder border plus a 2px madder halo at 25%; message in madder 600 beneath, focus returns to the field.
- **Choice tiles:** 56px rows with a 1.5px ink border that fill madder with ecru text when checked.

### Navigation
None. The cloth is read by scrolling. The hero's dye cue (a fixed ecru strip fading upward, caps line plus a madder seam) is the only prompt and disappears once dyed.

### Dye Ritual (signature)
The hero stacks two faces: the undyed twin (ecru cloth, `-line` art in kalam black) over the dyed face (madder cloth, full-colour art). A touch, click, keypress on the cue, or a scroll past 40px grows three wicking bloom masks (`bloom-1..3.png`) from the touch point over about 3.7s, then removes the undyed face. Remembered per session; reduced motion and no-JS see it dyed.

### Dye-Bath Panels (signature)
Each story painting has its `-line` twin underneath; the dyed image is revealed by a soft wavy dye line rising through it as it scrolls into view (`animation-timeline: view()`, entry 35% to cover 55%). Without scroll-timeline support or with reduced motion, it is simply dyed.

### Cartouche (signature)
The writing block of a story register: on phones plain, from 768px a darker panel with a 1.5px border and a dashed inner rule; on ecru a 5% madder wash with an ink border.

### Lotus-Bud Countdown (signature)
One ecru-outlined madder lotus bud per remaining morning, wrapping in a centred field; the last is an open myro-and-madder lotus. The heading counts mornings in words; tabular h/m/s follows in a single line.

### Reply Stamp (signature)
After sending, a 192px circular block-print seal (ring text, lotus, ATTENDING or BLESSINGS) in madder with a turbulence ink filter presses in (700ms, from 1.35 scale and -14 degrees, settling at -8 degrees). It persists across visits until the guest changes the reply.

### Music Control
An inline ghost tab in the hero and the closing ("Play music: veena and flute"); only while playing, a 44px madder seal with a dashed inner ring floats top-right to pause from anywhere.

## Do's and Don'ts

### Do:
- **Do** lay every section as `.cloth` with one `dye-*` field and join fields with a `.seam` or a painted band.
- **Do** ship every painting with its `-line` undyed twin generated by `scripts/v2-art.mjs`, so it can be dyed in.
- **Do** frame paintings, photographs and inset panels with the lotus-vine `.kframe` (16-34px), never a CSS border.
- **Do** set Telugu display headings in myro on dark fields and madder on ecru, with the English line beneath.
- **Do** use the block-printed button (3px, 1.5px ink border, dashed inner rule) for every action; myro on indigo and kasimi, madder on ecru and madder fields.
- **Do** give every control a 44px minimum target, a 2px myro focus ring at 3px offset (madder on ecru), and a non-gesture route (the dye cue is a button; the hero also dyes on scroll).
- **Do** let colour arrive as dye: masks that grow or rise, `cubic-bezier(0.6, 0.05, 0.55, 0.95)` for the bloom and `cubic-bezier(0.16, 1, 0.3, 1)` for the stamp; reduced motion shows everything already dyed.

### Don't:
- **Don't** use pills, rounded cards, or v1's script faces, wine, blush or gold hairlines in v2.
- **Don't** introduce green, grey or any colour outside the four dyes, ecru and ink in UI.
- **Don't** put a colour change anywhere but a seam or a cut border.
- **Don't** slide, fade-up or bounce content in; the only entrances are dyeing and the stamp press.
- **Don't** set the English line above or larger than its Telugu heading.
