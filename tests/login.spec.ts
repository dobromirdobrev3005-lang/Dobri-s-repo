import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login page', () => {
  test('navigates to the login page and renders the sign-in form', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(page).toHaveURL(/\/login$/);
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
  });

  test('logs in with valid credentials and reaches the dashboard', async ({ page }) => {
    test.skip(
      !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD,
      'ADMIN_EMAIL / ADMIN_PASSWORD are not set (see .env.example)',
    );

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);

    // A successful login redirects away from /login into the app shell.
    await page.waitForURL((url) => !url.pathname.endsWith('/login'));
    await expect(page).not.toHaveURL(/\/login$/);

    // The logged-in user's email is rendered in the header — confirms we
    // are authenticated as the expected account, not just "somewhere else".
    await expect(page.locator('#current-user-email')).toHaveText(process.env.ADMIN_EMAIL!);
  });
});
