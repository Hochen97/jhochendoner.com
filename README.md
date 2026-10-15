# jhochendoner.com

Jacob Hochendoner's personal site. Static HTML — no framework, no build step.

- `site/` is the document root deployed to GitHub Pages via `.github/workflows/publish.yml`.
- `site/index.html` is the full page (self-contained; styles and logo inlined).
- `site/favicon*` / `site/apple-touch-icon*` are the site icons.

To preview locally: serve the `site/` directory with any static server, e.g.
`python3 -m http.server -d site`.
