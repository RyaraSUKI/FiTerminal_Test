import { css } from 'lit';
export const style = css `:host{--shape-corner:var(--mdui-shape-corner-small);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);height:2rem;background-color:rgb(var(--mdui-color-surface));border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.button{padding-right:.4375rem;padding-left:.4375rem}:host([variant=input]) .button{padding-right:.1875rem;padding-left:.1875rem}:host([selected]:not([selected=false i])) .button{padding-right:.5rem;padding-left:.5rem}:host([selected][variant=input]:not([selected=false i])) .button{padding-right:.25rem;padding-left:.25rem}:host([elevated]:not([elevated=false i])) .button{padding-right:.5rem;padding-left:.5rem}:host([variant=assist]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([elevated]:not([elevated=false i])){border-width:0;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([selected]:not([selected=false i])){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));border-width:0;--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]:not([disabled=false i])),:host([loading]:not([loading=false i])){cursor:default;pointer-events:none}:host([disabled]:not([disabled=false i])){border-color:rgba(var(--mdui-color-on-surface),12%);color:rgba(var(--mdui-color-on-surface),38%);box-shadow:var(--mdui-elevation-level0)}:host([disabled][elevated]:not([disabled=false i],[elevated=false i])),:host([disabled][selected]:not([disabled=false i],[selected=false i])){background-color:rgba(var(--mdui-color-on-surface),12%)}:host([selected][hover]:not([selected=false i])){box-shadow:var(--mdui-elevation-level1)}:host([elevated][hover]:not([elevated=false i])){color:rgb(var(--mdui-color-on-secondary-container));box-shadow:var(--mdui-elevation-level2)}:host([variant=filter][hover]),:host([variant=input][hover]),:host([variant=suggestion][hover]){color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=filter][focus-visible]),:host([variant=input][focus-visible]),:host([variant=suggestion][focus-visible]){border-color:rgb(var(--mdui-color-on-surface-variant))}:host([dragged]),:host([dragged][hover]){box-shadow:var(--mdui-elevation-level4)}.button{overflow:visible}.label{display:inline-flex;padding-right:.5rem;padding-left:.5rem}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em;color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=assist]) .end-icon,:host([variant=assist]) .icon,:host([variant=assist]) .selected-icon{color:rgb(var(--mdui-color-primary))}:host([selected]:not([selected=false i])) .end-icon,:host([selected]:not([selected=false i])) .icon,:host([selected]:not([selected=false i])) .selected-icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([disabled]:not([disabled=false i])) .end-icon,:host([disabled]:not([disabled=false i])) .icon,:host([disabled]:not([disabled=false i])) .selected-icon{opacity:.38;color:rgb(var(--mdui-color-on-surface))}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}:host([variant=input]) .has-icon .icon,:host([variant=input]) .has-icon .selected-icon,:host([variant=input]) .has-icon mdui-circular-progress{margin-left:.25rem}:host([variant=input]) .has-end-icon .end-icon{margin-right:.25rem}mdui-circular-progress{display:inline-flex;width:1.125rem;height:1.125rem}:host([disabled]:not([disabled=false i])) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}::slotted(mdui-avatar[slot=end-icon]),::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){width:1.5rem;height:1.5rem}:host([disabled]:not([disabled=false i])) ::slotted(mdui-avatar[slot=end-icon]),:host([disabled]:not([disabled=false i])) ::slotted(mdui-avatar[slot=icon]),:host([disabled]:not([disabled=false i])) ::slotted(mdui-avatar[slot=selected-icon]){opacity:.38}::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){margin-left:-.25rem;margin-right:-.125rem}::slotted(mdui-avatar[slot=end-icon]){margin-right:-.25rem;margin-left:-.125rem}.delete-icon{display:inline-flex;font-size:1.28571429em;transition:background-color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);border-radius:var(--mdui-shape-corner-full);margin-right:-.25rem;margin-left:-.25rem;padding:.25rem;color:rgb(var(--mdui-color-on-surface-variant))}.delete-icon:hover{background-color:rgba(var(--mdui-color-on-surface-variant),12%)}.has-end-icon .delete-icon{margin-left:.25rem}:host([variant=assiat]) .delete-icon{color:rgb(var(--mdui-color-primary))}:host([variant=input]) .delete-icon{margin-right:.0625rem}:host([disabled]:not([disabled=false i])) .delete-icon{color:rgba(var(--mdui-color-on-surface),38%)}.delete-icon .i,::slotted([slot=delete-icon]){font-size:inherit}::slotted(mdui-avatar[slot=delete-icon]){width:1.125rem;height:1.125rem}`;