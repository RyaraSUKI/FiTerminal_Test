import './children.js';
import './eq.js';
import './get.js';
import './parent.js';
import type { Selector } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 如果没有传入参数，则返回当前集合中第一个元素相对于同辈元素的索引值。
         *
         * 如果传入一个 CSS 选择器作为参数，则返回当前集合中第一个元素相对于 CSS 选择器匹配元素的索引值。
         *
         * 如果传入一个 DOM 元素，则返回该 DOM 元素在当前集合中的索引值。
         *
         * 如果传入一个 JQ 对象，则返回对象中第一个元素在当前集合中的索引值。
         * @param selector CSS 选择器、DOM 元素、JQ 对象
         */
        index(selector?: Selector | Element | JQ): number;
    }
}
