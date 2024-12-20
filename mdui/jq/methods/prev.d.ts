import './get.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 获取当前集合中每个元素的前一个匹配的同辈元素
         * @param selector CSS 选择器。指定该参数时，将仅返回和该参数匹配的元素的集合
         * @example
    ```js
    // 获取 .box 元素的前一个元素的集合
    $('.box').prev()
    ```
         * @example
    ```js
    // 获取 .box 元素的前一个 div 元素的集合
    $('.box').prev('div')
    ```
         */
        prev(selector?: Selector): this;
    }
}
