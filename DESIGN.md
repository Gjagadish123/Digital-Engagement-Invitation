---
name: Sai Girishma & Ravi · Engagement
description: A hand-painted watercolor keepsake of a Telugu engagement, opened from a sealed envelope.
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
rounded:
  print: "3px"
  card: "6px"
  field: "10px"
  frame: "22px"
  pill: "999px"
spacing:
  section-y: "80px"
  section-y-md: "112px"
  gutter: "24px"
  card-inset: "9px"
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
---

# Design System: Sai Girishma & Ravi · Engagement

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
