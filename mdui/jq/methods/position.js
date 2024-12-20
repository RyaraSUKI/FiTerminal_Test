import { $ } from '../$.js';
import './css.js';
import './eq.js';
import './offset.js';
import './offsetParent.js';
const floatStyle = ($element, name) => {
    return parseFloat($element.css(name));
};
// @ts-ignore
$.fn.position = function () {
    if (!this.length) {
        return undefined;
    }
    const $element = this.eq(0);
    let currentOffset;
    let parentOffset = {
        left: 0,
        top: 0,
    };
    if ($element.css('position') === 'fixed') {
        currentOffset = $element[0].getBoundingClientRect();
    }
    else {
        currentOffset = $element.offset();
        const $offsetParent = $element.offsetParent();
        parentOffset = $offsetParent.offset();
        parentOffset.top += floatStyle($offsetParent, 'border-top-width');
        parentOffset.left += floatStyle($offsetParent, 'border-left-width');
    }
    return {
        top: currentOffset.top - parentOffset.top - floatStyle($element, 'margin-top'),
        left: currentOffset.left -
            parentOffset.left -
            floatStyle($element, 'margin-left'),
    };
};
