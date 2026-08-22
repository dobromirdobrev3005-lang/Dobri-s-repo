import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { AntdSelect } from '../../components/AntdSelect';
import { AddressAutocomplete } from '../../components/AddressAutocomplete';
import { ImageUpload } from '../../components/ImageUpload';

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
 * Field-type quirks (the antd `<Select>` overlay-intercept, its non-standard
 * multi-select chip removal, the Google Places portal, the "Edit photo"
 * crop dialog) live in `components/`, not here — this class composes them
 * by field id and otherwise only knows about *this* form's shape. Each
 * field has a stable `id` (`name-field`, `partner-type-field`, ...) that
 * survives copy/label changes, so fields are targeted by id rather than by
 * placeholder text.
 */
export class PartnersPage extends BasePage {
  /**
   * Every required-field validation message the "New partner"/"Edit
   * partner" form shows when Save is clicked with required data missing —
   * all nine appear together in one submit, so
   * `expectRequiredFieldErrors()` asserts them as a set (see
   * CreatePartnerValidation.spec.ts). Matched by their static English
   * copy: there's no id/data-testid on the antd error node (it renders
   * under a hashed CSS-module class — the thing this project's selector
   * strategy otherwise avoids), and unlike the login button's label (see
   * LoginPage), this copy isn't locale-dependent, so text is the least
   * brittle option actually available here.
   */
  static readonly REQUIRED_FIELD_ERRORS = [
    'Please write a name',
    'Please enter a type!',
    'Please enter services!',
    'Please enter a subscription plan!',
    'Please choose an address!',
    'Please enter a phone number',
    'Please enter a contact person!',
    'Please enter a description!',
    'Please enter a logo!',
  ] as const;

  readonly newPartnerButton: Locator;
  readonly searchInput: Locator;

  /** The currently open form dialog (New partner or Edit partner) — set by openNewPartnerDialog()/openEditDialogFor(). */
  private activeDialog!: Locator;

  constructor(page: Page) {
    super(page);
    this.newPartnerButton = page.getByRole('button', { name: 'New partner' });
    this.searchInput = page.locator('#search-partners');
  }

  get dialog(): Locator {
    return this.activeDialog;
  }

  async goto(): Promise<void> {
    await this.navigateTo('/partners');
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

  private field(fieldId: string): Locator {
    return this.activeDialog.locator(`#${fieldId}`);
  }

  /** Clicks a neutral, always-non-interactive spot in the open dialog to blur/close a still-open multi-select popup. Not `Escape`: that closes the whole dialog here, not just the dropdown. */
  private async blurOpenDropdown(): Promise<void> {
    await this.activeDialog.click({ position: { x: 20, y: 20 } });
  }

  /** Fills every field of the currently open dialog. Used for both creating a Partner and fully replacing one on edit — the app reuses the same form for both, so this does too. */
  async fillNewPartnerForm(data: NewPartnerData): Promise<void> {
    await this.field('name-field').fill(data.name);

    await new AntdSelect(this.page, this.field('partner-type-field')).selectByText(data.type);

    await new AntdSelect(this.page, this.field('service-types-field')).selectMultiple(data.services);
    await this.blurOpenDropdown();

    // The exact tier is irrelevant to this flow — every option satisfies the required field.
    await new AntdSelect(this.page, this.field('subscription-tier-field')).selectFirst();

    await new AddressAutocomplete(this.page, this.field('address-field')).fill(data.address);

    await this.field('phone-field').fill(data.phone);
    await this.field('contact-person-field').fill(data.contactPerson);
    await this.field('description-field').fill(data.description);

    await new ImageUpload(this.page, this.activeDialog.locator('input[name="file-upload"]')).upload(
      data.logoPath,
    );

    if (data.hideInMobileApp !== undefined) {
      await this.field('checkbox-hide').setChecked(data.hideInMobileApp);
    }
  }

  async save(): Promise<void> {
    await this.activeDialog.getByRole('button', { name: 'Save', exact: true }).click();
  }

  /** Asserts every entry in REQUIRED_FIELD_ERRORS is currently shown in the open dialog. */
  async expectRequiredFieldErrors(): Promise<void> {
    for (const message of PartnersPage.REQUIRED_FIELD_ERRORS) {
      await expect(this.activeDialog.getByText(message, { exact: true })).toBeVisible();
    }
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
    await expect(this.field('name-field')).toHaveValue(data.name);
    await expect(this.activeDialog).toContainText(data.type);
    for (const service of data.services) {
      await expect(this.activeDialog).toContainText(service);
    }
    // The phone widget reformats the raw digits (adds "+359" and spacing),
    // so compare digits only rather than the exact string.
    const phoneValue = await this.field('phone-field').inputValue();
    expect(phoneValue.replace(/\D/g, '')).toContain(data.phone.replace(/\D/g, ''));
    await expect(this.field('contact-person-field')).toHaveValue(data.contactPerson);
    await expect(this.field('description-field')).toHaveValue(data.description);
    if (data.hideInMobileApp !== undefined) {
      const checkbox = this.field('checkbox-hide');
      if (data.hideInMobileApp) {
        await expect(checkbox).toBeChecked();
      } else {
        await expect(checkbox).not.toBeChecked();
      }
    }
  }
}
