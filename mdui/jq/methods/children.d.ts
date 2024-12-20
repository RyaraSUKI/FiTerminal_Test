import './each.js';
import './is.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 在当前集合的所有元素中，获取直接子元素组成的集合。
         * @param selector CSS 选择器。若指定了该参数，则使用该参数对子元素进行过滤
         * @example
    ```js
    // 找到 #box 的所有直接子元素
    $('#box').children()
    ```
         * @example
    ```js
    // 找到 #box 的所有直接子元素中，包含 .box 的元素集合
    $('#box').children('.box')
    ```
         */
        children(selector?: Selector): this;
    }
}
