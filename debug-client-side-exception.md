# Debug Session: client-side-exception

- Status: OPEN
- Symptom: Production page shows `Application error: a client-side exception has occurred while loading www.gullfossiceland.com`
- Scope: Initial page load / client hydration
- Notes: Session initialized. No business logic changes made yet.

## Hypotheses

1. A client component is reading an undefined translation key or locale-specific field during hydration and throws on first render.
2. A browser-only API such as `localStorage`, `window`, or `useSearchParams()` is still used in a way that breaks during hydration or route bootstrap in production.
3. The new locale expansion (`is` / `da`) introduced a runtime shape mismatch in messages consumed by client components.
4. Middleware redirect or locale routing produces a path/state mismatch that only surfaces on the client after server HTML loads.
5. Optional analytics/bootstrap code in layout causes an exception when certain environment variables or browser conditions are missing.

## Plan

1. Inspect runtime entry points and production-facing client components.
2. Add minimal instrumentation only.
3. Reproduce in browser and inspect console/network evidence.
4. Implement minimal fix based on evidence.
5. Re-verify and compare pre-fix / post-fix behavior.

## Evidence

- Browser console reported `No intl context found. Have you configured the provider?`
- Stack pointed to `GoogleAnalytics -> useLocale()` in `src/components/GoogleAnalytics.tsx`
- Pre-fix debug log confirmed layout order:
  - `runId=pre-fix`
  - `gaOutsideProvider=true`
- Post-fix debug log confirmed layout order:
  - `runId=post-fix`
  - `gaOutsideProvider=false`

## Fix

- Moved `GoogleAnalytics` inside `NextIntlClientProvider` in `src/app/[locale]/layout.tsx`
- Kept a post-fix debug point for verification

## Verification

- Local browser check: page `/en` renders normally, no `Application error`
- Production build: `npm run build` passed
- Session awaiting user confirmation before cleanup
