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
        - generic [ref=e8] [cursor=pointer]:
          - img "menu-item-image" [ref=e9]
          - generic [ref=e10]: Dashboard
        - generic [ref=e11] [cursor=pointer]:
          - img "menu-item-image" [ref=e12]
          - generic [ref=e13]: Requests
        - generic [ref=e14] [cursor=pointer]:
          - img "menu-item-image" [ref=e15]
          - generic [ref=e16]: Users
        - generic [ref=e17] [cursor=pointer]:
          - img "menu-item-image" [ref=e18]
          - generic [ref=e19]: Vehicles
        - generic [ref=e20] [cursor=pointer]:
          - img "menu-item-image" [ref=e22]
          - generic [ref=e23]: Partners
        - generic [ref=e24] [cursor=pointer]:
          - img "menu-item-image" [ref=e25]
          - generic [ref=e26]: Drivers
        - generic [ref=e27] [cursor=pointer]:
          - img "menu-item-image" [ref=e28]
          - generic [ref=e29]: Services
        - generic [ref=e30] [cursor=pointer]:
          - img "menu-item-image" [ref=e31]
          - generic [ref=e32]: Reminders
        - generic [ref=e33] [cursor=pointer]:
          - img "menu-item-image" [ref=e34]
          - generic [ref=e35]: Promotions
        - generic [ref=e36] [cursor=pointer]:
          - img "menu-item-image" [ref=e37]
          - generic [ref=e38]: Trainings
      - generic [ref=e40] [cursor=pointer]:
        - img "menu-item-image" [ref=e41]
        - generic [ref=e42]: Logout
  - generic [ref=e43]:
    - generic [ref=e44]:
      - generic [ref=e45]: Partners
      - generic [ref=e47]:
        - img "notification-btn" [ref=e51] [cursor=pointer]
        - generic [ref=e52] [cursor=pointer]:
          - img "avatar" [ref=e53]
          - generic [ref=e54]:
            - generic [ref=e55]: test_qa_ex@example.com
            - generic [ref=e56]: region admin
          - img "expand-collapse-btn" [ref=e57]
    - generic [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - img "search-icon" [ref=e61] [cursor=pointer]
          - searchbox "Search by partners..." [ref=e62]
        - button "New partner" [ref=e65] [cursor=pointer]
      - generic [ref=e69]:
        - generic [ref=e70]: Show 1-10 from 1416 results
        - generic [ref=e76]:
          - table [ref=e78]:
            - rowgroup [ref=e88]:
              - row [ref=e89]:
                - columnheader "NAME" [ref=e90]
                - columnheader "ADDRESS" [ref=e93]
                - columnheader "TELEPHONE" [ref=e96]
                - columnheader "CONTACT PERSON" [ref=e99]
                - columnheader "SERVICES" [ref=e102]
                - columnheader "SUBSCRIPTION PLAN" [ref=e105]
                - columnheader [ref=e108]
                - columnheader [ref=e109]
          - table [ref=e111]:
            - rowgroup [ref=e120]:
              - row [ref=e121] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418413683-txohm" [ref=e122]:
                  - generic [ref=e124]:
                    - img "car" [ref=e126]
                    - generic [ref=e127]:
                      - generic [ref=e128]: QA E2E Partner 1787418413683-txohm
                      - radiogroup [ref=e129]:
                        - listitem [ref=e130]:
                          - radio [checked] [ref=e131]:
                            - img "star" [ref=e133]
                            - img "star" [ref=e137]
                        - listitem [ref=e140]:
                          - radio [checked] [ref=e141]:
                            - img "star" [ref=e143]
                            - img "star" [ref=e147]
                        - listitem [ref=e150]:
                          - radio [checked] [ref=e151]:
                            - img "star" [ref=e153]
                            - img "star" [ref=e157]
                        - listitem [ref=e160]:
                          - radio [checked] [ref=e161]:
                            - img "star" [ref=e163]
                            - img "star" [ref=e167]
                        - listitem [ref=e170]:
                          - radio [checked] [ref=e171]:
                            - img "star" [ref=e173]
                            - img "star" [ref=e177]
                - cell "Sofia, Bulgaria" [ref=e180]
                - cell "+359183" [ref=e182]
                - cell "QA Contact QA E2E Partner 1787418413683-txohm" [ref=e184]
                - cell "Смяна на масло" [ref=e186]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e190]
                - cell [ref=e194]:
                  - generic [ref=e196]:
                    - menu:
                      - menuitem [ref=e197]:
                        - img "dots-icon" [ref=e199]
              - row [ref=e200] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418383011-222vs" [ref=e201]:
                  - generic [ref=e203]:
                    - img "car" [ref=e205]
                    - generic [ref=e206]:
                      - generic [ref=e207]: QA E2E Partner 1787418383011-222vs
                      - radiogroup [ref=e208]:
                        - listitem [ref=e209]:
                          - radio [checked] [ref=e210]:
                            - img "star" [ref=e212]
                            - img "star" [ref=e216]
                        - listitem [ref=e219]:
                          - radio [checked] [ref=e220]:
                            - img "star" [ref=e222]
                            - img "star" [ref=e226]
                        - listitem [ref=e229]:
                          - radio [checked] [ref=e230]:
                            - img "star" [ref=e232]
                            - img "star" [ref=e236]
                        - listitem [ref=e239]:
                          - radio [checked] [ref=e240]:
                            - img "star" [ref=e242]
                            - img "star" [ref=e246]
                        - listitem [ref=e249]:
                          - radio [checked] [ref=e250]:
                            - img "star" [ref=e252]
                            - img "star" [ref=e256]
                - cell "Sofia, Bulgaria" [ref=e259]
                - cell "+359887570406" [ref=e261]
                - cell "QA Contact QA E2E Partner 1787418383011-222vs" [ref=e263]
                - cell "Смяна на масло" [ref=e265]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e269]
                - cell [ref=e273]:
                  - generic [ref=e275]:
                    - menu:
                      - menuitem [ref=e276]:
                        - img "dots-icon" [ref=e278]
              - row [ref=e279] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418383466-xdu2w EDITED" [ref=e280]:
                  - generic [ref=e282]:
                    - img "car" [ref=e284]
                    - generic [ref=e285]:
                      - generic [ref=e286]: QA E2E Partner 1787418383466-xdu2w EDITED
                      - radiogroup [ref=e287]:
                        - listitem [ref=e288]:
                          - radio [ref=e289]:
                            - img "star" [ref=e291]
                            - img "star" [ref=e295]
                        - listitem [ref=e298]:
                          - radio [ref=e299]:
                            - img "star" [ref=e301]
                            - img "star" [ref=e305]
                        - listitem [ref=e308]:
                          - radio [ref=e309]:
                            - img "star" [ref=e311]
                            - img "star" [ref=e315]
                        - listitem [ref=e318]:
                          - radio [ref=e319]:
                            - img "star" [ref=e321]
                            - img "star" [ref=e325]
                        - listitem [ref=e328]:
                          - radio [ref=e329]:
                            - img "star" [ref=e331]
                            - img "star" [ref=e335]
                - cell "Plovdiv, Bulgaria" [ref=e338]
                - cell "+359894507693" [ref=e340]
                - cell "QA Contact EDITED 1787418383466-w7m8z" [ref=e342]
                - cell "Смяна на гуми" [ref=e344]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e348]
                - cell [ref=e352]:
                  - generic [ref=e354]:
                    - menu:
                      - menuitem [ref=e355]:
                        - img "dots-icon" [ref=e357]
              - row [ref=e358] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417975597-6djls" [ref=e359]:
                  - generic [ref=e361]:
                    - img "car" [ref=e363]
                    - generic [ref=e364]:
                      - generic [ref=e365]: QA E2E Partner 1787417975597-6djls
                      - radiogroup [ref=e366]:
                        - listitem [ref=e367]:
                          - radio [checked] [ref=e368]:
                            - img "star" [ref=e370]
                            - img "star" [ref=e374]
                        - listitem [ref=e377]:
                          - radio [checked] [ref=e378]:
                            - img "star" [ref=e380]
                            - img "star" [ref=e384]
                        - listitem [ref=e387]:
                          - radio [checked] [ref=e388]:
                            - img "star" [ref=e390]
                            - img "star" [ref=e394]
                        - listitem [ref=e397]:
                          - radio [checked] [ref=e398]:
                            - img "star" [ref=e400]
                            - img "star" [ref=e404]
                        - listitem [ref=e407]:
                          - radio [checked] [ref=e408]:
                            - img "star" [ref=e410]
                            - img "star" [ref=e414]
                - cell "Sofia, Bulgaria" [ref=e417]
                - cell "+359197" [ref=e419]
                - cell "QA Contact QA E2E Partner 1787417975597-6djls" [ref=e421]
                - cell "Смяна на масло" [ref=e423]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e427]
                - cell [ref=e431]:
                  - generic [ref=e433]:
                    - menu:
                      - menuitem [ref=e434]:
                        - img "dots-icon" [ref=e436]
              - row [ref=e437] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417948627-dw3gz EDITED" [ref=e438]:
                  - generic [ref=e440]:
                    - img "car" [ref=e442]
                    - generic [ref=e443]:
                      - generic [ref=e444]: QA E2E Partner 1787417948627-dw3gz EDITED
                      - radiogroup [ref=e445]:
                        - listitem [ref=e446]:
                          - radio [ref=e447]:
                            - img "star" [ref=e449]
                            - img "star" [ref=e453]
                        - listitem [ref=e456]:
                          - radio [ref=e457]:
                            - img "star" [ref=e459]
                            - img "star" [ref=e463]
                        - listitem [ref=e466]:
                          - radio [ref=e467]:
                            - img "star" [ref=e469]
                            - img "star" [ref=e473]
                        - listitem [ref=e476]:
                          - radio [ref=e477]:
                            - img "star" [ref=e479]
                            - img "star" [ref=e483]
                        - listitem [ref=e486]:
                          - radio [ref=e487]:
                            - img "star" [ref=e489]
                            - img "star" [ref=e493]
                - cell "Plovdiv, Bulgaria" [ref=e496]
                - cell "+359893787552" [ref=e498]
                - cell "QA Contact EDITED 1787417948628-ytv67" [ref=e500]
                - cell "Смяна на гуми" [ref=e502]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e506]
                - cell [ref=e510]:
                  - generic [ref=e512]:
                    - menu:
                      - menuitem [ref=e513]:
                        - img "dots-icon" [ref=e515]
              - row [ref=e516] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417932052-xgo12" [ref=e517]:
                  - generic [ref=e519]:
                    - img "car" [ref=e521]
                    - generic [ref=e522]:
                      - generic [ref=e523]: QA E2E Partner 1787417932052-xgo12
                      - radiogroup [ref=e524]:
                        - listitem [ref=e525]:
                          - radio [checked] [ref=e526]:
                            - img "star" [ref=e528]
                            - img "star" [ref=e532]
                        - listitem [ref=e535]:
                          - radio [checked] [ref=e536]:
                            - img "star" [ref=e538]
                            - img "star" [ref=e542]
                        - listitem [ref=e545]:
                          - radio [checked] [ref=e546]:
                            - img "star" [ref=e548]
                            - img "star" [ref=e552]
                        - listitem [ref=e555]:
                          - radio [checked] [ref=e556]:
                            - img "star" [ref=e558]
                            - img "star" [ref=e562]
                        - listitem [ref=e565]:
                          - radio [checked] [ref=e566]:
                            - img "star" [ref=e568]
                            - img "star" [ref=e572]
                - cell "Sofia, Bulgaria" [ref=e575]
                - cell "+359889829720" [ref=e577]
                - cell "QA Contact QA E2E Partner 1787417932052-xgo12" [ref=e579]
                - cell "Смяна на масло" [ref=e581]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e585]
                - cell [ref=e589]:
                  - generic [ref=e591]:
                    - menu:
                      - menuitem [ref=e592]:
                        - img "dots-icon" [ref=e594]
              - row [ref=e595] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417685932-pve6f" [ref=e596]:
                  - generic [ref=e598]:
                    - img "car" [ref=e600]
                    - generic [ref=e601]:
                      - generic [ref=e602]: QA E2E Partner 1787417685932-pve6f
                      - radiogroup [ref=e603]:
                        - listitem [ref=e604]:
                          - radio [checked] [ref=e605]:
                            - img "star" [ref=e607]
                            - img "star" [ref=e611]
                        - listitem [ref=e614]:
                          - radio [checked] [ref=e615]:
                            - img "star" [ref=e617]
                            - img "star" [ref=e621]
                        - listitem [ref=e624]:
                          - radio [checked] [ref=e625]:
                            - img "star" [ref=e627]
                            - img "star" [ref=e631]
                        - listitem [ref=e634]:
                          - radio [checked] [ref=e635]:
                            - img "star" [ref=e637]
                            - img "star" [ref=e641]
                        - listitem [ref=e644]:
                          - radio [checked] [ref=e645]:
                            - img "star" [ref=e647]
                            - img "star" [ref=e651]
                - cell "Sofia, Bulgaria" [ref=e654]
                - cell "+359132" [ref=e656]
                - cell "QA Contact QA E2E Partner 1787417685932-pve6f" [ref=e658]
                - cell "Смяна на масло" [ref=e660]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e664]
                - cell [ref=e668]:
                  - generic [ref=e670]:
                    - menu:
                      - menuitem [ref=e671]:
                        - img "dots-icon" [ref=e673]
              - row [ref=e674] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417679652-t31dh" [ref=e675]:
                  - generic [ref=e677]:
                    - img "car" [ref=e679]
                    - generic [ref=e680]:
                      - generic [ref=e681]: QA E2E Partner 1787417679652-t31dh
                      - radiogroup [ref=e682]:
                        - listitem [ref=e683]:
                          - radio [checked] [ref=e684]:
                            - img "star" [ref=e686]
                            - img "star" [ref=e690]
                        - listitem [ref=e693]:
                          - radio [checked] [ref=e694]:
                            - img "star" [ref=e696]
                            - img "star" [ref=e700]
                        - listitem [ref=e703]:
                          - radio [checked] [ref=e704]:
                            - img "star" [ref=e706]
                            - img "star" [ref=e710]
                        - listitem [ref=e713]:
                          - radio [checked] [ref=e714]:
                            - img "star" [ref=e716]
                            - img "star" [ref=e720]
                        - listitem [ref=e723]:
                          - radio [checked] [ref=e724]:
                            - img "star" [ref=e726]
                            - img "star" [ref=e730]
                - cell "Sofia, Bulgaria" [ref=e733]
                - cell "+359887163604" [ref=e735]
                - cell "QA Contact QA E2E Partner 1787417679652-t31dh" [ref=e737]
                - cell "Смяна на масло" [ref=e739]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e743]
                - cell [ref=e747]:
                  - generic [ref=e749]:
                    - menu:
                      - menuitem [ref=e750]:
                        - img "dots-icon" [ref=e752]
              - row [ref=e753] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417679652-t31dh" [ref=e754]:
                  - generic [ref=e756]:
                    - img "car" [ref=e758]
                    - generic [ref=e759]:
                      - generic [ref=e760]: QA E2E Partner 1787417679652-t31dh
                      - radiogroup [ref=e761]:
                        - listitem [ref=e762]:
                          - radio [checked] [ref=e763]:
                            - img "star" [ref=e765]
                            - img "star" [ref=e769]
                        - listitem [ref=e772]:
                          - radio [checked] [ref=e773]:
                            - img "star" [ref=e775]
                            - img "star" [ref=e779]
                        - listitem [ref=e782]:
                          - radio [checked] [ref=e783]:
                            - img "star" [ref=e785]
                            - img "star" [ref=e789]
                        - listitem [ref=e792]:
                          - radio [checked] [ref=e793]:
                            - img "star" [ref=e795]
                            - img "star" [ref=e799]
                        - listitem [ref=e802]:
                          - radio [checked] [ref=e803]:
                            - img "star" [ref=e805]
                            - img "star" [ref=e809]
                - cell "Sofia, Bulgaria" [ref=e812]
                - cell "+359887163604" [ref=e814]
                - cell "QA Contact QA E2E Partner 1787417679652-t31dh" [ref=e816]
                - cell "Смяна на масло" [ref=e818]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e822]
                - cell [ref=e826]:
                  - generic [ref=e828]:
                    - menu:
                      - menuitem [ref=e829]:
                        - img "dots-icon" [ref=e831]
              - row [ref=e832] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417655361-a2rr0 EDITED" [ref=e833]:
                  - generic [ref=e835]:
                    - img "car" [ref=e837]
                    - generic [ref=e838]:
                      - generic [ref=e839]: QA E2E Partner 1787417655361-a2rr0 EDITED
                      - radiogroup [ref=e840]:
                        - listitem [ref=e841]:
                          - radio [ref=e842]:
                            - img "star" [ref=e844]
                            - img "star" [ref=e848]
                        - listitem [ref=e851]:
                          - radio [ref=e852]:
                            - img "star" [ref=e854]
                            - img "star" [ref=e858]
                        - listitem [ref=e861]:
                          - radio [ref=e862]:
                            - img "star" [ref=e864]
                            - img "star" [ref=e868]
                        - listitem [ref=e871]:
                          - radio [ref=e872]:
                            - img "star" [ref=e874]
                            - img "star" [ref=e878]
                        - listitem [ref=e881]:
                          - radio [ref=e882]:
                            - img "star" [ref=e884]
                            - img "star" [ref=e888]
                - cell "Plovdiv, Bulgaria" [ref=e891]
                - cell "+359897715657" [ref=e893]
                - cell "QA Contact EDITED 1787417655361-i5tjg" [ref=e895]
                - cell "Смяна на гуми" [ref=e897]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e901]
                - cell [ref=e905]:
                  - generic [ref=e907]:
                    - menu:
                      - menuitem [ref=e908]:
                        - img "dots-icon" [ref=e910]
        - list [ref=e912]:
          - listitem "Previous Page" [ref=e913]
          - listitem "1" [ref=e914] [cursor=pointer]
          - listitem "2" [ref=e916] [cursor=pointer]
          - listitem "3" [ref=e918] [cursor=pointer]
          - listitem "4" [ref=e920] [cursor=pointer]
          - listitem "5" [ref=e922] [cursor=pointer]
          - listitem "Next 5 Pages" [ref=e924] [cursor=pointer]:
            - generic [ref=e926]:
              - img "double-right" [ref=e927]
              - generic [ref=e930]: •••
          - listitem "142" [ref=e931] [cursor=pointer]
          - listitem "Next Page" [ref=e933] [cursor=pointer]
          - listitem [ref=e936]:
            - generic "Page size" [ref=e937] [cursor=pointer]:
              - generic [ref=e938]:
                - combobox "Page size" [ref=e940]
                - generic "10 / items per page" [ref=e941]
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