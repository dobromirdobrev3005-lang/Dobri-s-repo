# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partners\CreatePartnerValidation.spec.ts >> CreatePartnerWithVeryShortPhoneNumberRejected
- Location: tests\partners\CreatePartnerValidation.spec.ts:120:5

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
                - cell "QA E2E Partner 1787414157936-m3433" [ref=e111]:
                  - generic [ref=e115]:
                    - generic [ref=e116]: QA E2E Partner 1787414157936-m3433
                    - radiogroup [ref=e117]:
                      - listitem [ref=e118]:
                        - radio [checked] [ref=e119]:
                          - img "star" [ref=e121]
                          - img "star" [ref=e125]
                      - listitem [ref=e128]:
                        - radio [checked] [ref=e129]:
                          - img "star" [ref=e131]
                          - img "star" [ref=e135]
                      - listitem [ref=e138]:
                        - radio [checked] [ref=e139]:
                          - img "star" [ref=e141]
                          - img "star" [ref=e145]
                      - listitem [ref=e148]:
                        - radio [checked] [ref=e149]:
                          - img "star" [ref=e151]
                          - img "star" [ref=e155]
                      - listitem [ref=e158]:
                        - radio [checked] [ref=e159]:
                          - img "star" [ref=e161]
                          - img "star" [ref=e165]
                - cell "Sofia, Bulgaria" [ref=e168]
                - cell "+359136" [ref=e170]
                - cell "QA Contact QA E2E Partner 1787414157936-m3433" [ref=e172]
                - cell "Смяна на масло" [ref=e174]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e178]
                - cell [ref=e182]:
                  - generic [ref=e184]:
                    - menu:
                      - menuitem [ref=e185]:
                        - img "dots-icon" [ref=e187]
              - row [ref=e188] [cursor=pointer]:
                - cell "car QA E2E Partner 1787414132617-qb8x2" [ref=e189]:
                  - generic [ref=e191]:
                    - img "car" [ref=e193]
                    - generic [ref=e194]:
                      - generic [ref=e195]: QA E2E Partner 1787414132617-qb8x2
                      - radiogroup [ref=e196]:
                        - listitem [ref=e197]:
                          - radio [checked] [ref=e198]:
                            - img "star" [ref=e200]
                            - img "star" [ref=e204]
                        - listitem [ref=e207]:
                          - radio [checked] [ref=e208]:
                            - img "star" [ref=e210]
                            - img "star" [ref=e214]
                        - listitem [ref=e217]:
                          - radio [checked] [ref=e218]:
                            - img "star" [ref=e220]
                            - img "star" [ref=e224]
                        - listitem [ref=e227]:
                          - radio [checked] [ref=e228]:
                            - img "star" [ref=e230]
                            - img "star" [ref=e234]
                        - listitem [ref=e237]:
                          - radio [checked] [ref=e238]:
                            - img "star" [ref=e240]
                            - img "star" [ref=e244]
                - cell "Sofia, Bulgaria" [ref=e247]
                - cell "+359889012542" [ref=e249]
                - cell "QA Contact QA E2E Partner 1787414132617-qb8x2" [ref=e251]
                - cell "Смяна на масло" [ref=e253]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e257]
                - cell [ref=e261]:
                  - generic [ref=e263]:
                    - menu:
                      - menuitem [ref=e264]:
                        - img "dots-icon" [ref=e266]
              - row [ref=e267] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413158669-udtzs" [ref=e268]:
                  - generic [ref=e270]:
                    - img "car" [ref=e272]
                    - generic [ref=e273]:
                      - generic [ref=e274]: QA E2E Partner 1787413158669-udtzs
                      - radiogroup [ref=e275]:
                        - listitem [ref=e276]:
                          - radio [checked] [ref=e277]:
                            - img "star" [ref=e279]
                            - img "star" [ref=e283]
                        - listitem [ref=e286]:
                          - radio [checked] [ref=e287]:
                            - img "star" [ref=e289]
                            - img "star" [ref=e293]
                        - listitem [ref=e296]:
                          - radio [checked] [ref=e297]:
                            - img "star" [ref=e299]
                            - img "star" [ref=e303]
                        - listitem [ref=e306]:
                          - radio [checked] [ref=e307]:
                            - img "star" [ref=e309]
                            - img "star" [ref=e313]
                        - listitem [ref=e316]:
                          - radio [checked] [ref=e317]:
                            - img "star" [ref=e319]
                            - img "star" [ref=e323]
                - cell "Sofia, Bulgaria" [ref=e326]
                - cell "+359886930212" [ref=e328]
                - cell "QA Contact QA E2E Partner 1787413158669-udtzs" [ref=e330]
                - cell "Смяна на масло" [ref=e332]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e336]
                - cell [ref=e340]:
                  - generic [ref=e342]:
                    - menu:
                      - menuitem [ref=e343]:
                        - img "dots-icon" [ref=e345]
              - row [ref=e346] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413163457-jl9jp" [ref=e347]:
                  - generic [ref=e349]:
                    - img "car" [ref=e351]
                    - generic [ref=e352]:
                      - generic [ref=e353]: QA E2E Partner 1787413163457-jl9jp
                      - radiogroup [ref=e354]:
                        - listitem [ref=e355]:
                          - radio [checked] [ref=e356]:
                            - img "star" [ref=e358]
                            - img "star" [ref=e362]
                        - listitem [ref=e365]:
                          - radio [checked] [ref=e366]:
                            - img "star" [ref=e368]
                            - img "star" [ref=e372]
                        - listitem [ref=e375]:
                          - radio [checked] [ref=e376]:
                            - img "star" [ref=e378]
                            - img "star" [ref=e382]
                        - listitem [ref=e385]:
                          - radio [checked] [ref=e386]:
                            - img "star" [ref=e388]
                            - img "star" [ref=e392]
                        - listitem [ref=e395]:
                          - radio [checked] [ref=e396]:
                            - img "star" [ref=e398]
                            - img "star" [ref=e402]
                - cell "Sofia, Bulgaria" [ref=e405]
                - cell "+359157" [ref=e407]
                - cell "QA Contact QA E2E Partner 1787413163457-jl9jp" [ref=e409]
                - cell "Смяна на масло" [ref=e411]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e415]
                - cell [ref=e419]:
                  - generic [ref=e421]:
                    - menu:
                      - menuitem [ref=e422]:
                        - img "dots-icon" [ref=e424]
              - row [ref=e425] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413158669-udtzs" [ref=e426]:
                  - generic [ref=e428]:
                    - img "car" [ref=e430]
                    - generic [ref=e431]:
                      - generic [ref=e432]: QA E2E Partner 1787413158669-udtzs
                      - radiogroup [ref=e433]:
                        - listitem [ref=e434]:
                          - radio [checked] [ref=e435]:
                            - img "star" [ref=e437]
                            - img "star" [ref=e441]
                        - listitem [ref=e444]:
                          - radio [checked] [ref=e445]:
                            - img "star" [ref=e447]
                            - img "star" [ref=e451]
                        - listitem [ref=e454]:
                          - radio [checked] [ref=e455]:
                            - img "star" [ref=e457]
                            - img "star" [ref=e461]
                        - listitem [ref=e464]:
                          - radio [checked] [ref=e465]:
                            - img "star" [ref=e467]
                            - img "star" [ref=e471]
                        - listitem [ref=e474]:
                          - radio [checked] [ref=e475]:
                            - img "star" [ref=e477]
                            - img "star" [ref=e481]
                - cell "Sofia, Bulgaria" [ref=e484]
                - cell "+359886930212" [ref=e486]
                - cell "QA Contact QA E2E Partner 1787413158669-udtzs" [ref=e488]
                - cell "Смяна на масло" [ref=e490]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e494]
                - cell [ref=e498]:
                  - generic [ref=e500]:
                    - menu:
                      - menuitem [ref=e501]:
                        - img "dots-icon" [ref=e503]
              - row [ref=e504] [cursor=pointer]:
                - cell "car QA E2E Partner 1787413130946-rcth0 EDITED" [ref=e505]:
                  - generic [ref=e507]:
                    - img "car" [ref=e509]
                    - generic [ref=e510]:
                      - generic [ref=e511]: QA E2E Partner 1787413130946-rcth0 EDITED
                      - radiogroup [ref=e512]:
                        - listitem [ref=e513]:
                          - radio [ref=e514]:
                            - img "star" [ref=e516]
                            - img "star" [ref=e520]
                        - listitem [ref=e523]:
                          - radio [ref=e524]:
                            - img "star" [ref=e526]
                            - img "star" [ref=e530]
                        - listitem [ref=e533]:
                          - radio [ref=e534]:
                            - img "star" [ref=e536]
                            - img "star" [ref=e540]
                        - listitem [ref=e543]:
                          - radio [ref=e544]:
                            - img "star" [ref=e546]
                            - img "star" [ref=e550]
                        - listitem [ref=e553]:
                          - radio [ref=e554]:
                            - img "star" [ref=e556]
                            - img "star" [ref=e560]
                - cell "Plovdiv, Bulgaria" [ref=e563]
                - cell "+359893591993" [ref=e565]
                - cell "QA Contact EDITED 1787413130946-3ssvn" [ref=e567]
                - cell "Смяна на гуми" [ref=e569]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e573]
                - cell [ref=e577]:
                  - generic [ref=e579]:
                    - menu:
                      - menuitem [ref=e580]:
                        - img "dots-icon" [ref=e582]
              - row [ref=e583] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412529862-sbuiz" [ref=e584]:
                  - generic [ref=e586]:
                    - img "car" [ref=e588]
                    - generic [ref=e589]:
                      - generic [ref=e590]: QA E2E Partner 1787412529862-sbuiz
                      - radiogroup [ref=e591]:
                        - listitem [ref=e592]:
                          - radio [checked] [ref=e593]:
                            - img "star" [ref=e595]
                            - img "star" [ref=e599]
                        - listitem [ref=e602]:
                          - radio [checked] [ref=e603]:
                            - img "star" [ref=e605]
                            - img "star" [ref=e609]
                        - listitem [ref=e612]:
                          - radio [checked] [ref=e613]:
                            - img "star" [ref=e615]
                            - img "star" [ref=e619]
                        - listitem [ref=e622]:
                          - radio [checked] [ref=e623]:
                            - img "star" [ref=e625]
                            - img "star" [ref=e629]
                        - listitem [ref=e632]:
                          - radio [checked] [ref=e633]:
                            - img "star" [ref=e635]
                            - img "star" [ref=e639]
                - cell "Sofia, Bulgaria" [ref=e642]
                - cell "+359162" [ref=e644]
                - cell "QA Contact QA E2E Partner 1787412529862-sbuiz" [ref=e646]
                - cell "Смяна на масло" [ref=e648]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e652]
                - cell [ref=e656]:
                  - generic [ref=e658]:
                    - menu:
                      - menuitem [ref=e659]:
                        - img "dots-icon" [ref=e661]
              - row [ref=e662] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412515374-zjfee" [ref=e663]:
                  - generic [ref=e665]:
                    - img "car" [ref=e667]
                    - generic [ref=e668]:
                      - generic [ref=e669]: QA E2E Partner 1787412515374-zjfee
                      - radiogroup [ref=e670]:
                        - listitem [ref=e671]:
                          - radio [checked] [ref=e672]:
                            - img "star" [ref=e674]
                            - img "star" [ref=e678]
                        - listitem [ref=e681]:
                          - radio [checked] [ref=e682]:
                            - img "star" [ref=e684]
                            - img "star" [ref=e688]
                        - listitem [ref=e691]:
                          - radio [checked] [ref=e692]:
                            - img "star" [ref=e694]
                            - img "star" [ref=e698]
                        - listitem [ref=e701]:
                          - radio [checked] [ref=e702]:
                            - img "star" [ref=e704]
                            - img "star" [ref=e708]
                        - listitem [ref=e711]:
                          - radio [checked] [ref=e712]:
                            - img "star" [ref=e714]
                            - img "star" [ref=e718]
                - cell "Sofia, Bulgaria" [ref=e721]
                - cell "+359884358054" [ref=e723]
                - cell "QA Contact QA E2E Partner 1787412515374-zjfee" [ref=e725]
                - cell "Смяна на масло" [ref=e727]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e731]
                - cell [ref=e735]:
                  - generic [ref=e737]:
                    - menu:
                      - menuitem [ref=e738]:
                        - img "dots-icon" [ref=e740]
              - row [ref=e741] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412515374-zjfee" [ref=e742]:
                  - generic [ref=e744]:
                    - img "car" [ref=e746]
                    - generic [ref=e747]:
                      - generic [ref=e748]: QA E2E Partner 1787412515374-zjfee
                      - radiogroup [ref=e749]:
                        - listitem [ref=e750]:
                          - radio [checked] [ref=e751]:
                            - img "star" [ref=e753]
                            - img "star" [ref=e757]
                        - listitem [ref=e760]:
                          - radio [checked] [ref=e761]:
                            - img "star" [ref=e763]
                            - img "star" [ref=e767]
                        - listitem [ref=e770]:
                          - radio [checked] [ref=e771]:
                            - img "star" [ref=e773]
                            - img "star" [ref=e777]
                        - listitem [ref=e780]:
                          - radio [checked] [ref=e781]:
                            - img "star" [ref=e783]
                            - img "star" [ref=e787]
                        - listitem [ref=e790]:
                          - radio [checked] [ref=e791]:
                            - img "star" [ref=e793]
                            - img "star" [ref=e797]
                - cell "Sofia, Bulgaria" [ref=e800]
                - cell "+359884358054" [ref=e802]
                - cell "QA Contact QA E2E Partner 1787412515374-zjfee" [ref=e804]
                - cell "Смяна на масло" [ref=e806]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e810]
                - cell [ref=e814]:
                  - generic [ref=e816]:
                    - menu:
                      - menuitem [ref=e817]:
                        - img "dots-icon" [ref=e819]
              - row [ref=e820] [cursor=pointer]:
                - cell "car QA E2E Partner 1787412480141-q6dj0 EDITED" [ref=e821]:
                  - generic [ref=e823]:
                    - img "car" [ref=e825]
                    - generic [ref=e826]:
                      - generic [ref=e827]: QA E2E Partner 1787412480141-q6dj0 EDITED
                      - radiogroup [ref=e828]:
                        - listitem [ref=e829]:
                          - radio [ref=e830]:
                            - img "star" [ref=e832]
                            - img "star" [ref=e836]
                        - listitem [ref=e839]:
                          - radio [ref=e840]:
                            - img "star" [ref=e842]
                            - img "star" [ref=e846]
                        - listitem [ref=e849]:
                          - radio [ref=e850]:
                            - img "star" [ref=e852]
                            - img "star" [ref=e856]
                        - listitem [ref=e859]:
                          - radio [ref=e860]:
                            - img "star" [ref=e862]
                            - img "star" [ref=e866]
                        - listitem [ref=e869]:
                          - radio [ref=e870]:
                            - img "star" [ref=e872]
                            - img "star" [ref=e876]
                - cell "Plovdiv, Bulgaria" [ref=e879]
                - cell "+359893082152" [ref=e881]
                - cell "QA Contact EDITED 1787412480141-9qqv5" [ref=e883]
                - cell "Смяна на гуми" [ref=e885]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e889]
                - cell [ref=e893]:
                  - generic [ref=e895]:
                    - menu:
                      - menuitem [ref=e896]:
                        - img "dots-icon" [ref=e898]
        - list [ref=e900]:
          - listitem "Previous Page" [ref=e901]
          - listitem "1" [ref=e902] [cursor=pointer]
          - listitem "2" [ref=e904] [cursor=pointer]
          - listitem "3" [ref=e906] [cursor=pointer]
          - listitem "4" [ref=e908] [cursor=pointer]
          - listitem "5" [ref=e910] [cursor=pointer]
          - listitem "Next 5 Pages" [ref=e912] [cursor=pointer]:
            - generic [ref=e914]:
              - img "double-right" [ref=e915]
              - generic [ref=e918]: •••
          - listitem "137" [ref=e919] [cursor=pointer]
          - listitem "Next Page" [ref=e921] [cursor=pointer]
          - listitem [ref=e924]:
            - generic "Page size" [ref=e925] [cursor=pointer]:
              - generic [ref=e926]:
                - combobox "Page size" [ref=e928]
                - generic "10 / items per page" [ref=e929]
```

# Test source

```ts
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
  116 |     expect(duplicateAccepted).toBe(false);
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
> 140 |     expect(accepted).toBe(false);
      |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  141 |   },
  142 | );
  143 | 
```