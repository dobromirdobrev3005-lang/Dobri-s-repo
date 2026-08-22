import { expect, test } from './fixtures';
import { NewPartnerData, PartnersPage } from '../../../pages/partners/PartnersPage';

/**
 * Shared step reused by `CreatePartner.spec.ts` and
 * `CreatePartnerAndUpdate.spec.ts`, so the lifecycle test's create+verify
 * half literally *is* the standalone test's body, not a re-typed copy of
 * it. Wrapped in `test.step()` so both call sites keep the same readable,
 * per-phase breakdown in the console and HTML report.
 */
export async function createPartnerAndVerify(
  partnersPage: PartnersPage,
  partner: NewPartnerData,
): Promise<void> {
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
}
