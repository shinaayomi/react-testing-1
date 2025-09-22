import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import jestDom from 'eslint-plugin-jest-dom'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      'jest-dom': jestDom,
      react: pluginReact,
    },
    // Use imported configs for extends if available
    // 'js/recommended' and 'jest-dom/recommended' are not valid in flat config
    // Instead, spread recommended configs from imported plugins
    ...js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
])
