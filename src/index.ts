import '@/assets/main.css'
import InputNumber from '@/components/Inputs/InputNumber/InputNumber.vue'
import InputText from '@/components/Inputs/InputText/InputText.vue'
import InputSelect from '@/components/Inputs/InputSelect/InputSelect.vue'
import DropZone from '@/components/Inputs/DropZone/DropZone.vue'
import BasePanel from '@/components/Panels/BasePanel.vue'
export { InputNumber, InputText, InputSelect, DropZone, BasePanel }
export {
  InputNumber as ApInputNumber,
  InputText as ApInputText,
  InputSelect as ApInputSelect,
  DropZone as ApDropZone,
  BasePanel as ApBasePanel
}

export function ActPubResolver() {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (name.substring(0, 2) === 'Ap') return { name, from: 'active-designsystem' }
    }
  }
}
