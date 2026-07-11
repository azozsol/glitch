import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
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
 * GridHoverBackground
 * Full-bleed grid of small squares, each lighting up on hover via pure CSS
 * (no JS mouse tracking). Meant to sit behind hero content as an
 * `absolute inset-0` layer — content stacks on top naturally since it's a
 * later, positioned sibling.
 */
export function GridHoverBackground({
    cols = 30,
    rows = 12,
    className = "",
}: {
    cols?: number;
    rows?: number;
    className?: string;
}) {
    const cells = Array.from({ length: cols * rows });
    return (
        <div
            aria-hidden
            className={`absolute inset-0 z-10 overflow-hidden ${className}`}
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}

        >
            {cells.map((_, i) => (
                <div
                    key={i}
                    className="border border-grid-line bg-transparent transition-colors duration-500 delay-300 ease-out hover:bg-acid hover:duration-100 hover:delay-0"
                />
            ))}
        </div>
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
 * and the dedicated /[lang]/contact page.
 */
export function ContactForm() {
    const { t } = useLang();
    const f = t.contactForm;

    return (
        <section id="contact" className="pb-20">
            <div className="mx-auto max-w-6xl px-8">
                <Reveal className="section-label">{f.label}</Reveal>
                <Reveal className="mb-12">
                    <h2 className="font-bold tracking-[-0.02em]" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                        {f.titleLine1}<br />{f.titleLine2}
                    </h2>
                </Reveal>
                <Reveal className="grid gap-3.5 md:grid-cols-2">
                    <Field label={f.fields.name}>
                        <input type="text" placeholder={f.fields.namePlaceholder} className="form-input" />
                    </Field>
                    <Field label={f.fields.company}>
                        <input type="text" placeholder={f.fields.companyPlaceholder} className="form-input" />
                    </Field>
                    <Field label={f.fields.email}>
                        <input type="email" placeholder={f.fields.emailPlaceholder} className="form-input" />
                    </Field>
                    <Field label={f.fields.phone}>
                        <input type="tel" placeholder={f.fields.phonePlaceholder} className="form-input" />
                    </Field>
                    <Field label={f.fields.need}>
                        <select className="form-input">
                            <option value="">{f.fields.needPlaceholder}</option>
                            {f.fields.needOptions.map((opt) => (
                                <option key={opt}>{opt}</option>
                            ))}
                        </select>
                    </Field>
                    <Field label={f.fields.budget}>
                        <select className="form-input">
                            <option value="">{f.fields.budgetPlaceholder}</option>
                            {f.fields.budgetOptions.map((opt) => (
                                <option key={opt}>{opt}</option>
                            ))}
                        </select>
                    </Field>
                    <Field label={f.fields.message} full>
                        <textarea placeholder={f.fields.messagePlaceholder} className="form-input min-h-[110px] resize-y" />
                    </Field>
                    <Field full>
                        <button type="button" className="btn-primary w-fit">{f.submit}</button>
                        <p className="mt-2.5 font-mono text-[10px] tracking-[0.04em] text-muted-faint">
                            {f.privacyNote}
                        </p>
                    </Field>
                </Reveal>
            </div>
        </section>
    );
}

/**
 * Nav
 * Site-wide navigation bar with theme toggle and language-aware links.
 * Every link is prefixed with the current language ($lang param), so
 * navigating from /en/services to "Contact" goes to /en/contact, not /fr/contact.
 */

export function Nav() {
    const { theme, toggle } = useTheme();
    const { lang, t } = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links: [string, string][] = [
        [`/${lang}`, t.nav.home],
        [`/${lang}/services`, t.nav.services],
        [`/${lang}/work`, t.nav.realisations],
        [`/${lang}/about`, t.nav.about],
        [`/${lang}/contact`, t.nav.contact],
    ];

    function switchLang(target: Lang) {
        if (target === lang) return;
        // Replace the leading /fr or /en segment with the target language,
        // keeping the rest of the path (and any trailing segments) intact.
        const rest = location.pathname.replace(/^\/(fr|en)/, "");
        navigate({ to: `/${target}${rest}` || `/${target}` });
    }

    const langLabels: Record<Lang, string> = { fr: "FR", en: "EN" };

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-acid/10 bg-background/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
                {/* Logo */}
                <Link
                    to="/$lang"
                    params={{ lang }}
                    className="flex items-center gap-0.5 font-mono text-[18px] font-bold tracking-tight text-foreground"
                >
                    <img src="/images/glitch-Logo.svg" alt="GLITCH.BE — Comm & Marketing" className="h-8 w-auto" />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map(([href, label]) => (
                        <li key={href}>
                            <Link
                                to={href}
                                activeOptions={href === `/${lang}` ? { exact: true } : undefined}
                                className="font-mono text-[11px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid [&.active]:text-acid"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/$lang/contact"
                            params={{ lang }}
                            className="rounded-sm bg-acid px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-background hover:bg-foreground"
                        >
                            {t.nav.cta}
                        </Link>
                    </li>
                    <li>
                        {/* Fix: grid stack both labels, show only the active one — width is always the wider of the two */}
                        {mounted && (<button
                            onClick={toggle}
                            aria-label="Toggle light / dark theme"
                            className="grid font-mono text-[18px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid"
                        >
                            <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
                                {t.nav.themeLight}
                            </span>
                            <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
                                {t.nav.themeDark}
                            </span>
                            <span className="col-start-1 row-start-1">
                                {theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
                            </span>
                        </button>)}
                    </li>
                </ul>
                {/* Mobile: theme toggle + hamburger */}
                {mounted && (<div className="flex items-center gap-6 md:hidden">
                    <button
                        onClick={toggle}
                        aria-label="Toggle light / dark theme"
                        className="grid font-mono text-[18px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid"
                    >
                        <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
                            {t.nav.themeLight}
                        </span>
                        <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
                            {t.nav.themeDark}
                        </span>
                        <span className="col-start-1 row-start-1">
                            {theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
                        </span>
                    </button>

                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="flex flex-col justify-center gap-1.5 text-foreground"
                    >
                        <span className={`block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
                        <span className={`block h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
                    </button>
                </div>)}
                <div className="flex gap-3.5">
                    {SUPPORTED_LANGS.map((l) => (
                        <button
                            key={l}
                            onClick={() => switchLang(l)}
                            className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${lang === l ? "text-acid" : "text-muted-soft hover:text-acid"
                                }`}
                        >
                            {langLabels[l]}
                        </button>
                    ))}
                </div>
            </div>


            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="border-t border-acid/10 bg-background/95 px-8 py-6 md:hidden">
                    <ul className="flex flex-col gap-5">
                        {links.map(([href, label]) => (
                            <li key={href}>
                                <Link
                                    to={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-mono text-[11px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid [&.active]:text-acid"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/$lang/contact"
                                params={{ lang }}
                                onClick={() => setMenuOpen(false)}
                                className="inline-block rounded-sm bg-acid px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-background hover:bg-foreground"
                            >
                                {t.nav.cta}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

/**
 * Footer
 * Site-wide footer with a real language switcher: clicking FR/EN
 * navigates to the same page in the other language, preserving the
 * current path (e.g. /fr/services -> /en/services).
 */
export function Footer() {
    const { lang, t } = useLang();
    const location = useLocation();
    const navigate = useNavigate();

    function switchLang(target: Lang) {
        if (target === lang) return;
        // Replace the leading /fr or /en segment with the target language,
        // keeping the rest of the path (and any trailing segments) intact.
        const rest = location.pathname.replace(/^\/(fr|en)/, "");
        navigate({ to: `/${target}${rest}` || `/${target}` });
    }

    const langLabels: Record<Lang, string> = { fr: "FR", en: "EN" };

    return (
        <footer className="relative z-10 border-t border-border px-0 pb-9 pt-14 bg-background/95">
            <div className="mx-auto max-w-6xl px-8">
                <div className="mb-14 grid grid-cols-2 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
                    <div>
                        <div className="flex items-center gap-0.5">
                            <span className="font-mono text-[18px] font-bold text-foreground">GLITCH</span>
                            <span className="font-mono text-[18px] font-bold text-acid">.BE</span>
                        </div>
                        <p className="mt-2.5 max-w-[240px] text-[13px] leading-[1.65] text-muted-soft">
                            {t.footer.tagline}
                        </p>
                    </div>
                    {[t.footer.colServices, t.footer.colAgency, t.footer.colContact].map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-[18px] font-mono text-[9px] uppercase tracking-[0.18em] text-muted-soft">{col.title}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {col.items.map((it) => (
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
                        {t.footer.copyright}
                    </p>
                    <div className="flex gap-3.5">
                        {SUPPORTED_LANGS.map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLang(l)}
                                className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${lang === l ? "text-acid" : "text-muted-soft hover:text-acid"
                                    }`}
                            >
                                {langLabels[l]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
