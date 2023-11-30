import '@/assets/main.css'
import ApInputNumber from '@/components/Inputs/InputNumber/ApInputNumber.vue'
import ApInputText from '@/components/Inputs/InputText/ApInputText.vue'
import ApInputSelect from '@/components/Inputs/InputSelect/ApInputSelect.vue'
import ApDropZone from '@/components/Inputs/DropZone/ApDropZone.vue'
import ApBasePanel from '@/components/Panels/ApBasePanel.vue'
import PrimeVue from 'primevue/config'
import ApTooltip from './directives/ApTooltip/ApTooltip'
import { DomHandler } from "primevue/utils";


export { ApInputNumber, ApInputText, ApInputSelect, ApDropZone, ApBasePanel }

export {
  ApInputNumber as InputNumber,
  ApInputText as InputText,
  ApInputSelect as InputSelect,
  ApDropZone as DropZone,
  ApBasePanel as BasePanel
}

export function ActPubResolver() {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (name.substring(0, 2) === 'Ap') {
        return { name, from: 'active-designsystem' }
      }
    }
  }
}

function getTarget(el:any) {
  return DomHandler.hasClass(el, "p-inputwrapper")
    ? DomHandler.findSingle(el, "input")
    : el;
}
export const config = {
  install: (app: any) => {
    app.use(PrimeVue,{
      zIndex: {
        tooltip: 100000      
      }
    }), app.directive("ApTooltip", {
      mounted(el:any) {
        const target = getTarget(el);
        target.$_ptooltipZIndex ??=
          app.config.globalProperties.$primevue.config.zIndex.tooltip;
      },
      ...ApTooltip,
    });
  }
}
