# Personal Brand — Fondamenta (Fase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Creare la base documentale del personal brand: repository git, dati personali privati (MyInfo.md) e identità visiva (Style.md).

**Architecture:** Tre file fondamentali che si alimentano in sequenza — MyInfo.md raccoglie i dati grezzi, Style.md li trasforma in identità visiva e verbale coerente. Il repo git traccia Style.md ma ignora MyInfo.md (privato).

**Tech Stack:** Markdown, Git

## Global Constraints

- MyInfo.md NON deve mai essere committato — deve stare in .gitignore
- Style.md è il documento pubblico: scritto in inglese o italiano (scegliere uno e mantenerlo)
- Tutti i file usano UTF-8 e newline Unix (LF)
- Commit message in inglese, formato: `tipo: descrizione breve`

---

### Task 1: Inizializzare il repository git

**Files:**
- Create: `.gitignore`
- Modify: `CLAUDE.md`

**Interfaces:**
- Produces: repo git funzionante, MyInfo.md escluso dal tracking

- [ ] **Step 1: Inizializzare git**

```bash
git init
```

Expected output: `Initialized empty Git repository in .../portfolio/.git/`

- [ ] **Step 2: Creare .gitignore**

Contenuto del file `.gitignore`:
```
# Dati personali privati
MyInfo.md

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
```

- [ ] **Step 3: Aggiungere contenuto a CLAUDE.md**

Contenuto di `CLAUDE.md`:
```markdown
# Portfolio — Personal Brand

Repo del personal brand. Vedi `docs/superpowers/specs/` per il design e `docs/superpowers/plans/` per i piani.

## File importanti
- `Style.md` — identità visiva e verbale (fonte di verità pubblica)
- `MyInfo.md` — dati personali (privato, non versionato)

## Note
- MyInfo.md è in .gitignore: non committarlo mai
```

- [ ] **Step 4: Primo commit**

```bash
git add .gitignore CLAUDE.md docs/
git commit -m "chore: initialize repo with brand design and plan"
```

Expected: commit creato con i file di design e il .gitignore.

---

### Task 2: Creare MyInfo.md

**Files:**
- Create: `MyInfo.md` (non versionato)

**Interfaces:**
- Produces: fonte di verità per i dati personali, usata nel Task 3 per compilare Style.md

- [ ] **Step 1: Creare MyInfo.md con struttura base**

Crea il file `MyInfo.md` con questo contenuto (compilare con i tuoi dati reali):

```markdown
# My Info — Dati Personali

> File privato. Non committare. Aggiornare man mano che il profilo evolve.

## Identità
- **Nome completo:** [il tuo nome e cognome]
- **Handle scelto:** [es. saif, saifdev, ...]
- **Dominio target:** [es. saif.dev / saif.io — da registrare]
- **Email professionale:** [la tua email]

## Formazione
- **Università:** [nome università]
- **Corso:** Ingegneria Informatica
- **Anno:** [anno accademico corrente]
- **Anno di corso:** [es. 2° anno]

## Stack tecnico

### Frontend
- [es. HTML, CSS, JavaScript, React, ...]
- Livello: [base / intermedio / avanzato] per ognuno

### Backend
- [es. Node.js, Python, Java, ...]
- Livello: [base / intermedio / avanzato] per ognuno

### Tools & altro
- [es. Git, Docker, Linux, ...]

## Progetti
- [Nome progetto] — [descrizione breve] — stato: [WIP / completato / da completare]
- [Nome progetto] — [descrizione breve] — stato: [WIP / completato / da completare]

## Canali online
- **GitHub:** https://github.com/[username]
- **LinkedIn:** https://linkedin.com/in/[username]
- **Email:** [email]

## Lingue
- Italiano: madrelingua
- Inglese: [livello]

## Note / altro
- [Qualsiasi altra info utile per il brand]
```

- [ ] **Step 2: Verificare che MyInfo.md sia ignorato da git**

```bash
git status
```

Expected: MyInfo.md NON appare nell'output. Se appare, controllare che `.gitignore` contenga `MyInfo.md`.

---

### Task 3: Creare Style.md

**Files:**
- Create: `Style.md`

**Interfaces:**
- Consumes: nome, handle, stack, bio da `MyInfo.md`
- Produces: fonte di verità visiva e verbale per sito, LinkedIn, GitHub

- [ ] **Step 1: Definire la palette colori**

