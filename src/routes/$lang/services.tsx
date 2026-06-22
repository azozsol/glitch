import { createFileRoute } from '@tanstack/react-router'
import { Reveal } from "@/components/glitch/layout";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";

function RouteComponent() {
    return <div>Hello "/services"!</div>
}

export const Route = createFileRoute("/$lang/services")({
    head: ({ params }) => {
        const t = getDictionary(params.lang);
        return {
            meta: [
                { title: t.servicesPage.meta.title },
                { name: "description", content: t.servicesPage.meta.description },
                { property: "og:title", content: t.servicesPage.meta.ogTitle },
                { property: "og:description", content: t.servicesPage.meta.ogDescription },
            ],
        };
    },
    component: ServicesPage,
});

function ServicesPage() {
    const { t } = useLang();
    const s = t.servicesPage;

    return (
        <>
            <section className="px-0 pb-16 pt-[140px]">
                <div className="mx-auto max-w-[1160px] px-8">
                    <Reveal className="section-label">{s.eyebrow}</Reveal>
                    <Reveal className="mb-4">
                        <h1 className="font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
                            {s.titleStrong} <span className="text-acid">{s.titleAccent}</span>
                        </h1>
                    </Reveal>
                    <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
                        {s.intro}
                    </Reveal>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-[1160px] px-8">
                    <Reveal className="grid gap-3 md:grid-cols-2">
                        {s.items.map((item) => (
                            <div
                                key={item.num}
                                className="group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30"
                            >
                                <div className="mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft">{item.num}</div>
                                <h3 className="mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground">{item.title}</h3>
                                <p className="mb-4 text-sm leading-[1.65] text-muted-faint">{item.body}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map(([label, kind]) => (
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