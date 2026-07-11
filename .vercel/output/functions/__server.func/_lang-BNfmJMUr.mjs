import { r as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { a as Reveal, c as useTheme, s as useLang } from "./_ssr/layout-D8eyDXq6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_lang-BNfmJMUr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t } = useLang();
	const h = t.home.hero;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "images/bg-1.png",
				alt: "background",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-8 md:grid-cols-[1fr_420px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-6 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-acid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-acid" }), h.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mb-7 font-bold leading-none tracking-[-0.03em]",
						style: { fontSize: "clamp(38px,5.5vw,72px)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "glitch-overlay relative inline-block text-white",
								"data-t": h.titleLine1,
								children: h.titleLine1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-acid",
								children: [" ", h.titleLine2]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-white",
								children: h.titleLine3
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-10 max-w-130 text-lg leading-[1.7] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-white",
								children: h.subtitleStrong
							}),
							" ",
							h.subtitleRest
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "btn-primary",
						children: h.ctaPrimary
					})
				] })
			})
		]
	});
}
function Ticker() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 overflow-hidden border-y border-border bg-surface-1 py-3.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker-track",
			children: [...t.home.ticker, ...t.home.ticker].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5 whitespace-nowrap px-9 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 rounded-full bg-acid" }), it]
			}, i))
		})
	});
}
function Clients() {
	const { t } = useLang();
	const c = t.home.clients;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-surface-1 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "section-label",
				children: c.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "flex flex-wrap overflow-hidden rounded-sm border border-border",
				children: c.names.map(({ name, meta }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 basis-[140px] border-b border-r border-border px-5 py-[22px] transition-colors hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-0.5 text-sm font-semibold text-foreground",
						children: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[9px] tracking-[0.06em] text-muted-faint",
						children: meta
					})]
				}, name))
			})]
		})
	});
}
function Difference() {
	const { t } = useLang();
	const d = t.home.difference;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "section-label",
				children: d.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3",
				children: d.items.map((item, i) => {
					const [before, strong, after] = item.bodyRest.split("{strong}");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "diff-card group relative overflow-hidden bg-background px-8 py-10 transition-colors hover:bg-surface-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-0 w-0.5 bg-acid transition-all duration-300 group-hover:h-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 font-mono text-[11px] tracking-[0.14em] text-muted-soft",
								children: item.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3.5 text-xl font-bold tracking-[-0.02em] text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-[1.7] text-muted-faint",
								children: [
									before,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-medium text-muted-strong",
										children: item.bodyStrong
									}),
									after
								]
							})
						]
					}, i);
				})
			})]
		})
	});
}
function Services() {
	const { t } = useLang();
	const s = t.home.services;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: s.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid gap-3 md:grid-cols-2",
					children: s.items.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft",
								children: svc.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground",
								children: svc.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-sm leading-[1.65] text-muted-faint",
								children: svc.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: svc.tags.map(([label, kind]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a" ? "border-acid/25 text-acid" : kind === "c" ? "border-cyn/25 text-cyn" : "border-border text-muted-faint"}`,
									children: label
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-acid transition-all hover:gap-2.5",
								children: s.discoverLabel
							})
						]
					}, svc.num))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "btn-secondary inline-flex",
						children: s.ctaAll
					})
				})
			]
		})
	});
}
function FeaturedCase() {
	const { t } = useLang();
	const fc = t.home.featuredCase;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "overflow-hidden rounded border border-border bg-surface-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-65 items-center justify-center overflow-hidden",
					style: { background: "linear-gradient(135deg,#0a0a14,#1a0a0a)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex flex-col items-center gap-2.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/pales.jpeg",
							alt: "Pales three products"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-7 p-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-label",
								children: fc.challengeLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-title",
								children: fc.challengeTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-body",
								children: fc.challengeBody
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-label",
								children: fc.whatWeDidLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-title",
								children: fc.whatWeDidTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "case-col-body",
								children: fc.whatWeDidBody
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-sm border border-acid/15 bg-acid/5 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "case-col-label",
									children: fc.resultLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[28px] font-bold leading-none text-acid",
									children: "5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-faint",
									children: fc.resultBody
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "mt-3.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-acid hover:gap-2.5",
									children: fc.caseStudyLink
								})
							]
						})
					]
				})]
			})
		})
	});
}
function BottomCTA() {
	const { t } = useLang();
	const b = t.home.bottomCta;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative overflow-hidden rounded border border-border bg-surface-1 px-14 py-[72px] text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono font-bold tracking-[-0.04em]",
						style: {
							fontSize: "clamp(80px,14vw,180px)",
							color: "transparent",
							WebkitTextStroke: "1px var(--grid-line)"
						},
						children: "GLITCH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "relative mb-3.5 font-bold tracking-[-0.03em]",
						style: { fontSize: "clamp(28px,4vw,50px)" },
						children: [
							b.titleStrong,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: b.titleAccent
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mb-9 text-base text-muted-faint",
						children: b.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "btn-primary",
							children: b.ctaPrimary
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "btn-secondary inline-flex",
							children: b.ctaSecondary
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-5 font-mono text-[11px] tracking-[0.04em] text-muted-faint",
						children: b.whatsapp
					})
				]
			})
		})
	});
}
function Index() {
	const { theme } = useTheme();
	(0, import_react.useEffect)(() => {}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clients, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Difference, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomCTA, {})
			]
		})
	});
}
//#endregion
export { Index as component };
