import type { Meta, StoryObj } from '@storybook/vue3'

import DropZone from './DropZone.vue'

const meta = {
  title: 'Design System/Form/DropZone',
  component: DropZone,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:modelValue': { action: 'onUpdate:modelValue' }
  }
} satisfies Meta<typeof DropZone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }

}

export const WithTitle: Story = {
  args: {
    title: 'My title custom'
  }
}
export const WithCustomFormat: Story = {
  args: {
    formats: ['.jpg', '.png', '.jpeg']
  }
}
