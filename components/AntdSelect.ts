import { Locator, Page } from '@playwright/test';

/**
 * Wraps an Ant Design `<Select>` field (single- or multi-value), covering
 * two quirks discovered against this app's build of antd — real bugs a
 * naive Playwright script hits, isolated here once instead of rediscovered
 * (and worked around inconsistently) by every future Page Object that has
 * a Select field of its own:
 *
 * - Clicking the field's own search `<input>` only reliably opens the
 *   dropdown while the select is still empty. Once a value is selected,
 *   antd renders it as a `.ant-select-selection-item` (or, in multi-select,
 *   a `.ant-select-selection-overflow-item`) stacked visually on top of
 *   that same input, and Playwright flags the input-click as intercepted.
 *   The wrapping `.ant-select` container opens the dropdown regardless of
 *   state, so every method here targets that instead.
 * - Multi-select chip removal doesn't use antd's own
 *   `.ant-select-selection-item-remove` in this app — it renders a fully
 *   custom tag (hashed CSS-module classes) with a plain `<img>` as the "×"
 *   affordance.
 */
export class AntdSelect {
  private readonly container: Locator;

  constructor(
    private readonly page: Page,
    fieldLocator: Locator,
  ) {
    this.container = fieldLocator.locator(
      'xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " ant-select ")][1]',
    );
  }

  private dropdown(): Locator {
    return this.page.locator('.ant-select-dropdown:visible').last();
  }

  async open(): Promise<void> {
    await this.container.click();
  }

  /** Selects the option matching the given visible label. Matched by class + text, not role=option — this app's options expose their raw enum value ("carService") as the accessible name instead of the rendered label ("Service"). */
  async selectByText(text: string): Promise<void> {
    await this.open();
    await this.dropdown().locator('.ant-select-item-option', { hasText: text }).first().click();
  }

  /** Selects the first available option — for required fields where the exact value doesn't matter to the test. */
  async selectFirst(): Promise<void> {
    await this.open();
    await this.dropdown().locator('.ant-select-item-option').first().click();
  }

  /** Removes every currently-selected chip from a multi-select (no-op if none are selected). */
  async clearAll(): Promise<void> {
    const chips = this.container.locator(
      '.ant-select-selection-overflow-item:not(.ant-select-selection-overflow-item-suffix)',
    );
    while (await chips.count()) {
      await chips.first().locator('img').click();
    }
  }

  /** Replaces the current multi-select selection with exactly these options. */
  async selectMultiple(texts: string[]): Promise<void> {
    await this.clearAll();
    for (const text of texts) {
      await this.selectByText(text);
    }
  }
}
