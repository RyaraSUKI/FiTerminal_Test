import './each.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 移除集合中每个元素上的指定属性
         * @param attributeName 属性名，多个属性名可以用空格分隔
         * @example
    ```js
    // 移除一个属性
    $('div').removeAttr('title')
    ```
         * @example
    ```js
    // 移除多个属性
    $('div').removeAttr('title label');
    ```
         */
        removeAttr(attributeName: string): this;
    }
}
