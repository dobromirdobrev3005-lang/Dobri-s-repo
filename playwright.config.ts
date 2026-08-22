import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from .env (git-ignored). See .env.example.
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* `list` gives live console feedback while a run is in progress (locally
   * and in the CI log); `html` is the artifact a human opens afterwards to
   * inspect a failure — traces, screenshots and network per step. Never
   * auto-opens: CI has no browser to open it in, and locally `npm run
   * report` opens it on demand instead of surprising you every run. */
  reporter: [['list'], ['html', { open: 'never' }]],
  /* Slow down the suite's assertions past the 5s default before failing a
   * step, and the default click/fill timeout, to match a genuinely slow
   * environment (this dialog loads a Google Map and a subscription-tier
   * list) instead of papering over it with longer test-level timeouts only. */
  expect: { timeout: 10_000 },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/login')`. Falls
     * back to the known dev environment if BASE_URL is unset OR set to an
     * empty string (e.g. an unconfigured GitHub Actions secret resolves to
     * "", which `??` would treat as a real, if useless, value). */
    baseURL: process.env.BASE_URL || 'https://dev.admin.avtoikonom.com',

    /* Trace, screenshot and video are the three artifacts a failure needs to
     * be debuggable without reproducing it locally — captured only on
     * failure/retry so passing runs stay cheap. */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 15_000,

    /* Run headed locally so the browser is visible while watching a test;
     * always headless on CI where nothing watches it. */
    headless: !!process.env.CI,

    /* Launch maximized and let the viewport follow the actual window size,
     * instead of a fixed small viewport, so the run is easy to watch locally. */
    viewport: process.env.CI ? undefined : null,
    launchOptions: process.env.CI ? undefined : { args: ['--start-maximized'] },
  },

  /* Run only against Chromium for now. */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
