import { createFileRoute } from "@tanstack/react-router";
import { Reveal, ContactForm } from "@/components/glitch/layout";
import { useLang } from "@/hooks/use-lang";
import { getDictionary } from "@/i18n";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const t = getDictionary(params.lang);
    return {
      meta: [
        { title: t.contactPage.meta.title },
        { name: "description", content: t.contactPage.meta.description },
        { property: "og:title", content: t.contactPage.meta.ogTitle },
        { property: "og:description", content: t.contactPage.meta.ogDescription },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const c = t.contactPage;

  return (
    <>
      <section className="px-0 pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">{c.eyebrow}</Reveal>
          <Reveal className="mb-4">
            <h1 className="font-bold tracking-[-0.03em] uppercase" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
              {c.titleStrong} <span className="text-acid uppercase">{c.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
            {c.intro}
          </Reveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}