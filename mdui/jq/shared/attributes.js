import { isNull } from './helper.js';
/**
 * 获取属性值
 * @param element
 * @param key 属性键名
 * @param defaultValue 当 element.getAttribute 为 null 时，默认返回 undefined
 */
export const getAttribute = (element, key, defaultValue) => {
    const value = element.getAttribute(key);
    return isNull(value) ? defaultValue : value;
};
/**
 * 移除属性
 * @param element
 * @param key 属性键名
 */
export const removeAttribute = (element, key) => {
    element.removeAttribute(key);
};
/**
 * 设置属性值
 * @param element
 * @param key 属性键名
 * @param value 值，若为 null，则调用 removeAttribute
 */
export const setAttribute = (element, key, value) => {
    isNull(value)
        ? removeAttribute(element, key)
        : element.setAttribute(key, value);
};
