// React Project with Next
module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint-config-prettier/@typescript-eslint',
    'eslint-config-prettier/react',
    '@greatminds/eslint-config/ts-react-next',
  ],
  rules: {
    'import/no-named-default': 0,
    'no-use-before-define': 0,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
