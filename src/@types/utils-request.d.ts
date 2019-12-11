export interface RequestUtil {
  /**
   * 发起一个 HTTP 请求。
   * @param {Object} options 参数。
   * @param {String} options.method （可选）请求谓词（默认值 GET）。
   * @param {String} options.url （可选）请求相对路径。
   * @param {String | Object | Array} options.query （可选）请求查询参数。
   * @param {Object | Array} options.headers （可选）请求头信息（如指定将与全局设置合并）。
   * @param {String | Object} options.data （可选）请求正文（GET 请求时该设置无效）。
   * @param {Number} options.timeout （可选）超时时间（单位：毫秒。如指定将覆盖全局设置）。
   * @param {Boolean} options.withCredentials （可选）是否使用跨域访问控制（如指定将覆盖全局设置）。
   * @param {Function} options.onDownloadProgress （可选）下载进度回调。
   * @param {Function} options.onUploadProgress （可选）上传进度回调。
   */
  request(options?: any): Promise<any>;

  /**
   * 以 GET 方式发起一个下载请求。
   * @param {Object} options 参数。
   * @param {String} options.url （可选）请求相对路径。
   * @param {String | Object | Array} options.query （可选）请求查询参数。
   * @param {Object | Array} options.headers （可选）请求头信息（如指定将与全局设置合并）。
   * @param {Function} options.onDownloadProgress （可选）下载进度回调。
   */
  download(options?: any): Promise<any>;

  /**
   * 以 POST 方式发起一个上传请求。
   * @param {Object} options 参数。
   * @param {String} options.url （可选）请求相对路径。
   * @param {String | Object | Array} options.query （可选）请求查询参数。
   * @param {Object | Array} options.headers （可选）请求头信息（如指定将与全局设置合并）。
   * @param {String | Object} options.filePath 要上传文件的路径。
   * @param {String | Object} options.name 要上传文件的标识。
   * @param {String | Object} options.data （可选）请求正文。
   * @param {Function} options.onUploadProgress （可选）上传进度回调。
   */
  upload(options?: any): Promise<any>;

  /**
   * 发起一个 GET 请求。
   * @param {Object} options 参数。
   */
  get(options?: any): Promise<any>;

  /**
   * 发起一个 POST 请求。
   * @param {Object} options 参数。
   */
  post(options?: any): Promise<any>;

  /**
   * 发起一个 PUT 请求。
   * @param {Object} options 参数。
   */
  put(options?: any): Promise<any>;

  /**
   * 发起一个 PATCH 请求。
   * @param {Object} options 参数。
   */
  patch(options?: any): Promise<any>;

  /**
   * 发起一个 DELETE 请求。
   * @param {Object} options 参数。
   */
  delete(options?: any): Promise<any>;
}

export interface RequestUtilConstructor<T extends RequestUtil = RequestUtil> {
  /**
   * 创建一个请求器。
   * @param {Object} config 配置。
   * @param {String} config.baseUrl （可选）请求基地址。
   * @param {Object} config.headers （可选）请求头信息。
   * @param {Number} config.timeout （可选）超时时间（单位：毫秒。默认值 30000）。
   * @param {Boolean} config.withCredentials （可选）是否使用跨域访问控制（默认值 false）。
   */
  create(config?: any): RequestUtil;

  /**
   * 使用默认配置发起一个 GET 请求。
   * @param {Object} options 参数。
   */
  get(options?: any): Promise<any>;

  /**
   * 使用默认配置发起一个 POST 请求。
   * @param {Object} options 参数。
   */
  post(options?: any): Promise<any>;

  /**
   * 使用默认配置发起一个 PUT 请求。
   * @param {Object} options 参数。
   */
  put(options?: any): Promise<any>;

  /**
   * 使用默认配置发起一个 PATCH 请求。
   * @param {Object} options 参数。
   */
  patch(options?: any): Promise<any>;

  /**
   * 使用默认配置发起一个 DELETE 请求。
   * @param {Object} options 参数。
   */
  delete(options?: any): Promise<any>;
}

declare namespace STEP.JSUtils {
  export const $$request: RequestUtilConstructor;
}
