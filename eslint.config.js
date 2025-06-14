import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu({
  react: true,
  stylistic: {
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
  },
  typescript: true,
}, {
  plugins: [perfectionist.configs['recommended-alphabetical']],
  rules: {
    'antfu/no-top-level-await': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'no-empty-pattern': 'off',
    'node/prefer-global/process': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-objects': 'error',
    'react-hooks/rules-of-hooks': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
    'ts/no-explicit-any': 'warn',
    'unicorn/throw-new-error': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
}, {
  ignores: ['dist', '.husky'],
})
