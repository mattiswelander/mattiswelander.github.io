<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Static export for GitHub Pages: `npm run build:static` (scripts/export-static.mjs) prerenders the 4 pages and writes dist/ with media from static-media/ — GitHub Pages cannot run the server. Re-download into static-media/ when photos/video change.
