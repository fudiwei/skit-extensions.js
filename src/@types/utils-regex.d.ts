export interface RegexUtil {}

export interface RegexUtilConstructor<T extends RegexUtil = RegexUtil> {
  /**
   * 验证是否是数字。
   * @param {String} value
   * @return {Boolean}
   */
  isNumeric(value: String): Boolean;

  /**
   * 验证是否是整数。
   * @param {String} value
   * @return {Boolean}
   */
  isIntegerNumeric(value: String): Boolean;

  /**
   * 验证是否是合法的电子邮箱。
   * @param {String} value
   * @return {Boolean}
   */
  isEmail(value: String): Boolean;

  /**
   * 验证是否是合法的手机号码。
   * @param {String} value
   * @return {Boolean}
   */
  isMobilephone(value: String): Boolean;

  /**
   * 验证是否是合法的QQ号。
   * @param {String} value
   * @return {Boolean}
   */
  isQQNumber(value: String): Boolean;

  /**
   * 验证是否是合法的微信号。
   * @param {String} value
   * @return {Boolean}
   */
  isWechatNumber(value: String): Boolean;

  /**
   * 验证是否是合法的15/18位身份证号。
   * @param {String} value
   * @return {Boolean}
   */
  isIDCardNumber(value: String): Boolean;

  /**
   * 将 HTML 的标签过滤，只保留文本。
   * @param {String} html
   * @return {String}
   */
  filterHtml(html: String): String;
}

declare namespace STEP.JSUtils {
  export const $$regex: RegexUtilConstructor;
}
