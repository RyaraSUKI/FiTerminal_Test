import './serializeArray.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 把表单元素的值编译为字符串
         * @example
    ```js
    $('form').serialize();
    // golang=456&name=mdui&password=
    ```
         */
        serialize(): string;
    }
}
