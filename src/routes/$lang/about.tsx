import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/glitch/layout";
import { PixelAvatar } from "@/components/glitch/canvases";

export const Route = createFileRoute("/$lang/about")({
  head: () => ({
    meta: [
      { title: "À propos — GLITCH.BE — Agence Comm & Marketing à Bruxelles" },
      {
        name: "description",
        content:
          "Deux experts, un seul brief. Découvrez l'équipe derrière GLITCH.BE et ce qui nous rend différents.",
      },
      { property: "og:title", content: "À propos — GLITCH.BE" },
      {
        property: "og:description",
        content: "20 ans de création publicitaire. Le web dans le code. Une équipe, un brief.",
      },
    ],
  }),
  component: AboutPage,
});

const DIFFERENCE_ITEMS = [
  {
    num: "01 — STRATÉGIE",
    title: "On pense avant d'agir.",
    body: (
      <>
        Chaque projet commence par une vraie réflexion stratégique —{" "}
        <strong className="font-medium text-muted-strong">pas par un devis</strong>. On analyse votre marché, votre
        concurrence, vos clients. Ensuite on crée.
      </>
    ),
  },
  {
    num: "02 — CRÉATION",
    title: "20 ans de création publicitaire.",
    body: (
      <>
        <strong className="font-medium text-muted-strong">DDB, BBDO, JWT.</strong> Plus de 35 TVCs. Des campagnes qui
        ont marqué des marchés. Cette expérience, on la met au service de votre brief bruxellois.
      </>
    ),
  },
  {
    num: "03 — TECH",
    title: "Le web, on l'a dans le code.",
    body: (
      <>
        Votre site, votre appli, votre présence digitale — construits par{" "}
        <strong className="font-medium text-muted-strong">un développeur qui comprend le marketing</strong>. Pas
        juste un dev qui exécute.
      </>
    ),
  },
];

const TEAM = [
  {
    role: "Directeur créatif & Co-fondateur",
    name: "Joe Chamata",
    bio: "20 ans chez DDB, BBDO, JWT — du Caire à Bahreïn à Bruxelles. Basé à Woluwe-Saint-Pierre depuis 2010. Formateur en marketing digital au CF2M depuis 2018. Il crée les idées qui font vendre.",
    statNum: "20+",
    statLabel: "ans de direction créative internationale",
    tags: [["DDB · BBDO · JWT", ""], ["35+ TVCs", "a"], ["CF2M · Bruxelles", ""]],
    avatar: { hair: "#2a1a0a", skin: "#c8906a", shirt: "#1a1a2a", accent: "#b6ff2e" } as const,
    tint: "rgba(182,255,46,.06)",
  },
  {
    role: "Développeur web & Co-fondateur",
    name: "Soliman Azoz",
    bio: "Développeur web et architecte digital. Il transforme chaque concept créatif en une expérience web qui performe — belle à voir, robuste à l'usage, mesurable en résultats.",
    statNum: "100+",
    statLabel: "projets web livrés",
    tags: [["Webflow", "a"], ["Full-stack", "a"], ["UI/UX Design", ""]],
    avatar: { hair: "#1a1a1a", skin: "#d4a574", shirt: "#1a1a3a", accent: "#00e5ff" } as const,
    tint: "rgba(0,229,255,.06)",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-0 pb-16 pt-[140px]">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">L'agence</Reveal>
          <Reveal className="mb-4">
            <h1 className="font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
              Deux experts. <span className="text-acid">Un seul brief.</span>
            </h1>
          </Reveal>
          <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
            GLITCH.BE est née à Bruxelles de la rencontre entre 20 ans de création publicitaire internationale et une
            expertise web pointue. Pas de chef de projet entre vous et nous — juste deux personnes qui se parlent et
            qui livrent.
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">Ce qui nous rend différents</Reveal>
          <Reveal className="grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3">
            {DIFFERENCE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="diff-card group relative overflow-hidden bg-background px-8 py-10 transition-colors hover:bg-surface-1"
              >
                <span className="absolute left-0 top-0 h-0 w-0.5 bg-acid transition-all duration-300 group-hover:h-full" />
                <div className="mb-5 font-mono text-[11px] tracking-[0.14em] text-muted-soft">{item.num}</div>
                <h3 className="mb-3.5 text-xl font-bold tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="text-sm leading-[1.7] text-muted-faint">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">L'équipe</Reveal>
          <Reveal className="grid gap-4 md:grid-cols-2">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-sm border border-border bg-surface-1 transition-colors hover:border-acid/30"
              >
                <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-surface-2">
                  <PixelAvatar {...m.avatar} />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 60%, ${m.tint} 100%)` }}
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
                        className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${
                          kind === "a" ? "border-acid/20 text-acid" : "border-border text-muted-faint"
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
