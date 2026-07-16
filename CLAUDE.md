# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

GLITCHBRUSSELS.COM — a bilingual (FR/EN) marketing site, built on **TanStack Start** (file-based
router + SSR) and generated/maintained via **Lovable**. Package manager is **bun**
(`bun.lock` is authoritative; `package-lock.json` is also present but bun is used for
scripts/dev).

## Commands

```bash
bun install        # install deps
bun run dev         # vite dev server
bun run build       # production build (nitro, preset: vercel)
bun run build:dev   # build in development mode
bun run preview     # preview a production build
bun run lint         # eslint .
bun run format       # prettier --write .
```

There is no test runner configured in this repo (no test script, no test files) — don't
assume Vitest/Jest exists.

## Architecture

### Routing: file-based, everything under `$lang`

- Router is TanStack Start's file-based router (`src/routes/**`); `src/routeTree.gen.ts`
  is auto-generated — never hand-edit it.
- Real pages live under `src/routes/$lang/` (e.g. `$lang/services.tsx`, `$lang/work.tsx`).
  The bare `src/routes/index.tsx` just redirects `/` → `/$lang` with `DEFAULT_LANG`.
- See `src/routes/README.md` for the file-based routing conventions (naming, dynamic
  `$param`, splats, layouts). Read it before adding routes — it explicitly forbids
  Next/Remix-style conventions (`src/pages/`, `app/layout.tsx`, etc).
- `src/routes/__root.tsx` is the single app shell: sets up `<html>`, injects the
  dark/light theme class pre-hydration (reads `localStorage['glitch-theme']`), renders
  `<Nav>` / `<Outlet />` / `<Footer>`, and defines the root error/not-found components.
- Every route under `$lang` reads its `lang` param and pulls a dictionary via
  `getDictionary(lang)` — see i18n section below. Route `head()` functions build
  per-language `<meta>` tags from that dictionary.

### i18n

- `src/i18n/types.ts` defines a single `Dictionary` type that `en.ts` and `fr.ts` must
  both fully satisfy — adding a key to one and not the other is a type error, not a
  silent blank string. Always update both files together.
- `src/i18n/index.ts` exports `SUPPORTED_LANGS`, `DEFAULT_LANG` (`"fr"`), `getDictionary()`.
- `useLang()` (`src/hooks/use-lang.ts`) reads the `lang` route param and returns
  `{ lang, t }` — this is the standard way components get translated strings, not
  `getDictionary` directly (except in route `head()`, which has no hook access).
- Language switching preserves the current path: it swaps the leading `/fr`/`/en`
  segment and keeps the rest (see `switchLang` in `Nav`/`Footer` in
  `src/components/glitch/layout.tsx`). Every internal `<Link>` must be lang-prefixed
  (`/${lang}/services`), not bare (`/services`).

### Server / SSR error handling (non-obvious, don't simplify)

This app has a deliberate multi-layer catch for SSR errors that h3/nitro would
otherwise swallow into an opaque 500 JSON body:

- `src/start.ts` — `createStart` with a server `requestMiddleware` that catches thrown
  errors and renders a friendly HTML error page instead of leaking a raw 500.
- `src/lib/error-capture.ts` — registers global `error`/`unhandledrejection` listeners
  that stash the last raw error (5s TTL) so it can be recovered later, because h3
  sometimes swallows the throw into a generic `{"unhandled":true,"message":"HTTPError"}`
  JSON response before the middleware ever sees the real error.
- `src/server.ts` — the actual worker/server entry (wired via
  `tanstackStart.server.entry: "server"` in `vite.config.ts`). Wraps the real TanStack
  server-entry `fetch`, and if it gets back a >=500 JSON response matching that swallowed
  shape, logs the recovered error and returns the rendered error page instead.
- `src/lib/error-page.ts` — renders the static HTML error page (used both server-side
  and matches the client `ErrorComponent` look in `__root.tsx`).
- `src/lib/lovable-error-reporting.ts` — reports client-side React error-boundary
  errors to Lovable's runtime (`window.__lovableEvents.captureException`), no-ops outside
  the browser.

If you touch server error handling, keep all of these layers in sync — they exist
because a single try/catch does not reliably catch what h3 does internally.

### Server-only code and env vars

Three deliberately different patterns, pick the right one:

- `*.server.ts` modules (e.g. `src/lib/config.server.ts`) — server-only helpers reused
  across handlers. Vite excludes these from the client bundle by filename convention.
  Do **not** use the Next.js `server-only` package — eslint has a `no-restricted-imports`
  rule that blocks it and tells you to rename to `*.server.ts` instead.
- Inline `process.env` inside a `createServerFn` handler body — for one-off reads not
  reused elsewhere (handler bodies are tree-shaken from the client bundle).
- `import.meta.env.VITE_FOO` — for values that are genuinely public and need to reach
  the client (analytics IDs, public URLs). Never put secrets behind `VITE_`.
- On Cloudflare/edge-style runtimes, env binds per-request — always read `process.env`
  inside a function, never at module scope (a module-scope read resolves before the
  request env exists).
- Server functions (`createServerFn`, see `src/lib/api/example.functions.ts`) are the
  way to call server logic from the client in this stack — there's no Supabase Edge
  Functions here.

### Vite / build config

`vite.config.ts` wraps `@lovable.dev/vite-tanstack-config`, which already bundles
TanStack Start, React, Tailwind v4, tsconfig-paths, nitro, the Lovable component tagger,
env injection, and sandbox detection. **Do not** re-add any of those plugins manually —
duplicate plugins break the app. Only pass extra config through
`defineConfig({ vite: {...}, tanstackStart: {...}, nitro: {...} })`. Nitro preset here is
explicitly overridden to `"vercel"` (default would be `"cloudflare"`).

### UI components

- `src/components/ui/*` are shadcn/ui primitives (`components.json`: style "new-york",
  base color slate, icon lib lucide). Regenerate/add via the shadcn CLI rather than
  hand-rolling new primitives; aliases map `@/components`, `@/lib`, `@/ui`, `@/hooks`.
- `src/components/glitch/*` are the site-specific building blocks (`layout.tsx` has
  `Nav`, `Footer`, `ContactForm`, `Reveal`, `Field`; `canvases.tsx` has canvas-based
  visual effects like `HeroCanvas`/`CaseCanvas`/`PixelAvatar`). Page components under
  `src/routes/$lang/**` compose these rather than duplicating nav/footer/reveal logic.
- `useReveal` (`src/hooks/use-reveal.ts`) + the `<Reveal>` wrapper is the standard
  scroll-in-view animation used across every marketing page — reuse it instead of
  writing new IntersectionObserver logic.
- `useTheme` (`src/hooks/use-theme.ts`) manages dark/light via a `glitch-theme`
  localStorage key and toggles the `dark`/`light` class on `<html>`; the inline script
  in `__root.tsx`'s `RootShell` applies the stored theme before hydration to avoid a
  flash — keep both in sync if you change the storage key or default.

## Conventions

- Path alias `@/*` → `src/*` (set in `tsconfig.json`, mirrored by the Lovable vite
  config and `components.json` aliases).
- Prettier: 100 print width, double quotes off (`singleQuote: false` means double
  quotes), trailing commas everywhere, semicolons on. Run `bun run format` rather than
  hand-formatting.
- ESLint has `@typescript-eslint/no-unused-vars` turned **off** — unused vars are not
  flagged by lint here, don't rely on lint to catch them.
