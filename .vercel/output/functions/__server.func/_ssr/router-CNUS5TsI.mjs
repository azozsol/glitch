import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Nav, n as Footer, o as getDictionary } from "./layout-D8eyDXq6.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CNUS5TsI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D6-xLBod.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Glitch App" },
			{
				name: "description",
				content: "Glitch Generated Project"
			},
			{
				name: "author",
				content: "Glitch"
			},
			{
				property: "og:title",
				content: "Glitch App"
			},
			{
				property: "og:description",
				content: "Glitch Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Glitch"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('glitch-theme') || 'dark';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-0 z-0 pixel-grid" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var Route$5 = createFileRoute("/")({ beforeLoad: () => {
	throw redirect({
		to: "/$lang",
		params: { lang: "fr" }
	});
} });
var $$splitComponentImporter$4 = () => import("../_lang-BNfmJMUr.mjs");
var Route$4 = createFileRoute("/$lang/")({
	head: ({ params }) => {
		const t = getDictionary(params.lang);
		return { meta: [
			{ title: t.home.meta.title },
			{
				name: "description",
				content: t.home.meta.description
			},
			{
				property: "og:title",
				content: t.home.meta.ogTitle
			},
			{
				property: "og:description",
				content: t.home.meta.ogDescription
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./work-DE5RQBdU.mjs");
var Route$3 = createFileRoute("/$lang/work")({
	head: ({ params }) => {
		const t = getDictionary(params.lang);
		return { meta: [
			{ title: t.workPage.meta.title },
			{
				name: "description",
				content: t.workPage.meta.description
			},
			{
				property: "og:title",
				content: t.workPage.meta.ogTitle
			},
			{
				property: "og:description",
				content: t.workPage.meta.ogDescription
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-CSRZU-vA.mjs");
var Route$2 = createFileRoute("/$lang/services")({
	head: ({ params }) => {
		const t = getDictionary(params.lang);
		return { meta: [
			{ title: t.servicesPage.meta.title },
			{
				name: "description",
				content: t.servicesPage.meta.description
			},
			{
				property: "og:title",
				content: t.servicesPage.meta.ogTitle
			},
			{
				property: "og:description",
				content: t.servicesPage.meta.ogDescription
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-b3jjiDNu.mjs");
var Route$1 = createFileRoute("/$lang/contact")({
	head: ({ params }) => {
		const t = getDictionary(params.lang);
		return { meta: [
			{ title: t.contactPage.meta.title },
			{
				name: "description",
				content: t.contactPage.meta.description
			},
			{
				property: "og:title",
				content: t.contactPage.meta.ogTitle
			},
			{
				property: "og:description",
				content: t.contactPage.meta.ogDescription
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./about-CiYX-Xt_.mjs");
var Route = createFileRoute("/$lang/about")({
	head: ({ params }) => {
		const t = getDictionary(params.lang);
		return { meta: [
			{ title: t.aboutPage.meta.title },
			{
				name: "description",
				content: t.aboutPage.meta.description
			},
			{
				property: "og:title",
				content: t.aboutPage.meta.ogTitle
			},
			{
				property: "og:description",
				content: t.aboutPage.meta.ogDescription
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var LangIndexRoute = Route$4.update({
	id: "/$lang/",
	path: "/$lang/",
	getParentRoute: () => Route$6
});
var LangWorkRoute = Route$3.update({
	id: "/$lang/work",
	path: "/$lang/work",
	getParentRoute: () => Route$6
});
var LangServicesRoute = Route$2.update({
	id: "/$lang/services",
	path: "/$lang/services",
	getParentRoute: () => Route$6
});
var LangContactRoute = Route$1.update({
	id: "/$lang/contact",
	path: "/$lang/contact",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	LangAboutRoute: Route.update({
		id: "/$lang/about",
		path: "/$lang/about",
		getParentRoute: () => Route$6
	}),
	LangContactRoute,
	LangServicesRoute,
	LangWorkRoute,
	LangIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
