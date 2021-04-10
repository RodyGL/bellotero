module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',

        'react/jsx-props-no-spreading': 'off',

        'import/prefer-default-export': 'off',
      },
    },
  ],
  rules: {},
};
