module.exports = {
  "env": {
    "browser": false,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts"
        ]
      }
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "airbnb-base",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },

  "rules": {
    "prettier/prettier": "error",
    "trailing-comma": 0,
    "@typescript-eslint/semi": ["error"],
    "camelcase": "off",
    "class-methods-use-this": "off",
    "no-console": "error",
    "consistent-return": ["off"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/prefer-default-export": "off",
    "import/extensions":0,
    "no-useless-constructor":"off",
    "import/order": ["error"],
    "no-empty-function": ["error", { "allow": ["constructors"] }],
    "prefer-destructuring":"off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-continue": "off",
    "dot-notation": "off",
    "no-param-reassign": "off"
  }
};
