declare module 'allure-commandline' {
  import { ChildProcess } from 'child_process';

  /** Spawns the bundled Allure CLI with the given argv (e.g. `['generate', ...]`) — the same call `allure-commandline`'s own `bin/allure` script makes. No types are published for this package. */
  export default function allureCommandline(args: string[]): ChildProcess;
}
