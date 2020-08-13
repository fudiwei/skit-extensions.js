module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:promise/recommended'
    ],
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'commonjs': true,
        'amd': true
    },
    'globals': {
        'wx': true,
        'my': true,
        'swan': true,
        'tt': true
    },
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['warn', 'windows'],
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'promise/avoid-new': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    },
    'plugins': [
        'promise'
    ]
};