import { Page, Locator, expect } from '@playwright/test';

export interface NewPartnerData {
  name: string;
  type: 'Service' | 'Insurer';
  services: string[];
  address: string;
  phone: string;
  contactPerson: string;
  description: string;
  logoPath: string;
  hideInMobileApp?: boolean;
}

/**
 * Page Object for the Partners section: the list, the "New partner"
 * dialog, and the "Edit partner" dialog (same form, reused by the app for
 * both create and update).
 *
 * The dialog is built with Ant Design. Each field has a stable `id`
 * (`name-field`, `partner-type-field`, ...) that survives copy/label
 * changes, so fields are targeted by id rather than by placeholder text —
 * antd renders the placeholder as a sibling <span> visually behind the
 * real `<input>`, and clicking the span is flagged by Playwright as
 * "intercepted" by the input sitting on top of it.
 * Selects/multi-selects render their option list in a portal appended to
 * <body>, so option locators are scoped to the page, not to the dialog.
 * The Address field is a Google Places Autocomplete widget (`.pac-item`
 * suggestions, also a body-level portal). The Logo field opens a
 * secondary "Edit photo" crop dialog that must be confirmed before the
 * main dialog's own Save applies.
 */
export class PartnersPage {
  readonly page: Page;
  readonly newPartnerButton: Locator;
  readonly searchInput: Locator;

