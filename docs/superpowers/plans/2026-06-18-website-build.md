# Website Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Costruire il sito portfolio saifedin.dev in Astro: one-page con Hero, About, Stack, Progetti, Contatti + pagine dedicate per ogni progetto, bilingue IT/EN.

**Architecture:** Astro 4 static output nella cartella `site/` dentro il repo. CSS vanilla con variabili custom. i18n lato client con oggetti JS e `data-i18n` attributes — nessuna libreria esterna. Deploy su Vercel puntando alla cartella `site/`.

**Tech Stack:** Astro 4, TypeScript, CSS vanilla, Google Fonts (Syne + Inter + JetBrains Mono)

## Global Constraints

- Cartella progetto Astro: `site/` (dentro `/Users/saif/Documents/portfolio/`)
- Dev server: `http://localhost:4321`
- Palette esatta: `--color-bg: #F9F9F7` · `--color-text: #0F0F0F` · `--color-soft: #888888` · `--color-border: #E8E8E4` · `--color-primary: #C84B2F`
- Font: Syne (titoli, pesi 600/700/800) · Inter (corpo, pesi 400/500) · JetBrains Mono (mono, peso 400)
- Handle display: `SaifEdin` (S e E maiuscole)
- Email: `hello@saifedin.dev`
- GitHub: `github.com/Saif-Edin`
- LinkedIn: `linkedin.com/in/saif-edin-gharsallah`
- Lingua default: italiano
- Commit message formato: `tipo: descrizione breve`
- NON committare MyInfo.md

---

### Task 1: Scaffold Astro + CSS foundation

**Files:**
- Create: `site/` (directory Astro)
- Create: `site/src/styles/global.css`
- Modify: `site/astro.config.mjs`

**Interfaces:**
- Produces: progetto Astro funzionante su `http://localhost:4321`, variabili CSS disponibili globalmente

- [ ] **Step 1: Creare il progetto Astro**

```bash
cd /Users/saif/Documents/portfolio
npm create astro@latest site -- --template minimal --no-install --no-git --typescript strict
cd site
npm install
```

Expected: cartella `site/` creata con `package.json`, `astro.config.mjs`, `src/pages/index.astro`

- [ ] **Step 2: Verificare che il dev server parta**

```bash
npm run dev
```

Expected: output con `http://localhost:4321` — aprire nel browser e vedere la pagina di default Astro.
Lascia il server in esecuzione in un terminale separato per tutti i task seguenti.

- [ ] **Step 3: Sostituire `site/src/styles/global.css`** (se non esiste, crearlo):

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-bg:      #F9F9F7;
  --color-text:    #0F0F0F;
  --color-soft:    #888888;
  --color-border:  #E8E8E4;
  --color-primary: #C84B2F;

  --font-heading: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}

html {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
}

img { max-width: 100%; display: block; }
a { color: inherit; }
```

- [ ] **Step 4: Aggiornare `site/astro.config.mjs`**

```js
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
})
```

- [ ] **Step 5: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/
git commit -m "feat: scaffold Astro project with CSS foundation"
```

---

### Task 2: Sistema i18n

**Files:**
- Create: `site/src/i18n/it.ts`
- Create: `site/src/i18n/en.ts`
- Create: `site/src/i18n/index.ts`

**Interfaces:**
- Produces: oggetti `it` e `en` con tutte le stringhe del sito; funzione `t(lang)` usata da Base.astro nel Task 3

- [ ] **Step 1: Creare `site/src/i18n/it.ts`**

```ts
export const it = {
  nav: {
    projects: "Progetti",
    contact: "Contatti",
    toggle: "EN"
  },
  hero: {
    eyebrow: "Full-stack developer",
    tagline: "Ingegneria Informatica · sviluppo web end-to-end, dal frontend al backend.",
    cta_projects: "Vedi i progetti",
    cta_contact: "Contattami"
  },
  about: {
    title: "Chi sono",
    body: "Sono Saif Edin Gharsallah, sviluppatore full-stack e studente di Ingegneria Informatica all'Università di Palermo. Costruisco applicazioni web end-to-end, dal frontend al backend, con attenzione alla qualità del codice e all'esperienza utente. Attualmente aperto a collaborazioni e progetti freelance."
  },
  stack: {
    title: "Stack",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools"
    },
    learning: "in apprendimento"
  },
  projects: {
    title: "Progetti",
    wip: "In progress",
    view: "Vedi progetto →",
    back: "← Progetti"
  },
  contact: {
    title: "Contatti"
  }
} as const

export type Translations = typeof it
```

