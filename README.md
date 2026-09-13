# Michał Gazda — Strona osobista / Personal page

Dwujęzyczna (PL/EN) statyczna strona osobista zbudowana w [Astro](https://astro.build), kopiowana z michal.gazda.info. Hostowana na GitHub Pages pod `/michal.gazda.info/`.

A bilingual (PL/EN) static personal page built with Astro, ported from michal.gazda.info. Hosted on GitHub Pages at `/michal.gazda.info/`.

## Rozwój / Development

```bash
npm install
npm run dev      # lokalny serwer dev
npm run build    # build staticzny do dist/
npm run preview  # podgląd buildu
```

## Struktura / Structure

- `src/pages/index.astro` — wersja polska (default)
- `src/pages/en/index.astro` — wersja angielska
- `src/i18n.ts` — słownik PL/EN + przełącznik języka
- `src/layouts/BaseLayout.astro` — SEO/meta/hreflang/schema.org
- `public/assets/` — CSS, JS i grafiki

## Wdrożenie / Deploy

GitHub Actions (`deploy-pages.yml`) automatycznie buduje i publikuje na GitHub Pages po push na `main`. Wymaga ręcznego włączenia Pages → Source: **GitHub Actions** w ustawieniach repo.

## Uwaga o base path / Base path note

Wszystkie linki i assety muszą być prefiksowane `import.meta.env.BASE_URL` (`/michal.gazda.info/`), bo Astro nie przepisuje bezwzględnych ścieżek w plikach `public/` na GH Pages. Weryfikacja po buildzie:

```bash
grep -roP 'href=("/[^/]' dist/  # powinno pokazywać ZERO nie-prefiksowanych href
```