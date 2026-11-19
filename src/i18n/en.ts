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
    body: "I'm Saif Edin Gharsallah, a full-stack developer and Computer Engineering student at the University of Palermo. I build web applications end-to-end, from frontend to backend, with a focus on code quality and user experience. Currently open to collaborations and freelance projects.",
    meta: {
      university: "University",
      year: "Year",
      location: "Location",
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
    learning: "learning"
  },
  projects: {
    title: "Projects",
    wip: "In progress",
    view: "View project →",
    back: "← Projects",
    descriptions: {
      klipify: "Automatically finds the best moments in a long video, scores them 1 to 100 and cuts them for TikTok/Reels/Shorts. Runs fully locally.",
      afam:"A platform for cataloguing and voluntarily sharing experiences, CVs, and materials by AFAM students.",
      restaurant: "Restaurant manager with AI chat: table ordering, wine label recognition via photo, menu management via mobile app."
    }
  },
  contact: {
    title: "Contact"
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home"
  },
  projectPage: {
    sections: {
      description: "Description",
      features: "Key features",
      role: "My role",
      stack: "Tech stack",
      screenshots: "Screenshots"
    },
    screenshotPlaceholder: "Screenshots available when the project is complete",
    klipify: {
      meta: "Personal project · open source",
      description: "Command-line tool that analyses a long video (podcast, interview, vlog, tutorial), finds the strongest moments, gives each one a virality score from 1 to 100 and cuts clips ready for TikTok, Reels and Shorts. Everything runs locally: the video never leaves your machine, only the transcript is sent to the AI.",
      features: [
        "Local transcription with Whisper, optimised for Apple Silicon",
        "Highlight detection with the Claude API and a 1–100 score",
        "Lossless ffmpeg cutting with no re-encoding: instant and full quality",
        "Per-run and monthly spending caps, Markdown report of the clips"
      ],
      role: "Personal project: pipeline design, technology choices, Python development and Claude API integration."
    },
    afam: {
      meta: "Software Engineering · UniPa",
      description: "Web platform for cataloguing and voluntarily sharing experiences, CVs and materials by students of the Italian Academies of Fine Arts and Music (AFAM). The goal is a platform that lets students share their educational and professional journey with the academic community.",
      role: "Full-stack development: database design, backend implementation, user interface development and component integration."
    },
    restaurant: {
      meta: "Web & Mobile Programming · UniPa",
      description: "Restaurant management system with a conversational AI integrated via API. Customers can order directly at the table, staff can add wine labels by photo (with automatic recognition), and management can edit the menu from a mobile app or a local site on the restaurant's PC.",
      features: [
        "AI chat for table-side ordering by customers",
        "Wine label recognition via photo (AI vision)",
        "Menu management via mobile app",
        "Local control panel in the browser"
      ],
      role: "System architecture design, backend development and AI API integration, web and mobile interface development, database management."
    }
  }
}
