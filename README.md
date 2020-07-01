### js-utils

---

## 特性

* 对部分内置对象扩展了若干常用原型链方法；

* 若干常用工具类；

* 支持 CommomJS / AMD / CMD / ES6 Module / 微信小程序 / 支付宝小程序 / 百度小程序 / 头条小程序模块化引入；

* 支持浏览器和小程序环境；

* 支持 TypeScript；

* 各模块相互独立，可单独拷贝到项目中使用。

---

## 模块

* `$$`：类型判断工具类；
* `$$encoding`：编码工具类，支持 Base64 / GUID；
* `$$regex`：正则表达式工具类；
* `$$storage`：本地存储工具类，支持强类型读写；
* `$$request`：AJAX 请求工具类，仿 [axios](https://github.com/axios/axios) 的设计。

---

## 用法

安装：

> 提示：暂时未发布到 npmjs.org，需先自行执行 `npm publish` 发布到私有仓库。

``` shell
npm install @step/js-utils
```

导入：

``` javascript
// require 方式
const Util = require('@step/js-utils');

// import 方式
import {
  $$,
  $$encoding,
  $$regex,
  $$storage,
  $$request
} from '@step/js-utils';
```
