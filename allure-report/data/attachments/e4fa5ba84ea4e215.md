# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partners\CreatePartnerValidation.spec.ts >> CreatePartnerWithDuplicateNameRejected
- Location: tests\partners\CreatePartnerValidation.spec.ts:92:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- main [ref=e3]:
  - complementary:
    - generic [ref=e4]:
      - img "navigation-logo" [ref=e6]
      - generic [ref=e7]:
        - img "menu-item-image" [ref=e9] [cursor=pointer]
        - img "menu-item-image" [ref=e11] [cursor=pointer]
        - img "menu-item-image" [ref=e13] [cursor=pointer]
        - img "menu-item-image" [ref=e15] [cursor=pointer]
        - img "menu-item-image" [ref=e18] [cursor=pointer]
        - img "menu-item-image" [ref=e20] [cursor=pointer]
        - img "menu-item-image" [ref=e22] [cursor=pointer]
        - img "menu-item-image" [ref=e24] [cursor=pointer]
        - img "menu-item-image" [ref=e26] [cursor=pointer]
        - img "menu-item-image" [ref=e28] [cursor=pointer]
      - img "menu-item-image" [ref=e31] [cursor=pointer]
  - generic [ref=e32]:
    - generic [ref=e33]:
      - generic [ref=e34]: Partners
      - generic [ref=e36]:
        - img "notification-btn" [ref=e40] [cursor=pointer]
        - generic [ref=e41] [cursor=pointer]:
          - img "avatar" [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]: test_qa_ex@example.com
            - generic [ref=e45]: region admin
          - img "expand-collapse-btn" [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]:
          - img "search-icon" [ref=e50] [cursor=pointer]
          - searchbox "Search by partners..." [ref=e51]
        - button "New partner" [ref=e54] [cursor=pointer]
      - generic [ref=e58]:
        - generic [ref=e59]: Show 1-10 from 1365 results
        - generic [ref=e65]:
          - table [ref=e67]:
            - rowgroup [ref=e77]:
              - row [ref=e78]:
                - columnheader "NAME" [ref=e79]
                - columnheader "ADDRESS" [ref=e82]
                - columnheader "TELEPHONE" [ref=e85]
                - columnheader "CONTACT PERSON" [ref=e88]
                - columnheader "SERVICES" [ref=e91]
                - columnheader "SUBSCRIPTION PLAN" [ref=e94]
                - columnheader [ref=e97]
                - columnheader [ref=e98]
          - table [ref=e100]:
            - rowgroup [ref=e109]:
              - row [ref=e110] [cursor=pointer]:
                - cell "car QA E2E Partner 1787414151943-k1iiu" [ref=e111]:
                  - generic [ref=e113]:
                    - img "car" [ref=e115]
                    - generic [ref=e116]:
                      - generic [ref=e117]: QA E2E Partner 1787414151943-k1iiu
                      - radiogroup [ref=e118]:
                        - listitem [ref=e119]:
                          - radio [checked] [ref=e120]:
                            - img "star" [ref=e122]
                            - img "star" [ref=e126]
                        - listitem [ref=e129]:
                          - radio [checked] [ref=e130]:
                            - img "star" [ref=e132]
                            - img "star" [ref=e136]
                        - listitem [ref=e139]:
                          - radio [checked] [ref=e140]:
                            - img "star" [ref=e142]
                            - img "star" [ref=e146]
                        - listitem [ref=e149]:
                          - radio [checked] [ref=e150]:
                            - img "star" [ref=e152]
                            - img "star" [ref=e156]
                        - listitem [ref=e159]:
                          - radio [checked] [ref=e160]:
                            - img "star" [ref=e162]
                            - img "star" [ref=e166]
                - cell "Sofia, Bulgaria" [ref=e169]
                - cell "+359889559604" [ref=e171]
                - cell "QA Contact QA E2E Partner 1787414151943-k1iiu" [ref=e173]
                - cell "Смяна на масло" [ref=e175]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e179]
                - cell [ref=e183]:
                  - generic [ref=e185]:
                    - menu:
                      - menuitem [ref=e186]:
                        - img "dots-icon" [ref=e188]
              - row [ref=e189] [cursor=pointer]:
                - cell "car QA E2E Partner 1787414151943-k1iiu" [ref=e190]:
                  - generic [ref=e192]:
                    - img "car" [ref=e194]
                    - generic [ref=e195]:
                      - generic [ref=e196]: QA E2E Partner 1787414151943-k1iiu
                      - radiogroup [ref=e197]:
                        - listitem [ref=e198]:
                          - radio [checked] [ref=e199]:
                            - img "star" [ref=e201]
                            - img "star" [ref=e205]
                        - listitem [ref=e208]:
                          - radio [checked] [ref=e209]:
                            - img "star" [ref=e211]
                            - img "star" [ref=e215]
                        - listitem [ref=e218]:
                          - radio [checked] [ref=e219]:
                            - img "star" [ref=e221]
                            - img "star" [ref=e225]
                        - listitem [ref=e228]:
                          - radio [checked] [ref=e229]:
                            - img "star" [ref=e231]
                            - img "star" [ref=e235]
                        - listitem [ref=e238]:
                          - radio [checked] [ref=e239]:
                            - img "star" [ref=e241]
                            - img "star" [ref=e245]
                - cell "Sofia, Bulgaria" [ref=e248]
                - cell "+359889559604" [ref=e250]
                - cell "QA Contact QA E2E Partner 1787414151943-k1iiu" [ref=e252]
                - cell "Смяна на масло" [ref=e254]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e258]
                - cell [ref=e262]:
                  - generic [ref=e264]:
                    - menu:
                      - menuitem [ref=e265]:
                        - img "dots-icon" [ref=e267]
              - row [ref=e268] [cursor=pointer]:
                - cell "car QA E2E Partner 1787414132617-qb8x2" [ref=e269]:
                  - generic [ref=e271]:
                    - img "car" [ref=e273]
                    - generic [ref=e274]:
                      - generic [ref=e275]: QA E2E Partner 1787414132617-qb8x2
                      - radiogroup [ref=e276]:
                        - listitem [ref=e277]:
                          - radio [checked] [ref=e278]:
                            - img "star" [ref=e280]
                            - img "star" [ref=e284]
                        - listitem [ref=e287]:
                          - radio [checked] [ref=e288]:
                            - img "star" [ref=e290]
                            - img "star" [ref=e294]
                        - listitem [ref=e297]:
                          - radio [checked] [ref=e298]:
                            - img "star" [ref=e300]
                            - img "star" [ref=e304]
                        - listitem [ref=e307]:
                          - radio [checked] [ref=e308]:
                            - img "star" [ref=e310]
                            - img "star" [ref=e314]
                        - listitem [ref=e317]:
                          - radio [checked] [ref=e318]:
                            - img "star" [ref=e320]
                            - img "star" [ref=e324]
                - cell "Sofia, Bulgaria" [ref=e327]
                - cell "+359889012542" [ref=e329]
                - cell "QA Contact QA E2E Partner 1787414132617-qb8x2" [ref=e331]
                - cell "Смяна на масло" [ref=e333]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e337]
                - cell [ref=e341]:
                  - generic [ref=e343]:
                    - menu:
                      - menuitem [ref=e344]:
                        - img "dots-icon" [ref=e346]
              - row [ref=e347] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413158669-udtzs" [ref=e348]:
                  - generic [ref=e350]:
                    - img "car" [ref=e352]
                    - generic [ref=e353]:
                      - generic [ref=e354]: QA E2E Partner 1787413158669-udtzs
                      - radiogroup [ref=e355]:
                        - listitem [ref=e356]:
                          - radio [checked] [ref=e357]:
                            - img "star" [ref=e359]
                            - img "star" [ref=e363]
                        - listitem [ref=e366]:
                          - radio [checked] [ref=e367]:
                            - img "star" [ref=e369]
                            - img "star" [ref=e373]
                        - listitem [ref=e376]:
                          - radio [checked] [ref=e377]:
                            - img "star" [ref=e379]
                            - img "star" [ref=e383]
                        - listitem [ref=e386]:
                          - radio [checked] [ref=e387]:
                            - img "star" [ref=e389]
                            - img "star" [ref=e393]
                        - listitem [ref=e396]:
                          - radio [checked] [ref=e397]:
                            - img "star" [ref=e399]
                            - img "star" [ref=e403]
                - cell "Sofia, Bulgaria" [ref=e406]
                - cell "+359886930212" [ref=e408]
                - cell "QA Contact QA E2E Partner 1787413158669-udtzs" [ref=e410]
                - cell "Смяна на масло" [ref=e412]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e416]
                - cell [ref=e420]:
                  - generic [ref=e422]:
                    - menu:
                      - menuitem [ref=e423]:
                        - img "dots-icon" [ref=e425]
              - row [ref=e426] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413163457-jl9jp" [ref=e427]:
                  - generic [ref=e429]:
                    - img "car" [ref=e431]
                    - generic [ref=e432]:
                      - generic [ref=e433]: QA E2E Partner 1787413163457-jl9jp
                      - radiogroup [ref=e434]:
                        - listitem [ref=e435]:
                          - radio [checked] [ref=e436]:
                            - img "star" [ref=e438]
                            - img "star" [ref=e442]
                        - listitem [ref=e445]:
                          - radio [checked] [ref=e446]:
                            - img "star" [ref=e448]
                            - img "star" [ref=e452]
                        - listitem [ref=e455]:
                          - radio [checked] [ref=e456]:
                            - img "star" [ref=e458]
                            - img "star" [ref=e462]
                        - listitem [ref=e465]:
                          - radio [checked] [ref=e466]:
                            - img "star" [ref=e468]
                            - img "star" [ref=e472]
                        - listitem [ref=e475]:
                          - radio [checked] [ref=e476]:
                            - img "star" [ref=e478]
                            - img "star" [ref=e482]
                - cell "Sofia, Bulgaria" [ref=e485]
                - cell "+359157" [ref=e487]
                - cell "QA Contact QA E2E Partner 1787413163457-jl9jp" [ref=e489]
                - cell "Смяна на масло" [ref=e491]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e495]
                - cell [ref=e499]:
                  - generic [ref=e501]:
                    - menu:
                      - menuitem [ref=e502]:
                        - img "dots-icon" [ref=e504]
              - row [ref=e505] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413158669-udtzs" [ref=e506]:
                  - generic [ref=e508]:
                    - img "car" [ref=e510]
                    - generic [ref=e511]:
                      - generic [ref=e512]: QA E2E Partner 1787413158669-udtzs
                      - radiogroup [ref=e513]:
                        - listitem [ref=e514]:
                          - radio [checked] [ref=e515]:
                            - img "star" [ref=e517]
                            - img "star" [ref=e521]
                        - listitem [ref=e524]:
                          - radio [checked] [ref=e525]:
                            - img "star" [ref=e527]
                            - img "star" [ref=e531]
                        - listitem [ref=e534]:
                          - radio [checked] [ref=e535]:
                            - img "star" [ref=e537]
                            - img "star" [ref=e541]
                        - listitem [ref=e544]:
                          - radio [checked] [ref=e545]:
                            - img "star" [ref=e547]
                            - img "star" [ref=e551]
                        - listitem [ref=e554]:
                          - radio [checked] [ref=e555]:
                            - img "star" [ref=e557]
                            - img "star" [ref=e561]
                - cell "Sofia, Bulgaria" [ref=e564]
                - cell "+359886930212" [ref=e566]
                - cell "QA Contact QA E2E Partner 1787413158669-udtzs" [ref=e568]
                - cell "Смяна на масло" [ref=e570]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e574]
                - cell [ref=e578]:
                  - generic [ref=e580]:
                    - menu:
                      - menuitem [ref=e581]:
                        - img "dots-icon" [ref=e583]
              - row [ref=e584] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413130946-rcth0 EDITED" [ref=e585]:
                  - generic [ref=e587]:
                    - img "car" [ref=e589]
                    - generic [ref=e590]:
                      - generic [ref=e591]: QA E2E Partner 1787413130946-rcth0 EDITED
                      - radiogroup [ref=e592]:
                        - listitem [ref=e593]:
                          - radio [ref=e594]:
                            - img "star" [ref=e596]
                            - img "star" [ref=e600]
                        - listitem [ref=e603]:
                          - radio [ref=e604]:
                            - img "star" [ref=e606]
                            - img "star" [ref=e610]
                        - listitem [ref=e613]:
                          - radio [ref=e614]:
                            - img "star" [ref=e616]
                            - img "star" [ref=e620]
                        - listitem [ref=e623]:
                          - radio [ref=e624]:
                            - img "star" [ref=e626]
                            - img "star" [ref=e630]
                        - listitem [ref=e633]:
                          - radio [ref=e634]:
                            - img "star" [ref=e636]
                            - img "star" [ref=e640]
                - cell "Plovdiv, Bulgaria" [ref=e643]
                - cell "+359893591993" [ref=e645]
                - cell "QA Contact EDITED 1787413130946-3ssvn" [ref=e647]
                - cell "Смяна на гуми" [ref=e649]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e653]
                - cell [ref=e657]:
                  - generic [ref=e659]:
                    - menu:
                      - menuitem [ref=e660]:
                        - img "dots-icon" [ref=e662]
              - row [ref=e663] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412529862-sbuiz" [ref=e664]:
                  - generic [ref=e666]:
                    - img "car" [ref=e668]
                    - generic [ref=e669]:
                      - generic [ref=e670]: QA E2E Partner 1787412529862-sbuiz
                      - radiogroup [ref=e671]:
                        - listitem [ref=e672]:
                          - radio [checked] [ref=e673]:
                            - img "star" [ref=e675]
                            - img "star" [ref=e679]
                        - listitem [ref=e682]:
                          - radio [checked] [ref=e683]:
                            - img "star" [ref=e685]
                            - img "star" [ref=e689]
                        - listitem [ref=e692]:
                          - radio [checked] [ref=e693]:
                            - img "star" [ref=e695]
                            - img "star" [ref=e699]
                        - listitem [ref=e702]:
                          - radio [checked] [ref=e703]:
                            - img "star" [ref=e705]
                            - img "star" [ref=e709]
                        - listitem [ref=e712]:
                          - radio [checked] [ref=e713]:
                            - img "star" [ref=e715]
                            - img "star" [ref=e719]
                - cell "Sofia, Bulgaria" [ref=e722]
                - cell "+359162" [ref=e724]
                - cell "QA Contact QA E2E Partner 1787412529862-sbuiz" [ref=e726]
                - cell "Смяна на масло" [ref=e728]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e732]
                - cell [ref=e736]:
                  - generic [ref=e738]:
                    - menu:
                      - menuitem [ref=e739]:
                        - img "dots-icon" [ref=e741]
              - row [ref=e742] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412515374-zjfee" [ref=e743]:
                  - generic [ref=e745]:
                    - img "car" [ref=e747]
                    - generic [ref=e748]:
                      - generic [ref=e749]: QA E2E Partner 1787412515374-zjfee
                      - radiogroup [ref=e750]:
                        - listitem [ref=e751]:
                          - radio [checked] [ref=e752]:
                            - img "star" [ref=e754]
                            - img "star" [ref=e758]
                        - listitem [ref=e761]:
                          - radio [checked] [ref=e762]:
                            - img "star" [ref=e764]
                            - img "star" [ref=e768]
                        - listitem [ref=e771]:
                          - radio [checked] [ref=e772]:
                            - img "star" [ref=e774]
                            - img "star" [ref=e778]
                        - listitem [ref=e781]:
                          - radio [checked] [ref=e782]:
                            - img "star" [ref=e784]
                            - img "star" [ref=e788]
                        - listitem [ref=e791]:
                          - radio [checked] [ref=e792]:
                            - img "star" [ref=e794]
                            - img "star" [ref=e798]
                - cell "Sofia, Bulgaria" [ref=e801]
                - cell "+359884358054" [ref=e803]
                - cell "QA Contact QA E2E Partner 1787412515374-zjfee" [ref=e805]
                - cell "Смяна на масло" [ref=e807]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e811]
                - cell [ref=e815]:
                  - generic [ref=e817]:
                    - menu:
                      - menuitem [ref=e818]:
                        - img "dots-icon" [ref=e820]
              - row [ref=e821] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412515374-zjfee" [ref=e822]:
                  - generic [ref=e824]:
                    - img "car" [ref=e826]
                    - generic [ref=e827]:
                      - generic [ref=e828]: QA E2E Partner 1787412515374-zjfee
                      - radiogroup [ref=e829]:
                        - listitem [ref=e830]:
                          - radio [checked] [ref=e831]:
                            - img "star" [ref=e833]
                            - img "star" [ref=e837]
                        - listitem [ref=e840]:
                          - radio [checked] [ref=e841]:
                            - img "star" [ref=e843]
                            - img "star" [ref=e847]
                        - listitem [ref=e850]:
                          - radio [checked] [ref=e851]:
                            - img "star" [ref=e853]
                            - img "star" [ref=e857]
                        - listitem [ref=e860]:
                          - radio [checked] [ref=e861]:
                            - img "star" [ref=e863]
                            - img "star" [ref=e867]
                        - listitem [ref=e870]:
                          - radio [checked] [ref=e871]:
                            - img "star" [ref=e873]
                            - img "star" [ref=e877]
                - cell "Sofia, Bulgaria" [ref=e880]
                - cell "+359884358054" [ref=e882]
                - cell "QA Contact QA E2E Partner 1787412515374-zjfee" [ref=e884]
                - cell "Смяна на масло" [ref=e886]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e890]
                - cell [ref=e894]:
                  - generic [ref=e896]:
                    - menu:
                      - menuitem [ref=e897]:
                        - img "dots-icon" [ref=e899]
        - list [ref=e901]:
          - listitem "Previous Page" [ref=e902]
          - listitem "1" [ref=e903] [cursor=pointer]
          - listitem "2" [ref=e905] [cursor=pointer]
          - listitem "3" [ref=e907] [cursor=pointer]
          - listitem "4" [ref=e909] [cursor=pointer]
          - listitem "5" [ref=e911] [cursor=pointer]
          - listitem "Next 5 Pages" [ref=e913] [cursor=pointer]:
            - generic [ref=e915]:
              - img "double-right" [ref=e916]
              - generic [ref=e919]: •••
          - listitem "137" [ref=e920] [cursor=pointer]
          - listitem "Next Page" [ref=e922] [cursor=pointer]
          - listitem [ref=e925]:
            - generic "Page size" [ref=e926] [cursor=pointer]:
              - generic [ref=e927]:
                - combobox "Page size" [ref=e929]
                - generic "10 / items per page" [ref=e930]
