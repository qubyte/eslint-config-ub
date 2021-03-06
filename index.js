module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "node": true,
        "browser": false,
        "es6": true
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "blockBindings": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "destructuring": true,
        "templateStrings": true
    },
    "globals": {
        "it": true,
        "before": true,
        "after": true,
        "beforeEach": true,
        "afterEach": true,
        "context": true,
        "describe": true
    },
    "rules": {
        "array-bracket-spacing": [ "error", "never" ],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
        "camelcase": 2,
        "comma-dangle": [2, "always-multiline"],
        "comma-style": [ "error", "last" ],
        "curly": 2,
        "eol-last": "error",
        "eqeqeq": [2, "smart"],
        "guard-for-in": 2,
        "indent": [ 2, 4, { "SwitchCase": 1 } ],
        "keyword-spacing": "error",
        "max-nested-callbacks": [ 2, 4 ],
        "no-caller": 2,
        "no-case-declarations": 0,
        "no-console": 0,
        "no-const-assign": 2,
        "no-else-return": 2,
        "no-empty-pattern": 2,
        "no-empty": 0,
        "no-extra-semi": 2,
        "no-floating-decimal": 2,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-requires": 2,
        "no-multi-spaces": 2,
        "no-multiple-empty-lines": [ 2, { "max": 2 } ],
        "no-param-reassign": 0,
        "no-plusplus": "error",
        "no-process-exit": 0,
        "no-self-compare": 2,
        "no-shadow": 0,
        "no-trailing-spaces": "error",
        "no-undef": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unused-vars": [2, { "args": "after-used", "argsIgnorePattern": "^_" }],
        "no-use-before-define": [ "error", { "functions": false } ],
        "no-useless-concat": 2,
        "no-var": 2,
        "object-curly-spacing": [ "error", "always" ],
        "object-shorthand": "error",
        "operator-linebreak": ["error", "after"],
        "prefer-arrow-callback": ["error", { "allowNamedFunctions": true } ],
        "prefer-const": 2,
        "quotes": [ 2, "single" ],
        "require-yield": 0,
        "semi": [ 2, "always" ],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [ 2, { "anonymous": "never", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "yoda": [2, "never", { "exceptRange": true }]
    }
};
