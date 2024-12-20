import './each.js';
import './insertAfter.js';
import './insertBefore.js';
import type { HTMLString, TypeOrArray } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 在当前元素前面插入指定内容，作为其兄弟节点。支持传入多个参数。
         * @param contents HTML 字符串、DOM 元素、DOM 元素数组、或 JQ 对象
         * @returns 原始集合
         * @example
    ```js
    $('<p>I would like to say: </p>').before('<b>Hello</b>')
    // <b>Hello</b><p>I would like to say: </p>
    ```
         * @example
    ```js
    $('<p>I would like to say: </p>').before('<b>Hello</b>', '<b>World</b>')
    // <b>Hello</b><b>World</b><p>I would like to say: </p>
    ```
         */
        before(...contents: Array<HTMLString | TypeOrArray<Node> | JQ<Node>>): this;
        /**
         * 在当前元素前面插入指定内容，作为其兄弟节点
         * @param callback
         * 一个返回 HTML 字符串、DOM 元素、DOM 元素数组、或 JQ 对象的回调函数
         *
         * 函数的第一个参数为元素的索引位置，第二个参数为元素的旧的 HTML 值，`this` 指向当前元素
         * @returns 原始集合
         * @example
    ```js
    $('<p>Hello</p>').before(function (index, html) {
      return '<b>' + html + index + '</b>';
    });
    // <b>Hello0</b><p>Hello</p>
    ```
         */
        before(callback: (this: T, index: number, oldHtml: string) => HTMLString | TypeOrArray<Node> | JQ<Node>): this;
    }
}
