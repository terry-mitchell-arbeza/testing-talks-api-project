import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: {globals: globals.node}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single', {allowTemplateLiterals: true}],
      '@stylistic/js/indent': ['error', 2],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];