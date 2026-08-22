import { expect, test } from './support/fixtures';
import { newPartnerFixture, updatedPartnerFixture } from './support/testData';
import { createPartnerAndVerify } from './support/flows';

/**
 * End-to-end business workflow covering the Partner entity's full
 * lifecycle: create a new Partner (via the same `createPartnerAndVerify`
 * used by its own dedicated test — this flow *includes* that one rather
 * than re-typing it), then update every editable field on that same
 * Partner (including its name — the updated value is traceable via an
 * "EDITED" marker) and verify every change was actually persisted, not
 * just reflected optimistically in the UI. Authentication + navigation to
 * Partners happen outside this test — see the comment in
 * `CreatePartner.spec.ts` for how.
 *
 * The update+verify half is kept in this same test, rather than split
 * further, because it's only meaningful given the state creation already
 * produced — "verify the update persisted" doesn't mean anything without
 * the Partner this run just created. That Partner is always the one this
 * run created, never a pre-existing record: that keeps the test hermetic
 * (no dependency on — or risk to — data owned by other runs) while still
 * exercising a real "update an existing entity" path, since by the time
 * the update step runs, the Partner already exists.
 */
test('CreatePartnerAndUpdate', { tag: ['@regression', '@partners'] }, async ({ page, partnersPage }) => {
  const partner = newPartnerFixture();
  const updated = updatedPartnerFixture(partner);

  await createPartnerAndVerify(partnersPage, partner);

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
