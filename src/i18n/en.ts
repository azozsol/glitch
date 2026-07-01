import type { Dictionary } from "./types";

export const en: Dictionary = {
    meta: {
        siteName: "GLITCH.BE",
    },

    nav: {
        services: "Services",
        realisations: "Work",
        about: "The team",
        contact: "Contact",
        cta: "Start a project →",
        themeLight: "☀",
        themeDark: "☾",
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
            eyebrow: "Comm & Marketing Agency — Brussels",
            titleLine1: "We crack",
            titleLine2: "of your",
            titleLine3: "communication.",
            subtitleStrong: "Strategy, creative, web.",
            subtitleRest: "One team. One brief. Zero headaches.",
            ctaPrimary: "Tell us about your project →",
            ctaSecondary: "See our work",
            cardBadge: "GLITCH.BE — LET'S CRACK THE CODE",
            cardSubBadge: "Brussels · Strategy · Creative · Web",
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

    workPage: {
        meta: {
            title: "Work — GLITCH.BE — Comm & Marketing Agency in Brussels",
            description: "Packaging, branding, SEO, visual identity. Real projects for Brussels clients — backed by an international track record.",
            ogTitle: "Work — GLITCH.BE",
            ogDescription: "Three projects. Three proofs. Packaging · Branding · SEO · Visual identity.",
        },
        hero: {
            kicker: "Portfolio — Brussels · Belgium",
            h1: ["WHAT WE'VE", "ACTUALLY", "DONE."],
            sub: "Packaging, branding, SEO, visual identity. Real projects for Brussels clients — backed by an international track record.",
            cta: "Explore the case studies →",
        },
        ticker: [
            "Packaging Design", "Full Branding", "SEO & Growth", "Visual Identity",
            "Motion Design", "Animated Menus", "Creative Direction", "Web & Development", "Brussels · Belgium",
        ],
        caseSection: {
            eyebrow: "Case Studies",
            heading: ["THREE PROJECTS.", "THREE PROOFS."],
        },
        cases: [
            {
                eyebrow: "Case study 01",
                h2: ["PALÈS", "DRINKS"],
                intro: "Building the complete identity of a purpose-driven drink brand — from packaging to brand positioning — so it's unforgettable at first glance on the shelf.",
                stat: { num: "3", label: "Distinct visual universes", rest: "Each flavor, its own chromatic and illustrative identity." },
                meta: [
                    { label: "Sector", value: "Beverages · FMCG" },
                    { label: "Services", value: "Packaging · Branding · Illustration" },
                    { label: "Market", value: "Belgium · International" },
                ],
                link: "View the full case study →",
                steps: [
                    { label: "Challenge", title: "A drink with a mission", body: "Palès Drinks donates <strong>15% of profits to humanitarian causes</strong>. The brand had to embody that commitment visually — without falling into NGO aesthetics. It needed to feel desirable, fun, and meaningful." },
                    { label: "What we did", title: "Three universes, one soul", body: "Each flavor gets its own color palette, its own fruit illustrations, and its own character — while staying immediately recognizable as Palès. A branding system <strong>infinitely scalable</strong>, built to grow with the range." },
                    { label: "Result", title: "From shelf to street", body: "Packaging that stands out on the shelf, gets photographed on Instagram, and communicates the brand's mission without a word of explanation. <strong>Live in Belgian distribution</strong> and recognized for its immediate visual coherence." },
                ],
            },
            {
                eyebrow: "Case study 02",
                h2: ["AM", "HVAC"],
                intro: "A Belgian HVAC expert with 12 years of experience and references like Eiffage and STIB — invisible on Google. We changed that.",
                stat: { num: "+60", label: "SEO score points", rest: "From 35 to 95 out of 100. From \"invisible\" to page 1 on key queries." },
                meta: [
                    { label: "Sector", value: "HVAC · BtoB/BtoC Services" },
                    { label: "Services", value: "SEO Audit · Content Overhaul · Web Perf" },
                    { label: "Location", value: "Brussels · Belgium" },
                ],
                link: "View the site →",
                steps: [
                    { label: "Challenge", title: "Recognized expert, invisible online", body: "AMHVAC works for Eiffage, STIB, SNCB. Their expertise is real. But their site scored <strong>35/100 on SEO</strong> — zero presence on their prospects' actual search queries. Zero organic leads." },
                    { label: "What we did", title: "Audit → Architecture → Content → Performance", body: "Full technical audit, internal linking restructure, services pages rewritten with precise semantic targeting, Core Web Vitals optimization, and <strong>a thematic SEO blog launched</strong>." },
                    { label: "Result", title: "Page 1 on the queries that matter", body: "SEO score jumped from <strong>35 to 95/100</strong>. Ranked on 24+ targeted keywords. Core Web Vitals all green. First organic inbound contacts within weeks of deployment." },
                ],
            },
            {
                eyebrow: "Case study 03",
                h2: ["ODESU", "IXELLES"],
                intro: "Full accompaniment of a Brussels concept store — from brand identity to launch.",
                stat: { num: "360°", label: "Complete identity", rest: "From logo to signage, from digital to print — delivered for opening day." },
                meta: [
                    { label: "Sector", value: "Retail · Fashion · Lifestyle" },
                    { label: "Services", value: "Branding · Brand guidelines · Comm" },
                    { label: "Location", value: "Ixelles · Brussels" },
                ],
                link: "View the full case study →",
                steps: [
                    { label: "Challenge", title: "Build a brand from scratch", body: "ODESU was about to open in Ixelles. Zero visual identity, zero defined positioning. The brief: create a brand that <strong>embodies Brussels, fashion, and attitude</strong> — ready for day one." },
                    { label: "What we did", title: "Naming → Logo → Brand guidelines → Comm", body: "Naming phase guidance, logo and full brand guidelines creation, rollout across all launch materials: <strong>signage, social media, print, storefront</strong>. Content strategy for the opening." },
                    { label: "Result", title: "An identity that holds up", body: "A coherent brand across all touchpoints from day one. <strong>Active social presence, local visibility, and an identity that stands out</strong> in a dense commercial district like Ixelles." },
                ],
            },
        ],
        designStory: {
            eyebrow: "Design approach · Each flavor, a universe",
            heading: ["COLORS, ILLUSTRATIONS,", "STORYTELLING."],
            cans: [
                { src: "/images/cans/orange.webp", name: "Orange & Grenadine", flavor: "The character", body: "The orange–red gradient evokes the energy and warmth of citrus. Illustrations create an upward motion. The <strong>warm, saturated palette</strong> catches the eye on the shelf before any other reading." },
                { src: "/images/cans/mojito.webp", name: "Mojito · Blueberry & Strawberry", flavor: "The freshness", body: "Blue-turquoise evokes water, mint, summer. The pink circles create a <strong>soft, vibrant contrast</strong> — a tension between freshness and fruity sweetness." },
                { src: "/images/cans/violet.webp", name: "White Peach & Violet", flavor: "The delicacy", body: "Lavender-violet paired with peach creates the visually most premium flavor. The violet flower adds a <strong>botanical, sophisticated note</strong> — where the others play energy, this one plays elegance." },
            ],
        },
        otherSection: {
            eyebrow: "Belgium · Recent projects",
            heading: ["OTHER", "WORK"],
        },
        miniProjects: [
            { name: "NYApocalypse", cat: "Logo · Visual identity", city: "Brussels" },
            { name: "Smash Smash", cat: "Animated menu · Motion", city: "Brussels" },
            { name: "Crispy Chicken", cat: "Animated menu · Motion", city: "Brussels" },
            { name: "Tayba", cat: "Animated menu · Branding", city: "Brussels" },
        ],
        intl: {
            eyebrow: "International pedigree",
            heading: ["OUR", "GLOBAL", "EXPERIENCE."],
            sub: "Before Brussels, 20 years at the biggest agencies in the Middle East. That level of expertise, now on your brief.",
            agencies: [
                { name: "DDB Cairo", detail: "Cairo · Egypt", clients: ["Vodafone Egypt", "Arab Bank", "Cannes Selection"] },
                { name: "JWT Bahrain", detail: "Manama · Bahrain", clients: ["Mitsubishi Bahrain", "Zain Telecom", "360° Campaigns"] },
                { name: "BBDO Egypt", detail: "Cairo · Egypt", clients: ["Energizer", "Président Egypt", "TVC Productions"] },
            ],
        },
        cta: {
            eyebrow: "Your project starts here",
            heading: ["YOUR PROJECT", "DESERVES", "BETTER."],
            sub: "Share your brief with us. We'll get back to you in under 24h — no commitment.",
            primary: "Start a project →",
            secondary: "Book a 30-min call",
            whatsapp: "Or message us directly on WhatsApp",
        },
    }
};