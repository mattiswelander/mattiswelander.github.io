# Make the page yours, in Swedish

The page is already down to four short blocks. This plan changes what it says and what it shows, adds the top nav you asked for, and stops short of publishing.

## The top nav

A clean bar across the top: your name at the left, three links at the right — **Portfölj**, **Om mig**, **Kontakt** — in the same small grey type the menu uses now, turning dark when you hover them. Clicking one glides to that part of the page. The one currently on screen gets a thin blue underline so you always know where you are; that is the only new behaviour, and it is easy to drop if it feels like noise. On a phone the three links sit in the same fold-down panel they do today.

The link in the address bar reads `#portfolj` instead of the English `#work`, so nothing on the page is half-Swedish.

## Your real details

The name at the top becomes **Mattis Welander** — no invented studio brand. The email becomes **mattis.welander@gmail.com**, the city **Östersund**. "Halcyon Studio" and Copenhagen disappear from the page, the browser tab and the sharing preview.

## Swedish throughout

Headline, section titles, the about paragraph, the form labels, its error messages, the note that appears after you press send, and the copyright line. The page also tells browsers and Google it is Swedish, which matters for anyone searching in Swedish. The typefaces already carry å ä ö.

## Your photographs

Both uploads are real landscape frames from the finsittning, so they replace the two generated stand-ins entirely and the fake files are deleted.

- The quiet one — people around the dinner table, warm evening light — becomes the large picture beside the headline. It suits the calm of the page better than the crowd shot.
- The crowd in the hall with the bunting becomes the picture in the Portfölj block, since that block is about the job itself.

Say the word and I'll flip them. Each frame keeps its own shape rather than being cropped to a tall box, and gets a short description of what it actually shows for people using a screen reader.

## Your one real job, named properly

The work block shows **Studentkåren i Östersund** as the client and **Finsittning** as the title, with one honest sentence about the shoot instead of the vague filler there now. Tell me if the client should read differently, or which year to show.

## Three lines I made up are removed

Unless you say they are true: that you deal with the person holding the camera as a selling point, that each booking covers shoot, edit and files, and that you send a quote after a few lines. If any of it is how you actually work, say which and it stays.

## Nothing gets published

The site stays in the preview only until you say otherwise.

## What stays as is

White background, thin grey rules, the blue dot, the pill buttons, the quiet motion. No gallery, no price list, no extra pages, no new sections.

## Technical details

- `src/lib/site.ts` — single source of content: name, email, city, nav labels (Portfölj / Om mig / Kontakt), the project (client, title, kind, year, alt text, one-sentence summary), the two image references, and the notes list.
- `src/components/site/site-header.tsx` — three Swedish links, right-aligned, with a thin blue underline driven by which section is in view; same in the mobile panel.
- `src/components/site/hero.tsx` — eyebrow "Fotografi · Östersund", Swedish headline and intro, the dinner-table photograph at its natural shape, Swedish link label to `#portfolj`.
- `src/components/site/project.tsx` — section id `portfolj`, Swedish title, real client and title, the crowd photograph, honest summary line.
- `src/components/site/about.tsx` — heading "Om mig", Swedish paragraph, trimmed notes.
- `src/components/site/contact.tsx` — Swedish labels, placeholders, error messages, mailto subject and body, confirmation and copy-to-clipboard fallback.
- `src/components/site/site-footer.tsx` — Swedish copyright line with your name, city and email.
- `src/routes/__root.tsx` — `lang="sv"`, Swedish default title/description/author/og tags, and Swedish wording on the 404 and error screens.
- `src/routes/index.tsx` — Swedish title, description and social preview text for the page.
- Both photographs are uploaded through the asset service and referenced from `src/assets/*.asset.json`, so the large files stay out of the codebase and load from a content delivery address. The two generated files (`hero-portrait.jpg`, `work-linen.jpg`) are deleted once the swap is done.
- Verification: clean build log, a browser pass at desktop and phone widths with screenshots, and a search of the source for leftover English strings or the old placeholder name.
- Project memory is updated so the real name, email, city, Swedish-language rule and your own photographs carry into future sessions, and the old placeholder note is retired.

## What I need from you

1. Confirmation of the client's exact name and the year of the shoot.
2. A yes or no on the three lines above.
3. Whether the picture order I chose is right, or flipped.
