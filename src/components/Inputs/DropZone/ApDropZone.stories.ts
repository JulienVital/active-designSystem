import type { Meta, StoryObj } from '@storybook/vue3'

import ApDropZone from './ApDropZone.vue'

const meta = {
  title: 'Design System/Form/ApDropZone',
  component: ApDropZone,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:dropFile': { action: 'update:dropFile' }
  }
} satisfies Meta<typeof ApDropZone>

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
