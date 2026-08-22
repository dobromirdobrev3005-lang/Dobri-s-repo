import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PartnersPage } from '../../pages/PartnersPage';

/**
 * Playwright's equivalent of a JUnit/TestNG `@BeforeMethod`: a fixture that
 * runs before every test which requests it, does the setup, and hands the
 * test a ready-to-use resource. Unlike a plain `test.beforeEach()` (which
 * would have to be repeated in every spec file), this is defined once and
 * shared by importing this `test` instead of `@playwright/test`'s — both
 * `createPartnerAndVerify.spec.ts` and `partner-lifecycle.spec.ts` do.
 *
 * Login is intentionally *only* exercised this way, not as its own test:
 * if it breaks, every test that depends on it fails loudly and immediately
 * (right at the "Log in to the platform" step), which is exactly the
 * signal a dedicated login test would have given — without a third spec to
 * keep in sync.
 */
export const test = base.extend<{ partnersPage: PartnersPage }>({
  partnersPage: async ({ page }, use, testInfo) => {
    // Skip here, before login is even attempted, rather than repeating this
    // guard in every spec that needs the fixture.
    testInfo.skip(
      !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD,
      'ADMIN_EMAIL / ADMIN_PASSWORD are not set (see .env.example)',
    );

    // Set here, before the slow work starts, rather than in each spec body:
    // the default 30s budget covers the whole test including fixture setup,
    // and this dialog's Google Map + subscription-tier list are slow enough
    // in this environment that the default could expire during setup itself.
    testInfo.setTimeout(120_000);

    await test.step('Log in to the platform', async () => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
      await page.waitForURL((url) => !url.pathname.endsWith('/login'));
    });

    const partnersPage = new PartnersPage(page);

    await test.step('Navigate to the Partners section', async () => {
      await partnersPage.goto();
      await expect(page).toHaveURL(/\/partners$/);
    });

    await use(partnersPage);
  },
});

export { expect };
