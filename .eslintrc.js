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
		'no-console': 'off',
		'no-extra-boolean-cast': 'off',
        'promise/avoid-new': 'off'
    },
    'plugins': [
        'promise'
    ]
};