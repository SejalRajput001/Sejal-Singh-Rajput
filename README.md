# Sejal Singh Rajput — Academic Portfolio

A static, single-page academic website built from Sejal Singh Rajput's CV — designed for
Forensic Science faculty and research applications. No build step, no dependencies beyond
Google Fonts — ready to publish as-is.

## What's inside
```
index.html      – all page content and styling (the "case file" visual theme), inline
script.js       – tiny scroll-based nav highlight
assets/
  profile.jpg                 – portrait (extracted from the CV)
  Sejal_Singh_Rajput_CV.pdf   – original CV, linked from the "Download CV" button
```

## Publish it on GitHub Pages (free)

1. Create a new GitHub repository — name it anything, e.g. `sejal-portfolio`
   (or `<your-username>.github.io` if you want it at the root of your GitHub domain).
2. Upload all the files in this folder to the repository, keeping the same structure
   (drag-and-drop on github.com works, or use `git`):
   ```bash
   git init
   git add .
   git commit -m "Launch portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
6. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   (it can take a minute or two to go live).

## Editing content later
- All text lives directly in `index.html` — search for the section you want
  (`Education`, `Experience`, `Exhibits`, `Certifications`, `Contact`) and edit in place.
- Colors and fonts are defined once near the top of the `<style>` block in `index.html`
  under `:root` — change a value there and it updates everywhere.
- To swap the photo, replace `assets/profile.jpg` with a new image of the same name,
  or update the `src` in `index.html`.

## A note on privacy
Sensitive personal details from the original CV — date of birth, home address, and
parents' names — were intentionally left off this public site. Only professional contact
details (email, phone, city) are shown. Add anything back in `index.html` if you'd like.
