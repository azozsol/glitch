import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useReveal } from "@/hooks/use-reveal";
import { useLang } from "@/hooks/use-lang";
import { SUPPORTED_LANGS, type Lang } from "@/i18n";

/**
 * Reveal
 * Wraps children in a div/section that fades/slides in on scroll via useReveal.
 * Shared by every page that wants the same scroll-reveal effect.
 */
export function Reveal({
    children,
    className = "",
    as: Tag = "div",
}: {
    children: ReactNode;
    className?: string;
    as?: "div" | "section";
}) {
    const ref = useReveal<HTMLDivElement>();
    return (
        <Tag ref={ref as any} className={`reveal-on-scroll ${className}`}>
            {children}
        </Tag>
    );
}

/**
 * Field
 * Label + control wrapper used in forms (e.g. ContactForm).
 */
export function Field({
    label,
    children,
    full = false,
}: {
    label?: string;
    children: ReactNode;
    full?: boolean;
}) {
    return (
        <div className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
            {label && (
                <label className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-soft">
                    {label}
                </label>
            )}
            {children}
        </div>
    );
}

/**
 * ContactForm
 * The lead-capture form section, shared by the homepage (bottom section)
 * and the dedicated /contact page.
 */
export function ContactForm() {
    const { t } = useLang();
    const f = t.contactForm;

    return (
        <section id="contact" className="pb-20">
            <div className="mx-auto max-w-[1160px] px-8">
                <Reveal className="section-label">{f.label}</Reveal>
                <Reveal className="mb-12">
                    <h2 className="font-bold tracking-[-0.02em]" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                        {f.titleLine1}<br />{f.titleLine2}
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

/**
 * Nav
 * Site-wide navigation bar with theme toggle.
 * Links now point to real routes (/services, /about, /contact) instead of
 * in-page anchors, since those sections no longer all live on one page.
 */
export function Nav() {
    const { theme, toggle } = useTheme();

    const links: [string, string][] = [
        ["/services", "Services"],
        ["/#portfolio", "Réalisations"],
        ["/about", "L'équipe"],
        ["/contact", "Contact"],
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-acid/10 bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
                <Link
                    to="/"
                    className="flex items-center gap-0.5 font-mono text-[18px] font-bold tracking-tight text-foreground"
                >
                    {/* <span className="relative inline-block">GLITCH</span>
                    <span className="text-acid">.BE</span>
                    <span className="ml-2.5 border-l border-muted-soft pl-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-faint">
                        Comm & Marketing
                    </span> */}
                    <img src="/images/glitch-Logo.svg" alt="GLITCH.BE — Comm & Marketing" className="h-10 w-auto" />
                </Link>
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map(([href, label]) => (
                        <li key={href}>
                            <Link
                                to={href}
                                className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-faint transition-colors hover:text-acid [&.active]:text-acid"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/contact"
                            className="rounded-sm bg-acid px-[18px] py-[9px] font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-background hover:bg-foreground"
                        >
                            Démarrer un projet →
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggle}
                            aria-label="Basculer entre le thème clair et sombre"
                            className="relative inline-block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-faint transition-colors hover:text-acid"
                        >
                            {/* Élément invisible qui réserve toujours la largeur du texte le plus long */}
                            <span className="invisible" aria-hidden="true">
                                ☀ Light
                            </span>
                            <span className="absolute inset-0">
                                {theme === "dark" ? "☀ Light" : "☾ Dark"}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

/**
 * Footer
 * Site-wide footer with language switcher.
 */
export function Footer() {
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
                        ["Services", ["Stratégie & création", "Marketing digital", "Web & développement", "Identité visuelle", "Formation"]],
                        ["L'agence", ["À propos", "Réalisations", "Blog", "Pourquoi GLITCH", "Formules & tarifs"]],
                        ["Contact", ["hello@glitch.be", "WhatsApp", "LinkedIn", "Instagram", "Bruxelles, Belgique"]],
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
                        {(["FR", "NL", "EN"] as const).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${lang === l ? "text-acid" : "text-muted-soft hover:text-acid"
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