import type { Meta, StoryObj } from '@storybook/vue3'

import DropZone from './DropZone.vue'

const meta = {
  title: 'Design System/Form/DropZone',
  component: DropZone,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:dropFile': { action: 'update:dropFile' }
  }
} satisfies Meta<typeof DropZone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const WithTitle: Story = {
  args: {
    title: 'My title custom'
  }
}
export const WithCustomFormat: Story = {
  args: {
    formats: ['image/svg+xml', 'image/png', 'image/jpeg'],
    multiple: true
  }
}
export const Multiple: Story = {
  args: {
    multiple: true
  }
}
