import './add.js';
import './nextAll.js';
import './prevAll.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 获取当前集合中，每个元素的兄弟元素
         * @param selector CSS 选择器。若指定了该参数，则只返回和该参数匹配的兄弟元素
         * @example
    ```js
    // 获取 .box 元素的所有兄弟元素
    $('.box').siblings()
    ```
         * @example
    ```js
    // 获取 .box 元素的所有兄弟元素中含 .selected 的元素
    $('.box').siblings('.selected')
    ```
         */
        siblings(selector?: Selector): this;
    }
}