Scegliere colori che rispettino lo stile "minimal + bold". Riferimento per scegliere:
- Aprire [coolors.co](https://coolors.co) o [oklch.com](https://oklch.com)
- Primario: un colore forte e riconoscibile (non il classico blu — scegliere qualcosa di proprio)
- Accento: complementare o analogo, per highlight e hover
- Neutri: sfondo chiaro/scuro, testo principale, testo secondario, bordi

Esempio di struttura (sostituire con i valori scelti):
```
Primario:   #[hex]  — usato per CTA, elementi in evidenza
Accento:    #[hex]  — usato per hover, highlight, dettagli
Sfondo:     #[hex]  — sfondo principale (chiaro o scuro)
Testo:      #[hex]  — testo principale
Testo soft: #[hex]  — testo secondario, caption
Bordo:      #[hex]  — linee, divisori
```

- [ ] **Step 2: Definire la tipografia**

Scegliere font da [Google Fonts](https://fonts.google.com):
- **Titoli:** qualcosa di bold e geometrico (es. Space Grotesk, Syne, Plus Jakarta Sans)
- **Corpo:** leggibile e moderno (es. Inter, DM Sans, Geist)
- (Opzionale) **Monospace:** per snippet di codice (es. JetBrains Mono, Geist Mono)

- [ ] **Step 3: Scrivere Style.md**

Creare `Style.md` con questo contenuto (compilare con le scelte fatte negli step precedenti):

```markdown
# Style Guide — [Nome]

> Fonte di verità per l'identità visiva e verbale del brand. Ogni canale pubblico si allinea a questo documento.

---

## Identità verbale

**Nome:** [Nome Cognome]
**Handle:** [@handle]
**Dominio:** [dominio.dev]

**Tagline (breve):**
> [Una frase che ti descrive — es. "Full-stack developer & Computer Engineering student"]

**Tono di voce:**
- Professionale ma diretto
- Non formale, non arrogante
- Concreto: preferire esempi e risultati a descrizioni vaghe
- In italiano con clienti italiani, in inglese altrove

---

## Palette colori

| Ruolo      | Hex      | Uso                                      |
|------------|----------|------------------------------------------|
| Primario   | #[hex]   | CTA, elementi in evidenza, link          |
| Accento    | #[hex]   | Hover, highlight, dettagli decorativi    |
| Sfondo     | #[hex]   | Sfondo principale                        |
| Testo      | #[hex]   | Testo principale                         |
| Testo soft | #[hex]   | Testo secondario, caption, placeholder   |
| Bordo      | #[hex]   | Linee, divisori, card border             |

**Regole:**
- Non usare più di 3 colori nella stessa schermata
- Il primario appare massimo 1-2 volte per pagina
- Sfondo e testo devono avere contrast ratio ≥ 4.5:1 (WCAG AA)

---

## Tipografia

**Font titoli:** [Nome Font] — [Google Fonts URL]
**Font corpo:** [Nome Font] — [Google Fonts URL]
**Font mono:** [Nome Font] — per codice inline e snippet

### Scale
| Elemento | Dimensione | Peso  |
|----------|------------|-------|
| H1       | 3rem       | 700   |
| H2       | 2rem       | 600   |
| H3       | 1.5rem     | 600   |
| Body     | 1rem       | 400   |
| Small    | 0.875rem   | 400   |
| Caption  | 0.75rem    | 400   |

---

## Visual language

**Stile generale:** Minimal con elementi bold. Spazio bianco generoso, pochi elementi, ciascuno con peso visivo forte.

**Cosa fare:**
- Angoli netti (border-radius 0 o massimo 4px)
- Spacing generoso (padding abbondante, sezioni separate)
- Un elemento grafico forte per pagina (tipografia grande, una shape, un colore)
- Gerarchia visiva chiara: titolo → sottotitolo → corpo

**Cosa evitare:**
- Più di 2 font nella stessa pagina
- Gradienti complessi o ombre pesanti
- Elementi decorativi senza funzione
- Animazioni eccessive

---

## Bio templates

**Bio breve (1 riga) — per GitHub, LinkedIn headline, social:**
> [Nome] · Full-stack developer · Ingegneria Informatica @ [Università]

**Bio estesa (3-4 righe) — per il sito:**
> Sono [Nome], sviluppatore full-stack e studente di Ingegneria Informatica a [Università].
> Costruisco applicazioni web end-to-end, dal frontend al backend, con attenzione alla qualità del codice e all'esperienza utente.
> Attualmente disponibile per collaborazioni e progetti freelance.

**Presentazione email:**
> Ciao, sono [Nome], sviluppatore full-stack e studente di Ingegneria Informatica.
> Ti scrivo perché [motivo specifico].

---

## Changelog

| Data       | Modifica                        |
|------------|---------------------------------|
| 2026-06-18 | Prima versione                  |
```

- [ ] **Step 4: Committare Style.md**

```bash
git add Style.md
git commit -m "feat: add Style.md brand identity guide"
```

Expected: commit con Style.md, MyInfo.md NON incluso.

---

## Verifica finale

- [ ] `git status` mostra working tree pulito
- [ ] `MyInfo.md` non appare in `git log --name-only`
- [ ] `Style.md` è completo, senza placeholder `[da compilare]`
- [ ] Palette, font e bio sono tutti definiti con valori reali

---

## Nota: Registrazione dominio

Azione manuale esterna al repo. Una volta scelto l'handle in MyInfo.md:

1. Verificare disponibilità su [porkbun.com](https://porkbun.com) o [namecheap.com](https://namecheap.com)
2. Preferire `.dev` (richiede HTTPS) o `.io` — entrambi ottimi per developer
3. Registrare e aggiornare il campo `Dominio target` in MyInfo.md e `Style.md`
