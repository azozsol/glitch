import { createFileRoute } from '@tanstack/react-router'

function RouteComponent() {
    return <div>Hello "/services"!</div>
}
import { Reveal } from "@/components/glitch/layout";

export const Route = createFileRoute("/$lang/services")({
    head: () => ({
        meta: [
            { title: "Services — GLITCH.BE — Agence Comm & Marketing à Bruxelles" },
            {
                name: "description",
                content:
                    "Stratégie & création publicitaire, marketing digital, web & développement, formation. Découvrez tous les services de GLITCH.BE.",
            },
            { property: "og:title", content: "Services — GLITCH.BE" },
            {
                property: "og:description",
                content: "Stratégie · Création · Web · Marketing Digital · Formation.",
            },
        ],
    }),
    component: ServicesPage,
});

const SERVICES = [
    {
        num: "01",
        title: "Stratégie & Création publicitaire",
        body: "Du positionnement de marque à la campagne 360°. L'idée qui colle, le message qui convertit. On part toujours d'une vraie réflexion stratégique avant de créer quoi que ce soit.",
        tags: [["Brand strategy", "a"], ["TVC & Radio", "a"], ["Copywriting", ""], ["Campagnes", ""]],
    },
    {
        num: "02",
        title: "Marketing Digital & Croissance",
        body: "SEO, réseaux sociaux, publicité en ligne. Votre visibilité, mesurée et optimisée chaque semaine, avec des rapports clairs et des décisions basées sur la donnée.",
        tags: [["SEO", "a"], ["Meta & Google Ads", ""], ["Analytics", ""], ["Content", ""]],
    },
    {
        num: "03",
        title: "Web & Développement",
        body: "Sites, e-commerce, applications web. Conçus pour convertir, construits pour durer — par un développeur qui comprend le marketing, pas juste un dev qui exécute.",
        tags: [["Webflow", "c"], ["E-commerce", "c"], ["UI/UX", ""], ["Web apps", ""]],
    },
    {
        num: "04",
        title: "Identité visuelle",
        body: "Logo, palette chromatique, charte graphique, gabarits de communication. Un système visuel cohérent et déclinable sur tous vos supports, papier comme digital.",
        tags: [["Branding", "a"], ["Logo", ""], ["Packaging", ""], ["Charte graphique", ""]],
    },
    {
        num: "05",
        title: "Formation & Conseil",
        body: "On forme aussi vos équipes. Marketing digital, réseaux sociaux, stratégie de contenu — en présentiel à Bruxelles, avec des formateurs qui pratiquent ce qu'ils enseignent.",
        tags: [["Ateliers", ""], ["CF2M", "a"], ["Coaching", ""], ["En ligne", ""]],
    },
] as const;

function ServicesPage() {
    return (
        <>
            <section className="px-0 pb-16 pt-[140px]">
                <div className="mx-auto max-w-[1160px] px-8">
                    <Reveal className="section-label">Ce qu'on fait pour vous</Reveal>
                    <Reveal className="mb-4">
                        <h1 className="font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
                            Des services pensés <span className="text-acid">comme un tout.</span>
                        </h1>
                    </Reveal>
                    <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
                        Stratégie, création, web, marketing digital, formation. Cinq disciplines, une seule équipe — pour que rien ne se perde entre le brief et le résultat.
                    </Reveal>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-[1160px] px-8">
                    <Reveal className="grid gap-3 md:grid-cols-2">
                        {SERVICES.map((s) => (
                            <div
                                key={s.num}
                                className="group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30"
                            >
                                <div className="mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft">{s.num}</div>
                                <h3 className="mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground">{s.title}</h3>
                                <p className="mb-4 text-sm leading-[1.65] text-muted-faint">{s.body}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {s.tags.map(([label, kind]) => (
                                        <span
                                            key={label}
                                            className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a"
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
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>
        </>
    );
}