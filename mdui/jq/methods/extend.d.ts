import type { PlainObject } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 在 $ 的原型链上扩展方法
         * @param obj
         * @example
    ```js
    $.fn.extend({
      customFunc: function () {}
    })
    
    // 然后就可以这样使用扩展的方法了
    $(document).customFunc()
    ```
         */
        extend(obj: PlainObject): this;
    }
}
