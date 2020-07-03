import ExtendsDate from './extends-Date';
import ExtendsDocument from './extends-Document';
import ExtendsFunction from './extends-Function';
import ExtendsNumber from './extends-Number';
import ExtendsPromise from './extends-Promise';
import ExtendsString from './extends-String';
import UtilsType from './utils-type';
import UtilsEncoding from './utils-encoding';
import UtilsRegex from './utils-regex';
import UtilsStorage from './utils-storage';
import UtilsRequest from './utils-request';

// @ts-ignore
export default {
    /**
     * 类型判断工具类。
     */
    $$: UtilsType.STEP.JSUtils.$$,

    /**
     * 编码工具类。
     */
    $$encoding: UtilsEncoding.STEP.JSUtils.$$encoding,

    /**
     * 本地存储工具类。
     */
    $$storage: UtilsStorage.STEP.JSUtils.$$storage,

    /**
     * 正则表达式工具类。
     */
    $$regex: UtilsRegex.STEP.JSUtils.$$regex,

    /**
     * AJAX 请求工具类。
     */
    $$request: UtilsRequest.STEP.JSUtils.$$request
};