- [ ] **Step 2: Creare `site/src/i18n/en.ts`**

```ts
import type { Translations } from './it'

export const en: Translations = {
  nav: {
    projects: "Projects",
    contact: "Contact",
    toggle: "IT"
  },
  hero: {
    eyebrow: "Full-stack developer",
    tagline: "Computer Engineering · full-stack web development, front to back.",
    cta_projects: "View projects",
    cta_contact: "Get in touch"
  },
  about: {
    title: "About",
    body: "I'm Saif Edin Gharsallah, a full-stack developer and Computer Engineering student at the University of Palermo. I build web applications end-to-end, from frontend to backend, with a focus on code quality and user experience. Currently open to collaborations and freelance projects."
  },
  stack: {
    title: "Stack",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools"
    },
    learning: "learning"
  },
  projects: {
    title: "Projects",
    wip: "In progress",
    view: "View project →",
    back: "← Projects"
  },
  contact: {
    title: "Contact"
  }
}
```

- [ ] **Step 3: Creare `site/src/i18n/index.ts`**

```ts
import { it, type Translations } from './it'
import { en } from './en'

export type Lang = 'it' | 'en'
export type { Translations }

export function t(lang: Lang): Translations {
  return lang === 'en' ? en : it
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/i18n/
git commit -m "feat: add i18n system with Italian and English translations"
```

---

### Task 3: Base layout + Navbar

**Files:**
- Create: `site/src/layouts/Base.astro`

**Interfaces:**
- Consumes: `it`, `en` da `src/i18n/it.ts` e `src/i18n/en.ts`
- Produces: layout `<Base>` usato da tutte le pagine; attributo `data-lang` su `<html>`; funzione globale `window.toggleLang()`; stile navbar

- [ ] **Step 1: Creare `site/src/layouts/Base.astro`**

```astro
---
import { it } from '../i18n/it'
import { en } from '../i18n/en'
import '../styles/global.css'

interface Props {
  title?: string
}
const { title = 'SaifEdin — Full-stack developer' } = Astro.props
---

<!doctype html>
<html lang="it" data-lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="SaifEdin — Full-stack developer & Computer Engineering student" />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <nav class="nav">
      <a href="/" class="nav-logo">SaifEdin</a>
      <div class="nav-links">
        <a href="/#projects" data-i18n="nav.projects">Progetti</a>
        <a href="/#contact" data-i18n="nav.contact">Contatti</a>
        <button class="lang-toggle" onclick="window.toggleLang()" data-i18n="nav.toggle">EN</button>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <span>SaifEdin · {new Date().getFullYear()}</span>
    </footer>

    <script define:vars={{ it, en }}>
      const STORAGE_KEY = 'lang'

      function updateTranslations(translations) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n')
          const value = key.split('.').reduce((obj, k) => obj?.[k], translations)
          if (value !== undefined) el.textContent = value
        })
      }

      function applyLang(lang) {
        document.documentElement.setAttribute('data-lang', lang)
        document.documentElement.lang = lang
        localStorage.setItem(STORAGE_KEY, lang)
        updateTranslations(lang === 'en' ? en : it)
      }

      window.toggleLang = function () {
        const current = document.documentElement.getAttribute('data-lang')
        applyLang(current === 'it' ? 'en' : 'it')
      }

      // Apply saved lang on load
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && saved !== 'it') applyLang(saved)
    </script>
  </body>
</html>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    color: var(--color-text);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links a {
    font-size: 0.875rem;
    text-decoration: none;
    color: var(--color-soft);
    transition: color 0.15s;
  }

  .nav-links a:hover { color: var(--color-text); }

  .lang-toggle {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    background: none;
    border: 1px solid var(--color-border);
    color: var(--color-soft);
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }

  .lang-toggle:hover {
    border-color: var(--color-text);
    color: var(--color-text);
  }

  .footer {
    border-top: 1px solid var(--color-border);
    padding: 2rem;
    text-align: center;
    font-size: 0.75rem;
    color: var(--color-soft);
    font-family: var(--font-mono);
  }
</style>
```

