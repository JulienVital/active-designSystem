import type { Meta, StoryObj } from '@storybook/vue3'
import InputNumber from '@/components/Inputs/InputNumber/ApInputNumber.vue'
import InputText from '@/components/Inputs/InputText/ApInputText.vue'

const meta = {
  title: 'Directives/ApTooltip'
}

export default meta
type Story = StoryObj

export const Input: Story = {
  tags: ['isHidden'],
  render: (args) => ({
    components: { InputNumber },
    setup() {
      return { args }
    },
    template: `
      <InputNumber  v-ApTooltip="'Tooltip inputNumber'">
      </InputNumber>
    `
  })
}
export const InputTextStory: Story = {
  tags: ['isHidden'],
  render: (args) => ({
    components: { InputText },
    setup() {
      return { args }
    },
    template: `
      <InputText  v-ApTooltip="'Tooltip inputNumber'">
      </InputText>
    `
  })
}
