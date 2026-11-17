import "./hero.css";
import type { PointerEvent } from "react";
import { Accessibility, Check, Code, Gift, ShieldCheck } from "lucide-react";
import {
  Badge, Button, Card, FeatureCard, Footer, Hero, LangSwitch, Navbar, Prose, RepoCard, Section, ThemeToggle,
  useTheme,
} from "./ui/appsolute";
import { it, type Texts } from "./i18n/it";
import { en } from "./i18n/en";
import heroLight from "./assets/hero-light.webp";
import heroDark from "./assets/hero-dark.webp";
import wingpalIcon from "./assets/wingpal-logo.svg";

type Lang = "it" | "en";

const ORG_URL = "https://github.com/appsolutelab";
const THEME_KEY = "appsolute-theme";

const home = (lang: Lang) => import.meta.env.BASE_URL + (lang === "en" ? "en/" : "");
const privacyUrl = (lang: Lang) => home(lang) + "privacy/";
const icon = (I: typeof Code) => <I size={20} strokeWidth={1.75} />;

function Logo() {
  return <span className="co-logo" />;
}

function HeroVisual({ name, text, href, label }: { name: string; text: string; href: string; label: string }) {
  // Parallasse: solo mouse; il CSS la applica solo con pointer fine e senza prefers-reduced-motion.
  const parallax = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--co-hero-px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    e.currentTarget.style.setProperty("--co-hero-py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const rest = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty("--co-hero-px");
    e.currentTarget.style.removeProperty("--co-hero-py");
  };
  return (
    <div className="co-hero-stage" onPointerMove={parallax} onPointerLeave={rest}>
      <div className="co-hero-art" aria-hidden="true"><span className="co-hero-mark" /></div>
      <div className="co-hero-card">
        <Card tone="floating" padding="md">
          <p className="co-hero-card-name">{name}</p>
          <p className="co-hero-card-text">{text}</p>
          <a className="ap-link" href={href}>{label}</a>
        </Card>
      </div>
    </div>
  );
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
  const wingpal = t.projects.items[0];
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
          status={t.hero.status}
          lead={t.hero.lead}
          actions={
            <>
              <Button variant="primary" href={wingpal.href}>{t.hero.primary}</Button>
              <Button href={ORG_URL}>{t.hero.secondary}</Button>
            </>
          }
          media={<HeroVisual name={wingpal.name} text={t.hero.card} href={wingpal.href} label={wingpal.linkLabel} />}
        />

        <Section id="progetti" eyebrow={t.projects.eyebrow} title={t.projects.title}>
          <div className="co-showcase">
            <div className="co-showcase-art">
              <img className="co-img co-img-light" src={heroLight} alt="" width={1472} height={1104} loading="lazy" decoding="async" />
              <img className="co-img co-img-dark" src={heroDark} alt="" width={1472} height={1104} loading="lazy" decoding="async" />
            </div>
            <div className="co-showcase-text">
              <img className="co-showcase-icon" src={wingpalIcon} alt="" width={64} height={65} loading="lazy" decoding="async" />
              <Badge>{wingpal.status}</Badge>
              <p className="co-showcase-desc">{wingpal.description}</p>
              <ul className="co-points">
                {t.projects.points.map((p) => <li key={p}><Check size={20} strokeWidth={1.75} aria-hidden="true" />{p}</li>)}
              </ul>
              <div><Button variant="primary" href={wingpal.href}>{wingpal.linkLabel}</Button></div>
            </div>
          </div>
        </Section>

        <Section id="principi" eyebrow={t.principles.eyebrow} title={t.principles.title} grid>
          {t.principles.items.map((x, i) => (
            <FeatureCard key={x.title} icon={icon(principleIcons[i])} title={x.title}>{x.text}</FeatureCard>
          ))}
        </Section>

        <Section id="chi-siamo" eyebrow={t.about.eyebrow} title={t.about.title}>
          <div className="co-about">
            <div className="co-about-text">
              <div className="co-about-logo" role="img" aria-label="appsolute"><span className="co-about-mark" /><span className="co-about-wordmark" /></div>
              <Prose>
                {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </Prose>
            </div>
            <Card as="aside" className="co-stats">
              {t.about.stats.map((x) => (
                <div key={x.value} className="co-stat"><p className="co-stat-value">{x.value}</p><p className="co-stat-label">{x.label}</p></div>
              ))}
            </Card>
          </div>
        </Section>

        <Section id="codice" eyebrow={t.code.eyebrow} title={t.code.title} lead={t.code.lead} grid>
          {t.code.repos.map((r) => (
            <RepoCard key={r.name} name={r.name} href={"https://github.com/" + r.name} description={r.description} linkLabel={t.code.repoLink} />
          ))}
        </Section>

        <Section id="segui" align="center" eyebrow={t.follow.eyebrow} title={t.follow.title} lead={t.follow.lead}>
          <div className="co-cta">
            <Button variant="primary" href={wingpal.href}>{t.follow.primary}</Button>
            <Button href={ORG_URL}>{t.follow.secondary}</Button>
          </div>
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
          { title: t.footer.project, links: [{ label: t.footer.github, href: ORG_URL }, { label: t.footer.wingpal, href: wingpal.href }, { label: t.footer.privacy, href: privacyUrl(lang) }] },
        ]}
        bottom={t.footer.bottom}
      />
    </>
  );
}
