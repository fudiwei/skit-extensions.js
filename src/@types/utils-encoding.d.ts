export interface Base64EncodingUtil extends EncodingUtil {}

export interface Base64EncodingUtilConstructor<
  T extends Base64EncodingUtil = Base64EncodingUtil
> {
  /**
   * Base64 编码。
   * @param {String} str 待 Base64 编码的字符串。
   * @return {String}
   */
  encode(str: String): String;

  /**
   * Base64 解码。
   * @param {String} str Base64 编码后的字符串。
   * @return {String}
   */
  decode(str: String): String;
}

export interface GuidEncodingUtil extends EncodingUtil {
  toString(format?: String): String;
}

export interface GuidEncodingUtilConstructor<
  T extends GuidEncodingUtil = GuidEncodingUtil
> {
  /**
   * 生成一个 GUID。
   * @return {GuidEncodingUtil}
   */
  create(): GuidEncodingUtil;
}

export interface EncodingUtil {}

export interface EncodingUtilConstructor<
  T extends EncodingUtil = EncodingUtil
> {
  /**
   * Base64 编码。
   */
  readonly base64: Base64EncodingUtilConstructor;

  /**
   * GUID。
   */
  readonly guid: GuidEncodingUtilConstructor;
}

declare namespace STEP.JSUtils {
  export const $$encoding: EncodingUtilConstructor;
}
