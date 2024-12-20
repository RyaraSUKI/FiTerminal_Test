import './each.js';
import type { EventCallback } from '../shared/event.js';
import type { PlainObject } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 解除通过事件委托绑定的指定事件
         * @param eventName
         * 事件名称，多个事件名可以用空格分隔，如 `click`, `click dbclick`
         *
         * 事件名中可以包含命名空间，或者只包含命名空间，如 `keydown.myPlugin`, `.myPlugin`。
         * @param selector CSS 选择器
         * @param callback 事件处理函数
         * @example
    ```js
    $(document).off('click', '.box', functionName);
    ```
         * @example
    ```js
    $(document).off('click dbclick', '.box', functionName);
    ```
         * @example
    ```js
    $(document).off('click', '.box');
    ```
         * @example
    ```js
    $(document).off('click dbclick', '.box');
    ```
         */
        off(eventName: string, selector: string, callback?: EventCallback<unknown, T> | false): this;
        /**
         * 解除绑定的指定事件
         * @param eventName
         * 事件名称，多个事件名可以用空格分隔，如 `click`, `click dbclick`
         *
         * 事件名中可以包含命名空间，或者只包含命名空间，如 `keydown.myPlugin`, `.myPlugin`。
         * @param callback 事件处理函数
         * @example
    ```js
    $('.box').off('click', functionName);
    ```
         * @example
    ```js
    $('.box').off('click dbclick', functionName);
    ```
         * @example
    ```js
    $('.box').off('click');
    ```
         * @example
    ```js
    $('.box').off('click dbclick');
    ```
         */
        off(eventName: string, callback?: EventCallback<unknown, T> | false): this;
        /**
         * 同时移除多个事件处理函数
         * @param events
         * 一个对象：
         *
         * 键名为事件名，多个事件名用空格分隔，可包含命名空间；
         *
         * 键值为事件处理函数
         * @param selector CSS 选择器
         * @example
    ```js
    $('.wrapper').off({
      'click': functionName,
      'dbclick': functionName,
    }, '.box')
    ```
         * @example
    ```js
    $('.wrapper').off({
      'click': functionName,
      'dbclick': functionName,
    })
    ```
         */
        off(events: PlainObject<EventCallback<unknown, T> | false>, selector?: string): this;
        /**
         * 删除所有绑定的事件处理函数
         * @example
    ```js
    $('.wrapper').off();
    ```
         */
        off(): this;
    }
}
