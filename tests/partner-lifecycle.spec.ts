import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PartnersPage } from '../pages/PartnersPage';
import { newPartnerFixture, updatedPartnerFixture } from './support/testData';

/**
 * End-to-end business workflow covering the Partner entity's lifecycle:
 * log in, navigate to Partners, create a new Partner with all required
 * fields, verify it was saved, then update every editable field on that
 * same Partner (including its name — the updated value is traceable via
 * an "EDITED" marker) and verify every change was actually persisted, not
 * just reflected optimistically in the UI.
 *
 * Kept as a single flow (not split into isolated tests) because each step
 * only makes sense in the context the previous one produced — "update the
 * Partner" and "verify the change persisted" are meaningless without the
 * Partner this run just created. The Partner updated here is always the
 * one this run created, never a pre-existing record: that keeps the test
 * hermetic (no dependency on — or risk to — data owned by other runs)
 * while still exercising a real "update an existing entity" path, since
 * by the time the update step runs, the Partner already exists.
 */
test('creates a Partner, then updates every field and verifies each change was persisted', async ({
  page,
}) => {
  // Conditional skip on missing local/CI secrets, not a disabled test.
  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(
    !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD,
    'ADMIN_EMAIL / ADMIN_PASSWORD are not set (see .env.example)',
  );
  // The dialog loads a Google Map and a subscription-tier list, both slow
  // in this environment — give the flow more headroom than the 30s default.
  test.setTimeout(120_000);

  const partner = newPartnerFixture();
  const updated = updatedPartnerFixture(partner);

  await test.step('Log in to the platform', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
    await page.waitForURL((url) => !url.pathname.endsWith('/login'));
  });

  const partnersPage = new PartnersPage(page);

  await test.step('Navigate to the Partners section', async () => {
    await partnersPage.goto();
    await expect(page).toHaveURL(/\/partners$/);
  });

  await test.step('Create a new Partner and populate all required fields', async () => {
    await partnersPage.openNewPartnerDialog();
    await partnersPage.fillNewPartnerForm(partner);
    await partnersPage.save();
    await expect(partnersPage.dialog).toBeHidden();
  });

  await test.step('Validate the Partner was created successfully', async () => {
    await partnersPage.searchByName(partner.name);
    const row = partnersPage.row(partner.name);
    await expect(row).toBeVisible();
    await expect(row).toContainText(partner.phone);
    await expect(row).toContainText(partner.contactPerson);
    await expect(row).toContainText(partner.services[0]!);
  });

  await test.step('Update every editable field on the Partner (lifecycle: edit an existing entity)', async () => {
    await partnersPage.openEditDialogFor(partner.name);
    await partnersPage.fillNewPartnerForm(updated);
    await partnersPage.save();
    await expect(partnersPage.dialog).toBeHidden();
  });

  await test.step('Validate every change was actually persisted (not just optimistic UI)', async () => {
    // Force a fresh fetch from the backend instead of trusting in-memory UI
    // state, which would pass even if the save silently failed.
    await page.reload();

    await partnersPage.searchByName(updated.name);
    const row = partnersPage.row(updated.name);
    await expect(row).toBeVisible();
    await expect(row).toContainText(updated.phone);
    await expect(row).toContainText(updated.contactPerson);
    await expect(row).toContainText(updated.services[0]!);
    // The old service must be gone, not just the new one added alongside it.
    await expect(row).not.toContainText(partner.services[0]!);

    // The table doesn't surface Type or Description — reopen the persisted
    // record's own Edit form (itself freshly fetched) to confirm those too.
    await partnersPage.openEditDialogFor(updated.name);
    await partnersPage.expectFormMatches(updated);
  });
});
