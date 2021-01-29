module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // another configuration created by me can be found at https://github.com/psatler/meetapp-frontend/blob/master/.eslintrc.js
    'react/jsx-filename-extension': [ // enabling jsx in files with tsx extension
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': ['error', {
      // html: "ignore",
      custom: 'ignore',
      exceptions: [],
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
