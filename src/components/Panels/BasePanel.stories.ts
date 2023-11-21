import type { Meta, StoryObj } from '@storybook/vue3'

import BasePanel from './ApBasePanel.vue'
import DropZone from '../Inputs/DropZone/ApDropZone.vue'

const meta = {
  title: 'Design System/Panel/BasePanel',
  component: BasePanel,
  tags: ['autodocs'],
  render: (args) => ({
    components: { BasePanel, DropZone },
    setup() {
      return { args }
    },
    template: `
      <BasePanel v-bind="args" style="width:250px;">
        <DropZone/>
      </BasePanel>
    `
  }),
  argTypes: {
    onClose: { action: 'close' }
  }
} satisfies Meta<typeof BasePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
export const Named: Story = {
  args: {
    title: 'My panel'
  }
}
export const Closable: Story = {
  args: {
    closable: true
  }
}

export const Draggable: Story = {
  args: {
    draggable: true
  }
}
