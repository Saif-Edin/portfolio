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
      afam: "A platform for cataloguing and voluntarily sharing experiences, CVs, and materials by AFAM students.",
      restaurant: "Restaurant manager with AI chat: table ordering, wine label recognition via photo, menu management via mobile app."
    }
  },
  contact: {
    title: "Contact"
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
