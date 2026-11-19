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
      klipify: "Trova automaticamente i momenti migliori di un video lungo, li punteggia da 1 a 100 e li ritaglia per TikTok/Reels/Shorts. Tutto in locale.",
      afam:"Sistema per la catalogazione e la condivisione volontaria di esperienze, CV e materiali da parte degli studenti AFAM.",
      restaurant: "Gestionale per ristorante con chat AI: ordinazioni a tavolo, etichette vino via foto, gestione menu via app mobile."
    }
  },
  contact: {
    title: "Contatti"
  },
  notFound: {
    title: "Pagina non trovata",
    body: "La pagina che cerchi non esiste o è stata spostata.",
    cta: "Torna alla home"
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
    klipify: {
      meta: "Progetto personale · open source",
      description: "Strumento a riga di comando che analizza un video lungo (podcast, intervista, vlog, tutorial), individua i momenti più forti, assegna a ognuno un punteggio di viralità da 1 a 100 e ritaglia le clip pronte per TikTok, Reels e Shorts. Tutto gira in locale: il video non viene mai caricato in cloud, all'AI arriva solo il testo trascritto.",
      features: [
        "Trascrizione locale con Whisper, ottimizzata per Apple Silicon",
        "Analisi dei momenti forti con l'API di Claude e punteggio 1–100",
        "Taglio con ffmpeg senza ricompressione: istantaneo e senza perdita",
        "Tetti di spesa per esecuzione e mensili, report Markdown delle clip"
      ],
      role: "Progetto personale: progettazione della pipeline, scelta delle tecnologie, sviluppo in Python e integrazione con l'API di Claude."
    },
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
