# Atharva Penkar · Portfolio

Personal portfolio site, styled as a technical datasheet.

**Live:** https://atharva-penkar.github.io/portfolio/

## Stack

- React with Vite
- React Router
- CSS Modules with CSS custom properties for design tokens
- IBM Plex Sans and IBM Plex Mono, self-hosted through Fontsource
- Motion for scroll animation
- Deployed to GitHub Pages with GitHub Actions

## Run locally

Requires Node.js (current LTS).

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   one folder per component, with its CSS module
  data/         profile, experience, projects and skills content
  figures/      project figures (REPL session, pipeline diagram)
  pages/        home and 404 pages
  styles/       design tokens and global styles
  utils/        scroll and history handling
```

Content lives in `src/data`, so updating the site rarely means touching components.