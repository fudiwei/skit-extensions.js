(function moduleDefinition(root, factory) {
    const $ = '$$request';

    if ('object' === typeof wx && 'object' === typeof module && !!wx.login) {
        module.exports[$] = factory(); // Wechat Mini-Program
    } else if ('object' === typeof my && 'object' === typeof module && !!my.login) {
        module.exports[$] = factory(); // Alipay Mini-Program
    } else if ('object' === typeof swan && 'object' === typeof module && !!swan.login) {
        module.exports[$] = factory(); // Baidu Smart-Program
    } else if ('object' === typeof tt && 'object' === typeof module && !!tt.login) {
        module.exports[$] = factory(); // Toutiao Mini-App
    } else if ('object' === typeof exports && 'object' === typeof module) {
        module.exports[$] = factory(); // CommonJS
    } else if ('function' === typeof define && (define.amd || define.cmd)) {
        define(factory); // AMD/CMD
    } else if ('object' === typeof exports) {
        exports[$] = factory();
    } else if (root) {
        root[$] = factory();
    }
})(this, (() => {
    'use strict';

    let rootObj;
    if ('object' === typeof wx && 'function' === typeof wx['canIUse']) {
        rootObj = wx;
    } else if ('object' === typeof my && 'function' === typeof my['canIUse']) {
        rootObj = my;
    } else if ('object' === typeof swan && 'function' === typeof swan['canIUse']) {
        rootObj = swan;
    } else if ('object' === typeof tt && 'function' === typeof tt['caniuse']) {
        rootObj = tt;
    }

    const isArray = (obj) => '[object Array]' === Object.prototype.toString.call(obj);
    const isBoolean = (obj) => '[object Boolean]' === Object.prototype.toString.call(obj);
    const isFormData = (obj) => '[object FormData]' === Object.prototype.toString.call(obj);
    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);
    const isNumber = (obj) => '[object Number]' === Object.prototype.toString.call(obj);
    const isObject = (obj) => '[object Object]' === Object.prototype.toString.call(obj);
    const isString = (obj) => '[object String]' === Object.prototype.toString.call(obj);
    const noop = () => {};

    const defaultConfig = {
        baseUrl: '',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        timeout: 30000,
        withCredentials: false
    };

    const parseUrl = (baseUrl = '', relativeUrl = '', query) => {
        let res = '';
        if (isString(baseUrl)) {
            res += baseUrl;
        }

        if (isArray(relativeUrl)) {
            relativeUrl = relativeUrl.join('/');
        } else if (isString(relativeUrl)) {
            if (res.endsWith('/') && relativeUrl.startsWith('/')) {
                relativeUrl = relativeUrl.replace('/', '');
            }
        } else {
            relativeUrl = '';
        }
        res += relativeUrl;

        if (isArray(query) || isObject(query)) {
            const params = [];
            const encode = (val) => encodeURIComponent(val)
                .replace(/%40/gi, '@')
                .replace(/%3A/gi, ':')
                .replace(/%24/g, '$')
                .replace(/%2C/gi, ',')
                .replace(/%20/g, '+')
                .replace(/%5B/gi, '[')
                .replace(/%5D/gi, ']');

            for (let k in query) {
                params.push(encode(k) + '=' + query[k]);
            }

            if (params.length > 0) {
                query = '?' + params.join('&');
            }
        } else if (isString(query)) {
            if (res.endsWith('?') && query.startsWith('?')) {
                query = query.replace('?', '');
            }
        } else {
            query = '';
        }
        res += query;

        return res;
    };

    const parseHeaders = (...headers) => {
        const res = {};
        const parser = (line) => {
            const i = line.indexOf(':');
            const key = String(line.substr(0, i)).trim();
            const val = String(line.substr(i + 1)).trim();
            if (key) {
                res[key] = val;
            }
        };
        const setter = (val) => {
            if (isString(val)) {
                val.split('\n').forEach((line) => parser(line));
            } else if (isObject(val)) {
                for (let k in val) {
                    res[k] = val[k];
                }
            }
        };

        headers.forEach(item => setter(item));

        return res;
    };

    const parseData = (data) => {
        if (isObject(data) || isArray(data)) {
            return JSON.stringify(data);
        } else if (isFormData(data)) {
            return data;
        } else if (void 0 === data || null === data) {
            return '';
        } else {
            return String(data);
        }
    };

    const assignOptions = (method = '', options = {}) => {
        options = options || {};
        if (isString(options)) {
            options = {
                url: options
            };
        }

        return {
            method: method,
            url: options.url,
            query: options.query,
            headers: options.headers,
            timeout: options.timeout,
            data: 'GET' === String(method).toUpperCase() ? null : options.data,
            withCredentials: Boolean(options.withCredentials),
            onDownloadProgress: isFunction(options.onDownloadProgress) ? options.onDownloadProgress : noop,
            onUploadProgress: isFunction(options.onUploadProgress) ? options.onUploadProgress : noop
        };
    };

    const createError = (message = '', code = 0, options = {}, response) => {
        const error = new Error(message);
        error.code = code;
        error.options = options;
        error.response = response;
        return error;
    };

    /**
     * 
     */
    class RequestFactory {
        constructor(config = {}) {
            config = {
                baseUrl: isString(config.baseUrl) ? config.baseUrl : undefined,
                headers: isArray(config.headers) ? config.headers : undefined,
                timeout: isNumber(config.timeout) ? config.timeout : undefined,
                withCredentials: isBoolean(config.withCredentials) ? config.withCredentials : undefined
            };
            Object.defineProperty(this, 'config', {
                value: config,
                enumerable: true,
                writable: false
            });
        }

        request(options = {}) {
            options = {
                method: String(options.method || 'get').toUpperCase(),
                url: parseUrl(
                    (this.config.baseUrl || defaultConfig.baseUrl),
                    options.url,
                    options.query
                ),
                headers: parseHeaders(
                    defaultConfig.headers,
                    this.config.headers,
                    options.headers
                ),
                data: parseData(options.data),
                timeout: Number(this.config.timeout) || Number(options.timeout) || Number(defaultConfig.timeout),
                withCredentials: Boolean((void 0 !== this.config.withCredentials) ? this.config.withCredentials : defaultConfig.withCredentials),
                onDownloadProgress: isFunction(options.onDownloadProgress) ? options.onDownloadProgress : noop,
                onUploadProgress: isFunction(options.onUploadProgress) ? options.onUploadProgress : noop
            };

            if (!!rootObj) {
                return new Promise((resolve, reject) => {
                    rootObj.request({
                        method: options.method,
                        url: options.url,
                        header: options.headers, // for Wechat / Baidu / Toutiao
                        headers: options.headers, // for Alipay
                        data: options.data,
                        dataType: '',
                        success: (res) => {
                            let responseData;
                            try {
                                responseData = res.data || JSON.parse(res.data);
                            } catch (err) {
                                responseData = res.data;
                            }

                            const response = new Response(
                                res.statusCode,
                                res.errMsg,
                                (!!res.header) ? parseHeaders(res.header) : (!!res.headers) ? parseHeaders(res.headers) : null,
                                responseData
                            );

                            if (response.statusCode >= 200 && response.statusCode < 400) {
                                resolve(response);
                            } else {
                                reject(createError(`Request failed with status code ${response.statusCode}.`, response.statusCode, options, response));
                            }
                        },
                        fail: (err) => {
                            reject(createError(`Network error(${err && err.errMsg}).`, 0, options));
                        }
                    });
                });
            } else if (void 0 !== typeof(XMLHttpRequest)) {
                return new Promise((resolve, reject) => {
                    let xhr = new XMLHttpRequest();
                    xhr.open(options.method, options.url, true);
                    for (let k in options.headers) {
                        if (isFormData(options.data) && 'content-type' === String(k).toLowerCase()) {
                            // FormData 不要显式设置 Content-Type，浏览器会自动按 multipart/form-data 处理
                            continue;
                        }
                        xhr.setRequestHeader(k, options.headers[k]);
                    }
                    xhr.timeout = options.timeout;
                    xhr.withCredentials = options.withCredentials;
                    xhr.onreadystatechange = () => {
                        if (4 !== xhr.readyState) {
                            return;
                        }

                        let responseData;
                        try {
                            responseData = JSON.parse(xhr.responseText);
                        } catch (err) {
                            responseData = xhr.response || xhr.responseText;
                        }

                        const response = new Response(
                            (1223 === xhr.status) ? 204 : xhr.status,
                            (1223 === xhr.status) ? 'No Content' : xhr.statusText,
                            (!!xhr.getAllResponseHeaders) ? parseHeaders(xhr.getAllResponseHeaders()) : null,
                            responseData
                        );

                        if (response.statusCode >= 200 && response.statusCode < 400) {
                            resolve(response);
                        } else {
                            reject(createError(`Request failed with status code ${response.statusCode}.`, response.statusCode, options, response));
                        }

                        xhr = null;
                    };
                    xhr.onerror = () => {
                        reject(createError(`Network error.`, 0, options));
                        xhr = null;
                    };
                    xhr.ontimeout = () => {
                        reject(createError(`Request timeout of expected milliseconds exceeded.`, 'ECONNABORTED', options));
                        xhr = null;
                    };
                    xhr.onprogress = (e) => {
                        const downloadProgress = new Progress(e.total, e.loaded);
                        options.onDownloadProgress.apply(this, [downloadProgress]);
                    };
                    if (!!xhr.upload && !!xhr.upload.onprogress) {
                        xhr.upload.onprogress = (e) => {
                            const uploadProgress = new Progress(e.total, e.loaded);
                            options.onUploadProgress.apply(this, [uploadProgress]);
                        };
                    }
                    xhr.send(options.data);
                });
            } else {
                throw new Error(`Current environment does not supported $$request.request().`);
            }
        }

        download(options = {}) {
            options = {
                method: String(options.method || 'get').toUpperCase(),
                url: parseUrl(
                    (this.config.baseUrl || defaultConfig.baseUrl),
                    options.url,
                    options.query
                ),
                headers: parseHeaders(
                    defaultConfig.headers,
                    this.config.headers,
                    options.headers
                ),
                data: parseData(options.data),
                onDownloadProgress: isFunction(options.onDownloadProgress) ? options.onDownloadProgress : noop
            };

            if (!!rootObj) {
                return new Promise((resolve, reject) => {
                    let responseHeaders = {};

                    const downloadTask = rootObj.downloadFile({
                        url: options.url,
                        header: options.headers,
                        success: (res) => {
                            let responseData = { tempFilePath: res.tempFilePath || res.apFilePath };
                            const response = new Response(
                                (!!res.apFilePath ? 200 : res.statusCode),
                                '',
                                responseHeaders,
                                responseData
                            );

                            if (response.statusCode >= 200 && response.statusCode < 400) {
                                resolve(response);
                            } else {
                                reject(createError(`Request failed with status code ${response.statusCode}.`, response.statusCode, options, response));
                            }
                        },
                        fail: (err) => {
                            reject(createError(`Network error(${err && err.errMsg}).`, 0, options));
                        }
                    });

                    if (!!downloadTask) {
                        if (!!downloadTask.onHeadersReceived) {
                            const onHeadersReceivedCallback = (res) => {
                                responseHeaders = parseHeaders(res.header);
                                downloadTask.offHeadersReceived(onHeadersReceivedCallback);
                            }
                            downloadTask.onHeadersReceived(onHeadersReceivedCallback);
                        }

                        if (!!downloadTask.onProgressUpdate) {
                            downloadTask.onProgressUpdate((res) => {
                                const downloadProgress = new Progress(res.totalBytesExpectedToWrite, res.totalBytesWritten);
                                options.onDownloadProgress.apply(this, [downloadProgress]);
                            });
                        }
                    }
                });
            } else {
                throw new Error(`Current environment does not supported $$request.download().`);
            }
        }

        upload(options = {}) {
            options = {
                method: String(options.method || 'get').toUpperCase(),
                url: parseUrl(
                    (this.config.baseUrl || defaultConfig.baseUrl),
                    options.url,
                    options.query
                ),
                headers: parseHeaders(
                    defaultConfig.headers,
                    this.config.headers,
                    options.headers
                ),
                filePath: String(options.filePath || ''),
                name: String(options.name || ''),
                data: isObject(options.data) ? options.data : {},
                onUploadProgress: isFunction(options.onUploadProgress) ? options.onUploadProgress : noop
            };

            if (!!rootObj) {
                return new Promise((resolve, reject) => {
                    let responseHeaders = {};

                    rootObj.uploadFile({
                        url: options.url,
                        header: options.headers,
                        filePath: options.filePath,
                        name: options.name, // for Wechat / Baidu / Toutiao
                        fileName: options.name, // for Alipay
                        formData: options.data,
                        success: (res) => {
                            let responseData;
                            try {
                                responseData = res.data || JSON.parse(res.data);
                            } catch (err) {
                                responseData = res.data;
                            }

                            const response = new Response(
                                res.statusCode,
                                '',
                                (!!res.header ? parseHeaders(res.header) : responseHeaders),
                                responseData
                            );

                            if (response.statusCode >= 200 && response.statusCode < 400) {
                                resolve(response);
                            } else {
                                reject(createError(`Request failed with status code ${response.statusCode}.`, response.statusCode, options, response));
                            }
                        },
                        fail: (err) => {
                            reject(createError(`Network error(${err && err.errMsg}).`, 0, options));
                        }
                    });

                    if (!!uploadTask) {
                        if (!!uploadTask.onHeadersReceived) {
                            const onHeadersReceivedCallback = (res) => {
                                responseHeaders = parseHeaders(res.header);
                                uploadTask.offHeadersReceived(onHeadersReceivedCallback);
                            }
                            uploadTask.onHeadersReceived(onHeadersReceivedCallback);
                        }

                        if (!!uploadTask.onProgressUpdate) {
                            uploadTask.onProgressUpdate((res) => {
                                const uploadProgress = new Progress(res.totalBytesExpectedToSend, res.totalBytesSent);
                                options.onUploadProgress.apply(this, [uploadProgress]);
                            });
                        }
                    }
                });
            } else {
                throw new Error(`Current environment does not supported $$request.upload().`);
            }
        }

        get(options) {
            return this.request(assignOptions('get', options));
        }

        post(options) {
            return this.request(assignOptions('post', options));
        }

        put(options) {
            return this.request(assignOptions('put', options));
        }

        patch(options) {
            return this.request(assignOptions('patch', options));
        }

        delete(options) {
            return this.request(assignOptions('delete', options));
        }

        static create(config = {}) {
            return new RequestFactory(config);
        }

        static get(options) {
            return this.create().request(assignOptions('get', options));
        }

        static post(options) {
            return this.create().request(assignOptions('post', options));
        }

        static put(options) {
            return this.create().request(assignOptions('put', options));
        }

        static patch(options) {
            return this.create().request(assignOptions('patch', options));
        }

        static delete(options) {
            return this.create().request(assignOptions('delete', options));
        }
    }

    /**
     * 
     */
    class Response {
        /**
         * 
         * @param {Number} statusCode 响应状态码。
         * @param {String} statusText 响应状态。
         * @param {Object | Map} headers 响应头。
         * @param {Object | String | ArrayBuffer} data 响应正文。
         */
        constructor(statusCode = 0, statusText = '', headers = {}, data = null) {
            Object.defineProperty(this, 'statusCode', {
                value: +statusCode,
                enumerable: true,
                writable: false
            });
            Object.defineProperty(this, 'statusText', {
                value: String(statusText || ''),
                enumerable: true,
                writable: false
            });
            Object.defineProperty(this, 'headers', {
                value: headers,
                enumerable: true,
                writable: false
            });
            Object.defineProperty(this, 'data', {
                value: data,
                enumerable: true,
                writable: false
            });
        }
    }

    /**
     * 
     */
    class Progress {
        /**
         * 
         * @param {Number} total 预计总字节数。
         * @param {Number} loaded 已加载/上传/下载字节数。
         */
        constructor(total = 0, loaded = 0) {
            Object.defineProperty(this, 'total', {
                value: +total,
                enumerable: true,
                writable: false
            });
            Object.defineProperty(this, 'loaded', {
                value: +loaded,
                enumerable: true,
                writable: false
            });
        }
    }

    return RequestFactory;
}));