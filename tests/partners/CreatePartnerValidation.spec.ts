import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { newPartnerFixture } from './support/testData';

/**
 * Negative / validation coverage for the "New partner" form — the
 * counterpart to the happy-path lifecycle in `CreatePartner.spec.ts` and
 * `CreatePartnerAndUpdate.spec.ts`. Every case here was first reproduced
 * manually against `dev` before being automated, so each assertion below
 * reflects the app's actual current behavior, not an assumption about it.
 *
 * Two of these tests (`CreatePartnerWithDuplicateNameRejected`,
 * `CreatePartnerWithVeryShortPhoneNumberRejected`) found missing
 * validation on real fields — see the README's "Missing validations"
 * section. They assert the *correct* behavior, which the app doesn't
 * currently have, so they fail on purpose until the underlying bug is
 * fixed — this suite intentionally reports red for those two rather than
 * hiding the gap behind a passing/skipped test. See each test's comment
 * for the specifics.
 */

test(
  'CreatePartnerWithMissingRequiredFieldsRejected',
  { tag: ['@regression', '@partners'] },
  async ({ partnersPage }) => {
    await partnersPage.openNewPartnerDialog();
    await partnersPage.save();

    // All nine required fields error together in one submit — the dialog
    // doesn't stop at the first one.
    await partnersPage.expectRequiredFieldErrors();
    await expect(partnersPage.dialog).toBeVisible();
  },
);

test(
  'CreatePartnerWithWhitespaceOnlyNameRejected',
  { tag: ['@regression', '@partners'] },
  async ({ partnersPage }) => {
    // A name of only spaces is trimmed and treated as empty — the same
    // "Please write a name" error as leaving the field untouched, not a
    // separate message and not accepted as a "real" name.
    const partner = newPartnerFixture();
    partner.name = '   ';

    await partnersPage.openNewPartnerDialog();
    await partnersPage.fillNewPartnerForm(partner);
    await partnersPage.save();

    await expect(partnersPage.dialog.getByText('Please write a name', { exact: true })).toBeVisible();
    await expect(partnersPage.dialog).toBeVisible();
  },
);

test(
  'CreatePartnerWithNonNumericPhoneInputRejected',
  { tag: ['@regression', '@partners'] },
  async ({ partnersPage }) => {
    // The phone widget filters non-digit characters as they're typed —
    // letters never make it into the field's value at all. Worth locking
    // in as its own regression check: this input-masking behavior is easy
    // to silently break (e.g. swapping the phone widget) without any of
    // the other Partner tests noticing, since they only ever type valid
    // digits.
    await partnersPage.openNewPartnerDialog();
    const phoneField = partnersPage.dialog.locator('#phone-field');
    await phoneField.fill('abcdef');
    await expect(phoneField).toHaveValue('');
  },
);

/**
 * Waits for the response to the "New partner" dialog's own Save request
 * while `action` triggers it, and returns whether the backend accepted it.
 * The two known-bug cases below need to tell "rejected" apart from "still
 * saving" precisely, and the dialog's own visibility can't do that
 * reliably — right after the click it reads as "open" in both cases,
 * which raced against a `toBeVisible()` check and made both cases look
 * indistinguishable during manual verification. Keying off the actual
 * backend response is the one deviation from this suite's usual UI-only
 * verification (see README) — deliberate here, since it's the only
 * deterministic signal available for "was this accepted or not".
 */
async function saveWasAccepted(page: Page, action: () => Promise<void>): Promise<boolean> {
  const [response] = await Promise.all([
    page.waitForResponse((res) => res.request().method() === 'POST' && res.url().includes('/partner')),
    action(),
  ]);
  return response.ok();
}

test(
  'CreatePartnerWithDuplicateNameRejected',
  { tag: ['@regression', '@partners'] },
  async ({ partnersPage, page }) => {
    // KNOWN BUG, verified manually against `dev`: the form has no
    // uniqueness check on Name. Creating a second Partner with the exact
    // same name as one that already exists succeeds silently, identically
    // to any other valid submission — two indistinguishable Partners is a
    // real support/ops problem the moment someone hits it. This test
    // asserts the correct behavior (reject the duplicate) and fails on
    // purpose until that's fixed — the point of the test is exactly this
    // validation, so a duplicate silently succeeding is a failure, not
    // something to paper over.
    const partner = newPartnerFixture();

    await partnersPage.openNewPartnerDialog();
    await partnersPage.fillNewPartnerForm(partner);
    const firstAccepted = await saveWasAccepted(page, () => partnersPage.save());
    expect(firstAccepted).toBe(true); // sanity check: the original create must succeed

    await partnersPage.openNewPartnerDialog();
    await partnersPage.fillNewPartnerForm(partner); // identical name
    const duplicateAccepted = await saveWasAccepted(page, () => partnersPage.save());

    expect(duplicateAccepted).toBe(false);
  },
);

test(
  'CreatePartnerWithVeryShortPhoneNumberRejected',
  { tag: ['@regression', '@partners'] },
  async ({ partnersPage, page }) => {
    // KNOWN BUG, verified manually against `dev`: the phone field accepts
    // digits only (see CreatePartnerWithNonNumericPhoneInputRejected
    // above) but enforces no minimum length — a 3-digit value saves as a
    // real Partner, and every real-world use of that field (calling, SMS,
    // WhatsApp) breaks the moment it holds 3 digits. Same reasoning as the
    // duplicate-name test above: this asserts the correct behavior (reject
    // a phone number this short) and fails on purpose until that's fixed.
    // A fresh never-used number is generated (not a literal "123") so
    // this can't coincidentally collide with another run's data.
    const partner = newPartnerFixture();
    partner.phone = `1${Date.now().toString().slice(-2)}`;

    await partnersPage.openNewPartnerDialog();
    await partnersPage.fillNewPartnerForm(partner);
    const accepted = await saveWasAccepted(page, () => partnersPage.save());

    expect(accepted).toBe(false);
  },
);
