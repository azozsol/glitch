import { createFileRoute } from "@tanstack/react-router";
import { Reveal, ContactForm } from "@/components/glitch/layout";

export const Route = createFileRoute("/$lang/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GLITCH.BE — Agence Comm & Marketing à Bruxelles" },
      {
        name: "description",
        content: "Parlons de votre projet. On répond en moins de 24h. Agence basée à Bruxelles.",
      },
      { property: "og:title", content: "Contact — GLITCH.BE" },
      {
        property: "og:description",
        content: "Partagez-nous votre brief. On vous répond en moins de 24h.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-0 pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1160px] px-8">
          <Reveal className="section-label">Contact</Reveal>
          <Reveal className="mb-4">
            <h1 className="font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
              Parlons de <span className="text-acid">votre projet.</span>
            </h1>
          </Reveal>
          <Reveal className="max-w-[600px] text-lg leading-[1.7] text-muted-foreground">
            On ne mord pas, et on répond en moins de 24h. Remplissez le formulaire ci-dessous ou écrivez-nous
            directement sur WhatsApp.
          </Reveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