- [ ] **Step 2: Aggiornare `site/src/pages/index.astro`** per usare il layout e verificare che funzioni:

```astro
---
import Base from '../layouts/Base.astro'
---

<Base>
  <p style="padding: 4rem 2rem;">Test layout</p>
</Base>
```

- [ ] **Step 3: Verificare nel browser**

Aprire `http://localhost:4321`:
- Navbar visibile con logo "SaifEdin", link "Progetti" e "Contatti", bottone "EN"
- Footer visibile in basso
- Click su "EN" → testo bottone diventa "IT"
- Ricaricare la pagina → la lingua scelta persiste

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/layouts/ site/src/pages/index.astro
git commit -m "feat: add Base layout with sticky navbar and i18n toggle"
```

---

### Task 4: Hero component

**Files:**
- Create: `site/src/components/Hero.astro`

**Interfaces:**
- Produces: sezione `<Hero>` con id `hero`, usata in `index.astro` nel Task 9

- [ ] **Step 1: Creare `site/src/components/Hero.astro`**

```astro
---
---

<section class="hero" id="hero">
  <div class="hero-inner">
    <span class="hero-eyebrow" data-i18n="hero.eyebrow">Full-stack developer</span>
    <h1 class="hero-name">SaifEdin</h1>
    <p class="hero-tagline" data-i18n="hero.tagline">
      Ingegneria Informatica · sviluppo web end-to-end, dal frontend al backend.
    </p>
    <div class="hero-ctas">
      <a href="#projects" class="cta-primary" data-i18n="hero.cta_projects">Vedi i progetti</a>
      <a href="#contact" class="cta-ghost" data-i18n="hero.cta_contact">Contattami</a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: calc(100vh - 57px);
    display: flex;
    align-items: center;
    padding: 4rem 2rem;
  }

  .hero-inner {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 1.5rem;
  }

  .hero-name {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: clamp(3.5rem, 10vw, 7rem);
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }

  .hero-tagline {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-soft);
    max-width: 50ch;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  .hero-ctas {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-primary {
    background: var(--color-primary);
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.875rem 1.75rem;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.15s;
  }

  .cta-primary:hover { opacity: 0.85; }

  .cta-ghost {
    border: 1px solid var(--color-text);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.875rem 1.75rem;
    text-decoration: none;
    display: inline-block;
    transition: border-color 0.15s, color 0.15s;
  }

  .cta-ghost:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
</style>
```

- [ ] **Step 2: Aggiungere Hero a `site/src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
---

<Base>
  <Hero />
</Base>
```

- [ ] **Step 3: Verificare nel browser**

Aprire `http://localhost:4321`:
- Nome "SaifEdin" visibile grande in Syne 800
- Eyebrow in rosso terracotta con font mono
- Tagline in grigio sotto il nome
- Due bottoni CTA: uno rosso pieno, uno con bordo
- Toggle EN → testi cambiano in inglese

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/components/Hero.astro site/src/pages/index.astro
git commit -m "feat: add Hero section"
```

---

### Task 5: About component

**Files:**
- Create: `site/src/components/About.astro`

**Interfaces:**
- Produces: sezione `<About>` con id `about`, usata in `index.astro` nel Task 9

- [ ] **Step 1: Creare `site/src/components/About.astro`**

```astro
---
---

<section class="about" id="about">
  <div class="about-inner">
    <h2 class="section-title" data-i18n="about.title">Chi sono</h2>
    <div class="about-grid">
      <p class="about-body" data-i18n="about.body">
        Sono Saif Edin Gharsallah, sviluppatore full-stack e studente di Ingegneria Informatica
        all'Università di Palermo. Costruisco applicazioni web end-to-end, dal frontend al backend,
        con attenzione alla qualità del codice e all'esperienza utente.
        Attualmente aperto a collaborazioni e progetti freelance.
      </p>
      <div class="about-meta">
        <div class="meta-item">
          <span class="meta-label">Università</span>
          <span class="meta-value">UniPa — Ingegneria Informatica</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Anno</span>
          <span class="meta-value">3°</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Posizione</span>
          <span class="meta-value">Palermo, IT</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Status</span>
          <span class="meta-value meta-open">Open to work</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 2rem;
    border-top: 1px solid var(--color-border);
  }

  .about-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 4rem;
    align-items: start;
  }

  .about-body {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-text);
  }

  .about-meta {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .meta-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--color-soft);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .meta-value {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .meta-open {
    color: var(--color-primary);
  }

  @media (max-width: 700px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
```

- [ ] **Step 2: Aggiungere About a `site/src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
import About from '../components/About.astro'
---

<Base>
  <Hero />
  <About />
</Base>
```

- [ ] **Step 3: Verificare nel browser**

- Sezione "Chi sono" visibile dopo lo scroll
- Layout a due colonne (bio + meta) su desktop
- Toggle EN → titolo diventa "About", bio in inglese

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/components/About.astro site/src/pages/index.astro
git commit -m "feat: add About section"
```

---

### Task 6: Stack component

**Files:**
- Create: `site/src/components/Stack.astro`

**Interfaces:**
- Produces: sezione `<Stack>` con id `stack`, usata in `index.astro` nel Task 9

- [ ] **Step 1: Creare `site/src/components/Stack.astro`**

```astro
---
const frontend = ['HTML', 'CSS', 'JavaScript']
const frontendLearning = ['React', 'Vue', 'Angular']
const backend = ['PHP', 'Java', 'Python', 'C#', 'C', 'R']
const database = ['MySQL', 'SQLite']
const tools = ['Git', 'VS Code', 'macOS']
---

<section class="stack" id="stack">
  <div class="stack-inner">
    <h2 class="section-title" data-i18n="stack.title">Stack</h2>

    <div class="stack-groups">
      <div class="stack-group">
        <span class="group-label" data-i18n="stack.categories.frontend">Frontend</span>
        <div class="pills">
          {frontend.map(tech => <span class="pill">{tech}</span>)}
          {frontendLearning.map(tech => (
            <span class="pill pill--learning">
              {tech}
              <span class="learning-badge" data-i18n="stack.learning">in apprendimento</span>
            </span>
          ))}
        </div>
      </div>

      <div class="stack-group">
        <span class="group-label" data-i18n="stack.categories.backend">Backend</span>
        <div class="pills">
          {backend.map(tech => <span class="pill">{tech}</span>)}
        </div>
      </div>

      <div class="stack-group">
        <span class="group-label" data-i18n="stack.categories.database">Database</span>
        <div class="pills">
          {database.map(tech => <span class="pill">{tech}</span>)}
        </div>
      </div>

      <div class="stack-group">
        <span class="group-label" data-i18n="stack.categories.tools">Tools</span>
        <div class="pills">
          {tools.map(tech => <span class="pill">{tech}</span>)}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .stack {
    padding: 6rem 2rem;
    border-top: 1px solid var(--color-border);
  }

  .stack-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
  }

  .stack-groups {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .stack-group {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
    align-items: start;
  }

  .group-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-soft);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-top: 0.4rem;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .pill {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    white-space: nowrap;
  }

  .pill--learning {
    border-style: dashed;
    color: var(--color-soft);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  .learning-badge {
    font-size: 0.65rem;
    color: var(--color-soft);
    font-family: var(--font-body);
    font-style: italic;
  }

  @media (max-width: 600px) {
    .stack-group {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
</style>
```

- [ ] **Step 2: Aggiungere Stack a `site/src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
import About from '../components/About.astro'
import Stack from '../components/Stack.astro'
---

<Base>
  <Hero />
  <About />
  <Stack />
</Base>
```

- [ ] **Step 3: Verificare nel browser**

- Sezione Stack visibile con gruppi Frontend / Backend / Database / Tools
- Tecnologie in pill con bordo solido
- React, Vue, Angular con bordo tratteggiato e label "in apprendimento"
- Toggle EN → label "learning"

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/components/Stack.astro site/src/pages/index.astro
git commit -m "feat: add Stack section with learning badges"
```

---

### Task 7: Projects section + ProjectCard

**Files:**
- Create: `site/src/components/ProjectCard.astro`
- Create: `site/src/components/Projects.astro`

**Interfaces:**
- Produces: sezione `<Projects>` con id `projects`; componente `<ProjectCard>` riusabile; usati in `index.astro` nel Task 9

- [ ] **Step 1: Creare `site/src/components/ProjectCard.astro`**

```astro
---
interface Props {
  title: string
  description: string
  tech: string[]
  href: string
  wip?: boolean
}

const { title, description, tech, href, wip = false } = Astro.props
---

<a class="card" href={href}>
  <div class="card-header">
    <h3 class="card-title">{title}</h3>
    {wip && <span class="wip-badge" data-i18n="projects.wip">In progress</span>}
  </div>
  <p class="card-desc">{description}</p>
  <div class="card-footer">
    <div class="card-tech">
      {tech.map(t => <span class="tech-tag">{t}</span>)}
    </div>
    <span class="card-link" data-i18n="projects.view">Vedi progetto →</span>
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.75rem;
    border: 1px solid var(--color-border);
    text-decoration: none;
    color: var(--color-text);
    transition: border-color 0.15s;
  }

  .card:hover {
    border-color: var(--color-primary);
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .card-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.1rem;
  }

  .wip-badge {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    padding: 0.2rem 0.5rem;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .card-desc {
    font-size: 0.9rem;
    color: var(--color-soft);
    line-height: 1.6;
    flex: 1;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: auto;
  }

  .card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tech-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--color-soft);
    background: var(--color-border);
    padding: 0.15rem 0.4rem;
  }

  .card-link {
    font-size: 0.8rem;
    color: var(--color-primary);
    white-space: nowrap;
    flex-shrink: 0;
  }
