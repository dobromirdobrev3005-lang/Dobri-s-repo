import { test } from './support/fixtures';
import { newPartnerFixture } from './support/testData';
import { createPartnerAndVerify } from './support/flows';

/**
 * Create a new Partner with every required field populated and validate
 * that it has been created successfully. Login + navigation to Partners
 * happen in the `partnersPage` fixture (see `tests/support/fixtures.ts`),
 * not as steps here — that's this project's `@BeforeMethod` equivalent.
 *
 * Kept as its own test (separate from the full lifecycle in
 * `partner-lifecycle.spec.ts`) so "does create work" has a fast, focused
 * signal of its own — it fails and reports independently of the update
 * path, and can run/re-run on its own.
 */
test('createPartnerAndVerify', async ({ partnersPage }) => {
  const partner = newPartnerFixture();
  await createPartnerAndVerify(partnersPage, partner);
});
