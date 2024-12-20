import './get.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 获取当前集合中，所有元素的直接父元素的集合
         * @param selector CSS 选择器。若指定了该参数，则仅返回与该参数匹配的父元素的集合
         * @example
    ```js
    // 返回 .box 元素的直接父元素的集合
    $('.box').parent()
    ```
         * @example
    ```js
    // 返回 .box 元素的直接父元素中含有 .parent 元素的集合
    $('.box').parent('.parent')
    ```
         */
        parent(selector?: Selector): this;
    }
}