</style>
```

- [ ] **Step 2: Creare `site/src/components/Projects.astro`**

```astro
---
import ProjectCard from './ProjectCard.astro'

const projects = [
  {
    title: 'AFAM Experience Platform',
    description: 'Sistema per la catalogazione e la condivisione volontaria di esperienze, CV e materiali da parte degli studenti AFAM.',
    tech: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    href: '/projects/afam',
    wip: true,
  },
  {
    title: 'Restaurant Manager AI',
    description: 'Gestionale per ristorante con chat AI: ordinazioni a tavolo, etichette vino via foto, gestione menu via app mobile.',
    tech: ['JavaScript', 'Python', 'SQL', 'AI API'],
    href: '/projects/restaurant',
    wip: true,
  },
]
---

<section class="projects" id="projects">
  <div class="projects-inner">
    <h2 class="section-title" data-i18n="projects.title">Progetti</h2>
    <div class="projects-grid">
      {projects.map(p => (
        <ProjectCard
          title={p.title}
          description={p.description}
          tech={p.tech}
          href={p.href}
          wip={p.wip}
        />
      ))}
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 6rem 2rem;
    border-top: 1px solid var(--color-border);
  }

  .projects-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 3: Aggiungere Projects a `site/src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
import About from '../components/About.astro'
import Stack from '../components/Stack.astro'
import Projects from '../components/Projects.astro'
---

<Base>
  <Hero />
  <About />
  <Stack />
  <Projects />
</Base>
```

