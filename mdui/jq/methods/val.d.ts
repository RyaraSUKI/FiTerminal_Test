import './each.js';
import './find.js';
import './is.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 设置集合中每个元素的值
         * @param value
         * 元素的值。可以是字符串、数值、字符串数组、或回调函数
         *
         * 回调函数的第一个参数为元素的索引位置，第二个参数为元素的原有的值，`this` 指向当前元素
         *
         * 若元素为 `<input type="checkbox">`、`<input type="radio">`、`<option>`，则元素值、或函数返回值可以为数组，此时将选中值在数组中的元素，并取消选中值不在数组中的元素
         *
         * 若元素值、或函数返回值为 `undefined`，则会将元素值设为空
         * @example
    ```js
    $('#input').val('input value')
    ```
         */
        val(value: string | number | string[] | undefined | ((this: T, inDex: number, oldValue: string | number | string[]) => string | number | string[] | void | undefined)): this;
        /**
         * 获取集合中第一个元素的值
         *
         * 对于 `<select multiple="multiple">` 元素，将返回一个包含每个选择项的数组
         * @example
    ```js
    $('#input').val()
    ```
         */
        val(): string | number | string[] | undefined;
    }
}
