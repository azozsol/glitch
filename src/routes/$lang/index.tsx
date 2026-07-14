import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";
import { HeroCanvas, CaseCanvas, PixelAvatar } from "@/components/glitch/canvases";
import { Reveal } from "@/components/glitch/layout";
import { WorldMapDemo } from "@/components/WorldMapDemo";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";
//import GlitchLogo from "@/components/GlitchLogo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = getDictionary(params.lang);
    return {
      meta: [
        { title: t.home.meta.title },
        { name: "description", content: t.home.meta.description },
        { property: "og:title", content: t.home.meta.ogTitle },
        { property: "og:description", content: t.home.meta.ogDescription },
      ],
    };
  },
  component: Index,
});


function Hero() {
  const { t } = useLang();
  const h = t.home.hero;

  return (
    //<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-0 pb-20 pt-[100px]">
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden ">

      {/* Background image */}
      {/* <img
        src="images/bg-1.png"
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}

      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-background" /> */}

      {/* World map background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <WorldMapDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-8 md:grid-cols-[1fr_420px]">
        <div className="text-center md:text-left">
          <p className="mb-6 flex items-center justify-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-acid md:justify-start">
            <span className="h-px w-5 bg-acid " />
            {h.eyebrow}
          </p>
          <Reveal>
            <h1
              className="mb-7 font-bold leading-none tracking-[-0.03em]"
              style={{ fontSize: "clamp(38px,5.5vw,72px)" }}
            >
              <span
                className="glitch-overlay uppercase relative inline-block text-foreground"
                data-t={h.titleLine1}
              >
                {h.titleLine1}
              </span>
              <span className="block text-acid uppercase"> {h.titleLine2}</span>
              <span className="block text-foreground uppercase">{h.titleLine3}</span>
            </h1>
          </Reveal>
          <Reveal>

            <p className="mx-auto mb-10 max-w-130 text-lg leading-[1.7] text-muted-foreground md:mx-0">
              <strong className="font-medium text-foreground">
                {h.subtitleStrong}
              </strong>{" "}
              {h.subtitleRest}
            </p>
            <a href="#contact" className="btn-primary">{h.ctaPrimary}</a>
          </Reveal>
        </div>
      </div>
      {/* <div className="pointer-events-none absolute inset-0">
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
            {h.eyebrow}
          </p>
          <h1 className="mb-7 font-bold leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(38px,5.5vw,72px)" }}>
            <span className="glitch-overlay relative inline-block text-foreground" data-t={h.titleLine1}>
              {h.titleLine1}
            </span>
            <span className="block text-acid">{h.titleLine2}</span>
            <span className="block text-foreground">{h.titleLine3}</span>
          </h1>
          <p className="mb-10 max-w-[520px] text-lg leading-[1.7] text-muted-foreground">
            <strong className="font-medium text-foreground">{h.subtitleStrong}</strong> {h.subtitleRest}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a href="#contact" className="btn-primary">{h.ctaPrimary}</a>
            <a href="#portfolio" className="btn-secondary">{h.ctaSecondary}</a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative aspect-square overflow-hidden rounded border border-acid/20 bg-surface-1 ">
            <span className="absolute -left-px -top-px z-10 h-3.5 w-3.5 border-l-2 border-t-2 border-acid" />
            <span className="absolute -right-px -top-px z-10 h-3.5 w-3.5 border-r-2 border-t-2 border-acid" />
            <span className="absolute -bottom-px -left-px z-10 h-3.5 w-3.5 border-b-2 border-l-2 border-acid" />
            <span className="absolute -bottom-px -right-px z-10 h-3.5 w-3.5 border-b-2 border-r-2 border-acid" />
            <HeroCanvas />
            <div className="absolute inset-x-3.5 bottom-3.5 rounded-sm border border-acid/25 bg-background/90 p-3 font-mono text-[10px] tracking-[0.08em] text-acid">
              {h.cardBadge}
              <span className="mt-0.5 block text-[9px] text-muted-faint">
                {h.cardSubBadge}
              </span>
            </div>

          </div>


        </div>
      </div> */}
    </section>
  );
}

