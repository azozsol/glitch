import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, s as useLang, t as ContactForm } from "./layout-D8eyDXq6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-b3jjiDNu.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t } = useLang();
	const c = t.contactPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-0 pb-10 pt-[140px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "section-label",
					children: c.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-bold tracking-[-0.03em]",
						style: { fontSize: "clamp(32px,5vw,56px)" },
						children: [
							c.titleStrong,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: c.titleAccent
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "max-w-[600px] text-lg leading-[1.7] text-muted-foreground",
					children: c.intro
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})] });
}
//#endregion
export { ContactPage as component };
