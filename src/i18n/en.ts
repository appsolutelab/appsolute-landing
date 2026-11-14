import type { Texts } from "./it";

export const en: Texts = {
  nav: {
    main: "Main menu",
    open: "Open the menu",
    close: "Close the menu",
    skip: "Skip to content",
    language: "Language",
    theme: "Theme",
    light: "Light theme",
    dark: "Dark theme",
    projects: "Projects",
    principles: "Principles",
    about: "About",
    code: "Code",
  },
  hero: {
    eyebrow: "Free and open source",
    title: "Free, open source apps born at school",
    lead: "We are six students at ITIS G. Cardano in Pavia, Italy. We work like a small company to learn how to run a real project.",
    primary: "See the projects",
    secondary: "View the code",
  },
  projects: {
    eyebrow: "Projects",
    title: "Our first project",
    lead: "For now we have just one. We work on it at our own pace, in public.",
    items: [
      {
        name: "WingPal",
        description: "Keeps your calendar, notes and tasks linked. Works locally and without an account. AGPL-3.0 license.",
        status: "In development",
        linkLabel: "Go to the WingPal page",
        href: "https://appsolutelab.github.io/wingpal-landing/en/",
      },
    ],
  },
  principles: {
    eyebrow: "Principles",
    title: "How we work",
    items: [
      { title: "Free and open source", text: "The apps we build are free and released under an open source licence." },
      { title: "Honest", text: "We only make promises we can check. If something is not there yet, we say so." },
      { title: "Readable for everyone", text: "Text designed for people who find reading hard, contrast of at least 4.5:1, light and dark theme." },
      { title: "Lightweight", text: "Few dependencies and short animations. A site or an app should not be heavy." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A group of six students",
    paragraphs: [
      "appsolute was born at school, in the GPOI subject: project management and business organization. The class is split into groups and each group works like a small company, with its own project.",
      "Our goal is to learn how to run a project, not to sell. That is why the apps are free and the work is public.",
      "We use issues and pull requests on GitHub, and we have our own design system, shared by all our projects.",
    ],
  },
  code: {
    eyebrow: "Code",
    title: "The work is public",
    lead: "You can find everything on the appsolute GitHub organization. The code of the WingPal app is not public yet: for now there are the two sites.",
    repoLink: "Open on GitHub",
    orgLink: "View the organization on GitHub",
    repos: [
      { name: "appsolutelab/wingpal-landing", description: "The WingPal landing page." },
      { name: "appsolutelab/appsolute-landing", description: "This site." },
    ],
  },
  footer: {
    tagline: "Free, open source apps born at school.",
    nav: "Site links",
    page: "Page",
    project: "Project",
    github: "GitHub",
    privacy: "Privacy",
    bottom: "A project of ITIS G. Cardano in Pavia. No ads, no tracking.",
  },
  privacy: {
    title: "Privacy policy",
    lead: "This site uses no cookies, has no forms and does not track its visitors. Below you will find the little data that is still processed.",
    updated: "Last updated: 14 November 2026",
    sections: [
      { title: "Data controller", text: "The controller is appsolute, a project of ITIS G. Cardano in Pavia. For questions about this policy or to exercise your rights, contact us through our repository.", link: { label: "Open an issue on GitHub", href: "https://github.com/appsolutelab/appsolute-landing/issues" } },
      { title: "Hosting", text: "The site is hosted on GitHub Pages. Like any web server, GitHub records the IP address of visitors and some technical data from the browser, for security and to run the service. We have no access to this data. GitHub may also process it in the United States.", link: { label: "GitHub privacy statement", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" } },
      { title: "Fonts", text: "The fonts on the page are downloaded from Google Fonts. To deliver them, Google receives your IP address.", link: { label: "Google Fonts privacy", href: "https://developers.google.com/fonts/faq/privacy" } },
      { title: "Preferences saved in the browser", text: "If you switch between the light and dark theme, your choice is saved in your browser under the key appsolute-theme. It stays on your device, is not sent to us, and you can delete it from your browser settings. We use no cookies and no analytics." },
      { title: "Why we process this data", text: "The technical data is only used to show you the site securely. The legal basis is legitimate interest (art. 6(1)(f) GDPR)." },
      { title: "Your rights", text: "You can ask to access, correct or delete your data, to restrict its processing, or to object to it. You can also lodge a complaint with the Italian data protection authority (Garante).", link: { label: "Garante website", href: "https://www.garanteprivacy.it" } },
      { title: "Our apps", text: "This policy covers this site only. Each app, such as WingPal, has its own policy." },
    ],
  },
};
