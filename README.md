# Chonghui Zhang — Research Portfolio

A bilingual, dependency-free research website deployed from the root of this GitHub Pages user repository. All content is pre-rendered into HTML; reading and navigation do not require JavaScript or browser storage.

## Editing content

- Add or edit expandable projects, publications, education, experience, and skills in `assets/content.js`.
- Edit interface text and page generation in `scripts/build-static.mjs`, then run `node scripts/build-static.mjs`.
- Adjust the visual system and responsive layout in `assets/styles.css`.
- Replace the portrait at `assets/chonghui-zhang-dark.png` while keeping the same filename, or update its path in `index.html`.

Primary sections live at `/research/`, `/projects/`, `/publications/`, and `/about/`; matching Chinese pages live under `/zh/`. Keep the public name as `Chonghui Zhang` in both languages.

All asset links are relative, so the site can be previewed locally with any static HTTP server. For example: `python -m http.server 8000`.

## Publishing

GitHub Pages should publish the `master` branch from the repository root. The `.nojekyll` marker prevents Jekyll processing. The previous generated blog is retained under `legacy-site/` and in Git history.
