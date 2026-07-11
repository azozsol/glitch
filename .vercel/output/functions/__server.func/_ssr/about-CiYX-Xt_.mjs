import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, s as useLang } from "./layout-D8eyDXq6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CiYX-Xt_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getCssVar(name) {
	if (typeof window === "undefined") return "#b6ff2e";
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
function PixelAvatar({ hair, skin, shirt, accent }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const c = ref.current;
		if (!c) return;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		ctx.imageSmoothingEnabled = false;
		const CELL = 10;
		const bg = getCssVar("--surface-1") || "#111";
		const grid = [
			[
				0,
				0,
				0,
				2,
				2,
				2,
				2,
				2,
				2,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				2,
				1,
				2,
				1,
				1,
				2,
				1,
				2,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				2,
				1,
				1,
				1,
				1,
				1,
				1,
				2,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				1,
				1,
				1,
				1,
				1,
				1,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				3,
				3,
				3,
				3,
				3,
				3,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				0,
				0,
				0,
				0
			],
			[
				0,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				0,
				0,
				0
			],
			[
				0,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				0,
				0,
				0
			],
			[
				0,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				0,
				0,
				0
			],
			[
				0,
				0,
				4,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				4,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		];
		const map = {
			0: bg,
			1: skin,
			2: hair,
			3: shirt,
			4: accent
		};
		ctx.clearRect(0, 0, 140, 140);
		grid.forEach((row, ry) => row.forEach((cell, rx) => {
			ctx.fillStyle = map[cell] || bg;
			ctx.fillRect(rx * CELL, ry * CELL, CELL, CELL);
		}));
	}, [
		hair,
		skin,
		shirt,
		accent
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		width: 140,
		height: 140,
		className: "[image-rendering:pixelated]",
		style: {
			width: 140,
			height: 140
		}
	});
}
var AVATARS = [{
	hair: "#2a1a0a",
	skin: "#c8906a",
	shirt: "#1a1a2a",
	accent: "#b6ff2e"
}, {
	hair: "#1a1a1a",
	skin: "#d4a574",
	shirt: "#1a1a3a",
	accent: "#00e5ff"
}];
var TINTS = ["rgba(182,255,46,.06)", "rgba(0,229,255,.06)"];
function AboutPage() {
	const { t } = useLang();
	const a = t.aboutPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-0 pb-16 pt-[140px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1160px] px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "section-label",
						children: a.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-bold tracking-[-0.03em]",
							style: { fontSize: "clamp(32px,5vw,56px)" },
							children: [
								a.titleStrong,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-acid",
									children: a.titleAccent
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "max-w-[600px] text-lg leading-[1.7] text-muted-foreground",
						children: a.intro
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1160px] px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: a.differenceLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3",
					children: a.differenceItems.map((item, i) => {
						const [before, after] = item.bodyRest.split("{strong}");
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1160px] px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: a.teamLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid gap-4 md:grid-cols-2",
					children: t.team.members.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-sm border border-border bg-surface-1 transition-colors hover:border-acid/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-[200px] items-center justify-center overflow-hidden bg-surface-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelAvatar, { ...AVATARS[i] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { background: `linear-gradient(to bottom, transparent 60%, ${TINTS[i]} 100%)` }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-y border-border bg-background px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-acid",
								children: m.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-[22px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-1.5 text-xl font-bold tracking-[-0.02em] text-foreground",
										children: m.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3.5 text-[13px] leading-[1.65] text-muted-faint",
										children: m.bio
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-baseline gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[28px] font-bold leading-none text-acid",
											children: m.statNum
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-soft",
											children: m.statLabel
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3.5 flex flex-wrap gap-1.5",
										children: m.tags.map(([label, kind]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a" ? "border-acid/20 text-acid" : "border-border text-muted-faint"}`,
											children: label
										}, label))
									})
								]
							})
						]
					}, m.name))
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
