import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/glitch/layout";
import { PixelAvatar } from "@/components/glitch/canvases";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const t = getDictionary(params.lang);
    return {
      meta: [
        { title: t.aboutPage.meta.title },
        { name: "description", content: t.aboutPage.meta.description },
        { property: "og:title", content: t.aboutPage.meta.ogTitle },
        { property: "og:description", content: t.aboutPage.meta.ogDescription },
      ],
    };
  },
  component: AboutPage,
});

const AVATARS = [
  { hair: "#2a1a0a", skin: "#c8906a", shirt: "#1a1a2a", accent: "#b6ff2e" },
  { hair: "#1a1a1a", skin: "#d4a574", shirt: "#1a1a3a", accent: "#00e5ff" },
] as const;
const TINTS = ["rgba(182,255,46,.06)", "rgba(0,229,255,.06)"];

function AboutPage() {
  const { t } = useLang();
  const a = t.aboutPage;

  return (
    <>
      <section className="px-0 pb-16 pt-[140px]">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">{a.eyebrow}</Reveal>
          <Reveal className="mb-4">
            <h1 className="font-bold tracking-[-0.03em] uppercase" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
              {a.titleStrong} <span className="text-acid uppercase">{a.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
            {a.intro}
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">{a.differenceLabel}</Reveal>
          <Reveal className="grid gap-px overflow-hidden rounded p-px bg-border md:grid-cols-3">
            {a.differenceItems.map((item, i) => {
              const [before, after] = item.bodyRest.split("{strong}");
              return (
                <div
                  key={i}
                  className="diff-card group relative overflow-hidden bg-background px-8 py-10 transition-colors hover:bg-surface-1"
                >
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

      <section className="pb-24">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">{a.teamLabel}</Reveal>
          <Reveal className="grid gap-4 md:grid-cols-2">
            {t.team.members.map((m, i) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-sm border border-border bg-surface-1 transition-colors hover:border-acid/30"
              >
                <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-surface-2">
                  <PixelAvatar {...AVATARS[i]} />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 60%, ${TINTS[i]} 100%)` }}
                  />
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
                      <span
                        key={label}
                        className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a" ? "border-acid/20 text-acid" : "border-border text-muted-faint"
                          }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}