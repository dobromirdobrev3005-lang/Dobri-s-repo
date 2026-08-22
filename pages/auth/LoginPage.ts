import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

/**
 * Page Object for the Admin panel login screen (/login).
 *
 * Selector strategy: the underlying UI (Ant Design) exposes no `id`,
 * `name` or `data-testid` attributes on the form fields, so we anchor on
 * semantic HTML attributes (`autocomplete`) instead of CSS classes, which
 * are the most likely thing to change. The button label is also avoided
 * as a selector: the app renders it localized ("Sign in" / "Логин")
 * depending on browser/session locale, so a text-based selector would be
 * flaky across environments — `form button[type="submit"]` is language
 * independent.
 */
export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  /**
   * The notification antd renders for a rejected login attempt (wrong
   * password, unknown email, ...) — matched by its stable
   * `ant-notification-notice-error` class rather than its message text,
   * which is locale-dependent ("Невалиден потребител или парола" /
   * an English equivalent), same reasoning as the sign-in button above.
   */
  readonly failedLoginNotification: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[autocomplete="email"]');
    this.passwordInput = page.locator('input[autocomplete="current-password"]');
    this.signInButton = page.locator('form button[type="submit"]');
    this.failedLoginNotification = page.locator('.ant-notification-notice-error');
  }

  async goto(): Promise<void> {
    await this.navigateTo('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  /**
   * The inline "required" validation message for a given field. Antd
   * renders it as a sibling within that field's own `.ant-form-item`
   * wrapper, matched here by the stable `ant-form-item-explain-error`
   * class — same locale-independence reasoning as everywhere else on this
   * page, since the copy itself ("задължително поле" / an English
   * equivalent) isn't stable across locales.
   */
  private fieldError(input: Locator): Locator {
    return input.locator(
      'xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " ant-form-item ")][1]' +
        '//div[contains(concat(" ", normalize-space(@class), " "), " ant-form-item-explain-error ")]',
    );
  }

  get emailError(): Locator {
    return this.fieldError(this.emailInput);
  }

  get passwordError(): Locator {
    return this.fieldError(this.passwordInput);
  }
}
