import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs}'],
        rules: {
            'no-console': 'warn',
            'prefer-const': 'error',
        },
        languageOptions: {
            globals: globals.node,
        },
    },
];
