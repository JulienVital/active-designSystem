import '@/assets/main.css'
import ApInputNumber from '@/components/Inputs/InputNumber/ApInputNumber.vue'
import ApInputText from '@/components/Inputs/InputText/ApInputText.vue'
import ApInputSelect from '@/components/Inputs/InputSelect/ApInputSelect.vue'
import ApDropZone from '@/components/Inputs/DropZone/ApDropZone.vue'
import ApBasePanel from '@/components/Panels/BasePanel/ApBasePanel.vue'
import PrimeVue from 'primevue/config'
import ApTooltip from './directives/ApTooltip/ApTooltip'
import TabPanel  from 'primevue/tabpanel';
import ApTabView  from '@/components/Panels/Tabview/ApTabView.vue';

export { ApInputNumber, ApInputText, ApInputSelect, ApDropZone, ApBasePanel, ApTabView, TabPanel as ApTabPanel }

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

export const config = {
  install: (app: any) => {
    app.use(PrimeVue,{
      zIndex: {
        tooltip: 100000      
      }
    }), app.directive('ApTooltip', ApTooltip)
  }
}