- [ ] **Step 4: Verificare nel browser**

- Sezione "Progetti" con griglia 2 colonne
- Ogni card: titolo, descrizione, tech tags, link "Vedi progetto →"
- Badge rosso "In progress" su entrambe le card
- Hover su card → bordo diventa rosso
- Click su card → 404 (normale, le pagine progetto non esistono ancora)

- [ ] **Step 5: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/components/ProjectCard.astro site/src/components/Projects.astro site/src/pages/index.astro
git commit -m "feat: add Projects section with ProjectCard component"
```

---

### Task 8: Contact component

**Files:**
- Create: `site/src/components/Contact.astro`

**Interfaces:**
- Produces: sezione `<Contact>` con id `contact`, usata in `index.astro` nel Task 9

- [ ] **Step 1: Creare `site/src/components/Contact.astro`**

```astro
---
const links = [
  { label: 'hello@saifedin.dev', href: 'mailto:hello@saifedin.dev' },
  { label: 'github.com/Saif-Edin', href: 'https://github.com/Saif-Edin' },
  { label: 'linkedin.com/in/saif-edin-gharsallah', href: 'https://linkedin.com/in/saif-edin-gharsallah' },
]
---

<section class="contact" id="contact">
  <div class="contact-inner">
    <h2 class="section-title" data-i18n="contact.title">Contatti</h2>
    <ul class="contact-links">
      {links.map(link => (
        <li>
          <a href={link.href} class="contact-link" target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</section>

<style>
  .contact {
    padding: 6rem 2rem;
    border-top: 1px solid var(--color-border);
  }

  .contact-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
  }

  .contact-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-link {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: var(--color-text);
    text-decoration: none;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1rem;
    display: block;
    transition: color 0.15s, border-color 0.15s;
  }

  .contact-link:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
</style>
```

- [ ] **Step 2: Aggiungere Contact a `site/src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
import About from '../components/About.astro'
import Stack from '../components/Stack.astro'
import Projects from '../components/Projects.astro'
import Contact from '../components/Contact.astro'
---

<Base>
  <Hero />
  <About />
  <Stack />
  <Projects />
  <Contact />
</Base>
```

- [ ] **Step 3: Verificare nel browser**

- Sezione "Contatti" visibile in fondo alla pagina
- Tre link in colonna: email, GitHub, LinkedIn
- Hover → testo e bordo diventano rosso
- Click su link → si apre in nuova tab

- [ ] **Step 4: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/components/Contact.astro site/src/pages/index.astro
git commit -m "feat: add Contact section"
```

---

### Task 9: Landing page finale

**Files:**
- Modify: `site/src/pages/index.astro` (già aggiornato nei task precedenti — questo task verifica il tutto)

**Interfaces:**
- Consumes: Hero, About, Stack, Projects, Contact
- Produces: landing page completa e funzionante

- [ ] **Step 1: Verificare `site/src/pages/index.astro`** — deve essere esattamente:

```astro
---
import Base from '../layouts/Base.astro'
import Hero from '../components/Hero.astro'
import About from '../components/About.astro'
import Stack from '../components/Stack.astro'
import Projects from '../components/Projects.astro'
import Contact from '../components/Contact.astro'
---

<Base>
  <Hero />
  <About />
  <Stack />
  <Projects />
  <Contact />
</Base>
```

- [ ] **Step 2: Test completo della pagina**

Aprire `http://localhost:4321` e verificare in ordine:
1. Navbar sticky funziona scorrendo
2. Hero: nome grande, tagline, due CTA
3. CTA "Vedi i progetti" → scroll a #projects
4. CTA "Contattami" → scroll a #contact
5. About: bio + meta colonna destra
6. Stack: pill per categoria, learning con bordo tratteggiato
7. Projects: 2 card con badge "In progress"
8. Contact: 3 link, hover rosso
9. Toggle EN → tutta la pagina in inglese
10. Ricaricare → lingua persiste

- [ ] **Step 3: Test mobile**

Nel browser, aprire DevTools (F12) → Toggle device toolbar → iPhone 14 Pro (390px):
- Navbar: logo + toggle lingue visibili
- Hero: testo si riduce con `clamp()`
- About: layout a 1 colonna
- Stack: gruppi a 1 colonna
- Projects: 1 card per riga
- Nessun overflow orizzontale

- [ ] **Step 4: Build di verifica**

```bash
cd /Users/saif/Documents/portfolio/site
npm run build
```

Expected: nessun errore, cartella `dist/` generata con `index.html`, `projects/afam/index.html`, `projects/restaurant/index.html`.

> Nota: nessun commit necessario in questo task — `index.astro` è già al suo stato finale dopo Task 8.

---

### Task 10: Pagine progetto

**Files:**
- Create: `site/src/pages/projects/afam.astro`
- Create: `site/src/pages/projects/restaurant.astro`

**Interfaces:**
- Consumes: layout `Base` dal Task 3
- Produces: pagine `/projects/afam` e `/projects/restaurant` raggiungibili dalle card

- [ ] **Step 1: Creare `site/src/pages/projects/afam.astro`**

```astro
---
import Base from '../../layouts/Base.astro'

const tech = ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript']
---

<Base title="AFAM Experience Platform — SaifEdin">
  <article class="project-page">
    <div class="project-inner">
      <a href="/#projects" class="back-link" data-i18n="projects.back">← Progetti</a>

      <header class="project-header">
        <span class="project-badge">In progress</span>
        <h1 class="project-title">AFAM Experience Platform</h1>
        <p class="project-meta">Ingegneria del Software · UniPa</p>
      </header>

      <section class="project-section">
        <h2>Descrizione</h2>
        <p>
          Sistema web per la catalogazione e la condivisione volontaria di esperienze, curriculum e materiali
          da parte degli studenti delle Accademie di Belle Arti e Musica (AFAM).
          L'obiettivo è creare una piattaforma che permetta agli studenti di condividere
          il proprio percorso formativo e professionale con la comunità accademica.
        </p>
      </section>

      <section class="project-section">
        <h2>Il mio ruolo</h2>
        <p>
          Sviluppo full-stack: progettazione del database, implementazione del backend,
          sviluppo dell'interfaccia utente e integrazione dei componenti.
        </p>
      </section>

      <section class="project-section">
        <h2>Tech stack</h2>
        <div class="tech-list">
          {tech.map(t => <span class="tech-pill">{t}</span>)}
        </div>
      </section>

      <section class="project-section">
        <h2>Screenshot</h2>
        <div class="screenshot-placeholder">
          <span>Screenshot disponibili al completamento del progetto</span>
        </div>
      </section>

      <div class="project-links">
        <a href="https://github.com/Saif-Edin" class="cta-primary" target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>
    </div>
  </article>
</Base>

<style>
  .project-page {
    padding: 3rem 2rem 6rem;
  }

  .project-inner {
    max-width: 720px;
    margin: 0 auto;
  }

  .back-link {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-soft);
    text-decoration: none;
    display: inline-block;
    margin-bottom: 2.5rem;
    transition: color 0.15s;
  }

  .back-link:hover { color: var(--color-primary); }

  .project-header {
    margin-bottom: 3rem;
  }

  .project-badge {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    padding: 0.2rem 0.5rem;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .project-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
    margin-bottom: 0.75rem;
  }

  .project-meta {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-soft);
  }

  .project-section {
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .project-section h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-soft);
    margin-bottom: 1rem;
  }

  .project-section p {
    font-size: 1rem;
    line-height: 1.8;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-pill {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--color-border);
  }

  .screenshot-placeholder {
    border: 1px dashed var(--color-border);
    padding: 4rem 2rem;
    text-align: center;
    color: var(--color-soft);
    font-size: 0.875rem;
    font-family: var(--font-mono);
  }

  .project-links {
    margin-top: 2.5rem;
  }

  .cta-primary {
    background: var(--color-primary);
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.875rem 1.75rem;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.15s;
  }

  .cta-primary:hover { opacity: 0.85; }
</style>
```

- [ ] **Step 2: Creare `site/src/pages/projects/restaurant.astro`**

```astro
---
import Base from '../../layouts/Base.astro'

const tech = ['JavaScript', 'Python', 'MySQL', 'AI API', 'HTML', 'CSS']
---

<Base title="Restaurant Manager AI — SaifEdin">
  <article class="project-page">
    <div class="project-inner">
      <a href="/#projects" class="back-link" data-i18n="projects.back">← Progetti</a>

      <header class="project-header">
        <span class="project-badge">In progress</span>
        <h1 class="project-title">Restaurant Manager AI</h1>
        <p class="project-meta">Programmazione Web e Mobile · UniPa</p>
      </header>

      <section class="project-section">
        <h2>Descrizione</h2>
        <p>
          Gestionale per ristorante che integra un'intelligenza artificiale conversazionale tramite API.
          Il sistema permette ai clienti di effettuare ordinazioni direttamente al tavolo,
          al personale di aggiungere etichette di vino tramite fotografia (con riconoscimento automatico),
          e alla direzione di gestire il menu sia da app mobile che da sito locale sul PC del locale.
        </p>
      </section>

      <section class="project-section">
        <h2>Funzionalità principali</h2>
        <ul style="padding-left: 1.25rem; line-height: 2;">
          <li>Chat AI per ordinazioni a tavolo da parte del cliente</li>
          <li>Riconoscimento etichette vino tramite foto (AI vision)</li>
          <li>Gestione menu via app mobile</li>
          <li>Pannello di controllo locale su browser</li>
        </ul>
      </section>

      <section class="project-section">
        <h2>Il mio ruolo</h2>
        <p>
          Progettazione dell'architettura del sistema, sviluppo del backend e integrazione
          delle API AI, sviluppo dell'interfaccia web e mobile, gestione del database.
        </p>
      </section>

      <section class="project-section">
        <h2>Tech stack</h2>
        <div class="tech-list">
          {tech.map(t => <span class="tech-pill">{t}</span>)}
        </div>
      </section>

      <section class="project-section">
        <h2>Screenshot</h2>
        <div class="screenshot-placeholder">
          <span>Screenshot disponibili al completamento del progetto</span>
        </div>
      </section>

      <div class="project-links">
        <a href="https://github.com/Saif-Edin" class="cta-primary" target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>
    </div>
  </article>
</Base>

<style>
  .project-page { padding: 3rem 2rem 6rem; }
  .project-inner { max-width: 720px; margin: 0 auto; }
  .back-link { font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-soft); text-decoration: none; display: inline-block; margin-bottom: 2.5rem; transition: color 0.15s; }
  .back-link:hover { color: var(--color-primary); }
  .project-header { margin-bottom: 3rem; }
  .project-badge { font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary); border: 1px solid var(--color-primary); padding: 0.2rem 0.5rem; display: inline-block; margin-bottom: 1rem; }
  .project-title { font-family: var(--font-heading); font-weight: 800; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1; margin-bottom: 0.75rem; }
  .project-meta { font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-soft); }
  .project-section { margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid var(--color-border); }
  .project-section h2 { font-family: var(--font-heading); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-soft); margin-bottom: 1rem; }
  .project-section p, .project-section ul { font-size: 1rem; line-height: 1.8; }
  .tech-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .tech-pill { font-family: var(--font-mono); font-size: 0.8rem; padding: 0.35rem 0.75rem; border: 1px solid var(--color-border); }
  .screenshot-placeholder { border: 1px dashed var(--color-border); padding: 4rem 2rem; text-align: center; color: var(--color-soft); font-size: 0.875rem; font-family: var(--font-mono); }
  .project-links { margin-top: 2.5rem; }
  .cta-primary { background: var(--color-primary); color: #fff; font-family: var(--font-body); font-size: 0.875rem; font-weight: 500; padding: 0.875rem 1.75rem; text-decoration: none; display: inline-block; transition: opacity 0.15s; }
  .cta-primary:hover { opacity: 0.85; }
</style>
```

- [ ] **Step 3: Verificare nel browser**

1. Aprire `http://localhost:4321` → click card "AFAM Experience Platform" → si apre `/projects/afam`
2. Verificare: titolo, badge "In progress", sezioni descrizione/ruolo/tech/screenshot
3. Click "← Progetti" → torna alla homepage al punto giusto
4. Tornare alla homepage → click card "Restaurant Manager AI" → si apre `/projects/restaurant`
5. Verificare stessa struttura con contenuti diversi
6. Toggle EN in navbar → "← Progetti" diventa "← Projects"

- [ ] **Step 4: Build finale**

```bash
cd /Users/saif/Documents/portfolio/site
npm run build
```

Expected: output nella cartella `site/dist/` senza errori. Tutti i file HTML generati.

- [ ] **Step 5: Commit**

```bash
cd /Users/saif/Documents/portfolio
git add site/src/pages/projects/
git commit -m "feat: add project detail pages for AFAM and Restaurant AI"
```

---

## Verifica finale

- [ ] `npm run build` in `site/` completa senza errori
- [ ] Landing page completa su `http://localhost:4321`
- [ ] Toggle IT/EN funziona e persiste al refresh
- [ ] Mobile layout corretto a 390px
- [ ] Card progetti cliccabili → pagine dedicate
- [ ] Back link funzionante da ogni pagina progetto
- [ ] Nessun `console.error` nel browser DevTools

---

## Deploy (quando il dominio è pronto)

1. Push del repo su GitHub (se non già fatto)
2. Importare il repo su vercel.com → New Project
3. Impostare Root Directory: `site`
4. Framework Preset: Astro (rilevato automaticamente)
5. Deploy → Vercel assegna URL temporaneo (es. `saifedin-xxx.vercel.app`)
6. Settings → Domains → aggiungere `saifedin.dev`
7. Su Porkbun: aggiungere i record DNS che Vercel fornisce
