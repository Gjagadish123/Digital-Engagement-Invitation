# Sai Girishma & Ravi · Engagement Invitation

A digital invitation for the engagement on **Friday, 20 November 2026, muhurtham 09:34 AM IST**, Quality Inn Ramachandra, Duvvada, Visakhapatnam. Two versions live side by side:

- **v1** at `/`: the watercolor invitation (`src/app/(v1)/`, `src/components/*.tsx`).
- **v2** at `/v2/`: the kalamkari cloth (`src/app/v2/`, `src/components/v2/`). Guests touch the undyed cloth to dye it, read the story as painted panels, and stamp their reply.

Both read the same facts from `src/content/invitation.ts`. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4. Every page is prerendered static.

### v2 art and music

- Paintings: `src/assets/v2/`, made with Kie.ai from `scripts/prompts/v2/*.json`. `scripts/prompts/v2/chosen.json` says which generation became which asset; `node scripts/v2-art.mjs scripts/prompts/v2/chosen.json` rebuilds them, including each `-line` twin (the same cloth before dyeing).
- Music: `public/media/v2-kalam.mp3` (veena and flute in Mohanam, take 1 of 2; the other take is `tmp/kie/music-kalam/track-1.mp3` while that folder exists).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy (GitHub Pages, live)

Every push to `main` runs `.github/workflows/pages.yml`: a static export served from `https://<owner>.github.io/<repo>/`. The workflow sets `PAGES_BASE_PATH` (the repo sub-path) and `SITE_URL`, then `scripts/pages-images.mjs` writes the resized WebP images that a normal Next.js server would make on the fly. Watch a deploy under the repo's **Actions** tab.

To try the exact Pages build locally (Git Bash):

```bash
MSYS_NO_PATHCONV=1 PAGES_BASE_PATH=/Digital-Engagement-Invitation SITE_URL=https://gjagadish123.github.io npm run build
node scripts/pages-images.mjs   # then serve out/ under /Digital-Engagement-Invitation/
```

## Deploy (Vercel, alternative)

1. Push this folder to a Git repo and import it in Vercel (framework: Next.js, no settings needed).
2. Optional: set `SITE_URL` (e.g. `https://saigirishma-ravi.vercel.app`) so link previews use your custom domain. Without it, Vercel's production URL is used automatically.
3. Share only the **production** URL on WhatsApp. Preview deployments are protected and will not show a link preview.
4. Test the preview by pasting the link into a WhatsApp chat (without sending); the card and title should appear within a few seconds.

`.env` (the Kie.ai key) is only for `scripts/kie.mjs` on this machine. The site never reads it, and it is git-ignored. Do not add it to Vercel or to GitHub secrets.

## Where things live

| What | Where |
| --- | --- |
| All wording, dates, venue, families, story | `src/content/invitation.ts` (from the family's content brief) |
| Photos and their descriptions | `src/assets/photos/`, `src/content/photos.ts` |
| Watercolor paintings (generated with Kie.ai) | `src/assets/art/`, prompts in `scripts/prompts/` |
| Calendar file | `src/app/engagement.ics/route.ts` (09:34–13:00 IST; the end time is an estimate covering breakfast and lunch) |
| Link preview image | `src/app/opengraph-image.jpg` |
| Background music | `public/media/soft-melody.mp3` |

### Swap the music

Two takes were generated. Take 1 is live; both are in `tmp/review/` while that folder exists. To use the other one, copy it over `public/media/soft-melody.mp3`.

### Add gallery photos

Put the image in `src/assets/photos/`, import it in `src/content/photos.ts` with a short description, and add its key to the `gallery` list.

### Regenerate a painting

```bash
node scripts/kie.mjs credit
node scripts/kie.mjs task scripts/prompts/story-1.json   # saves into tmp/kie/story-1/
```
