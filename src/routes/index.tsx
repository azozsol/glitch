import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useReveal } from "@/hooks/use-reveal";
import { HeroCanvas, CaseCanvas, PixelAvatar } from "@/components/glitch/canvases";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLITCH.BE — Agence Comm & Marketing à Bruxelles" },
      {
        name: "description",
        content:
          "Stratégie, création publicitaire et développement web — une équipe, un brief, zéro prise de tête. Agence basée à Bruxelles.",
      },
      { property: "og:title", content: "GLITCH.BE — Agence Comm & Marketing" },
      {
        property: "og:description",
        content: "On craque le code de votre communication. Stratégie · Création · Web.",
      },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref as any} className={`reveal-on-scroll ${className}`}>
      {children}
    </Tag>
  );
}

function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-acid/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1160px] items-center justify-between px-8">
        <a href="#" className="flex items-center gap-0.5 font-mono text-[18px] font-bold tracking-tight text-foreground">
          <span className="relative inline-block">GLITCH</span>
          <span className="text-acid">.BE</span>
          <span className="ml-2.5 border-l border-muted-soft pl-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-faint">
            Comm & Marketing
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {[
            ["#services", "Services"],
            ["#portfolio", "Réalisations"],
            ["#equipe", "L'équipe"],
            ["#blog", "Blog"],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-faint transition-colors hover:text-acid"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-sm bg-acid px-[18px] py-[9px] font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-background hover:bg-foreground"
            >
              Démarrer un projet →
            </a>
          </li>
          <li>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-faint hover:text-acid"
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
          </li>
        </ul>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-faint hover:text-acid md:hidden"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-[100px]">
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono font-bold tracking-[-0.04em]"
          style={{
            fontSize: "clamp(80px, 18vw, 220px)",
            color: "transparent",
            WebkitTextStroke: "1px var(--grid-line)",
          }}
        >
          GLITCH
        </div>
        <span className="absolute left-6 top-20 h-5 w-5 border-l-2 border-t-2 border-acid/30" />
        <span className="absolute right-6 top-20 h-5 w-5 border-r-2 border-t-2 border-acid/30" />
        <span className="absolute bottom-10 left-6 h-5 w-5 border-b-2 border-l-2 border-acid/30" />
        <span className="absolute bottom-10 right-6 h-5 w-5 border-b-2 border-r-2 border-acid/30" />
      </div>
      <div className="mx-auto grid w-full max-w-[1160px] items-center gap-16 px-8 md:grid-cols-[1fr_420px]">
        <div>
          <p className="mb-6 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
            <span className="h-px w-5 bg-acid" />
            Agence Comm & Marketing — Bruxelles
          </p>
          <h1 className="mb-7 font-bold leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(38px,5.5vw,72px)" }}>
            <span className="glitch-overlay relative inline-block text-foreground" data-t="On craque le code">
              On craque le code
            </span>
            <span className="block text-acid">de votre</span>
            <span className="block text-foreground">communication.</span>
          </h1>
          <p className="mb-10 max-w-[520px] text-lg leading-[1.7] text-muted-foreground">
            <strong className="font-medium text-foreground">Stratégie, création, web.</strong> Une équipe. Un brief. Zéro prise de tête.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a href="#contact" className="btn-primary">Parlez-nous de votre projet →</a>
            <a href="#portfolio" className="btn-secondary">Voir nos réalisations</a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative aspect-square overflow-hidden rounded border border-acid/20 bg-surface-1">
            <span className="absolute -left-px -top-px z-10 h-3.5 w-3.5 border-l-2 border-t-2 border-acid" />
            <span className="absolute -right-px -top-px z-10 h-3.5 w-3.5 border-r-2 border-t-2 border-acid" />
            <span className="absolute -bottom-px -left-px z-10 h-3.5 w-3.5 border-b-2 border-l-2 border-acid" />
            <span className="absolute -bottom-px -right-px z-10 h-3.5 w-3.5 border-b-2 border-r-2 border-acid" />
            <HeroCanvas />
            <div className="absolute inset-x-3.5 bottom-3.5 rounded-sm border border-acid/25 bg-background/90 p-3 font-mono text-[10px] tracking-[0.08em] text-acid">
              GLITCH.BE — LET'S CRACK THE CODE
              <span className="mt-0.5 block text-[9px] text-muted-faint">
                Bruxelles · Strategy · Creative · Web
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TICKER = [
  "Stratégie de marque","Direction créative","Web & Développement","Marketing Digital",
  "Identité visuelle","TVCs & Production","SEO & Croissance","Formation & Conseil",
  "Menus animés","Packaging Design",
];

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="relative z-10 overflow-hidden border-y border-border bg-surface-1 py-3.5">
      <div className="ticker-track">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3.5 whitespace-nowrap px-9 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-soft">
            <span className="h-1 w-1 shrink-0 rounded-full bg-acid" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function Clients() {
  const clients = [
    ["Vodafone", "Egypt · DDB Cairo"],["Arab Bank", "Egypt · DDB Cairo"],
    ["Mitsubishi", "Bahrain · JWT"],["Energizer", "Egypt · BBDO"],
    ["Zain", "Bahrain · JWT"],["TMG", "Egypt · DDB"],
    ["Makifornia", "Brussels · CMLeon"],["Président", "Egypt · BBDO"],
  ];
  return (
    <div className="border-y border-border bg-surface-1 py-14">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Ils nous ont fait confiance</Reveal>
        <Reveal className="flex flex-wrap overflow-hidden rounded-sm border border-border">
          {clients.map(([name, meta]) => (
            <div
              key={name}
              className="flex-1 basis-[140px] border-b border-r border-border px-5 py-[22px] transition-colors hover:bg-surface-2"
            >
              <div className="mb-0.5 text-sm font-semibold text-foreground">{name}</div>
              <div className="font-mono text-[9px] tracking-[0.06em] text-muted-faint">{meta}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

function Difference() {
  const items = [
    ["01 — STRATÉGIE", "On pense avant d'agir.", <>Chaque projet commence par une vraie réflexion stratégique — <strong className="font-medium text-muted-strong">pas par un devis</strong>. On analyse votre marché, votre concurrence, vos clients. Ensuite on crée.</>],
    ["02 — CRÉATION", "20 ans de création publicitaire.", <><strong className="font-medium text-muted-strong">DDB, BBDO, JWT.</strong> Plus de 35 TVCs. Des campagnes qui ont marqué des marchés. Cette expérience, on la met au service de votre brief bruxellois.</>],
    ["03 — TECH", "Le web, on l'a dans le code.", <>Votre site, votre appli, votre présence digitale — construits par <strong className="font-medium text-muted-strong">un développeur qui comprend le marketing</strong>. Pas juste un dev qui exécute.</>],
  ] as const;
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Ce qui nous rend différents</Reveal>
        <Reveal className="grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3">
          {items.map(([num, title, body], i) => (
            <div key={i} className="diff-card group relative overflow-hidden bg-background px-8 py-10 transition-colors hover:bg-surface-1">
              <span className="absolute left-0 top-0 h-0 w-0.5 bg-acid transition-all duration-300 group-hover:h-full" />
              <div className="mb-5 font-mono text-[11px] tracking-[0.14em] text-muted-soft">{num}</div>
              <h3 className="mb-3.5 text-xl font-bold tracking-[-0.02em] text-foreground">{title}</h3>
              <p className="text-sm leading-[1.7] text-muted-faint">{body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { num: "01", title: "Stratégie & Création publicitaire", body: "Du positionnement de marque à la campagne 360°. L'idée qui colle, le message qui convertit.", tags: [["Brand strategy","a"],["TVC & Radio","a"],["Copywriting",""],["Campagnes",""]] },
    { num: "02", title: "Marketing Digital & Croissance", body: "SEO, réseaux sociaux, publicité en ligne. Votre visibilité, mesurée et optimisée chaque semaine.", tags: [["SEO","a"],["Meta & Google Ads",""],["Analytics",""],["Content",""]] },
    { num: "03", title: "Web & Développement", body: "Sites, e-commerce, applications web. Conçus pour convertir. Construits pour durer.", tags: [["Webflow","c"],["E-commerce","c"],["UI/UX",""],["Web apps",""]] },
    { num: "04", title: "Formation & Conseil", body: "On forme aussi vos équipes. Marketing digital, réseaux sociaux, stratégie de contenu — en présentiel à Bruxelles.", tags: [["Ateliers",""],["CF2M","a"],["Coaching",""],["En ligne",""]] },
  ];
  return (
    <section id="services" className="pb-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Ce qu'on fait pour vous</Reveal>
        <Reveal className="grid gap-3 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.num} className="group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30">
              <div className="mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft">{s.num}</div>
              <h3 className="mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground">{s.title}</h3>
              <p className="mb-4 text-sm leading-[1.65] text-muted-faint">{s.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(([label, kind]) => (
                  <span
                    key={label}
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${
                      kind === "a"
                        ? "border-acid/25 text-acid"
                        : kind === "c"
                        ? "border-cyn/25 text-cyn"
                        : "border-border text-muted-faint"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-acid transition-all hover:gap-2.5">
                Découvrir →
              </a>
            </div>
          ))}
        </Reveal>
        <div className="mt-8 text-center">
          <a href="#" className="btn-secondary inline-flex">Découvrir tous nos services</a>
        </div>
      </div>
    </section>
  );
}

function FeaturedCase() {
  return (
    <section id="portfolio" className="pb-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Une réalisation récente</Reveal>
        <Reveal className="overflow-hidden rounded border border-border bg-surface-1">
          <div
            className="relative flex h-[220px] items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0a0a14,#1a0a0a)" }}
          >
            <span className="absolute left-3.5 top-3.5 rounded-sm border border-acid/30 bg-acid/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-acid">
              ● Identité visuelle · Packaging
            </span>
            <CaseCanvas />
            <div className="relative z-10 flex flex-col items-center gap-2.5">
              <div style={{ fontFamily: "Georgia, serif", fontSize: 52, fontStyle: "italic", color: "white", textShadow: "0 2px 16px rgba(0,0,0,.5)" }}>Pales</div>
              <div className="h-0.5 w-20 rounded-sm" style={{ background: "#f0c040" }} />
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Drinks · Bruxelles</div>
            </div>
          </div>
          <div className="grid gap-7 p-8 md:grid-cols-3">
            <div>
              <div className="case-col-label">Le défi</div>
              <div className="case-col-title">Lancer une marque de boissons belge engagée — de zéro.</div>
              <div className="case-col-body">Pales Drinks : 100% naturel, halal, avec 10% des bénéfices reversés à des actions humanitaires. Aucune identité existante. Tout à créer.</div>
            </div>
            <div>
              <div className="case-col-label">Ce qu'on a fait</div>
              <div className="case-col-title">Identité complète, 5 saveurs, production-ready.</div>
              <div className="case-col-body">Logo, palette chromatique, illustrations botaniques, gabarits canette 360° et supports marketing — système déclinable et durable.</div>
            </div>
            <div className="rounded-sm border border-acid/15 bg-acid/5 p-5">
              <div className="case-col-label">Résultat</div>
              <div className="font-mono text-[28px] font-bold leading-none text-acid">5</div>
              <div className="text-xs text-muted-faint">Saveurs avec identité complète validée au premier round</div>
              <a href="#" className="mt-3.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-acid hover:gap-2.5">
                Voir le case study →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="equipe" className="py-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Deux experts. Un seul brief.</Reveal>
        <Reveal className="grid gap-4 md:grid-cols-2">
          {[
            {
              role: "Directeur créatif & Co-fondateur",
              name: "Joe Chamata",
              bio: "20 ans chez DDB, BBDO, JWT — du Caire à Bahreïn à Bruxelles. Basé à Woluwe-Saint-Pierre depuis 2010. Formateur en marketing digital au CF2M depuis 2018. Il crée les idées qui font vendre.",
              statNum: "20+", statLabel: "ans de direction créative internationale",
              tags: [["DDB · BBDO · JWT",""],["35+ TVCs","a"],["CF2M · Bruxelles",""]],
              avatar: { hair:"#2a1a0a", skin:"#c8906a", shirt:"#1a1a2a", accent:"#b6ff2e" } as const,
              tint: "rgba(182,255,46,.06)",
            },
            {
              role: "Développeur web & Co-fondateur",
              name: "Soliman Azoz",
              bio: "Développeur web et architecte digital. Il transforme chaque concept créatif en une expérience web qui performe — belle à voir, robuste à l'usage, mesurable en résultats.",
              statNum: "100+", statLabel: "projets web livrés",
              tags: [["Webflow","a"],["Full-stack","a"],["UI/UX Design",""]],
              avatar: { hair:"#1a1a1a", skin:"#d4a574", shirt:"#1a1a3a", accent:"#00e5ff" } as const,
              tint: "rgba(0,229,255,.06)",
            },
          ].map((m) => (
            <div key={m.name} className="overflow-hidden rounded-sm border border-border bg-surface-1 transition-colors hover:border-acid/30">
              <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-surface-2">
                <PixelAvatar {...m.avatar} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 60%, ${m.tint} 100%)` }} />
              </div>
              <div className="border-y border-border bg-background px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-acid">
                {m.role}
              </div>
              <div className="p-[22px]">
                <div className="mb-1.5 text-xl font-bold tracking-[-0.02em] text-foreground">{m.name}</div>
                <div className="mb-3.5 text-[13px] leading-[1.65] text-muted-faint">{m.bio}</div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-mono text-[28px] font-bold leading-none text-acid">{m.statNum}</span>
                  <span className="text-xs text-muted-soft">{m.statLabel}</span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {m.tags.map(([label, kind]) => (
                    <span key={label} className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a" ? "border-acid/20 text-acid" : "border-border text-muted-faint"}`}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
        <div className="mt-7 text-center">
          <a href="#" className="btn-secondary inline-flex">En savoir plus sur l'équipe</a>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="relative overflow-hidden rounded border border-border bg-surface-1 px-14 py-[72px] text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono font-bold tracking-[-0.04em]"
            style={{ fontSize: "clamp(80px,14vw,180px)", color: "transparent", WebkitTextStroke: "1px var(--grid-line)" }}
          >
            GLITCH
          </span>
          <h2 className="relative mb-3.5 font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(28px,4vw,50px)" }}>
            Votre prochain projet <span className="text-acid">commence ici.</span>
          </h2>
          <p className="relative mb-9 text-base text-muted-faint">
            Partagez-nous votre brief. On vous répond en moins de 24h.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">Démarrer un projet →</a>
            <a href="#" className="btn-secondary inline-flex">Réserver un appel de 30 min — gratuit</a>
          </div>
          <p className="relative mt-5 font-mono text-[11px] tracking-[0.04em] text-muted-faint">
            Ou écrivez-nous directement sur WhatsApp →
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="pb-20">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">Parlons de votre projet</Reveal>
        <Reveal className="mb-12">
          <h2 className="font-bold tracking-[-0.02em]" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
            On ne mord pas.<br />Et on répond en moins de 24h.
          </h2>
        </Reveal>
        <Reveal className="grid gap-3.5 md:grid-cols-2">
          <Field label="Votre prénom et nom *"><input type="text" placeholder="Jean Dupont" className="form-input" /></Field>
          <Field label="Votre entreprise"><input type="text" placeholder="Acme SPRL" className="form-input" /></Field>
          <Field label="Votre email *"><input type="email" placeholder="jean@acme.be" className="form-input" /></Field>
          <Field label="Téléphone / WhatsApp"><input type="tel" placeholder="+32 …" className="form-input" /></Field>
          <Field label="J'ai besoin d'aide pour… *">
            <select className="form-input">
              <option value="">Sélectionnez un service</option>
              <option>Stratégie & création publicitaire</option>
              <option>Marketing digital (SEO / Ads)</option>
              <option>Site web & développement</option>
              <option>Identité visuelle</option>
              <option>Formation & conseil</option>
              <option>Je ne sais pas encore</option>
            </select>
          </Field>
          <Field label="Budget approximatif">
            <select className="form-input">
              <option value="">Sélectionnez une fourchette</option>
              <option>Moins de 1.500€</option>
              <option>1.500€ – 5.000€</option>
              <option>5.000€ – 15.000€</option>
              <option>15.000€+</option>
              <option>À définir ensemble</option>
            </select>
          </Field>
          <Field label="Dites-nous en quelques mots ce que vous préparez" full>
            <textarea
              placeholder="Même les idées en cours de formation sont les bienvenues."
              className="form-input min-h-[110px] resize-y"
            />
          </Field>
          <Field full>
            <button type="button" className="btn-primary w-fit">Envoyer mon brief →</button>
            <p className="mt-2.5 font-mono text-[10px] tracking-[0.04em] text-muted-faint">
              Vos informations restent confidentielles. On ne partage rien avec des tiers.
            </p>
          </Field>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children, full = false }: { label?: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
      {label && <label className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-soft">{label}</label>}
      {children}
    </div>
  );
}

function Footer() {
  const [lang, setLang] = useState<"FR" | "NL" | "EN">("FR");
  return (
    <footer className="relative z-10 border-t border-border px-0 pb-9 pt-14">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-[52px] grid grid-cols-2 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-0.5">
              <span className="font-mono text-[18px] font-bold text-foreground">GLITCH</span>
              <span className="font-mono text-[18px] font-bold text-acid">.BE</span>
            </div>
            <p className="mt-2.5 max-w-[240px] text-[13px] leading-[1.65] text-muted-soft">
              Agence de communication et marketing à Bruxelles. Stratégie, création, web — livrés comme un tout par deux experts qui se parlent.
            </p>
          </div>
          {[
            ["Services", ["Stratégie & création","Marketing digital","Web & développement","Identité visuelle","Formation"]],
            ["L'agence", ["À propos","Réalisations","Blog","Pourquoi GLITCH","Formules & tarifs"]],
            ["Contact", ["hello@glitch.be","WhatsApp","LinkedIn","Instagram","Bruxelles, Belgique"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <h4 className="mb-[18px] font-mono text-[9px] uppercase tracking-[0.18em] text-muted-soft">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {(items as string[]).map((it) => (
                  <li key={it}>
                    <a href="#" className="text-[13px] text-muted-faint transition-colors hover:text-acid">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="font-mono text-[10px] tracking-[0.06em] text-muted-soft">
            © 2025 GLITCH.BE — Comm & Marketing · Tous droits réservés · Mentions légales
          </p>
          <div className="flex gap-3.5">
            {(["FR","NL","EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                  lang === l ? "text-acid" : "text-muted-soft hover:text-acid"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  // Re-trigger canvases on theme change by keying the page
  const { theme } = useTheme();
  useEffect(() => { /* keep theme reactive */ }, [theme]);

  return (
    <div className="relative">
      <Nav />
      <div className="pointer-events-none fixed inset-0 z-0 pixel-grid" />
      <div className="pointer-events-none fixed inset-0 z-[1] scanlines" />
      <div className="relative z-[2]">
        <Hero />
        <Ticker />
        <Clients />
        <Difference />
        <Services />
        <FeaturedCase />
        <Team />
        <BottomCTA />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
