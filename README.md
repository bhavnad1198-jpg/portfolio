# Bhavna Dehadray — Portfolio website

Static site. No build step: open `index.html` through any web server or deploy the folder as-is
(Netlify drop, Vercel, GitHub Pages, Cloudflare Pages).

## Structure
- `index.html` — shell, SEO meta, structured data, no-JS fallback
- `css/site.css` — design tokens (top of file), components, project themes, responsive and reduced-motion rules
- `js/data.js` — **edit this**: email, LinkedIn, résumé path, experience timeline, project cards
- `js/cases.js` — the five case studies (shared framework + project-specific components)
- `js/ui.js` — reusable components (image, figure, section header, tiles, hero)
- `js/app.js` — routing (`#jsw`, `#about`…), page transitions, lightbox, galleries, header behaviour
- `assets/img/` — WebP images cropped from the portfolio PDF (full size + 900px variants)

## To finish
1. Add your LinkedIn URL in `js/data.js` → `SITE.linkedin`.
2. Save your résumé as `assets/Bhavna_Dehadray_Resume.pdf`. The site detects it and switches
   "Request résumé" to "Download résumé" automatically.
3. Add `period` (e.g. `'2024 — Present'`) and employer details to `EXPERIENCE` in `js/data.js`.

Local preview: `python3 -m http.server` in this folder, then open http://localhost:8000
