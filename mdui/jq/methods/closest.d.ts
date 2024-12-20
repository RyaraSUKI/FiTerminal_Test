import './eq.js';
import './is.js';
import './parents.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 从当前元素向上逐级匹配，返回最先匹配到的元素
         * @param selector CSS 选择器、DOM 元素、或 JQ 对象
         * @example
    ```js
    // 获取 .box 元素的父元素中最近的 .parent 元素
    $('.box').closest('.parent')
    ```
         */
        closest(selector: Selector | Element | JQ): this;
    }
}
