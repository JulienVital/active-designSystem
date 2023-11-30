import Tooltip from 'primevue/tooltip'

function addDelayOnTooltip(options: any) {
  options.value = {
    value: options.value,
    hideDelay: 300,
    showDelay: 2000
  }
}

const ApTooltip = {
  ...Tooltip,
  beforeMount(el: any, options: any, vnode: any, prevVnode: any) {
    addDelayOnTooltip(options)
    Tooltip.beforeMount?.(el, options, vnode, prevVnode)
  },
  updated(el: any, options: any, vnode: any, prevVnode: any) {
    addDelayOnTooltip(options)
    Tooltip.updated?.(el, options, vnode, prevVnode)
  },
  unmounted(el: any, options: any, vnode: any, prevVnode: any) {
    addDelayOnTooltip(options)
    Tooltip.unmounted?.(el, options, vnode, prevVnode)
  }
}

export default ApTooltip
