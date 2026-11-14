import { Accessibility, Code, Gift, ShieldCheck } from "lucide-react";
import {
  Button, FeatureCard, Footer, Hero, LangSwitch, Navbar, ProjectCard, Prose, RepoCard, Section, ThemeToggle,
  useTheme,
} from "./ui/appsolute";
import { it, type Texts } from "./i18n/it";
import { en } from "./i18n/en";

type Lang = "it" | "en";

const ORG_URL = "https://github.com/appsolutelab";
const THEME_KEY = "appsolute-theme";

const home = (lang: Lang) => import.meta.env.BASE_URL + (lang === "en" ? "en/" : "");
const privacyUrl = (lang: Lang) => home(lang) + "privacy/";
const icon = (I: typeof Code) => <I size={20} strokeWidth={1.75} />;

function Logo() {
  return <span className="co-logo" />;
}

function Privacy({ t }: { t: Texts["privacy"] }) {
  return (
    <Section title={t.title} headingLevel={1} lead={t.lead}>
      <Prose as="article">
        {t.sections.flatMap((x) => [
          <h2 key={x.title}>{x.title}</h2>,
          <p key={x.title + "-p"}>{x.text} {x.link ? <a href={x.link.href}>{x.link.label}</a> : null}</p>,
        ])}
        <p><small>{t.updated}</small></p>
      </Prose>
    </Section>
  );
}

export function App({ lang, page = "home" }: { lang: Lang; page?: "home" | "privacy" }) {
  const t = lang === "en" ? en : it;
  const privacy = page === "privacy";
  const base = privacy ? home(lang) : ""; // dalla pagina privacy le ancore tornano alla home
  // Il tema si salva solo quando lo sceglie la persona: fino ad allora la pagina segue il sistema operativo.
  const [theme, changeTheme] = useTheme(THEME_KEY);

  const links = [
    { label: t.nav.projects, href: base + "#progetti" },
    { label: t.nav.principles, href: base + "#principi" },
    { label: t.nav.about, href: base + "#chi-siamo" },
    { label: t.nav.code, href: base + "#codice" },
  ];
  const principleIcons = [Code, ShieldCheck, Accessibility, Gift];

  return (
    <>
      <Navbar
        brand="appsolute"
        logo={<Logo />}
        homeHref={home(lang)}
        links={links}
        skipHref="#contenuto"
        labels={{ nav: t.nav.main, open: t.nav.open, close: t.nav.close, skip: t.nav.skip }}
        actions={
          <>
            <LangSwitch value={lang} label={t.nav.language} onChange={(l) => { window.location.href = (privacy ? privacyUrl(l as Lang) : home(l as Lang)) + window.location.hash; }} />
            <ThemeToggle theme={theme} onChange={changeTheme} labels={{ label: t.nav.theme, light: t.nav.light, dark: t.nav.dark }} />
          </>
        }
      />
      <main id="contenuto">
        {privacy ? <Privacy t={t.privacy} /> : <>
        <Hero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          lead={t.hero.lead}
          actions={
            <>
              <Button variant="primary" href="#progetti">{t.hero.primary}</Button>
              <Button href={ORG_URL}>{t.hero.secondary}</Button>
            </>
          }
        />

        <Section id="progetti" eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.lead} grid>
          {t.projects.items.map((x) => (
            <ProjectCard key={x.name} name={x.name} href={x.href} description={x.description} status={x.status} linkLabel={x.linkLabel} />
          ))}
        </Section>

        <Section id="principi" eyebrow={t.principles.eyebrow} title={t.principles.title} grid>
          {t.principles.items.map((x, i) => (
            <FeatureCard key={x.title} icon={icon(principleIcons[i])} title={x.title}>{x.text}</FeatureCard>
          ))}
        </Section>

        <Section id="chi-siamo" eyebrow={t.about.eyebrow} title={t.about.title}>
          <div className="co-about-logo" role="img" aria-label="appsolute"><span className="co-about-mark" /><span className="co-about-wordmark" /></div>
          <Prose>
            {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Prose>
        </Section>

        <Section id="codice" eyebrow={t.code.eyebrow} title={t.code.title} lead={t.code.lead} grid>
          {t.code.repos.map((r) => (
            <RepoCard key={r.name} name={r.name} href={"https://github.com/" + r.name} description={r.description} linkLabel={t.code.repoLink} />
          ))}
        </Section>
        <Section>
          <div className="co-org"><Button href={ORG_URL}>{t.code.orgLink}</Button></div>
        </Section>
        </>}
      </main>
      <Footer
        brand="appsolute"
        logo={<Logo />}
        tagline={t.footer.tagline}
        navLabel={t.footer.nav}
        columns={[
          { title: t.footer.page, links },
          { title: t.footer.project, links: [{ label: t.footer.github, href: ORG_URL }, { label: t.footer.privacy, href: privacyUrl(lang) }] },
        ]}
        bottom={t.footer.bottom}
      />
    </>
  );
}
