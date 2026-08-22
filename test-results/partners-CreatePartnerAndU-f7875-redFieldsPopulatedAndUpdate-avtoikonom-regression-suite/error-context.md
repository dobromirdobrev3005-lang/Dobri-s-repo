# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partners\CreatePartnerAndUpdate.spec.ts >> CreatePartnerWithRequiredFieldsPopulatedAndUpdate
- Location: tests\partners\CreatePartnerAndUpdate.spec.ts:25:5

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('dialog').filter({ hasText: 'Edit photo' })
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" with timeout 10000ms
  - waiting for getByRole('dialog').filter({ hasText: 'Edit photo' })
    - locator resolved to <div role="dialog" aria-modal="true" class="ant-modal ant-zoom-appear ant-zoom-appear-active ant-zoom">…</div>
    21 × unexpected value "visible"
       - locator resolved to <div role="dialog" aria-modal="true" class="ant-modal">…</div>
    - unexpected value "visible"

```

```yaml
- dialog:
  - text: Edit photo
  - img "image-edit"
  - button "Cancel"
  - button "Save"
```

# Test source

```ts
  1  | import { Locator, Page, expect } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Wraps a file input that opens a secondary "Edit photo" crop dialog which
  5  |  * must be explicitly confirmed before the uploaded image actually applies
  6  |  * to the parent form — setting the file alone isn't enough.
  7  |  */
  8  | export class ImageUpload {
  9  |   constructor(
  10 |     private readonly page: Page,
  11 |     private readonly fileInput: Locator,
  12 |   ) {}
  13 | 
  14 |   async upload(filePath: string): Promise<void> {
  15 |     await this.fileInput.setInputFiles(filePath);
  16 |     // Like the parent form dialog, this one carries no aria-label — match by content, not role name.
  17 |     const cropDialog = this.page.getByRole('dialog').filter({ hasText: 'Edit photo' });
  18 |     await expect(cropDialog).toBeVisible();
  19 |     await cropDialog.getByRole('button', { name: 'Save' }).click();
> 20 |     await expect(cropDialog).toBeHidden();
     |                              ^ Error: expect(locator).toBeHidden() failed
  21 |   }
  22 | }
  23 | 
```