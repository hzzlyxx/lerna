module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'generator-star-spacing': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'global-require': 1,
    'import/prefer-default-export': 0,
    'react/jsx-no-bind': 0,
    'react/prefer-stateless-function': 0,
    'no-else-return': 0,
    'no-restricted-syntax': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'arrow-body-style': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-bitwise': 0,
    'no-cond-assign': 0,
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'no-restricted-globals': [0],
    'require-yield': [1],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-var-requires': 0,
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    indent: ['off', 2],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
