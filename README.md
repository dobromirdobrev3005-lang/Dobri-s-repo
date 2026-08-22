# Avtoikonom Admin — E2E Automation

Playwright + TypeScript end-to-end tests for the Avtoikonom admin panel
(`dev.admin.avtoikonom.com`), covering Partner creation/update/validation
and Login validation.

## Install & run

```bash
npm install
npx playwright install chromium   # first time only
cp .env.example .env              # fill in ADMIN_EMAIL / ADMIN_PASSWORD
npm test                          # run everything
```

Other useful scripts:

```bash
npm run test:smoke        # fast @smoke subset
npm run test:regression   # full @regression suite
npm run report             # open the Playwright HTML report
npm run typecheck / lint / format
```

A run also generates an Allure report and prints a `http://localhost:5252`
link at the end.

## Architectural decisions

- **Playwright + TypeScript** — built-in auto-waiting, good for this
  slow/animation-heavy SPA, plus native trace/video capture.
- **Page Object Model**, organized by domain (`pages/partners`, `pages/auth`,
  with matching `tests/partners`, `tests/auth`).
- **`storageState`-based login** — logs in once (`tests/setup/auth.setup.ts`)
  and reuses that session, instead of logging in through the UI per test.
  The login tests themselves opt back out of it to test the login form.
- **Tags** (`@smoke`, `@regression`) to run a fast subset vs. the full suite.
- **Stable selectors first** (`id`, `autocomplete`), antd structural classes
  as a fallback — never locale-dependent visible text.
- Config/credentials come from `.env` via `config/env.ts`, not hardcoded.

## Assumptions

Two real validation gaps were found on `dev` and are covered by tests that
fail on purpose until fixed: Partner names can be duplicated, and phone
numbers have no minimum length.

## Given more time

- API-level test data setup/cleanup instead of creating everything through
  the UI.
- More negative-path coverage (file upload validation, session/logout edge
  cases).
- More domains (Requests, Vehicles, Users, ...) following the same pattern.
- Cross browser validation.
- Different environment setups so that the regression can be executed on all environments.
- CI pipeline split (smoke on PR, full regression nightly).
- To be set to run headless when executed in pipeline.
- Gitignore a lot of things that doesnt need to go in the remote repository.

