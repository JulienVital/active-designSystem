import '@/assets/main.css'
import ApInputNumber from '@/components/Inputs/InputNumber/ApInputNumber.vue'
import ApInputText from '@/components/Inputs/InputText/ApInputText.vue'
import ApInputSelect from '@/components/Inputs/InputSelect/ApInputSelect.vue'
import ApDropZone from '@/components/Inputs/DropZone/ApDropZone.vue'
import ApBasePanel from '@/components/Panels/ApBasePanel.vue'
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
        return { name: name.replace(/-/, ''), from: 'active-designsystem' }
      }
    }
  }
}
