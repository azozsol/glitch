import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link, l as useLocation, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-D8eyDXq6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "glitch-theme";
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "dark";
		return localStorage.getItem(STORAGE_KEY) ?? "dark";
	});
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.remove("dark", "light");
		root.classList.add(theme);
		localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);
	return {
		theme,
		toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
	};
}
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					obs.unobserve(e.target);
				}
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -40px 0px"
		});
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return ref;
}
var fr = {
	meta: { siteName: "GLITCH.BE" },
	nav: {
		services: "Services",
		realisations: "Réalisations",
		about: "L'équipe",
		contact: "Contact",
		cta: "Démarrer un projet →",
		themeLight: "☀",
		themeDark: "☾"
	},
	footer: {
		tagline: "Agence de communication et marketing à Bruxelles. Stratégie, créa, web — livrés en un par deux experts qui se parlent vraiment.",
		colServices: {
			title: "Services",
			items: [
				"Stratégie & créa",
				"Marketing digital",
				"Web & développement",
				"Identité visuelle",
				"Formation"
			]
		},
		colAgency: {
			title: "Agence",
			items: [
				"À propos",
				"Réalisations",
				"Blog",
				"Pourquoi GLITCH",
				"Offres & tarifs"
			]
		},
		colContact: {
			title: "Contact",
			items: [
				"hello@glitch.be",
				"WhatsApp",
				"LinkedIn",
				"Instagram",
				"Bruxelles, Belgique"
			]
		},
		copyright: "© 2025 GLITCH.BE — Comm & Marketing · Tous droits réservés · Mentions légales"
	},
	home: {
		meta: {
			title: "GLITCH.BE — Agence Comm & Marketing à Bruxelles",
			description: "Stratégie, créa publicitaire et développement web — une équipe, un brief, zéro prise de tête. Agence basée à Bruxelles.",
			ogTitle: "GLITCH.BE — Agence Comm & Marketing",
			ogDescription: "On décode votre communication. Stratégie · Créa · Web."
		},
		hero: {
			eyebrow: "Agence Comm & Marketing — Bruxelles",
			titleLine1: "On décode",
			titleLine2: "votre",
			titleLine3: "communication.",
			subtitleStrong: "Stratégie, créa, web.",
			subtitleRest: "Une équipe. Un brief. Zéro prise de tête.",
			ctaPrimary: "Parlez-nous de votre projet →",
			ctaSecondary: "Voir nos réalisations",
			cardBadge: "GLITCH.BE — LET'S CRACK THE CODE",
			cardSubBadge: "Bruxelles · Stratégie · Créa · Web"
		},
		ticker: [
			"Stratégie de marque",
			"Direction créative",
			"Web & Développement",
			"Marketing digital",
			"Identité visuelle",
			"Spots TV & Production",
			"SEO & Croissance",
			"Formation & Conseil",
			"Menus animés",
			"Design packaging"
		],
		clients: {
			label: "Marques qui nous ont fait confiance",
			names: [
				{
					name: "Vodafone",
					meta: "Egypt · DDB Cairo"
				},
				{
					name: "Arab Bank",
					meta: "Egypt · DDB Cairo"
				},
				{
					name: "Mitsubishi",
					meta: "Bahrain · JWT"
				},
				{
					name: "Energizer",
					meta: "Egypt · BBDO"
				},
				{
					name: "Zain",
					meta: "Bahrain · JWT"
				},
				{
					name: "TMG",
					meta: "Egypt · DDB"
				},
				{
					name: "Makifornia",
					meta: "Brussels · CMLeon"
				},
				{
					name: "Président",
					meta: "Egypt · BBDO"
				}
			]
		},
		difference: {
			label: "Ce qui nous différencie",
			items: [
				{
					num: "01 — STRATÉGIE",
					title: "On réfléchit avant d'agir.",
					bodyStrong: "pas avec un devis",
					bodyRest: "Chaque projet commence par une vraie réflexion stratégique — {strong}. On analyse votre marché, vos concurrents, vos clients. Ensuite on crée."
				},
				{
					num: "02 — CRÉA",
					title: "20 ans de créa publicitaire.",
					bodyStrong: "DDB, BBDO, JWT.",
					bodyRest: "{strong} 35+ spots TV. Des campagnes qui ont marqué leurs marchés. On met cette expérience au service de votre brief bruxellois."
				},
				{
					num: "03 — TECH",
					title: "Le web ancré dans le code.",
					bodyStrong: "un développeur qui comprend le marketing",
					bodyRest: "Votre site, votre appli, votre présence digitale — construits par {strong}. Pas juste un dev qui exécute un cahier des charges."
				}
			]
		},
		services: {
			label: "Ce qu'on fait pour vous",
			items: [
				{
					num: "01",
					title: "Stratégie & Créa Publicitaire",
					body: "Du positionnement de marque aux campagnes 360°. L'idée qui accroche, le message qui convertit.",
					tags: [
						["Brand strategy", "a"],
						["TVC & Radio", "a"],
						["Copywriting", ""],
						["Campagnes", ""]
					]
				},
				{
					num: "02",
					title: "Marketing Digital & Croissance",
					body: "SEO, réseaux sociaux, publicité en ligne. Votre visibilité, mesurée et optimisée chaque semaine.",
					tags: [
						["SEO", "a"],
						["Meta & Google Ads", ""],
						["Analytics", ""],
						["Content", ""]
					]
				},
				{
					num: "03",
					title: "Web & Développement",
					body: "Sites web, e-commerce, applications web. Conçus pour convertir. Construits pour durer.",
					tags: [
						["Webflow", "c"],
						["E-commerce", "c"],
						["UI/UX", ""],
						["Web apps", ""]
					]
				},
				{
					num: "04",
					title: "Formation & Conseil",
					body: "On forme aussi vos équipes. Marketing digital, réseaux sociaux, stratégie de contenu — en présentiel à Bruxelles.",
					tags: [
						["Ateliers", ""],
						["CF2M", "a"],
						["Coaching", ""],
						["En ligne", ""]
					]
				}
			],
			discoverLabel: "Découvrir →",
			ctaAll: "Découvrir tous nos services"
		},
		featuredCase: {
			imgAlt: "Trois produits Pales",
			challengeLabel: "Le défi",
			challengeTitle: "Lancer une marque belge de boissons engagée — de zéro.",
			challengeBody: "Pales Drinks : 100 % naturel, halal, avec 10 % des bénéfices reversés à des causes humanitaires. Aucune identité existante. Tout à construire.",
			whatWeDidLabel: "Ce qu'on a fait",
			whatWeDidTitle: "Identité complète, 5 saveurs, prêt pour la production.",
			whatWeDidBody: "Logo, palette de couleurs, illustrations botaniques, gabarits de canettes 360° et supports marketing — un système cohérent, durable et scalable.",
			resultLabel: "Résultat",
			resultBody: "Saveurs avec identité complète validée dès le premier tour",
			caseStudyLink: "Voir le cas client →"
		},
		team: {
			label: "Deux experts. Un brief.",
			ctaMore: "En savoir plus sur l'équipe"
		},
		bottomCta: {
			titleStrong: "Votre prochain projet",
			titleAccent: "commence ici.",
			body: "Partagez votre brief avec nous. On vous répond en moins de 24h.",
			ctaPrimary: "Démarrer un projet →",
			ctaSecondary: "Réserver un appel gratuit de 30 min",
			whatsapp: "Ou écrivez-nous directement sur WhatsApp →"
		}
	},
	team: { members: [{
		role: "Directeur Créatif & Co-fondateur",
		name: "Joe Chamata",
		bio: "20 ans chez DDB, BBDO, JWT — du Caire à Bahreïn jusqu'à Bruxelles. Installé à Woluwe-Saint-Pierre depuis 2010. Formateur en marketing digital au CF2M depuis 2018. Il crée les idées qui vendent.",
		statNum: "20+",
		statLabel: "ans de direction créative internationale",
		tags: [
			["DDB · BBDO · JWT", ""],
			["35+ spots TV", "a"],
			["CF2M · Bruxelles", ""]
		]
	}, {
		role: "Développeur Web & Co-fondateur",
		name: "Soliman Azoz",
		bio: "Développeur web et architecte digital. Il transforme chaque concept créatif en expérience web qui performe — beau à regarder, robuste à l'usage, mesurable en résultats.",
		statNum: "100+",
		statLabel: "projets web livrés",
		tags: [
			["Webflow", "a"],
			["Full-stack", "a"],
			["UI/UX Design", ""]
		]
	}] },
	servicesPage: {
		meta: {
			title: "Services — GLITCH.BE — Agence Comm & Marketing à Bruxelles",
			description: "Stratégie & créa publicitaire, marketing digital, web & développement, formation. Découvrez tous les services de GLITCH.BE.",
			ogTitle: "Services — GLITCH.BE",
			ogDescription: "Stratégie · Créa · Web · Marketing Digital · Formation."
		},
		eyebrow: "Ce qu'on fait pour vous",
		titleStrong: "Des services pensés",
		titleAccent: "comme un tout.",
		intro: "Stratégie, créa, web, marketing digital, formation. Cinq disciplines, une seule équipe — pour que rien ne se perde entre le brief et le résultat.",
		items: [
			{
				num: "01",
				title: "Stratégie & Créa Publicitaire",
				body: "Du positionnement de marque aux campagnes 360°. L'idée qui accroche, le message qui convertit. On part toujours d'une vraie réflexion stratégique avant de créer quoi que ce soit.",
				tags: [
					["Brand strategy", "a"],
					["TVC & Radio", "a"],
					["Copywriting", ""],
					["Campagnes", ""]
				]
			},
			{
				num: "02",
				title: "Marketing Digital & Croissance",
				body: "SEO, réseaux sociaux, publicité en ligne. Votre visibilité, mesurée et optimisée chaque semaine, avec des rapports clairs et des décisions basées sur les données.",
				tags: [
					["SEO", "a"],
					["Meta & Google Ads", ""],
					["Analytics", ""],
					["Content", ""]
				]
			},
			{
				num: "03",
				title: "Web & Développement",
				body: "Sites web, e-commerce, applications web. Conçus pour convertir, construits pour durer — par un développeur qui comprend le marketing, pas juste un dev qui exécute un cahier des charges.",
				tags: [
					["Webflow", "c"],
					["E-commerce", "c"],
					["UI/UX", ""],
					["Web apps", ""]
				]
			},
			{
				num: "04",
				title: "Identité Visuelle",
				body: "Logo, palette de couleurs, charte graphique, gabarits de communication. Un système visuel cohérent qui se décline sur tous vos supports, print et digital.",
				tags: [
					["Branding", "a"],
					["Logo", ""],
					["Packaging", ""],
					["Charte graphique", ""]
				]
			},
			{
				num: "05",
				title: "Formation & Conseil",
				body: "On forme aussi vos équipes. Marketing digital, réseaux sociaux, stratégie de contenu — en présentiel à Bruxelles, avec des formateurs qui pratiquent ce qu'ils enseignent.",
				tags: [
					["Ateliers", ""],
					["CF2M", "a"],
					["Coaching", ""],
					["En ligne", ""]
				]
			}
		]
	},
	aboutPage: {
		meta: {
			title: "À propos — GLITCH.BE — Agence Comm & Marketing à Bruxelles",
			description: "Deux experts, un brief. Rencontrez l'équipe derrière GLITCH.BE et ce qui nous rend différents.",
			ogTitle: "À propos — GLITCH.BE",
			ogDescription: "20 ans de créa publicitaire. Le web ancré dans le code. Une équipe, un brief."
		},
		eyebrow: "L'agence",
		titleStrong: "Deux experts.",
		titleAccent: "Un brief.",
		intro: "GLITCH.BE est née à Bruxelles de la rencontre entre 20 ans de créa publicitaire internationale et une expertise web pointue. Pas de chef de projet entre vous et nous — juste deux personnes qui se parlent et qui livrent.",
		differenceLabel: "Ce qui nous différencie",
		differenceItems: [
			{
				num: "01 — STRATÉGIE",
				title: "On réfléchit avant d'agir.",
				bodyStrong: "pas avec un devis",
				bodyRest: "Chaque projet commence par une vraie réflexion stratégique — {strong}. On analyse votre marché, vos concurrents, vos clients. Ensuite on crée."
			},
			{
				num: "02 — CRÉA",
				title: "20 ans de créa publicitaire.",
				bodyStrong: "DDB, BBDO, JWT.",
				bodyRest: "{strong} 35+ spots TV. Des campagnes qui ont marqué leurs marchés. On met cette expérience au service de votre brief bruxellois."
			},
			{
				num: "03 — TECH",
				title: "Le web ancré dans le code.",
				bodyStrong: "un développeur qui comprend le marketing",
				bodyRest: "Votre site, votre appli, votre présence digitale — construits par {strong}. Pas juste un dev qui exécute un cahier des charges."
			}
		],
		teamLabel: "L'équipe"
	},
	contactPage: {
		meta: {
			title: "Contact — GLITCH.BE — Agence Comm & Marketing à Bruxelles",
			description: "Parlons de votre projet. On répond en moins de 24h. Agence basée à Bruxelles.",
			ogTitle: "Contact — GLITCH.BE",
			ogDescription: "Partagez votre brief avec nous. On vous répond en moins de 24h."
		},
		eyebrow: "Contact",
		titleStrong: "Parlons de",
		titleAccent: "votre projet.",
		intro: "On ne mord pas, et on répond en moins de 24h. Remplissez le formulaire ci-dessous ou écrivez-nous directement sur WhatsApp."
	},
	contactForm: {
		label: "Parlons de votre projet",
		titleLine1: "On ne mord pas.",
		titleLine2: "Et on répond en moins de 24h.",
		fields: {
			name: "Votre prénom et nom *",
			namePlaceholder: "Jean Dupont",
			company: "Votre entreprise",
			companyPlaceholder: "Acme SRL",
			email: "Votre e-mail *",
			emailPlaceholder: "jean@acme.com",
			phone: "Téléphone / WhatsApp",
			phonePlaceholder: "+32 …",
			need: "J'ai besoin d'aide pour… *",
			needPlaceholder: "Sélectionnez un service",
			needOptions: [
				"Stratégie & créa publicitaire",
				"Marketing digital (SEO / Ads)",
				"Site web & développement",
				"Identité visuelle",
				"Formation & conseil",
				"Je ne sais pas encore"
			],
			budget: "Budget approximatif",
			budgetPlaceholder: "Sélectionnez une fourchette",
			budgetOptions: [
				"Moins de 1 500 €",
				"1 500 € – 5 000 €",
				"5 000 € – 15 000 €",
				"15 000 €+",
				"À définir ensemble"
			],
			message: "Dites-nous en un peu plus sur votre projet",
			messagePlaceholder: "Même les idées encore floues sont les bienvenues."
		},
		submit: "Envoyer mon brief →",
		privacyNote: "Vos informations restent confidentielles. Nous ne partageons rien avec des tiers."
	},
	workPage: {
		meta: {
			title: "Réalisations — GLITCH.BE — Agence Comm & Marketing à Bruxelles",
			description: "Packaging, branding, SEO, identité visuelle. Des projets réels pour des clients bruxellois — et un palmarès international derrière.",
			ogTitle: "Réalisations — GLITCH.BE",
			ogDescription: "Trois projets. Trois preuves. Packaging · Branding · SEO · Identité visuelle."
		},
		hero: {
			kicker: "Portfolio — Bruxelles · Belgique",
			h1: [
				"CE QU'ON",
				"A VRAIMENT",
				"FAIT."
			],
			sub: "Packaging, branding, SEO, identité visuelle. Des projets réels, pour des clients bruxellois — et un palmarès international derrière.",
			cta: "Explorer les case studies →"
		},
		ticker: [
			"Packaging Design",
			"Branding Complet",
			"SEO & Croissance",
			"Identité Visuelle",
			"Motion Design",
			"Menus Animés",
			"Direction Créative",
			"Web & Développement",
			"Bruxelles · Belgique"
		],
		caseSection: {
			eyebrow: "Case Studies",
			heading: ["TROIS PROJETS.", "TROIS PREUVES."]
		},
		cases: [
			{
				eyebrow: "Case study 01",
				h2: ["PALÈS", "DRINKS"],
				intro: "Créer l'identité complète d'une boisson engagée — du packaging au positionnement de marque — pour qu'elle soit mémorable dès le premier regard en rayon.",
				stat: {
					num: "3",
					label: "Univers visuels distincts",
					rest: "Chaque saveur, sa propre identité chromatique et illustrative."
				},
				meta: [
					{
						label: "Secteur",
						value: "Boissons · FMCG"
					},
					{
						label: "Services",
						value: "Packaging · Branding · Illustration"
					},
					{
						label: "Marché",
						value: "Belgique · International"
					}
				],
				link: "Voir le case study complet →",
				steps: [
					{
						label: "Challenge",
						title: "Une boisson avec une mission",
						body: "Palès Drinks verse <strong>15% de ses bénéfices à des actions humanitaires</strong>. La marque devait incarner cet engagement visuellement — sans tomber dans les codes ONG. Il fallait créer quelque chose de désirable, fun, et porteur de sens."
					},
					{
						label: "Ce qu'on a fait",
						title: "Trois univers, une même âme",
						body: "Chaque saveur reçoit sa propre palette de couleurs, ses propres illustrations de fruits, et son propre caractère — tout en restant immédiatement reconnaissable comme Palès. Un système de branding <strong>scalable à l'infini</strong>, conçu pour grandir avec la gamme."
					},
					{
						label: "Résultat",
						title: "Du rayon à la rue",
						body: "Un packaging qui se remarque en rayon, se photographie sur Instagram, et communique la mission de la marque sans un mot d'explication. <strong>Présent dans les circuits de distribution belges</strong> et reconnu pour sa cohérence visuelle immédiate."
					}
				]
			},
			{
				eyebrow: "Case study 02",
				h2: ["AM", "HVAC"],
				intro: "Expert HVAC belge avec 12 ans d'expérience et des références comme Eiffage et la STIB — invisible sur Google. On a changé ça.",
				stat: {
					num: "+60",
					label: "Points de score SEO",
					rest: "De 35 à 95 sur 100. Passage de \"invisible\" à page 1 sur les requêtes clés."
				},
				meta: [
					{
						label: "Secteur",
						value: "HVAC · Services BtoB/BtoC"
					},
					{
						label: "Services",
						value: "Audit SEO · Refonte contenu · Perf web"
					},
					{
						label: "Localisation",
						value: "Bruxelles · Belgique"
					}
				],
				link: "Voir le site →",
				steps: [
					{
						label: "Challenge",
						title: "Expert reconnu, invisible en ligne",
						body: "AMHVAC travaille pour Eiffage, la STIB, la SNCB. Leur expertise est réelle. Mais leur site obtenait un <strong>score SEO de 35/100</strong> — aucune présence sur les requêtes de leurs prospects directs. Zéro lead organique."
					},
					{
						label: "Ce qu'on a fait",
						title: "Audit → Architecture → Contenu → Performance",
						body: "Audit technique complet, restructuration du maillage interne, réécriture des pages services avec ciblage sémantique précis, optimisation des Core Web Vitals et <strong>mise en place d'un blog SEO thématique</strong>."
					},
					{
						label: "Résultat",
						title: "Page 1 sur les requêtes qui comptent",
						body: "Score SEO passé de <strong>35 à 95/100</strong>. Classement sur 24+ mots-clés ciblés. Core Web Vitals passés au vert. Premiers contacts organiques entrants dans les semaines suivant le déploiement."
					}
				]
			},
			{
				eyebrow: "Case study 03",
				h2: ["ODESU", "IXELLES"],
				intro: "Accompagnement complet d'un concept store bruxellois — de l'identité de marque au lancement.",
				stat: {
					num: "360°",
					label: "Identité complète",
					rest: "Du logo à la signalétique, du digital au print — livré pour l'ouverture."
				},
				meta: [
					{
						label: "Secteur",
						value: "Retail · Mode · Lifestyle"
					},
					{
						label: "Services",
						value: "Branding · Charte graphique · Comm"
					},
					{
						label: "Lieu",
						value: "Ixelles · Bruxelles"
					}
				],
				link: "Voir le case study complet →",
				steps: [
					{
						label: "Challenge",
						title: "Créer une marque from scratch",
						body: "ODESU s'apprêtait à ouvrir ses portes à Ixelles. Zéro identité visuelle, zéro positionnement défini. Le brief : créer une marque qui <strong>incarne Bruxelles, la mode et l'attitude</strong> — et qui soit prête pour le jour J."
					},
					{
						label: "Ce qu'on a fait",
						title: "Naming → Logo → Charte → Comm",
						body: "Accompagnement de la phase de naming, création du logo et de la charte graphique complète, déclinaison sur tous les supports de lancement : <strong>signalétique, réseaux sociaux, print, vitrine</strong>. Stratégie de contenu pour l'ouverture."
					},
					{
						label: "Résultat",
						title: "Une identité qui tient la route",
						body: "Une marque cohérente sur tous les touchpoints dès le premier jour d'ouverture. <strong>Présence sociale active, visibilité locale, et une identité qui se distingue</strong> dans un quartier commerçant dense comme Ixelles."
					}
				]
			},
			{
				eyebrow: "Case study 04",
				h2: ["DOTREFLECTION", "GMBH"],
				intro: "Site vitrine pour un éditeur de logiciels healthcare basé à Heidelberg — multilingue, conteneurisé, conçu pour refléter une expertise technique sérieuse.",
				stat: {
					num: "i18n",
					label: "Support multilingue",
					rest: "Accessibilité internationale intégrée dès le lancement."
				},
				meta: [
					{
						label: "Secteur",
						value: "Software · Healthcare"
					},
					{
						label: "Services",
						value: "Next.js · i18n · Docker"
					},
					{
						label: "Marché",
						value: "Allemagne · International"
					}
				],
				link: "Voir le site →",
				steps: [
					{
						label: "Challenge",
						title: "Un produit médical, une audience mondiale",
						body: "Dotreflection avait besoin d'un site représentatif de leur expertise technique, accessible à des utilisateurs de plusieurs langues, avec une identité visuelle forte et une infrastructure conteneurisée."
					},
					{
						label: "Ce qu'on a fait",
						title: "i18n · Polices · Docker",
						body: "Intégration complète de l'internationalisation (i18n) pour le support multilingue, implémentation de polices personnalisées pour renforcer l'identité visuelle, et création d'images Docker optimisées pour une gestion efficace des conteneurs."
					},
					{
						label: "Résultat",
						title: "Un site robuste, prêt pour l'international",
						body: "Une plateforme multilingue stable, correctement conteneurisée, qui reflète le sérieux et l'expertise technique de l'entreprise."
					}
				]
			},
			{
				eyebrow: "Case study 05",
				h2: ["MUJAZ", ".IO"],
				intro: "Maintenance et amélioration du site public d'une plateforme de contenu arabophone — livraison continue sans interruption de service.",
				stat: {
					num: "UX",
					label: "Collaboration design",
					rest: "Itération directe avec l'équipe UX/UI à chaque release."
				},
				meta: [
					{
						label: "Secteur",
						value: "Media · Contenu digital"
					},
					{
						label: "Services",
						value: "HTML · CSS · JS · API"
					},
					{
						label: "Marché",
						value: "MENA · International"
					}
				],
				link: "Voir le site →",
				steps: [
					{
						label: "Challenge",
						title: "Un site en prod à améliorer sans friction",
						body: "Mujaz.io nécessitait des améliorations continues — performance, UX, intégrations backend — sans perturber l'expérience des utilisateurs existants."
					},
					{
						label: "Ce qu'on a fait",
						title: "Dev · Design · API",
						body: "Maintenance et amélioration du site (HTML, CSS, JavaScript), collaboration étroite avec les designers UX/UI pour chaque itération, et gestion des intégrations API et base de données."
					},
					{
						label: "Résultat",
						title: "Une plateforme plus solide, une UX affinée",
						body: "Des améliorations continues livrées sans interruption de service, une base technique plus saine et une collaboration fluide entre dev et design."
					}
				]
			}
		],
		designStory: {
			eyebrow: "Parti pris design · Chaque saveur, un univers",
			heading: ["COULEURS, ILLUSTRATIONS,", "STORYTELLING."],
			cans: [
				{
					src: "/images/cans/orange.webp",
					name: "Orange & Grenadine",
					flavor: "Le caractère",
					body: "Le dégradé orange–rouge évoque l'énergie et la chaleur des agrumes. Les illustrations créent un mouvement ascendant. La palette <strong>chaude et saturée</strong> capte l'œil en rayon avant toute autre lecture."
				},
				{
					src: "/images/cans/mojito.webp",
					name: "Mojito · Myrtille & Fraise",
					flavor: "La fraîcheur",
					body: "Le bleu-turquoise évoque l'eau, la menthe, l'été. Les ronds roses créent un <strong>contraste doux et vibrant</strong> — une tension entre la fraîcheur et la douceur fruitée."
				},
				{
					src: "/images/cans/violet.webp",
					name: "Pêche blanche & Violette",
					flavor: "La délicatesse",
					body: "Le violet-lavande associé au pêche crée la saveur la plus premium. La fleur de violette ajoute une <strong>note botanique et sophistiquée</strong> — là où les autres misent sur l'énergie, celle-ci joue l'élégance."
				}
			]
		},
		otherSection: {
			eyebrow: "Belgique · Projets récents",
			heading: ["AUTRES", "RÉALISATIONS"]
		},
		miniProjects: [
			{
				name: "NYApocalypse",
				cat: "Logo · Identité visuelle",
				city: "Bruxelles"
			},
			{
				name: "Smash Smash",
				cat: "Menu animé · Motion",
				city: "Bruxelles"
			},
			{
				name: "Crispy Chicken",
				cat: "Menu animé · Motion",
				city: "Bruxelles"
			},
			{
				name: "Tayba",
				cat: "Menu animé · Branding",
				city: "Bruxelles"
			}
		],
		intl: {
			eyebrow: "Pedigree international",
			heading: [
				"NOTRE",
				"EXPÉRIENCE",
				"MONDIALE."
			],
			sub: "Avant Bruxelles, 20 ans dans les plus grandes agences du Proche-Orient. Ce niveau d'expertise, maintenant pour vos projets.",
			agencies: [
				{
					name: "DDB Cairo",
					detail: "Le Caire · Égypte",
					clients: [
						"Vodafone Egypt",
						"Arab Bank",
						"Sélection Cannes"
					]
				},
				{
					name: "JWT Bahrain",
					detail: "Manama · Bahreïn",
					clients: [
						"Mitsubishi Bahrain",
						"Zain Telecom",
						"Campagnes 360°"
					]
				},
				{
					name: "BBDO Egypt",
					detail: "Le Caire · Égypte",
					clients: [
						"Energizer",
						"Président Egypt",
						"Productions TVC"
					]
				}
			]
		},
		cta: {
			eyebrow: "Votre projet commence ici",
			heading: [
				"VOTRE PROJET",
				"MÉRITE",
				"MIEUX."
			],
			sub: "Partagez-nous votre brief. On vous répond en moins de 24h — sans engagement.",
			primary: "Démarrer un projet →",
			secondary: "Réserver un appel de 30 min",
			whatsapp: "Ou écrivez-nous directement sur WhatsApp"
		}
	}
};
var en = {
	meta: { siteName: "GLITCH.BE" },
	nav: {
		services: "Services",
		realisations: "Work",
		about: "The team",
		contact: "Contact",
		cta: "Start a project →",
		themeLight: "☀",
		themeDark: "☾"
	},
	footer: {
		tagline: "[EN] Communication and marketing agency in Brussels. Strategy, creative, web — delivered as one by two experts who actually talk to each other.",
		colServices: {
			title: "[EN] Services",
			items: [
				"[EN] Strategy & creative",
				"[EN] Digital marketing",
				"[EN] Web & development",
				"[EN] Visual identity",
				"[EN] Training"
			]
		},
		colAgency: {
			title: "[EN] Agency",
			items: [
				"[EN] About",
				"[EN] Work",
				"[EN] Blog",
				"[EN] Why GLITCH",
				"[EN] Plans & pricing"
			]
		},
		colContact: {
			title: "[EN] Contact",
			items: [
				"hello@glitch.be",
				"WhatsApp",
				"LinkedIn",
				"Instagram",
				"[EN] Brussels, Belgium"
			]
		},
		copyright: "© 2025 GLITCH.BE — Comm & Marketing · [EN] All rights reserved · [EN] Legal notice"
	},
	home: {
		meta: {
			title: "[EN] GLITCH.BE — Comm & Marketing Agency in Brussels",
			description: "[EN] Strategy, advertising creative, and web development — one team, one brief, zero headaches. Agency based in Brussels.",
			ogTitle: "[EN] GLITCH.BE — Comm & Marketing Agency",
			ogDescription: "[EN] We crack the code of your communication. Strategy · Creative · Web."
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
			cardSubBadge: "Brussels · Strategy · Creative · Web"
		},
		ticker: [
			"[EN] Brand strategy",
			"[EN] Creative direction",
			"[EN] Web & Development",
			"[EN] Digital Marketing",
			"[EN] Visual identity",
			"[EN] TVCs & Production",
			"[EN] SEO & Growth",
			"[EN] Training & Consulting",
			"[EN] Animated menus",
			"[EN] Packaging Design"
		],
		clients: {
			label: "[EN] Brands that trusted us",
			names: [
				{
					name: "Vodafone",
					meta: "Egypt · DDB Cairo"
				},
				{
					name: "Arab Bank",
					meta: "Egypt · DDB Cairo"
				},
				{
					name: "Mitsubishi",
					meta: "Bahrain · JWT"
				},
				{
					name: "Energizer",
					meta: "Egypt · BBDO"
				},
				{
					name: "Zain",
					meta: "Bahrain · JWT"
				},
				{
					name: "TMG",
					meta: "Egypt · DDB"
				},
				{
					name: "Makifornia",
					meta: "Brussels · CMLeon"
				},
				{
					name: "Président",
					meta: "Egypt · BBDO"
				}
			]
		},
		difference: {
			label: "[EN] What makes us different",
			items: [
				{
					num: "01 — STRATEGY",
					title: "[EN] We think before we act.",
					bodyStrong: "[EN] not with a quote",
					bodyRest: "[EN] Every project starts with real strategic thinking — {strong}. We analyze your market, your competitors, your customers. Then we create."
				},
				{
					num: "02 — CREATIVE",
					title: "[EN] 20 years of advertising creative.",
					bodyStrong: "[EN] DDB, BBDO, JWT.",
					bodyRest: "[EN] {strong} 35+ TVCs. Campaigns that made a mark on their markets. We put that experience to work on your Brussels brief."
				},
				{
					num: "03 — TECH",
					title: "[EN] The web, baked into the code.",
					bodyStrong: "[EN] a developer who understands marketing",
					bodyRest: "[EN] Your site, your app, your digital presence — built by {strong}. Not just a dev executing a spec."
				}
			]
		},
		services: {
			label: "[EN] What we do for you",
			items: [
				{
					num: "01",
					title: "[EN] Strategy & Advertising Creative",
					body: "[EN] From brand positioning to 360° campaigns. The idea that sticks, the message that converts.",
					tags: [
						["Brand strategy", "a"],
						["TVC & Radio", "a"],
						["Copywriting", ""],
						["[EN] Campaigns", ""]
					]
				},
				{
					num: "02",
					title: "[EN] Digital Marketing & Growth",
					body: "[EN] SEO, social media, online advertising. Your visibility, measured and optimized every week.",
					tags: [
						["SEO", "a"],
						["Meta & Google Ads", ""],
						["Analytics", ""],
						["Content", ""]
					]
				},
				{
					num: "03",
					title: "[EN] Web & Development",
					body: "[EN] Websites, e-commerce, web apps. Designed to convert. Built to last.",
					tags: [
						["Webflow", "c"],
						["E-commerce", "c"],
						["UI/UX", ""],
						["[EN] Web apps", ""]
					]
				},
				{
					num: "04",
					title: "[EN] Training & Consulting",
					body: "[EN] We train your teams too. Digital marketing, social media, content strategy — in person in Brussels.",
					tags: [
						["[EN] Workshops", ""],
						["CF2M", "a"],
						["[EN] Coaching", ""],
						["[EN] Online", ""]
					]
				}
			],
			discoverLabel: "[EN] Discover →",
			ctaAll: "[EN] Discover all our services"
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
			caseStudyLink: "[EN] View the case study →"
		},
		team: {
			label: "[EN] Two experts. One brief.",
			ctaMore: "[EN] Learn more about the team"
		},
		bottomCta: {
			titleStrong: "[EN] Your next project",
			titleAccent: "[EN] starts here.",
			body: "[EN] Share your brief with us. We'll get back to you in under 24h.",
			ctaPrimary: "[EN] Start a project →",
			ctaSecondary: "[EN] Book a free 30-min call",
			whatsapp: "[EN] Or message us directly on WhatsApp →"
		}
	},
	team: { members: [{
		role: "[EN] Creative Director & Co-founder",
		name: "Joe Chamata",
		bio: "[EN] 20 years at DDB, BBDO, JWT — from Cairo to Bahrain to Brussels. Based in Woluwe-Saint-Pierre since 2010. Digital marketing trainer at CF2M since 2018. He creates the ideas that sell.",
		statNum: "20+",
		statLabel: "[EN] years of international creative direction",
		tags: [
			["DDB · BBDO · JWT", ""],
			["35+ TVCs", "a"],
			["CF2M · Brussels", ""]
		]
	}, {
		role: "[EN] Web Developer & Co-founder",
		name: "Soliman Azoz",
		bio: "[EN] Web developer and digital architect. He turns every creative concept into a web experience that performs — beautiful to look at, robust in use, measurable in results.",
		statNum: "100+",
		statLabel: "[EN] web projects delivered",
		tags: [
			["Webflow", "a"],
			["Full-stack", "a"],
			["UI/UX Design", ""]
		]
	}] },
	servicesPage: {
		meta: {
			title: "[EN] Services — GLITCH.BE — Comm & Marketing Agency in Brussels",
			description: "[EN] Strategy & advertising creative, digital marketing, web & development, training. Discover all of GLITCH.BE's services.",
			ogTitle: "[EN] Services — GLITCH.BE",
			ogDescription: "[EN] Strategy · Creative · Web · Digital Marketing · Training."
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
				tags: [
					["Brand strategy", "a"],
					["TVC & Radio", "a"],
					["Copywriting", ""],
					["[EN] Campaigns", ""]
				]
			},
			{
				num: "02",
				title: "[EN] Digital Marketing & Growth",
				body: "[EN] SEO, social media, online advertising. Your visibility, measured and optimized every week, with clear reports and data-driven decisions.",
				tags: [
					["SEO", "a"],
					["Meta & Google Ads", ""],
					["Analytics", ""],
					["Content", ""]
				]
			},
			{
				num: "03",
				title: "[EN] Web & Development",
				body: "[EN] Websites, e-commerce, web apps. Designed to convert, built to last — by a developer who understands marketing, not just a dev executing a spec.",
				tags: [
					["Webflow", "c"],
					["E-commerce", "c"],
					["UI/UX", ""],
					["[EN] Web apps", ""]
				]
			},
			{
				num: "04",
				title: "[EN] Visual Identity",
				body: "[EN] Logo, color palette, brand guidelines, communication templates. A coherent visual system that scales across all your materials, print and digital.",
				tags: [
					["[EN] Branding", "a"],
					["Logo", ""],
					["Packaging", ""],
					["[EN] Brand guidelines", ""]
				]
			},
			{
				num: "05",
				title: "[EN] Training & Consulting",
				body: "[EN] We train your teams too. Digital marketing, social media, content strategy — in person in Brussels, with trainers who practice what they teach.",
				tags: [
					["[EN] Workshops", ""],
					["CF2M", "a"],
					["[EN] Coaching", ""],
					["[EN] Online", ""]
				]
			}
		]
	},
	aboutPage: {
		meta: {
			title: "[EN] About — GLITCH.BE — Comm & Marketing Agency in Brussels",
			description: "[EN] Two experts, one brief. Meet the team behind GLITCH.BE and what makes us different.",
			ogTitle: "[EN] About — GLITCH.BE",
			ogDescription: "[EN] 20 years of advertising creative. The web baked into the code. One team, one brief."
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
				bodyRest: "[EN] Every project starts with real strategic thinking — {strong}. We analyze your market, your competitors, your customers. Then we create."
			},
			{
				num: "02 — CREATIVE",
				title: "[EN] 20 years of advertising creative.",
				bodyStrong: "[EN] DDB, BBDO, JWT.",
				bodyRest: "[EN] {strong} 35+ TVCs. Campaigns that made a mark on their markets. We put that experience to work on your Brussels brief."
			},
			{
				num: "03 — TECH",
				title: "[EN] The web, baked into the code.",
				bodyStrong: "[EN] a developer who understands marketing",
				bodyRest: "[EN] Your site, your app, your digital presence — built by {strong}. Not just a dev executing a spec."
			}
		],
		teamLabel: "[EN] The team"
	},
	contactPage: {
		meta: {
			title: "[EN] Contact — GLITCH.BE — Comm & Marketing Agency in Brussels",
			description: "[EN] Let's talk about your project. We respond in under 24h. Agency based in Brussels.",
			ogTitle: "[EN] Contact — GLITCH.BE",
			ogDescription: "[EN] Share your brief with us. We'll get back to you in under 24h."
		},
		eyebrow: "[EN] Contact",
		titleStrong: "[EN] Let's talk about",
		titleAccent: "[EN] your project.",
		intro: "[EN] We don't bite, and we respond in under 24h. Fill out the form below or message us directly on WhatsApp."
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
				"[EN] I don't know yet"
			],
			budget: "[EN] Approximate budget",
			budgetPlaceholder: "[EN] Select a range",
			budgetOptions: [
				"[EN] Under €1,500",
				"€1,500 – €5,000",
				"€5,000 – €15,000",
				"€15,000+",
				"[EN] To be defined together"
			],
			message: "[EN] Tell us a bit about what you're planning",
			messagePlaceholder: "[EN] Even ideas still taking shape are welcome."
		},
		submit: "[EN] Send my brief →",
		privacyNote: "[EN] Your information stays confidential. We don't share anything with third parties."
	},
	workPage: {
		meta: {
			title: "Work — GLITCH.BE — Comm & Marketing Agency in Brussels",
			description: "Packaging, branding, SEO, visual identity. Real projects for Brussels clients — backed by an international track record.",
			ogTitle: "Work — GLITCH.BE",
			ogDescription: "Three projects. Three proofs. Packaging · Branding · SEO · Visual identity."
		},
		hero: {
			kicker: "Portfolio — Brussels · Belgium",
			h1: [
				"WHAT WE'VE",
				"ACTUALLY",
				"DONE."
			],
			sub: "Packaging, branding, SEO, visual identity. Real projects for Brussels clients — backed by an international track record.",
			cta: "Explore the case studies →"
		},
		ticker: [
			"Packaging Design",
			"Full Branding",
			"SEO & Growth",
			"Visual Identity",
			"Motion Design",
			"Animated Menus",
			"Creative Direction",
			"Web & Development",
			"Brussels · Belgium"
		],
		caseSection: {
			eyebrow: "Case Studies",
			heading: ["THREE PROJECTS.", "THREE PROOFS."]
		},
		cases: [
			{
				eyebrow: "Case study 01",
				h2: ["PALÈS", "DRINKS"],
				intro: "Building the complete identity of a purpose-driven drink brand — from packaging to brand positioning — so it's unforgettable at first glance on the shelf.",
				stat: {
					num: "3",
					label: "Distinct visual universes",
					rest: "Each flavor, its own chromatic and illustrative identity."
				},
				meta: [
					{
						label: "Sector",
						value: "Beverages · FMCG"
					},
					{
						label: "Services",
						value: "Packaging · Branding · Illustration"
					},
					{
						label: "Market",
						value: "Belgium · International"
					}
				],
				link: "View the full case study →",
				steps: [
					{
						label: "Challenge",
						title: "A drink with a mission",
						body: "Palès Drinks donates <strong>15% of profits to humanitarian causes</strong>. The brand had to embody that commitment visually — without falling into NGO aesthetics. It needed to feel desirable, fun, and meaningful."
					},
					{
						label: "What we did",
						title: "Three universes, one soul",
						body: "Each flavor gets its own color palette, its own fruit illustrations, and its own character — while staying immediately recognizable as Palès. A branding system <strong>infinitely scalable</strong>, built to grow with the range."
					},
					{
						label: "Result",
						title: "From shelf to street",
						body: "Packaging that stands out on the shelf, gets photographed on Instagram, and communicates the brand's mission without a word of explanation. <strong>Live in Belgian distribution</strong> and recognized for its immediate visual coherence."
					}
				]
			},
			{
				eyebrow: "Case study 02",
				h2: ["AM", "HVAC"],
				intro: "A Belgian HVAC expert with 12 years of experience and references like Eiffage and STIB — invisible on Google. We changed that.",
				stat: {
					num: "+60",
					label: "SEO score points",
					rest: "From 35 to 95 out of 100. From \"invisible\" to page 1 on key queries."
				},
				meta: [
					{
						label: "Sector",
						value: "HVAC · BtoB/BtoC Services"
					},
					{
						label: "Services",
						value: "SEO Audit · Content Overhaul · Web Perf"
					},
					{
						label: "Location",
						value: "Brussels · Belgium"
					}
				],
				link: "View the site →",
				steps: [
					{
						label: "Challenge",
						title: "Recognized expert, invisible online",
						body: "AMHVAC works for Eiffage, STIB, SNCB. Their expertise is real. But their site scored <strong>35/100 on SEO</strong> — zero presence on their prospects' actual search queries. Zero organic leads."
					},
					{
						label: "What we did",
						title: "Audit → Architecture → Content → Performance",
						body: "Full technical audit, internal linking restructure, services pages rewritten with precise semantic targeting, Core Web Vitals optimization, and <strong>a thematic SEO blog launched</strong>."
					},
					{
						label: "Result",
						title: "Page 1 on the queries that matter",
						body: "SEO score jumped from <strong>35 to 95/100</strong>. Ranked on 24+ targeted keywords. Core Web Vitals all green. First organic inbound contacts within weeks of deployment."
					}
				]
			},
			{
				eyebrow: "Case study 03",
				h2: ["ODESU", "IXELLES"],
				intro: "Full accompaniment of a Brussels concept store — from brand identity to launch.",
				stat: {
					num: "360°",
					label: "Complete identity",
					rest: "From logo to signage, from digital to print — delivered for opening day."
				},
				meta: [
					{
						label: "Sector",
						value: "Retail · Fashion · Lifestyle"
					},
					{
						label: "Services",
						value: "Branding · Brand guidelines · Comm"
					},
					{
						label: "Location",
						value: "Ixelles · Brussels"
					}
				],
				link: "View the full case study →",
				steps: [
					{
						label: "Challenge",
						title: "Build a brand from scratch",
						body: "ODESU was about to open in Ixelles. Zero visual identity, zero defined positioning. The brief: create a brand that <strong>embodies Brussels, fashion, and attitude</strong> — ready for day one."
					},
					{
						label: "What we did",
						title: "Naming → Logo → Brand guidelines → Comm",
						body: "Naming phase guidance, logo and full brand guidelines creation, rollout across all launch materials: <strong>signage, social media, print, storefront</strong>. Content strategy for the opening."
					},
					{
						label: "Result",
						title: "An identity that holds up",
						body: "A coherent brand across all touchpoints from day one. <strong>Active social presence, local visibility, and an identity that stands out</strong> in a dense commercial district like Ixelles."
					}
				]
			},
			{
				eyebrow: "Case study 04",
				h2: ["DOTREFLECTION", "GMBH"],
				intro: "Showcase website for a healthcare software company based in Heidelberg — multilingual, containerised, and built to reflect serious technical expertise.",
				stat: {
					num: "i18n",
					label: "Multilingual support",
					rest: "International accessibility built in from day one."
				},
				meta: [
					{
						label: "Sector",
						value: "Software · Healthcare"
					},
					{
						label: "Services",
						value: "Next.js · i18n · Docker"
					},
					{
						label: "Market",
						value: "Germany · International"
					}
				],
				link: "View the site →",
				steps: [
					{
						label: "Challenge",
						title: "A medical product, a global audience",
						body: "Dotreflection needed a site that reflected their technical expertise and was accessible to users across multiple languages — with a strong visual identity and a fully containerised infrastructure."
					},
					{
						label: "What we did",
						title: "i18n · Custom fonts · Docker",
						body: "Full i18n internationalisation integration for multilingual support, custom font implementation to reinforce visual identity, and optimised Docker images for efficient container management."
					},
					{
						label: "Result",
						title: "A robust site, ready for international reach",
						body: "A stable multilingual platform, properly containerised, that reflects the company's seriousness and technical depth."
					}
				]
			},
			{
				eyebrow: "Case study 05",
				h2: ["MUJAZ", ".IO"],
				intro: "Maintenance and improvement of the public site for an Arabic-language content platform — continuous delivery without service disruption.",
				stat: {
					num: "UX",
					label: "Design collaboration",
					rest: "Direct iteration with the UX/UI team on every release."
				},
				meta: [
					{
						label: "Sector",
						value: "Media · Digital content"
					},
					{
						label: "Services",
						value: "HTML · CSS · JS · API"
					},
					{
						label: "Market",
						value: "MENA · International"
					}
				],
				link: "View the site →",
				steps: [
					{
						label: "Challenge",
						title: "A live site to improve without disruption",
						body: "Mujaz.io required continuous improvements — performance, UX, backend integrations — without disrupting the experience of existing users."
					},
					{
						label: "What we did",
						title: "Dev · Design · API",
						body: "Website maintenance and improvement (HTML, CSS, JavaScript), close collaboration with UX/UI designers for every iteration, and management of API and database integrations."
					},
					{
						label: "Result",
						title: "A stronger platform, a refined UX",
						body: "Continuous improvements delivered without service interruption, a healthier technical foundation, and smooth collaboration between dev and design."
					}
				]
			}
		],
		designStory: {
			eyebrow: "Design approach · Each flavor, a universe",
			heading: ["COLORS, ILLUSTRATIONS,", "STORYTELLING."],
			cans: [
				{
					src: "/images/cans/orange.webp",
					name: "Orange & Grenadine",
					flavor: "The character",
					body: "The orange–red gradient evokes the energy and warmth of citrus. Illustrations create an upward motion. The <strong>warm, saturated palette</strong> catches the eye on the shelf before any other reading."
				},
				{
					src: "/images/cans/mojito.webp",
					name: "Mojito · Blueberry & Strawberry",
					flavor: "The freshness",
					body: "Blue-turquoise evokes water, mint, summer. The pink circles create a <strong>soft, vibrant contrast</strong> — a tension between freshness and fruity sweetness."
				},
				{
					src: "/images/cans/violet.webp",
					name: "White Peach & Violet",
					flavor: "The delicacy",
					body: "Lavender-violet paired with peach creates the visually most premium flavor. The violet flower adds a <strong>botanical, sophisticated note</strong> — where the others play energy, this one plays elegance."
				}
			]
		},
		otherSection: {
			eyebrow: "Belgium · Recent projects",
			heading: ["OTHER", "WORK"]
		},
		miniProjects: [
			{
				name: "NYApocalypse",
				cat: "Logo · Visual identity",
				city: "Brussels"
			},
			{
				name: "Smash Smash",
				cat: "Animated menu · Motion",
				city: "Brussels"
			},
			{
				name: "Crispy Chicken",
				cat: "Animated menu · Motion",
				city: "Brussels"
			},
			{
				name: "Tayba",
				cat: "Animated menu · Branding",
				city: "Brussels"
			}
		],
		intl: {
			eyebrow: "International pedigree",
			heading: [
				"OUR",
				"GLOBAL",
				"EXPERIENCE."
			],
			sub: "Before Brussels, 20 years at the biggest agencies in the Middle East. That level of expertise, now on your brief.",
			agencies: [
				{
					name: "DDB Cairo",
					detail: "Cairo · Egypt",
					clients: [
						"Vodafone Egypt",
						"Arab Bank",
						"Cannes Selection"
					]
				},
				{
					name: "JWT Bahrain",
					detail: "Manama · Bahrain",
					clients: [
						"Mitsubishi Bahrain",
						"Zain Telecom",
						"360° Campaigns"
					]
				},
				{
					name: "BBDO Egypt",
					detail: "Cairo · Egypt",
					clients: [
						"Energizer",
						"Président Egypt",
						"TVC Productions"
					]
				}
			]
		},
		cta: {
			eyebrow: "Your project starts here",
			heading: [
				"YOUR PROJECT",
				"DESERVES",
				"BETTER."
			],
			sub: "Share your brief with us. We'll get back to you in under 24h — no commitment.",
			primary: "Start a project →",
			secondary: "Book a 30-min call",
			whatsapp: "Or message us directly on WhatsApp"
		}
	}
};
var SUPPORTED_LANGS = ["fr", "en"];
var dictionaries = {
	fr,
	en
};
function isValidLang(value) {
	return !!value && SUPPORTED_LANGS.includes(value);
}
function getDictionary(lang) {
	return isValidLang(lang) ? dictionaries[lang] : dictionaries["fr"];
}
/**
* Reads the `lang` param from the current route (set by the $lang
* directory segment) and returns both the language code and its
* dictionary. Falls back to the default language if, for any reason,
* the param isn't present (shouldn't happen once routes are nested
* under $lang, but keeps this safe).
*/
function useLang() {
	const params = useParams({ strict: false });
	return {
		lang: params.lang ?? "fr",
		t: getDictionary(params.lang)
	};
}
/**
* Reveal
* Wraps children in a div/section that fades/slides in on scroll via useReveal.
* Shared by every page that wants the same scroll-reveal effect.
*/
function Reveal({ children, className = "", as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref: useReveal(),
		className: `reveal-on-scroll ${className}`,
		children
	});
}
/**
* GridHoverBackground
* Full-bleed grid of small squares, each lighting up on hover via pure CSS
* (no JS mouse tracking). Meant to sit behind hero content as an
* `absolute inset-0` layer — content stacks on top naturally since it's a
* later, positioned sibling.
*/
function GridHoverBackground({ cols = 30, rows = 14, className = "" }) {
	const cells = Array.from({ length: cols * rows });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `absolute inset-0 z-10 overflow-hidden ${className}`,
		style: {
			display: "grid",
			gridTemplateColumns: `repeat(${cols}, 1fr)`,
			gridTemplateRows: `repeat(${rows}, 1fr)`
		},
		children: cells.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border border-grid-line bg-transparent transition-colors duration-500 delay-300 ease-out hover:bg-acid hover:duration-100 hover:delay-0" }, i))
	});
}
/**
* Field
* Label + control wrapper used in forms (e.g. ContactForm).
*/
function Field({ label, children, full = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`,
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "font-mono text-[9px] uppercase tracking-[0.16em] text-muted-soft",
			children: label
		}), children]
	});
}
/**
* ContactForm
* The lead-capture form section, shared by the homepage (bottom section)
* and the dedicated /[lang]/contact page.
*/
function ContactForm() {
	const { t } = useLang();
	const f = t.contactForm;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: f.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-bold tracking-[-0.02em]",
						style: { fontSize: "clamp(28px,3.5vw,44px)" },
						children: [
							f.titleLine1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							f.titleLine2
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "grid gap-3.5 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: f.fields.namePlaceholder,
								className: "form-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.company,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: f.fields.companyPlaceholder,
								className: "form-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: f.fields.emailPlaceholder,
								className: "form-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								placeholder: f.fields.phonePlaceholder,
								className: "form-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.need,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "form-input",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: f.fields.needPlaceholder
								}), f.fields.needOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: opt }, opt))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.budget,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "form-input",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: f.fields.budgetPlaceholder
								}), f.fields.budgetOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: opt }, opt))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: f.fields.message,
							full: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								placeholder: f.fields.messagePlaceholder,
								className: "form-input min-h-[110px] resize-y"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							full: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn-primary w-fit",
								children: f.submit
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 font-mono text-[10px] tracking-[0.04em] text-muted-faint",
								children: f.privacyNote
							})]
						})
					]
				})
			]
		})
	});
}
/**
* Nav
* Site-wide navigation bar with theme toggle and language-aware links.
* Every link is prefixed with the current language ($lang param), so
* navigating from /en/services to "Contact" goes to /en/contact, not /fr/contact.
*/
function Nav() {
	const { theme, toggle } = useTheme();
	const { lang, t } = useLang();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const links = [
		[`/${lang}/services`, t.nav.services],
		[`/${lang}/work`, t.nav.realisations],
		[`/${lang}/about`, t.nav.about],
		[`/${lang}/contact`, t.nav.contact]
	];
	function switchLang(target) {
		if (target === lang) return;
		navigate({ to: `/${target}${location.pathname.replace(/^\/(fr|en)/, "")}` || `/${target}` });
	}
	const langLabels = {
		fr: "FR",
		en: "EN"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-acid/10 bg-background/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/$lang",
					params: { lang },
					className: "flex items-center gap-0.5 font-mono text-[18px] font-bold tracking-tight text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/glitch-Logo.svg",
						alt: "GLITCH.BE — Comm & Marketing",
						className: "h-8 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: href,
							className: "font-mono text-[11px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid [&.active]:text-acid",
							children: label
						}) }, href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/$lang/contact",
							params: { lang },
							className: "rounded-sm bg-acid px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-background hover:bg-foreground",
							children: t.nav.cta
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: toggle,
							"aria-label": "Toggle light / dark theme",
							className: "grid font-mono text-[18px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-start-1 row-start-1 invisible",
									"aria-hidden": "true",
									children: t.nav.themeLight
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-start-1 row-start-1 invisible",
									"aria-hidden": "true",
									children: t.nav.themeDark
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-start-1 row-start-1",
									children: theme === "dark" ? t.nav.themeLight : t.nav.themeDark
								})
							]
						}) })
					]
				}),
				mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: toggle,
						"aria-label": "Toggle light / dark theme",
						className: "grid font-mono text-[18px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-start-1 row-start-1 invisible",
								"aria-hidden": "true",
								children: t.nav.themeLight
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-start-1 row-start-1 invisible",
								"aria-hidden": "true",
								children: t.nav.themeDark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-start-1 row-start-1",
								children: theme === "dark" ? t.nav.themeLight : t.nav.themeDark
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMenuOpen((v) => !v),
						"aria-label": "Toggle menu",
						"aria-expanded": menuOpen,
						className: "flex flex-col justify-center gap-1.5 text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[4.5px] rotate-45" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}` })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3.5",
					children: SUPPORTED_LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => switchLang(l),
						className: `font-mono text-[10px] uppercase tracking-widest transition-colors ${lang === l ? "text-acid" : "text-muted-soft hover:text-acid"}`,
						children: langLabels[l]
					}, l))
				})
			]
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-acid/10 bg-background/95 px-8 py-6 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-5",
				children: [links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: href,
					onClick: () => setMenuOpen(false),
					className: "font-mono text-[11px] uppercase tracking-widest text-muted-faint transition-colors hover:text-acid [&.active]:text-acid",
					children: label
				}) }, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/$lang/contact",
					params: { lang },
					onClick: () => setMenuOpen(false),
					className: "inline-block rounded-sm bg-acid px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-background hover:bg-foreground",
					children: t.nav.cta
				}) })]
			})
		})]
	});
}
/**
* Footer
* Site-wide footer with a real language switcher: clicking FR/EN
* navigates to the same page in the other language, preserving the
* current path (e.g. /fr/services -> /en/services).
*/
function Footer() {
	const { lang, t } = useLang();
	const location = useLocation();
	const navigate = useNavigate();
	function switchLang(target) {
		if (target === lang) return;
		navigate({ to: `/${target}${location.pathname.replace(/^\/(fr|en)/, "")}` || `/${target}` });
	}
	const langLabels = {
		fr: "FR",
		en: "EN"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-border px-0 pb-9 pt-14 bg-background/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 grid grid-cols-2 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[18px] font-bold text-foreground",
						children: "GLITCH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[18px] font-bold text-acid",
						children: ".BE"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 max-w-[240px] text-[13px] leading-[1.65] text-muted-soft",
					children: t.footer.tagline
				})] }), [
					t.footer.colServices,
					t.footer.colAgency,
					t.footer.colContact
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-[18px] font-mono text-[9px] uppercase tracking-[0.18em] text-muted-soft",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2.5",
					children: col.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "text-[13px] text-muted-faint transition-colors hover:text-acid",
						children: it
					}) }, it))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.06em] text-muted-soft",
					children: t.footer.copyright
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3.5",
					children: SUPPORTED_LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => switchLang(l),
						className: `font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${lang === l ? "text-acid" : "text-muted-soft hover:text-acid"}`,
						children: langLabels[l]
					}, l))
				})]
			})]
		})
	});
}
//#endregion
export { Reveal as a, useTheme as c, Nav as i, Footer as n, getDictionary as o, GridHoverBackground as r, useLang as s, ContactForm as t };
