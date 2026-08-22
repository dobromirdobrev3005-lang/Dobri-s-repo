// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Specs assert through shared step helpers in tests/*/support/flows.ts
      // rather than inline `expect()` calls — teach the rule about them
      // instead of silencing it.
      'playwright/expect-expect': ['warn', { assertFunctionNames: ['createPartnerAndVerify'] }],
    },
  },
  {
    // Setup projects (tests/setup/*.setup.ts) establish prerequisite state
    // (here: an authenticated session) rather than assert application
    // behavior — the usual "a test should assert something" and "avoid
    // conditionals in a test" rules don't apply to that kind of file.
    files: ['tests/**/*.setup.ts'],
    rules: {
      'playwright/expect-expect': 'off',
      'playwright/no-conditional-in-test': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // reporters/allureServer.js runs standalone via `node`, spawned
    // directly rather than through Playwright/ts-node — plain CommonJS,
    // so it needs Node's own runtime globals declared for `no-undef`
    // (TypeScript files get these from @types/node instead; typescript-eslint
    // turns base `no-undef` off for them entirely).
    files: ['reporters/**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      // Plain CommonJS by necessity (see the file's own comment) — `require`
      // is correct here, not a leftover that should be an `import`.
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'playwright/.cache/',
      'allure-results/',
      'allure-report/',
    ],
  },
  prettier,
);
