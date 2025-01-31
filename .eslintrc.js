module.exports = {
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false
    }
  },
  "env": {
    "browser": false,
    "mocha": true,
    "node": true
  },
  "rules": {
    "eqeqeq": ["error", "smart"],
    "no-extra-boolean-cast": 0,
    "quotes": ["error", "single"],
    "curly": ["error", "all"],
    "no-console": ["warn", { "allow": ["error"] }],
    "no-debugger": 1,
    "semi": [1, "always"],
    "no-trailing-spaces": 0,
    "no-else-return": 0,
    "no-extra-bind": 0,
    "no-implicit-coercion": 0,
    "no-useless-call": 0,
    "no-return-assign": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-extra-semi": 1,
    "no-underscore-dangle": 0,
    "no-lone-blocks": 0,
    "one-var": ["error", "never"],
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "any", "prev": ["const"], "next": "*"}
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ]
  },
  "globals": {
    "Promise": true,
  }
}
