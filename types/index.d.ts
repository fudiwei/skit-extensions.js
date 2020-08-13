import './extends-Array';
import './extends-Date';
import './extends-Document';
import './extends-Function';
import './extends-Number';
import './extends-Promise';
import './extends-String';
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
    $$request: UtilsRequest.STEP.JSUtils.$$request,
};