```

# Test source

```ts
  16  |  * currently have, so they fail on purpose until the underlying bug is
  17  |  * fixed — this suite intentionally reports red for those two rather than
  18  |  * hiding the gap behind a passing/skipped test. See each test's comment
  19  |  * for the specifics.
  20  |  */
  21  | 
  22  | test(
  23  |   'CreatePartnerWithMissingRequiredFieldsRejected',
  24  |   { tag: ['@regression', '@partners'] },
  25  |   async ({ partnersPage }) => {
  26  |     await partnersPage.openNewPartnerDialog();
  27  |     await partnersPage.save();
  28  | 
  29  |     // All nine required fields error together in one submit — the dialog
  30  |     // doesn't stop at the first one.
  31  |     await partnersPage.expectRequiredFieldErrors();
  32  |     await expect(partnersPage.dialog).toBeVisible();
  33  |   },
  34  | );
  35  | 
  36  | test(
  37  |   'CreatePartnerWithWhitespaceOnlyNameRejected',
  38  |   { tag: ['@regression', '@partners'] },
  39  |   async ({ partnersPage }) => {
  40  |     // A name of only spaces is trimmed and treated as empty — the same
  41  |     // "Please write a name" error as leaving the field untouched, not a
  42  |     // separate message and not accepted as a "real" name.
  43  |     const partner = newPartnerFixture();
  44  |     partner.name = '   ';
  45  | 
  46  |     await partnersPage.openNewPartnerDialog();
  47  |     await partnersPage.fillNewPartnerForm(partner);
  48  |     await partnersPage.save();
  49  | 
  50  |     await expect(partnersPage.dialog.getByText('Please write a name', { exact: true })).toBeVisible();
  51  |     await expect(partnersPage.dialog).toBeVisible();
  52  |   },
  53  | );
  54  | 
  55  | test(
  56  |   'CreatePartnerWithNonNumericPhoneInputRejected',
  57  |   { tag: ['@regression', '@partners'] },
  58  |   async ({ partnersPage }) => {
  59  |     // The phone widget filters non-digit characters as they're typed —
  60  |     // letters never make it into the field's value at all. Worth locking
  61  |     // in as its own regression check: this input-masking behavior is easy
  62  |     // to silently break (e.g. swapping the phone widget) without any of
  63  |     // the other Partner tests noticing, since they only ever type valid
  64  |     // digits.
  65  |     await partnersPage.openNewPartnerDialog();
  66  |     const phoneField = partnersPage.dialog.locator('#phone-field');
  67  |     await phoneField.fill('abcdef');
  68  |     await expect(phoneField).toHaveValue('');
  69  |   },
  70  | );
  71  | 
  72  | /**
  73  |  * Waits for the response to the "New partner" dialog's own Save request
  74  |  * while `action` triggers it, and returns whether the backend accepted it.
  75  |  * The two known-bug cases below need to tell "rejected" apart from "still
  76  |  * saving" precisely, and the dialog's own visibility can't do that
  77  |  * reliably — right after the click it reads as "open" in both cases,
  78  |  * which raced against a `toBeVisible()` check and made both cases look
  79  |  * indistinguishable during manual verification. Keying off the actual
  80  |  * backend response is the one deviation from this suite's usual UI-only
  81  |  * verification (see README) — deliberate here, since it's the only
  82  |  * deterministic signal available for "was this accepted or not".
  83  |  */
  84  | async function saveWasAccepted(page: Page, action: () => Promise<void>): Promise<boolean> {
  85  |   const [response] = await Promise.all([
  86  |     page.waitForResponse((res) => res.request().method() === 'POST' && res.url().includes('/partner')),
  87  |     action(),
  88  |   ]);
  89  |   return response.ok();
  90  | }
  91  | 
  92  | test(
  93  |   'CreatePartnerWithDuplicateNameRejected',
  94  |   { tag: ['@regression', '@partners'] },
  95  |   async ({ partnersPage, page }) => {
  96  |     // KNOWN BUG, verified manually against `dev`: the form has no
  97  |     // uniqueness check on Name. Creating a second Partner with the exact
  98  |     // same name as one that already exists succeeds silently, identically
  99  |     // to any other valid submission — two indistinguishable Partners is a
  100 |     // real support/ops problem the moment someone hits it. This test
  101 |     // asserts the correct behavior (reject the duplicate) and fails on
  102 |     // purpose until that's fixed — the point of the test is exactly this
  103 |     // validation, so a duplicate silently succeeding is a failure, not
  104 |     // something to paper over.
  105 |     const partner = newPartnerFixture();
  106 | 
  107 |     await partnersPage.openNewPartnerDialog();
  108 |     await partnersPage.fillNewPartnerForm(partner);
  109 |     const firstAccepted = await saveWasAccepted(page, () => partnersPage.save());
  110 |     expect(firstAccepted).toBe(true); // sanity check: the original create must succeed
  111 | 
  112 |     await partnersPage.openNewPartnerDialog();
  113 |     await partnersPage.fillNewPartnerForm(partner); // identical name
  114 |     const duplicateAccepted = await saveWasAccepted(page, () => partnersPage.save());
  115 | 
> 116 |     expect(duplicateAccepted).toBe(false);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  117 |   },
  118 | );
  119 | 
  120 | test(
  121 |   'CreatePartnerWithVeryShortPhoneNumberRejected',
  122 |   { tag: ['@regression', '@partners'] },
  123 |   async ({ partnersPage, page }) => {
  124 |     // KNOWN BUG, verified manually against `dev`: the phone field accepts
  125 |     // digits only (see CreatePartnerWithNonNumericPhoneInputRejected
  126 |     // above) but enforces no minimum length — a 3-digit value saves as a
  127 |     // real Partner, and every real-world use of that field (calling, SMS,
  128 |     // WhatsApp) breaks the moment it holds 3 digits. Same reasoning as the
  129 |     // duplicate-name test above: this asserts the correct behavior (reject
  130 |     // a phone number this short) and fails on purpose until that's fixed.
  131 |     // A fresh never-used number is generated (not a literal "123") so
  132 |     // this can't coincidentally collide with another run's data.
  133 |     const partner = newPartnerFixture();
  134 |     partner.phone = `1${Date.now().toString().slice(-2)}`;
  135 | 
  136 |     await partnersPage.openNewPartnerDialog();
  137 |     await partnersPage.fillNewPartnerForm(partner);
  138 |     const accepted = await saveWasAccepted(page, () => partnersPage.save());
  139 | 
  140 |     expect(accepted).toBe(false);
  141 |   },
  142 | );
  143 | 
```