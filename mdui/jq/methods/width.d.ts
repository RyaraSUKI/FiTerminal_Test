import './css.js';
import './each.js';
type Value = string | number | null | undefined;
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 设置集合中所有元素的宽度（不包含 `padding`, `border`, `margin` 的宽度）。
         * @param value
         * 可以是带单位的字符串，或者数值；或者是返回带单位的字符串或数值的回调函数。
         *
         * 回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的宽度值，`this` 指向当前元素。
         *
         * 若该值、或函数返回值是数值，则自动添加 `px` 作为单位。
         *
         * 若该值、或函数返回值是 `null` 或 `undefined`，则不修改元素的宽度。
         * @example
    ```js
    $('.box').width('20%');
    ```
         * @example
    ```js
    $('.box').width(10);
    ```
         */
        width(value: Value | ((this: T, index: number, oldValue: number) => Value | void)): this;
        /**
         * 获取集合中第一个元素的宽度（像素值），不包含 `padding`, `border`, `margin` 的宽度
         * @example
    ```js
    $('.box').width();
    ```
         */
        width(): number;
    }
}
export {};
