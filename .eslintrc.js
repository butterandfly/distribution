module.exports = {
    "extends": "google",
    "installedESLint": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": ["html"],
    "env": {
        "node": true,
        "mocha": true,
        "browser": true
    },
    "rules": {
        "semi": 2,
        "quotes": [2, "single"],
        "new-cap": 0,
        'max-len': ["error", 150],
        'comma-dangle': [2, 'never'],
        'quote-props': ["error", "consistent"],
        'no-console': ["error", {'allow': ["warn", "error"]}],
        'dot-notation': ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }]
    },
    globals: {
      Polymer: true,
      fixture: true,
      assert: true,
      sinon: true
    }
};