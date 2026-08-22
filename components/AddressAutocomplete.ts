import { Locator, Page, expect } from '@playwright/test';

/**
 * Wraps a Google Places Autocomplete input: fills it and picks the first
 * suggestion. Suggestions (`.pac-item`) render in a Google-owned portal
 * appended to `<body>`, not scoped to whatever dialog the input itself
 * lives in — the page-level locator here, not the field's own container,
 * is deliberate.
 */
export class AddressAutocomplete {
  constructor(
    private readonly page: Page,
    private readonly input: Locator,
  ) {}

  async fill(address: string): Promise<void> {
    await this.input.click();
    await this.input.fill(address);
    const suggestion = this.page.locator('.pac-item').first();
    await expect(suggestion).toBeVisible();
    await suggestion.click();
  }
}
