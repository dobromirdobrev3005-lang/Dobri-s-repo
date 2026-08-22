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
      // Specs assert through shared step helpers in tests/support/flows.ts
      // rather than inline `expect()` calls — teach the rule about them
      // instead of silencing it.
      'playwright/expect-expect': [
        'warn',
        { assertFunctionNames: ['createPartnerAndVerify', 'loginAndNavigateToPartners'] },
      ],
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
