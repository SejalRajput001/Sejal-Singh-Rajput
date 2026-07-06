# Sejal Singh Rajput — Academic Portfolio

A single-page academic/research portfolio site for Sejal Singh Rajput (Forensic Science),
built as a static site — no build step, no dependencies to install. Ready for GitHub Pages.

## What's inside
```
index.html        → the whole page
css/style.css      → styles ("case file" design system)
js/script.js       → tiny script for the fingerprint reveal animation
```

## Deploy to GitHub Pages (5 minutes)

1. Create a new repository on GitHub, e.g. `sejal-portfolio`.
2. Upload these three items (`index.html`, `css/`, `js/`) to the root of the repo
   — either by dragging them into the GitHub web UI, or via git:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sejal-portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Click **Save**.
5. Wait 1–2 minutes. Your site will be live at:
   ```
   https://<your-username>.github.io/sejal-portfolio/
   ```

## Editing content

Everything is in `index.html` as plain HTML — search for the section you want
(Education, Experience, Research & Achievements, Certifications, Toolkit) and
edit the text directly. Colors, fonts and spacing live in `css/style.css`
under the `:root` variables at the top if you want to adjust the palette.

## Notes
- No frameworks, no npm install — just open `index.html` in a browser to preview locally.
- Fonts (JetBrains Mono, Source Serif 4) load from Google Fonts via CDN.
- Fully responsive down to mobile, and respects reduced-motion preferences.
