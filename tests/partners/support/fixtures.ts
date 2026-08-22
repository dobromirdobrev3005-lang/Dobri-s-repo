import { test as base, expect } from '@playwright/test';
import { PartnersPage } from '../../../pages/partners/PartnersPage';

/**
 * Provides a `partnersPage` already sitting on the Partners section.
 * Authentication itself is no longer done here — it happens once in
 * `tests/setup/auth.setup.ts`, and this project's `chromium` config
 * consumes that session via `storageState` (see playwright.config.ts).
 * This fixture's only remaining job is "start every test already on
 * Partners" — Playwright's equivalent of a JUnit/TestNG `@BeforeMethod`,
 * shared by import instead of repeated per spec file.
 */
export const test = base.extend<{ partnersPage: PartnersPage }>({
  partnersPage: async ({ page }, use) => {
    const partnersPage = new PartnersPage(page);

    await test.step('Navigate to the Partners section', async () => {
      await partnersPage.goto();
      await expect(page).toHaveURL(/\/partners$/);
    });

    await use(partnersPage);
  },
});

export { expect };
