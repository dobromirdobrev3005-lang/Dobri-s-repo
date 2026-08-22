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
                - cell "QA E2E Partner 1787418418709-n0ri9" [ref=e122]:
                  - generic [ref=e126]:
                    - generic [ref=e127]: QA E2E Partner 1787418418709-n0ri9
                    - radiogroup [ref=e128]:
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
                      - listitem [ref=e169]:
                        - radio [checked] [ref=e170]:
                          - img "star" [ref=e172]
                          - img "star" [ref=e176]
                - cell "Sofia, Bulgaria" [ref=e179]
                - cell "+359884352529" [ref=e181]
                - cell "QA Contact QA E2E Partner 1787418418709-n0ri9" [ref=e183]
                - cell "Смяна на масло" [ref=e185]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e189]
                - cell [ref=e193]:
                  - generic [ref=e195]:
                    - menu:
                      - menuitem [ref=e196]:
                        - img "dots-icon" [ref=e198]
              - row [ref=e199] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418418709-n0ri9" [ref=e200]:
                  - generic [ref=e202]:
                    - img "car" [ref=e204]
                    - generic [ref=e205]:
                      - generic [ref=e206]: QA E2E Partner 1787418418709-n0ri9
                      - radiogroup [ref=e207]:
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
                        - listitem [ref=e248]:
                          - radio [checked] [ref=e249]:
                            - img "star" [ref=e251]
                            - img "star" [ref=e255]
                - cell "Sofia, Bulgaria" [ref=e258]
                - cell "+359884352529" [ref=e260]
                - cell "QA Contact QA E2E Partner 1787418418709-n0ri9" [ref=e262]
                - cell "Смяна на масло" [ref=e264]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e268]
                - cell [ref=e272]:
                  - generic [ref=e274]:
                    - menu:
                      - menuitem [ref=e275]:
                        - img "dots-icon" [ref=e277]
              - row [ref=e278] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418383011-222vs" [ref=e279]:
                  - generic [ref=e281]:
                    - img "car" [ref=e283]
                    - generic [ref=e284]:
                      - generic [ref=e285]: QA E2E Partner 1787418383011-222vs
                      - radiogroup [ref=e286]:
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
                        - listitem [ref=e327]:
                          - radio [checked] [ref=e328]:
                            - img "star" [ref=e330]
                            - img "star" [ref=e334]
                - cell "Sofia, Bulgaria" [ref=e337]
                - cell "+359887570406" [ref=e339]
                - cell "QA Contact QA E2E Partner 1787418383011-222vs" [ref=e341]
                - cell "Смяна на масло" [ref=e343]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e347]
                - cell [ref=e351]:
                  - generic [ref=e353]:
                    - menu:
                      - menuitem [ref=e354]:
                        - img "dots-icon" [ref=e356]
              - row [ref=e357] [cursor=pointer]:
                - cell "car QA E2E Partner 1787418383466-xdu2w EDITED" [ref=e358]:
                  - generic [ref=e360]:
                    - img "car" [ref=e362]
                    - generic [ref=e363]:
                      - generic [ref=e364]: QA E2E Partner 1787418383466-xdu2w EDITED
                      - radiogroup [ref=e365]:
                        - listitem [ref=e366]:
                          - radio [ref=e367]:
                            - img "star" [ref=e369]
                            - img "star" [ref=e373]
                        - listitem [ref=e376]:
                          - radio [ref=e377]:
                            - img "star" [ref=e379]
                            - img "star" [ref=e383]
                        - listitem [ref=e386]:
                          - radio [ref=e387]:
                            - img "star" [ref=e389]
                            - img "star" [ref=e393]
                        - listitem [ref=e396]:
                          - radio [ref=e397]:
                            - img "star" [ref=e399]
                            - img "star" [ref=e403]
                        - listitem [ref=e406]:
                          - radio [ref=e407]:
                            - img "star" [ref=e409]
                            - img "star" [ref=e413]
                - cell "Plovdiv, Bulgaria" [ref=e416]
                - cell "+359894507693" [ref=e418]
                - cell "QA Contact EDITED 1787418383466-w7m8z" [ref=e420]
                - cell "Смяна на гуми" [ref=e422]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e426]
                - cell [ref=e430]:
                  - generic [ref=e432]:
                    - menu:
                      - menuitem [ref=e433]:
                        - img "dots-icon" [ref=e435]
              - row [ref=e436] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417975597-6djls" [ref=e437]:
                  - generic [ref=e439]:
                    - img "car" [ref=e441]
                    - generic [ref=e442]:
                      - generic [ref=e443]: QA E2E Partner 1787417975597-6djls
                      - radiogroup [ref=e444]:
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
                        - listitem [ref=e485]:
                          - radio [checked] [ref=e486]:
                            - img "star" [ref=e488]
                            - img "star" [ref=e492]
                - cell "Sofia, Bulgaria" [ref=e495]
                - cell "+359197" [ref=e497]
                - cell "QA Contact QA E2E Partner 1787417975597-6djls" [ref=e499]
                - cell "Смяна на масло" [ref=e501]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e505]
                - cell [ref=e509]:
                  - generic [ref=e511]:
                    - menu:
                      - menuitem [ref=e512]:
                        - img "dots-icon" [ref=e514]
              - row [ref=e515] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417948627-dw3gz EDITED" [ref=e516]:
                  - generic [ref=e518]:
                    - img "car" [ref=e520]
                    - generic [ref=e521]:
                      - generic [ref=e522]: QA E2E Partner 1787417948627-dw3gz EDITED
                      - radiogroup [ref=e523]:
                        - listitem [ref=e524]:
                          - radio [ref=e525]:
                            - img "star" [ref=e527]
                            - img "star" [ref=e531]
                        - listitem [ref=e534]:
                          - radio [ref=e535]:
                            - img "star" [ref=e537]
                            - img "star" [ref=e541]
                        - listitem [ref=e544]:
                          - radio [ref=e545]:
                            - img "star" [ref=e547]
                            - img "star" [ref=e551]
                        - listitem [ref=e554]:
                          - radio [ref=e555]:
                            - img "star" [ref=e557]
                            - img "star" [ref=e561]
                        - listitem [ref=e564]:
                          - radio [ref=e565]:
                            - img "star" [ref=e567]
                            - img "star" [ref=e571]
                - cell "Plovdiv, Bulgaria" [ref=e574]
                - cell "+359893787552" [ref=e576]
                - cell "QA Contact EDITED 1787417948628-ytv67" [ref=e578]
                - cell "Смяна на гуми" [ref=e580]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e584]
                - cell [ref=e588]:
                  - generic [ref=e590]:
                    - menu:
                      - menuitem [ref=e591]:
                        - img "dots-icon" [ref=e593]
              - row [ref=e594] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417932052-xgo12" [ref=e595]:
                  - generic [ref=e597]:
                    - img "car" [ref=e599]
                    - generic [ref=e600]:
                      - generic [ref=e601]: QA E2E Partner 1787417932052-xgo12
                      - radiogroup [ref=e602]:
                        - listitem [ref=e603]:
                          - radio [checked] [ref=e604]:
                            - img "star" [ref=e606]
                            - img "star" [ref=e610]
                        - listitem [ref=e613]:
                          - radio [checked] [ref=e614]:
                            - img "star" [ref=e616]
                            - img "star" [ref=e620]
                        - listitem [ref=e623]:
                          - radio [checked] [ref=e624]:
                            - img "star" [ref=e626]
                            - img "star" [ref=e630]
                        - listitem [ref=e633]:
                          - radio [checked] [ref=e634]:
                            - img "star" [ref=e636]
                            - img "star" [ref=e640]
                        - listitem [ref=e643]:
                          - radio [checked] [ref=e644]:
                            - img "star" [ref=e646]
                            - img "star" [ref=e650]
                - cell "Sofia, Bulgaria" [ref=e653]
                - cell "+359889829720" [ref=e655]
                - cell "QA Contact QA E2E Partner 1787417932052-xgo12" [ref=e657]
                - cell "Смяна на масло" [ref=e659]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e663]
                - cell [ref=e667]:
                  - generic [ref=e669]:
                    - menu:
                      - menuitem [ref=e670]:
                        - img "dots-icon" [ref=e672]
              - row [ref=e673] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417685932-pve6f" [ref=e674]:
                  - generic [ref=e676]:
                    - img "car" [ref=e678]
                    - generic [ref=e679]:
                      - generic [ref=e680]: QA E2E Partner 1787417685932-pve6f
                      - radiogroup [ref=e681]:
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
                        - listitem [ref=e722]:
                          - radio [checked] [ref=e723]:
                            - img "star" [ref=e725]
                            - img "star" [ref=e729]
                - cell "Sofia, Bulgaria" [ref=e732]
                - cell "+359132" [ref=e734]
                - cell "QA Contact QA E2E Partner 1787417685932-pve6f" [ref=e736]
                - cell "Смяна на масло" [ref=e738]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e742]
                - cell [ref=e746]:
                  - generic [ref=e748]:
                    - menu:
                      - menuitem [ref=e749]:
                        - img "dots-icon" [ref=e751]
              - row [ref=e752] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417679652-t31dh" [ref=e753]:
                  - generic [ref=e755]:
                    - img "car" [ref=e757]
                    - generic [ref=e758]:
                      - generic [ref=e759]: QA E2E Partner 1787417679652-t31dh
                      - radiogroup [ref=e760]:
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
                        - listitem [ref=e801]:
                          - radio [checked] [ref=e802]:
                            - img "star" [ref=e804]
                            - img "star" [ref=e808]
                - cell "Sofia, Bulgaria" [ref=e811]
                - cell "+359887163604" [ref=e813]
                - cell "QA Contact QA E2E Partner 1787417679652-t31dh" [ref=e815]
                - cell "Смяна на масло" [ref=e817]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e821]
                - cell [ref=e825]:
                  - generic [ref=e827]:
                    - menu:
                      - menuitem [ref=e828]:
                        - img "dots-icon" [ref=e830]
              - row [ref=e831] [cursor=pointer]:
                - cell "car QA E2E Partner 1787417679652-t31dh" [ref=e832]:
                  - generic [ref=e834]:
                    - img "car" [ref=e836]
                    - generic [ref=e837]:
                      - generic [ref=e838]: QA E2E Partner 1787417679652-t31dh
                      - radiogroup [ref=e839]:
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
                        - listitem [ref=e880]:
                          - radio [checked] [ref=e881]:
                            - img "star" [ref=e883]
                            - img "star" [ref=e887]
                - cell "Sofia, Bulgaria" [ref=e890]
                - cell "+359887163604" [ref=e892]
                - cell "QA Contact QA E2E Partner 1787417679652-t31dh" [ref=e894]
                - cell "Смяна на масло" [ref=e896]
                - cell "AUTOMATION SUBSCRIPTION TIER 65730" [ref=e900]
                - cell [ref=e904]:
                  - generic [ref=e906]:
                    - menu:
                      - menuitem [ref=e907]:
                        - img "dots-icon" [ref=e909]
        - list [ref=e911]:
          - listitem "Previous Page" [ref=e912]
          - listitem "1" [ref=e913] [cursor=pointer]
          - listitem "2" [ref=e915] [cursor=pointer]
          - listitem "3" [ref=e917] [cursor=pointer]
          - listitem "4" [ref=e919] [cursor=pointer]
          - listitem "5" [ref=e921] [cursor=pointer]
          - listitem "Next 5 Pages" [ref=e923] [cursor=pointer]:
            - generic [ref=e925]:
              - img "double-right" [ref=e926]
              - generic [ref=e929]: •••
          - listitem "142" [ref=e930] [cursor=pointer]
          - listitem "Next Page" [ref=e932] [cursor=pointer]
          - listitem [ref=e935]:
            - generic "Page size" [ref=e936] [cursor=pointer]:
              - generic [ref=e937]:
                - combobox "Page size" [ref=e939]
                - generic "10 / items per page" [ref=e940]
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