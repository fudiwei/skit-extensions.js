# @skit/extensions

[![NPM Version](https://img.shields.io/npm/v/@skit/extensions.svg?sanitize=true)](https://www.npmjs.com/package/@skit/extensions)
[![NPM Download](https://img.shields.io/npm/dm/@skit/extensions.svg?sanitize=true)](https://www.npmjs.com/package/@skit/extensions)
[![Build Status](https://travis-ci.org/fudiwei/skit-extensions.js.svg?branch=master)](https://travis-ci.org/fudiwei/skit-extensions.js)
[![License](https://img.shields.io/github/license/fudiwei/skit-extensions.js)](https://mit-license.org/)

A powerful JavaScript utility library for built-in object extensions.

（[中文文档](./README.zh-CN.md)）

---

## Features

-   Deliveries several common extended methods to some built-in objects (All APIs are designed to be named starting with `$` and are not enumerable, so you don't need to worry about forward compatibility with the ECMAScript standard).

-   Independent modularity.

-   Supports TypeScript.

---

## Usage

### Install:

```shell
npm install @skit/extensions
```

### Import:

```javascript
/* use `require` */
require('@skit/extensions');

/* use `import` */
import '@skit/extensions';
```

### API:

Please refer to the declaration file in _/types/\*.d.ts_.

-   Array:

    -   `Array.$shuffle`
    -   `Array.prototype.$distinct`
    -   `Array.prototype.$distinctBy`
    -   `Array.prototype.$fill`
    -   `Array.prototype.$findLast`
    -   `Array.prototype.$findLastIndex`
    -   `Array.prototype.$groupBy`
    -   `Array.prototype.$insertAt`
    -   `Array.prototype.$max`
    -   `Array.prototype.$maxBy`
    -   `Array.prototype.$min`
    -   `Array.prototype.$minBy`
    -   `Array.prototype.$removeAt`
    -   `Array.prototype.$shuffle`
    -   `Array.prototype.$sortAsc`
    -   `Array.prototype.$sortAscBy`
    -   `Array.prototype.$sortDesc`
    -   `Array.prototype.$sortDescBy`

-   Boolean:

    -   `Boolean.$from`

-   Date:

    -   `Date.$now`
    -   `Date.$today`
    -   `Date.$unix`
    -   `Date.prototype.$addMilliseconds`
    -   `Date.prototype.$addSeconds`
    -   `Date.prototype.$addMinutes`
    -   `Date.prototype.$addHours`
    -   `Date.prototype.$addDays`
    -   `Date.prototype.$addMonths`
    -   `Date.prototype.$addYears`
    -   `Date.prototype.$format`
    -   `Date.prototype.$isToday`
    -   `Date.prototype.$isWeekend`
    -   `Date.prototype.$midnight`
    -   `Date.prototype.$unix`

-   Function:

    -   `Function.$debounce`
    -   `Function.$throttle`

-   Number:

    -   `Number.$isNumeric`
    -   `Number.$isOdd`
    -   `Number.$isEven`
    -   `Number.prototype.$toFloor`
    -   `Number.prototype.$toCeil`
    -   `Number.prototype.$toRound`

-   Object:

    -   `Object.$merge`

-   Promise:

    -   `Promise.$delay`
    -   `Promise.$sequential`
    -   `Promise.$try`

-   String:

    -   `String.$equals`
    -   `String.prototype.$reverse`
    -   `String.prototype.$toCamelCase`
    -   `String.prototype.$toKebabCase`
    -   `String.prototype.$toPascalCase`
    -   `String.prototype.$toSnakeCase`

---

## Changelog

Please view the [CHANGELOG](./CHANGELOG.md) for details.