  /** The currently open form dialog (New partner or Edit partner) — set by openNewPartnerDialog()/openEditDialogFor(). */
  private activeDialog!: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newPartnerButton = page.getByRole('button', { name: 'New partner' });
    this.searchInput = page.locator('#search-partners');
  }

  get dialog(): Locator {
    return this.activeDialog;
  }

  async goto(): Promise<void> {
    await this.page.goto('/partners');
  }

  async openNewPartnerDialog(): Promise<void> {
    await this.newPartnerButton.click();
    this.activeDialog = this.page.getByRole('dialog').filter({ hasText: 'New partner' });
    await expect(this.activeDialog).toBeVisible();
  }

  /** Opens the "⋮" row menu for a Partner and clicks Edit. */
  async openEditDialogFor(partnerName: string): Promise<void> {
    const menuButton = this.row(partnerName).locator('img[alt="dots-icon"]');
    await menuButton.click();
    await this.page.getByRole('menuitem', { name: 'Edit' }).click();
    this.activeDialog = this.page.getByRole('dialog').filter({ hasText: 'Edit partner' });
    await expect(this.activeDialog).toBeVisible();
  }

  /**
   * The clickable antd select container for a field id. Clicking the field's
   * own `<input>` only works reliably when the select is still empty — once
   * a value is selected, antd renders it as a `.ant-select-selection-item`
   * span stacked over the (now tiny) search input, which then intercepts
   * the click. The wrapping `.ant-select` container opens the dropdown
   * either way, so target that instead.
   */
  private selectContainer(fieldId: string): Locator {
    return this.activeDialog
      .locator(`#${fieldId}`)
      .locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " ant-select ")][1]');
  }

  /**
   * Opens an antd select by its field id and picks the option with the given
   * visible text. Options are matched by class + visible text rather than
   * role=option: this app's option elements expose their raw enum value
   * ("carService") as the accessible name instead of the rendered label
   * ("Service"), so role-based matching silently finds nothing.
   */
  private async selectAntdOption(fieldId: string, optionText: string): Promise<void> {
    await this.selectContainer(fieldId).click();
    const dropdown = this.page.locator('.ant-select-dropdown:visible').last();
    await dropdown.locator('.ant-select-item-option', { hasText: optionText }).first().click();
  }

  /** Opens the Subscription plan select and picks the first available tier — the exact tier is irrelevant to this flow. */
  private async selectFirstSubscriptionPlan(): Promise<void> {
    await this.selectContainer('subscription-tier-field').click();
    const dropdown = this.page.locator('.ant-select-dropdown:visible').last();
    await dropdown.locator('.ant-select-item-option').first().click();
  }

  /** Clicks a neutral, always-non-interactive spot in the open dialog to blur/close a still-open select popup. */
  private async blurOpenDropdown(): Promise<void> {
    await this.activeDialog.click({ position: { x: 20, y: 20 } });
  }

  /**
   * Removes every already-selected chip from a multi-select field (no-op if
   * none selected). Each chip is an `.ant-select-selection-overflow-item`
   * (a stable antd structural class); its remove control is not antd's
   * default `.ant-select-selection-item-remove` here — this app renders a
   * fully custom tag (hashed CSS-module classes) with a plain `<img>` as
   * the "×" affordance, so we click that image instead.
   */
  private async clearMultiSelect(fieldId: string): Promise<void> {
    const container = this.selectContainer(fieldId);
    const chips = container.locator(
      '.ant-select-selection-overflow-item:not(.ant-select-selection-overflow-item-suffix)',
    );
    while (await chips.count()) {
      await chips.first().locator('img').click();
    }
  }

  private async selectServices(services: string[]): Promise<void> {
    await this.clearMultiSelect('service-types-field');
    const field = this.selectContainer('service-types-field');
    for (const service of services) {
      await field.click();
      const dropdown = this.page.locator('.ant-select-dropdown:visible').last();
      await dropdown.locator('.ant-select-item-option', { hasText: service }).first().click();
    }
    await this.blurOpenDropdown();
  }

  private async fillAddress(address: string): Promise<void> {
    const addressInput = this.activeDialog.locator('#address-field');
    await addressInput.click();
    await addressInput.fill(address);
    const suggestion = this.page.locator('.pac-item').first();
    await expect(suggestion).toBeVisible();
    await suggestion.click();
  }

  private async uploadLogo(logoPath: string): Promise<void> {
    await this.activeDialog.locator('input[name="file-upload"]').setInputFiles(logoPath);
    // Like the main dialog, this one carries no aria-label — match by content instead of role name.
    const cropDialog = this.page.getByRole('dialog').filter({ hasText: 'Edit photo' });
    await expect(cropDialog).toBeVisible();
    await cropDialog.getByRole('button', { name: 'Save' }).click();
    await expect(cropDialog).toBeHidden();
  }

  /** Fills every field of the currently open dialog. Used for both creating a Partner and fully replacing one on edit. */
  async fillNewPartnerForm(data: NewPartnerData): Promise<void> {
    await this.activeDialog.locator('#name-field').fill(data.name);
    await this.selectAntdOption('partner-type-field', data.type);
    await this.selectServices(data.services);
    await this.selectFirstSubscriptionPlan();
    await this.fillAddress(data.address);
    await this.activeDialog.locator('#phone-field').fill(data.phone);
    await this.activeDialog.locator('#contact-person-field').fill(data.contactPerson);
    await this.activeDialog.locator('#description-field').fill(data.description);
    await this.uploadLogo(data.logoPath);
    if (data.hideInMobileApp !== undefined) {
      await this.activeDialog.locator('#checkbox-hide').setChecked(data.hideInMobileApp);
    }
  }

  async save(): Promise<void> {
    await this.activeDialog.getByRole('button', { name: 'Save', exact: true }).click();
  }

  async searchByName(name: string): Promise<void> {
    await this.searchInput.fill(name);
    await this.searchInput.press('Enter');
  }

  /** The partners table row for a given partner name. */
  row(name: string): Locator {
    return this.page.getByRole('table').getByRole('row').filter({ hasText: name });
  }

  /**
   * Asserts the currently open dialog reflects `data` — used after
   * reopening Edit on a Partner post-reload, to prove a change was
   * actually persisted rather than only shown optimistically right after
   * Save. Address and Logo are intentionally not asserted: address is a
   * free-text Places result not required to be validated, and Logo has no
   * text representation to assert against without visual diffing.
   */
  async expectFormMatches(data: NewPartnerData): Promise<void> {
    await expect(this.activeDialog.locator('#name-field')).toHaveValue(data.name);
    await expect(this.activeDialog).toContainText(data.type);
    for (const service of data.services) {
      await expect(this.activeDialog).toContainText(service);
    }
    // The phone widget reformats the raw digits (adds "+359" and spacing),
    // so compare digits only rather than the exact string.
    const phoneValue = await this.activeDialog.locator('#phone-field').inputValue();
    expect(phoneValue.replace(/\D/g, '')).toContain(data.phone.replace(/\D/g, ''));
    await expect(this.activeDialog.locator('#contact-person-field')).toHaveValue(data.contactPerson);
    await expect(this.activeDialog.locator('#description-field')).toHaveValue(data.description);
    if (data.hideInMobileApp !== undefined) {
      const checkbox = this.activeDialog.locator('#checkbox-hide');
      if (data.hideInMobileApp) {
        await expect(checkbox).toBeChecked();
      } else {
        await expect(checkbox).not.toBeChecked();
      }
    }
  }
}
