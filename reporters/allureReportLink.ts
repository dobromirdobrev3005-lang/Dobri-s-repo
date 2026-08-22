import type { Reporter } from '@playwright/test/reporter';
import allureCommandline from 'allure-commandline';
import { spawn } from 'child_process';
import fs from 'fs';
import http from 'http';
import path from 'path';

/** Fixed on purpose (see the class comment): a stable port means every run
 * during a dev session can reuse the same already-running server instead
 * of spawning a new one and piling up background processes. */
const PORT = 5252;

/**
 * Generates the Allure report from this run's `allure-results/` and serves
 * it over a real local HTTP server once the run finishes — so
 * `npm run allure:report` isn't a manual step nobody remembers to run.
 *
 * This has to be an actual server, not a `file://` link to
 * `allure-report/index.html`: Allure's report is a single-page app that
 * loads its data with `fetch()`, and browsers refuse that under the
 * `file:` scheme (an opaque origin, no CORS to satisfy) — a static link
 * loads the page shell and then fails with exactly the "Failed to fetch" /
 * network-error / blank-page symptom that produces. `reporters/allureServer.js`,
 * spawned detached below, is a minimal static file server for exactly
 * this — nothing fancier was needed once a server is the actual
 * requirement, and it avoids depending on `allure-commandline`'s own
 * `open` command, whose spawned process doesn't reliably survive this
 * process exiting on Windows even with `.unref()` (it isn't started with
 * `detached: true`).
 *
 * That's also why auto-opening a browser here is a deliberate *exception*
 * to this suite's usual "never auto-open, print a link instead" rule (see
 * the built-in `html` reporter's comment in playwright.config.ts): for
 * Allure specifically there's no working non-server alternative, so
 * serving it is required regardless, and opening it is what makes that
 * actually useful. To avoid the exact tab-spam that rule exists to avoid,
 * the browser is only launched the *first* time this port comes up in a
 * dev session — a run that finds the server already up (from an earlier
 * run) just prints the link instead of opening another tab.
 *
 * Skipped entirely on CI: `.github/workflows/playwright.yml` already
 * generates and uploads the Allure report as its own build artifact, and
 * there's no browser on a CI runner to open one in anyway.
 */
export default class AllureReportLinkReporter implements Reporter {
  async onEnd(): Promise<void> {
    if (process.env.CI) return;

    const resultsDir = path.resolve(process.cwd(), 'allure-results');
    if (!fs.existsSync(resultsDir)) return; // allure-playwright produced nothing to generate from

    const reportDir = path.resolve(process.cwd(), 'allure-report');

    try {
      const generation = allureCommandline(['generate', resultsDir, '--clean', '-o', reportDir]);
      const exitCode = await new Promise<number | null>((resolve) => generation.on('close', resolve));
      if (exitCode !== 0) {
        throw new Error(`allure generate exited with code ${exitCode}`);
      }
    } catch (error) {
      // A missing/broken Java runtime is the likely cause (see README) —
      // don't fail the whole test run over a report-generation nicety.
      console.warn(
        `\n⚠ Could not generate the Allure report automatically (${(error as Error).message}).\n` +
          "  Run `npm run allure:report` manually once that's fixed.\n",
      );
      return;
    }

    const url = `http://localhost:${PORT}`;
    const alreadyServing = await isServerUp();

    if (!alreadyServing) {
      // `detached: true` + `stdio: 'ignore'` + `.unref()`, not
      // `allure-commandline`'s own `open` command: that's the combination
      // Node actually needs for a spawned process to survive its parent
      // exiting on Windows, which plain `.unref()` alone doesn't provide
      // for a process inherited stdio ties to this one's console.
      spawn(process.execPath, [path.join(__dirname, 'allureServer.js'), reportDir, String(PORT)], {
        detached: true,
        stdio: 'ignore',
      }).unref();

      await waitUntilUp(url);
      openInBrowser(url);
    }

    console.log(`\nAllure report: ${url}\n`);
  }
}

function isServerUp(): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}`, (res) => {
      res.resume();
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(500, () => req.destroy());
  });
}

async function waitUntilUp(url: string, timeoutMs = 3000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await isServerUp()) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  void url; // best-effort wait — a slow-to-start server still gets the printed link below
}

function openInBrowser(url: string): void {
  const command =
    process.platform === 'win32'
      ? ['cmd', ['/c', 'start', '""', url]]
      : process.platform === 'darwin'
        ? ['open', [url]]
        : ['xdg-open', [url]];
  const [cmd, args] = command as [string, string[]];
  try {
    spawn(cmd, args, { detached: true, stdio: 'ignore' }).unref();
  } catch {
    // No GUI / no such command (e.g. a headless dev container) — the
    // printed link below is the fallback either way.
  }
}
