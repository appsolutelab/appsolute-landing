/* Testi italiani. en.ts ha le stesse chiavi: lo controlla TypeScript. */
type PrivacySection = { title: string; text: string; link?: { label: string; href: string } };

export const it = {
  nav: {
    main: "Menu principale",
    open: "Apri il menu",
    close: "Chiudi il menu",
    skip: "Vai al contenuto",
    language: "Lingua",
    theme: "Tema",
    light: "Tema chiaro",
    dark: "Tema scuro",
    projects: "Progetti",
    principles: "Principi",
    about: "Chi siamo",
    code: "Codice",
  },
  hero: {
    eyebrow: "Dalla scuola, in pubblico",
    title: "Sei studenti. Un'app vera. Gratis.",
    status: "In sviluppo · prima versione prevista a gennaio 2027",
    lead: "Siamo sei studenti dell'ITIS G. Cardano di Pavia. Lavoriamo come una piccola azienda per imparare a gestire un progetto vero.",
    primary: "Scopri WingPal",
    secondary: "Vedi il codice",
    card: "Calendario, note e attività, collegati.",
  },
  projects: {
    eyebrow: "Progetti",
    title: "WingPal, il nostro primo progetto",
    points: ["Funziona in locale", "Senza account", "Open source, licenza AGPL-3.0"],
    items: [
      {
        name: "WingPal",
        description: "Tiene collegati calendario, note e attività. Funziona in locale e senza account. Licenza AGPL-3.0.",
        status: "In sviluppo · prima versione prevista a gennaio 2027",
        linkLabel: "Scopri WingPal",
        href: "https://appsolutelab.github.io/wingpal-landing/",
      },
    ],
  },
  principles: {
    eyebrow: "Principi",
    title: "Come lavoriamo",
    items: [
      { title: "Gratis e open source", text: "Le app che sviluppiamo sono gratuite e hanno una licenza open source." },
      { title: "Onesti", text: "Facciamo solo promesse che possiamo verificare. Se una cosa non c'è ancora, lo scriviamo." },
      { title: "Leggibile per tutti", text: "Testo pensato per chi legge con difficoltà, contrasto almeno 4.5:1, tema chiaro e scuro." },
      { title: "Leggeri", text: "Poche dipendenze e animazioni brevi. Un sito o un'app non devono pesare." },
    ],
  },
  about: {
    eyebrow: "Chi siamo",
    title: "Un gruppo di sei studenti",
    stats: [
      { value: "6", label: "studenti" },
      { value: "1", label: "progetto" },
      { value: "GPOI", label: "gestione progetto e organizzazione d'impresa" },
      { value: "Pavia", label: "ITIS G. Cardano" },
    ],
    paragraphs: [
      "AppSolute è nato a scuola, dentro la materia GPOI: gestione progetto e organizzazione d'impresa. La classe è divisa in gruppi e ogni gruppo lavora come una piccola azienda, con un suo progetto.",
      "Il nostro obiettivo è imparare a gestire un progetto, non vendere. Per questo le app sono gratuite e il lavoro è pubblico.",
      "Usiamo issue e pull request su GitHub e abbiamo un design system nostro, condiviso da tutti i progetti.",
    ],
  },
  code: {
    eyebrow: "Codice",
    title: "Il lavoro è pubblico",
    lead: "Il codice dell'app WingPal non è ancora pubblico: per ora ci sono i due siti.",
    repoLink: "Apri su GitHub",
    repos: [
      { name: "appsolutelab/wingpal-landing", description: "La landing page di WingPal." },
      { name: "appsolutelab/appsolute-landing", description: "Questo sito." },
    ],
  },
  follow: {
    eyebrow: "Segui il lavoro",
    title: "Curioso di vedere come va?",
    lead: "WingPal è in sviluppo e la prima versione è prevista a gennaio 2027. Intanto scoprilo e guarda come lavoriamo.",
    primary: "Scopri WingPal",
    secondary: "Segui su GitHub",
  },
  footer: {
    tagline: "App gratuite e open source, nate a scuola.",
    nav: "Link del sito",
    page: "Pagina",
    project: "Progetto",
    github: "GitHub",
    wingpal: "WingPal",
    privacy: "Privacy",
    bottom: "Un progetto dell'ITIS G. Cardano di Pavia. Niente pubblicità, niente tracciamento.",
  },
  privacy: {
    title: "Informativa sulla privacy",
    lead: "Questo sito non usa cookie, non ha moduli e non traccia chi lo visita. Qui sotto trovi i pochi dati che vengono comunque trattati.",
    updated: "Ultimo aggiornamento: 14 novembre 2026",
    sections: [
      { title: "Titolare del trattamento", text: "Il titolare è AppSolute, progetto dell'ITIS G. Cardano di Pavia. Per domande su questa informativa o per esercitare i tuoi diritti, contattaci dal nostro repository.", link: { label: "Apri una segnalazione su GitHub", href: "https://github.com/appsolutelab/appsolute-landing/issues" } },
      { title: "Hosting", text: "Il sito è ospitato su GitHub Pages. Come ogni server web, GitHub registra l'indirizzo IP di chi visita la pagina e alcuni dati tecnici del browser, per sicurezza e per far funzionare il servizio. Noi non abbiamo accesso a questi dati. GitHub può trattarli anche negli Stati Uniti.", link: { label: "Informativa sulla privacy di GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" } },
      { title: "Caratteri tipografici", text: "I caratteri della pagina vengono scaricati da Google Fonts. Per inviarli, Google riceve il tuo indirizzo IP.", link: { label: "Privacy di Google Fonts", href: "https://developers.google.com/fonts/faq/privacy" } },
      { title: "Preferenze salvate nel browser", text: "Se cambi il tema chiaro o scuro, la scelta viene salvata nel tuo browser con la chiave appsolute-theme. Resta sul tuo dispositivo, non ci viene inviata, e puoi cancellarla dalle impostazioni del browser. Non usiamo cookie e non usiamo statistiche." },
      { title: "Perché trattiamo questi dati", text: "I dati tecnici servono solo a mostrarti il sito in modo sicuro. La base giuridica è il legittimo interesse (art. 6, par. 1, lett. f del GDPR)." },
      { title: "I tuoi diritti", text: "Puoi chiedere di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento od opporti. Puoi anche presentare un reclamo al Garante per la protezione dei dati personali.", link: { label: "Sito del Garante", href: "https://www.garanteprivacy.it" } },
      { title: "Le nostre app", text: "Questa informativa riguarda solo questo sito. Ogni app, come WingPal, ha la sua informativa." },
    ] as PrivacySection[],
  },
};

export type Texts = typeof it;
