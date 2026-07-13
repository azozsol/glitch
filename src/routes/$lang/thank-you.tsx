import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/glitch/layout";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";

export const Route = createFileRoute("/$lang/thank-you")({
  head: ({ params }) => {
    const t = getDictionary(params.lang);
    return {
      meta: [
        { title: t.thankYouPage.meta.title },
        { name: "description", content: t.thankYouPage.meta.description },
        { property: "og:title", content: t.thankYouPage.meta.ogTitle },
        { property: "og:description", content: t.thankYouPage.meta.ogDescription },
      ],
    };
  },
  component: ThankYouPage,
});

function ThankYouPage() {
  const { lang, t } = useLang();
  const c = t.thankYouPage;

  return (
    <section className="px-0 pb-20 pt-[140px]">
      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="section-label">{c.eyebrow}</Reveal>
        <Reveal className="mb-4">
          <h1 className="font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            {c.titleStrong} <span className="text-acid">{c.titleAccent}</span>
          </h1>
        </Reveal>
        <Reveal className="mb-10 max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
          {c.intro}
        </Reveal>
        <Reveal>
          <Link to="/$lang" params={{ lang }} className="btn-primary w-fit">
            {c.cta}
          </Link>
        </Reveal>
      </div>
      {/* Third-party pixel / conversion tracking (Meta Pixel, Google Ads, etc.) goes here — added manually later. */}
    </section>
  );
}
