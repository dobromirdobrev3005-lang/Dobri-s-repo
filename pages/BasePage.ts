import { Page } from '@playwright/test';

/**
 * Common behavior every Page Object needs. Domain pages extend this
 * instead of re-implementing navigation — as the suite grows past a
 * handful of pages (Requests, Users, Vehicles, Drivers, ...), shared
 * behavior like sidebar navigation or header interactions belongs here,
 * once, rather than copy-pasted into each one.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  /**
   * Navigates to a path relative to the configured baseURL. Deliberately
   * not named `goto` — each domain page exposes its own no-argument
   * `goto()` for its one canonical route, and giving it a different name
   * here avoids that public `goto()` looking like an override of this
   * (differently-shaped) protected helper.
   */
  protected async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }
}
