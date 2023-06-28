// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: "module",
    requireConfigFile: false
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  globals: {
    App: false,
    GLOBAL_CONFIG: false
  },
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
    'vue/multi-word-component-names': 'off'
  }
}
