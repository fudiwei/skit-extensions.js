export namespace STEP.JSUtils {
    interface Request {
        /**
         * 获取或设置请求 URL。
         */
        url?: string;
        /**
         * 获取或设置请求查询参数。
         */
        query?: string | { [key: string]: string | number | boolean | null | undefined };
        /**
         * 获取或设置请求标头。
         */
        headers?: { [key: string]: string };
        /**
         * 获取或设置请求正文。
         */
        data?: string | any;
        /**
         * 获取或设置请求超时时间（单位：毫秒）。
         */
        timeout?: number;
        /**
         * 获取或设置是否使用跨域请求验证。
         */
        withCredentials?: boolean;
    }

    interface RequestEx extends Request {
        /**
         * 获取或设置请求方式。
         */
        method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
        /**
         * 获取或设置下载回调函数。
         */
        onDownloadProgress?: (e: Progress) => {};
        /**
         * 获取或设置上传回调函数。
         */
        onUploadProgress?: (e: Progress) => {};
    }

    interface Response {
        /**
         * 获取或设置响应 HTTP 状态码。
         */
        statusCode: number;
        /**
         * 获取或设置响应 HTTP 状态描述。
         */
        statusText: string;
        /**
         * 获取或设置响应标头。
         */
        headers: { [key: string]: string };
        /**
         * 获取或设置响应正文。
         */
        data: any;
    }

    interface Progress {
        /**
         * 获取预计总字节数。
         */
        total: number;
        /**
         * 获取已加载/上传/下载字节数。
         */
        loaded: number;
    }

    export interface RequestUtil {
        /**
         * 发起一个 HTTP 请求。
         * @param {Object} options 参数。
         * @param {String} options.method （可选）请求谓词（默认值 GET）。
         * @param {String} options.url （可选）请求相对路径。
         * @param {String | Object} options.query （可选）请求查询参数。
         * @param {Object} options.headers （可选）请求头信息（如指定将与全局设置合并）。
         * @param {String | Object} options.data （可选）请求正文（GET 请求时该设置无效）。
         * @param {Number} options.timeout （可选）超时时间（单位：毫秒。如指定将覆盖全局设置）。
         * @param {Boolean} options.withCredentials （可选）是否使用跨域访问控制（如指定将覆盖全局设置）。
         * @param {Function} options.onDownloadProgress （可选）下载进度回调。
         * @param {Function} options.onUploadProgress （可选）上传进度回调。
         */
        request(options?: RequestEx): Promise<Response>;

        /**
         * 以 GET 方式发起一个下载请求。
         * @param {Object} options 参数。
         * @param {String} options.url （可选）请求相对路径。
         * @param {String | Object} options.query （可选）请求查询参数。
         * @param {Object} options.headers （可选）请求头信息（如指定将与全局设置合并）。
         * @param {Function} options.onDownloadProgress （可选）下载进度回调。
         */
        download(options?: {
            url?: string;
            query?: string | { [key: string]: string | number | boolean | null | undefined };
            headers?: { [key: string]: string };
            onDownloadProgress?: (e: Progress) => {};
        }): Promise<Response>;

        /**
         * 以 POST 方式发起一个上传请求。
         * @param {Object} options 参数。
         * @param {String} options.url （可选）请求相对路径。
         * @param {String | Object} options.query （可选）请求查询参数。
         * @param {Object} options.headers （可选）请求头信息（如指定将与全局设置合并）。
         * @param {String | Object} options.filePath 要上传文件的路径。
         * @param {String | Object} options.name 要上传文件的标识。
         * @param {String | Object} options.data （可选）请求正文。
         * @param {Function} options.onUploadProgress （可选）上传进度回调。
         */
        upload(options?: {
            url?: string;
            query?: string | { [key: string]: string | number | boolean | null | undefined };
            headers?: { [key: string]: string };
            filePath: string | any;
            name: string | any;
            data?: string | any;
            onUploadProgress?: (e: Progress) => {};
        }): Promise<Response>;

        /**
         * 发起一个 GET 请求。
         * @param {Object} options 参数。
         */
        get(options?: Request): Promise<Response>;

        /**
         * 发起一个 POST 请求。
         * @param {Object} options 参数。
         */
        post(options?: Request): Promise<Response>;

        /**
         * 发起一个 PUT 请求。
         * @param {Object} options 参数。
         */
        put(options?: Request): Promise<Response>;

        /**
         * 发起一个 PATCH 请求。
         * @param {Object} options 参数。
         */
        patch(options?: Request): Promise<Response>;

        /**
         * 发起一个 DELETE 请求。
         * @param {Object} options 参数。
         */
        delete(options?: Request): Promise<Response>;
    }

    export interface RequestUtilConstructor<T extends RequestUtil = RequestUtil> {
        /**
         * 创建一个请求器。
         * @param {Object} config 配置。
         * @param {String} config.baseUrl （可选）基地址。
         * @param {Object} config.headers （可选）默认请求头信息。
         * @param {Number} config.timeout （可选）默认超时时间（单位：毫秒。默认值 30000）。
         * @param {Boolean} config.withCredentials （可选）默认是否使用跨域访问控制（默认值 false）。
         */
        create(config?: {
            baseUrl?: string;
            headers?: { [key: string]: string };
            timeout?: number;
            withCredentials?: boolean;
        }): RequestUtil;

        /**
         * 使用默认配置发起一个 GET 请求。
         * @param {Object} options 参数。
         */
        get(options?: Request): Promise<Response>;

        /**
         * 使用默认配置发起一个 POST 请求。
         * @param {Object} options 参数。
         */
        post(options?: Request): Promise<Response>;

        /**
         * 使用默认配置发起一个 PUT 请求。
         * @param {Object} options 参数。
         */
        put(options?: Request): Promise<Response>;

        /**
         * 使用默认配置发起一个 PATCH 请求。
         * @param {Object} options 参数。
         */
        patch(options?: Request): Promise<Response>;

        /**
         * 使用默认配置发起一个 DELETE 请求。
         * @param {Object} options 参数。
         */
        delete(options?: Request): Promise<Response>;
    }

    export const $$request: RequestUtilConstructor;
}
