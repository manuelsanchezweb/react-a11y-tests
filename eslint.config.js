
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import globals from 'globals';
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/',
      '**/.cache/',
      'storybook-static/',
      'playwright-report/',
      'test-results/',
      'dist/',
    ],
  },
  js.configs.recommended,
  {
    files: ['./src/**/*.{js,jsx}', './test/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11Y,
      'react-hooks': reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jsxA11Y.configs.recommended.rules,
      'react/prop-types': 'off'
    }
  },
  prettierConfig,
];
