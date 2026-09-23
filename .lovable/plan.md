# Make the page yours, in Swedish

The page is already down to four short blocks. This plan changes what it says, not how it looks, and stops short of publishing.

## What changes

**Your real details replace everything I invented.** The name at the top becomes **Mattis Welander** (no studio brand), the email becomes **mattis.welander@gmail.com**, the city becomes **Östersund**. "Halcyon Studio" and the Copenhagen address disappear from the page, the browser tab, and the sharing preview.

**The page is written in Swedish.** Menu, headline, section titles, the about paragraph, the contact form labels, its validation messages, and the note that appears after you press send. The whole page also tells browsers and Google it is Swedish, which matters for anyone searching in Swedish.

**Your one real job is named properly.** The work block shows **Studentkåren i Östersund** as the client and **Finsittning** as the title, with one honest sentence about the shoot instead of the vague filler there now. Tell me if the client should read differently (for example the exact name they use themselves) or which year to show.

**Three lines I made up are removed** unless you tell me they are true: that you deal with the person holding the camera as a selling point, that each booking covers shoot, edit and files, and that you send a quote after a few lines. If any of that is how you actually work, say which and it stays.

**Nothing gets published.** The site stays in the preview only until you say otherwise.

## Your photographs

The two pictures on the page are generated stand-ins, not your work. When you attach your own photographs in chat, I put them where the current ones sit, write a short description of what each actually shows for people using a screen reader, and delete the fake ones so nothing invented remains on the site. Until they arrive the stand-ins stay so the layout holds — harmless while unpublished.

Tell me which photo you want as the large one beside the headline and which belongs in the work block, or just send them in the order you want them used.

## What stays as is

White background, thin grey rules, the small menu, the blue dot, the pill buttons, the quiet motion. No gallery, no price list, no extra pages, no new sections.

## Technical details

- `src/lib/site.ts` — single source of content: name, email, city, nav labels, the project (client, title, kind, year, alt text, one-sentence summary), and the notes list.
- `src/routes/__root.tsx` — `lang="sv"`, Swedish default title/description/author/og tags, and the Google Fonts request stays as is (it already delivers the Swedish letters å ä ö).
- `src/routes/index.tsx` — Swedish title, description and social preview text for the page.
- `src/components/site/hero.tsx` — eyebrow "Fotografi · Östersund", Swedish headline and intro, Swedish link label.
- `src/components/site/project.tsx` — Swedish section title, real client and title, honest summary line.
- `src/components/site/about.tsx` — Swedish heading and paragraph, trimmed notes.
- `src/components/site/contact.tsx` — Swedish labels, placeholders, error messages, mailto subject and body, confirmation and copy-to-clipboard fallback.
- `src/components/site/site-footer.tsx` — Swedish copyright line with your name, city and email.
- `src/components/site/site-header.tsx` — Swedish nav labels and the mobile menu's open/close labels.
- The 404 and error screens in `__root.tsx` get Swedish wording too, since they are reachable by a mistyped address.
- Verification: a clean build log, a browser check at desktop and phone widths with screenshots, and a search of the source for any leftover English strings or the old placeholder name.
- Project memory is updated so the real name, email, city and Swedish-language rule carry into future sessions and the old placeholder note is retired.

## What I need from you

1. The photographs, attached in chat, with a word on which is which.
2. Confirmation of the client's exact name and the year of the shoot.
3. A yes or no on the three lines above.
