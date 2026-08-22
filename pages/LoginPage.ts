import { Page, Locator } from '@playwright/test';

/**
 * Page Object for the Admin panel login screen (/login).
 *
 * Selector strategy: the underlying UI (Ant Design) exposes no `id`,
 * `name` or `data-testid` attributes on the form fields, so we anchor on
 * semantic HTML attributes (`autocomplete`) instead of CSS classes, which
 * are the most likely thing to change. The button label is also avoided
 * as a selector: the app renders it localized ("Sign in" / "Логин"
 * depending on browser/session locale), so a text-based selector would be
 * flaky across environments — `form button[type="submit"]` is language
 * independent.
 */
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[autocomplete="email"]');
    this.passwordInput = page.locator('input[autocomplete="current-password"]');
    this.signInButton = page.locator('form button[type="submit"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
