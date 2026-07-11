import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, s as useLang } from "./layout-D8eyDXq6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CSRZU-vA.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const { t } = useLang();
	const s = t.servicesPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-0 pb-16 pt-[140px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: s.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-bold tracking-[-0.03em]",
						style: { fontSize: "clamp(32px,5vw,56px)" },
						children: [
							s.titleStrong,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: s.titleAccent
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "max-w-[600px] text-lg leading-[1.7] text-muted-foreground",
					children: s.intro
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "grid gap-3 md:grid-cols-2",
				children: s.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-sm border border-border bg-surface-1 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-acid/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 font-mono text-[10px] tracking-[0.12em] text-muted-soft",
							children: item.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2.5 text-lg font-bold tracking-[-0.01em] text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm leading-[1.65] text-muted-faint",
							children: item.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: item.tags.map(([label, kind]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] ${kind === "a" ? "border-acid/25 text-acid" : kind === "c" ? "border-cyn/25 text-cyn" : "border-border text-muted-faint"}`,
								children: label
							}, label))
						})
					]
				}, item.num))
			})
		})
	})] });
}
//#endregion
export { ServicesPage as component };
