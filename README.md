# @skit/extensions

[![NPM Version](https://img.shields.io/npm/v/@skit/extensions.svg?sanitize=true)](https://www.npmjs.com/package/@skit/extensions)
[![NPM Download](https://img.shields.io/npm/dm/@skit/extensions.svg?sanitize=true)](https://www.npmjs.com/package/@skit/extensions)
[![Build Status](https://travis-ci.org/fudiwei/skit-extensions.js.svg?branch=master)](https://travis-ci.org/fudiwei/skit-extensions.js)
[![License](https://img.shields.io/github/license/fudiwei/skit-extensions.js)](https://mit-license.org/)

一个多功能的 JavaScript 内置对象原型链扩展方法工具库。

-   中文文档
-   [English Documentation](./README.en-US.md)

---

## 特性

-   对部分内置对象扩展了若干常用原型链方法（所有 API 均被设计为以 `$` 开头、且不可枚举，无需担心与 ECMAScript 标准的向前兼容问题）；

-   各模块相互独立，可单独拷贝到项目中使用；

-   支持 TypeScript。

---

## 用法

### 安装：

```shell
npm install @skit/extensions
```

### 导入：

```javascript
/* 使用 `require` 导入 */
require('@skit/extensions');

/* 使用 `import` 导入 */
import '@skit/extensions';
```

### API:

请参考 _/types/\*.d.ts_ 下的声明文件。

-   Array:

    -   `Array.$shuffle`
    -   `Array.prototype.$distinct`
    -   `Array.prototype.$distinctBy`
    -   `Array.prototype.$fill`
    -   `Array.prototype.$findLast`
    -   `Array.prototype.$findLastIndex`
    -   `Array.prototype.$groupBy`
    -   `Array.prototype.$groupByToMap`
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

    -   `Function.$noop`
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

    -   `Object.$deepEquals`
    -   `Object.$merge`

-   Promise:

    -   `Promise.$delay`
    -   `Promise.$sequential`
    -   `Promise.$try`
    -   `Promise.$waitUntil`
    -   `Promise.$waitWhile`

-   String:

    -   `String.$equals`
    -   `String.prototype.$reverse`
    -   `String.prototype.$toCamelCase`
    -   `String.prototype.$toKebabCase`
    -   `String.prototype.$toPascalCase`
    -   `String.prototype.$toSnakeCase`

---

## 更新记录

请参阅 [CHANGELOG](./CHANGELOG.md)。
