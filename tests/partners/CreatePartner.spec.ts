import { test } from './support/fixtures';
import { newPartnerFixture } from './support/testData';
import { createPartnerAndVerify } from './support/flows';

/**
 * Create a new Partner with every required field populated and validate
 * that it has been created successfully. Authentication + navigation to
 * Partners happen outside this test entirely — a `storageState` cached by
 * `tests/setup/auth.setup.ts` (see playwright.config.ts) plus the
 * `partnersPage` fixture (see `tests/partners/support/fixtures.ts`), which
 * together are this project's `@BeforeMethod` equivalent.
 *
 * Kept as its own test (separate from the full lifecycle in
 * `CreatePartnerAndUpdate.spec.ts`) so "does create work" has a fast,
 * focused signal of its own — it fails and reports independently of the
 * update path, and can run/re-run on its own.
 */
test('CreatePartner', { tag: ['@smoke', '@regression', '@partners'] }, async ({ partnersPage }) => {
  const partner = newPartnerFixture();
  await createPartnerAndVerify(partnersPage, partner);
});
