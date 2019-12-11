export interface RegexUtil {}

export interface RegexUtilConstructor<T extends RegexUtil = RegexUtil> {
  /**
   * 验证是否是数字。
   * @param {String} value
   * @return {Boolean}
   */
  isNumeric(value: string): boolean;

  /**
   * 验证是否是整数。
   * @param {String} value
   * @return {Boolean}
   */
  isIntegerNumeric(value: string): boolean;

  /**
   * 验证是否是合法的电子邮箱。
   * @param {String} value
   * @return {Boolean}
   */
  isEmail(value: string): boolean;

  /**
   * 验证是否是合法的手机号码。
   * @param {String} value
   * @return {Boolean}
   */
  isMobilephone(value: string): boolean;

  /**
   * 验证是否是合法的QQ号。
   * @param {String} value
   * @return {Boolean}
   */
  isQQNumber(value: string): boolean;

  /**
   * 验证是否是合法的微信号。
   * @param {String} value
   * @return {Boolean}
   */
  isWechatNumber(value: string): boolean;

  /**
   * 验证是否是合法的15/18位身份证号。
   * @param {String} value
   * @return {Boolean}
   */
  isIDCardNumber(value: string): boolean;

  /**
   * 将 HTML 的标签过滤，只保留文本。
   * @param {String} html
   * @return {String}
   */
  filterHtml(html: string): string;
}

declare namespace STEP.JSUtils {
  export const $$regex: RegexUtilConstructor;
}
