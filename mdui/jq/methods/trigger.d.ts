import './each.js';
import type { PlainObject } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 触发指定的事件
         * @param type 事件名
         * @param detail 传给事件处理函数的额外参数
         * @param options CustomEvent 的初始化参数
         * @example ````触发 .box 元素上的 click 事件
    ```js
    $('.box').trigger('click');
    ```
         * @example ````触发 .box 元素上的 click 事件，并给事件处理函数传入额外参数
    ```js
    $('.box').trigger('click', {key1: 'value1', key2: 'value2'});
    ```
         */
        trigger(type: string, detail?: unknown[] | PlainObject | string | number | boolean, options?: CustomEventInit): this;
    }
}
