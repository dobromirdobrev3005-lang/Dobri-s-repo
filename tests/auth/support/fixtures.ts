import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/auth/LoginPage';

/**
 * Provides a `loginPage` already sitting on `/login`. Unlike
 * `tests/partners/support/fixtures.ts`, this fixture does *not* assume an
 * authenticated session — these tests exercise the login form itself, so
 * every spec that uses it overrides the `avtoikonom_regression_suite`
 * project's shared `storageState` with
 * `test.use({ storageState: { cookies: [], origins: [] } })`
 * (see LoginValidation.spec.ts) to start from a clean, logged-out browser
 * context instead of the pre-authenticated one every other domain gets.
 */
export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect };
