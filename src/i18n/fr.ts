import type { Dictionary } from "./types";

/**
 * PLACEHOLDER ENGLISH COPY
 * ------------------------
 * Every translatable string below is prefixed with "[EN]" so it's
 * obvious in the UI which text is still a placeholder. Replace the
 * placeholder text (and remove the "[EN] " prefix) with your real,
 * reviewed English copy. The *structure* (keys, arrays, tags, {strong}
 * placeholders) must stay identical to fr.ts — only the string values
 * should change.
 */
export const fr: Dictionary = {
    meta: {
        siteName: "GLITCH.BE",
    },

    nav: {
        services: "[EN] Services",
        realisations: "[EN] Work",
        about: "[EN] The team",
        contact: "[EN] Contact",
        cta: "[EN] Start a project →",
        themeLight: "☀ Light",
        themeDark: "☾ Dark",
    },

    footer: {
        tagline: "[EN] Communication and marketing agency in Brussels. Strategy, creative, web — delivered as one by two experts who actually talk to each other.",
        colServices: {
            title: "[EN] Services",
            items: ["[EN] Strategy & creative", "[EN] Digital marketing", "[EN] Web & development", "[EN] Visual identity", "[EN] Training"],
        },
        colAgency: {
            title: "[EN] Agency",
            items: ["[EN] About", "[EN] Work", "[EN] Blog", "[EN] Why GLITCH", "[EN] Plans & pricing"],
        },
        colContact: {
            title: "[EN] Contact",
            items: ["hello@glitch.be", "WhatsApp", "LinkedIn", "Instagram", "[EN] Brussels, Belgium"],
        },
        copyright: "© 2025 GLITCH.BE — Comm & Marketing · [EN] All rights reserved · [EN] Legal notice",
    },

    home: {
        meta: {
            title: "[EN] GLITCH.BE — Comm & Marketing Agency in Brussels",
            description: "[EN] Strategy, advertising creative, and web development — one team, one brief, zero headaches. Agency based in Brussels.",
            ogTitle: "[EN] GLITCH.BE — Comm & Marketing Agency",
            ogDescription: "[EN] We crack the code of your communication. Strategy · Creative · Web.",
        },
        hero: {
            eyebrow: "[EN] Comm & Marketing Agency — Brussels",
            titleLine1: "[EN] We crack the code",
            titleLine2: "[EN] of your",
            titleLine3: "[EN] communication.",
            subtitleStrong: "[EN] Strategy, creative, web.",
            subtitleRest: "[EN] One team. One brief. Zero headaches.",
            ctaPrimary: "[EN] Tell us about your project →",
            ctaSecondary: "[EN] See our work",
            cardBadge: "GLITCH.BE — LET'S CRACK THE CODE",
            cardSubBadge: "[EN] Brussels · Strategy · Creative · Web",
        },
        ticker: [
            "[EN] Brand strategy", "[EN] Creative direction", "[EN] Web & Development", "[EN] Digital Marketing",
            "[EN] Visual identity", "[EN] TVCs & Production", "[EN] SEO & Growth", "[EN] Training & Consulting",
            "[EN] Animated menus", "[EN] Packaging Design",
        ],
        clients: {
            label: "[EN] Brands that trusted us",
            names: [
                { name: "Vodafone", meta: "Egypt · DDB Cairo" },
                { name: "Arab Bank", meta: "Egypt · DDB Cairo" },
                { name: "Mitsubishi", meta: "Bahrain · JWT" },
                { name: "Energizer", meta: "Egypt · BBDO" },
                { name: "Zain", meta: "Bahrain · JWT" },
                { name: "TMG", meta: "Egypt · DDB" },
                { name: "Makifornia", meta: "Brussels · CMLeon" },
                { name: "Président", meta: "Egypt · BBDO" },
            ],
        },
        difference: {
            label: "[EN] What makes us different",
            items: [
                {
                    num: "01 — STRATEGY",
                    title: "[EN] We think before we act.",
                    bodyStrong: "[EN] not with a quote",
                    bodyRest: "[EN] Every project starts with real strategic thinking — {strong}. We analyze your market, your competitors, your customers. Then we create.",
                },
                {
                    num: "02 — CREATIVE",
                    title: "[EN] 20 years of advertising creative.",
                    bodyStrong: "[EN] DDB, BBDO, JWT.",
                    bodyRest: "[EN] {strong} 35+ TVCs. Campaigns that made a mark on their markets. We put that experience to work on your Brussels brief.",
                },
                {
                    num: "03 — TECH",
                    title: "[EN] The web, baked into the code.",
                    bodyStrong: "[EN] a developer who understands marketing",
                    bodyRest: "[EN] Your site, your app, your digital presence — built by {strong}. Not just a dev executing a spec.",
                },
            ],
        },
        services: {
            label: "[EN] What we do for you",
            items: [
                {
                    num: "01",
                    title: "[EN] Strategy & Advertising Creative",
                    body: "[EN] From brand positioning to 360° campaigns. The idea that sticks, the message that converts.",
                    tags: [["Brand strategy", "a"], ["TVC & Radio", "a"], ["Copywriting", ""], ["[EN] Campaigns", ""]],
                },
                {
                    num: "02",
                    title: "[EN] Digital Marketing & Growth",
                    body: "[EN] SEO, social media, online advertising. Your visibility, measured and optimized every week.",
                    tags: [["SEO", "a"], ["Meta & Google Ads", ""], ["Analytics", ""], ["Content", ""]],
                },
                {
                    num: "03",
                    title: "[EN] Web & Development",
                    body: "[EN] Websites, e-commerce, web apps. Designed to convert. Built to last.",
                    tags: [["Webflow", "c"], ["E-commerce", "c"], ["UI/UX", ""], ["[EN] Web apps", ""]],
                },
                {
                    num: "04",
                    title: "[EN] Training & Consulting",
                    body: "[EN] We train your teams too. Digital marketing, social media, content strategy — in person in Brussels.",
                    tags: [["[EN] Workshops", ""], ["CF2M", "a"], ["[EN] Coaching", ""], ["[EN] Online", ""]],
                },
            ],
            discoverLabel: "[EN] Discover →",
            ctaAll: "[EN] Discover all our services",
        },
        featuredCase: {
            imgAlt: "[EN] Pales three products",
            challengeLabel: "[EN] The challenge",
            challengeTitle: "[EN] Launch a values-driven Belgian drinks brand — from zero.",
            challengeBody: "[EN] Pales Drinks: 100% natural, halal, with 10% of profits donated to humanitarian causes. No existing identity. Everything to build.",
            whatWeDidLabel: "[EN] What we did",
            whatWeDidTitle: "[EN] Complete identity, 5 flavors, production-ready.",
            whatWeDidBody: "[EN] Logo, color palette, botanical illustrations, 360° can templates and marketing assets — a coherent, durable, scalable system.",
            resultLabel: "[EN] Result",
            resultBody: "[EN] Flavors with complete identity validated in the first round",
            caseStudyLink: "[EN] View the case study →",
        },
        team: {
            label: "[EN] Two experts. One brief.",
            ctaMore: "[EN] Learn more about the team",
        },
        bottomCta: {
            titleStrong: "[EN] Your next project",
            titleAccent: "[EN] starts here.",
            body: "[EN] Share your brief with us. We'll get back to you in under 24h.",
            ctaPrimary: "[EN] Start a project →",
            ctaSecondary: "[EN] Book a free 30-min call",
            whatsapp: "[EN] Or message us directly on WhatsApp →",
        },
    },

    team: {
        members: [
            {
                role: "[EN] Creative Director & Co-founder",
                name: "Joe Chamata",
                bio: "[EN] 20 years at DDB, BBDO, JWT — from Cairo to Bahrain to Brussels. Based in Woluwe-Saint-Pierre since 2010. Digital marketing trainer at CF2M since 2018. He creates the ideas that sell.",
                statNum: "20+",
                statLabel: "[EN] years of international creative direction",
                tags: [["DDB · BBDO · JWT", ""], ["35+ TVCs", "a"], ["CF2M · Brussels", ""]],
            },
            {
                role: "[EN] Web Developer & Co-founder",
                name: "Soliman Azoz",
                bio: "[EN] Web developer and digital architect. He turns every creative concept into a web experience that performs — beautiful to look at, robust in use, measurable in results.",
                statNum: "100+",
                statLabel: "[EN] web projects delivered",
                tags: [["Webflow", "a"], ["Full-stack", "a"], ["UI/UX Design", ""]],
            },
        ],
    },

    servicesPage: {
        meta: {
            title: "[EN] Services — GLITCH.BE — Comm & Marketing Agency in Brussels",
            description: "[EN] Strategy & advertising creative, digital marketing, web & development, training. Discover all of GLITCH.BE's services.",
            ogTitle: "[EN] Services — GLITCH.BE",
            ogDescription: "[EN] Strategy · Creative · Web · Digital Marketing · Training.",
        },
        eyebrow: "[EN] What we do for you",
        titleStrong: "[EN] Services designed",
        titleAccent: "[EN] as a whole.",
        intro: "[EN] Strategy, creative, web, digital marketing, training. Five disciplines, one team — so nothing gets lost between the brief and the result.",
        items: [
            {
                num: "01",
                title: "[EN] Strategy & Advertising Creative",
                body: "[EN] From brand positioning to 360° campaigns. The idea that sticks, the message that converts. We always start from real strategic thinking before creating anything.",
                tags: [["Brand strategy", "a"], ["TVC & Radio", "a"], ["Copywriting", ""], ["[EN] Campaigns", ""]],
            },
            {
                num: "02",
                title: "[EN] Digital Marketing & Growth",
                body: "[EN] SEO, social media, online advertising. Your visibility, measured and optimized every week, with clear reports and data-driven decisions.",
                tags: [["SEO", "a"], ["Meta & Google Ads", ""], ["Analytics", ""], ["Content", ""]],
            },
            {
                num: "03",
                title: "[EN] Web & Development",
                body: "[EN] Websites, e-commerce, web apps. Designed to convert, built to last — by a developer who understands marketing, not just a dev executing a spec.",
                tags: [["Webflow", "c"], ["E-commerce", "c"], ["UI/UX", ""], ["[EN] Web apps", ""]],
            },
            {
                num: "04",
                title: "[EN] Visual Identity",
                body: "[EN] Logo, color palette, brand guidelines, communication templates. A coherent visual system that scales across all your materials, print and digital.",
                tags: [["[EN] Branding", "a"], ["Logo", ""], ["Packaging", ""], ["[EN] Brand guidelines", ""]],
            },
            {
                num: "05",
                title: "[EN] Training & Consulting",
                body: "[EN] We train your teams too. Digital marketing, social media, content strategy — in person in Brussels, with trainers who practice what they teach.",
                tags: [["[EN] Workshops", ""], ["CF2M", "a"], ["[EN] Coaching", ""], ["[EN] Online", ""]],
            },
        ],
    },

    aboutPage: {
        meta: {
            title: "[EN] About — GLITCH.BE — Comm & Marketing Agency in Brussels",
            description: "[EN] Two experts, one brief. Meet the team behind GLITCH.BE and what makes us different.",
            ogTitle: "[EN] About — GLITCH.BE",
            ogDescription: "[EN] 20 years of advertising creative. The web baked into the code. One team, one brief.",
        },
        eyebrow: "[EN] The agency",
        titleStrong: "[EN] Two experts.",
        titleAccent: "[EN] One brief.",
        intro: "[EN] GLITCH.BE was born in Brussels from the meeting of 20 years of international advertising creative and sharp web expertise. No project manager between you and us — just two people who talk to each other and deliver.",
        differenceLabel: "[EN] What makes us different",
        differenceItems: [
            {
                num: "01 — STRATEGY",
                title: "[EN] We think before we act.",
                bodyStrong: "[EN] not with a quote",
                bodyRest: "[EN] Every project starts with real strategic thinking — {strong}. We analyze your market, your competitors, your customers. Then we create.",
            },
            {
                num: "02 — CREATIVE",
                title: "[EN] 20 years of advertising creative.",
                bodyStrong: "[EN] DDB, BBDO, JWT.",
                bodyRest: "[EN] {strong} 35+ TVCs. Campaigns that made a mark on their markets. We put that experience to work on your Brussels brief.",
            },
            {
                num: "03 — TECH",
                title: "[EN] The web, baked into the code.",
                bodyStrong: "[EN] a developer who understands marketing",
                bodyRest: "[EN] Your site, your app, your digital presence — built by {strong}. Not just a dev executing a spec.",
            },
        ],
        teamLabel: "[EN] The team",
    },

    contactPage: {
        meta: {
            title: "[EN] Contact — GLITCH.BE — Comm & Marketing Agency in Brussels",
            description: "[EN] Let's talk about your project. We respond in under 24h. Agency based in Brussels.",
            ogTitle: "[EN] Contact — GLITCH.BE",
            ogDescription: "[EN] Share your brief with us. We'll get back to you in under 24h.",
        },
        eyebrow: "[EN] Contact",
        titleStrong: "[EN] Let's talk about",
        titleAccent: "[EN] your project.",
        intro: "[EN] We don't bite, and we respond in under 24h. Fill out the form below or message us directly on WhatsApp.",
    },

    contactForm: {
        label: "[EN] Let's talk about your project",
        titleLine1: "[EN] We don't bite.",
        titleLine2: "[EN] And we respond in under 24h.",
        fields: {
            name: "[EN] Your first and last name *",
            namePlaceholder: "John Smith",
            company: "[EN] Your company",
            companyPlaceholder: "Acme Ltd",
            email: "[EN] Your email *",
            emailPlaceholder: "john@acme.com",
            phone: "[EN] Phone / WhatsApp",
            phonePlaceholder: "+32 …",
            need: "[EN] I need help with… *",
            needPlaceholder: "[EN] Select a service",
            needOptions: [
                "[EN] Strategy & advertising creative",
                "[EN] Digital marketing (SEO / Ads)",
                "[EN] Website & development",
                "[EN] Visual identity",
                "[EN] Training & consulting",
                "[EN] I don't know yet",
            ],
            budget: "[EN] Approximate budget",
            budgetPlaceholder: "[EN] Select a range",
            budgetOptions: ["[EN] Under €1,500", "€1,500 – €5,000", "€5,000 – €15,000", "€15,000+", "[EN] To be defined together"],
            message: "[EN] Tell us a bit about what you're planning",
            messagePlaceholder: "[EN] Even ideas still taking shape are welcome.",
        },
        submit: "[EN] Send my brief →",
        privacyNote: "[EN] Your information stays confidential. We don't share anything with third parties.",
    },
};