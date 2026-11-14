# appsolute-landing

The website of **Appsolute**, a group of students from ITIS G. Cardano in Pavia, Italy, who build free and open source apps. The site presents the group, its first project (WingPal), the principles it works by and a privacy policy. It is available in Italian and English.

It is a static single-page site built with React, Vite and TypeScript, and published on GitHub Pages.

## Pages

| Italian | English | Content |
|---|---|---|
| `/` | `/en/` | Home: hero, projects, principles, who we are, code |
| `/privacy/` | `/en/privacy/` | Privacy policy |

Both languages render the same components. The texts live in `src/i18n/it.ts` and `src/i18n/en.ts`, which must keep the same keys. There is no i18n library.

## Getting started

You need Node.js 22 or newer.

```sh
npm install
npm run dev      # development server with hot reload
npm run build    # type check and production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```text
index.html, en/, privacy/   entry pages (one per language and page)
src/
  App.tsx, App.css          page sections and their styles
  main.tsx                  entry point, imports the design system styles
  i18n/it.ts, en.ts         all the texts, in both languages
  assets/                   logos and images
  ui/appsolute/             copy of the Appsolute design system
```

## Design system

`src/ui/appsolute/` is a copy of the Appsolute design system (`Assets/appsolute-ui/` in the Appsolute monorepo). Do not edit it by hand: change the design system at its source and copy it again from the monorepo root:

```sh
rsync -a --delete Assets/appsolute-ui/ Landings/Company/src/ui/appsolute/
```

Styling follows a few rules:

- Colors, shadows and spacing come only from the design system's CSS variables (`var(--accent)`, `var(--space-4)`, ...), never from hard-coded values.
- Light and dark themes come from the tokens. The dark theme is set with `data-theme="dark"` on `<html>`, and the choice is saved in the browser under the key `appsolute-theme`.
- Text contrast is at least 4.5:1, the focus ring is always visible and animations respect `prefers-reduced-motion`.

## Deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/pages.yml`: it installs the dependencies, builds the site and publishes `dist/` to GitHub Pages.

## Privacy

The site uses no cookies and no analytics. The only thing stored in the browser is the theme choice. Fonts are loaded from Google Fonts and the site is hosted on GitHub Pages, as explained in the privacy policy page.

## Contributing

Issues and pull requests are welcome. For a bigger change, please open an issue first so we can talk about it. For translations, keep `it.ts` and `en.ts` in sync.
