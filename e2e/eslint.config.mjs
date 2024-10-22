import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {ignores: ['dist/**/*']},
    {languageOptions: {globals: globals.node}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            'quotes': ['error', 'single', {allowTemplateLiterals: true}],
            'semi': ['error', 'never'],
            'semi-spacing': 'error',
            'no-unexpected-multiline': 'error',
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-extra-semi': 'error',
            'no-tabs': 'error',
            '@stylistic/js/indent': ['error', 4],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off'
        },

    }
]