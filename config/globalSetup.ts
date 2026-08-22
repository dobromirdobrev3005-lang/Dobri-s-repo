import fs from 'fs';
import path from 'path';

/**
 * Clears `allure-results/` before every run.
 *
 * `allure-playwright` only ever *appends* result/attachment files to that
 * folder — nothing in this project's `allure generate` step (see
 * `reporters/allureReportLink.ts` and the `allure:generate` npm script)
 * cleans it, only the `allure-report/` output. Left alone, results from
 * every past run keep piling up and get aggregated into the next report,
 * so a run with real failures never fixed sits mixed in with a run that's
 * since gone green — the Allure summary count silently drifts from what
 * the terminal/HTML reporter just showed for the run you actually ran.
 * Deleting the folder here, once per run before any test starts,
 * guarantees the report that comes out the other end reflects only this
 * run.
 */
export default function globalSetup(): void {
  const resultsDir = path.resolve(__dirname, '..', 'allure-results');
  fs.rmSync(resultsDir, { recursive: true, force: true });
}
