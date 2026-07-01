import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/glitch/layout";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";

export const Route = createFileRoute('/$lang/work')({
    head: ({ params }) => {
        const t = getDictionary(params.lang);
        return {
            meta: [
                { title: t.workPage.meta.title },
                { name: "description", content: t.workPage.meta.description },
                { property: "og:title", content: t.workPage.meta.ogTitle },
                { property: "og:description", content: t.workPage.meta.ogDescription },
            ],
        };
    },
    component: WorkPage,
});

// ─── small local hook for scroll-triggered animations (SEO bar, floating cans) ──────
function useInView<T extends HTMLElement>(threshold = 0.3) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView] as const;
}

function WorkPage() {
    const { t } = useLang();
    const w = t.workPage;

    return (
        <>
            <Hero w={w} />
            <Ticker items={w.ticker} />
            <CaseStudies w={w} />
            <OtherWork w={w} />
            <IntlStrip w={w} />
            <CtaSection w={w} />
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════
function Hero({ w }: { w: any }) {
    return (
        <section className="relative overflow-hidden px-0 pb-16 pt-[140px]">
            <div className="pixel-grid pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mx-auto max-w-[1160px] px-8">
                <Reveal className="section-label">{w.hero.kicker}</Reveal>

                <Reveal className="mb-6">
                    <h1
                        className="font-bold uppercase leading-[0.95] tracking-[-0.04em]"
                        style={{ fontSize: "clamp(40px,7vw,84px)" }}
                    >
                        <span className="block">{w.hero.h1[0]}</span>
                        <span className="block">{w.hero.h1[1]}</span>
                        <span className="block text-acid">{w.hero.h1[2]}</span>
                    </h1>
                </Reveal>

                <Reveal delay={100} className="mb-10 max-w-[460px] text-lg leading-[1.7] text-muted-foreground">
                    {w.hero.sub}
                </Reveal>

                <Reveal delay={180}>
                    <a href="#case-studies" className="btn-primary">
                        {w.hero.cta}
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// TICKER
// ═══════════════════════════════════════════════════════════════════════
function Ticker({ items }: { items: string[] }) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden border-y border-border bg-surface-1 py-[18px]">
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 whitespace-nowrap px-12 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft"
                    >
                        <span className="inline-block h-[3px] w-[3px] shrink-0 rounded-full bg-acid" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// CASE STUDIES
// ═══════════════════════════════════════════════════════════════════════
function CaseStudies({ w }: { w: any }) {
    return (
        <section id="case-studies" className="px-0 py-24">
            <div className="mx-auto max-w-[1160px] px-8">
                <Reveal className="mb-20">
                    <div className="section-label">{w.caseSection.eyebrow}</div>
                    <h2
                        className="font-bold uppercase leading-[0.95] tracking-[-0.04em]"
                        style={{ fontSize: "clamp(36px,5vw,64px)" }}
                    >
                        {w.caseSection.heading[0]}
                        <br />
                        <span className="text-acid">{w.caseSection.heading[1]}</span>
                    </h2>
                </Reveal>

                <CasePales caseData={w.cases[0]} designStory={w.designStory} />
                <CaseAmhvac caseData={w.cases[1]} />
                <CaseOdesu caseData={w.cases[2]} />
            </div>
        </section>
    );
}

function CaseMetaTable({ rows }: { rows: { label: string; value: string }[] }) {
    return (
        <div className="mb-7 overflow-hidden rounded-sm border border-border">
            {rows.map((row, i) => (
                <div
                    key={i}
                    className={`flex gap-5 px-[18px] py-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
                >
                    <div className="min-w-[80px] font-mono text-[9px] uppercase tracking-[0.12em] text-muted-soft">
                        {row.label}
                    </div>
                    <div className="text-[13px] text-muted-faint">{row.value}</div>
                </div>
            ))}
        </div>
    );
}

function CaseStat({ num, label, rest }: { num: string; label: string; rest: string }) {
    return (
        <div className="my-7 flex items-baseline gap-3 border-y border-border py-5">
            <div
                className="font-mono font-bold leading-none text-acid"
                style={{ fontSize: "clamp(40px,4.5vw,64px)" }}
            >
                {num}
            </div>
            <div className="max-w-[200px] text-[13px] leading-snug text-muted-faint">
                <strong className="mb-0.5 block text-[15px] font-bold text-foreground">{label}</strong>
                {rest}
            </div>
        </div>
    );
}

function CaseNarrative({ steps }: { steps: { label: string; title: string; body: string }[] }) {
    return (
        <div className="flex flex-col">
            {steps.map((step, i) => (
                <div
                    key={i}
                    className={`grid grid-cols-[72px_1fr] gap-6 border-b border-border py-7 ${i === 0 ? "border-t" : ""}`}
                >
                    <div className="case-col-label pt-1">{step.label}</div>
                    <div>
                        <div className="case-col-title">{step.title}</div>
                        <p className="case-col-body" dangerouslySetInnerHTML={{ __html: step.body }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function CaseEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-acid">
            <span className="block h-px w-6 shrink-0 bg-acid" />
            {children}
        </div>
    );
}

function CaseH2({ line1, line2 }: { line1: string; line2: string }) {
    return (
        <h2
            className="mb-5 font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground"
            style={{ fontSize: "clamp(32px,3.5vw,52px)" }}
        >
            {line1}
            <br />
            <span className="text-acid">{line2}</span>
        </h2>
    );
}

function CaseLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn-secondary mt-2">
            {children}
        </a>
    );
}

// ── Case 01: Palès ───────────────────────────────────────────────────
function PalesFloatingCans() {
    const [ref, inView] = useInView<HTMLDivElement>(0.3);
    return (
        <div ref={ref} className="relative flex h-full w-full items-center justify-center">
            <div
                className={`absolute bottom-5 left-[12%] z-[2] h-[270px] w-[90px] -rotate-[8deg] rounded-lg bg-gradient-to-br from-orange-500 to-red-600 opacity-80 ${inView ? "animate-[floatLeft_5s_ease-in-out_infinite_0.6s]" : ""}`}
            />
            <div
                className={`absolute left-1/2 z-[3] h-[380px] w-[120px] -translate-x-1/2 rounded-[10px] bg-gradient-to-br from-sky-500 to-cyan-500 shadow-[-16px_24px_50px_rgba(0,0,0,0.6)] ${inView ? "animate-[floatMain_4s_ease-in-out_infinite]" : ""}`}
            >
                <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="font-mono text-sm font-bold tracking-[0.1em] text-white">PALÈS</div>
                    <div className="my-2 h-px w-6 bg-white/40" />
                    <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/50">Mojito</div>
                </div>
            </div>
            <div
                className={`absolute bottom-5 right-[10%] z-[2] h-[270px] w-[90px] rotate-[7deg] rounded-lg bg-gradient-to-br from-purple-400 to-pink-300 opacity-80 ${inView ? "animate-[floatRight_4.5s_ease-in-out_infinite_1.2s]" : ""}`}
            />
            <style>{`
                @keyframes floatMain { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-18px)} }
                @keyframes floatLeft { 0%,100%{transform:rotate(-8deg) translateY(0)} 50%{transform:rotate(-8deg) translateY(-12px)} }
                @keyframes floatRight { 0%,100%{transform:rotate(7deg) translateY(0)} 50%{transform:rotate(7deg) translateY(-14px)} }
            `}</style>
        </div>
    );
}

function CanStoryCard({ src, name, flavor, body }: { src: string; name: string; flavor: string; body: string }) {
    return (
        <div className="group flex flex-col items-center rounded-sm border border-border bg-white/2 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-acid/35">
            <div
                className="mb-5 flex h-40 items-center justify-center transition-transform duration-500 group-hover:-translate-y-2.5 group-hover:scale-105"
                style={{ filter: 'drop-shadow(-8px 16px 32px rgba(0,0,0,0.5))' }}
            >
                <img
                    src={src}
                    alt="Pales can"
                    className="h-full w-auto object-contain"
                />
            </div>

            <div className="mb-1 text-[15px] font-bold text-foreground">{name}</div>
            <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-acid">{flavor}</div>
            <p className="text-left text-xs leading-relaxed text-muted-faint" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}

function CasePales({ caseData, designStory }: { caseData: any; designStory: any }) {
    const swatchPairs = [
        ["from-orange-500", "to-red-600"],
        ["from-sky-500", "to-cyan-500"],
        ["from-purple-400", "to-pink-300"],
    ];
    return (
        <div id="pales" className="mb-28">
            {/* <Reveal>
                <div className="pixel-grid relative mb-16 h-[420px] overflow-hidden rounded-sm border border-border bg-surface-1 md:h-[560px]">
                    <PalesFloatingCans />

                </div>
            </Reveal> */}

            <Reveal>
                <div className="relative mt-16 mb-16 overflow-hidden rounded-sm border border-border bg-background/95 p-10 md:p-14">
                    <div className="relative z-1">
                        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-soft">
                            {designStory.eyebrow}
                        </div>
                        <h3
                            className="mb-12 font-bold uppercase leading-tight tracking-[-0.03em]"
                            style={{ fontSize: "clamp(24px,2.5vw,36px)" }}
                        >
                            {designStory.heading[0]}
                            <br />
                            <span className="text-acid">{designStory.heading[1]}</span>
                        </h3>
                        <div className="grid gap-8 md:grid-cols-3">
                            {designStory.cans.map((can: any, i: number) => (
                                <CanStoryCard
                                    src={can.src}
                                    key={can.name}
                                    name={can.name}
                                    flavor={can.flavor}
                                    body={can.body}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="grid gap-16 md:grid-cols-2">
                    <div>
                        <CaseEyebrow>{caseData.eyebrow}</CaseEyebrow>
                        <CaseH2 line1={caseData.h2[0]} line2={caseData.h2[1]} />
                        <p className="mb-5 text-[15px] leading-[1.8] text-muted-faint">{caseData.intro}</p>
                        <CaseStat num={caseData.stat.num} label={caseData.stat.label} rest={caseData.stat.rest} />
                        <CaseMetaTable rows={caseData.meta} />
                        {/* <CaseLink href="https://www.pales-drinks.com/">{caseData.link}</CaseLink> */}
                    </div>
                    <CaseNarrative steps={caseData.steps} />
                </div>
            </Reveal>

            {/* <Reveal> */}
            {/* <div className="pixel-grid relative mt-16 overflow-hidden rounded-sm border border-border bg-surface-1 p-10 md:p-14">
                    <div className="relative z-1">
                        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-soft">
                            {designStory.eyebrow}
                        </div>
                        <h3
                            className="mb-12 font-bold uppercase leading-tight tracking-[-0.03em]"
                            style={{ fontSize: "clamp(24px,2.5vw,36px)" }}
                        >
                            {designStory.heading[0]}
                            <br />
                            <span className="text-acid">{designStory.heading[1]}</span>
                        </h3>
                        <div className="grid gap-8 md:grid-cols-3">
                            {designStory.cans.map((can: any, i: number) => (
                                <CanStoryCard
                                    key={can.name}
                                    name={can.name}
                                    flavor={can.flavor}
                                    body={can.body}
                                    swatchFrom={swatchPairs[i][0]}
                                    swatchTo={swatchPairs[i][1]}
                                />
                            ))}
                        </div>
                    </div>
                </div> */}
            {/* </Reveal> */}
        </div>
    );
}

// ── Case 02: AMHVAC ──────────────────────────────────────────────────
function SeoProgressBar() {
    const [ref, inView] = useInView<HTMLDivElement>(0.5);
    return (
        <div ref={ref} className="mt-2 h-1 overflow-hidden rounded-full bg-surface-3">
            <div
                className="h-full rounded-full bg-acid transition-[width] duration-[1500ms] ease-out"
                style={{ width: inView ? "95%" : "0%" }}
            />
        </div>
    );
}

function CaseAmhvac({ caseData }: { caseData: any }) {
    const stats = [
        { label: "Score SEO global", before: "35 / 100", after: "95", change: "↑ +60 points", bar: true },
        { label: "Mots-clés classés", before: undefined, after: "24+", change: "↑ ×6 requêtes ciblées" },
        { label: "Core Web Vitals", before: undefined, after: "✓ Passed", change: "LCP · FID · CLS", green: true },
    ];
    // const features = [
    //     ["🔥", "Chauffage", "Chaudières · Pompes"],
    //     ["❄️", "Climatisation", "Réversible · Cassettes"],
    //     ["💨", "Ventilation", "VMC · Résidentiel"],
    //     ["♻️", "Écoénergie", "Primes Bruxelles"],
    // ];
    return (
        <div id="amhvac" className="mb-28 mt-28">
            <Reveal>
                <div className="flex justify-center relative mb-16 h-auto flex-col gap-6 overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:flex-row md:items-center md:p-10">
                    {/* Browser mockup */}
                    <div className="relative z-1 max-w-120 flex-1 overflow-hidden rounded-lg bg-background shadow-2xl">
                        <div className="flex items-center gap-2.5 bg-surface-2 px-4 py-2.5">
                            <div className="flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                                <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </div>
                            <div className="flex-1 rounded-sm bg-background/95 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-soft">
                                amhvac.be
                            </div>
                        </div>
                        <div className="p-5">
                            <img src="/images/HMVAC SEO.png" alt="AMHVAC home page" />
                            {/* <div className="mb-3 rounded-sm bg-gradient-to-br from-surface-3 to-surface-2 p-6">
                                <div className="mb-2 font-mono text-base font-bold text-foreground">AM HVAC</div>
                                <div className="mb-1.5 text-lg font-bold leading-tight text-foreground">
                                    Expert HVAC écoénergétique en Belgique
                                </div>
                                <div className="text-[11px] leading-relaxed text-muted-soft">
                                    Installation, entretien et réparation — chauffage, ventilation, climatisation. 12 ans d'expérience.
                                </div>
                                <div className="mt-3.5 flex gap-2">
                                    <div className="rounded-sm bg-acid px-3.5 py-1.5 text-[10px] font-bold text-background">
                                        Devis gratuit
                                    </div>
                                    <div className="rounded-sm border border-border px-3.5 py-1.5 text-[10px] text-muted-soft">
                                        +32 484 71 10 44
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {features.map(([icon, name, sub]) => (
                                    <div key={name} className="rounded-sm border border-border bg-background p-2.5">
                                        <div className="mb-1 text-base">{icon}</div>
                                        <div className="text-[10px] font-bold text-muted-foreground">{name}</div>
                                        <div className="mt-0.5 text-[9px] text-muted-soft">{sub}</div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    {/* SEO stats */}
                    <div className="relative z-1 flex min-w-[200px] flex-col gap-3.5">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-md border border-border bg-white/[0.04] px-5 py-4">
                                <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-soft">
                                    {stat.label}
                                </div>
                                {stat.before && (
                                    <div className="mb-0.5 text-[11px] text-muted-faint line-through">{stat.before}</div>
                                )}
                                <div className={`font-mono font-bold leading-none ${stat.green ? "text-base text-emerald-500" : "text-2xl text-acid"}`}>
                                    {stat.after}
                                </div>
                                <div className="mt-1 text-[10px] text-emerald-500">{stat.change}</div>
                                {stat.bar && <SeoProgressBar />}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="grid gap-16 md:grid-cols-2">
                    <div>
                        <CaseEyebrow>{caseData.eyebrow}</CaseEyebrow>
                        <h2
                            className="mb-5 font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground"
                            style={{ fontSize: "clamp(32px,3.5vw,52px)" }}
                        >
                            {caseData.h2[0]}
                            <span className="text-acid">{caseData.h2[1]}</span>
                        </h2>
                        <p className="mb-5 text-[15px] leading-[1.8] text-muted-faint">{caseData.intro}</p>
                        <CaseStat num={caseData.stat.num} label={caseData.stat.label} rest={caseData.stat.rest} />
                        <CaseMetaTable rows={caseData.meta} />
                        {/* <CaseLink href="https://amhvac.be/">{caseData.link}</CaseLink> */}
                    </div>
                    <CaseNarrative steps={caseData.steps} />
                </div>
            </Reveal>
        </div>
    );
}

// ── Case 03: ODESU ───────────────────────────────────────────────────
function CaseOdesu({ caseData }: { caseData: any }) {
    const widgets = [
        { label: "Positionnement", val: "Concept store", sub: "Mode · Lifestyle · Bxl" },
        { label: "Identité", val: "Logo + Charte", sub: "Print · Digital · Signalétique" },
        { label: "Comm", val: "Social + Print", sub: "Lancement de marque" },
    ];
    return (
        <div id="odesu" className="mt-28">
            <Reveal>
                <div className="relative mb-16 flex h-auto items-center justify-center overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:p-10">
                    <div className="relative z-[1] w-full max-w-[700px] overflow-hidden rounded-lg shadow-2xl">
                        <div className="flex flex-col bg-background/95">
                            <img src="/images/glitch odesu.png" alt="AMHVAC home page" />

                            {/* <div className="border-b-[3px] border-acid bg-gradient-to-br from-surface-3 to-surface-2 px-10 pb-5 pt-8">
                                <div className="mb-1 font-mono text-[28px] font-bold uppercase tracking-[0.1em] text-foreground">
                                    ODESU
                                </div>
                                <div className="text-xs uppercase tracking-[0.1em] text-muted-soft">
                                    Concept Store · Ixelles · Bruxelles
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 bg-black/20 p-6 sm:grid-cols-3">
                                {widgets.map((wd) => (
                                    <div key={wd.label} className="flex flex-col gap-2 rounded-sm border border-acid/15 bg-acid/[0.08] p-4">
                                        <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted-soft">
                                            {wd.label}
                                        </div>
                                        <div className="text-[13px] font-bold text-foreground">{wd.val}</div>
                                        <div className="text-[10px] text-muted-faint">{wd.sub}</div>
                                    </div>
                                ))}
                                <div className="flex flex-col gap-2 rounded-sm border border-acid/15 bg-acid/[0.08] p-4 sm:col-span-3">
                                    <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted-soft">
                                        Résultat
                                    </div>
                                    <div className="font-bold text-acid" style={{ fontSize: "clamp(20px,2.5vw,32px)" }}>
                                        Identité complète livrée
                                    </div>
                                    <div className="text-[10px] text-muted-faint">Du premier brief à l'ouverture</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="grid gap-16 md:grid-cols-2">
                    <CaseNarrative steps={caseData.steps} />
                    <div>
                        <CaseEyebrow>{caseData.eyebrow}</CaseEyebrow>
                        <CaseH2 line1={caseData.h2[0]} line2={caseData.h2[1]} />
                        <p className="mb-5 text-[15px] leading-[1.8] text-muted-faint">{caseData.intro}</p>
                        <CaseStat num={caseData.stat.num} label={caseData.stat.label} rest={caseData.stat.rest} />
                        <CaseMetaTable rows={caseData.meta} />
                        {/* <CaseLink href="#contact">{caseData.link}</CaseLink> */}
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// OTHER WORK (mini grid)
// ═══════════════════════════════════════════════════════════════════════
function MiniVisual({ name }: { name: string }) {
    switch (name) {
        case "NYApocalypse":
            return (
                <div className="p-5 text-center">
                    <div className="font-mono text-[28px] font-bold leading-none tracking-[-0.03em] text-foreground">NYA</div>
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">pocalypse</div>
                    <div className="mt-4 flex justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-600" />
                        <div className="h-2 w-2 rounded-full bg-orange-500" />
                        <div className="h-2 w-2 rounded-full bg-foreground" />
                    </div>
                </div>
            );
        case "Smash Smash":
            return (
                <div className="grid h-full w-full grid-cols-2 gap-1.5 p-3">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col justify-end rounded-sm border border-acid/15 bg-acid/[0.08] p-2">
                            <div className="mb-0.5 h-[3px] rounded-full bg-acid" />
                            <div className="h-[3px] w-1/2 rounded-full bg-acid/40" />
                        </div>
                    ))}
                </div>
            );
        case "Crispy Chicken":
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2.5">
                    <div className="text-center font-mono text-[13px] font-bold uppercase leading-tight tracking-[0.08em] text-foreground">
                        Crispy
                        <br />
                        Chicken
                    </div>
                    <div className="flex gap-1.5">
                        <div className="h-[3px] w-7 rounded-full bg-acid" />
                        <div className="h-[3px] w-4 rounded-full bg-acid/35" />
                        <div className="h-[3px] w-2.5 rounded-full bg-acid/15" />
                    </div>
                </div>
            );
        case "Tayba":
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-50 to-amber-100 p-5">
                    <div className="text-xl font-bold tracking-[0.12em] text-amber-950">طيب</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-amber-700">TAYBA</div>
                </div>
            );
        default:
            return null;
    }
}

function MiniCard({ name, cat, city }: { name: string; cat: string; city: string }) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-sm border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30">
            <div className="flex h-40 items-center justify-center overflow-hidden bg-surface-2">
                <MiniVisual name={name} />
            </div>
            <div className="p-4">
                <div className="mb-1 text-[15px] font-bold tracking-[-0.01em] text-foreground">{name}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-acid">{cat}</div>
                <div className="mt-1 text-[11px] text-muted-faint">{city}</div>
            </div>
        </div>
    );
}

function OtherWork({ w }: { w: any }) {
    return (
        <section id="realisations" className="border-y border-border bg-surface-1/40 px-0 py-24">
            <div className="mx-auto max-w-[1160px] px-8">
                <Reveal className="mb-12">
                    <div className="section-label">{w.otherSection.eyebrow}</div>
                    <h2
                        className="font-bold uppercase leading-[0.95] tracking-[-0.04em]"
                        style={{ fontSize: "clamp(32px,4vw,52px)" }}
                    >
                        {w.otherSection.heading[0]}
                        <br />
                        <span className="text-acid">{w.otherSection.heading[1]}</span>
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {w.miniProjects.map((p: any) => (
                            <MiniCard key={p.name} name={p.name} cat={p.cat} city={p.city} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// INTERNATIONAL STRIP
// ═══════════════════════════════════════════════════════════════════════
function AgencyCard({ name, detail, clients }: { name: string; detail: string; clients: string[] }) {
    return (
        <div className="bg-surface-1 px-6 py-7 transition-colors duration-200 hover:bg-surface-2">
            <div className="mb-1.5 text-[17px] font-bold tracking-[-0.02em] text-foreground">{name}</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-soft">{detail}</div>
            <div className="mt-3.5 flex flex-col gap-1.5">
                {clients.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-xs text-muted-faint">
                        <span className="text-[10px] text-acid">→</span>
                        {c}
                    </div>
                ))}
            </div>
        </div>
    );
}

function IntlStrip({ w }: { w: any }) {
    return (
        <section className="pixel-grid relative overflow-hidden bg-background px-0 py-20">
            <div className="relative z-[1] mx-auto max-w-[1160px] px-8">
                <div className="grid items-center gap-16 md:grid-cols-[1fr_2fr]">
                    <Reveal>
                        <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-soft">
                            <span className="block h-px w-6 bg-acid" />
                            {w.intl.eyebrow}
                        </div>
                        <h2
                            className="font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground"
                            style={{ fontSize: "clamp(28px,3vw,44px)" }}
                        >
                            {w.intl.heading[0]}
                            <br />
                            {w.intl.heading[1]}
                            <br />
                            <span className="text-acid">{w.intl.heading[2]}</span>
                        </h2>
                        <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-muted-foreground">{w.intl.sub}</p>
                    </Reveal>
                    <Reveal delay={120}>
                        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                            {w.intl.agencies.map((ag: any) => (
                                <AgencyCard key={ag.name} name={ag.name} detail={ag.detail} clients={ag.clients} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════════════════
function CtaSection({ w }: { w: any }) {
    return (
        <section id="contact" className="relative overflow-hidden border-t border-border bg-surface-1/40 px-0 py-24 text-center">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono font-bold tracking-[-0.04em] text-transparent"
                style={{ fontSize: "clamp(100px,18vw,260px)", WebkitTextStroke: "1px var(--surface-3)" }}
            >
                24H
            </div>
            <div className="relative mx-auto max-w-[1160px] px-8">
                <div className="mx-auto max-w-[760px]">
                    <Reveal className="section-label justify-center">{w.cta.eyebrow}</Reveal>
                    <Reveal delay={80}>
                        <h2
                            className="mb-6 font-bold uppercase leading-[0.92] tracking-[-0.05em] text-foreground"
                            style={{ fontSize: "clamp(40px,5.5vw,76px)" }}
                        >
                            {w.cta.heading[0]}
                            <br />
                            {w.cta.heading[1]}
                            <br />
                            <span className="text-acid">{w.cta.heading[2]}</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className="mx-auto mb-10 max-w-[440px] text-[17px] leading-[1.75] text-muted-foreground">
                            {w.cta.sub}
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div className="flex flex-wrap items-center justify-center gap-5">
                            <a href="#" className="btn-primary">{w.cta.primary}</a>
                            <a href="#" className="btn-secondary">{w.cta.secondary}</a>
                        </div>
                    </Reveal>
                    <Reveal delay={320}>
                        <div className="mt-7 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-soft">
                            {w.cta.whatsapp}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}