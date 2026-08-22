import { defineConfig, devices } from '@playwright/test';
import { env, STORAGE_STATE_PATH } from './config/env';

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
  /* This app's dialogs are genuinely slow (a Google Map + a subscription-
   * tier list load on every open) — a global default higher than the 30s
   * out-of-the-box value, set once here, scales better than every spec
   * repeating its own `test.setTimeout()`. */
  timeout: 90_000,
  /* `list` gives live console feedback while a run is in progress (locally
   * and in the CI log); `html` is the artifact a human opens afterwards to
   * inspect a failure — traces, screenshots and network per step. Never
   * auto-opens: CI has no browser to open it in, and locally `npm run
   * report` opens it on demand instead of surprising you every run. */
  reporter: [['list'], ['html', { open: 'never' }]],
  /* Slow down assertions past the 5s default before failing a step, to
   * match the same genuinely slow environment. */
  expect: { timeout: 10_000 },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: env.baseUrl,

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

  projects: [
    /* Authenticates once and caches the session to `STORAGE_STATE_PATH`
     * (see tests/setup/auth.setup.ts) — every other project depends on
     * this instead of logging in through the UI per test. This is also
     * the seam a growing suite hangs multiple *roles* off of: a second
     * setup project (e.g. "setup:viewer") plus a second dependent browser
     * project reusing a different storageState file, without touching any
     * spec.  */
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    /* Run only against Chromium for now. */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: STORAGE_STATE_PATH },
      dependencies: ['setup'],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
