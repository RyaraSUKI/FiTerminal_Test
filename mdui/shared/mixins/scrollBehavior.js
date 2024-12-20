import { __decorate } from "tslib";
import { property } from 'lit/decorators.js';
import { $ } from '@mdui/jq/$.js';
import '@mdui/jq/methods/css.js';
import { isNodeName } from '@mdui/jq/shared/helper.js';
import { DefinedController } from '../controllers/defined.js';
import { watch } from '../decorators/watch.js';
/**
 * 如果同时有多个组件在同一个元素上设置了 padding-top 或 padding-bottom，则移除其中一个组件时，不移除 padding-top 或 padding-bottom
 * 键为添加 padding 的目标元素，值为在分别在 top 和 bottom 上添加的组件数组
 */
const weakMap = new WeakMap();
/**
 * 滚动行为
 *
 * 父类需要实现
 * @property() public scrollBehavior
 * protected runScrollThreshold(isScrollingUp: boolean, scrollTop: number): void;
 * protected runScrollNoThreshold(isScrollingUp: boolean, scrollTop: number): void;
 * protected get scrollPaddingPosition(): ScrollPaddingPosition
 */
export const ScrollBehaviorMixin = (superclass) => {
    class ScrollBehaviorMixinClass extends superclass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            this.scrollBehaviorDefinedController = new DefinedController(this, {
                needDomReady: true,
            });
            /**
             * 上次滚动后，垂直方向的距离（滚动距离超过 scrollThreshold 才记录）
             */
            this.lastScrollTopThreshold = 0;
            /**
             * 上次滚动后，垂直方向的距离（无视 scrollThreshold，始终记录）
             */
            this.lastScrollTopNoThreshold = 0;
            /**
             * 父元素是否是 `mdui-layout`
             */
            this.isParentLayout = false;
            this.onListeningScroll = this.onListeningScroll.bind(this);
        }
        /**
         * 滚动时，如果需要给 container 添加 padding，添加在顶部还是底部
         */
        get scrollPaddingPosition() {
            throw new Error('Must implement scrollPaddingPosition getter');
        }
        async onScrollTargetChange(oldValue, newValue) {
            const hasUpdated = this.hasUpdated;
            await this.scrollBehaviorDefinedController.whenDefined();
            // 旧元素移除 padding，新元素添加 padding
            if (hasUpdated) {
                this.setContainerPadding('remove', oldValue);
                this.setContainerPadding('add', newValue);
            }
            if (!this.scrollBehavior) {
                return;
            }
            const oldListening = this.getListening(oldValue);
            if (oldListening) {
                oldListening.removeEventListener('scroll', this.onListeningScroll);
            }
            const newListening = this.getListening(newValue);
            if (newListening) {
                this.updateScrollTop(newListening);
                newListening.addEventListener('scroll', this.onListeningScroll);
            }
        }
        async onScrollBehaviorChange() {
            await this.scrollBehaviorDefinedController.whenDefined();
            const listening = this.getListening(this.scrollTarget);
            if (!listening) {
                return;
            }
            if (this.scrollBehavior) {
                this.updateScrollTop(listening);
                listening.addEventListener('scroll', this.onListeningScroll);
            }
            else {
                listening.removeEventListener('scroll', this.onListeningScroll);
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.scrollBehaviorDefinedController.whenDefined().then(() => {
                this.isParentLayout = isNodeName(this.parentElement, 'mdui-layout');
                this.setContainerPadding('add', this.scrollTarget);
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.scrollBehaviorDefinedController.whenDefined().then(() => {
                this.setContainerPadding('remove', this.scrollTarget);
            });
        }
        /**
         * scrollBehavior 包含多个滚动行为，用空格分割
         * 用该方法判断指定滚动行为是否在 scrollBehavior 中
         * @param behavior 为数组时，只要其中一个行为在 scrollBehavior 中，即返回 `true`
         */
        hasScrollBehavior(behavior) {
            const behaviors = (this.scrollBehavior?.split(' ') ??
                []);
            if (Array.isArray(behavior)) {
                return !!behaviors.filter((v) => behavior.includes(v)).length;
            }
            else {
                return behaviors.includes(behavior);
            }
        }
        /**
         * 执行滚动事件，在滚动距离超过 scrollThreshold 时才会执行
         * Note: 父类可以按需实现该方法
         * @param isScrollingUp 是否向上滚动
         * @param scrollTop 距离 scrollTarget 顶部的距离
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        runScrollThreshold(isScrollingUp, scrollTop) {
            return;
        }
        /**
         * 执行滚动事件，会无视 scrollThreshold，始终会执行
         * @param isScrollingUp 是否向上滚动
         * @param scrollTop 距离 scrollTarget 顶部的距离
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        runScrollNoThreshold(isScrollingUp, scrollTop) {
            return;
        }
        /**
         * 更新滚动容器的 padding，避免内容被 navigation-bar 覆盖
         * @param action 新增、更新、移除 padding
         * @param scrollTarget 在该元素上添加、更新或移除 padding
         */
        setContainerPadding(action, scrollTarget) {
            const container = this.getContainer(scrollTarget);
            if (!container || this.isParentLayout) {
                return;
            }
            const position = this.scrollPaddingPosition;
            const propName = position === 'top' ? 'paddingTop' : 'paddingBottom';
            if (action === 'add' || action === 'update') {
                const propValue = ['fixed', 'absolute'].includes($(this).css('position'))
                    ? this.offsetHeight
                    : null;
                $(container).css({ [propName]: propValue });
                // 添加 padding 时，weakMap 中添加指定元素
                if (action === 'add' && propValue !== null) {
                    const options = weakMap.get(container) ?? { top: [], bottom: [] };
                    options[position].push(this);
                    weakMap.set(container, options);
                }
            }
            // 如果 weakMap 中指定元素的计数为 0，则移除 padding
            if (action === 'remove') {
                const options = weakMap.get(container);
                if (!options) {
                    return;
                }
                const index = options[position].indexOf(this);
                if (index > -1) {
                    options[position].splice(index, 1);
                    weakMap.set(container, options);
                }
                if (!options[position].length) {
                    $(container).css({ [propName]: null });
                }
            }
        }
        onListeningScroll() {
            const listening = this.getListening(this.scrollTarget);
            window.requestAnimationFrame(() => this.onScroll(listening));
        }
        /**
         * 滚动事件，这里过滤掉不符合条件的滚动
         */
        onScroll(listening) {
            const scrollTop = listening.scrollY ?? listening.scrollTop;
            // 无视 scrollThreshold 的回调
            if (this.lastScrollTopNoThreshold !== scrollTop) {
                this.runScrollNoThreshold(scrollTop < this.lastScrollTopNoThreshold, scrollTop);
                this.lastScrollTopNoThreshold = scrollTop;
            }
            // 滚动距离大于 scrollThreshold 时才执行的回调
            if (Math.abs(scrollTop - this.lastScrollTopThreshold) >
                (this.scrollThreshold || 0)) {
                this.runScrollThreshold(scrollTop < this.lastScrollTopThreshold, scrollTop);
                this.lastScrollTopThreshold = scrollTop;
            }
        }
        /**
         * 重新更新 lastScrollTopThreshold、lastScrollTopNoThreshold 的值
         * 用于在 scrollTarget、scrollBehavior 变更时，重新设置 lastScrollTopThreshold、lastScrollTopNoThreshold 的初始值
         */
        updateScrollTop(listening) {
            this.lastScrollTopThreshold = this.lastScrollTopNoThreshold =
                listening.scrollY ?? listening.scrollTop;
        }
        /**
         * 获取组件需要监听哪个元素的滚动状态
         */
        getListening(target) {
            return target ? $(target)[0] : window;
        }
        /**
         * 获取组件在哪个容器内滚动
         */
        getContainer(target) {
            return target ? $(target)[0] : document.body;
        }
    }
    __decorate([
        property({ attribute: 'scroll-target' })
    ], ScrollBehaviorMixinClass.prototype, "scrollTarget", void 0);
    __decorate([
        property({ reflect: true, attribute: 'scroll-behavior' })
    ], ScrollBehaviorMixinClass.prototype, "scrollBehavior", void 0);
    __decorate([
        property({ type: Number, reflect: true, attribute: 'scroll-threshold' })
    ], ScrollBehaviorMixinClass.prototype, "scrollThreshold", void 0);
    __decorate([
        watch('scrollTarget')
    ], ScrollBehaviorMixinClass.prototype, "onScrollTargetChange", null);
    __decorate([
        watch('scrollBehavior')
    ], ScrollBehaviorMixinClass.prototype, "onScrollBehaviorChange", null);
    return ScrollBehaviorMixinClass;
};
