import { css } from 'lit';
export const topAppBarTitleStyle = css `:host{display:block;width:100%;flex-shrink:initial!important;overflow:hidden;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-title-large-size);font-weight:var(--mdui-typescale-title-large-weight);letter-spacing:var(--mdui-typescale-title-large-tracking);line-height:var(--mdui-typescale-title-large-line-height);line-height:2.5rem}.label{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:1;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label.variant-center-aligned{text-align:center}.label.variant-large:not(.shrink),.label.variant-medium:not(.shrink){opacity:0}.label.variant-large.shrink,.label.variant-medium.shrink{transition-delay:var(--mdui-motion-duration-short2)}.label-large{display:none;position:absolute;width:100%;left:0;margin-right:0;padding:0 1rem;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label-large.variant-large,.label-large.variant-medium{display:block}.label-large.variant-medium{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;bottom:.75rem;font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.label-large.variant-large{display:-webkit-box;overflow:hidden;white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2;bottom:1.25rem;font-size:var(--mdui-typescale-headline-medium-size);font-weight:var(--mdui-typescale-headline-medium-weight);letter-spacing:var(--mdui-typescale-headline-medium-tracking);line-height:var(--mdui-typescale-headline-medium-line-height)}.label-large.variant-large:not(.shrink),.label-large.variant-medium:not(.shrink){opacity:1;transition-delay:var(--mdui-motion-duration-short2)}.label-large.variant-large.shrink,.label-large.variant-medium.shrink{opacity:0;z-index:-1}`;