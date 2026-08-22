import { Page, expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NewPartnerData, PartnersPage } from '../../pages/PartnersPage';

/**
 * Shared building blocks for the Partner specs. Extracted so
 * `createPartnerAndVerify.spec.ts` and `partner-lifecycle.spec.ts` share one
 * implementation of "log in and create a Partner" instead of two copies
 * that could quietly drift apart — the lifecycle test's create+verify step
 * literally *is* this function, not a re-typed duplicate of it.
 *
 * Each step is still wrapped in `test.step()` here (not just in the spec),
 * so both call sites keep the same readable, per-phase breakdown in the
 * console and HTML report.
 */

export async function loginAndNavigateToPartners(page: Page): Promise<PartnersPage> {
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

  return partnersPage;
}

/** Creates a Partner with every required field and validates it was saved. */
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
