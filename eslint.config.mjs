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
    ignores: ['node_modules/', 'playwright-report/', 'test-results/', 'playwright/.cache/'],
  },
  prettier,
);
