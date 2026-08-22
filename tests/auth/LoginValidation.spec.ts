import { test, expect } from './support/fixtures';
import { env } from '../../config/env';
/**
 * Negative / validation coverage for the `/login` form itself — a domain
 * of its own (`tests/auth/`), same shape as `tests/partners/`, rather than
 * bolted onto an existing spec file.
 *
 * Every `avtoikonom_regression_suite`-project test normally starts already
 * authenticated (see playwright.config.ts's `storageState`), so this whole
 * file opts out
 * of that shared session with `test.use({ storageState: ... })` below —
 * these tests need a clean, logged-out browser context to exercise the
 * login form at all.
 *
 * Every case here was first reproduced manually against `dev` before
 * being automated:
 * - Required-field validation is per-field (each shows its own message
 *   independently, not just "form invalid").
 * - There's no client-side email-format check — a syntactically invalid
 *   email is sent to the server and rejected with the same generic
 *   "invalid credentials" notification as any other wrong login, rather
 *   than a distinct "invalid format" message.
 * - A non-existent email and a wrong password for a real email produce
 *   that exact same generic notification — no user enumeration.
 * - Whitespace-only input in either field is *not* trimmed by the
 *   required-field rule (unlike, say, the Name field on the Partners
 *   form) — three spaces counts as a non-empty value, so the form submits
 *   it as a literal credential and the server rejects it the same generic
 *   way as any other wrong login.
 */
test.use({ storageState: { cookies: [], origins: [] } });

test(
  'LoginWithEmptyEmailAndPasswordRejected',
  { tag: ['@regression', '@auth'] },
  async ({ loginPage, page }) => {
    await loginPage.signInButton.click();

    await expect(loginPage.emailError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
    await expect(page).toHaveURL(/\/login$/);
  },
);

test('LoginWithMissingPasswordRejected', { tag: ['@regression', '@auth'] }, async ({ loginPage, page }) => {
  await loginPage.emailInput.fill('someone@example.com');
  await loginPage.signInButton.click();

  await expect(loginPage.passwordError).toBeVisible();
  await expect(loginPage.emailError).toBeHidden();
  await expect(page).toHaveURL(/\/login$/);
});

test('LoginWithMissingEmailRejected', { tag: ['@regression', '@auth'] }, async ({ loginPage, page }) => {
  await loginPage.passwordInput.fill('somepassword');
  await loginPage.signInButton.click();

  await expect(loginPage.emailError).toBeVisible();
  await expect(loginPage.passwordError).toBeHidden();
  await expect(page).toHaveURL(/\/login$/);
});

test('LoginWithNonExistentEmailRejected', { tag: ['@regression', '@auth'] }, async ({ loginPage, page }) => {
  await loginPage.login(`qa-e2e-nonexistent-${Date.now()}@example.com`, 'whatever-password');

  await expect(loginPage.failedLoginNotification).toBeVisible();
  await expect(page).toHaveURL(/\/login$/);
});

test('LoginWithWrongPasswordRejected', { tag: ['@regression', '@auth'] }, async ({ loginPage, page }) => {
  // A real, existing email — the point is proving a wrong password on a
  // valid account fails the exact same way as an unknown account
  // (see LoginWithNonExistentEmailRejected), not a distinguishable one.
  await loginPage.login(env.adminEmail!, 'definitely-the-wrong-password');

  await expect(loginPage.failedLoginNotification).toBeVisible();
  await expect(page).toHaveURL(/\/login$/);
});

test(
  'LoginWithInvalidEmailFormatRejected',
  { tag: ['@regression', '@auth'] },
  async ({ loginPage, page }) => {
    // No client-side format validation exists for this field: a
    // syntactically invalid email isn't caught before submit — it's sent
    // to the server and rejected the same generic way as any other wrong
    // login, so there's no separate "invalid email format" message to
    // assert here.
    await loginPage.login('not-an-email', 'whatever-password');

    await expect(loginPage.failedLoginNotification).toBeVisible();
    await expect(loginPage.emailError).toBeHidden();
    await expect(page).toHaveURL(/\/login$/);
  },
);

test(
  'LoginWithWhitespaceOnlyCredentialsRejected',
  { tag: ['@regression', '@auth'] },
  async ({ loginPage, page }) => {
    // Verified via the field's own value and the network outcome, not
    // assumed: three spaces is *not* caught by the required-field rule
    // (both fields report their normal, valid `ant-input-status-success`
    // state) — it's submitted as a literal credential and rejected by the
    // server the same generic way as any other wrong login.
    await loginPage.login('   ', '   ');

    await expect(loginPage.emailError).toBeHidden();
    await expect(loginPage.passwordError).toBeHidden();
    await expect(loginPage.failedLoginNotification).toBeVisible();
    await expect(page).toHaveURL(/\/login$/);
  },
);

test(
  'LoginWithValidCredentialsSucceeds',
  { tag: ['@smoke', '@regression', '@auth'] },
  async ({ loginPage, page }) => {
    await loginPage.login(env.adminEmail!, env.adminPassword!);

    await expect(page).not.toHaveURL(/\/login$/);
  },
);
