import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/auth/LoginPage';
import { env, STORAGE_STATE_PATH } from '../../config/env';

/**
 * Authenticates once, before any project that depends on "setup" runs, and
 * caches the session to disk — Playwright's documented pattern for
 * avoiding a fresh UI login on every single test. See playwright.config.ts
 * for the project dependency that wires this in and the `storageState`
 * that consumes it.
 *
 * Missing credentials fail this test loudly (not a silent `test.skip`):
 * Playwright's project-dependency mechanism then cleanly skips every test
 * that depends on "setup", but the run as a whole still goes red. At the
 * scale this project is designed for, a misconfigured CI secret should be
 * impossible to miss — a quietly-skipped auth step could otherwise leave a
 * pipeline reporting all-green while having run zero real tests.
 */
setup('authenticate', async ({ page }) => {
  if (!env.adminEmail || !env.adminPassword) {
    throw new Error(
      'ADMIN_EMAIL / ADMIN_PASSWORD are not set (see .env.example) — required to authenticate before any dependent test can run.',
    );
  }

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(env.adminEmail, env.adminPassword);
  await page.waitForURL((url) => !url.pathname.endsWith('/login'));

  await page.context().storageState({ path: STORAGE_STATE_PATH });
});
