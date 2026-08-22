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
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/login')`. Falls
     * back to the known dev environment if BASE_URL is unset OR set to an
     * empty string (e.g. an unconfigured GitHub Actions secret resolves to
     * "", which `??` would treat as a real, if useless, value). */
    baseURL: process.env.BASE_URL || 'https://dev.admin.avtoikonom.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

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
