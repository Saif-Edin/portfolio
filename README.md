# saifedin.it

Portfolio personale di **Saif Edin Gharsallah**: full-stack developer e studente di Ingegneria Informatica all'Università di Palermo.

Sito statico bilingue (IT/EN) costruito con [Astro](https://astro.build) e pubblicato su [Vercel](https://vercel.com).

## Stack

- **Astro 7**: output statico, nessun framework JS lato client
- **CSS** scritto a mano, con variabili per colori e tipografia
- **Font self-hosted** via Fontsource (Syne, Inter, JetBrains Mono): nessuna richiesta a Google Fonts
- **i18n** con i dizionari in `src/i18n/`; la lingua scelta resta salvata in `localStorage`
- **Sitemap** generata con `@astrojs/sitemap`

## Struttura

```text
src/
├── components/   # sezioni della home (Hero, About, Stack, Projects, Contact)
├── i18n/         # traduzioni it.ts / en.ts
├── layouts/      # Base.astro: head, meta SEO/Open Graph, nav, footer, cambio lingua
├── pages/        # index, 404 e pagine dei progetti in projects/
└── styles/       # global.css
public/           # favicon, og.png, robots.txt
brand/            # identità visiva (Style.md) e note
```

## Sviluppo

Richiede Node.js ≥ 22.12.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # build di produzione in ./dist
npm run preview   # anteprima della build
```

## Aggiungere un progetto

1. Aggiungi la card in `src/components/Projects.astro`
2. Aggiungi le traduzioni in `src/i18n/it.ts` ed `en.ts` (`projects.descriptions` e `projectPage`)
3. Crea la pagina in `src/pages/projects/<nome>.astro`
