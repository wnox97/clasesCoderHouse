module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
};
