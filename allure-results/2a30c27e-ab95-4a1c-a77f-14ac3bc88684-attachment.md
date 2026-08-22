# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partners\CreatePartnerValidation.spec.ts >> CreatePartnerWithMissingRequiredFieldsRejected
- Location: tests\partners\CreatePartnerValidation.spec.ts:22:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://dev.admin.avtoikonom.com/partners", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Common behavior every Page Object needs. Domain pages extend this
  5  |  * instead of re-implementing navigation — as the suite grows past a
  6  |  * handful of pages (Requests, Users, Vehicles, Drivers, ...), shared
  7  |  * behavior like sidebar navigation or header interactions belongs here,
  8  |  * once, rather than copy-pasted into each one.
  9  |  */
  10 | export abstract class BasePage {
  11 |   constructor(protected readonly page: Page) {}
  12 | 
  13 |   /**
  14 |    * Navigates to a path relative to the configured baseURL. Deliberately
  15 |    * not named `goto` — each domain page exposes its own no-argument
  16 |    * `goto()` for its one canonical route, and giving it a different name
  17 |    * here avoids that public `goto()` looking like an override of this
  18 |    * (differently-shaped) protected helper.
  19 |    */
  20 |   protected async navigateTo(path: string): Promise<void> {
> 21 |     await this.page.goto(path);
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  22 |   }
  23 | }
  24 | 
```