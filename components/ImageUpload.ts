import { Locator, Page, expect } from '@playwright/test';

/**
 * Wraps a file input that opens a secondary "Edit photo" crop dialog which
 * must be explicitly confirmed before the uploaded image actually applies
 * to the parent form — setting the file alone isn't enough.
 */
export class ImageUpload {
  constructor(
    private readonly page: Page,
    private readonly fileInput: Locator,
  ) {}

  async upload(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
    // Like the parent form dialog, this one carries no aria-label — match by content, not role name.
    const cropDialog = this.page.getByRole('dialog').filter({ hasText: 'Edit photo' });
    await expect(cropDialog).toBeVisible();
    await cropDialog.getByRole('button', { name: 'Save' }).click();
    await expect(cropDialog).toBeHidden();
  }
}
