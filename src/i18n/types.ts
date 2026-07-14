/**
 * Shape of a single language's full dictionary.
 * fr.ts and en.ts must both satisfy this type — if you add a key to one
 * and forget the other, TypeScript will error, so nothing silently
 * falls back to blank text.
 */
export type Dictionary = {
    meta: {
        siteName: string;
    };

    nav: {
        home: string;
        services: string;
        realisations: string; // -> currently links to /#portfolio on the homepage
        about: string;
        contact: string;
        cta: string; // "Démarrer un projet →"
        themeLight: string; // label shown when switching TO light mode
        themeDark: string; // label shown when switching TO dark mode
    };

    footer: {
        tagline: string;
        colServices: { title: string; items: string[] };
        colAgency: { title: string; items: string[] };
        colContact: { title: string; items: string[] };
        copyright: string;
    };

    home: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        hero: {
            eyebrow: string;
            titleLine1: string;
            titleLine2: string; // "de votre" (acid color)
            titleLine3: string; // "communication."
            subtitleStrong: string; // "Stratégie, création, web."
            subtitleRest: string; // "Une équipe. Un brief. Zéro prise de tête."
            ctaPrimary: string;
            ctaSecondary: string;
            cardBadge: string; // "GLITCH.BE — LET'S CRACK THE CODE"
            cardSubBadge: string;
        };
        ticker: string[];
        clients: {
            label: string;
            names: { name: string; meta: string }[];
        };
        difference: {
            label: string;
            items: { num: string; title: string; bodyStrong: string; bodyRest: string }[];
        };
        services: {
            label: string;
            items: { num: string; title: string; body: string; tags: [string, string][] }[];
            discoverLabel: string; // "Découvrir →" per card
            ctaAll: string; // "Découvrir tous nos services"
        };
        featuredCase: {
            imgAlt: string;
            challengeLabel: string;
            challengeTitle: string;
            challengeBody: string;
            whatWeDidLabel: string;
            whatWeDidTitle: string;
            whatWeDidBody: string;
            resultLabel: string;
            resultBody: string;
            caseStudyLink: string;
        };
        team: {
            label: string;
            ctaMore: string;
        };
        bottomCta: {
            titleStrong: string; // "Votre prochain projet"
            titleAccent: string; // "commence ici."
            body: string;
            ctaPrimary: string;
            ctaSecondary: string;
            whatsapp: string;
        };
    };

    team: {
        // Shared between homepage Team section and the About page
        members: {
            role: string;
            name: string;
            bio: string;
            statNum: string;
            statLabel: string;
            tags: [string, string][];
        }[];
    };

    servicesPage: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        eyebrow: string;
        titleStrong: string; // "Des services pensés"
        titleAccent: string; // "comme un tout."
        intro: string;
        items: { num: string; title: string; body: string; tags: [string, string][] }[];
    };

    aboutPage: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        eyebrow: string;
        titleStrong: string; // "Deux experts."
        titleAccent: string; // "Un seul brief."
        intro: string;
        differenceLabel: string;
        differenceItems: { num: string; title: string; bodyStrong: string; bodyRest: string }[];
        teamLabel: string;
    };

    contactPage: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        eyebrow: string;
        titleStrong: string; // "Parlons de"
        titleAccent: string; // "votre projet."
        intro: string;
    };

    contactForm: {
        label: string;
        titleLine1: string;
        titleLine2: string;
        fields: {
            name: string;
            namePlaceholder: string;
            company: string;
            companyPlaceholder: string;
            email: string;
            emailPlaceholder: string;
            phone: string;
            phonePlaceholder: string;
            need: string;
            needPlaceholder: string;
            needOptions: string[];
            budget: string;
            budgetPlaceholder: string;
            budgetOptions: string[];
            message: string;
            messagePlaceholder: string;
        };
        submit: string;
        privacyNote: string;
        submitting: string; // label shown on the submit button while the request is in flight
        errors: {
            required: string;
            invalidEmail: string;
            submitFailed: string; // generic toast copy for a failed/network-error submission
        };
    };

    thankYouPage: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        eyebrow: string;
        titleStrong: string;
        titleAccent: string;
        intro: string;
        cta: string; // "Back to home" style CTA label
    };

    workPage: {
        meta: { title: string; description: string; ogTitle: string; ogDescription: string };
        hero: { kicker: string; h1: [string, string, string]; sub: string; cta: string };
        ticker: string[];
        caseSection: { eyebrow: string; heading: [string, string] };
        cases: Array<{
            eyebrow: string;
            h2: [string, string];
            intro: string;
            stat: { num: string; label: string; rest: string };
            meta: Array<{ label: string; value: string }>;
            link: string;
            steps: Array<{ label: string; title: string; body: string }>;
        }>;
        designStory: {
            eyebrow: string;
            heading: [string, string, string];
            cans: Array<{ src: string, name: string; flavor: string; body: string }>;
        };
        otherSection: { eyebrow: string; heading: [string, string] };
        miniProjects: Array<{ src: string; name: string; cat: string; city: string }>;
        intl: {
            eyebrow: string;
            heading: [string, string];
            sub: string;
            agencies: Array<{ name: string; detail: string; clients: string[] }>;
        };
        cta: {
            eyebrow: string;
            heading: [string, string, string];
            sub: string;
            primary: string;
            secondary: string;
            whatsapp: string;
        };
    };

};