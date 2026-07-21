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
    body: "Sono Saif Edin Gharsallah, sviluppatore full-stack e studente di Ingegneria Informatica all'Università di Palermo. Costruisco applicazioni web end-to-end, dal frontend al backend, con attenzione alla qualità del codice e all'esperienza utente. Attualmente aperto a collaborazioni e progetti freelance.",
    meta: {
      university: "Università",
      year: "Anno",
      location: "Posizione",
      status: "Status"
    }
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
    back: "← Progetti",
    descriptions: {
      afam: "Sistema per la catalogazione e la condivisione volontaria di esperienze, CV e materiali da parte degli studenti AFAM.",
      restaurant: "Gestionale per ristorante con chat AI: ordinazioni a tavolo, etichette vino via foto, gestione menu via app mobile."
    }
  },
  contact: {
    title: "Contatti"
  },
  projectPage: {
    sections: {
      description: "Descrizione",
      features: "Funzionalità principali",
      role: "Il mio ruolo",
      stack: "Tech stack",
      screenshots: "Screenshot"
    },
    screenshotPlaceholder: "Screenshot disponibili al completamento del progetto",
    afam: {
      meta: "Ingegneria del Software · UniPa",
      description: "Sistema web per la catalogazione e la condivisione volontaria di esperienze, curriculum e materiali da parte degli studenti delle Accademie di Belle Arti e Musica (AFAM). L'obiettivo è creare una piattaforma che permetta agli studenti di condividere il proprio percorso formativo e professionale con la comunità accademica.",
      role: "Sviluppo full-stack: progettazione del database, implementazione del backend, sviluppo dell'interfaccia utente e integrazione dei componenti."
    },
    restaurant: {
      meta: "Programmazione Web e Mobile · UniPa",
      description: "Gestionale per ristorante che integra un'intelligenza artificiale conversazionale tramite API. Il sistema permette ai clienti di effettuare ordinazioni direttamente al tavolo, al personale di aggiungere etichette di vino tramite fotografia (con riconoscimento automatico), e alla direzione di gestire il menu sia da app mobile che da sito locale sul PC del locale.",
      features: [
        "Chat AI per ordinazioni a tavolo da parte del cliente",
        "Riconoscimento etichette vino tramite foto (AI vision)",
        "Gestione menu via app mobile",
        "Pannello di controllo locale su browser"
      ],
      role: "Progettazione dell'architettura del sistema, sviluppo del backend e integrazione delle API AI, sviluppo dell'interfaccia web e mobile, gestione del database."
    }
  }
} as const

export type Translations = typeof it
