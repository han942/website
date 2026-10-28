# Anthony Han — Personal Website

Abstract information about myself, just take a look on my academic & professional journey.

## Live pages

- Main portfolio: <https://han942.github.io/website/>
- Detailed bullet version: <https://han942.github.io/website/specific/>
- The previous `/index2.html` URL redirects to the main portfolio.

## Source structure

- `index.html`: main portfolio, styled by `assets/css/style2.css` with behavior in `assets/js/script2.js`.
- `specific/index.html`: detailed bullet version, styled by `assets/css/style.css`.
- `assets/`: shared styles, scripts, and images. Pages under `specific/` use `../assets/` paths.
- `projects/global-supermarket/dashboard.html`: standalone dashboard with embedded data; report and source links point to the analysis repository.

GitHub Pages publishes the `main` branch from the repository root. Keep `.nojekyll` so the files are served directly. The `/specific` URL resolves to `/specific/` and its `index.html` file.

## Before publishing

Check local asset and project links from both page locations, and verify language/theme switching. Keep credentials, environment files, editor settings, caches, and temporary output out of commits using `.gitignore`; `assets/` and `projects/` must remain tracked.

Résumé links are omitted until a PDF or public résumé URL is available. Add them to both pages when the file is ready.
