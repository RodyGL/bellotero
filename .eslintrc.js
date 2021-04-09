module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  rules: {},
};
