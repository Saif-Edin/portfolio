# Website Design — saifedin.dev

**Data:** 2026-06-18
**Approccio scelto:** One-page + pagine progetto dedicate
**Riferimento stile:** `Style.md`

---

## Contesto

Portfolio personale di Saif Edin Gharsallah, sviluppatore full-stack e studente di Ingegneria Informatica a UniPa. Sito bilingue IT/EN, costruito in locale e pubblicato su Vercel quando il dominio `saifedin.dev` sarà registrato.

---

## Stack tecnico

- **Framework:** Astro 4 (output statico)
- **Stile:** CSS vanilla con variabili custom — nessun framework UI
- **Font:** Syne + Inter + JetBrains Mono via Google Fonts
- **i18n:** oggetti JS statici (nessuna libreria)
- **Deploy:** Vercel (static)

---

## Struttura file

```
src/
├── layouts/
│   └── Base.astro              ← HTML base, meta tag, font, navbar, footer
├── pages/
│   ├── index.astro             ← landing page (Hero + About + Stack + Projects + Contact)
│   └── projects/
│       ├── afam.astro          ← pagina progetto AFAM Experience Platform
│       └── restaurant.astro   ← pagina progetto Restaurant Manager AI
├── components/
│   ├── Hero.astro
│   ├── About.astro
│   ├── Stack.astro
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   └── Contact.astro
├── i18n/
│   ├── it.ts                   ← stringhe in italiano
│   └── en.ts                   ← stringhe in inglese
└── styles/
    └── global.css              ← variabili CSS dalla palette Style.md
```

---

## Sezioni — Landing page

### Hero
- Nome `SaifEdin` in Syne 800, dimensione grande (clamp 3rem → 6rem)
- Tagline sotto in Inter 400: "Full-stack developer · Ingegneria Informatica @ UniPa"
- Due CTA: "Vedi i progetti" (scroll anchor a #projects) · "Contattami" (scroll anchor a #contact)
- Toggle IT/EN in navbar in alto a destra

### About
- Due colonne su desktop, una colonna su mobile
- Sinistra: bio estesa (da Style.md), aggiornabile da `i18n/`
- Destra: lista sintetica tech stack principale
- Nessuna foto — lo stile minimal regge senza

### Stack
- Griglia di pill/tag per tecnologia, raggruppate per categoria:
  - **Frontend:** HTML, CSS, JavaScript
  - **Backend:** PHP, Java, Python, C#, C, R
  - **Database:** MySQL, SQLite
  - **Tools:** Git, VS Code
- Tecnologie "in apprendimento" (React, Vue, Angular) con stile visivo distinto: bordo tratteggiato + label "learning"

### Progetti
- Griglia 2 colonne desktop / 1 colonna mobile
- Ogni card: titolo, descrizione breve, tag tech, link alla pagina dedicata
- Badge "In progress" per progetti WIP
- Al click: navigazione alla pagina `/projects/[slug]`

### Contatti
- Tre link in riga con tipografia grande:
  - `hello@saifedin.dev`
  - `github.com/Saif-Edin`
  - `linkedin.com/in/saif-edin-gharsallah`
- Nessun form di contatto

---

## Pagine progetto

Layout a colonna unica, larghezza massima contenuta (max-width: 720px centrato):

1. **Breadcrumb:** ← Progetti
2. **Titolo** (Syne 800)
3. **Badge stato** (In progress / Completato)
4. **Descrizione completa** del progetto
5. **Il mio ruolo** — cosa ho fatto specificamente
6. **Tech stack usato** — pill delle tecnologie
7. **Screenshot** — placeholder grigio ora, immagini reali quando disponibili
8. **Link GitHub** — bottone CTA

### Progetti attivi
- **AFAM Experience Platform** — Sistema per catalogazione e condivisione di esperienze, CV e materiali da parte degli studenti AFAM. Materia: Ingegneria del Software.
- **Restaurant Manager AI** — Gestionale per ristorante con chat AI: ordinazioni a tavolo, etichette vino via foto, gestione menu via app mobile e sito locale. Materia: Programmazione Web e Mobile.

---

## i18n

Toggle IT/EN in navbar. La preferenza viene salvata in `localStorage` (default: italiano).

Struttura degli oggetti:
```ts
// src/i18n/it.ts
export const it = {
  nav: { projects: "Progetti", contact: "Contatti" },
  hero: {
    tagline: "Full-stack developer · Ingegneria Informatica @ UniPa",
    cta_projects: "Vedi i progetti",
    cta_contact: "Contattami"
  },
  about: { title: "Chi sono", body: "..." },
  stack: { title: "Stack", learning: "in apprendimento" },
  projects: { title: "Progetti", wip: "In progress" },
  contact: { title: "Contatti" }
}
```

```ts
// src/i18n/en.ts
export const en = {
  nav: { projects: "Projects", contact: "Contact" },
  hero: {
    tagline: "Full-stack developer · Computer Engineering @ UniPa",
    cta_projects: "View projects",
    cta_contact: "Get in touch"
  },
  about: { title: "About", body: "..." },
  stack: { title: "Stack", learning: "learning" },
  projects: { title: "Projects", wip: "In progress" },
  contact: { title: "Contact" }
}
```

---

## CSS — variabili globali

```css
/* src/styles/global.css */
:root {
  --color-bg:       #F9F9F7;
  --color-text:     #0F0F0F;
  --color-soft:     #888888;
  --color-border:   #E8E8E4;
  --color-primary:  #C84B2F;

  --font-heading: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

---

## Performance e responsive

- Font caricati con `font-display: swap`
- Tipografia fluida con `clamp()` — nessun breakpoint manuale per i font
- Layout responsive con CSS Grid
- Output Astro: HTML statico puro, zero JS in pagina tranne il toggle lingua

---

## Fuori scope

- Blog o sezione articoli
- Dark mode
- Animazioni complesse
- Form di contatto
- CMS o backend di alcun tipo