function Ticker() {
  const { t } = useLang();
  const items = [...t.home.ticker, ...t.home.ticker];

  return (
    <div className="relative z-10 overflow-hidden border-y border-border bg-surface-1 py-3.5">
      <div className="ticker-track">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3.5 whitespace-nowrap px-9 font-mono text-[11px] uppercase tracking-widest text-muted-soft">
            <span className="h-1 w-1 shrink-0 rounded-full bg-acid" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function Clients() {
  const { t } = useLang();
  const c = t.home.clients;

  return (
    <div className="border-y border-border bg-surface-1 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="section-label">{c.label}</Reveal>
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-sm p-px bg-border sm:grid-cols-4 lg:grid-cols-8">
          {c.names.map(({ name, meta }) => (
            <div
              key={name}
              className="group bg-surface-1 px-5 py-5.5 transition-colors hover:bg-acid "
            >
              <div className="mb-0.5 text-sm font-semibold text-foreground group-hover:text-white">{name}</div>
              <div className="font-mono text-[9px] tracking-[0.06em] text-cyn transition-colors group-hover:text-white">{meta}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

function Difference() {
  const { t } = useLang();
  const d = t.home.difference;
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="section-label">{d.label}</Reveal>
        <Reveal className="grid gap-px overflow-hidden rounded-sm p-px bg-border md:grid-cols-3">
          {d.items.map((item, i) => {
            const [before, strong, after] = item.bodyRest.split("{strong}");
            return (
              <div key={i} className="diff-card group relative overflow-hidden bg-surface-1 px-8 py-10 transition-colors ">
                <span className="absolute left-0 top-0 h-0 w-0.5 bg-acid transition-all duration-300 group-hover:h-full" />
                <div className="mb-5 font-mono text-[11px] tracking-[0.14em] text-muted-soft">{item.num}</div>
                <h3 className="mb-3.5 text-xl font-bold tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="text-sm leading-[1.7] text-muted-faint">
                  {before}<strong className="font-medium text-muted-strong">{item.bodyStrong}</strong>{after}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLang();
  const s = t.home.services;

  return (
    <section id="services" className="pb-20">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="section-label">{s.label}</Reveal>
        <Reveal className="grid gap-3 md:grid-cols-2">
          {s.items.map((svc) => (
            <div key={svc.num} className="group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30">
              <div className="mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft">{svc.num}</div>
              <h3 className="mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground">{svc.title}</h3>
              <p className="mb-4 text-sm leading-[1.65] text-muted-faint">{svc.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map(([label, kind]) => (
                  <span
                    key={label}
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a"
                      ? "border-acid/25 text-acid"
                      : kind === "c"
                        ? "border-cyn/25 text-cyn"
                        : "border-border text-cyn"
                      }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-acid transition-all hover:gap-2.5">
                {s.discoverLabel}
              </a>
            </div>
          ))}
        </Reveal>
        <div className="mt-8 text-center">
          <a href="#" className="btn-secondary inline-flex">{s.ctaAll}</a>
        </div>
      </div>
    </section>
  );
}

function FeaturedCase() {
  const { t, lang } = useLang();
  const fc = t.home.featuredCase;

  return (
    <section id="portfolio" className="pb-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* <Reveal className="section-label">Une réalisation récente</Reveal> */}
        <Reveal className="overflow-hidden rounded-sm border border-border bg-surface-1">
          <div
            className="relative flex h-65 items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0a0a14,#1a0a0a)" }}
          >
            {/* <span className="absolute left-3.5 top-3.5 rounded-sm border border-acid/30 bg-acid/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-acid">
              ● Identité visuelle · Packaging
            </span> */}
            {/* <CaseCanvas /> */}
            <div className="relative z-10 flex flex-col items-center gap-2.5">
              <img src="/images/pales.jpeg" alt="Pales three products" />

              {/* <div style={{ fontFamily: "Georgia, serif", fontSize: 52, fontStyle: "italic", color: "white", textShadow: "0 2px 16px rgba(0,0,0,.5)" }}>Pales</div>
              <div className="h-0.5 w-20 rounded-sm" style={{ background: "#f0c040" }} />
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Drinks · Bruxelles</div> */}
            </div>
          </div>
          <div className="grid gap-7 p-8 md:grid-cols-3">
            <div>
              <div className="case-col-label">{fc.challengeLabel}</div>
              <div className="case-col-title">{fc.challengeTitle}</div>
              <div className="case-col-body">{fc.challengeBody}</div>
            </div>
            <div>
              <div className="case-col-label">{fc.whatWeDidLabel}</div>
              <div className="case-col-title">{fc.whatWeDidTitle}</div>
              <div className="case-col-body">{fc.whatWeDidBody}</div>
            </div>
            <div className="rounded-sm border border-acid/15 bg-acid/5 p-5">
              <div className="case-col-label">{fc.resultLabel}</div>
              <div className="font-mono text-[28px] font-bold leading-none text-acid">3</div>
              <div className="text-xs text-muted-faint">{fc.resultBody}</div>
              <a href={`/${lang}/work#case-studies`} className="mt-3.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-acid hover:gap-2.5">
                {fc.caseStudyLink}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BottomCTA() {
  const { t } = useLang();
  const b = t.home.bottomCta;

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="relative overflow-hidden rounded-sm border border-border bg-surface-1 px-14 py-18 text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono font-bold tracking-[-0.04em]"
            style={{ fontSize: "clamp(80px,14vw,180px)", color: "transparent", WebkitTextStroke: "1px var(--grid-line)" }}
          >
            GLITCH
          </span>
          <h2 className="relative mb-3.5 font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(28px,4vw,50px)" }}>
            {b.titleStrong} <span className="text-acid">{b.titleAccent}</span>
          </h2>
          <p className="relative mb-9 text-base text-muted-faint">
            {b.body}
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">{b.ctaPrimary}</a>
            <a href="#" className="btn-secondary inline-flex">{b.ctaSecondary}</a>
          </div>
          <p className="relative mt-5 font-mono text-[11px] tracking-[0.04em] text-muted-faint">
            {b.whatsapp}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  // Re-trigger canvases on theme change by keying the page
  const { theme } = useTheme();
  useEffect(() => { /* keep theme reactive */ }, [theme]);

  return (
    <div className="relative">

      <div className="relative z-2">
        <Hero />
        <Ticker />
        <Clients />
        <Difference />
        <Services />
        <FeaturedCase />
        <BottomCTA />
      </div>
    </div>
  );
}
