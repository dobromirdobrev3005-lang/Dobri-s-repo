import { test } from '@playwright/test';
import { newPartnerFixture } from './support/testData';
import { createPartnerAndVerify, loginAndNavigateToPartners } from './support/flows';

/**
 * Log in, navigate to Partners, create a new Partner with every required
 * field populated, and validate that it has been created successfully.
 *
 * Kept as its own test (separate from the full lifecycle in
 * `partner-lifecycle.spec.ts`) so "does create work" has a fast, focused
 * signal of its own — it fails and reports independently of the update
 * path, and can run/re-run on its own.
 */
test('createPartnerAndVerify', async ({ page }) => {
  // Conditional skip on missing local/CI secrets, not a disabled test.
  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(
    !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD,
    'ADMIN_EMAIL / ADMIN_PASSWORD are not set (see .env.example)',
  );
  // The dialog loads a Google Map and a subscription-tier list, both slow
  // in this environment — give the flow more headroom than the 30s default.
  test.setTimeout(90_000);

  const partner = newPartnerFixture();

  const partnersPage = await loginAndNavigateToPartners(page);
  await createPartnerAndVerify(partnersPage, partner);
});
