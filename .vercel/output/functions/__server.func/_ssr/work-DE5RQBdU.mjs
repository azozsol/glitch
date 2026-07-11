import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, r as GridHoverBackground, s as useLang } from "./layout-D8eyDXq6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DE5RQBdU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(threshold = .3) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);
	return [ref, inView];
}
function WorkPage() {
	const { t } = useLang();
	const w = t.workPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { w }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, { items: w.ticker }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudies, { w }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherWork, { w }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntlStrip, { w }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaSection, { w })
	] });
}
function Hero({ w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-background px-0 pb-26 pt-[140px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridHoverBackground, { className: "opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1160px] px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: w.hero.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-bold uppercase leading-[0.95] tracking-[-0.04em]",
						style: { fontSize: "clamp(40px,7vw,84px)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: w.hero.h1[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: w.hero.h1[1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-acid",
								children: w.hero.h1[2]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-10 max-w-[460px] text-lg leading-[1.7] text-muted-foreground",
					children: w.hero.sub
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "absolute z-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#case-studies",
						className: "btn-primary",
						children: w.hero.cta
					})
				})
			]
		})]
	});
}
function Ticker({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border bg-surface-1 py-[18px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker-track",
			children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 whitespace-nowrap px-12 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-[3px] w-[3px] shrink-0 rounded-full bg-acid" }), item]
			}, i))
		})
	});
}
function CaseStudies({ w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "case-studies",
		className: "px-0 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1160px] px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-label",
						children: w.caseSection.eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-bold uppercase leading-[0.95] tracking-[-0.04em]",
						style: { fontSize: "clamp(36px,5vw,64px)" },
						children: [
							w.caseSection.heading[0],
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: w.caseSection.heading[1]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasePales, {
				caseData: w.cases[0],
				designStory: w.designStory
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseAmhvac, { caseData: w.cases[1] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseOdesu, { caseData: w.cases[2] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseDotreflection, { caseData: w.cases[3] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMujaz, { caseData: w.cases[4] })
		]
	});
}
function CaseMetaTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-7 overflow-hidden rounded-sm border border-border",
		children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex gap-5 px-[18px] py-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-[80px] font-mono text-[9px] uppercase tracking-[0.12em] text-muted-soft",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[13px] text-muted-faint",
				children: row.value
			})]
		}, i))
	});
}
function CaseStat({ num, label, rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-7 flex items-baseline gap-3 border-y border-border py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono font-bold leading-none text-acid",
			style: { fontSize: "clamp(40px,4.5vw,64px)" },
			children: num
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[200px] text-[13px] leading-snug text-muted-faint",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "mb-0.5 block text-[15px] font-bold text-foreground",
				children: label
			}), rest]
		})]
	});
}
function CaseNarrative({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col",
		children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid grid-cols-[72px_1fr] gap-6 border-b border-border py-7 ${i === 0 ? "border-t" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "case-col-label pt-1",
				children: step.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "case-col-title",
				children: step.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "case-col-body",
				dangerouslySetInnerHTML: { __html: step.body }
			})] })]
		}, i))
	});
}
function CaseEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-acid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-6 shrink-0 bg-acid" }), children]
	});
}
function CaseH2({ line1, line2 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "mb-5 font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground",
		style: { fontSize: "clamp(32px,3.5vw,52px)" },
		children: [
			line1,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-acid",
				children: line2
			})
		]
	});
}
function CanStoryCard({ src, name, flavor, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col items-center rounded-sm border border-border bg-white/2 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-acid/35",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex h-40 items-center justify-center transition-transform duration-500 group-hover:-translate-y-2.5 group-hover:scale-105",
				style: { filter: "drop-shadow(-8px 16px 32px rgba(0,0,0,0.5))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "Pales can",
					className: "h-full w-auto object-contain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[15px] font-bold text-foreground",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-acid",
				children: flavor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-left text-xs leading-relaxed text-muted-faint",
				dangerouslySetInnerHTML: { __html: body }
			})
		]
	});
}
function CasePales({ caseData, designStory }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pales",
		className: "bg-surface-1/40 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-16 mb-16 overflow-hidden rounded-sm border border-border bg-background/95 p-10 md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-soft",
							children: designStory.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-12 font-bold uppercase leading-tight tracking-[-0.03em]",
							style: { fontSize: "clamp(24px,2.5vw,36px)" },
							children: [
								designStory.heading[0],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-acid",
									children: designStory.heading[1]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 md:grid-cols-3",
							children: designStory.cans.map((can, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanStoryCard, {
								src: can.src,
								name: can.name,
								flavor: can.flavor,
								body: can.body
							}, can.name))
						})
					]
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseEyebrow, { children: caseData.eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseH2, {
						line1: caseData.h2[0],
						line2: caseData.h2[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[15px] leading-[1.8] text-muted-faint",
						children: caseData.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStat, {
						num: caseData.stat.num,
						label: caseData.stat.label,
						rest: caseData.stat.rest
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMetaTable, { rows: caseData.meta })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseNarrative, { steps: caseData.steps })]
			}) })]
		})
	});
}
function SeoProgressBar() {
	const [ref, inView] = useInView(.5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "mt-2 h-1 overflow-hidden rounded-full bg-surface-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-acid transition-[width] duration-[1500ms] ease-out",
			style: { width: inView ? "95%" : "0%" }
		})
	});
}
function CaseAmhvac({ caseData }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "amhvac",
		className: "bg-acid/5 pb-28 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center relative mb-16 h-auto flex-col gap-6 overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:flex-row md:items-center md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-1 max-w-120 flex-1 overflow-hidden rounded-lg bg-background shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 bg-surface-2 px-4 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-red-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 rounded-sm bg-background/95 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-soft",
							children: "amhvac.be"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/HMVAC SEO.png",
							alt: "AMHVAC home page"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-1 flex min-w-[200px] flex-col gap-3.5",
					children: [
						{
							label: "Score SEO global",
							before: "35 / 100",
							after: "95",
							change: "↑ +60 points",
							bar: true
						},
						{
							label: "Mots-clés classés",
							before: void 0,
							after: "24+",
							change: "↑ ×6 requêtes ciblées"
						},
						{
							label: "Core Web Vitals",
							before: void 0,
							after: "✓ Passed",
							change: "LCP · FID · CLS",
							green: true
						}
					].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-white/[0.04] px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-soft",
								children: stat.label
							}),
							stat.before && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-0.5 text-[11px] text-muted-faint line-through",
								children: stat.before
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `font-mono font-bold leading-none ${stat.green ? "text-base text-emerald-500" : "text-2xl text-acid"}`,
								children: stat.after
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[10px] text-emerald-500",
								children: stat.change
							}),
							stat.bar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoProgressBar, {})
						]
					}, stat.label))
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseEyebrow, { children: caseData.eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-5 font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground",
						style: { fontSize: "clamp(32px,3.5vw,52px)" },
						children: [caseData.h2[0], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-acid",
							children: caseData.h2[1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[15px] leading-[1.8] text-muted-faint",
						children: caseData.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStat, {
						num: caseData.stat.num,
						label: caseData.stat.label,
						rest: caseData.stat.rest
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMetaTable, { rows: caseData.meta })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseNarrative, { steps: caseData.steps })]
			}) })]
		})
	});
}
function CaseOdesu({ caseData }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "odesu",
		className: "bg-surface-1/40 pt-28 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mb-16 flex h-auto items-center justify-center overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-1 w-full max-w-175 overflow-hidden rounded-lg shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col bg-background/95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/glitch odesu.png",
							alt: "AMHVAC home page"
						})
					})
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseNarrative, { steps: caseData.steps }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseEyebrow, { children: caseData.eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseH2, {
						line1: caseData.h2[0],
						line2: caseData.h2[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[15px] leading-[1.8] text-muted-faint",
						children: caseData.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStat, {
						num: caseData.stat.num,
						label: caseData.stat.label,
						rest: caseData.stat.rest
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMetaTable, { rows: caseData.meta })
				] })]
			}) })]
		})
	});
}
function BrowserMockup({ src, alt, url }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-1 w-full max-w-175 overflow-hidden rounded-lg bg-background shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5 bg-surface-2 px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-red-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 rounded-sm bg-background/95 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-soft",
				children: url
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt
			})
		})]
	});
}
function CaseDotreflection({ caseData }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dotref",
		className: "bg-acid/5 pt-28 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mb-16 flex h-auto items-center justify-center overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserMockup, {
					src: "/images/dotref.png",
					alt: "Dotreflection home page",
					url: "dotreflection.com"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseEyebrow, { children: caseData.eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseH2, {
						line1: caseData.h2[0],
						line2: caseData.h2[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[15px] leading-[1.8] text-muted-faint",
						children: caseData.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStat, {
						num: caseData.stat.num,
						label: caseData.stat.label,
						rest: caseData.stat.rest
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMetaTable, { rows: caseData.meta })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseNarrative, { steps: caseData.steps })]
			}) })]
		})
	});
}
function CaseMujaz({ caseData }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mujaz",
		className: "bg-surface-1/40 pt-28 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mb-16 flex h-auto items-center justify-center overflow-hidden rounded-sm border border-border bg-background/95 p-6 md:h-[560px] md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserMockup, {
					src: "/images/mujaz.png",
					alt: "Mujaz.io home page",
					url: "mujaz.io"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseNarrative, { steps: caseData.steps }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseEyebrow, { children: caseData.eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseH2, {
						line1: caseData.h2[0],
						line2: caseData.h2[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[15px] leading-[1.8] text-muted-faint",
						children: caseData.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStat, {
						num: caseData.stat.num,
						label: caseData.stat.label,
						rest: caseData.stat.rest
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMetaTable, { rows: caseData.meta })
				] })]
			}) })]
		})
	});
}
function MiniVisual({ name }) {
	switch (name) {
		case "NYApocalypse": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[28px] font-bold leading-none tracking-[-0.03em] text-foreground",
					children: "NYA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "pocalypse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-red-600" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-orange-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-foreground" })
					]
				})
			]
		});
		case "Smash Smash": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full w-full grid-cols-2 gap-1.5 p-3",
			children: [
				0,
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end rounded-sm border border-acid/15 bg-acid/[0.08] p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-0.5 h-[3px] rounded-full bg-acid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-1/2 rounded-full bg-acid/40" })]
			}, i))
		});
		case "Crispy Chicken": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col items-center justify-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center font-mono text-[13px] font-bold uppercase leading-tight tracking-[0.08em] text-foreground",
				children: [
					"Crispy",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Chicken"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-7 rounded-full bg-acid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-4 rounded-full bg-acid/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-2.5 rounded-full bg-acid/15" })
				]
			})]
		});
		case "Tayba": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-50 to-amber-100 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xl font-bold tracking-[0.12em] text-amber-950",
				children: "طيب"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[9px] uppercase tracking-[0.16em] text-amber-700",
				children: "TAYBA"
			})]
		});
		default: return null;
	}
}
function MiniCard({ name, cat, city }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group cursor-pointer overflow-hidden rounded-sm border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-40 items-center justify-center overflow-hidden bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniVisual, { name })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[15px] font-bold tracking-[-0.01em] text-foreground",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[9px] uppercase tracking-[0.12em] text-acid",
					children: cat
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[11px] text-muted-faint",
					children: city
				})
			]
		})]
	});
}
function OtherWork({ w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "realisations",
		className: "border-y border-border bg-surface-1/40 px-0 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-label",
					children: w.otherSection.eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-bold uppercase leading-[0.95] tracking-[-0.04em]",
					style: { fontSize: "clamp(32px,4vw,52px)" },
					children: [
						w.otherSection.heading[0],
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-acid",
							children: w.otherSection.heading[1]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-4",
				children: w.miniProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniCard, {
					name: p.name,
					cat: p.cat,
					city: p.city
				}, p.name))
			}) })]
		})
	});
}
function AgencyCard({ name, detail, clients }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface-1 px-6 py-7 transition-colors duration-200 hover:bg-surface-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1.5 text-[17px] font-bold tracking-[-0.02em] text-foreground",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[9px] uppercase tracking-[0.1em] text-muted-soft",
				children: detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3.5 flex flex-col gap-1.5",
				children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-faint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-acid",
						children: "→"
					}), c]
				}, c))
			})
		]
	});
}
function IntlStrip({ w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pixel-grid relative overflow-hidden bg-background px-0 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-[1] mx-auto max-w-[1160px] px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 md:grid-cols-[1fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-6 bg-acid" }), w.intl.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-bold uppercase leading-[0.95] tracking-[-0.04em] text-foreground",
						style: { fontSize: "clamp(28px,3vw,44px)" },
						children: [
							w.intl.heading[0],
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							w.intl.heading[1],
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: w.intl.heading[2]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[300px] text-sm leading-relaxed text-muted-foreground",
						children: w.intl.sub
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3",
						children: w.intl.agencies.map((ag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgencyCard, {
							name: ag.name,
							detail: ag.detail,
							clients: ag.clients
						}, ag.name))
					})
				})]
			})
		})
	});
}
function CtaSection({ w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden border-t border-border bg-surface-1/40 px-0 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono font-bold tracking-[-0.04em] text-transparent",
			style: {
				fontSize: "clamp(100px,18vw,260px)",
				WebkitTextStroke: "1px var(--surface-3)"
			},
			children: "24H"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-[1160px] px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[760px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "section-label justify-center",
						children: w.cta.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-6 font-bold uppercase leading-[0.92] tracking-[-0.05em] text-foreground",
							style: { fontSize: "clamp(40px,5.5vw,76px)" },
							children: [
								w.cta.heading[0],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								w.cta.heading[1],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-acid",
									children: w.cta.heading[2]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mb-10 max-w-[440px] text-[17px] leading-[1.75] text-muted-foreground",
							children: w.cta.sub
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "btn-primary",
								children: w.cta.primary
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "btn-secondary",
								children: w.cta.secondary
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 320,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-soft",
							children: w.cta.whatsapp
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { WorkPage as component };
